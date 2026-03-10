(function() {
    'use strict';
    
    // 获取全局 knowledgeData 对象（在 init 函数中检查）
    let knowledgeData = window.knowledgeData;
    
    const state = {
        favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
        completed: JSON.parse(localStorage.getItem('completed') || '[]'),
        recentViewed: JSON.parse(localStorage.getItem('recentViewed') || '[]'),
        currentKnowledge: null,
        currentQuizIndex: 0,
        quizAnswers: [],
        quizScore: 0
    };
    
    const elements = {
        navbar: document.getElementById('navbar'),
        navToggle: document.getElementById('navToggle'),
        navMenu: document.getElementById('navMenu'),
        searchInput: document.getElementById('searchInput'),
        searchBtn: document.getElementById('searchBtn'),
        searchResults: document.getElementById('searchResults'),
        searchResultsList: document.getElementById('searchResultsList'),
        closeSearch: document.getElementById('closeSearch'),
        categoryGrid: document.getElementById('categoryGrid'),
        difficultyFilter: document.getElementById('difficultyFilter'),
        categoriesTitle: document.getElementById('categoriesTitle'),
        backToCategories: document.getElementById('backToCategories'),
        knowledgeDetail: document.getElementById('knowledgeDetail'),
        backBtn: document.getElementById('backBtn'),
        detailCategory: document.getElementById('detailCategory'),
        detailDifficulty: document.getElementById('detailDifficulty'),
        detailTitle: document.getElementById('detailTitle'),
        detailSummary: document.getElementById('detailSummary'),
        detailContent: document.getElementById('detailContent'),
        favoriteBtn: document.getElementById('favoriteBtn'),
        completeBtn: document.getElementById('completeBtn'),
        nextKnowledge: document.getElementById('nextKnowledge'),
        nextKnowledgeLink: document.getElementById('nextKnowledgeLink'),
        progressRing: document.getElementById('progressRing'),
        progressPercent: document.getElementById('progressPercent'),
        completedCount: document.getElementById('completedCount'),
        totalCount: document.getElementById('totalCount'),
        favoritesList: document.getElementById('favoritesList'),
        recentList: document.getElementById('recentList'),
        codeInput: document.getElementById('codeInput'),
        codeOutput: document.getElementById('codeOutput'),
        lineNumbers: document.getElementById('lineNumbers'),
        runCode: document.getElementById('runCode'),
        clearCode: document.getElementById('clearCode'),
        quizContainer: document.getElementById('quizContainer'),
        quizResult: document.getElementById('quizResult'),
        quizContent: document.getElementById('quizContent'),
        quizProgress: document.getElementById('quizProgress'),
        prevQuiz: document.getElementById('prevQuiz'),
        nextQuiz: document.getElementById('nextQuiz'),
        retryQuiz: document.getElementById('retryQuiz'),
        scoreNumber: document.getElementById('scoreNumber'),
        resultText: document.getElementById('resultText'),
        completeModal: document.getElementById('completeModal'),
        completeMessage: document.getElementById('completeMessage'),
        modalClose: document.getElementById('modalClose'),
        modalNext: document.getElementById('modalNext'),
        backToTop: document.getElementById('backToTop')
    };
    
    function init() {
        // 确保 knowledgeData 已加载
        if (!window.knowledgeData) {
            console.error('错误: knowledgeData 未定义。请确保 data/index.js 在 script.js 之前加载。');
            return;
        }
        
        // 更新 knowledgeData 引用
        knowledgeData = window.knowledgeData;
        
        // 重置页面状态，确保刷新后显示技术分类页面
        resetToHomePage();
        
        renderCategories();
        updateProgress();
        updateFavoritesList();
        updateRecentList();
        setupEventListeners();
        updateLineNumbers();
        renderQuiz();
    }
    
    function resetToHomePage() {
        elements.knowledgeDetail.classList.remove('active');
        
        document.querySelector('.categories').style.display = 'block';
        document.querySelector('.learning-path').style.display = 'block';
        
        elements.categoriesTitle.textContent = '技术分类';
        elements.backToCategories.style.display = 'none';
        elements.difficultyFilter.value = 'all';
        
        state.currentKnowledge = null;
    }
    
    function setupEventListeners() {
        window.addEventListener('scroll', handleScroll);
        
        elements.navToggle.addEventListener('click', toggleNav);
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
        
        elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
        elements.searchBtn.addEventListener('click', handleSearch);
        elements.closeSearch.addEventListener('click', closeSearch);
        
        elements.difficultyFilter.addEventListener('change', filterByDifficulty);
        
        elements.backBtn.addEventListener('click', hideKnowledgeDetail);
        
        elements.backToCategories.addEventListener('click', backToCategoryList);
        
        elements.favoriteBtn.addEventListener('click', toggleFavorite);
        elements.completeBtn.addEventListener('click', markComplete);
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', switchTab);
        });
        
        elements.runCode.addEventListener('click', executeCode);
        elements.clearCode.addEventListener('click', clearCode);
        elements.codeInput.addEventListener('input', updateLineNumbers);
        elements.codeInput.addEventListener('scroll', syncScroll);
        
        elements.prevQuiz.addEventListener('click', prevQuestion);
        elements.nextQuiz.addEventListener('click', nextQuestion);
        elements.retryQuiz.addEventListener('click', retryQuiz);
        
        elements.modalClose.addEventListener('click', closeModal);
        elements.modalNext.addEventListener('click', goToNextKnowledge);
        
        elements.backToTop.addEventListener('click', scrollToTop);
        
        document.addEventListener('click', handleCopyCode);
    }
    
    function handleScroll() {
        const scrollY = window.scrollY;
        
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
    
    function toggleNav() {
        elements.navToggle.classList.toggle('active');
        elements.navMenu.classList.toggle('active');
    }
    
    function handleNavClick(e) {
        const href = e.target.getAttribute('href');
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        
        if (href === '#home') {
            e.preventDefault();
            resetToHomePage();
            renderCategories();
            document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
        }
        
        if (window.innerWidth <= 768) {
            toggleNav();
        }
    }
    
    function renderCategories() {
        const grid = elements.categoryGrid;
        grid.innerHTML = '';
        
        knowledgeData.categories.forEach(category => {
            const categoryKnowledge = knowledgeData.knowledge.filter(k => k.categoryId === category.id);
            const completedInCategory = categoryKnowledge.filter(k => state.completed.includes(k.id)).length;
            
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;
            card.innerHTML = `
                <div class="category-header">
                    <div class="category-icon">${category.icon}</div>
                    <div>
                        <h3 class="category-title">${category.name}</h3>
                        <span class="category-count">${completedInCategory}/${categoryKnowledge.length} 已完成</span>
                    </div>
                </div>
                <p class="category-desc">${category.description}</p>
                <div class="category-topics">
                    ${category.topics.slice(0, 4).map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                </div>
            `;
            
            card.addEventListener('click', () => showCategoryDetail(category.id));
            grid.appendChild(card);
        });
    }
    
    function renderKnowledgeCards(categoryId = null, difficulty = 'all') {
        let knowledge = knowledgeData.knowledge;
        
        if (categoryId) {
            knowledge = knowledge.filter(k => k.categoryId === categoryId);
        }
        
        if (difficulty !== 'all') {
            knowledge = knowledge.filter(k => k.difficulty === difficulty);
        }
        
        const grid = elements.categoryGrid;
        grid.innerHTML = '';
        
        if (knowledge.length === 0) {
            grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">暂无匹配的知识点</p>';
            return;
        }
        
        knowledge.forEach(item => {
            const card = document.createElement('div');
            card.className = 'knowledge-card';
            card.dataset.id = item.id;
            
            const isCompleted = state.completed.includes(item.id);
            const isFavorite = state.favorites.includes(item.id);
            
            card.innerHTML = `
                <div class="knowledge-card-header">
                    <h4 class="knowledge-card-title">${item.title}</h4>
                    <span class="knowledge-card-difficulty difficulty-${item.difficulty}">
                        ${item.difficulty === 'beginner' ? '入门' : item.difficulty === 'intermediate' ? '进阶' : '高级'}
                    </span>
                </div>
                <p class="knowledge-card-desc">${item.summary}</p>
                <div class="knowledge-card-footer">
                    <span class="knowledge-card-category">${getCategoryName(item.categoryId)}</span>
                    <span class="knowledge-card-status ${isCompleted ? 'completed' : ''}">
                        ${isCompleted ? '✓ 已完成' : isFavorite ? '♥ 已收藏' : ''}
                    </span>
                </div>
            `;
            
            card.addEventListener('click', () => showKnowledgeDetail(item.id));
            grid.appendChild(card);
        });
    }
    
    function showCategoryDetail(categoryId) {
        const category = knowledgeData.categories.find(c => c.id === categoryId);
        if (!category) return;
        
        elements.categoriesTitle.textContent = category.name;
        elements.backToCategories.style.display = 'flex';
        elements.difficultyFilter.value = 'all';
        renderKnowledgeCards(categoryId, 'all');
        
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
    }
    
    function filterByDifficulty() {
        const difficulty = elements.difficultyFilter.value;
        const activeCategory = document.querySelector('.category-card.active');
        const categoryId = activeCategory ? activeCategory.dataset.categoryId : null;
        
        renderKnowledgeCards(categoryId, difficulty);
    }
    
    function showKnowledgeDetail(id) {
        const knowledge = knowledgeData.knowledge.find(k => k.id === id);
        if (!knowledge) return;
        
        state.currentKnowledge = knowledge;
        addToRecent(id);
        
        const category = knowledgeData.categories.find(c => c.id === knowledge.categoryId);
        
        elements.detailCategory.textContent = category ? category.name : '';
        elements.detailDifficulty.textContent = knowledge.difficulty === 'beginner' ? '入门级' : 
                                                 knowledge.difficulty === 'intermediate' ? '进阶级' : '高级';
        elements.detailTitle.textContent = knowledge.title;
        elements.detailSummary.textContent = knowledge.summary;
        
        // 渲染内容，包含白话版和技术版切换
        renderKnowledgeContent(knowledge);
        
        updateFavoriteButton();
        updateCompleteButton();
        updateNextKnowledge();
        
        document.querySelector('.categories').style.display = 'none';
        document.querySelector('.learning-path').style.display = 'none';
        elements.knowledgeDetail.classList.add('active');
        
        elements.knowledgeDetail.scrollIntoView({ behavior: 'smooth' });
        
        if (typeof window.startCodeConceptsDemo === 'function') {
            setTimeout(() => window.startCodeConceptsDemo(), 100);
        }
    }
    
    // 渲染知识点内容（白话版/技术版切换）
    function renderKnowledgeContent(knowledge) {
        let contentHTML = '';
        
        // 如果有技术版内容，添加切换按钮
        if (knowledge.technicalContent) {
            contentHTML = `
                <div class="version-toggle">
                    <button class="version-btn active" data-version="simple">📖 白话版</button>
                    <button class="version-btn" data-version="technical">🔬 技术版</button>
                </div>
                
                <div class="content-version active" id="simpleVersion">
                    ${knowledge.content}
                </div>
                
                <div class="content-version" id="technicalVersion">
                    <div class="technical-section">
                        ${knowledge.technicalContent.principle || ''}
                        ${knowledge.technicalContent.role || ''}
                        ${knowledge.technicalContent.businessScenario || ''}
                        ${knowledge.technicalContent.pmDevScenario || ''}
                    </div>
                </div>
            `;
        } else {
            // 没有技术版内容，只显示白话版
            contentHTML = knowledge.content;
        }
        
        elements.detailContent.innerHTML = contentHTML;
        
        // 绑定版本切换事件
        if (knowledge.technicalContent) {
            document.querySelectorAll('.version-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const version = this.dataset.version;
                    switchContentVersion(version);
                });
            });
        }
    }
    
    // 切换内容版本
    function switchContentVersion(version) {
        // 更新按钮状态
        document.querySelectorAll('.version-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.version === version);
        });
        
        // 更新内容显示
        document.querySelectorAll('.content-version').forEach(content => {
            content.classList.remove('active');
        });
        
        if (version === 'simple') {
            document.getElementById('simpleVersion').classList.add('active');
        } else {
            document.getElementById('technicalVersion').classList.add('active');
        }
    }
    
    function hideKnowledgeDetail() {
        elements.knowledgeDetail.classList.remove('active');
        document.querySelector('.categories').style.display = 'block';
        document.querySelector('.learning-path').style.display = 'block';
        
        renderCategories();
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
    }
    
    function backToCategoryList() {
        elements.categoriesTitle.textContent = '技术分类';
        elements.backToCategories.style.display = 'none';
        elements.difficultyFilter.value = 'all';
        
        renderCategories();
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
    }
    
    function toggleFavorite() {
        if (!state.currentKnowledge) return;
        
        const id = state.currentKnowledge.id;
        const index = state.favorites.indexOf(id);
        
        if (index === -1) {
            state.favorites.push(id);
        } else {
            state.favorites.splice(index, 1);
        }
        
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
        updateFavoriteButton();
        updateFavoritesList();
    }
    
    function updateFavoriteButton() {
        if (!state.currentKnowledge) return;
        
        const isFavorite = state.favorites.includes(state.currentKnowledge.id);
        elements.favoriteBtn.classList.toggle('active', isFavorite);
        elements.favoriteBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            ${isFavorite ? '已收藏' : '收藏'}
        `;
    }
    
    function markComplete() {
        if (!state.currentKnowledge) return;
        
        const id = state.currentKnowledge.id;
        if (state.completed.includes(id)) return;
        
        state.completed.push(id);
        localStorage.setItem('completed', JSON.stringify(state.completed));
        
        updateCompleteButton();
        updateProgress();
        
        elements.completeMessage.textContent = `你已完成「${state.currentKnowledge.title}」的学习`;
        elements.completeModal.classList.add('active');
    }
    
    function updateCompleteButton() {
        if (!state.currentKnowledge) return;
        
        const isCompleted = state.completed.includes(state.currentKnowledge.id);
        elements.completeBtn.classList.toggle('active', isCompleted);
        elements.completeBtn.disabled = isCompleted;
        elements.completeBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            ${isCompleted ? '已完成' : '标记完成'}
        `;
    }
    
    function updateNextKnowledge() {
        if (!state.currentKnowledge) return;
        
        const currentIndex = knowledgeData.knowledge.findIndex(k => k.id === state.currentKnowledge.id);
        const nextKnowledge = knowledgeData.knowledge[currentIndex + 1];
        
        if (nextKnowledge) {
            elements.nextKnowledge.style.display = 'flex';
            elements.nextKnowledgeLink.textContent = nextKnowledge.title;
            elements.nextKnowledgeLink.onclick = (e) => {
                e.preventDefault();
                showKnowledgeDetail(nextKnowledge.id);
            };
        } else {
            elements.nextKnowledge.style.display = 'none';
        }
    }
    
    function updateProgress() {
        const total = knowledgeData.knowledge.length;
        const completed = state.completed.length;
        const percent = Math.round((completed / total) * 100);
        
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (percent / 100) * circumference;
        
        elements.progressRing.style.strokeDashoffset = offset;
        elements.progressPercent.textContent = `${percent}%`;
        elements.completedCount.textContent = completed;
        elements.totalCount.textContent = total;
    }
    
    function updateFavoritesList() {
        const list = elements.favoritesList;
        
        if (state.favorites.length === 0) {
            list.innerHTML = '<li class="empty-tip">暂无收藏</li>';
            return;
        }
        
        list.innerHTML = state.favorites.slice(0, 5).map(id => {
            const knowledge = knowledgeData.knowledge.find(k => k.id === id);
            if (!knowledge) return '';
            return `
                <li class="favorite-item" data-id="${id}">
                    <span onclick="window.showKnowledge('${id}')">${knowledge.title}</span>
                    <button class="remove-btn" onclick="window.removeFavorite('${id}', event)">×</button>
                </li>
            `;
        }).join('');
    }
    
    function updateRecentList() {
        const list = elements.recentList;
        
        if (state.recentViewed.length === 0) {
            list.innerHTML = '<li class="empty-tip">暂无浏览记录</li>';
            return;
        }
        
        list.innerHTML = state.recentViewed.slice(0, 5).map(id => {
            const knowledge = knowledgeData.knowledge.find(k => k.id === id);
            if (!knowledge) return '';
            return `
                <li class="recent-item" data-id="${id}">
                    <span onclick="window.showKnowledge('${id}')">${knowledge.title}</span>
                    <button class="remove-btn" onclick="window.removeRecent('${id}', event)">×</button>
                </li>
            `;
        }).join('');
    }
    
    function addToRecent(id) {
        const index = state.recentViewed.indexOf(id);
        if (index !== -1) {
            state.recentViewed.splice(index, 1);
        }
        state.recentViewed.unshift(id);
        state.recentViewed = state.recentViewed.slice(0, 10);
        localStorage.setItem('recentViewed', JSON.stringify(state.recentViewed));
        updateRecentList();
    }
    
    function handleSearch() {
        const query = elements.searchInput.value.trim().toLowerCase();
        
        if (!query) {
            closeSearch();
            return;
        }
        
        const results = knowledgeData.knowledge.filter(k => 
            k.title.toLowerCase().includes(query) || 
            k.summary.toLowerCase().includes(query)
        );
        
        if (results.length === 0) {
            elements.searchResultsList.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--text-secondary);">未找到相关知识点</p>';
        } else {
            elements.searchResultsList.innerHTML = results.map(k => `
                <div class="search-result-item" data-id="${k.id}">
                    <h4>${k.title}</h4>
                    <p>${k.summary}</p>
                </div>
            `).join('');
            
            document.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    showKnowledgeDetail(item.dataset.id);
                    closeSearch();
                });
            });
        }
        
        elements.searchResults.classList.add('active');
    }
    
    function closeSearch() {
        elements.searchResults.classList.remove('active');
        elements.searchInput.value = '';
    }
    
    function switchTab(e) {
        const tab = e.target.dataset.tab;
        
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(`${tab}Tab`).classList.add('active');
    }
    
    function updateLineNumbers() {
        const lines = elements.codeInput.value.split('\n').length;
        elements.lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');
    }
    
    function syncScroll() {
        elements.lineNumbers.scrollTop = elements.codeInput.scrollTop;
    }
    
    function executeCode() {
        const code = elements.codeInput.value;
        
        try {
            let output = '';
            const originalLog = console.log;
            console.log = (...args) => {
                output += args.map(arg => 
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(' ') + '\n';
            };
            
            eval(code);
            
            console.log = originalLog;
            elements.codeOutput.textContent = output || '代码执行成功，无输出';
            elements.codeOutput.classList.remove('error');
        } catch (error) {
            elements.codeOutput.textContent = `错误: ${error.message}`;
            elements.codeOutput.classList.add('error');
        }
    }
    
    function clearCode() {
        elements.codeInput.value = '';
        elements.codeOutput.textContent = '';
        elements.codeOutput.classList.remove('error');
        updateLineNumbers();
    }
    
    function renderQuiz() {
        // 检查是否有测验数据
        if (!knowledgeData.quizzes || knowledgeData.quizzes.length === 0) {
            // 如果没有测验数据，隐藏测验容器
            if (elements.quizContainer) {
                elements.quizContainer.style.display = 'none';
            }
            return;
        }
        
        state.currentQuizIndex = 0;
        state.quizAnswers = [];
        state.quizScore = 0;
        
        elements.quizContainer.style.display = 'block';
        elements.quizResult.style.display = 'none';
        
        showQuestion(0);
    }
    
    function showQuestion(index) {
        const quiz = knowledgeData.quizzes[index];
        if (!quiz) return;
        
        elements.quizProgress.textContent = `题目 ${index + 1}/${knowledgeData.quizzes.length}`;
        
        const selectedAnswer = state.quizAnswers[index];
        const isAnswered = selectedAnswer !== undefined;
        
        elements.quizContent.innerHTML = `
            <p class="quiz-question">${index + 1}. ${quiz.question}</p>
            <div class="quiz-options">
                ${quiz.options.map((option, i) => {
                    let className = 'quiz-option';
                    if (isAnswered) {
                        if (i === quiz.correct) className += ' correct';
                        else if (i === selectedAnswer && i !== quiz.correct) className += ' wrong';
                    }
                    if (selectedAnswer === i) className += ' selected';
                    return `
                        <div class="${className}" data-index="${i}">
                            <span class="option-marker">${String.fromCharCode(65 + i)}</span>
                            <span>${option}</span>
                        </div>
                    `;
                }).join('')}
            </div>
            ${isAnswered ? `
                <div class="quiz-explanation">
                    <h4>解析</h4>
                    <p>${quiz.explanation}</p>
                </div>
            ` : ''}
        `;
        
        if (!isAnswered) {
            document.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', () => selectAnswer(parseInt(option.dataset.index)));
            });
        }
        
        elements.prevQuiz.disabled = index === 0;
        elements.nextQuiz.textContent = index === knowledgeData.quizzes.length - 1 ? '查看结果' : '下一题';
    }
    
    function selectAnswer(index) {
        const quiz = knowledgeData.quizzes[state.currentQuizIndex];
        state.quizAnswers[state.currentQuizIndex] = index;
        
        if (index === quiz.correct) {
            state.quizScore += 20;
        }
        
        showQuestion(state.currentQuizIndex);
    }
    
    function prevQuestion() {
        if (state.currentQuizIndex > 0) {
            state.currentQuizIndex--;
            showQuestion(state.currentQuizIndex);
        }
    }
    
    function nextQuestion() {
        if (state.currentQuizIndex < knowledgeData.quizzes.length - 1) {
            state.currentQuizIndex++;
            showQuestion(state.currentQuizIndex);
        } else {
            showQuizResult();
        }
    }
    
    function showQuizResult() {
        elements.quizContainer.style.display = 'none';
        elements.quizResult.style.display = 'block';
        
        elements.scoreNumber.textContent = state.quizScore;
        
        let text = '';
        if (state.quizScore === 100) {
            text = '太棒了！全部正确！你已经掌握了这些知识点。';
        } else if (state.quizScore >= 60) {
            text = '不错！继续加油，再接再厉！';
        } else {
            text = '还需要多学习哦，建议回顾一下知识点。';
        }
        elements.resultText.textContent = text;
    }
    
    function retryQuiz() {
        renderQuiz();
    }
    
    function closeModal() {
        elements.completeModal.classList.remove('active');
    }
    
    function goToNextKnowledge() {
        closeModal();
        const currentIndex = knowledgeData.knowledge.findIndex(k => k.id === state.currentKnowledge.id);
        const nextKnowledge = knowledgeData.knowledge[currentIndex + 1];
        if (nextKnowledge) {
            showKnowledgeDetail(nextKnowledge.id);
        }
    }
    
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function scrollToCategory(categoryId) {
        hideKnowledgeDetail();
        showCategoryDetail(categoryId);
    }
    
    function handleCopyCode(e) {
        if (e.target.classList.contains('copy-btn')) {
            const codeBlock = e.target.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                e.target.textContent = '已复制';
                e.target.classList.add('copied');
                setTimeout(() => {
                    e.target.textContent = '复制';
                    e.target.classList.remove('copied');
                }, 2000);
            });
        }
    }
    
    function getCategoryName(categoryId) {
        const category = knowledgeData.categories.find(c => c.id === categoryId);
        return category ? category.name : '';
    }
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    window.showKnowledge = function(id) {
        showKnowledgeDetail(id);
    };
    
    window.removeFavorite = function(id, e) {
        e.stopPropagation();
        const index = state.favorites.indexOf(id);
        if (index !== -1) {
            state.favorites.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
            updateFavoritesList();
        }
    };
    
    window.removeRecent = function(id, e) {
        e.stopPropagation();
        const index = state.recentViewed.indexOf(id);
        if (index !== -1) {
            state.recentViewed.splice(index, 1);
            localStorage.setItem('recentViewed', JSON.stringify(state.recentViewed));
            updateRecentList();
        }
    };
    
    // ==================== 交互式学习功能 ====================
    
    // 打开代码编辑器
    window.openCodeEditor = function(knowledgeId) {
        const knowledge = knowledgeData.knowledge.find(k => k.id === knowledgeId);
        if (!knowledge) return;
        
        // 切换到代码编辑器标签
        const codeTab = document.querySelector('[data-tab="code"]');
        if (codeTab) {
            codeTab.click();
        }
        
        // 滚动到交互区域
        const interactiveZone = document.querySelector('.interactive-zone');
        if (interactiveZone) {
            interactiveZone.scrollIntoView({ behavior: 'smooth' });
        }
        
        // 显示提示
        if (window.InteractiveLearning && window.InteractiveLearning.FeedbackSystem) {
            window.InteractiveLearning.FeedbackSystem.showInfo('请在代码编辑器中修改代码，然后点击"运行代码"查看结果');
        }
    };
    
    // 开始练习
    window.startPractice = function(knowledgeId) {
        if (!window.InteractiveLearning) {
            alert('交互式学习系统正在加载中，请稍后再试');
            return;
        }
        
        const task = window.InteractiveLearning.PracticeSystem.loadTask(knowledgeId);
        if (!task) {
            alert('暂无练习任务');
            return;
        }
        
        // 切换到代码编辑器标签
        const codeTab = document.querySelector('[data-tab="code"]');
        if (codeTab) {
            codeTab.click();
        }
        
        // 滚动到交互区域
        const interactiveZone = document.querySelector('.interactive-zone');
        if (interactiveZone) {
            interactiveZone.scrollIntoView({ behavior: 'smooth' });
        }
        
        // 显示练习任务
        showPracticeModal(task);
    };
    
    // 显示练习任务弹窗
    function showPracticeModal(task) {
        // 创建弹窗
        const modal = document.createElement('div');
        modal.className = 'practice-modal';
        modal.innerHTML = `
            <div class="practice-modal-content">
                <div class="practice-modal-header">
                    <h3>📝 ${task.title}</h3>
                    <button class="modal-close-btn" onclick="this.closest('.practice-modal').remove()">×</button>
                </div>
                <div class="practice-modal-body">
                    <p class="practice-desc">${task.description}</p>
                    <div class="practice-hint-box">
                        <strong>💡 提示：</strong>
                        <p>${task.hint}</p>
                    </div>
                    <div class="practice-actions">
                        <button class="practice-action-btn primary" onclick="loadPracticeCode('${task.knowledgeId}')">
                            开始编写代码
                        </button>
                        <button class="practice-action-btn secondary" onclick="this.closest('.practice-modal').remove()">
                            稍后再做
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .practice-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .practice-modal-content {
                background: white;
                border-radius: 16px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                animation: slideUp 0.3s ease;
            }
            .practice-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 24px;
                border-bottom: 1px solid #e5e7eb;
            }
            .practice-modal-header h3 {
                margin: 0;
                font-size: 1.25rem;
                color: #1f2937;
            }
            .modal-close-btn {
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #9ca3af;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            .modal-close-btn:hover {
                color: #4b5563;
            }
            .practice-modal-body {
                padding: 24px;
            }
            .practice-desc {
                color: #4b5563;
                line-height: 1.6;
                margin-bottom: 16px;
            }
            .practice-hint-box {
                background: #eff6ff;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 24px;
            }
            .practice-hint-box strong {
                color: #2563eb;
            }
            .practice-hint-box p {
                margin: 8px 0 0;
                color: #4b5563;
            }
            .practice-actions {
                display: flex;
                gap: 12px;
            }
            .practice-action-btn {
                flex: 1;
                padding: 12px 20px;
                border: none;
                border-radius: 8px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s;
            }
            .practice-action-btn.primary {
                background: #0d9488;
                color: white;
            }
            .practice-action-btn.primary:hover {
                background: #0f766e;
            }
            .practice-action-btn.secondary {
                background: #f3f4f6;
                color: #4b5563;
            }
            .practice-action-btn.secondary:hover {
                background: #e5e7eb;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(modal);
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    // 加载练习代码
    window.loadPracticeCode = function(knowledgeId) {
        // 关闭弹窗
        const modal = document.querySelector('.practice-modal');
        if (modal) modal.remove();
        
        // 获取练习任务
        const task = window.InteractiveLearning.PracticeSystem.taskTemplates[knowledgeId];
        if (!task) return;
        
        // 加载示例代码到编辑器
        if (elements.codeInput) {
            elements.codeInput.value = task.solution.trim();
            updateLineNumbers();
        }
        
        // 显示成功提示
        if (window.InteractiveLearning.FeedbackSystem) {
            window.InteractiveLearning.FeedbackSystem.showSuccess('练习代码已加载，请修改后运行测试');
        }
    };
    
    // 查看参考答案
    window.viewSolution = function(knowledgeId) {
        if (!window.InteractiveLearning) {
            alert('交互式学习系统正在加载中，请稍后再试');
            return;
        }
        
        const task = window.InteractiveLearning.PracticeSystem.taskTemplates[knowledgeId];
        if (!task) {
            alert('暂无参考答案');
            return;
        }
        
        // 切换到代码编辑器标签
        const codeTab = document.querySelector('[data-tab="code"]');
        if (codeTab) {
            codeTab.click();
        }
        
        // 加载参考答案
        if (elements.codeInput) {
            elements.codeInput.value = task.solution.trim();
            updateLineNumbers();
        }
        
        // 滚动到交互区域
        const interactiveZone = document.querySelector('.interactive-zone');
        if (interactiveZone) {
            interactiveZone.scrollIntoView({ behavior: 'smooth' });
        }
        
        // 显示提示
        if (window.InteractiveLearning.FeedbackSystem) {
            window.InteractiveLearning.FeedbackSystem.showInfo('参考答案已加载，请仔细阅读代码注释理解实现逻辑');
        }
    };
    
    // 运行代码并检查答案
    window.runAndCheck = function() {
        if (!window.InteractiveLearning || !state.currentKnowledge) {
            return;
        }
        
        const userCode = elements.codeInput.value;
        const result = window.InteractiveLearning.PracticeSystem.checkAnswer(userCode);
        
        if (result.success) {
            window.InteractiveLearning.FeedbackSystem.showSuccess(result.message);
        } else {
            window.InteractiveLearning.FeedbackSystem.showError(result.message);
        }
        
        // 显示结果
        if (elements.codeOutput) {
            elements.codeOutput.textContent = result.message;
        }
    };
    
    // 初始化知识点自测
    window.initKnowledgeQuiz = function(knowledgeId) {
        if (!window.InteractiveLearning) return;
        
        const quiz = window.InteractiveLearning.QuizSystem.loadQuiz(knowledgeId);
        if (!quiz) return;
        
        // 渲染自测题目
        renderKnowledgeQuiz(quiz);
    };
    
    // 渲染知识点自测
    function renderKnowledgeQuiz(quiz) {
        const container = document.querySelector('.quiz-container');
        if (!container) return;
        
        const questionIndex = quiz.currentQuestionIndex || 0;
        const question = quiz.questions[questionIndex];
        
        container.innerHTML = `
            <div class="quiz-header">
                <h3>知识点自测</h3>
                <span class="quiz-progress">题目 ${questionIndex + 1}/${quiz.questions.length}</span>
            </div>
            <div class="quiz-content">
                <p class="quiz-question">${question.question}</p>
                <div class="quiz-options">
                    ${question.options.map((option, i) => `
                        <div class="quiz-option" data-index="${i}">
                            <span class="option-marker">${String.fromCharCode(65 + i)}</span>
                            <span>${option}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-actions">
                <button class="quiz-btn" id="prevQuestion" disabled>上一题</button>
                <button class="quiz-btn primary" id="nextQuestion">下一题</button>
            </div>
        `;
        
        // 添加事件监听
        container.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                handleQuizAnswer(quiz, questionIndex, index);
            });
        });
    }
    
    // 处理自测答案
    function handleQuizAnswer(quiz, questionIndex, answerIndex) {
        const result = window.InteractiveLearning.QuizSystem.answerQuestion(questionIndex, answerIndex);
        
        // 更新UI
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((option, i) => {
            option.classList.remove('selected', 'correct', 'incorrect');
            if (i === result.correctAnswer) {
                option.classList.add('correct');
            } else if (i === answerIndex && !result.isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // 显示解析
        const content = document.querySelector('.quiz-content');
        if (content && result.explanation) {
            const explanation = document.createElement('div');
            explanation.className = 'quiz-explanation';
            explanation.innerHTML = `<strong>解析：</strong>${result.explanation}`;
            content.appendChild(explanation);
        }
        
        // 显示反馈
        if (result.isCorrect) {
            window.InteractiveLearning.FeedbackSystem.showSuccess('回答正确！');
        } else {
            window.InteractiveLearning.FeedbackSystem.showError('回答错误，请看解析');
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
