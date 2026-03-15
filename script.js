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
        quizScore: 0,
        previousView: null,
        currentCategoryId: null,
        currentDifficulty: 'all'
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
        // 动态加载marked.js库
        if (typeof marked === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
            script.onload = function() {
                console.log('Marked.js loaded successfully');
                // 加载mermaid.js
                loadMermaid();
            };
            script.onerror = function() {
                console.error('Failed to load marked.js');
                initApp();
            };
            document.head.appendChild(script);
        } else {
            loadMermaid();
        }
    }
    
    function loadMermaid() {
        if (typeof mermaid === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
            script.onload = function() {
                console.log('Mermaid.js loaded successfully');
                mermaid.initialize({
                    startOnLoad: false,
                    theme: 'base',
                    themeVariables: {
                        // 主要颜色 - 使用深色文字确保高对比度
                        primaryColor: '#f0fdfa',
                        primaryTextColor: '#0f172a',
                        primaryBorderColor: '#14b8a6',
                        lineColor: '#64748b',
                        secondaryColor: '#f8fafc',
                        tertiaryColor: '#ffffff',
                        
                        // 时序图特定
                        actorBorder: '#0d9488',
                        actorBkg: '#0d9488',
                        actorTextColor: '#ffffff',
                        actorLineColor: '#0d9488',
                        signalColor: '#475569',
                        signalTextColor: '#0f172a',
                        
                        // 流程图特定
                        nodeBorder: '#14b8a6',
                        nodeTextColor: '#0f172a',
                        
                        // 子图
                        clusterBkg: '#f8fafc',
                        clusterBorder: '#cbd5e1',
                        titleColor: '#0f172a',
                        
                        // 注释
                        noteBkgColor: '#fef3c7',
                        noteBorderColor: '#f59e0b',
                        noteTextColor: '#0f172a',
                        
                        // 激活框
                        activationBkgColor: '#ccfbf1',
                        activationBorderColor: '#14b8a6',
                        
                        // 循环/条件
                        loopTextColor: '#0f172a',
                        labelBoxBkgColor: '#f0fdfa',
                        labelBoxBorderColor: '#14b8a6',
                        
                        // 标签颜色 - 关键！使用更深的颜色确保绝对清晰
                        edgeLabelBackground: '#fef3c7',
                        edgeLabelTextColor: '#0f172a',
                        edgeLabelBorderColor: '#f59e0b',
                        
                        // 字体设置
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '14px'
                    },
                    flowchart: {
                        useMaxWidth: true,
                        htmlLabels: false,
                        curve: 'basis',
                        padding: 20,
                        nodeSpacing: 50,
                        rankSpacing: 60
                    },
                    sequence: {
                        useMaxWidth: true,
                        diagramMarginX: 20,
                        diagramMarginY: 20,
                        actorMargin: 60,
                        width: 160,
                        height: 50,
                        boxMargin: 12,
                        boxTextMargin: 6,
                        noteMargin: 12,
                        messageMargin: 40,
                        mirrorActors: true,
                        bottomMarginAdj: 1,
                        useMaxWidth: true,
                        rightAngles: false,
                        showSequenceNumbers: true
                    },
                    mindmap: {
                        useMaxWidth: true
                    }
                });
                initApp();
            };
            script.onerror = function() {
                console.error('Failed to load mermaid.js');
                initApp();
            };
            document.head.appendChild(script);
        } else {
            initApp();
        }
    }
    
    function initApp() {
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
        
        state.currentCategoryId = categoryId;
        state.currentDifficulty = 'all';
        
        elements.categoriesTitle.textContent = category.name;
        elements.backToCategories.style.display = 'flex';
        elements.difficultyFilter.value = 'all';
        renderKnowledgeCards(categoryId, 'all');
        
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
    }
    
    function filterByDifficulty() {
        const difficulty = elements.difficultyFilter.value;
        state.currentDifficulty = difficulty;
        const activeCategory = document.querySelector('.category-card.active');
        const categoryId = activeCategory ? activeCategory.dataset.categoryId : null;
        
        renderKnowledgeCards(categoryId, difficulty);
    }
    
    function showKnowledgeDetail(id) {
        const knowledge = knowledgeData.knowledge.find(k => k.id === id);
        if (!knowledge) return;
        
        if (state.currentCategoryId) {
            state.previousView = 'categoryList';
        } else {
            state.previousView = 'home';
        }
        
        state.currentKnowledge = knowledge;
        addToRecent(id);
        
        const category = knowledgeData.categories.find(c => c.id === knowledge.categoryId);
        
        elements.detailCategory.textContent = category ? category.name : '';
        elements.detailDifficulty.textContent = knowledge.difficulty === 'beginner' ? '入门级' : 
                                                 knowledge.difficulty === 'intermediate' ? '进阶级' : '高级';
        elements.detailTitle.textContent = knowledge.title;
        elements.detailSummary.textContent = knowledge.summary;
        
        // 渲染内容
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
    
    // 渲染知识点内容
    function renderKnowledgeContent(knowledge) {
        let contentHTML = '';
        
        // 判断内容格式：如果内容以 '<' 开头，说明是HTML格式，直接使用
        // 否则使用marked渲染markdown
        if (knowledge.content && knowledge.content.trim().startsWith('<')) {
            // HTML格式内容，直接使用
            contentHTML = knowledge.content;
        } else if (typeof marked !== 'undefined' && knowledge.content) {
            // Markdown格式内容，使用marked渲染
            contentHTML = marked.parse(knowledge.content, { breaks: true, gfm: true });
        } else {
            contentHTML = knowledge.content || '';
        }
        
        // 如果有技术版内容，追加到主要内容后面
        if (knowledge.technicalContent) {
            contentHTML += `
                <div class="technical-section">
                    ${knowledge.technicalContent.principle || ''}
                    ${knowledge.technicalContent.role || ''}
                    ${knowledge.technicalContent.businessScenario || ''}
                    ${knowledge.technicalContent.pmDevScenario || ''}
                    ${knowledge.technicalContent.codeExample || ''}
                </div>
            `;
        }
        
        elements.detailContent.innerHTML = contentHTML;
        
        // 添加markdown内容的样式
        addMarkdownStyles();
        
        // 渲染Mermaid图表
        renderMermaidDiagrams();
        
        // 转换ASCII艺术图为可视化组件
        convertAsciiDiagrams();
        
        // 初始化交互式组件
        initInteractiveComponents();
    }
    
    // 渲染Mermaid图表 - 时序图和流程图使用Mermaid.js，其他使用自定义v5卡片
    function renderMermaidDiagrams() {
        if (typeof mermaid === 'undefined') {
            console.log('Mermaid.js not loaded');
            return;
        }

        const detailContent = elements.detailContent;
        if (!detailContent) return;

        // 查找所有包含mermaid代码块的pre元素
        const codeBlocks = detailContent.querySelectorAll('pre code.language-mermaid, pre code');

        codeBlocks.forEach((code, index) => {
            const content = code.textContent;
            const pre = code.tagName === 'PRE' ? code : code.parentElement;
            const trimmedContent = content.trim();

            // 检查是否为HTTP请求/响应结构图 - 使用自定义卡片
            if (isHttpStructureDiagram(trimmedContent)) {
                const customCard = createHttpStructureVisualCard(trimmedContent, index);
                if (customCard && pre && pre.parentNode) {
                    pre.parentNode.replaceChild(customCard, pre);
                }
                return;
            }

            // 检查时序图、流程图和思维导图 - 使用Mermaid.js渲染
            if (trimmedContent.startsWith('sequenceDiagram') || 
                trimmedContent.startsWith('flowchart') || 
                trimmedContent.startsWith('graph') ||
                trimmedContent.startsWith('mindmap')) {
                
                const mermaidDiv = document.createElement('div');
                mermaidDiv.className = 'mermaid-diagram';

                const id = 'mermaid-' + Date.now() + '-' + index;
                try {
                    mermaid.render(id, trimmedContent).then(({ svg }) => {
                        mermaidDiv.innerHTML = svg;
                        if (pre && pre.parentNode) {
                            pre.parentNode.replaceChild(mermaidDiv, pre);
                        }
                    }).catch(err => {
                        console.error('Mermaid render error:', err);
                    });
                } catch (err) {
                    console.error('Mermaid render error:', err);
                }
            } else {
                // 其他图表类型使用自定义v5卡片组件
                const customCard = createCustomVisualCard(trimmedContent, index);
                if (customCard && pre && pre.parentNode) {
                    pre.parentNode.replaceChild(customCard, pre);
                }
            }
        });
    }
    
    // 检测是否为HTTP请求/响应结构图
    function isHttpStructureDiagram(content) {
        const trimmed = content.trim();
        // 检测包含HTTP请求或响应关键词的flowchart
        return (trimmed.startsWith('flowchart') || trimmed.startsWith('graph')) && 
               (trimmed.includes('HTTP请求') || trimmed.includes('HTTP响应') || 
                trimmed.includes('Request') || trimmed.includes('Response') ||
                (trimmed.includes('请求') && trimmed.includes('响应')));
    }
    
    // 创建HTTP请求/响应结构可视化卡片
    function createHttpStructureVisualCard(content, index) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        // 解析内容判断是请求还是响应
        const isRequest = content.includes('HTTP请求') || content.includes('Request');
        const isResponse = content.includes('HTTP响应') || content.includes('Response');
        
        // 提取子图内容
        const lines = content.split('\n');
        const sections = [];
        let currentSection = null;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            // 检测子图标题
            const subgraphMatch = trimmed.match(/subgraph\s+\w+\["([^"]+)"\]/);
            if (subgraphMatch) {
                if (currentSection) {
                    sections.push(currentSection);
                }
                currentSection = {
                    title: subgraphMatch[1],
                    items: []
                };
            }
            
            // 检测节点内容 (格式: h1["内容"] 或 b1['内容'])
            const nodeMatch = trimmed.match(/^\w+\["([^"]+)"\]/) || trimmed.match(/^\w+\['''([^']+)'''\]/);
            if (nodeMatch && currentSection) {
                currentSection.items.push(nodeMatch[1]);
            }
        });
        
        if (currentSection) {
            sections.push(currentSection);
        }
        
        // 使用 VisualCards v5 组件或创建自定义HTTP结构卡片
        if (typeof VisualCards !== 'undefined') {
            // 格式化数据为HTTP结构卡片
            const requestFields = isRequest ? [
                { name: 'Method', value: 'GET/POST/PUT/DELETE' },
                { name: 'URL', value: '/api/user/login' },
                { name: 'Headers', value: 'Content-Type: application/json' }
            ] : [];
            
            const responseFields = isResponse ? [
                { name: 'Status', value: '200 OK' },
                { name: 'Headers', value: 'Content-Type: application/json' },
                { name: 'Body', value: '{"code": 200, "message": "成功"}' }
            ] : [];
            
            // 从解析的sections中提取实际内容
            const sectionData = sections.map(section => ({
                title: section.title,
                content: section.items.join('\n')
            }));
            
            wrapper.innerHTML = createHttpDetailCard({
                isRequest,
                isResponse,
                sections: sectionData
            });
        } else {
            // 回退到简单展示
            wrapper.innerHTML = createSimpleHttpCard({
                isRequest,
                isResponse,
                sections
            });
        }
        
        return wrapper;
    }
    
    // 创建详细的HTTP结构卡片
    function createHttpDetailCard(config) {
        const { isRequest, isResponse, sections } = config;
        const title = isRequest ? 'HTTP 请求结构' : isResponse ? 'HTTP 响应结构' : 'HTTP 报文结构';
        const icon = isRequest ? 'send' : isResponse ? 'receive' : 'globe';
        
        // 构建各部分HTML
        const sectionsHtml = sections.map((section, idx) => {
            const isCode = section.content.includes('{') || section.content.includes('}');
            return `
                <div class="http-section" style="margin-bottom: 16px;">
                    <div class="http-section-title" style="font-weight: 600; color: var(--text-primary); margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--border);">
                        ${section.title}
                    </div>
                    <div class="http-section-content" style="${isCode ? 'background: #f8fafc; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.875rem; color: var(--text-secondary); white-space: pre-wrap;' : 'color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6;'}"">
                        ${section.content}
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="vc-card vc-http-structure" style="background: white; border-radius: 20px; padding: 24px; box-shadow: 8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.8);">
                <div class="vc-http-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid var(--border);">
                    <div class="vc-http-icon" style="width: 48px; height: 48px; background: linear-gradient(135deg, #6366f1, #818cf8); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
                        ${VisualCards && VisualCards.Icons ? VisualCards.Icons[icon] || VisualCards.Icons.globe : ''}
                    </div>
                    <div>
                        <div class="vc-http-title" style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary);">${title}</div>
                        <div class="vc-http-subtitle" style="font-size: 0.875rem; color: var(--text-secondary);">Request-Response Model</div>
                    </div>
                </div>
                <div class="vc-http-body">
                    ${sectionsHtml}
                </div>
            </div>
        `;
    }
    
    // 创建简单的HTTP卡片（回退方案）
    function createSimpleHttpCard(config) {
        const { isRequest, isResponse, sections } = config;
        const title = isRequest ? 'HTTP 请求结构' : isResponse ? 'HTTP 响应结构' : 'HTTP 报文结构';
        
        const sectionsHtml = sections.map(section => `
            <div style="margin-bottom: 16px; padding: 16px; background: #f8fafc; border-radius: 12px;">
                <div style="font-weight: 600; color: #1e293b; margin-bottom: 8px;">${section.title}</div>
                <div style="color: #64748b; font-size: 0.875rem; line-height: 1.6;">
                    ${section.items.map(item => `<div style="margin: 4px 0;">${item}</div>`).join('')}
                </div>
            </div>
        `).join('');
        
        return `
            <div style="background: white; border-radius: 20px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                <div style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 20px; text-align: center;">${title}</div>
                ${sectionsHtml}
            </div>
        `;
    }
    
    // 创建自定义可视化卡片
    function createCustomVisualCard(content, index) {
        // 检测图表类型并创建对应的卡片
        const trimmedContent = content.trim();
        
        // 注意：时序图(sequenceDiagram)和流程图(flowchart/graph)使用Mermaid.js渲染
        // 不在此函数中处理
        
        // 思维导图
        if (trimmedContent.startsWith('mindmap')) {
            return createMindmapCard(trimmedContent);
        }
        
        // 类图
        if (trimmedContent.startsWith('classDiagram')) {
            return createClassDiagramCard(trimmedContent);
        }
        
        // ER图
        if (trimmedContent.startsWith('erDiagram')) {
            return createERDiagramCard(trimmedContent);
        }
        
        // 甘特图
        if (trimmedContent.startsWith('gantt')) {
            return createGanttCard(trimmedContent);
        }
        
        // 饼图
        if (trimmedContent.startsWith('pie')) {
            return createPieCard(trimmedContent);
        }
        
        // 数据类型类比图（ASCII艺术图）
        if (isDataTypeDiagram(trimmedContent)) {
            return createDataTypeCardFromAscii(trimmedContent);
        }
        
        // 默认：尝试解析为架构图
        if (isArchitectureDiagram(trimmedContent)) {
            return createArchitectureElement(trimmedContent);
        }
        
        return null;
    }
    
    // 创建思维导图卡片 - v5版本
    function createMindmapCard(content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        // 解析 mindmap 内容
        const lines = content.split('\n');
        let rootTitle = '核心概念';
        const branches = [];
        let currentBranch = null;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            if (!trimmed || trimmed === 'mindmap') return;
            
            // 检测根节点
            const rootMatch = trimmed.match(/root\(\(([^)]+)\)\)/) || trimmed.match(/root\(([^)]+)\)/);
            if (rootMatch) {
                rootTitle = rootMatch[1].replace(/<br\/>/g, ' ').replace(/<br>/g, ' ');
                return;
            }
            
            // 检测分支（以 原则、数字开头 或 缩进内容）
            const branchMatch = trimmed.match(/^(原则\d+|[\d\.]+)[：:]\s*(.+)/);
            if (branchMatch) {
                if (currentBranch) {
                    branches.push(currentBranch);
                }
                currentBranch = {
                    title: branchMatch[1] + '：' + branchMatch[2],
                    items: []
                };
            } else if (trimmed.startsWith('✅') || trimmed.startsWith('❌')) {
                // 子项（示例）
                if (currentBranch) {
                    currentBranch.items.push(trimmed);
                }
            } else if (/^(GET|POST|PUT|DELETE|code|message|data)/.test(trimmed)) {
                // API 相关子项
                if (currentBranch) {
                    currentBranch.items.push(trimmed);
                }
            } else if (/^\d{3}\s/.test(trimmed)) {
                // 状态码子项
                if (currentBranch) {
                    currentBranch.items.push(trimmed);
                }
            }
        });
        
        if (currentBranch) {
            branches.push(currentBranch);
        }
        
        // 使用 VisualCards v5 组件
        if (typeof VisualCards !== 'undefined') {
            // 为分支分配类型
            const branchTypes = ['concept', 'feature', 'tech', 'example'];
            const formattedBranches = branches.map((branch, index) => ({
                type: branchTypes[index % branchTypes.length],
                title: branch.title,
                items: branch.items.slice(0, 6) // 最多显示6个
            }));
            
            wrapper.innerHTML = VisualCards.createMindmapCard({
                title: rootTitle,
                branches: formattedBranches.length > 0 ? formattedBranches : [
                    { type: 'concept', title: '概念1', items: ['子项1', '子项2'] },
                    { type: 'feature', title: '概念2', items: ['子项1', '子项2'] }
                ]
            });
        } else {
            // 回退到简单展示
            const branchesHtml = branches.map(branch => `
                <div style="margin: 12px 0; padding: 12px; background: #f8fafc; border-radius: 8px;">
                    <div style="font-weight: 600; color: #1e293b; margin-bottom: 8px;">${branch.title}</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${branch.items.map(item => `<span style="padding: 4px 12px; background: white; border-radius: 16px; font-size: 0.875rem; color: #64748b;">${item}</span>`).join('')}
                    </div>
                </div>
            `).join('');
            
            wrapper.innerHTML = `
                <div class="vc-card vc-mindmap">
                    <div class="vc-mindmap__center">
                        <div class="vc-mindmap__core">
                            ${VisualCards && VisualCards.Icons ? VisualCards.Icons.target : ''}
                            <span>${rootTitle}</span>
                        </div>
                    </div>
                    <div style="padding: 20px;">
                        ${branchesHtml}
                    </div>
                </div>
            `;
        }
        
        return wrapper;
    }
    
    // 创建流程图卡片 - v5版本
    function createFlowchartCard(content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        // 解析流程图内容
        const steps = [];
        const lines = content.split('\n');
        
        lines.forEach(line => {
            const nodeMatch = line.match(/(\w+)\[([^\]]+)\]/);
            if (nodeMatch) {
                steps.push({
                    title: nodeMatch[2],
                    desc: '流程步骤'
                });
            }
        });
        
        // 使用 VisualCards v5 组件
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createFlowCard({
                title: '业务流程',
                badge: `${steps.length || 3}步流程`,
                steps: steps.length > 0 ? steps : [
                    { title: '开始', desc: '流程起点' },
                    { title: '处理', desc: '执行业务逻辑' },
                    { title: '结束', desc: '流程终点' }
                ]
            });
        } else {
            // 回退到简单展示
            wrapper.innerHTML = `
                <div class="vc-card vc-flow">
                    <div class="vc-flow__header">
                        <div class="vc-flow__title">流程图</div>
                        <div class="vc-flow__badge">流程</div>
                    </div>
                    <div class="vc-flow__steps">
                        <pre style="white-space: pre-wrap; font-size: 0.875rem; color: var(--text-secondary); padding: 16px;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                    </div>
                </div>
            `;
        }
        
        return wrapper;
    }
    
    // 创建架构图元素 - v5版本
    function createArchitectureElement(content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        // 使用 VisualCards v5 组件
        if (typeof VisualCards !== 'undefined') {
            // 检测包含的层级
            const layerConfigs = [];
            if (content.includes('前端') || content.includes('Frontend') || content.includes('表现层') || content.includes('客户端')) {
                layerConfigs.push({ type: 'client', name: '客户端层', desc: 'Web/App/小程序', icon: 'client' });
            }
            if (content.includes('网络') || content.includes('Network') || content.includes('网关') || content.includes('CDN')) {
                layerConfigs.push({ type: 'network', name: '网络层', desc: '数据传输与路由', icon: 'network' });
            }
            if (content.includes('服务') || content.includes('Backend') || content.includes('业务逻辑') || content.includes('API')) {
                layerConfigs.push({ type: 'server', name: '服务端层', desc: '业务逻辑处理', icon: 'server' });
            }
            if (content.includes('缓存') || content.includes('Cache') || content.includes('Redis')) {
                layerConfigs.push({ type: 'cache', name: '缓存层', desc: '高速数据缓存', icon: 'cache' });
            }
            if (content.includes('数据') || content.includes('Database') || content.includes('存储') || content.includes('MySQL') || content.includes('MongoDB')) {
                layerConfigs.push({ type: 'database', name: '数据存储层', desc: '持久化数据存储', icon: 'database' });
            }
            
            wrapper.innerHTML = VisualCards.createArchitectureCard({
                title: '系统技术架构',
                subtitle: '分层架构设计模式',
                layers: layerConfigs.length > 0 ? layerConfigs : [
                    { type: 'client', name: '客户端层', desc: 'Web/App/小程序', icon: 'client' },
                    { type: 'server', name: '服务端层', desc: '业务逻辑处理', icon: 'server' },
                    { type: 'database', name: '数据存储层', desc: '持久化数据存储', icon: 'database' }
                ]
            });
        } else {
            // 回退到原有的架构可视化
            const archContent = createArchitectureVisualization(content);
            if (archContent) {
                wrapper.innerHTML = archContent;
            } else {
                return null;
            }
        }
        
        return wrapper;
    }
    
    // 创建类图卡片 - v5版本
    function createClassDiagramCard(content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        // 使用 VisualCards v5 Info Card
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createInfoCard({
                type: 'note',
                title: '类图 Class Diagram',
                text: '面向对象设计中的类关系图，展示类的属性、方法和继承关系。'
            }) + `
                <div class="vc-card" style="margin-top: 16px; padding: 20px;">
                    <pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 12px; font-family: 'JetBrains Mono', monospace;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            `;
        } else {
            wrapper.innerHTML = `
                <div class="vc-card" style="padding: 24px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #8b5cf6, #a78bfa); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M8 12h8M8 16h8M8 8h4"/>
                            </svg>
                        </div>
                        <div style="font-size: 1.125rem; font-weight: 700; color: #1e293b;">类图 Class Diagram</div>
                    </div>
                    <pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 8px;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            `;
        }
        return wrapper;
    }
    
    // 创建ER图卡片 - v5版本
    function createERDiagramCard(content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        // 使用 VisualCards v5 Info Card
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createInfoCard({
                type: 'tip',
                title: 'ER图 Entity Relationship',
                text: '实体关系图，用于数据库设计，展示实体、属性和它们之间的关系。'
            }) + `
                <div class="vc-card" style="margin-top: 16px; padding: 20px;">
                    <pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 12px; font-family: 'JetBrains Mono', monospace;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            `;
        } else {
            wrapper.innerHTML = `
                <div class="vc-card" style="padding: 24px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f59e0b, #fbbf24); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20">
                                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                                <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
                                <path d="M3 12a9 3 0 0 0 18 0"/>
                            </svg>
                        </div>
                        <div style="font-size: 1.125rem; font-weight: 700; color: #1e293b;">ER图 Entity Relationship</div>
                    </div>
                    <pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 8px;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            `;
        }
        return wrapper;
    }
    
    // 创建甘特图卡片 - v5版本
    function createGanttCard(content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        // 使用 VisualCards v5 Info Card
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createInfoCard({
                type: 'example',
                title: '甘特图 Gantt Chart',
                text: '项目管理时间线图，展示任务的开始时间、持续时间和完成进度。'
            }) + `
                <div class="vc-card" style="margin-top: 16px; padding: 20px;">
                    <pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 12px; font-family: 'JetBrains Mono', monospace;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            `;
        } else {
            wrapper.innerHTML = `
                <div class="vc-card" style="padding: 24px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #10b981, #34d399); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20">
                                <rect x="3" y="4" width="18" height="18" rx="2"/>
                                <path d="M16 2v4M8 2v4M3 10h18"/>
                            </svg>
                        </div>
                        <div style="font-size: 1.125rem; font-weight: 700; color: #1e293b;">甘特图 Gantt Chart</div>
                    </div>
                    <pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 8px;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            `;
        }
        return wrapper;
    }
    
    // 创建饼图卡片 - v5版本
    function createPieCard(content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        // 使用 VisualCards v5 Info Card
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createInfoCard({
                type: 'tip',
                title: '饼图 Pie Chart',
                text: '数据占比可视化图表，直观展示各部分在整体中的比例分布。'
            }) + `
                <div class="vc-card" style="margin-top: 16px; padding: 20px;">
                    <pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 12px; font-family: 'JetBrains Mono', monospace;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            `;
        } else {
            wrapper.innerHTML = `
                <div class="vc-card" style="padding: 24px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ec4899, #f472b6); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 2a10 10 0 0 1 10 10h-10z"/>
                            </svg>
                        </div>
                        <div style="font-size: 1.125rem; font-weight: 700; color: #1e293b;">饼图 Pie Chart</div>
                    </div>
                    <pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 8px;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                </div>
            `;
        }
        return wrapper;
    }
    
    // 转换ASCII艺术图为可视化组件
    function convertAsciiDiagrams() {
        const detailContent = elements.detailContent;
        if (!detailContent) return;
        
        // 查找所有pre和code标签中的ASCII艺术图
        const codeBlocks = detailContent.querySelectorAll('pre code, pre');
        
        // 用于跟踪已转换的块，避免重复转换
        const convertedBlocks = new Set();
        
        codeBlocks.forEach(block => {
            if (convertedBlocks.has(block)) return;
            
            const content = block.textContent || block.innerText;
            if (!content || content.trim().length < 20) return;
            
            const trimmedContent = content.trim();
            
            // 跳过所有Mermaid图表代码块 - 这些已经在 renderMermaidDiagrams() 中处理
            if (trimmedContent.startsWith('flowchart') || 
                trimmedContent.startsWith('sequenceDiagram') || 
                trimmedContent.startsWith('mindmap') ||
                trimmedContent.startsWith('graph') ||
                trimmedContent.startsWith('classDiagram') ||
                trimmedContent.startsWith('erDiagram') ||
                trimmedContent.startsWith('gantt') ||
                trimmedContent.startsWith('pie') ||
                trimmedContent.startsWith('subgraph')) {
                return;
            }
            
            let converted = false;
            
            // 检测是否为架构图
            if (isArchitectureDiagram(content)) {
                const visualDiagram = createArchitectureVisualization(content);
                if (visualDiagram) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'arch-diagram';
                    wrapper.innerHTML = visualDiagram;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为知识图谱
            else if (isKnowledgeGraph(content)) {
                const visualGraph = createKnowledgeGraphVisualization(content);
                if (visualGraph) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'arch-knowledge-graph';
                    wrapper.innerHTML = visualGraph;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为演进时间线
            else if (isEvolutionTimeline(content)) {
                const visualTimeline = createEvolutionVisualization(content);
                if (visualTimeline) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'arch-evolution';
                    wrapper.innerHTML = visualTimeline;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为分类树状图
            else if (isCategoryTree(content)) {
                const visualTree = createCategoryTreeVisualization(content);
                if (visualTree) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'tree-diagram';
                    wrapper.innerHTML = visualTree;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为流程决策图
            else if (isDecisionFlow(content)) {
                const visualFlow = createDecisionFlowVisualization(content);
                if (visualFlow) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'flow-diagram';
                    wrapper.innerHTML = visualFlow;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为过程时间线
            else if (isProcessTimeline(content)) {
                const visualProcess = createProcessTimelineVisualization(content);
                if (visualProcess) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'process-timeline';
                    wrapper.innerHTML = visualProcess;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为对比图
            else if (isComparisonDiagram(content)) {
                const visualComparison = createComparisonVisualization(content);
                if (visualComparison) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'comparison-diagram';
                    wrapper.innerHTML = visualComparison;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为检查清单
            else if (isChecklistDiagram(content)) {
                const visualChecklist = createChecklistVisualization(content);
                if (visualChecklist) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'checklist-diagram';
                    wrapper.innerHTML = visualChecklist;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为复杂技术思维流程图
            else if (isTechThinkingFlow(content)) {
                const visualFlow = createTechThinkingFlowVisualization(content);
                if (visualFlow) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'tech-flow-diagram';
                    wrapper.innerHTML = visualFlow;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为方案对比图
            else if (isSolutionComparison(content)) {
                const visualComparison = createSolutionComparisonVisualization(content);
                if (visualComparison) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'solution-comparison';
                    wrapper.innerHTML = visualComparison;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
            // 检测是否为规范说明图
            else if (isSpecificationDiagram(content)) {
                const visualSpec = createSpecificationVisualization(content);
                if (visualSpec) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'spec-diagram';
                    wrapper.innerHTML = visualSpec;
                    block.parentNode.replaceChild(wrapper, block);
                    convertedBlocks.add(block);
                    converted = true;
                }
            }
        });
    }
    
    // 检测是否为架构图
    // 检测是否为数据类型类比图
    function isDataTypeDiagram(content) {
        const dataTypeKeywords = [
            '整型', 'int', '字符型', 'String', '浮点型', 'float', '布尔型', 'boolean',
            '数据类型类比', '购物清单'
        ];
        const hasKeywords = dataTypeKeywords.some(keyword => 
            content.toLowerCase().includes(keyword.toLowerCase())
        );
        const hasAsciiArt = content.includes('┌') || content.includes('│') || content.includes('└');
        return hasKeywords && hasAsciiArt;
    }
    
    // 从ASCII艺术图创建Mermaid数据类型图
    function createDataTypeCardFromAscii(content) {
        const wrapper = document.createElement('div');
        wrapper.className = 'mermaid-diagram';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        const types = [];
        const lines = content.split('\n');
        
        let currentType = null;
        let currentExamples = [];
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            if (trimmed.includes('【整型') || (trimmed.includes('整型') && !currentType)) {
                if (currentType) {
                    types.push({ ...currentType, examples: currentExamples });
                }
                currentType = { name: '整型 int', category: '整数' };
                currentExamples = [];
            } else if (trimmed.includes('【字符型') || (trimmed.includes('字符型') && !currentType)) {
                if (currentType) {
                    types.push({ ...currentType, examples: currentExamples });
                }
                currentType = { name: '字符型 String', category: '文本' };
                currentExamples = [];
            } else if (trimmed.includes('【浮点型') || (trimmed.includes('浮点型') && !currentType)) {
                if (currentType) {
                    types.push({ ...currentType, examples: currentExamples });
                }
                currentType = { name: '浮点型 float', category: '小数' };
                currentExamples = [];
            } else if (trimmed.includes('【布尔型') || (trimmed.includes('布尔型') && !currentType)) {
                if (currentType) {
                    types.push({ ...currentType, examples: currentExamples });
                }
                currentType = { name: '布尔型 boolean', category: '逻辑' };
                currentExamples = [];
            } else if (currentType) {
                const exampleMatch = trimmed.match(/(.+?)[×x×]\s*(\d+)/);
                if (exampleMatch) {
                    currentExamples.push({ label: exampleMatch[1].trim(), value: `× ${exampleMatch[2]}` });
                } else if (trimmed.includes('品名：') || trimmed.includes('单价：')) {
                    const parts = trimmed.split(/[:：]/);
                    if (parts.length >= 2) {
                        currentExamples.push({ label: parts[0].trim(), value: parts[1].trim() });
                    }
                } else if (trimmed.includes('= true') || trimmed.includes('= false')) {
                    const parts = trimmed.split('=');
                    if (parts.length >= 2) {
                        currentExamples.push({ label: parts[0].trim(), value: parts[1].trim() });
                    }
                }
            }
        });
        
        if (currentType) {
            types.push({ ...currentType, examples: currentExamples });
        }
        
        const mermaidCode = generateDataTypeMermaid(types);
        
        const pre = document.createElement('pre');
        pre.className = 'mermaid';
        pre.textContent = mermaidCode;
        wrapper.appendChild(pre);
        
        return wrapper;
    }
    
    // 生成数据类型的Mermaid代码
    function generateDataTypeMermaid(types) {
        let code = `mindmap
  root((数据类型<br/>类比))
`;
        
        types.forEach(type => {
            const safeName = type.name.replace(/['"]/g, '');
            code += `    ${safeName}
`;
            code += `      分类: ${type.category}
`;
            if (type.examples && type.examples.length > 0) {
                type.examples.forEach(ex => {
                    const safeLabel = ex.label.replace(/['"<>&]/g, '');
                    const safeValue = ex.value.replace(/['"<>&]/g, '');
                    code += `      ${safeLabel}: ${safeValue}
`;
                });
            }
        });
        
        return code;
    }
    
    function isArchitectureDiagram(content) {
        const archKeywords = [
            '表现层', 'Presentation Layer', '前端', '客户端', 'Client',
            '业务逻辑层', 'Business Logic Layer', '服务端', '后端', 'Server',
            '数据层', 'Data Layer', '数据库', 'Database',
            '互联网产品技术架构', '技术架构', '四层架构', '三层架构'
        ];
        const hasKeywords = archKeywords.some(keyword => content.includes(keyword));
        const hasAsciiArt = content.includes('┌') || content.includes('│') || content.includes('└');
        const hasMermaid = content.includes('flowchart') || content.includes('subgraph');
        return hasKeywords && (hasAsciiArt || hasMermaid);
    }
    
    // 检测是否为知识图谱
    function isKnowledgeGraph(content) {
        const graphKeywords = ['知识图谱', '核心知识点', '产品经理需要记住'];
        return graphKeywords.some(keyword => content.includes(keyword)) ||
               (content.includes('前端（客户端）') && content.includes('服务端（后端）') && content.includes('数据库'));
    }
    
    // 检测是否为演进时间线
    function isEvolutionTimeline(content) {
        return content.includes('单体架构') && 
               (content.includes('微服务架构') || content.includes('云原生架构'));
    }
    
    // 创建架构可视化 - 现代化卡片样式
    function createArchitectureVisualization(content) {
        // 检测包含的层级
        const layers = [];
        
        // 四层架构检测
        if (content.includes('前端层') || content.includes('表现层') || content.includes('Presentation Layer') || content.includes('用户界面')) {
            layers.push({
                type: 'frontend',
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M8 16h8M8 8h4"/></svg>`,
                name: '前端层',
                nameEn: 'Frontend',
                descTitle: '用户界面展示',
                descTech: 'HTML, CSS, JavaScript, React, Vue.js'
            });
        }
        
        if (content.includes('网络层') || content.includes('数据传输') || content.includes('HTTP') || content.includes('TCP/IP')) {
            layers.push({
                type: 'network',
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
                name: '网络层',
                nameEn: 'Network',
                descTitle: '数据传输',
                descTech: 'TCP/IP, HTTP, CDN'
            });
        }
        
        if (content.includes('服务层') || content.includes('业务逻辑层') || content.includes('Business Logic Layer') || content.includes('服务端')) {
            layers.push({
                type: 'backend',
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h4M6 17h4"/></svg>`,
                name: '服务层',
                nameEn: 'Backend',
                descTitle: '业务逻辑处理',
                descTech: 'Java, Node.js, Python, Go'
            });
        }
        
        if (content.includes('数据层') || content.includes('数据存储层') || content.includes('Data Layer') || content.includes('数据库')) {
            layers.push({
                type: 'database',
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`,
                name: '数据存储层',
                nameEn: 'Database',
                descTitle: '数据持久化存储',
                descTech: 'MySQL, PostgreSQL, Redis, MongoDB'
            });
        }
        
        // 如果是四层架构，使用新样式
        if (layers.length >= 3) {
            let html = `
                <div class="architecture-stack-card">
                    <div class="architecture-stack-title">互联网产品技术架构</div>
            `;
            
            layers.forEach(layer => {
                html += `
                    <div class="stack-layer ${layer.type}">
                        <div class="layer-icon">${layer.icon}</div>
                        <div class="layer-content">
                            <div class="layer-name">${layer.name}</div>
                            <div class="layer-name-en">${layer.nameEn}</div>
                        </div>
                        <div class="layer-description">
                            <div class="layer-desc-title">${layer.descTitle}</div>
                            <div class="layer-desc-tech">${layer.descTech}</div>
                        </div>
                    </div>
                `;
            });
            
            // 添加微信案例
            html += `
                    <div class="case-study-card">
                        <div class="case-study-title">微信架构案例</div>
                        <div class="case-study-desc">微信采用三层架构设计：接入层、逻辑层和存储层。</div>
                        <div class="case-layers">
                            <div class="case-layer-item">
                                <div class="case-layer-name">接入层</div>
                                <div class="case-layer-desc">提供长连接服务和短连接服务，支持实时消息推送</div>
                            </div>
                            <div class="case-layer-item">
                                <div class="case-layer-name">逻辑层</div>
                                <div class="case-layer-desc">包括业务逻辑服务和基础逻辑服务，处理消息收发、朋友圈等功能</div>
                            </div>
                            <div class="case-layer-item">
                                <div class="case-layer-name">存储层</div>
                                <div class="case-layer-desc">采用分布式数据库架构，通过MySQL和SDB等系统持久化用户数据</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            return html;
        }
        
        // 回退到旧的三层架构样式
        const oldLayers = [];
        if (content.includes('表现层') || content.includes('Presentation Layer') || content.includes('前端/客户端')) {
            oldLayers.push({
                type: 'frontend',
                icon: '🎨',
                title: '表现层 Presentation Layer',
                subtitle: '前端/客户端 Client',
                features: ['运行在用户设备上的应用程序', '负责用户界面展示和用户交互', 'Web浏览器、移动APP、桌面应用、小程序']
            });
        }
        
        if (content.includes('业务逻辑层') || content.includes('Business Logic Layer') || content.includes('服务端/后端')) {
            oldLayers.push({
                type: 'backend',
                icon: '⚙️',
                title: '业务逻辑层 Business Logic Layer',
                subtitle: '服务端/后端 Server',
                features: ['运行在服务器上的程序', '业务逻辑处理、数据计算', '安全验证等核心功能']
            });
        }
        
        if (content.includes('数据层') || content.includes('Data Layer') || content.includes('数据库')) {
            oldLayers.push({
                type: 'database',
                icon: '🗄️',
                title: '数据层 Data Layer',
                subtitle: '数据库 Database',
                features: ['持久化存储数据的系统', '支持数据的增删改查操作', '数据备份与恢复机制']
            });
        }
        
        if (oldLayers.length === 0) return null;
        
        let html = '<div class="arch-diagram-container">';
        
        oldLayers.forEach((layer, index) => {
            if (index > 0) {
                const connectionLabel = layer.type === 'backend' ? 'API 调用' : '数据访问';
                html += `
                    <div class="arch-connection">
                        <div class="arch-connection-line"></div>
                        <span class="arch-connection-label">${connectionLabel}</span>
                    </div>
                `;
            }
            
            html += `
                <div class="arch-layer ${layer.type}">
                    <div class="arch-layer-header">
                        <div class="arch-layer-icon">${layer.icon}</div>
                        <div>
                            <div class="arch-layer-title">${layer.title}</div>
                            <div class="arch-layer-subtitle">${layer.subtitle}</div>
                        </div>
                    </div>
                    <div class="arch-layer-content">
                        ${layer.features.map(f => `
                            <div class="arch-feature">
                                <span class="arch-feature-dot"></span>
                                <span>${f}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    // 检测是否为分类树状图
    function isCategoryTree(content) {
        const treeKeywords = ['分类体系', '边界分类', '能力边界分类', '技术边界分类'];
        return treeKeywords.some(keyword => content.includes(keyword)) ||
               (content.includes('├──') && content.includes('└──') && content.includes('1.') && content.includes('2.'));
    }
    
    // 检测是否为流程决策图
    function isDecisionFlow(content) {
        const flowKeywords = ['用户点击', '检查', '判断', '├──', '└──', '──>'];
        const hasFlowArrows = (content.match(/──>/g) || []).length >= 3;
        const hasDecisionPoints = (content.match(/├──|└──/g) || []).length >= 2;
        return hasFlowArrows && hasDecisionPoints;
    }
    
    // 检测是否为过程时间线
    function isProcessTimeline(content) {
        const timelineKeywords = ['步骤', '阶段', '流程', '第一步', '第二步', '1.', '2.', '3.'];
        const hasNumbers = (content.match(/^\s*\d+\./gm) || []).length >= 3;
        return hasNumbers && (content.includes('──>') || content.includes('→'));
    }
    
    // 检测是否为对比图
    function isComparisonDiagram(content) {
        const compareKeywords = ['对比', 'vs', 'VS', '区别', '不同', '比较'];
        const hasTable = content.includes('|') && (content.match(/\|/g) || []).length >= 10;
        return compareKeywords.some(keyword => content.includes(keyword)) && hasTable;
    }
    
    // 检测是否为检查清单
    function isChecklistDiagram(content) {
        const checklistKeywords = ['自检清单', '检查清单', '□', '✓', '清单'];
        return checklistKeywords.some(keyword => content.includes(keyword)) ||
               ((content.match(/□/g) || []).length >= 5);
    }
    
    // 创建分类树状图可视化
    function createCategoryTreeVisualization(content) {
        // 解析树状结构
        const sections = [];
        const lines = content.split('\n');
        let currentSection = null;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            // 检测主节点
            if (trimmed.match(/^\d+\.\s+.+/)) {
                if (currentSection) sections.push(currentSection);
                currentSection = {
                    title: trimmed.replace(/^\d+\.\s+/, ''),
                    children: []
                };
            }
            // 检测子节点
            else if (trimmed.startsWith('├──') || trimmed.startsWith('└──') || trimmed.startsWith('│  ├──') || trimmed.startsWith('│  └──')) {
                const text = trimmed.replace(/^[│├└─\s]+/, '').trim();
                if (currentSection && text) {
                    currentSection.children.push(text);
                }
            }
        });
        
        if (currentSection) sections.push(currentSection);
        
        if (sections.length === 0) return null;
        
        // 提取标题
        let title = '分类体系';
        if (content.includes('能力边界分类体系')) title = '能力边界分类体系';
        else if (content.includes('技术边界分类')) title = '技术边界分类';
        
        const icons = ['🔧', '💻', '🤖', '📊', '⚖️', '📱', '🌐', '🔒'];
        
        let html = `
            <div class="tree-diagram-title">📋 ${title}</div>
            <div class="tree-container">
        `;
        
        sections.forEach((section, index) => {
            const icon = icons[index % icons.length];
            html += `
                <div class="tree-node">
                    <div class="tree-node-header">
                        <div class="tree-node-icon">${icon}</div>
                        <span class="tree-node-title">${section.title}</span>
                    </div>
                    ${section.children.length > 0 ? `
                        <div class="tree-children">
                            ${section.children.map(child => `
                                <div class="tree-child">
                                    <span class="tree-child-dot"></span>
                                    <span class="tree-child-text">${child}</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    // 创建流程决策图可视化
    function createDecisionFlowVisualization(content) {
        const steps = [];
        const lines = content.split('\n');
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            // 检测决策点
            if (trimmed.includes('├──') || trimmed.includes('└──')) {
                const isLast = trimmed.startsWith('└──');
                const text = trimmed.replace(/^[│├└─\s]+/, '').trim();
                
                if (text.includes('──>')) {
                    const parts = text.split('──>').map(p => p.trim());
                    if (parts.length >= 2) {
                        steps.push({
                            type: 'decision',
                            condition: parts[0],
                            result: parts[1],
                            isLast
                        });
                    }
                }
            }
            // 检测普通流程步骤
            else if (trimmed.includes('──>') && !trimmed.includes('├') && !trimmed.includes('└')) {
                const parts = trimmed.split('──>').map(p => p.trim());
                if (parts.length >= 2) {
                    steps.push({
                        type: 'flow',
                        from: parts[0],
                        to: parts[1]
                    });
                }
            }
        });
        
        if (steps.length === 0) return null;
        
        let html = `
            <div class="flow-diagram-title">🔄 流程决策图</div>
            <div class="flow-container">
        `;
        
        steps.forEach((step, index) => {
            if (step.type === 'decision') {
                const iconType = step.result.includes('成功') || step.result.includes('继续') ? 'success' : 
                                 step.result.includes('失败') || step.result.includes('提示') ? 'error' : 'action';
                html += `
                    <div class="flow-step">
                        <div class="flow-step-icon ${iconType}">${iconType === 'success' ? '✓' : iconType === 'error' ? '✗' : '→'}</div>
                        <div class="flow-step-content">
                            <div class="flow-step-title">${step.condition}</div>
                            <div class="flow-step-desc">${step.result}</div>
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <div class="flow-step">
                        <div class="flow-step-icon action">→</div>
                        <div class="flow-step-content">
                            <div class="flow-step-title">${step.from}</div>
                            <div class="flow-step-desc">${step.to}</div>
                        </div>
                    </div>
                `;
            }
        });
        
        html += '</div>';
        return html;
    }
    
    // 创建过程时间线可视化
    function createProcessTimelineVisualization(content) {
        const items = [];
        const lines = content.split('\n');
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            // 检测编号步骤
            const match = trimmed.match(/^(\d+)\.\s+(.+)/);
            if (match) {
                items.push({
                    number: match[1],
                    text: match[2]
                });
            }
        });
        
        if (items.length < 2) return null;
        
        let html = `
            <div class="process-timeline-title">📝 执行步骤</div>
            <div class="timeline-container">
        `;
        
        items.forEach((item, index) => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-marker">
                        <div class="timeline-dot">${item.number}</div>
                        ${index < items.length - 1 ? '<div class="timeline-line"></div>' : ''}
                    </div>
                    <div class="timeline-content">
                        <div class="timeline-content-title">${item.text}</div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    // 创建对比图可视化
    function createComparisonVisualization(content) {
        const columns = [];
        const lines = content.split('\n');
        
        // 查找表格结构
        let inTable = false;
        let headers = [];
        let rows = [];
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
                const cells = trimmed.split('|').filter(c => c.trim());
                
                // 检测是否为分隔行
                if (cells.every(c => c.trim().match(/^-+$/))) {
                    inTable = true;
                    return;
                }
                
                if (!inTable && cells.length > 0) {
                    headers = cells.map(c => c.trim());
                } else if (inTable && cells.length > 0) {
                    rows.push(cells.map(c => c.trim()));
                }
            }
        });
        
        if (headers.length < 2 || rows.length === 0) return null;
        
        let html = `
            <div class="comparison-diagram-title">📊 对比分析</div>
            <div class="comparison-container">
        `;
        
        headers.forEach((header, index) => {
            html += `
                <div class="comparison-column">
                    <div class="comparison-header">
                        <div class="comparison-icon type-${index === 0 ? 'a' : 'b'}">${index === 0 ? 'A' : 'B'}</div>
                        <span class="comparison-title">${header}</span>
                    </div>
                    <div class="comparison-items">
                        ${rows.map(row => `
                            <div class="comparison-item">
                                <span class="comparison-item-icon">•</span>
                                <span class="comparison-item-text">${row[index] || ''}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    // 创建检查清单可视化
    function createChecklistVisualization(content) {
        const sections = [];
        const lines = content.split('\n');
        let currentSection = null;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            // 检测标题
            if (trimmed.startsWith('【') && trimmed.endsWith('】')) {
                if (currentSection) sections.push(currentSection);
                currentSection = {
                    title: trimmed.replace(/【|】/g, ''),
                    items: []
                };
            }
            // 检测检查项
            else if (trimmed.startsWith('□') || trimmed.includes('□')) {
                const text = trimmed.replace(/□/g, '').trim();
                if (currentSection && text) {
                    currentSection.items.push(text);
                }
            }
        });
        
        if (currentSection) sections.push(currentSection);
        
        if (sections.length === 0) return null;
        
        let html = `
            <div class="checklist-diagram-title">✅ 自检清单</div>
            <div class="checklist-container">
        `;
        
        sections.forEach(section => {
            html += `
                <div class="checklist-section">
                    <div class="checklist-section-title">
                        <span>📋</span>
                        <span>${section.title}</span>
                    </div>
                    <div class="checklist-items">
                        ${section.items.map(item => `
                            <div class="checklist-item">
                                <div class="checklist-checkbox"></div>
                                <span>${item}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    // 检测是否为复杂技术思维流程图
    function isTechThinkingFlow(content) {
        const flowKeywords = ['技术思维拆解', '产品思维', '【产品思维】', '【技术思维】', '优惠券使用', '秒杀活动', '用户注册', '发布动态'];
        const hasComplexStructure = (content.match(/├──|└──/g) || []).length >= 5;
        const hasNumberedSteps = (content.match(/^\s*\d+\.\s+.+/gm) || []).length >= 2;
        return flowKeywords.some(keyword => content.includes(keyword)) && (hasComplexStructure || hasNumberedSteps);
    }
    
    // 检测是否为方案对比图
    function isSolutionComparison(content) {
        const compareKeywords = ['方案对比', '方案1', '方案2', '方案3', '库存扣减时机', '方案：'];
        return compareKeywords.some(keyword => content.includes(keyword)) && 
               content.includes('优点') && content.includes('缺点');
    }
    
    // 检测是否为规范说明图
    function isSpecificationDiagram(content) {
        const specKeywords = ['绘制规范', '设计模板', '基本符号', '绘制步骤'];
        return specKeywords.some(keyword => content.includes(keyword));
    }
    
    // 创建复杂技术思维流程图可视化
    function createTechThinkingFlowVisualization(content) {
        // 提取标题
        let title = '技术思维流程图';
        if (content.includes('优惠券使用')) title = '🎫 优惠券使用技术思维拆解';
        else if (content.includes('秒杀活动')) title = '⚡ 秒杀活动技术思维拆解';
        else if (content.includes('用户注册')) title = '👤 用户注册技术思维拆解';
        else if (content.includes('发布动态')) title = '📝 发布动态完整流程图';
        
        // 解析步骤
        const steps = [];
        const lines = content.split('\n');
        let currentStep = null;
        let stepNumber = 0;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            // 检测主步骤
            const stepMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
            if (stepMatch) {
                if (currentStep) steps.push(currentStep);
                stepNumber = parseInt(stepMatch[1]);
                currentStep = {
                    number: stepNumber,
                    title: stepMatch[2],
                    branches: []
                };
            }
            // 检测分支条件
            else if (trimmed.includes('──>') && currentStep) {
                const parts = trimmed.split('──>').map(p => p.trim().replace(/^[│├└─\s]+/, ''));
                if (parts.length >= 2) {
                    // 检测是否为条件分支
                    if (parts[0].includes('├──') || parts[0].includes('└──') || parts[0].startsWith('├') || parts[0].startsWith('└')) {
                        const condition = parts[0].replace(/^[│├└─\s]+/, '');
                        if (condition && parts[1]) {
                            currentStep.branches.push({
                                condition: condition,
                                result: parts[1]
                            });
                        }
                    } else if (parts[0] && parts[1]) {
                        currentStep.branches.push({
                            condition: parts[0],
                            result: parts[1]
                        });
                    }
                }
            }
        });
        
        if (currentStep) steps.push(currentStep);
        
        if (steps.length === 0) return null;
        
        // 构建HTML
        let html = `
            <div class="tech-flow-diagram-title">${title}</div>
            <div class="tech-flow-container">
        `;
        
        // 产品思维 vs 技术思维对比
        if (content.includes('【产品思维】') && content.includes('【技术思维】')) {
            html += `
                <div class="thinking-comparison">
                    <div class="thinking-card product">
                        <div class="thinking-card-header">
                            <span class="thinking-icon">💡</span>
                            <span class="thinking-title">产品思维</span>
                        </div>
                        <div class="thinking-card-content">
                            <p>用户视角，关注"是什么"</p>
                        </div>
                    </div>
                    <div class="thinking-arrow">VS</div>
                    <div class="thinking-card tech">
                        <div class="thinking-card-header">
                            <span class="thinking-icon">⚙️</span>
                            <span class="thinking-title">技术思维</span>
                        </div>
                        <div class="thinking-card-content">
                            <p>实现视角，关注"怎么做"</p>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // 渲染步骤
        steps.forEach((step, index) => {
            html += `
                <div class="tech-flow-step">
                    <div class="tech-flow-step-header">
                        <div class="tech-flow-step-number">${step.number}</div>
                        <div class="tech-flow-step-title">${step.title}</div>
                    </div>
                    ${step.branches.length > 0 ? `
                        <div class="tech-flow-branches">
                            ${step.branches.map(branch => `
                                <div class="tech-flow-branch">
                                    <div class="branch-condition">
                                        <span class="branch-icon">◇</span>
                                        <span>${branch.condition}</span>
                                    </div>
                                    <div class="branch-arrow">→</div>
                                    <div class="branch-result">${branch.result}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
            
            // 添加步骤间连接线
            if (index < steps.length - 1) {
                html += `<div class="tech-flow-connector"></div>`;
            }
        });
        
        html += '</div>';
        return html;
    }
    
    // 创建方案对比可视化
    function createSolutionComparisonVisualization(content) {
        // 提取方案
        const solutions = [];
        const lines = content.split('\n');
        let currentSolution = null;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            // 检测方案标题
            if (trimmed.match(/^方案\d[：:]/) || trimmed.match(/^方案\s*\d/)) {
                if (currentSolution) solutions.push(currentSolution);
                currentSolution = {
                    title: trimmed,
                    flow: '',
                    pros: [],
                    cons: []
                };
            }
            // 检测流程
            else if (trimmed.includes('流程：') && currentSolution) {
                currentSolution.flow = trimmed.replace('流程：', '').trim();
            }
            // 检测优点
            else if ((trimmed.includes('优点') || trimmed.startsWith('•')) && currentSolution) {
                const text = trimmed.replace(/^[•优点：:\s]+/, '').trim();
                if (text) currentSolution.pros.push(text);
            }
            // 检测缺点
            else if ((trimmed.includes('缺点') || trimmed.includes('•')) && currentSolution) {
                const text = trimmed.replace(/^[•缺点：:\s]+/, '').trim();
                if (text && !currentSolution.pros.includes(text)) {
                    currentSolution.cons.push(text);
                }
            }
        });
        
        if (currentSolution) solutions.push(currentSolution);
        
        if (solutions.length === 0) return null;
        
        // 提取产品经理规则
        let rules = [];
        let inRules = false;
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.includes('产品经理需要定义的规则')) {
                inRules = true;
            } else if (inRules && trimmed.startsWith('├──') || trimmed.startsWith('└──')) {
                rules.push(trimmed.replace(/^[│├└─\s]+/, '').trim());
            }
        });
        
        let html = `
            <div class="solution-comparison-title">📊 库存扣减时机方案对比</div>
            <div class="solution-container">
        `;
        
        solutions.forEach((solution, index) => {
            const colors = ['blue', 'orange', 'green'];
            const color = colors[index % colors.length];
            
            html += `
                <div class="solution-card ${color}">
                    <div class="solution-header">
                        <span class="solution-badge">${index + 1}</span>
                        <span class="solution-title">${solution.title}</span>
                    </div>
                    ${solution.flow ? `
                        <div class="solution-flow">
                            <span class="flow-label">流程：</span>
                            <span class="flow-content">${solution.flow}</span>
                        </div>
                    ` : ''}
                    <div class="solution-pros-cons">
                        <div class="solution-section pros">
                            <div class="section-title">✅ 优点</div>
                            <ul>
                                ${solution.pros.map(pro => `<li>${pro}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="solution-section cons">
                            <div class="section-title">❌ 缺点</div>
                            <ul>
                                ${solution.cons.map(con => `<li>${con}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        
        if (rules.length > 0) {
            html += `
                <div class="solution-rules">
                    <div class="rules-title">📋 产品经理需要定义的规则</div>
                    <ul class="rules-list">
                        ${rules.map(rule => `<li>${rule}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        html += '</div>';
        return html;
    }
    
    // 创建规范说明可视化
    function createSpecificationVisualization(content) {
        // 提取标题
        let title = '规范说明';
        if (content.includes('流程图绘制规范')) title = '📐 流程图绘制规范';
        else if (content.includes('异常处理设计模板')) title = '⚠️ 异常处理设计模板';
        
        // 解析内容
        const sections = [];
        const lines = content.split('\n');
        let currentSection = null;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            // 检测章节标题
            if (trimmed.match(/^[a-zA-Z\u4e00-\u9fa5]+[：:]/) && trimmed.length < 20) {
                if (currentSection) sections.push(currentSection);
                currentSection = {
                    title: trimmed.replace(/[：:]/, ''),
                    items: []
                };
            }
            // 检测列表项
            else if (trimmed.match(/^\d+\.\s+/) && currentSection) {
                currentSection.items.push(trimmed);
            }
            // 检测符号说明
            else if (trimmed.includes('椭圆') || trimmed.includes('矩形') || trimmed.includes('判断') || trimmed.includes('流程线')) {
                if (!currentSection) {
                    currentSection = { title: '基本符号', items: [] };
                }
                currentSection.items.push(trimmed);
            }
        });
        
        if (currentSection) sections.push(currentSection);
        
        let html = `
            <div class="spec-diagram-title">${title}</div>
            <div class="spec-container">
        `;
        
        sections.forEach(section => {
            html += `
                <div class="spec-section">
                    <div class="spec-section-title">${section.title}</div>
                    <div class="spec-items">
                        ${section.items.map(item => `
                            <div class="spec-item">${item}</div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    // 创建知识图谱可视化
    function createKnowledgeGraphVisualization(content) {
        const nodes = [];
        
        if (content.includes('前端') || content.includes('客户端')) {
            nodes.push({
                type: 'frontend-node',
                icon: '🖥️',
                title: '前端（客户端）',
                tags: ['用户看到的界面', '用户交互的入口', '数据展示']
            });
        }
        
        if (content.includes('服务端') || content.includes('后端')) {
            nodes.push({
                type: 'backend-node',
                icon: '🔧',
                title: '服务端（后端）',
                tags: ['业务逻辑处理', '数据验证', '安全控制']
            });
        }
        
        if (content.includes('数据库')) {
            nodes.push({
                type: 'database-node',
                icon: '💾',
                title: '数据库',
                tags: ['数据持久化存储', '数据查询', '数据关系管理']
            });
        }
        
        if (nodes.length === 0) return null;
        
        let html = `
            <div class="arch-knowledge-title">📊 基础技术架构知识图谱</div>
            <div class="arch-graph-container">
        `;
        
        nodes.forEach((node, index) => {
            if (index > 0) {
                const label = node.type === 'backend-node' ? '网络（数据传输）' : '数据访问';
                html += `
                    <div class="arch-graph-connection">
                        <div class="arch-graph-line"></div>
                        <span class="arch-graph-label">${label}</span>
                        <div class="arch-graph-line"></div>
                    </div>
                `;
            }
            
            html += `
                <div class="arch-graph-node ${node.type}">
                    <div class="arch-graph-icon">${node.icon}</div>
                    <div class="arch-graph-content">
                        <div class="arch-graph-title">${node.title}</div>
                        <div class="arch-graph-tags">
                            ${node.tags.map(tag => `<span class="arch-graph-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    // 创建演进时间线可视化
    function createEvolutionVisualization(content) {
        const items = [];
        
        if (content.includes('单体架构')) {
            items.push({ icon: '🏢', name: '单体架构' });
        }
        if (content.includes('微服务架构')) {
            items.push({ icon: '🧩', name: '微服务架构' });
        }
        if (content.includes('云原生架构')) {
            items.push({ icon: '☁️', name: '云原生架构' });
        }
        
        if (items.length === 0) return null;
        
        let html = `
            <div class="arch-evolution-title">🚀 现代架构演进</div>
            <div class="arch-evolution-timeline">
        `;
        
        items.forEach((item, index) => {
            if (index > 0) {
                html += '<span class="arch-evolution-arrow">→</span>';
            }
            html += `
                <div class="arch-evolution-item">
                    <span class="arch-evolution-icon">${item.icon}</span>
                    <span class="arch-evolution-name">${item.name}</span>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
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
    
    // 添加markdown内容样式
    function addMarkdownStyles() {
        const styleId = 'markdown-styles';
        if (document.getElementById(styleId)) return;
        
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .detail-content h1 { font-size: 2rem; margin-bottom: 1rem; color: var(--text-primary); }
            .detail-content h2 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 2px solid var(--primary); padding-bottom: 0.5rem; }
            .detail-content h3 { font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary); }
            .detail-content h4 { font-size: 1.1rem; margin-top: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary); }
            .detail-content p { margin-bottom: 1rem; line-height: 1.8; }
            .detail-content ul, .detail-content ol { margin-bottom: 1rem; padding-left: 2rem; }
            .detail-content li { margin-bottom: 0.5rem; line-height: 1.7; }
            .detail-content code { background: var(--bg-code); padding: 0.2rem 0.5rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.9em; color: #fff; }
            .detail-content pre { background: var(--bg-code); padding: 1rem; border-radius: 8px; overflow-x: auto; margin-bottom: 1rem; }
            .detail-content pre code { background: none; padding: 0; color: #fff; }
            .detail-content blockquote { border-left: 4px solid var(--primary); padding-left: 1rem; margin: 1rem 0; color: var(--text-secondary); font-style: italic; }
            .detail-content hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
            .detail-content table { width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
            .detail-content th, .detail-content td { border: 1px solid var(--border); padding: 14px 16px; text-align: left; }
            .detail-content th { background: var(--border-light); font-weight: 600; border-bottom: 2px solid var(--border); }
            .detail-content tr:hover { background: rgba(13, 148, 136, 0.05); }
            .detail-content strong { font-weight: 600; }
            .detail-content em { font-style: italic; }
        `;
        document.head.appendChild(style);
    }
    
    // 初始化交互式组件
    function initInteractiveComponents() {
        // 延迟初始化，确保DOM已完全渲染
        setTimeout(() => {
            if (typeof window.startIosAndroidDemo === 'function') {
                window.startIosAndroidDemo();
            }
            if (typeof window.startUiBuilderDemo === 'function') {
                window.startUiBuilderDemo();
            }
            if (typeof window.startAppTypesDemo === 'function') {
                window.startAppTypesDemo();
            }
            if (typeof window.startDevMethodsDemo === 'function') {
                window.startDevMethodsDemo();
            }
            if (typeof window.startAppLifecycleDemo === 'function') {
                window.startAppLifecycleDemo();
            }
        }, 100);
    }
    
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
    
    // ==================== 现代化可视化卡片创建函数 ====================
    
    // 创建四层架构可视化卡片
    function createModernArchitectureCard() {
        return `
            <div class="architecture-stack-card">
                <div class="architecture-stack-title">互联网产品技术架构</div>
                
                <div class="stack-layer frontend">
                    <div class="layer-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <path d="M8 12h8M8 16h8M8 8h4"/>
                        </svg>
                    </div>
                    <div class="layer-content">
                        <div class="layer-name">前端层</div>
                        <div class="layer-name-en">Frontend</div>
                    </div>
                    <div class="layer-description">
                        <div class="layer-desc-title">用户界面展示</div>
                        <div class="layer-desc-tech">HTML, CSS, JavaScript, React, Vue.js</div>
                    </div>
                </div>
                
                <div class="stack-layer network">
                    <div class="layer-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <div class="layer-content">
                        <div class="layer-name">网络层</div>
                        <div class="layer-name-en">Network</div>
                    </div>
                    <div class="layer-description">
                        <div class="layer-desc-title">数据传输</div>
                        <div class="layer-desc-tech">TCP/IP, HTTP, CDN</div>
                    </div>
                </div>
                
                <div class="stack-layer backend">
                    <div class="layer-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="3" width="20" height="8" rx="2"/>
                            <rect x="2" y="13" width="20" height="8" rx="2"/>
                            <path d="M6 7h4M6 17h4"/>
                        </svg>
                    </div>
                    <div class="layer-content">
                        <div class="layer-name">服务层</div>
                        <div class="layer-name-en">Backend</div>
                    </div>
                    <div class="layer-description">
                        <div class="layer-desc-title">业务逻辑处理</div>
                        <div class="layer-desc-tech">Java, Node.js, Python, Go</div>
                    </div>
                </div>
                
                <div class="stack-layer database">
                    <div class="layer-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <ellipse cx="12" cy="5" rx="9" ry="3"/>
                            <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
                            <path d="M3 12a9 3 0 0 0 18 0"/>
                        </svg>
                    </div>
                    <div class="layer-content">
                        <div class="layer-name">数据存储层</div>
                        <div class="layer-name-en">Database</div>
                    </div>
                    <div class="layer-description">
                        <div class="layer-desc-title">数据持久化存储</div>
                        <div class="layer-desc-tech">MySQL, PostgreSQL, Redis, MongoDB</div>
                    </div>
                </div>
                
                <div class="case-study-card">
                    <div class="case-study-title">微信架构案例</div>
                    <div class="case-study-desc">微信采用三层架构设计：接入层、逻辑层和存储层。</div>
                    <div class="case-layers">
                        <div class="case-layer-item">
                            <div class="case-layer-name">接入层</div>
                            <div class="case-layer-desc">提供长连接服务和短连接服务，支持实时消息推送</div>
                        </div>
                        <div class="case-layer-item">
                            <div class="case-layer-name">逻辑层</div>
                            <div class="case-layer-desc">包括业务逻辑服务和基础逻辑服务，处理消息收发、朋友圈等功能</div>
                        </div>
                        <div class="case-layer-item">
                            <div class="case-layer-name">存储层</div>
                            <div class="case-layer-desc">采用分布式数据库架构，通过MySQL和SDB等系统持久化用户数据</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // 创建技术栈可视化卡片
    function createTechStackCard() {
        return `
            <div class="tech-stack-section">
                <div class="tech-stack-card">
                    <div class="tech-stack-header">
                        <div class="tech-stack-icon frontend">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M8 12h8M8 16h8M8 8h4"/>
                            </svg>
                        </div>
                        <div>
                            <div class="tech-stack-title">前端技术栈</div>
                            <div class="tech-stack-subtitle">2026年最新</div>
                        </div>
                    </div>
                    
                    <div class="tech-item">
                        <div class="tech-item-icon blue">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <div class="tech-item-content">
                            <div class="tech-item-name">基础技术</div>
                            <div class="tech-item-desc">HTML、CSS、JavaScript</div>
                        </div>
                        <div class="tech-rating">
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </div>
                    </div>
                    
                    <div class="tech-item">
                        <div class="tech-item-icon yellow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <div class="tech-item-content">
                            <div class="tech-item-name">编程语言</div>
                            <div class="tech-item-desc">TypeScript</div>
                        </div>
                        <div class="tech-rating">
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </div>
                    </div>
                    
                    <div class="tech-item">
                        <div class="tech-item-icon purple">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <div class="tech-item-content">
                            <div class="tech-item-name">主流框架</div>
                            <div class="tech-item-desc">React（或Next.js）</div>
                        </div>
                        <div class="tech-rating">
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </div>
                    </div>
                    
                    <div class="tech-item">
                        <div class="tech-item-icon green">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <div class="tech-item-content">
                            <div class="tech-item-name">现代CSS</div>
                            <div class="tech-item-desc">Tailwind CSS + UnoCSS</div>
                        </div>
                        <div class="tech-rating">
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg class="star empty" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </div>
                    </div>
                </div>
                
                <div class="tech-stack-card">
                    <div class="tech-stack-header">
                        <div class="tech-stack-icon backend">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="3" width="20" height="8" rx="2"/>
                                <rect x="2" y="13" width="20" height="8" rx="2"/>
                                <path d="M6 7h4M6 17h4"/>
                            </svg>
                        </div>
                        <div>
                            <div class="tech-stack-title">服务端技术栈</div>
                        </div>
                    </div>
                    
                    <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.6;">
                        服务层的主要目标是降低系统间相互关联的复杂度。2026年，行业已形成Java生态（尤其是Spring Cloud Alibaba）与Go生态并驾齐驱的格局。
                    </div>
                    
                    <div class="backend-grid">
                        <div class="backend-item">
                            <div class="backend-item-icon java">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <div class="backend-item-name">Java生态</div>
                            <div class="backend-item-tech">Spring Boot、Spring Cloud</div>
                        </div>
                        
                        <div class="backend-item">
                            <div class="backend-item-icon go">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <div class="backend-item-name">Go语言</div>
                            <div class="backend-item-tech">Gin、Echo</div>
                        </div>
                        
                        <div class="backend-item">
                            <div class="backend-item-icon node">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <div class="backend-item-name">Node.js</div>
                            <div class="backend-item-tech">Express、NestJS</div>
                        </div>
                        
                        <div class="backend-item">
                            <div class="backend-item-icon micro">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <div class="backend-item-name">微服务架构</div>
                            <div class="backend-item-tech">Nacos、Gateway、Load Balancer</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // 创建请求响应流程卡片
    function createRequestFlowCard() {
        return `
            <div class="request-flow-card">
                <div class="request-flow-title">模型原理与基本流程</div>
                
                <div class="flow-diagram">
                    <div class="flow-node">
                        <div class="flow-node-icon client">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M8 12h8M8 16h8M8 8h4"/>
                            </svg>
                        </div>
                        <div class="flow-node-label">客户端</div>
                    </div>
                    
                    <div class="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                        <div class="flow-arrow-label">发送请求</div>
                    </div>
                    
                    <div class="flow-node">
                        <div class="flow-node-icon server">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="3" width="20" height="8" rx="2"/>
                                <rect x="2" y="13" width="20" height="8" rx="2"/>
                                <path d="M6 7h4M6 17h4"/>
                            </svg>
                        </div>
                        <div class="flow-node-label">服务器</div>
                    </div>
                    
                    <div class="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                        <div class="flow-arrow-label">返回响应</div>
                    </div>
                    
                    <div class="flow-node">
                        <div class="flow-node-icon client">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M8 12h8M8 16h8M8 8h4"/>
                            </svg>
                        </div>
                        <div class="flow-node-label">客户端</div>
                    </div>
                </div>
                
                <div class="http-structure-card">
                    <div class="http-structure-title">HTTP请求结构</div>
                    
                    <div class="http-part">
                        <div class="http-part-label">请求行</div>
                        <div class="http-part-content">GET /index.html HTTP/1.1</div>
                    </div>
                    
                    <div class="http-part">
                        <div class="http-part-label">请求头</div>
                        <div class="http-part-content">User-Agent: Chrome/112.0</div>
                    </div>
                    
                    <div class="http-part">
                        <div class="http-part-label">请求体（可选）</div>
                        <div class="http-part-content optional">username=admin&password=123</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
