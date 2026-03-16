var AppDataIndex = (function() {
    'use strict';
    
    var indexCache = {
        byCategory: null,
        byId: null,
        byDifficulty: null,
        lastUpdate: 0
    };
    
    var CACHE_TTL = 30000;
    
    function buildIndex(knowledgeData) {
        var now = Date.now();
        
        if (indexCache.lastUpdate && (now - indexCache.lastUpdate) < CACHE_TTL) {
            return indexCache;
        }
        
        console.time('[AppDataIndex] 构建索引');
        
        var byCategory = {};
        var byId = {};
        var byDifficulty = { beginner: [], intermediate: [], advanced: [] };
        
        if (knowledgeData && knowledgeData.knowledge) {
            knowledgeData.knowledge.forEach(function(item) {
                if (item.categoryId) {
                    if (!byCategory[item.categoryId]) {
                        byCategory[item.categoryId] = [];
                    }
                    byCategory[item.categoryId].push(item);
                }
                
                if (item.id) {
                    byId[item.id] = item;
                }
                
                if (item.difficulty && byDifficulty[item.difficulty]) {
                        byDifficulty[item.difficulty].push(item);
                    }
            });
        }
        
        indexCache.byCategory = byCategory;
        indexCache.byId = byId;
        indexCache.byDifficulty = byDifficulty;
        indexCache.lastUpdate = now;
        
        console.timeEnd('[AppDataIndex] 构建索引');
        
        return indexCache;
    }
    
    function getByCategory(categoryId) {
        var knowledgeData = AppInit.getKnowledgeData();
        var index = buildIndex(knowledgeData);
        return index.byCategory[categoryId] || [];
    }
    
    function getById(id) {
        var knowledgeData = AppInit.getKnowledgeData();
        var index = buildIndex(knowledgeData);
        return index.byId[id] || null;
    }
    
    function getByDifficulty(difficulty) {
        var knowledgeData = AppInit.getKnowledgeData();
        var index = buildIndex(knowledgeData);
        return index.byDifficulty[difficulty] || [];
    }
    
    function invalidateCache() {
        indexCache.lastUpdate = 0;
        console.log('[AppDataIndex] 缓存已失效');
    }
    
    function getStats() {
        var knowledgeData = AppInit.getKnowledgeData();
        var index = buildIndex(knowledgeData);
        
        var stats = {
            totalKnowledge: knowledgeData ? knowledgeData.knowledge.length : 0,
            categories: {},
            difficulties: {}
        };
        
        for (var catId in index.byCategory) {
            stats.categories[catId] = index.byCategory[catId].length;
        }
        
        for (var diff in index.byDifficulty) {
            stats.difficulties[diff] = index.byDifficulty[diff].length;
        }
        
        return stats;
    }
    
    return {
        buildIndex: buildIndex,
        getByCategory: getByCategory,
        getById: getById,
        getByDifficulty: getByDifficulty,
        invalidateCache: invalidateCache,
        getStats: getStats
    };
})();

if (typeof window !== 'undefined') {
    window.AppDataIndex = AppDataIndex;
}
