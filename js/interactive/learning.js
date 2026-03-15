var AppInteractive = (function() {
    'use strict';
    
    function openCodeEditor(knowledgeId) {
        var knowledgeData = AppInit.getKnowledgeData();
        var knowledge = knowledgeData.knowledge.find(function(k) {
            return k.id === knowledgeId;
        });
        if (!knowledge) return;
        
        var codeTab = document.querySelector('[data-tab="code"]');
        if (codeTab) {
            codeTab.click();
        }
        
        var interactiveZone = document.querySelector('.interactive-zone');
        if (interactiveZone) {
            interactiveZone.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (window.InteractiveLearning && window.InteractiveLearning.FeedbackSystem) {
            window.InteractiveLearning.FeedbackSystem.showInfo('请在代码编辑器中修改代码，然后点击"运行代码"查看结果');
        }
    }
    
    function startPractice(knowledgeId) {
        if (!window.InteractiveLearning) {
            alert('交互式学习系统正在加载中，请稍后再试');
            return;
        }
        
        var task = window.InteractiveLearning.PracticeSystem.loadTask(knowledgeId);
        if (!task) {
            alert('暂无练习任务');
            return;
        }
        
        var codeTab = document.querySelector('[data-tab="code"]');
        if (codeTab) {
            codeTab.click();
        }
        
        var interactiveZone = document.querySelector('.interactive-zone');
        if (interactiveZone) {
            interactiveZone.scrollIntoView({ behavior: 'smooth' });
        }
        
        showPracticeModal(task);
    }
    
    function showPracticeModal(task) {
        var modal = document.createElement('div');
        modal.className = 'practice-modal';
        modal.innerHTML = 
            '<div class="practice-modal-content">' +
                '<div class="practice-modal-header">' +
                    '<h3>📝 ' + task.title + '</h3>' +
                    '<button class="modal-close-btn" onclick="this.closest(\'.practice-modal\').remove()">×</button>' +
                '</div>' +
                '<div class="practice-modal-body">' +
                    '<p class="practice-desc">' + task.description + '</p>' +
                    '<div class="practice-hint-box">' +
                        '<strong>💡 提示：</strong>' +
                        '<p>' + task.hint + '</p>' +
                    '</div>' +
                    '<div class="practice-actions">' +
                        '<button class="practice-action-btn primary" onclick="window.loadPracticeCode(\'' + task.knowledgeId + '\')">' +
                            '开始编写代码' +
                        '</button>' +
                        '<button class="practice-action-btn secondary" onclick="this.closest(\'.practice-modal\').remove()">' +
                            '稍后再做' +
                        '</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
        
        var style = document.createElement('style');
        style.textContent = 
            '.practice-modal {' +
                'position: fixed;' +
                'top: 0;' +
                'left: 0;' +
                'right: 0;' +
                'bottom: 0;' +
                'background: rgba(0, 0, 0, 0.5);' +
                'display: flex;' +
                'align-items: center;' +
                'justify-content: center;' +
                'z-index: 10000;' +
                'animation: fadeIn 0.3s ease;' +
            '}' +
            '.practice-modal-content {' +
                'background: white;' +
                'border-radius: 16px;' +
                'max-width: 500px;' +
                'width: 90%;' +
                'box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);' +
                'animation: slideUp 0.3s ease;' +
            '}' +
            '.practice-modal-header {' +
                'display: flex;' +
                'justify-content: space-between;' +
                'align-items: center;' +
                'padding: 20px 24px;' +
                'border-bottom: 1px solid #e5e7eb;' +
            '}' +
            '.practice-modal-header h3 {' +
                'margin: 0;' +
                'font-size: 1.25rem;' +
                'color: #1f2937;' +
            '}' +
            '.modal-close-btn {' +
                'background: none;' +
                'border: none;' +
                'font-size: 1.5rem;' +
                'color: #9ca3af;' +
                'cursor: pointer;' +
                'padding: 0;' +
                'line-height: 1;' +
            '}' +
            '.practice-modal-body {' +
                'padding: 24px;' +
            '}' +
            '.practice-desc {' +
                'color: #4b5563;' +
                'line-height: 1.6;' +
                'margin-bottom: 16px;' +
            '}' +
            '.practice-hint-box {' +
                'background: #eff6ff;' +
                'border-radius: 8px;' +
                'padding: 16px;' +
                'margin-bottom: 24px;' +
            '}' +
            '.practice-hint-box strong {' +
                'color: #2563eb;' +
            '}' +
            '.practice-hint-box p {' +
                'margin: 8px 0 0;' +
                'color: #4b5563;' +
            '}' +
            '.practice-actions {' +
                'display: flex;' +
                'gap: 12px;' +
            '}' +
            '.practice-action-btn {' +
                'flex: 1;' +
                'padding: 12px 20px;' +
                'border: none;' +
                'border-radius: 8px;' +
                'font-weight: 500;' +
                'cursor: pointer;' +
                'transition: all 0.2s;' +
            '}' +
            '.practice-action-btn.primary {' +
                'background: #0d9488;' +
                'color: white;' +
            '}' +
            '.practice-action-btn.primary:hover {' +
                'background: #0f766e;' +
            '}' +
            '.practice-action-btn.secondary {' +
                'background: #f3f4f6;' +
                'color: #4b5563;' +
            '}' +
            '.practice-action-btn.secondary:hover {' +
                'background: #e5e7eb;' +
            '}' +
            '@keyframes fadeIn {' +
                'from { opacity: 0; }' +
                'to { opacity: 1; }' +
            '}' +
            '@keyframes slideUp {' +
                'from { transform: translateY(20px); opacity: 0; }' +
                'to { transform: translateY(0); opacity: 1; }' +
            '}';
        
        document.head.appendChild(style);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    function loadPracticeCode(knowledgeId) {
        var modal = document.querySelector('.practice-modal');
        if (modal) modal.remove();
        
        var elements = AppState.getElements();
        var task = window.InteractiveLearning.PracticeSystem.taskTemplates[knowledgeId];
        if (!task) return;
        
        if (elements.codeInput) {
            elements.codeInput.value = task.solution.trim();
            AppCodeEditor.updateLineNumbers();
        }
        
        if (window.InteractiveLearning.FeedbackSystem) {
            window.InteractiveLearning.FeedbackSystem.showSuccess('练习代码已加载，请修改后运行测试');
        }
    }
    
    function viewSolution(knowledgeId) {
        if (!window.InteractiveLearning) {
            alert('交互式学习系统正在加载中，请稍后再试');
            return;
        }
        
        var elements = AppState.getElements();
        var task = window.InteractiveLearning.PracticeSystem.taskTemplates[knowledgeId];
        if (!task) {
            alert('暂无参考答案');
            return;
        }
        
        var codeTab = document.querySelector('[data-tab="code"]');
        if (codeTab) {
            codeTab.click();
        }
        
        if (elements.codeInput) {
            elements.codeInput.value = task.solution.trim();
            AppCodeEditor.updateLineNumbers();
        }
        
        var interactiveZone = document.querySelector('.interactive-zone');
        if (interactiveZone) {
            interactiveZone.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (window.InteractiveLearning.FeedbackSystem) {
            window.InteractiveLearning.FeedbackSystem.showInfo('参考答案已加载，请仔细阅读代码注释理解实现逻辑');
        }
    }
    
    function runAndCheck() {
        var elements = AppState.getElements();
        var state = AppState.getState();
        
        if (!window.InteractiveLearning || !state.currentKnowledge) {
            return;
        }
        
        var userCode = elements.codeInput.value;
        var result = window.InteractiveLearning.PracticeSystem.checkAnswer(userCode);
        
        if (result.success) {
            window.InteractiveLearning.FeedbackSystem.showSuccess(result.message);
        } else {
            window.InteractiveLearning.FeedbackSystem.showError(result.message);
        }
        
        if (elements.codeOutput) {
            elements.codeOutput.textContent = result.message;
        }
    }
    
    function initKnowledgeQuiz(knowledgeId) {
        if (!window.InteractiveLearning) return;
        
        var quiz = window.InteractiveLearning.QuizSystem.loadQuiz(knowledgeId);
        if (!quiz) return;
        
        renderKnowledgeQuiz(quiz);
    }
    
    function renderKnowledgeQuiz(quiz) {
        var container = document.querySelector('.quiz-container');
        if (!container) return;
        
        var questionIndex = quiz.currentQuestionIndex || 0;
        var question = quiz.questions[questionIndex];
        
        container.innerHTML = 
            '<div class="quiz-header">' +
                '<h3>知识点自测</h3>' +
                '<span class="quiz-progress">题目 ' + (questionIndex + 1) + '/' + quiz.questions.length + '</span>' +
            '</div>' +
            '<div class="quiz-content">' +
                '<p class="quiz-question">' + question.question + '</p>' +
                '<div class="quiz-options">' +
                    question.options.map(function(option, i) {
                        return '<div class="quiz-option" data-index="' + i + '">' +
                            '<span class="option-marker">' + String.fromCharCode(65 + i) + '</span>' +
                            '<span>' + option + '</span>' +
                        '</div>';
                    }).join('') +
                '</div>' +
            '</div>' +
            '<div class="quiz-actions">' +
                '<button class="quiz-btn" id="prevQuestion" disabled>上一题</button>' +
                '<button class="quiz-btn primary" id="nextQuestion">下一题</button>' +
            '</div>';
        
        container.querySelectorAll('.quiz-option').forEach(function(option) {
            option.addEventListener('click', function() {
                var index = parseInt(this.dataset.index);
                handleQuizAnswer(quiz, questionIndex, index);
            });
        });
    }
    
    function handleQuizAnswer(quiz, questionIndex, answerIndex) {
        var result = window.InteractiveLearning.QuizSystem.answerQuestion(questionIndex, answerIndex);
        
        var options = document.querySelectorAll('.quiz-option');
        options.forEach(function(option, i) {
            option.classList.remove('selected', 'correct', 'incorrect');
            if (i === result.correctAnswer) {
                option.classList.add('correct');
            } else if (i === answerIndex && !result.isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        var content = document.querySelector('.quiz-content');
        if (content && result.explanation) {
            var explanation = document.createElement('div');
            explanation.className = 'quiz-explanation';
            explanation.innerHTML = '<strong>解析：</strong>' + result.explanation;
            content.appendChild(explanation);
        }
        
        if (result.isCorrect) {
            window.InteractiveLearning.FeedbackSystem.showSuccess('回答正确！');
        } else {
            window.InteractiveLearning.FeedbackSystem.showError('回答错误，请看解析');
        }
    }
    
    return {
        openCodeEditor: openCodeEditor,
        startPractice: startPractice,
        showPracticeModal: showPracticeModal,
        loadPracticeCode: loadPracticeCode,
        viewSolution: viewSolution,
        runAndCheck: runAndCheck,
        initKnowledgeQuiz: initKnowledgeQuiz,
        renderKnowledgeQuiz: renderKnowledgeQuiz,
        handleQuizAnswer: handleQuizAnswer
    };
})();

if (typeof window !== 'undefined') {
    window.AppInteractive = AppInteractive;
    window.openCodeEditor = function(knowledgeId) {
        AppInteractive.openCodeEditor(knowledgeId);
    };
    window.startPractice = function(knowledgeId) {
        AppInteractive.startPractice(knowledgeId);
    };
    window.loadPracticeCode = function(knowledgeId) {
        AppInteractive.loadPracticeCode(knowledgeId);
    };
    window.viewSolution = function(knowledgeId) {
        AppInteractive.viewSolution(knowledgeId);
    };
    window.runAndCheck = function() {
        AppInteractive.runAndCheck();
    };
    window.initKnowledgeQuiz = function(knowledgeId) {
        AppInteractive.initKnowledgeQuiz(knowledgeId);
    };
}
