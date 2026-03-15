var AppModal = (function() {
    'use strict';
    
    function closeModal() {
        var elements = AppState.getElements();
        elements.completeModal.classList.remove('active');
    }
    
    function goToNextKnowledge() {
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        closeModal();
        var currentIndex = knowledgeData.knowledge.findIndex(function(k) {
            return k.id === state.currentKnowledge.id;
        });
        var nextKnowledge = knowledgeData.knowledge[currentIndex + 1];
        if (nextKnowledge) {
            AppUI.showKnowledgeDetail(nextKnowledge.id);
        }
    }
    
    function showCompleteModal(message) {
        var elements = AppState.getElements();
        elements.completeMessage.textContent = message;
        elements.completeModal.classList.add('active');
    }
    
    return {
        closeModal: closeModal,
        goToNextKnowledge: goToNextKnowledge,
        showCompleteModal: showCompleteModal
    };
})();

if (typeof window !== 'undefined') {
    window.AppModal = AppModal;
}
