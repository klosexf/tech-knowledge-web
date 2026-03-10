/**
 * APP开发方式对比演示组件
 * 展示原生开发、混合开发、跨平台开发的区别
 * 
 * 自动显示在 front-4 知识点详情页
 */

(function() {
    'use strict';

    const demoState = {
        activeMethod: 'native',
        viewMode: 'code',
        isInitialized: false
    };

    const methodData = {
        native: {
            name: '原生开发',
            icon: '🔧',
            color: '#3B82F6',
            desc: '使用官方语言和工具开发',
            languages: 'Swift (iOS) / Kotlin (Android)',
            tools: 'Xcode / Android Studio',
            performance: 5,
            cost: 5,
            time: 5,
            maintain: 4,
            bestFor: ['大型APP', '游戏', '需要极致性能', '复杂动画'],
            companies: ['微信', '抖音', '淘宝'],
            code: `// iOS - Swift 原生代码示例
import UIKit

class LoginViewController: UIViewController {
    
    private let usernameField = UITextField()
    private let passwordField = UITextField()
    private let loginButton = UIButton()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }
    
    private func setupUI() {
        // 设置用户名输入框
        usernameField.placeholder = "用户名"
        usernameField.borderStyle = .roundedRect
        view.addSubview(usernameField)
        
        // 设置密码输入框
        passwordField.placeholder = "密码"
        passwordField.isSecureTextEntry = true
        passwordField.borderStyle = .roundedRect
        view.addSubview(passwordField)
        
        // 设置登录按钮
        loginButton.setTitle("登录", for: .normal)
        loginButton.backgroundColor = .systemBlue
        loginButton.layer.cornerRadius = 8
        loginButton.addTarget(self, action: #selector(loginTapped), for: .touchUpInside)
        view.addSubview(loginButton)
        
        // 使用 Auto Layout 布局
        setupConstraints()
    }
    
    @objc private func loginTapped() {
        // 原生网络请求
        let url = URL(string: "https://api.example.com/login")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        
        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            // 处理响应
        }
        task.resume()
    }
}`,
            pros: [
                '性能最优，流畅度最高',
                '可以访问所有系统API',
                '用户体验最好',
                '官方支持，文档完善'
            ],
            cons: [
                '需要两个团队（iOS+Android）',
                '开发成本最高',
                '开发周期最长',
                '维护两套代码'
            ]
        },
        hybrid: {
            name: '混合开发',
            icon: '🌐',
            color: '#10B981',
            desc: 'Web技术 + 原生容器',
            languages: 'HTML + CSS + JavaScript',
            tools: 'VS Code / WebStorm',
            performance: 3,
            cost: 3,
            time: 3,
            maintain: 3,
            bestFor: ['内容展示型APP', '新闻资讯', '企业内部应用', '快速原型'],
            companies: ['一些新闻类APP', '企业内部工具'],
            code: `<!-- 混合开发 - HTML/CSS/JS 代码 -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录页面</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: -apple-system, sans-serif;
            background: #f5f5f5;
            padding: 20px;
        }
        
        .login-form {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .input-field {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
        }
        
        .login-btn {
            width: 100%;
            padding: 14px;
            background: #007AFF;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="login-form">
        <input type="text" class="input-field" placeholder="用户名" id="username">
        <input type="password" class="input-field" placeholder="密码" id="password">
        <button class="login-btn" onclick="login()">登录</button>
    </div>
    
    <script src="cordova.js"></script>
    <script>
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // 调用原生插件
            cordova.plugins.http.post(
                'https://api.example.com/login',
                { username, password },
                {},
                function(response) {
                    alert('登录成功');
                },
                function(error) {
                    alert('登录失败: ' + error.error);
                }
            );
        }
    </script>
</body>
</html>`,
            pros: [
                '一套代码多端运行',
                '开发成本较低',
                'Web技术栈，人员好找',
                '更新方便（热更新）'
            ],
            cons: [
                '性能不如原生',
                '复杂动画卡顿',
                '依赖原生插件',
                '体验不如原生APP'
            ]
        },
        crossplatform: {
            name: '跨平台开发',
            icon: '⚡',
            color: '#8B5CF6',
            desc: '一套代码生成原生APP',
            languages: 'Dart (Flutter) / JavaScript (RN)',
            tools: 'VS Code / Android Studio',
            performance: 4,
            cost: 2,
            time: 2,
            maintain: 2,
            bestFor: ['创业团队', '中小型APP', '快速上线', '预算有限'],
            companies: ['闲鱼', '美团', 'Instagram', 'Discord'],
            code: `// Flutter 跨平台代码示例
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.all(20.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // 用户名输入框
            TextField(
              controller: _usernameController,
              decoration: InputDecoration(
                labelText: '用户名',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
                prefixIcon: Icon(Icons.person),
              ),
            ),
            SizedBox(height: 16),
            
            // 密码输入框
            TextField(
              controller: _passwordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: '密码',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
                prefixIcon: Icon(Icons.lock),
              ),
            ),
            SizedBox(height: 24),
            
            // 登录按钮
            SizedBox(
              width: double.infinity,
              height: 50,
              child: ElevatedButton(
                onPressed: _login,
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: Text(
                  '登录',
                  style: TextStyle(fontSize: 16),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _login() async {
    // 一套代码在 iOS 和 Android 上都能运行
    final response = await http.post(
      Uri.parse('https://api.example.com/login'),
      body: {
        'username': _usernameController.text,
        'password': _passwordController.text,
      },
    );
    
    if (response.statusCode == 200) {
      // 登录成功
    }
  }
}`,
            pros: [
                '一套代码，iOS+Android',
                '开发效率最高',
                '接近原生性能',
                '热重载，开发体验好'
            ],
            cons: [
                '需要学习新框架',
                '某些功能需要原生代码',
                '包体积较大',
                '第三方库依赖'
            ]
        }
    };

    let elements = {};

    function init() {
        const demoArea = document.getElementById('devMethodsDemoArea');
        if (!demoArea) {
            return;
        }

        if (demoState.isInitialized && demoArea.innerHTML.trim() !== '') {
            return;
        }

        demoState.isInitialized = false;
        demoArea.innerHTML = createComponentHTML();
        addComponentStyles();
        cacheElements();
        bindEvents();
        render();
        demoState.isInitialized = true;
    }

    function createComponentHTML() {
        return `
            <div class="dev-methods-demo" id="devMethodsDemo">
                <div class="demo-header">
                    <h2 class="demo-title">🔨 做APP的三种方式</h2>
                </div>
                
                <p class="demo-intro">
                    不同的开发方式适合不同的场景。选择一种方式，了解它的技术特点、优缺点和适用场景！
                </p>
                
                <div class="method-selector">
                    ${Object.entries(methodData).map(([key, data]) => `
                        <button class="method-btn ${demoState.activeMethod === key ? 'active' : ''}" data-method="${key}" style="--method-color: ${data.color}">
                            <span class="method-icon">${data.icon}</span>
                            <div class="method-info">
                                <span class="method-name">${data.name}</span>
                                <span class="method-desc">${data.desc}</span>
                            </div>
                        </button>
                    `).join('')}
                </div>
                
                <div class="view-toggle">
                    <button class="view-btn ${demoState.viewMode === 'code' ? 'active' : ''}" data-view="code">💻 代码示例</button>
                    <button class="view-btn ${demoState.viewMode === 'compare' ? 'active' : ''}" data-view="compare">📊 对比分析</button>
                </div>
                
                <div class="demo-content" id="demoContent">
                    ${getContentHTML()}
                </div>
            </div>
        `;
    }

    function getContentHTML() {
        if (demoState.viewMode === 'code') {
            return getCodeViewHTML();
        } else {
            return getCompareViewHTML();
        }
    }

    function getCodeViewHTML() {
        const method = methodData[demoState.activeMethod];
        
        return `
            <div class="code-view">
                <div class="code-info-bar">
                    <div class="info-item">
                        <span class="info-label">开发语言</span>
                        <span class="info-value">${method.languages}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">开发工具</span>
                        <span class="info-value">${method.tools}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">代表应用</span>
                        <span class="info-value">${method.companies.join('、')}</span>
                    </div>
                </div>
                
                <div class="code-display">
                    <div class="code-header">
                        <span class="code-title">${method.name} - 登录页面示例</span>
                        <button class="copy-btn" id="copyBtn">📋 复制</button>
                    </div>
                    <pre class="code-block"><code>${escapeHtml(method.code)}</code></pre>
                </div>
                
                <div class="pros-cons-grid">
                    <div class="pros-card">
                        <h4>✅ 优点</h4>
                        <ul>
                            ${method.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cons-card">
                        <h4>❌ 缺点</h4>
                        <ul>
                            ${method.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="best-for-section">
                    <h4>🎯 最适合的场景</h4>
                    <div class="best-for-tags">
                        ${method.bestFor.map(item => `<span class="best-tag">${item}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    function getCompareViewHTML() {
        const methods = Object.entries(methodData);
        
        return `
            <div class="compare-view">
                <div class="radar-chart-section">
                    <h4>📊 多维度对比</h4>
                    <div class="radar-chart" id="radarChart">
                        ${getRadarChartSVG()}
                    </div>
                    <div class="chart-legend">
                        ${methods.map(([key, data]) => `
                            <div class="legend-item">
                                <span class="legend-color" style="background: ${data.color}"></span>
                                <span class="legend-name">${data.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="comparison-table-section">
                    <h4>📋 详细对比表</h4>
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>对比项</th>
                                ${methods.map(([key, data]) => `
                                    <th style="color: ${data.color}">${data.name}</th>
                                `).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>开发语言</td>
                                ${methods.map(([key, data]) => `<td>${data.languages}</td>`).join('')}
                            </tr>
                            <tr>
                                <td>开发工具</td>
                                ${methods.map(([key, data]) => `<td>${data.tools}</td>`).join('')}
                            </tr>
                            <tr>
                                <td>性能表现</td>
                                ${methods.map(([key, data]) => `<td>${getStars(data.performance)}</td>`).join('')}
                            </tr>
                            <tr>
                                <td>开发成本</td>
                                ${methods.map(([key, data]) => `<td>${getStars(data.cost)}</td>`).join('')}
                            </tr>
                            <tr>
                                <td>开发周期</td>
                                ${methods.map(([key, data]) => `<td>${getStars(data.time)}</td>`).join('')}
                            </tr>
                            <tr>
                                <td>维护成本</td>
                                ${methods.map(([key, data]) => `<td>${getStars(data.maintain)}</td>`).join('')}
                            </tr>
                            <tr>
                                <td>代表应用</td>
                                ${methods.map(([key, data]) => `<td>${data.companies.join('<br>')}</td>`).join('')}
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="decision-guide">
                    <h4>💡 如何选择？</h4>
                    <div class="decision-cards">
                        <div class="decision-card">
                            <div class="decision-icon">🏢</div>
                            <h5>大公司/预算充足</h5>
                            <p>选择<strong>原生开发</strong>，追求极致体验</p>
                        </div>
                        <div class="decision-card">
                            <div class="decision-icon">🚀</div>
                            <h5>创业公司/快速验证</h5>
                            <p>选择<strong>跨平台开发</strong>，快速上线</p>
                        </div>
                        <div class="decision-card">
                            <div class="decision-icon">📰</div>
                            <h5>内容展示/内部工具</h5>
                            <p>选择<strong>混合开发</strong>，成本最低</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function getRadarChartSVG() {
        const size = 280;
        const center = size / 2;
        const radius = 100;
        const axes = ['性能', '成本', '周期', '维护'];
        const methods = Object.entries(methodData);
        
        // 计算多边形点
        function getPoints(values) {
            return values.map((value, i) => {
                const angle = (Math.PI * 2 * i / 4) - Math.PI / 2;
                const r = (value / 5) * radius;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                return `${x},${y}`;
            }).join(' ');
        }
        
        // 绘制网格
        let gridLines = '';
        for (let i = 1; i <= 5; i++) {
            const r = (i / 5) * radius;
            const points = [];
            for (let j = 0; j < 4; j++) {
                const angle = (Math.PI * 2 * j / 4) - Math.PI / 2;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                points.push(`${x},${y}`);
            }
            gridLines += `<polygon points="${points.join(' ')}" fill="none" stroke="#e2e8f0" stroke-width="1"/>`;
        }
        
        // 绘制轴线
        let axisLines = '';
        for (let i = 0; i < 4; i++) {
            const angle = (Math.PI * 2 * i / 4) - Math.PI / 2;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);
            axisLines += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>`;
            
            // 标签
            const labelX = center + (radius + 20) * Math.cos(angle);
            const labelY = center + (radius + 20) * Math.sin(angle);
            axisLines += `<text x="${labelX}" y="${labelY}" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#64748b">${axes[i]}</text>`;
        }
        
        // 绘制数据
        let dataPolygons = '';
        methods.forEach(([key, data]) => {
            const values = [data.performance, 6 - data.cost, 6 - data.time, 6 - data.maintain];
            const points = getPoints(values);
            dataPolygons += `<polygon points="${points}" fill="${data.color}" fill-opacity="0.2" stroke="${data.color}" stroke-width="2"/>`;
        });
        
        return `
            <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                ${gridLines}
                ${axisLines}
                ${dataPolygons}
            </svg>
        `;
    }

    function getStars(count) {
        return '⭐'.repeat(count) + '☆'.repeat(5 - count);
    }

    function cacheElements() {
        elements = {
            container: document.getElementById('devMethodsDemo'),
            methodBtns: document.querySelectorAll('.dev-methods-demo .method-btn'),
            viewBtns: document.querySelectorAll('.dev-methods-demo .view-btn'),
            demoContent: document.getElementById('demoContent')
        };
    }

    function bindEvents() {
        elements.methodBtns.forEach(btn => {
            btn.addEventListener('click', () => switchMethod(btn.dataset.method));
        });
        
        elements.viewBtns.forEach(btn => {
            btn.addEventListener('click', () => switchView(btn.dataset.view));
        });
        
        // 复制按钮事件委托
        elements.container.addEventListener('click', (e) => {
            if (e.target.id === 'copyBtn') {
                copyCode();
            }
        });
    }

    function switchMethod(method) {
        demoState.activeMethod = method;
        
        elements.methodBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === method);
        });
        
        render();
    }

    function switchView(view) {
        demoState.viewMode = view;
        
        elements.viewBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });
        
        render();
    }

    function render() {
        elements.demoContent.innerHTML = getContentHTML();
    }

    function copyCode() {
        const code = methodData[demoState.activeMethod].code;
        navigator.clipboard.writeText(code).then(() => {
            showFeedback('代码已复制！', 'success');
        }).catch(() => {
            showFeedback('复制失败', 'error');
        });
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

    function addComponentStyles() {
        if (document.getElementById('dev-methods-demo-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'dev-methods-demo-styles';
        style.textContent = `
            .dev-methods-demo {
                background: #ffffff;
                border-radius: 16px;
                padding: 32px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                border: 1px solid #e2e8f0;
            }
            
            .demo-header {
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
            
            .method-selector {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                margin-bottom: 20px;
            }
            
            @media (max-width: 768px) {
                .method-selector {
                    grid-template-columns: 1fr;
                }
            }
            
            .method-btn {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 16px;
                background: #f8fafc;
                border: 2px solid #e2e8f0;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: left;
            }
            
            .method-btn:hover {
                background: #f1f5f9;
                transform: translateY(-2px);
            }
            
            .method-btn.active {
                border-color: var(--method-color);
                background: white;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .method-icon {
                font-size: 2rem;
            }
            
            .method-info {
                display: flex;
                flex-direction: column;
            }
            
            .method-name {
                font-weight: 600;
                color: #1e293b;
                font-size: 1rem;
            }
            
            .method-desc {
                font-size: 0.75rem;
                color: #64748b;
                margin-top: 2px;
            }
            
            .view-toggle {
                display: flex;
                gap: 8px;
                margin-bottom: 20px;
                justify-content: center;
            }
            
            .view-btn {
                padding: 10px 20px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 0.875rem;
                font-weight: 500;
                color: #64748b;
            }
            
            .view-btn:hover {
                background: #f1f5f9;
            }
            
            .view-btn.active {
                background: #0d9488;
                border-color: #0d9488;
                color: white;
            }
            
            .demo-content {
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            /* Code View Styles */
            .code-info-bar {
                display: flex;
                flex-wrap: wrap;
                gap: 24px;
                padding: 16px 20px;
                background: #f8fafc;
                border-radius: 12px;
                margin-bottom: 20px;
            }
            
            .info-item {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            
            .info-label {
                font-size: 0.75rem;
                color: #94a3b8;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .info-value {
                font-size: 0.9375rem;
                font-weight: 500;
                color: #1e293b;
            }
            
            .code-display {
                background: #1e293b;
                border-radius: 12px;
                overflow: hidden;
                margin-bottom: 20px;
            }
            
            .code-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 16px;
                background: #0f172a;
                border-bottom: 1px solid #334155;
            }
            
            .code-title {
                font-size: 0.875rem;
                color: #94a3b8;
            }
            
            .copy-btn {
                padding: 6px 12px;
                background: #334155;
                border: none;
                border-radius: 6px;
                color: #e2e8f0;
                font-size: 0.75rem;
                cursor: pointer;
                transition: background 0.2s ease;
            }
            
            .copy-btn:hover {
                background: #475569;
            }
            
            .code-block {
                padding: 20px;
                margin: 0;
                font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
                font-size: 0.8125rem;
                line-height: 1.7;
                color: #e2e8f0;
                overflow-x: auto;
                max-height: 400px;
                overflow-y: auto;
            }
            
            .code-block code {
                font-family: inherit;
            }
            
            .pros-cons-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
                margin-bottom: 20px;
            }
            
            @media (max-width: 640px) {
                .pros-cons-grid {
                    grid-template-columns: 1fr;
                }
            }
            
            .pros-card, .cons-card {
                padding: 20px;
                border-radius: 12px;
            }
            
            .pros-card {
                background: #f0fdf4;
                border-left: 4px solid #10b981;
            }
            
            .cons-card {
                background: #fef2f2;
                border-left: 4px solid #ef4444;
            }
            
            .pros-card h4 {
                color: #166534;
                margin: 0 0 12px;
                font-size: 1rem;
            }
            
            .cons-card h4 {
                color: #991b1b;
                margin: 0 0 12px;
                font-size: 1rem;
            }
            
            .pros-card ul, .cons-card ul {
                margin: 0;
                padding-left: 18px;
                font-size: 0.875rem;
                line-height: 1.8;
            }
            
            .pros-card li {
                color: #166534;
            }
            
            .cons-card li {
                color: #991b1b;
            }
            
            .best-for-section {
                background: #f8fafc;
                padding: 20px;
                border-radius: 12px;
            }
            
            .best-for-section h4 {
                margin: 0 0 12px;
                color: #475569;
                font-size: 1rem;
            }
            
            .best-for-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            
            .best-tag {
                padding: 8px 16px;
                background: white;
                border: 1px solid #e2e8f0;
                border-radius: 20px;
                font-size: 0.875rem;
                color: #64748b;
            }
            
            /* Compare View Styles */
            .compare-view {
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
            
            .radar-chart-section {
                background: #f8fafc;
                padding: 24px;
                border-radius: 12px;
                text-align: center;
            }
            
            .radar-chart-section h4 {
                margin: 0 0 16px;
                color: #475569;
            }
            
            .radar-chart {
                display: flex;
                justify-content: center;
            }
            
            .chart-legend {
                display: flex;
                justify-content: center;
                gap: 24px;
                margin-top: 16px;
                flex-wrap: wrap;
            }
            
            .legend-item {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .legend-color {
                width: 16px;
                height: 16px;
                border-radius: 4px;
            }
            
            .legend-name {
                font-size: 0.875rem;
                color: #64748b;
            }
            
            .comparison-table-section {
                background: #f8fafc;
                padding: 24px;
                border-radius: 12px;
                overflow-x: auto;
            }
            
            .comparison-table-section h4 {
                margin: 0 0 16px;
                color: #475569;
            }
            
            .comparison-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 0.875rem;
            }
            
            .comparison-table th,
            .comparison-table td {
                padding: 12px 16px;
                text-align: left;
                border-bottom: 1px solid #e2e8f0;
            }
            
            .comparison-table th {
                font-weight: 600;
                color: #475569;
                background: white;
            }
            
            .comparison-table td {
                color: #64748b;
            }
            
            .comparison-table tr:hover td {
                background: white;
            }
            
            .decision-guide {
                background: #f8fafc;
                padding: 24px;
                border-radius: 12px;
            }
            
            .decision-guide h4 {
                margin: 0 0 16px;
                color: #475569;
            }
            
            .decision-cards {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
            }
            
            @media (max-width: 768px) {
                .decision-cards {
                    grid-template-columns: 1fr;
                }
            }
            
            .decision-card {
                background: white;
                padding: 20px;
                border-radius: 12px;
                text-align: center;
                border: 1px solid #e2e8f0;
                transition: transform 0.2s ease;
            }
            
            .decision-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .decision-icon {
                font-size: 2.5rem;
                margin-bottom: 12px;
            }
            
            .decision-card h5 {
                margin: 0 0 8px;
                color: #1e293b;
                font-size: 1rem;
            }
            
            .decision-card p {
                margin: 0;
                color: #64748b;
                font-size: 0.875rem;
                line-height: 1.6;
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
                .dev-methods-demo {
                    padding: 20px;
                }
                
                .demo-title {
                    font-size: 1.25rem;
                }
                
                .code-info-bar {
                    flex-direction: column;
                    gap: 12px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    window.startDevMethodsDemo = init;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    setTimeout(init, 100);

})();
