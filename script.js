(function() {
    'use strict';
    
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
        renderCategories();
        renderKnowledgeCards();
        updateProgress();
        updateFavoritesList();
        updateRecentList();
        setupEventListeners();
        updateLineNumbers();
        renderQuiz();
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
        
        document.querySelector('.section-title').textContent = category.name;
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
        elements.detailContent.innerHTML = knowledge.content;
        
        updateFavoriteButton();
        updateCompleteButton();
        updateNextKnowledge();
        
        document.querySelector('.categories').style.display = 'none';
        document.querySelector('.learning-path').style.display = 'none';
        elements.knowledgeDetail.classList.add('active');
        
        elements.knowledgeDetail.scrollIntoView({ behavior: 'smooth' });
    }
    
    function hideKnowledgeDetail() {
        elements.knowledgeDetail.classList.remove('active');
        document.querySelector('.categories').style.display = 'block';
        document.querySelector('.learning-path').style.display = 'block';
        
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
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
