var AppSearch = (function() {
    'use strict';
    
    function handleSearch() {
        var elements = AppState.getElements();
        var knowledgeData = AppInit.getKnowledgeData();
        
        var query = elements.searchInput.value.trim().toLowerCase();
        
        if (!query) {
            closeSearch();
            return;
        }
        
        var results = knowledgeData.knowledge.filter(function(k) {
            return k.title.toLowerCase().includes(query) || 
                   k.summary.toLowerCase().includes(query);
        });
        
        if (results.length === 0) {
            elements.searchResultsList.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--text-secondary);">未找到相关知识点</p>';
        } else {
            elements.searchResultsList.innerHTML = results.map(function(k) {
                return '<div class="search-result-item" data-id="' + k.id + '">' +
                    '<h4>' + k.title + '</h4>' +
                    '<p>' + k.summary + '</p>' +
                '</div>';
            }).join('');
            
            document.querySelectorAll('.search-result-item').forEach(function(item) {
                item.addEventListener('click', function() {
                    AppUI.showKnowledgeDetail(item.dataset.id);
                    closeSearch();
                });
            });
        }
        
        elements.searchResults.classList.add('active');
    }
    
    function closeSearch() {
        var elements = AppState.getElements();
        elements.searchResults.classList.remove('active');
        elements.searchInput.value = '';
    }
    
    return {
        handleSearch: handleSearch,
        closeSearch: closeSearch
    };
})();

if (typeof window !== 'undefined') {
    window.AppSearch = AppSearch;
}
