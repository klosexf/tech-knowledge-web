var AppUI = (function() {
    'use strict';
    
    function renderCategories() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        var grid = elements.categoryGrid;
        grid.innerHTML = '';
        
        knowledgeData.categories.forEach(function(category) {
            var categoryKnowledge = knowledgeData.knowledge.filter(function(k) {
                return k.categoryId === category.id;
            });
            var completedInCategory = categoryKnowledge.filter(function(k) {
                return state.completed.includes(k.id);
            }).length;
            
            var card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;
            card.innerHTML = 
                '<div class="category-header">' +
                    '<div class="category-icon">' + category.icon + '</div>' +
                    '<div>' +
                        '<h3 class="category-title">' + category.name + '</h3>' +
                        '<span class="category-count">' + completedInCategory + '/' + categoryKnowledge.length + ' 已完成</span>' +
                    '</div>' +
                '</div>' +
                '<p class="category-desc">' + category.description + '</p>' +
                '<div class="category-topics">' +
                    category.topics.slice(0, 4).map(function(topic) {
                        return '<span class="topic-tag">' + topic + '</span>';
                    }).join('') +
                '</div>';
            
            card.addEventListener('click', function() {
                showCategoryDetail(category.id);
            });
            grid.appendChild(card);
        });
    }
    
    function renderKnowledgeCards(categoryId, difficulty) {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        var knowledge = knowledgeData.knowledge;
        
        if (categoryId) {
            knowledge = knowledge.filter(function(k) {
                return k.categoryId === categoryId;
            });
        }
        
        if (difficulty !== 'all') {
            knowledge = knowledge.filter(function(k) {
                return k.difficulty === difficulty;
            });
        }
        
        var grid = elements.categoryGrid;
        grid.innerHTML = '';
        
        if (knowledge.length === 0) {
            grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">暂无匹配的知识点</p>';
            return;
        }
        
        knowledge.forEach(function(item) {
            var card = document.createElement('div');
            card.className = 'knowledge-card';
            card.dataset.id = item.id;
            
            var isCompleted = state.completed.includes(item.id);
            var isFavorite = state.favorites.includes(item.id);
            
            var difficultyText = item.difficulty === 'beginner' ? '入门' : 
                                  item.difficulty === 'intermediate' ? '进阶' : '高级';
            
            card.innerHTML = 
                '<div class="knowledge-card-header">' +
                    '<h4 class="knowledge-card-title">' + item.title + '</h4>' +
                    '<span class="knowledge-card-difficulty difficulty-' + item.difficulty + '">' +
                        difficultyText +
                    '</span>' +
                '</div>' +
                '<p class="knowledge-card-desc">' + item.summary + '</p>' +
                '<div class="knowledge-card-footer">' +
                    '<span class="knowledge-card-category">' + getCategoryName(item.categoryId) + '</span>' +
                    '<span class="knowledge-card-status ' + (isCompleted ? 'completed' : '') + '">' +
                        (isCompleted ? '✓ 已完成' : isFavorite ? '♥ 已收藏' : '') +
                    '</span>' +
                '</div>';
            
            card.addEventListener('click', function() {
                showKnowledgeDetail(item.id);
            });
            grid.appendChild(card);
        });
    }
    
    function showCategoryDetail(categoryId) {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        var category = knowledgeData.categories.find(function(c) {
            return c.id === categoryId;
        });
        if (!category) return;
        
        state.currentCategoryId = categoryId;
        state.currentDifficulty = 'all';
        
        elements.categoriesTitle.textContent = category.name;
        elements.backToCategories.style.display = 'flex';
        elements.difficultyFilter.value = 'all';
        renderKnowledgeCards(categoryId, 'all');
        
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
    }
    
    function showKnowledgeDetail(id) {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        var knowledge = knowledgeData.knowledge.find(function(k) {
            return k.id === id;
        });
        if (!knowledge) return;
        
        if (state.currentCategoryId) {
            state.previousView = 'categoryList';
        } else {
            state.previousView = 'home';
        }
        
        state.currentKnowledge = knowledge;
        AppFavorites.addToRecent(id);
        
        var category = knowledgeData.categories.find(function(c) {
            return c.id === knowledge.categoryId;
        });
        
        elements.detailCategory.textContent = category ? category.name : '';
        elements.detailDifficulty.textContent = knowledge.difficulty === 'beginner' ? '入门级' : 
                                                  knowledge.difficulty === 'intermediate' ? '进阶级' : '高级';
        elements.detailTitle.textContent = knowledge.title;
        elements.detailSummary.textContent = knowledge.summary;
        
        if (typeof AppRendering !== 'undefined') {
            AppRendering.renderKnowledgeContent(knowledge);
        }
        
        AppFavorites.updateFavoriteButton();
        AppFavorites.updateCompleteButton();
        updateNextKnowledge();
        
        document.querySelector('.categories').style.display = 'none';
        document.querySelector('.learning-path').style.display = 'none';
        elements.knowledgeDetail.classList.add('active');
        
        elements.knowledgeDetail.scrollIntoView({ behavior: 'smooth' });
        
        if (typeof window.startCodeConceptsDemo === 'function') {
            setTimeout(function() {
                window.startCodeConceptsDemo();
            }, 100);
        }
    }
    
    function hideKnowledgeDetail() {
        console.log('[AppUI.hideKnowledgeDetail] 开始执行');
        
        var elements = AppState.getElements();
        var state = AppState.getState();
        
        // 获取进入详情页前的状态
        var previousView = state.previousView || 'home';
        var targetCategoryId = state.currentCategoryId || null;
        var targetDifficulty = state.currentDifficulty || 'all';
        
        console.log('[AppUI.hideKnowledgeDetail] previousView:', previousView, 'categoryId:', targetCategoryId);
        
        // 隐藏详情页
        elements.knowledgeDetail.classList.remove('active');
        
        // 显示分类和学习路径区域
        var categoriesSection = document.querySelector('.categories');
        var learningPathSection = document.querySelector('.learning-path');
        if (categoriesSection) categoriesSection.style.display = 'block';
        if (learningPathSection) learningPathSection.style.display = 'block';
        
        // 重置当前知识点状态
        state.currentKnowledge = null;
        
        // 根据之前的视图状态恢复页面
        if (previousView === 'categoryList' && targetCategoryId) {
            // 返回到分类列表
            var category = AppInit.getKnowledgeData().categories.find(function(c) {
                return c.id === targetCategoryId;
            });
            if (category) {
                elements.categoriesTitle.textContent = category.name;
                elements.backToCategories.style.display = 'flex';
            }
            if (elements.difficultyFilter) {
                elements.difficultyFilter.value = targetDifficulty;
            }
            renderKnowledgeCards(targetCategoryId, targetDifficulty);
        } else {
            // 返回到首页
            elements.categoriesTitle.textContent = '技术分类';
            elements.backToCategories.style.display = 'none';
            if (elements.difficultyFilter) {
                elements.difficultyFilter.value = 'all';
            }
            renderCategories();
        }
        
        // 滚动到分类区域
        var categories = document.getElementById('categories');
        if (categories) {
            categories.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        console.log('[AppUI.hideKnowledgeDetail] 完成，返回到:', previousView);
    }
    
    function updateNextKnowledge() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        if (!state.currentKnowledge) return;
        
        var currentIndex = knowledgeData.knowledge.findIndex(function(k) {
            return k.id === state.currentKnowledge.id;
        });
        var nextKnowledge = knowledgeData.knowledge[currentIndex + 1];
        
        if (nextKnowledge) {
            elements.nextKnowledge.style.display = 'flex';
            elements.nextKnowledgeLink.textContent = nextKnowledge.title;
            elements.nextKnowledgeLink.onclick = function(e) {
                e.preventDefault();
                showKnowledgeDetail(nextKnowledge.id);
            };
        } else {
            elements.nextKnowledge.style.display = 'none';
        }
    }
    
    function getCategoryName(categoryId) {
        var knowledgeData = AppInit.getKnowledgeData();
        var category = knowledgeData.categories.find(function(c) {
            return c.id === categoryId;
        });
        return category ? category.name : '';
    }
    
    function scrollToCategory(categoryId) {
        hideKnowledgeDetail();
        showCategoryDetail(categoryId);
    }
    
    return {
        renderCategories: renderCategories,
        renderKnowledgeCards: renderKnowledgeCards,
        showCategoryDetail: showCategoryDetail,
        showKnowledgeDetail: showKnowledgeDetail,
        hideKnowledgeDetail: hideKnowledgeDetail,
        updateNextKnowledge: updateNextKnowledge,
        getCategoryName: getCategoryName,
        scrollToCategory: scrollToCategory
    };
})();

if (typeof window !== 'undefined') {
    window.AppUI = AppUI;
    window.showKnowledge = function(id) {
        AppUI.showKnowledgeDetail(id);
    };
}
