/**
 * 交互式学习组件
 * 为技术知识学习平台提供交互式学习体验
 * 包括：代码运行演示、即时反馈、练习任务、自测功能
 */

(function() {
    'use strict';
    
    // ==================== 代码运行器 ====================
    const CodeRunner = {
        // 运行JavaScript代码
        runJS(code) {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.map(arg => 
                        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                    ).join(' '));
                };
                
                const result = eval(code);
                console.log = originalLog;
                
                return {
                    success: true,
                    output: output.join('\n'),
                    result: result !== undefined ? String(result) : undefined
                };
            } catch (error) {
                return {
                    success: false,
                    output: '',
                    error: error.message
                };
            }
        },
        
        // 运行HTML代码
        runHTML(code) {
            try {
                return {
                    success: true,
                    output: code,
                    result: 'HTML渲染成功'
                };
            } catch (error) {
                return {
                    success: false,
                    output: '',
                    error: error.message
                };
            }
        },
        
        // 运行CSS代码
        runCSS(code) {
            try {
                return {
                    success: true,
                    output: `<style>${code}</style><div class="css-preview">CSS样式预览</div>`,
                    result: 'CSS渲染成功'
                };
            } catch (error) {
                return {
                    success: false,
                    output: '',
                    error: error.message
                };
            }
        }
    };
    
    // ==================== 练习任务系统 ====================
    const PracticeSystem = {
        // 当前练习任务
        currentTask: null,
        
        // 练习任务模板
        taskTemplates: {
            'arch-1': {
                title: '模拟用户登录流程',
                description: '模拟用户输入手机号和密码，验证后返回登录结果',
                hint: '使用条件判断来验证手机号格式和密码长度',
                solution: `
// 定义验证函数
function validateLogin(phone, password) {
    // 验证手机号：必须是11位，以1开头
    if (phone.length !== 11 || !phone.startsWith('1')) {
        return { success: false, message: '手机号格式不正确' };
    }
    
    // 验证密码：长度至少6位
    if (password.length < 6) {
        return { success: false, message: '密码长度至少6位' };
    }
    
    // 验证通过
    return { success: true, message: '验证通过，可以登录' };
}

// 测试用例
console.log('测试用例1：', validateLogin('13800138000', '123456'));
console.log('测试用例2：', validateLogin('13800138000', '123'));
console.log('测试用例3：', validateLogin('23800138000', '123456'));
                `,
                testCases: [
                    { input: ['13800138000', '123456'], expected: '验证通过，可以登录' },
                    { input: ['13800138000', '123'], expected: '密码长度至少6位' }
                ]
            },
            'prog-1': {
                title: '数据类型练习',
                description: '定义不同类型的数据变量，并输出它们的类型',
                hint: '使用typeof操作符来检查数据类型',
                solution: `
// 定义不同类型的数据
let userName = "张三";        // 字符串
let userAge = 25;            // 数字
let isVip = true;            // 布尔值
let shoppingCart = ["手机", "耳机"]; // 数组
let userInfo = {             // 对象
    name: "张三",
    age: 25,
    isVip: true
};

// 输出数据类型
console.log('用户名类型:', typeof userName);
console.log('年龄类型:', typeof userAge);
console.log('是否会员类型:', typeof isVip);
console.log('购物车类型:', typeof shoppingCart);
console.log('用户信息类型:', typeof userInfo);

// 访问对象属性
console.log('用户姓名:', userInfo.name);
console.log('用户年龄:', userInfo.age);
                `,
                testCases: [
                    { input: 'typeof "张三"', expected: 'string' },
                    { input: 'typeof 25', expected: 'number' }
                ]
            },
            'prog-2': {
                title: '条件判断练习',
                description: '根据用户年龄判断票价',
                hint: '使用if-else语句实现多条件判断',
                solution: `
// 定义票价计算函数
function calculateTicketPrice(age) {
    let price = 100; // 默认全价
    
    // 根据年龄判断票价
    if (age < 6) {
        price = 0; // 免票
    } else if (age < 18) {
        price = 50; // 儿童票
    } else if (age >= 60) {
        price = 50; // 老人票
    }
    // 其他情况保持全价
    
    return price;
}

// 测试不同年龄
console.log('5岁票价:', calculateTicketPrice(5));
console.log('15岁票价:', calculateTicketPrice(15));
console.log('30岁票价:', calculateTicketPrice(30));
console.log('65岁票价:', calculateTicketPrice(65));
                `,
                testCases: [
                    { input: 'calculateTicketPrice(5)', expected: 0 },
                    { input: 'calculateTicketPrice(30)', expected: 100 }
                ]
            },
            'db-1': {
                title: '模拟数据库查询',
                description: '模拟从用户表中查询数据',
                hint: '使用数组的filter方法模拟数据库查询',
                solution: `
// 模拟用户表数据
const users = [
    { id: 1, name: '张三', phone: '13800138000', score: 100 },
    { id: 2, name: '李四', phone: '13900139000', score: 200 },
    { id: 3, name: '王五', phone: '13700137000', score: 150 },
    { id: 4, name: '赵六', phone: '13600136000', score: 300 }
];

// 查询函数：按手机号查询
function findUserByPhone(phone) {
    const user = users.find(u => u.phone === phone);
    return user || { message: '用户不存在' };
}

// 查询函数：按积分范围查询
function findUsersByScoreRange(minScore, maxScore) {
    return users.filter(u => u.score >= minScore && u.score <= maxScore);
}

// 测试查询
console.log('查询手机号13800138000:', findUserByPhone('13800138000'));
console.log('查询积分100-200的用户:', findUsersByScoreRange(100, 200));
console.log('查询不存在的用户:', findUserByPhone('12345678901'));
                `,
                testCases: [
                    { input: 'findUserByPhone("13800138000")', expected: '张三' }
                ]
            },
            'data-1': {
                title: '计算留存率',
                description: '根据新增用户和留存用户数计算留存率',
                hint: '留存率 = (留存用户数 / 新增用户数) × 100%',
                solution: `
// 定义数据
const day1NewUsers = 1000;     // 第1天新增用户
const day2ActiveUsers = 400;    // 第2天还活跃的用户
const day7ActiveUsers = 200;    // 第7天还活跃的用户
const day30ActiveUsers = 100;   // 第30天还活跃的用户

// 计算留存率函数
function calculateRetention(newUsers, activeUsers) {
    if (newUsers === 0) return 0;
    return ((activeUsers / newUsers) * 100).toFixed(2) + '%';
}

// 计算各期留存率
console.log('次日留存率:', calculateRetention(day1NewUsers, day2ActiveUsers));
console.log('7日留存率:', calculateRetention(day1NewUsers, day7ActiveUsers));
console.log('30日留存率:', calculateRetention(day1NewUsers, day30ActiveUsers));

// 判断留存率是否达标
function isRetentionGood(retentionRate) {
    const rate = parseFloat(retentionRate);
    return rate >= 40; // 次日留存40%算不错
}

console.log('次日留存是否达标:', isRetentionGood(calculateRetention(day1NewUsers, day2ActiveUsers)));
                `,
                testCases: [
                    { input: 'calculateRetention(1000, 400)', expected: '40.00%' }
                ]
            }
        },
        
        // 加载练习任务
        loadTask(knowledgeId) {
            const task = this.taskTemplates[knowledgeId];
            if (!task) {
                return null;
            }
            
            this.currentTask = {
                ...task,
                knowledgeId: knowledgeId,
                userCode: '',
                completed: false
            };
            
            return this.currentTask;
        },
        
        // 检查练习答案
        checkAnswer(userCode) {
            if (!this.currentTask) {
                return { success: false, message: '没有当前练习任务' };
            }
            
            try {
                const result = CodeRunner.runJS(userCode);
                
                if (!result.success) {
                    return { success: false, message: '代码有错误：' + result.error };
                }
                
                // 检查输出是否包含预期结果
                const output = result.output;
                const testCases = this.currentTask.testCases || [];
                
                let allPassed = true;
                const results = [];
                
                testCases.forEach((testCase, index) => {
                    const passed = output.includes(testCase.expected);
                    results.push({
                        index: index + 1,
                        input: testCase.input,
                        expected: testCase.expected,
                        passed: passed
                    });
                    
                    if (!passed) allPassed = false;
                });
                
                return {
                    success: allPassed,
                    message: allPassed ? '🎉 恭喜！所有测试用例都通过了！' : '❌ 还有测试用例未通过，请继续尝试',
                    results: results
                };
            } catch (error) {
                return { success: false, message: '检查答案时出错：' + error.message };
            }
        }
    };
    
    // ==================== 自测系统 ====================
    const QuizSystem = {
        // 自测题目
        quizzes: {
            'arch-1': [
                {
                    question: '前端相当于外卖系统中的哪个角色？',
                    options: ['餐厅后厨', '美团APP界面', '外卖骑手', '冰箱/仓库'],
                    correct: 1,
                    explanation: '前端就是用户能看到的界面，就像美团APP界面让你看到各种餐厅。'
                },
                {
                    question: '数据库的作用是什么？',
                    options: ['传消息', '真正干活', '存东西', '给你看的'],
                    correct: 2,
                    explanation: '数据库就像冰箱/仓库，用来存储各种数据，比如用户信息、订单记录等。'
                },
                {
                    question: '用户点击"购买"按钮后，第一步是什么？',
                    options: ['扣库存', '生成订单', '检查库存', '跳转支付'],
                    correct: 2,
                    explanation: '下单流程：检查库存 → 计算金额 → 创建订单 → 扣减库存 → 跳转支付。'
                }
            ],
            'prog-1': [
                {
                    question: '手机号应该用什么数据类型存储？',
                    options: ['数字', '字符串', '布尔值', '数组'],
                    correct: 1,
                    explanation: '手机号虽然是数字，但通常用字符串存储，因为不需要计算，且可能以0开头。'
                },
                {
                    question: '价格99.99元应该怎么存？',
                    options: ['存为99.99', '存为9999（分）', '存为99', '存为100'],
                    correct: 1,
                    explanation: '为了计算精度，价格应该按"分"存储为整数9999，显示时再除以100。'
                },
                {
                    question: '以下哪个是布尔值？',
                    options: ['"张三"', '25', 'true', '["手机", "耳机"]'],
                    correct: 2,
                    explanation: '布尔值只有true和false两种，表示是/否、真/假的状态。'
                }
            ],
            'db-1': [
                {
                    question: '关系型数据库像什么？',
                    options: ['文件夹', 'Excel表格', '图片', '视频'],
                    correct: 1,
                    explanation: '关系型数据库就像Excel表格，用行和列来组织数据。'
                },
                {
                    question: '什么是主键？',
                    options: ['可以重复的ID', '唯一的标识', '可以为空的字段', '普通的字段'],
                    correct: 1,
                    explanation: '主键是每行的唯一标识，就像身份证号，不能重复且不能为空。'
                },
                {
                    question: '软删除和硬删除的区别是？',
                    options: ['软删除真的删除数据', '硬删除加个标记', '软删除加标记，硬删除真删', '两者没区别'],
                    correct: 2,
                    explanation: '软删除只是加个"已删除"标记，数据还在；硬删除是真正从数据库删掉。'
                }
            ],
            'data-1': [
                {
                    question: 'DAU代表什么？',
                    options: ['月活跃用户', '日活跃用户', '新增用户', '留存率'],
                    correct: 1,
                    explanation: 'DAU = Daily Active Users，即日活跃用户数，表示每天有多少人使用产品。'
                },
                {
                    question: '次日留存40%算好吗？',
                    options: ['算很差', '算一般', '算不错', '算非常好'],
                    correct: 2,
                    explanation: '次日留存40%+算不错，说明有40%的新用户第二天还会回来使用。'
                },
                {
                    question: 'LTV > CAC 表示什么？',
                    options: ['用户流失', '能赚钱', '需要优化', '数据错误'],
                    correct: 1,
                    explanation: 'LTV（用户生命周期价值）> CAC（获客成本）表示从每个用户身上赚的钱大于获得他的成本，能盈利。'
                }
            ]
        },
        
        // 当前自测状态
        currentQuiz: null,
        currentQuestionIndex: 0,
        userAnswers: [],
        score: 0,
        
        // 加载自测
        loadQuiz(knowledgeId) {
            const quiz = this.quizzes[knowledgeId];
            if (!quiz || quiz.length === 0) {
                return null;
            }
            
            this.currentQuiz = {
                knowledgeId: knowledgeId,
                questions: quiz,
                currentQuestionIndex: 0,
                userAnswers: new Array(quiz.length).fill(null),
                score: 0
            };
            
            return this.currentQuiz;
        },
        
        // 回答问题
        answerQuestion(questionIndex, answerIndex) {
            if (!this.currentQuiz) return;
            
            this.currentQuiz.userAnswers[questionIndex] = answerIndex;
            
            // 检查答案是否正确
            const question = this.currentQuiz.questions[questionIndex];
            const isCorrect = answerIndex === question.correct;
            
            if (isCorrect) {
                this.currentQuiz.score++;
            }
            
            return {
                isCorrect: isCorrect,
                correctAnswer: question.correct,
                explanation: question.explanation
            };
        },
        
        // 获取自测结果
        getResult() {
            if (!this.currentQuiz) return null;
            
            const total = this.currentQuiz.questions.length;
            const correct = this.currentQuiz.score;
            const percentage = ((correct / total) * 100).toFixed(0);
            
            let grade = '';
            if (percentage >= 80) grade = '优秀 🌟';
            else if (percentage >= 60) grade = '良好 👍';
            else if (percentage >= 40) grade = '及格 👌';
            else grade = '需要努力 💪';
            
            return {
                total: total,
                correct: correct,
                percentage: percentage,
                grade: grade
            };
        }
    };
    
    // ==================== 即时反馈系统 ====================
    const FeedbackSystem = {
        // 显示成功反馈
        showSuccess(message, duration = 3000) {
            this.showFeedback('✅ ' + message, 'success', duration);
        },
        
        // 显示错误反馈
        showError(message, duration = 3000) {
            this.showFeedback('❌ ' + message, 'error', duration);
        },
        
        // 显示提示反馈
        showInfo(message, duration = 3000) {
            this.showFeedback('💡 ' + message, 'info', duration);
        },
        
        // 显示反馈
        showFeedback(message, type, duration) {
            const feedback = document.createElement('div');
            feedback.className = `feedback-toast feedback-${type}`;
            feedback.textContent = message;
            feedback.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                padding: 12px 20px;
                background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
                color: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                animation: slideIn 0.3s ease;
                font-weight: 500;
            `;
            
            document.body.appendChild(feedback);
            
            setTimeout(() => {
                feedback.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => feedback.remove(), 300);
            }, duration);
        },
        
        // 显示进度反馈
        showProgress(current, total, message) {
            const percentage = ((current / total) * 100).toFixed(0);
            this.showInfo(`${message} ${percentage}%`);
        }
    };
    
    // ==================== 初始化 ====================
    function init() {
        // 添加样式
        addStyles();
        
        // 暴露到全局
        window.InteractiveLearning = {
            CodeRunner: CodeRunner,
            PracticeSystem: PracticeSystem,
            QuizSystem: QuizSystem,
            FeedbackSystem: FeedbackSystem
        };
        
        console.log('交互式学习系统已加载');
    }
    
    // 添加样式
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .css-preview {
                padding: 20px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                margin-top: 10px;
            }
        `;
        document.head.appendChild(style);
    }
    
    // 页面加载后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
