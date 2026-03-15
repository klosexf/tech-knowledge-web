/**
 * 事件处理模块 - 处理所有用户交互事件
 * @version 2.0.0
 */
var AppEvents = (function() {
    'use strict';
    
    // 标记事件监听器是否已设置
    var listenersSetup = false;
    
    /**
     * 设置所有事件监听器
     */
    function setupEventListeners() {
        if (listenersSetup) {
            console.log('[AppEvents] 事件监听器已设置，跳过');
            return;
        }
        
        console.log('[AppEvents] 开始设置事件监听器');
        
        try {
            var elements = AppState.getElements();
            
            // 窗口滚动事件
            window.addEventListener('scroll', handleScroll);
            console.log('[AppEvents] 窗口滚动事件已绑定');
            
            // 导航菜单切换
            if (elements.navToggle) {
                elements.navToggle.addEventListener('click', toggleNav);
                console.log('[AppEvents] 导航菜单切换事件已绑定');
            }
            
            // 导航链接点击事件 - 关键修复：直接绑定到首页按钮
            bindNavLinks();
            
            // 搜索功能
            if (elements.searchInput) {
                elements.searchInput.addEventListener('input', debounce(AppSearch.handleSearch, 300));
            }
            if (elements.searchBtn) {
                elements.searchBtn.addEventListener('click', AppSearch.handleSearch);
            }
            if (elements.closeSearch) {
                elements.closeSearch.addEventListener('click', AppSearch.closeSearch);
            }
            
            // 难度筛选
            if (elements.difficultyFilter) {
                elements.difficultyFilter.addEventListener('change', filterByDifficulty);
            }
            
            // 返回按钮
            if (elements.backBtn) {
                elements.backBtn.addEventListener('click', AppUI.hideKnowledgeDetail);
            }
            
            // 返回分类列表
            if (elements.backToCategories) {
                elements.backToCategories.addEventListener('click', backToCategoryList);
            }
            
            // 收藏和完成按钮
            if (elements.favoriteBtn) {
                elements.favoriteBtn.addEventListener('click', AppFavorites.toggleFavorite);
            }
            if (elements.completeBtn) {
                elements.completeBtn.addEventListener('click', AppFavorites.markComplete);
            }
            
            // 标签切换
            document.querySelectorAll('.tab-btn').forEach(function(btn) {
                btn.addEventListener('click', switchTab);
            });
            
            // 代码编辑器
            if (elements.runCode) {
                elements.runCode.addEventListener('click', AppCodeEditor.executeCode);
            }
            if (elements.clearCode) {
                elements.clearCode.addEventListener('click', AppCodeEditor.clearCode);
            }
            if (elements.codeInput) {
                elements.codeInput.addEventListener('input', AppCodeEditor.updateLineNumbers);
                elements.codeInput.addEventListener('scroll', AppCodeEditor.syncScroll);
            }
            
            // 测验按钮
            if (elements.prevQuiz) {
                elements.prevQuiz.addEventListener('click', AppQuiz.prevQuestion);
            }
            if (elements.nextQuiz) {
                elements.nextQuiz.addEventListener('click', AppQuiz.nextQuestion);
            }
            if (elements.retryQuiz) {
                elements.retryQuiz.addEventListener('click', AppQuiz.retryQuiz);
            }
            
            // 模态框按钮
            if (elements.modalClose) {
                elements.modalClose.addEventListener('click', AppModal.closeModal);
            }
            if (elements.modalNext) {
                elements.modalNext.addEventListener('click', AppModal.goToNextKnowledge);
            }
            
            // 返回顶部
            if (elements.backToTop) {
                elements.backToTop.addEventListener('click', scrollToTop);
            }
            
            // 代码复制
            document.addEventListener('click', handleCopyCode);
            
            listenersSetup = true;
            console.log('[AppEvents] 事件监听器设置完成');
            
        } catch (error) {
            console.error('[AppEvents] 设置事件监听器失败:', error);
            console.error('[AppEvents] 错误堆栈:', error.stack);
        }
    }
    
    /**
     * 绑定导航链接事件 - 关键函数
     */
    function bindNavLinks() {
        console.log('[AppEvents] 开始绑定导航链接事件');
        
        var navLinks = document.querySelectorAll('.nav-link');
        console.log('[AppEvents] 找到导航链接数量:', navLinks.length);
        
        if (navLinks.length === 0) {
            console.error('[AppEvents] 未找到导航链接！');
            return;
        }
        
        navLinks.forEach(function(link, index) {
            var href = link.getAttribute('href');
            console.log('[AppEvents] 绑定导航链接 #' + index + ':', href);
            
            // 移除旧的事件监听器（如果有）
            link.removeEventListener('click', handleNavClick);
            
            // 添加新的事件监听器
            link.addEventListener('click', function(e) {
                console.log('[AppEvents] 导航链接被点击:', href);
                handleNavClick(e);
            });
        });
        
        console.log('[AppEvents] 导航链接事件绑定完成');
    }
    
    /**
     * 处理窗口滚动
     */
    function handleScroll() {
        var elements = AppState.getElements();
        var scrollY = window.scrollY;
        
        if (scrollY > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
        
        if (scrollY > 500) {
            elements.backToTop.classList.add('visible');
        } else {
            elements.backToTop.classList.remove('visible');
        }
    }
    
    /**
     * 切换导航菜单
     */
    function toggleNav() {
        var elements = AppState.getElements();
        elements.navToggle.classList.toggle('active');
        elements.navMenu.classList.toggle('active');
    }
    
    /**
     * 处理导航链接点击 - 核心函数
     */
    function handleNavClick(e) {
        console.log('[handleNavClick] ================================');
        console.log('[handleNavClick] 事件对象:', e);
        console.log('[handleNavClick] 事件目标:', e.target);
        
        var href = e.target.getAttribute('href');
        console.log('[handleNavClick] 点击的链接 href:', href);
        
        // 更新导航链接激活状态
        document.querySelectorAll('.nav-link').forEach(function(l) {
            l.classList.remove('active');
        });
        e.target.classList.add('active');
        
        // 处理首页按钮点击
        if (href === '#home') {
            console.log('[handleNavClick] 检测到首页按钮点击');
            
            // 阻止默认行为
            e.preventDefault();
            e.stopPropagation();
            
            console.log('[handleNavClick] 已阻止默认行为和事件冒泡');
            
            // 重置到首页状态
            if (typeof AppInit !== 'undefined' && AppInit.resetToHomePage) {
                console.log('[handleNavClick] 调用 AppInit.resetToHomePage()');
                AppInit.resetToHomePage();
            } else {
                console.error('[handleNavClick] AppInit.resetToHomePage 未定义！');
            }
            
            // 重新渲染分类
            if (typeof AppUI !== 'undefined' && AppUI.renderCategories) {
                console.log('[handleNavClick] 调用 AppUI.renderCategories()');
                AppUI.renderCategories();
            } else {
                console.error('[handleNavClick] AppUI.renderCategories 未定义！');
            }
            
            // 滚动到页面顶部
            console.log('[handleNavClick] 准备滚动到页面顶部');
            setTimeout(function() {
                console.log('[handleNavClick] 执行 window.scrollTo(0, 0)');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                console.log('[handleNavClick] 滚动命令已执行');
            }, 100);
            
            console.log('[handleNavClick] 首页按钮处理完成');
        }
        
        // 移动端关闭菜单
        if (window.innerWidth <= 768) {
            toggleNav();
        }
        
        console.log('[handleNavClick] ================================');
    }
    
    /**
     * 按难度筛选
     */
    function filterByDifficulty() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var difficulty = elements.difficultyFilter.value;
        state.currentDifficulty = difficulty;
        var activeCategory = document.querySelector('.category-card.active');
        var categoryId = activeCategory ? activeCategory.dataset.categoryId : null;
        
        AppUI.renderKnowledgeCards(categoryId, difficulty);
    }
    
    /**
     * 返回分类列表
     */
    function backToCategoryList() {
        var elements = AppState.getElements();
        elements.categoriesTitle.textContent = '技术分类';
        elements.backToCategories.style.display = 'none';
        elements.difficultyFilter.value = 'all';
        
        AppUI.renderCategories();
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
    }
    
    /**
     * 切换标签页
     */
    function switchTab(e) {
        var tab = e.target.dataset.tab;
        
        document.querySelectorAll('.tab-btn').forEach(function(btn) {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(function(content) {
            content.classList.remove('active');
        });
        document.getElementById(tab + 'Tab').classList.add('active');
    }
    
    /**
     * 滚动到顶部
     */
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    /**
     * 处理代码复制
     */
    function handleCopyCode(e) {
        if (e.target.classList.contains('copy-btn')) {
            var codeBlock = e.target.closest('.code-block');
            var code = codeBlock.querySelector('code').textContent;
            
            navigator.clipboard.writeText(code).then(function() {
                e.target.textContent = '已复制';
                e.target.classList.add('copied');
                setTimeout(function() {
                    e.target.textContent = '复制';
                    e.target.classList.remove('copied');
                }, 2000);
            });
        }
    }
    
    /**
     * 防抖函数
     */
    function debounce(func, wait) {
        var timeout;
        return function executedFunction() {
            var args = arguments;
            var later = function() {
                clearTimeout(timeout);
                func.apply(null, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 公开 API
    return {
        setupEventListeners: setupEventListeners,
        bindNavLinks: bindNavLinks,
        handleScroll: handleScroll,
        toggleNav: toggleNav,
        handleNavClick: handleNavClick,
        filterByDifficulty: filterByDifficulty,
        backToCategoryList: backToCategoryList,
        switchTab: switchTab,
        scrollToTop: scrollToTop,
        handleCopyCode: handleCopyCode,
        debounce: debounce
    };
})();

// 全局暴露
if (typeof window !== 'undefined') {
    window.AppEvents = AppEvents;
}
