var AppRendering = (function() {
    'use strict';
    
    function renderKnowledgeContent(knowledge) {
        var elements = AppState.getElements();
        var contentHTML = '';
        
        if (knowledge.content && knowledge.content.trim().startsWith('<')) {
            contentHTML = knowledge.content;
        } else if (typeof marked !== 'undefined' && knowledge.content) {
            contentHTML = marked.parse(knowledge.content, { breaks: true, gfm: true });
        } else {
            contentHTML = knowledge.content || '';
        }
        
        if (knowledge.technicalContent) {
            contentHTML += 
                '<div class="technical-section">' +
                    (knowledge.technicalContent.principle || '') +
                    (knowledge.technicalContent.role || '') +
                    (knowledge.technicalContent.businessScenario || '') +
                    (knowledge.technicalContent.pmDevScenario || '') +
                    (knowledge.technicalContent.codeExample || '') +
                '</div>';
        }
        
        elements.detailContent.innerHTML = contentHTML;
        
        addMarkdownStyles();
        
        if (typeof AppMermaid !== 'undefined') {
            AppMermaid.renderMermaidDiagrams();
        }
        
        if (typeof AppAsciiDiagrams !== 'undefined') {
            AppAsciiDiagrams.convertAsciiDiagrams();
        }
        
        initInteractiveComponents();
    }
    
    function addMarkdownStyles() {
        var styleId = 'markdown-styles';
        if (document.getElementById(styleId)) return;
        
        var style = document.createElement('style');
        style.id = styleId;
        style.textContent = 
            '.detail-content h1 { font-size: 2rem; margin-bottom: 1rem; color: var(--text-primary); }' +
            '.detail-content h2 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 2px solid var(--primary); padding-bottom: 0.5rem; }' +
            '.detail-content h3 { font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary); }' +
            '.detail-content h4 { font-size: 1.1rem; margin-top: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary); }' +
            '.detail-content p { margin-bottom: 1rem; line-height: 1.8; }' +
            '.detail-content ul, .detail-content ol { margin-bottom: 1rem; padding-left: 2rem; }' +
            '.detail-content li { margin-bottom: 0.5rem; line-height: 1.7; }' +
            '.detail-content code { background: var(--bg-code); padding: 0.2rem 0.5rem; border-radius: 4px; font-family: "JetBrains Mono", monospace; font-size: 0.9em; color: #fff; }' +
            '.detail-content pre { background: var(--bg-code); padding: 1rem; border-radius: 8px; overflow-x: auto; margin-bottom: 1rem; }' +
            '.detail-content pre code { background: none; padding: 0; color: #fff; }' +
            '.detail-content blockquote { border-left: 4px solid var(--primary); padding-left: 1rem; margin: 1rem 0; color: var(--text-secondary); font-style: italic; }' +
            '.detail-content hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }' +
            '.detail-content table { width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }' +
            '.detail-content th, .detail-content td { border: 1px solid var(--border); padding: 14px 16px; text-align: left; }' +
            '.detail-content th { background: var(--border-light); font-weight: 600; border-bottom: 2px solid var(--border); }' +
            '.detail-content tr:hover { background: rgba(13, 148, 136, 0.05); }' +
            '.detail-content strong { font-weight: 600; }' +
            '.detail-content em { font-style: italic; }';
        document.head.appendChild(style);
    }
    
    function initInteractiveComponents() {
        setTimeout(function() {
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
    
    return {
        renderKnowledgeContent: renderKnowledgeContent,
        addMarkdownStyles: addMarkdownStyles,
        initInteractiveComponents: initInteractiveComponents
    };
})();

if (typeof window !== 'undefined') {
    window.AppRendering = AppRendering;
}
