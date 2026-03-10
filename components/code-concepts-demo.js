/**
 * 代码的四个基本构件 - 交互式演示组件
 * 展示变量、函数、条件、循环四个编程概念
 * 
 * 自动显示在 prog-2 知识点详情页
 */

(function() {
    'use strict';

    const demoState = {
        activeTab: 'variable',
        variable: { name: 'username', value: '张三' },
        function: { price: 100, quantity: 2, result: null },
        condition: { isLoggedIn: true },
        loop: { 
            items: ['🍎 苹果', '🍌 香蕉', '🍇 葡萄', '🍊 橙子', '🍓 草莓'], 
            currentIndex: -1,
            isRunning: false
        },
        isInitialized: false
    };

    let elements = {};

    function init() {
        const demoArea = document.getElementById('codeConceptsDemoArea');
        if (!demoArea) {
            return;
        }

        if (demoState.isInitialized) {
            return;
        }

        demoArea.innerHTML = createComponentHTML();
        addComponentStyles();
        cacheElements();
        bindEvents();
        render();
        demoState.isInitialized = true;
    }

    function createComponentHTML() {
        return `
            <div class="code-concepts-demo" id="codeConceptsDemo">
                <div class="demo-header">
                    <h2 class="demo-title">🎮 代码的四个基本构件</h2>
                </div>
                
                <p class="demo-intro">
                    所有程序都由这四个基本构件组成。动手试试，理解它们是如何工作的！
                </p>
                
                <div class="demo-tabs">
                    <button class="demo-tab active" data-tab="variable">
                        <span class="tab-icon">📦</span>
                        <span class="tab-text">变量</span>
                    </button>
                    <button class="demo-tab" data-tab="function">
                        <span class="tab-icon">⚙️</span>
                        <span class="tab-text">函数</span>
                    </button>
                    <button class="demo-tab" data-tab="condition">
                        <span class="tab-icon">🔀</span>
                        <span class="tab-text">条件</span>
                    </button>
                    <button class="demo-tab" data-tab="loop">
                        <span class="tab-icon">🔄</span>
                        <span class="tab-text">循环</span>
                    </button>
                </div>
                
                <div class="demo-content">
                    <div class="tab-panel active" id="variable-panel">
                        <p class="panel-description">变量就像贴了标签的盒子，里面装着数据</p>
                        <div class="variable-demo">
                            <div class="input-row">
                                <div class="input-group">
                                    <label>变量名</label>
                                    <input type="text" id="varName" placeholder="username" value="username">
                                </div>
                                <div class="input-group">
                                    <label>值</label>
                                    <input type="text" id="varValue" placeholder="张三" value="张三">
                                </div>
                                <button class="action-btn" id="assignBtn">赋值</button>
                            </div>
                            <p class="hint-text">点击"赋值"创建变量</p>
                        </div>
                    </div>
                    
                    <div class="tab-panel" id="function-panel">
                        <p class="panel-description">函数是一台机器：输入参数 → 处理 → 输出结果</p>
                        <div class="function-demo">
                            <div class="function-inputs">
                                <div class="input-section">
                                    <label>输入</label>
                                    <div class="input-group">
                                        <span class="input-label">单价</span>
                                        <input type="number" id="funcPrice" value="100" min="0">
                                    </div>
                                    <div class="input-group">
                                        <span class="input-label">数量</span>
                                        <input type="number" id="funcQuantity" value="2" min="1">
                                    </div>
                                </div>
                                <button class="action-btn run-btn" id="runBtn">
                                    <span class="btn-icon">▶</span>
                                    <span>运行</span>
                                </button>
                                <div class="output-section">
                                    <label>输出</label>
                                    <div class="output-value" id="funcResult">?</div>
                                    <span class="formula">单价 × 数量</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-panel" id="condition-panel">
                        <p class="panel-description">条件判断让程序根据不同情况走不同路径</p>
                        <div class="condition-demo">
                            <div class="condition-control">
                                <span class="condition-label">用户已登录？</span>
                                <label class="toggle-switch">
                                    <input type="checkbox" id="loginToggle" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                                <span class="toggle-value" id="toggleValue">true</span>
                            </div>
                            <div class="condition-visual">
                                <div class="condition-if">if (用户已登录)</div>
                                <div class="condition-branches">
                                    <div class="branch true-branch active" id="trueBranch">
                                        <span class="branch-icon">✅</span>
                                        <span class="branch-value">true</span>
                                        <span class="branch-action">显示"欢迎回来！"</span>
                                    </div>
                                    <div class="branch false-branch" id="falseBranch">
                                        <span class="branch-icon">❌</span>
                                        <span class="branch-value">false</span>
                                        <span class="branch-action">显示"请登录"按钮</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-panel" id="loop-panel">
                        <p class="panel-description">循环让程序对列表中的每一项重复执行操作</p>
                        <div class="loop-demo">
                            <div class="loop-items" id="loopItems">
                                ${demoState.loop.items.map((item, index) => `
                                    <div class="loop-item" data-index="${index}">${item}</div>
                                `).join('')}
                            </div>
                            <button class="action-btn loop-btn" id="loopBtn">
                                <span class="btn-icon">▶</span>
                                <span>开始循环</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="code-display">
                    <div class="code-header">
                        <span class="code-lang">JavaScript</span>
                    </div>
                    <pre class="code-content" id="codeContent"><code>let username = "张三"</code></pre>
                </div>
                
                <p class="demo-footer">
                    💡 当你让 AI 生成代码时，它本质上是在组合这四种基本元素。理解这些概念有助于你阅读代码，知道它在做什么。
                </p>
            </div>
        `;
    }

    function cacheElements() {
        elements = {
            container: document.getElementById('codeConceptsDemo'),
            tabs: document.querySelectorAll('.code-concepts-demo .demo-tab'),
            panels: document.querySelectorAll('.code-concepts-demo .tab-panel'),
            codeContent: document.getElementById('codeContent'),
            
            varName: document.getElementById('varName'),
            varValue: document.getElementById('varValue'),
            assignBtn: document.getElementById('assignBtn'),
            
            funcPrice: document.getElementById('funcPrice'),
            funcQuantity: document.getElementById('funcQuantity'),
            runBtn: document.getElementById('runBtn'),
            funcResult: document.getElementById('funcResult'),
            
            loginToggle: document.getElementById('loginToggle'),
            toggleValue: document.getElementById('toggleValue'),
            trueBranch: document.getElementById('trueBranch'),
            falseBranch: document.getElementById('falseBranch'),
            
            loopItems: document.getElementById('loopItems'),
            loopBtn: document.getElementById('loopBtn')
        };
    }

    function bindEvents() {
        elements.tabs.forEach(tab => {
            tab.addEventListener('click', () => switchTab(tab.dataset.tab));
        });
        
        elements.assignBtn.addEventListener('click', handleVariableAssign);
        elements.varName.addEventListener('input', updateVariableState);
        elements.varValue.addEventListener('input', updateVariableState);
        
        elements.runBtn.addEventListener('click', handleFunctionRun);
        elements.funcPrice.addEventListener('input', updateFunctionState);
        elements.funcQuantity.addEventListener('input', updateFunctionState);
        
        elements.loginToggle.addEventListener('change', handleConditionToggle);
        
        elements.loopBtn.addEventListener('click', handleLoopStart);
    }

    function switchTab(tabName) {
        demoState.activeTab = tabName;
        
        elements.tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });
        
        elements.panels.forEach(panel => {
            panel.classList.toggle('active', panel.id === `${tabName}-panel`);
        });
        
        updateCodeDisplay();
    }

    function updateVariableState() {
        demoState.variable.name = elements.varName.value.trim();
        demoState.variable.value = elements.varValue.value.trim();
    }

    function handleVariableAssign() {
        updateVariableState();
        const { name, value } = demoState.variable;
        
        if (!name || !value) {
            showFeedback('请输入变量名和值', 'error');
            return;
        }
        
        elements.assignBtn.classList.add('clicked');
        setTimeout(() => elements.assignBtn.classList.remove('clicked'), 300);
        
        updateCodeDisplay();
        showFeedback('变量创建成功！', 'success');
    }

    function updateFunctionState() {
        demoState.function.price = parseFloat(elements.funcPrice.value) || 0;
        demoState.function.quantity = parseInt(elements.funcQuantity.value) || 0;
        demoState.function.result = null;
        elements.funcResult.textContent = '?';
        elements.funcResult.classList.remove('show');
    }

    function handleFunctionRun() {
        updateFunctionState();
        const { price, quantity } = demoState.function;
        
        elements.runBtn.classList.add('running');
        
        setTimeout(() => {
            const result = price * quantity;
            demoState.function.result = result;
            
            elements.funcResult.textContent = result;
            elements.funcResult.classList.add('show');
            elements.runBtn.classList.remove('running');
            
            updateCodeDisplay();
            showFeedback('计算完成！', 'success');
        }, 500);
    }

    function handleConditionToggle() {
        const isChecked = elements.loginToggle.checked;
        demoState.condition.isLoggedIn = isChecked;
        
        elements.toggleValue.textContent = isChecked;
        
        elements.trueBranch.classList.toggle('active', isChecked);
        elements.falseBranch.classList.toggle('active', !isChecked);
        
        updateCodeDisplay();
    }

    function handleLoopStart() {
        if (demoState.loop.isRunning) return;
        
        demoState.loop.isRunning = true;
        demoState.loop.currentIndex = -1;
        
        elements.loopBtn.disabled = true;
        elements.loopBtn.innerHTML = '<span class="btn-icon">⏸</span><span>运行中...</span>';
        
        document.querySelectorAll('.code-concepts-demo .loop-item').forEach(item => {
            item.classList.remove('active');
        });
        
        let index = 0;
        const interval = setInterval(() => {
            if (index > 0) {
                const prevItem = document.querySelector(`.code-concepts-demo .loop-item[data-index="${index - 1}"]`);
                if (prevItem) prevItem.classList.remove('active');
            }
            
            if (index < demoState.loop.items.length) {
                const currentItem = document.querySelector(`.code-concepts-demo .loop-item[data-index="${index}"]`);
                if (currentItem) currentItem.classList.add('active');
                demoState.loop.currentIndex = index;
                index++;
            } else {
                clearInterval(interval);
                demoState.loop.isRunning = false;
                demoState.loop.currentIndex = -1;
                
                document.querySelectorAll('.code-concepts-demo .loop-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                elements.loopBtn.disabled = false;
                elements.loopBtn.innerHTML = '<span class="btn-icon">▶</span><span>开始循环</span>';
                
                updateCodeDisplay();
                showFeedback('循环执行完成！', 'success');
            }
        }, 600);
    }

    function updateCodeDisplay() {
        let code = '';
        
        switch (demoState.activeTab) {
            case 'variable':
                const { name, value } = demoState.variable;
                if (name && value) {
                    code = `let ${name} = "${value}"`;
                } else {
                    code = `let username = "张三"`;
                }
                break;
                
            case 'function':
                const { price, quantity, result } = demoState.function;
                code = `function calcPrice(price, qty) {
    return price * qty
}

// 计算结果: ${result !== null ? result : '?'}`;
                break;
                
            case 'condition':
                const { isLoggedIn } = demoState.condition;
                code = `if (用户已登录) {
    // ${isLoggedIn ? '显示"欢迎回来！"' : '...'}
} else {
    // ${!isLoggedIn ? '显示"请登录"按钮' : '...'}
}`;
                break;
                
            case 'loop':
                code = `for (const item of list) {
    process(item)
}`;
                break;
        }
        
        elements.codeContent.innerHTML = `<code>${escapeHtml(code)}</code>`;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function showFeedback(message, type) {
        const feedback = document.createElement('div');
        feedback.className = `demo-feedback ${type}`;
        feedback.textContent = message;
        
        elements.container.appendChild(feedback);
        
        requestAnimationFrame(() => {
            feedback.classList.add('show');
        });
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => feedback.remove(), 300);
        }, 2000);
    }

    function render() {
        updateCodeDisplay();
    }

    function addComponentStyles() {
        if (document.getElementById('code-concepts-demo-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'code-concepts-demo-styles';
        style.textContent = `
            .interactive-demo-section {
                margin: 32px 0;
                border-radius: 16px;
                overflow: hidden;
            }
            
            .code-concepts-demo {
                background: #ffffff;
                border-radius: 16px;
                padding: 32px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                border: 1px solid #e2e8f0;
            }
            
            .demo-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
            }
            
            .demo-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #1e293b;
                margin: 0;
            }
            
            .demo-intro {
                color: #64748b;
                margin-bottom: 24px;
                line-height: 1.6;
            }
            
            .demo-tabs {
                display: flex;
                gap: 12px;
                margin-bottom: 24px;
                flex-wrap: wrap;
            }
            
            .demo-tab {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 12px 20px;
                background: #f1f5f9;
                border: 2px solid transparent;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9375rem;
                font-weight: 500;
                color: #64748b;
            }
            
            .demo-tab:hover {
                background: #e2e8f0;
                transform: translateY(-2px);
            }
            
            .demo-tab.active {
                background: #ffffff;
                border-color: #0d9488;
                color: #0d9488;
                box-shadow: 0 2px 8px rgba(13, 148, 136, 0.15);
            }
            
            .tab-icon {
                font-size: 1.125rem;
            }
            
            .demo-content {
                min-height: 280px;
            }
            
            .tab-panel {
                display: none;
                animation: fadeIn 0.3s ease;
            }
            
            .tab-panel.active {
                display: block;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .panel-description {
                font-size: 0.9375rem;
                color: #64748b;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            
            .variable-demo,
            .function-demo,
            .condition-demo,
            .loop-demo {
                background: #f8fafc;
                border-radius: 12px;
                padding: 24px;
            }
            
            .input-row {
                display: flex;
                align-items: flex-end;
                gap: 12px;
                flex-wrap: wrap;
            }
            
            .input-group {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            
            .input-group label {
                font-size: 0.8125rem;
                font-weight: 500;
                color: #94a3b8;
            }
            
            .input-group input {
                padding: 10px 14px;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                font-size: 0.9375rem;
                background: #ffffff;
                transition: all 0.2s ease;
                min-width: 120px;
            }
            
            .input-group input:focus {
                outline: none;
                border-color: #0d9488;
                box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
            }
            
            .hint-text {
                font-size: 0.8125rem;
                color: #94a3b8;
                font-style: italic;
                margin-top: 16px;
            }
            
            .function-inputs {
                display: flex;
                align-items: center;
                gap: 24px;
                flex-wrap: wrap;
            }
            
            .input-section {
                background: #ffffff;
                border-radius: 12px;
                padding: 20px;
                min-width: 140px;
            }
            
            .input-section label {
                display: block;
                font-size: 0.8125rem;
                font-weight: 600;
                color: #64748b;
                margin-bottom: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .input-section .input-group {
                margin-bottom: 12px;
            }
            
            .input-section .input-group:last-child {
                margin-bottom: 0;
            }
            
            .input-label {
                font-size: 0.75rem;
                color: #94a3b8;
                margin-bottom: 4px;
                display: block;
            }
            
            .input-section input {
                width: 100%;
                padding: 10px;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                font-size: 1rem;
                text-align: center;
                font-weight: 600;
                color: #1e293b;
            }
            
            .input-section input:focus {
                outline: none;
                border-color: #0d9488;
            }
            
            .output-section {
                background: #ffffff;
                border-radius: 12px;
                padding: 20px;
                min-width: 140px;
                text-align: center;
            }
            
            .output-section label {
                display: block;
                font-size: 0.8125rem;
                font-weight: 600;
                color: #64748b;
                margin-bottom: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .output-value {
                font-size: 2.5rem;
                font-weight: 700;
                color: #1e293b;
                min-height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            
            .output-value.show {
                color: #0d9488;
                transform: scale(1.1);
            }
            
            .formula {
                font-size: 0.75rem;
                color: #94a3b8;
                margin-top: 8px;
                display: block;
            }
            
            .condition-control {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 24px;
            }
            
            .condition-label {
                font-size: 0.9375rem;
                font-weight: 500;
                color: #1e293b;
            }
            
            .toggle-switch {
                position: relative;
                display: inline-block;
                width: 52px;
                height: 28px;
            }
            
            .toggle-switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            
            .toggle-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #cbd5e1;
                transition: 0.3s;
                border-radius: 28px;
            }
            
            .toggle-slider:before {
                position: absolute;
                content: "";
                height: 22px;
                width: 22px;
                left: 3px;
                bottom: 3px;
                background-color: white;
                transition: 0.3s;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            
            .toggle-switch input:checked + .toggle-slider {
                background-color: #10b981;
            }
            
            .toggle-switch input:checked + .toggle-slider:before {
                transform: translateX(24px);
            }
            
            .toggle-value {
                font-size: 0.875rem;
                font-weight: 600;
                color: #64748b;
                min-width: 40px;
            }
            
            .condition-visual {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px;
            }
            
            .condition-if {
                background: #e2e8f0;
                padding: 10px 20px;
                border-radius: 8px;
                font-size: 0.9375rem;
                color: #475569;
                font-family: 'Courier New', monospace;
            }
            
            .condition-branches {
                display: flex;
                gap: 20px;
                width: 100%;
                max-width: 400px;
            }
            
            .branch {
                flex: 1;
                background: #ffffff;
                border: 2px solid #e2e8f0;
                border-radius: 12px;
                padding: 16px;
                text-align: center;
                transition: all 0.3s ease;
                opacity: 0.5;
            }
            
            .branch.active {
                border-color: #0d9488;
                box-shadow: 0 4px 12px rgba(13, 148, 136, 0.15);
                opacity: 1;
            }
            
            .branch-icon {
                font-size: 1.5rem;
                display: block;
                margin-bottom: 8px;
            }
            
            .branch-value {
                font-size: 1.125rem;
                font-weight: 600;
                display: block;
                margin-bottom: 4px;
            }
            
            .true-branch.active .branch-value {
                color: #10b981;
            }
            
            .false-branch.active .branch-value {
                color: #ef4444;
            }
            
            .branch-action {
                font-size: 0.75rem;
                color: #64748b;
            }
            
            .loop-items {
                display: flex;
                gap: 12px;
                margin-bottom: 20px;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .loop-item {
                padding: 12px 20px;
                background: #ffffff;
                border: 2px solid #e2e8f0;
                border-radius: 10px;
                font-size: 0.9375rem;
                transition: all 0.3s ease;
            }
            
            .loop-item.active {
                background: #0d9488;
                border-color: #0d9488;
                color: white;
                transform: scale(1.1);
                box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);
            }
            
            .action-btn {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 12px 24px;
                background: #0f172a;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 0.9375rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .action-btn:hover {
                background: #1e293b;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            }
            
            .action-btn:active {
                transform: translateY(0);
            }
            
            .action-btn.clicked {
                animation: btnClick 0.3s ease;
            }
            
            @keyframes btnClick {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(0.95); }
            }
            
            .run-btn, .loop-btn {
                background: #0d9488;
            }
            
            .run-btn:hover, .loop-btn:hover {
                background: #0f766e;
            }
            
            .run-btn.running {
                opacity: 0.7;
                cursor: not-allowed;
            }
            
            .btn-icon {
                font-size: 0.75rem;
            }
            
            .code-display {
                margin-top: 24px;
                background: #f1f5f9;
                border-radius: 12px;
                overflow: hidden;
            }
            
            .code-header {
                background: #e2e8f0;
                padding: 10px 16px;
                border-bottom: 1px solid #cbd5e1;
            }
            
            .code-lang {
                font-size: 0.75rem;
                font-weight: 600;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .code-content {
                padding: 20px;
                margin: 0;
                font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
                font-size: 0.875rem;
                line-height: 1.6;
                color: #1e293b;
                overflow-x: auto;
            }
            
            .code-content code {
                font-family: inherit;
            }
            
            .demo-footer {
                margin-top: 24px;
                font-size: 0.9375rem;
                color: #475569;
                line-height: 1.7;
                padding: 16px;
                background: #f8fafc;
                border-radius: 8px;
                border-left: 4px solid #0d9488;
            }
            
            .demo-feedback {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 20px;
                border-radius: 8px;
                font-size: 0.875rem;
                font-weight: 500;
                color: white;
                transform: translateX(120%);
                transition: transform 0.3s ease;
                z-index: 10000;
            }
            
            .demo-feedback.show {
                transform: translateX(0);
            }
            
            .demo-feedback.success {
                background: #10b981;
            }
            
            .demo-feedback.error {
                background: #ef4444;
            }
            
            @media (max-width: 640px) {
                .code-concepts-demo {
                    padding: 20px;
                }
                
                .demo-title {
                    font-size: 1.25rem;
                }
                
                .demo-tabs {
                    gap: 8px;
                }
                
                .demo-tab {
                    padding: 10px 14px;
                    font-size: 0.875rem;
                }
                
                .input-row {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .function-inputs {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .condition-branches {
                    flex-direction: column;
                }
                
                .loop-items {
                    justify-content: flex-start;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    window.startCodeConceptsDemo = init;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    setTimeout(init, 100);

})();
