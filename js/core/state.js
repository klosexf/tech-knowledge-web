var AppState = (function() {
    'use strict';
    
    var state = {
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
    
    // 延迟获取元素，确保 DOM 已加载
    var _elements = null;
    
    function getElements() {
        if (!_elements) {
            _elements = {
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
            console.log('[AppState] 元素已初始化，backBtn:', _elements.backBtn);
        }
        return _elements;
    }
    
    function getState() {
        return state;
    }
    
    function setState(key, value) {
        state[key] = value;
    }
    
    function saveToStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    
    function loadFromStorage(key) {
        return JSON.parse(localStorage.getItem(key) || '[]');
    }
    
    return {
        getState: getState,
        setState: setState,
        getElements: getElements,
        saveToStorage: saveToStorage,
        loadFromStorage: loadFromStorage
    };
})();

if (typeof window !== 'undefined') {
    window.AppState = AppState;
}
