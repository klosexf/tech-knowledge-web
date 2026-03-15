var AppFavorites = (function() {
    'use strict';
    
    function toggleFavorite() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        
        if (!state.currentKnowledge) return;
        
        var id = state.currentKnowledge.id;
        var index = state.favorites.indexOf(id);
        
        if (index === -1) {
            state.favorites.push(id);
        } else {
            state.favorites.splice(index, 1);
        }
        
        AppState.saveToStorage('favorites', state.favorites);
        updateFavoriteButton();
        updateFavoritesList();
    }
    
    function updateFavoriteButton() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        
        if (!state.currentKnowledge) return;
        
        var isFavorite = state.favorites.includes(state.currentKnowledge.id);
        elements.favoriteBtn.classList.toggle('active', isFavorite);
        elements.favoriteBtn.innerHTML = 
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="' + (isFavorite ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2">' +
                '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' +
            '</svg>' +
            (isFavorite ? '已收藏' : '收藏');
    }
    
    function markComplete() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        
        if (!state.currentKnowledge) return;
        
        var id = state.currentKnowledge.id;
        if (state.completed.includes(id)) return;
        
        state.completed.push(id);
        AppState.saveToStorage('completed', state.completed);
        
        updateCompleteButton();
        updateProgress();
        
        AppModal.showCompleteModal('你已完成「' + state.currentKnowledge.title + '」的学习');
    }
    
    function updateCompleteButton() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        
        if (!state.currentKnowledge) return;
        
        var isCompleted = state.completed.includes(state.currentKnowledge.id);
        elements.completeBtn.classList.toggle('active', isCompleted);
        elements.completeBtn.disabled = isCompleted;
        elements.completeBtn.innerHTML = 
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>' +
                '<polyline points="22 4 12 14.01 9 11.01"/>' +
            '</svg>' +
            (isCompleted ? '已完成' : '标记完成');
    }
    
    function updateProgress() {
        var elements = AppState.getElements();
        var knowledgeData = AppInit.getKnowledgeData();
        var state = AppState.getState();
        
        var total = knowledgeData.knowledge.length;
        var completed = state.completed.length;
        var percent = Math.round((completed / total) * 100);
        
        var circumference = 2 * Math.PI * 45;
        var offset = circumference - (percent / 100) * circumference;
        
        elements.progressRing.style.strokeDashoffset = offset;
        elements.progressPercent.textContent = percent + '%';
        elements.completedCount.textContent = completed;
        elements.totalCount.textContent = total;
    }
    
    function updateFavoritesList() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        var list = elements.favoritesList;
        
        if (state.favorites.length === 0) {
            list.innerHTML = '<li class="empty-tip">暂无收藏</li>';
            return;
        }
        
        list.innerHTML = state.favorites.slice(0, 5).map(function(id) {
            var knowledge = knowledgeData.knowledge.find(function(k) {
                return k.id === id;
            });
            if (!knowledge) return '';
            return '<li class="favorite-item" data-id="' + id + '">' +
                '<span onclick="window.showKnowledge(\'' + id + '\')">' + knowledge.title + '</span>' +
                '<button class="item-btn" onclick="window.removeFavorite(\'' + id + '\', event)">×</button>' +
            '</li>';
        }).join('');
    }
    
    function updateRecentList() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        var list = elements.recentList;
        
        if (state.recentViewed.length === 0) {
            list.innerHTML = '<li class="empty-tip">暂无浏览记录</li>';
            return;
        }
        
        list.innerHTML = state.recentViewed.slice(0, 5).map(function(id) {
            var knowledge = knowledgeData.knowledge.find(function(k) {
                return k.id === id;
            });
            if (!knowledge) return '';
            return '<li class="recent-item" data-id="' + id + '">' +
                '<span onclick="window.showKnowledge(\'' + id + '\')">' + knowledge.title + '</span>' +
                '<button class="item-btn" onclick="window.removeRecent(\'' + id + '\', event)">×</button>' +
            '</li>';
        }).join('');
    }
    
    function addToRecent(id) {
        var state = AppState.getState();
        var index = state.recentViewed.indexOf(id);
        if (index !== -1) {
            state.recentViewed.splice(index, 1);
        }
        state.recentViewed.unshift(id);
        state.recentViewed = state.recentViewed.slice(0, 10);
        AppState.saveToStorage('recentViewed', state.recentViewed);
        updateRecentList();
    }
    
    function removeFavorite(id, e) {
        e.stopPropagation();
        var state = AppState.getState();
        var index = state.favorites.indexOf(id);
        if (index !== -1) {
            state.favorites.splice(index, 1);
            AppState.saveToStorage('favorites', state.favorites);
            updateFavoritesList();
        }
    }
    
    function removeRecent(id, e) {
        e.stopPropagation();
        var state = AppState.getState();
        var index = state.recentViewed.indexOf(id);
        if (index !== -1) {
            state.recentViewed.splice(index, 1);
            AppState.saveToStorage('recentViewed', state.recentViewed);
            updateRecentList();
        }
    }
    
    return {
        toggleFavorite: toggleFavorite,
        updateFavoriteButton: updateFavoriteButton,
        markComplete: markComplete,
        updateCompleteButton: updateCompleteButton,
        updateProgress: updateProgress,
        updateFavoritesList: updateFavoritesList,
        updateRecentList: updateRecentList,
        addToRecent: addToRecent,
        removeFavorite: removeFavorite,
        removeRecent: removeRecent
    };
})();

if (typeof window !== 'undefined') {
    window.AppFavorites = AppFavorites;
    window.removeFavorite = function(id, e) {
        AppFavorites.removeFavorite(id, e);
    };
    window.removeRecent = function(id, e) {
        AppFavorites.removeRecent(id, e);
    };
}
