var AppQuiz = (function() {
    'use strict';
    
    function renderQuiz() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        if (!knowledgeData.quizzes || knowledgeData.quizzes.length === 0) {
            if (elements.quizContainer) {
                elements.quizContainer.style.display = 'none';
            }
            return;
        }
        
        state.currentQuizIndex = 0;
        state.quizAnswers = [];
        state.quizScore = 0;
        
        elements.quizContainer.style.display = 'block';
        elements.quizResult.style.display = 'none';
        
        showQuestion(0);
    }
    
    function showQuestion(index) {
        var elements = AppState.getElements();
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        var quiz = knowledgeData.quizzes[index];
        if (!quiz) return;
        
        elements.quizProgress.textContent = '题目 ' + (index + 1) + '/' + knowledgeData.quizzes.length;
        
        var selectedAnswer = state.quizAnswers[index];
        var isAnswered = selectedAnswer !== undefined;
        
        var optionsHtml = quiz.options.map(function(option, i) {
            var className = 'quiz-option';
            if (isAnswered) {
                if (i === quiz.correct) className += ' correct';
                else if (i === selectedAnswer && i !== quiz.correct) className += ' wrong';
            }
            if (selectedAnswer === i) className += ' selected';
            return '<div class="' + className + '" data-index="' + i + '">' +
                '<span class="option-marker">' + String.fromCharCode(65 + i) + '</span>' +
                '<span>' + option + '</span>' +
            '</div>';
        }).join('');
        
        elements.quizContent.innerHTML = 
            '<p class="quiz-question">' + (index + 1) + '. ' + quiz.question + '</p>' +
            '<div class="quiz-options">' + optionsHtml + '</div>' +
            (isAnswered ? 
                '<div class="quiz-explanation">' +
                    '<h4>解析</h4>' +
                    '<p>' + quiz.explanation + '</p>' +
                '</div>' : '');
        
        if (!isAnswered) {
            document.querySelectorAll('.quiz-option').forEach(function(option) {
                option.addEventListener('click', function() {
                    selectAnswer(parseInt(option.dataset.index));
                });
            });
        }
        
        elements.prevQuiz.disabled = index === 0;
        elements.nextQuiz.textContent = index === knowledgeData.quizzes.length - 1 ? '查看结果' : '下一题';
    }
    
    function selectAnswer(index) {
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        var quiz = knowledgeData.quizzes[state.currentQuizIndex];
        state.quizAnswers[state.currentQuizIndex] = index;
        
        if (index === quiz.correct) {
            state.quizScore += 20;
        }
        
        showQuestion(state.currentQuizIndex);
    }
    
    function prevQuestion() {
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        if (state.currentQuizIndex > 0) {
            state.currentQuizIndex--;
            showQuestion(state.currentQuizIndex);
        }
    }
    
    function nextQuestion() {
        var state = AppState.getState();
        var knowledgeData = AppInit.getKnowledgeData();
        
        if (state.currentQuizIndex < knowledgeData.quizzes.length - 1) {
            state.currentQuizIndex++;
            showQuestion(state.currentQuizIndex);
        } else {
            showQuizResult();
        }
    }
    
    function showQuizResult() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        
        elements.quizContainer.style.display = 'none';
        elements.quizResult.style.display = 'block';
        
        elements.scoreNumber.textContent = state.quizScore;
        
        var text = '';
        if (state.quizScore === 100) {
            text = '太棒了！全部正确！你已经掌握了这些知识点。';
        } else if (state.quizScore >= 60) {
            text = '不错！继续加油，再接再厉！';
        } else {
            text = '还需要多学习哦，建议回顾一下知识点。';
        }
        elements.resultText.textContent = text;
    }
    
    function retryQuiz() {
        renderQuiz();
    }
    
    return {
        renderQuiz: renderQuiz,
        showQuestion: showQuestion,
        selectAnswer: selectAnswer,
        prevQuestion: prevQuestion,
        nextQuestion: nextQuestion,
        showQuizResult: showQuizResult,
        retryQuiz: retryQuiz
    };
})();

if (typeof window !== 'undefined') {
    window.AppQuiz = AppQuiz;
}
