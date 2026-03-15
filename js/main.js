/**
 * 主入口文件 - 确保正确的初始化顺序和错误处理
 * @version 2.0.0
 */
(function() {
    'use strict';
    
    console.log('[main.js] 脚本开始执行');
    
    // 检查所有必需的模块是否加载
    function checkModules() {
        var modules = {
            'AppState': typeof AppState !== 'undefined',
            'AppInit': typeof AppInit !== 'undefined',
            'AppEvents': typeof AppEvents !== 'undefined',
            'AppUI': typeof AppUI !== 'undefined',
            'AppSearch': typeof AppSearch !== 'undefined',
            'AppFavorites': typeof AppFavorites !== 'undefined',
            'AppCodeEditor': typeof AppCodeEditor !== 'undefined',
            'AppQuiz': typeof AppQuiz !== 'undefined',
            'AppModal': typeof AppModal !== 'undefined',
            'AppRendering': typeof AppRendering !== 'undefined',
            'knowledgeData': typeof window.knowledgeData !== 'undefined'
        };
        
        console.log('[main.js] 模块加载状态:', modules);
        
        var missingModules = [];
        for (var name in modules) {
            if (!modules[name]) {
                missingModules.push(name);
            }
        }
        
        if (missingModules.length > 0) {
            console.error('[main.js] 缺少以下模块:', missingModules);
            return false;
        }
        
        return true;
    }
    
    // 初始化应用
    function initApplication() {
        console.log('[main.js] 开始初始化应用');
        console.log('[main.js] document.readyState:', document.readyState);
        
        try {
            // 检查模块
            if (!checkModules()) {
                console.error('[main.js] 模块检查失败，延迟重试...');
                setTimeout(initApplication, 100);
                return;
            }
            
            // 检查 DOM 元素
            var navLinks = document.querySelectorAll('.nav-link');
            console.log('[main.js] 导航链接数量:', navLinks.length);
            
            if (navLinks.length === 0) {
                console.error('[main.js] 未找到导航链接，DOM 可能未完全加载');
                setTimeout(initApplication, 100);
                return;
            }
            
            // 初始化应用
            if (typeof AppInit !== 'undefined' && AppInit.init) {
                AppInit.init();
                console.log('[main.js] AppInit.init() 调用完成');
            } else {
                console.error('[main.js] AppInit 未定义或没有 init 方法');
            }
            
        } catch (error) {
            console.error('[main.js] 初始化失败:', error);
            console.error('[main.js] 错误堆栈:', error.stack);
        }
    }
    
    // 根据 DOM 状态决定初始化时机
    if (document.readyState === 'loading') {
        console.log('[main.js] 等待 DOMContentLoaded');
        document.addEventListener('DOMContentLoaded', initApplication);
    } else {
        console.log('[main.js] DOM 已加载，直接初始化');
        initApplication();
    }
})();
