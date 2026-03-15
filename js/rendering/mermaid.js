var AppMermaid = (function() {
    'use strict';
    
    function renderMermaidDiagrams() {
        if (typeof mermaid === 'undefined') {
            console.log('Mermaid.js not loaded');
            return;
        }

        var elements = AppState.getElements();
        var detailContent = elements.detailContent;
        if (!detailContent) return;

        var codeBlocks = detailContent.querySelectorAll('pre code.language-mermaid, pre code');

        codeBlocks.forEach(function(code, index) {
            var content = code.textContent;
            var pre = code.tagName === 'PRE' ? code : code.parentElement;
            var trimmedContent = content.trim();

            if (typeof AppDiagramDetection !== 'undefined' && AppDiagramDetection.isHttpStructureDiagram(trimmedContent)) {
                var customCard = AppVisualCards.createHttpStructureVisualCard(trimmedContent, index);
                if (customCard && pre && pre.parentNode) {
                    pre.parentNode.replaceChild(customCard, pre);
                }
                return;
            }

            if (trimmedContent.startsWith('sequenceDiagram') || 
                trimmedContent.startsWith('flowchart') || 
                trimmedContent.startsWith('graph') ||
                trimmedContent.startsWith('mindmap')) {
                
                var mermaidDiv = document.createElement('div');
                mermaidDiv.className = 'mermaid-diagram';

                var id = 'mermaid-' + Date.now() + '-' + index;
                try {
                    mermaid.render(id, trimmedContent).then(function(result) {
                        mermaidDiv.innerHTML = result.svg;
                        if (pre && pre.parentNode) {
                            pre.parentNode.replaceChild(mermaidDiv, pre);
                        }
                    }).catch(function(err) {
                        console.error('Mermaid render error:', err);
                    });
                } catch (err) {
                    console.error('Mermaid render error:', err);
                }
            } else {
                if (typeof AppVisualCards !== 'undefined') {
                    var customCard = AppVisualCards.createCustomVisualCard(trimmedContent, index);
                    if (customCard && pre && pre.parentNode) {
                        pre.parentNode.replaceChild(customCard, pre);
                    }
                }
            }
        });
    }
    
    return {
        renderMermaidDiagrams: renderMermaidDiagrams
    };
})();

if (typeof window !== 'undefined') {
    window.AppMermaid = AppMermaid;
}
