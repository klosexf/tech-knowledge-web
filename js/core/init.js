/**
 * 初始化模块 - 负责应用初始化和状态管理
 * @version 2.0.0
 */
var AppInit = (function() {
    'use strict';
    
    var knowledgeData = null;
    var initialized = false;
    
    /**
     * 主初始化函数
     */
    function init() {
        console.log('[AppInit] 开始初始化');
        
        if (initialized) {
            console.log('[AppInit] 已经初始化，跳过');
            return;
        }
        
        try {
            // 检查依赖
            if (!checkDependencies()) {
                console.error('[AppInit] 依赖检查失败');
                return;
            }
            
            // 加载外部库
            loadExternalLibraries();
            
        } catch (error) {
            console.error('[AppInit] 初始化失败:', error);
            console.error('[AppInit] 错误堆栈:', error.stack);
        }
    }
    
    /**
     * 检查依赖
     */
    function checkDependencies() {
        console.log('[AppInit] 检查依赖');
        
        var dependencies = {
            'AppState': typeof AppState !== 'undefined',
            'AppUI': typeof AppUI !== 'undefined',
            'AppEvents': typeof AppEvents !== 'undefined',
            'knowledgeData': typeof window.knowledgeData !== 'undefined'
        };
        
        console.log('[AppInit] 依赖状态:', dependencies);
        
        for (var name in dependencies) {
            if (!dependencies[name]) {
                console.error('[AppInit] 缺少依赖:', name);
                return false;
            }
        }
        
        return true;
    }
    
    /**
     * 加载外部库
     */
    function loadExternalLibraries() {
        console.log('[AppInit] 加载外部库');
        
        if (typeof marked === 'undefined') {
            console.log('[AppInit] 加载 marked.js');
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
            script.onload = function() {
                console.log('[AppInit] marked.js 加载成功');
                loadMermaid();
            };
            script.onerror = function() {
                console.error('[AppInit] marked.js 加载失败');
                initApp();
            };
            document.head.appendChild(script);
        } else {
            loadMermaid();
        }
    }
    
    /**
     * 加载 Mermaid
     */
    function loadMermaid() {
        console.log('[AppInit] 加载 Mermaid');
        
        if (typeof mermaid === 'undefined') {
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
            script.onload = function() {
                console.log('[AppInit] Mermaid 加载成功');
                initializeMermaid();
                initApp();
            };
            script.onerror = function() {
                console.error('[AppInit] Mermaid 加载失败');
                initApp();
            };
            document.head.appendChild(script);
        } else {
            initializeMermaid();
            initApp();
        }
    }
    
    /**
     * 初始化 Mermaid
     */
    function initializeMermaid() {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
                primaryColor: '#f0fdfa',
                primaryTextColor: '#0f172a',
                primaryBorderColor: '#14b8a6',
                lineColor: '#64748b',
                secondaryColor: '#f8fafc',
                tertiaryColor: '#ffffff',
                actorBorder: '#0d9488',
                actorBkg: '#0d9488',
                actorTextColor: '#ffffff',
                actorLineColor: '#0d9488',
                signalColor: '#475569',
                signalTextColor: '#0f172a',
                nodeBorder: '#14b8a6',
                nodeTextColor: '#0f172a',
                clusterBkg: '#f8fafc',
                clusterBorder: '#cbd5e1',
                titleColor: '#0f172a',
                noteBkgColor: '#fef3c7',
                noteBorderColor: '#f59e0b',
                noteTextColor: '#0f172a',
                activationBkgColor: '#ccfbf1',
                activationBorderColor: '#14b8a6',
                loopTextColor: '#0f172a',
                labelBoxBkgColor: '#f0fdfa',
                labelBoxBorderColor: '#14b8a6',
                edgeLabelBackground: '#fef3c7',
                edgeLabelTextColor: '#0f172a',
                edgeLabelBorderColor: '#f59e0b',
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
    }
    
    /**
     * 初始化应用核心
     */
    function initApp() {
        console.log('[AppInit] 初始化应用核心');
        
        try {
            // 检查数据
            if (!window.knowledgeData) {
                console.error('[AppInit] 错误: knowledgeData 未定义');
                return;
            }
            
            knowledgeData = window.knowledgeData;
            console.log('[AppInit] 知识数据已加载:', {
                categories: knowledgeData.categories.length,
                knowledge: knowledgeData.knowledge.length
            });
            
            // 重置到首页
            resetToHomePage();
            console.log('[AppInit] 已重置到首页');
            
            // 渲染分类
            if (typeof AppUI !== 'undefined') {
                AppUI.renderCategories();
                AppUI.updateProgress();
                AppUI.updateFavoritesList();
                AppUI.updateRecentList();
                console.log('[AppInit] UI 渲染完成');
            }
            
            // 设置事件监听器 - 关键步骤
            if (typeof AppEvents !== 'undefined') {
                console.log('[AppInit] 开始设置事件监听器');
                AppEvents.setupEventListeners();
                console.log('[AppInit] 事件监听器设置完成');
            } else {
                console.error('[AppInit] AppEvents 未定义！');
            }
            
            // 初始化代码编辑器
            if (typeof AppCodeEditor !== 'undefined') {
                AppCodeEditor.updateLineNumbers();
            }
            
            // 初始化测验
            if (typeof AppQuiz !== 'undefined') {
                AppQuiz.renderQuiz();
            }
            
            initialized = true;
            console.log('[AppInit] 初始化完成');
            
        } catch (error) {
            console.error('[AppInit] 初始化应用核心失败:', error);
            console.error('[AppInit] 错误堆栈:', error.stack);
        }
    }
    
    /**
     * 重置到首页状态
     */
    function resetToHomePage() {
        console.log('[AppInit] 重置到首页状态');
        
        try {
            var elements = AppState.getElements();
            var state = AppState.getState();
            
            // 隐藏知识详情
            if (elements.knowledgeDetail) {
                elements.knowledgeDetail.classList.remove('active');
            }
            
            // 显示分类和学习路径
            var categoriesSection = document.querySelector('.categories');
            var learningPathSection = document.querySelector('.learning-path');
            
            if (categoriesSection) {
                categoriesSection.style.display = 'block';
            }
            if (learningPathSection) {
                learningPathSection.style.display = 'block';
            }
            
            // 重置标题和控件
            if (elements.categoriesTitle) {
                elements.categoriesTitle.textContent = '技术分类';
            }
            if (elements.backToCategories) {
                elements.backToCategories.style.display = 'none';
            }
            if (elements.difficultyFilter) {
                elements.difficultyFilter.value = 'all';
            }
            
            // 重置状态
            state.currentKnowledge = null;
            state.currentCategoryId = null;
            state.currentDifficulty = 'all';
            state.previousView = 'home';
            
            console.log('[AppInit] 首页状态重置完成');
            
        } catch (error) {
            console.error('[AppInit] 重置到首页失败:', error);
        }
    }
    
    /**
     * 获取知识数据
     */
    function getKnowledgeData() {
        return knowledgeData || window.knowledgeData;
    }
    
    // 公开 API
    return {
        init: init,
        resetToHomePage: resetToHomePage,
        getKnowledgeData: getKnowledgeData
    };
})();

// 全局暴露
if (typeof window !== 'undefined') {
    window.AppInit = AppInit;
}
