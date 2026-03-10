/**
 * iOS vs Android 代码对比演示组件
 * 展示两个平台的代码差异和特性对比
 * 
 * 自动显示在 front-1 知识点详情页
 */

(function() {
    'use strict';

    const demoState = {
        activeTab: 'button',
        platform: 'ios',
        ios: {
            button: { title: '登录', color: '#007AFF', cornerRadius: 8 },
            alert: { title: '提示', message: '确定要退出吗？', actions: ['取消', '确定'] },
            list: { items: ['设置', '个人资料', '消息通知', '隐私', '关于'] }
        },
        android: {
            button: { text: '登录', backgroundColor: '#6200EE', cornerRadius: 4 },
            dialog: { title: '提示', message: '确定要退出吗？', positiveBtn: '确定', negativeBtn: '取消' },
            list: { items: ['设置', '个人资料', '消息通知', '隐私', '关于'] }
        },
        isInitialized: false
    };

    let elements = {};

    function init() {
        const demoArea = document.getElementById('iosAndroidDemoArea');
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
            <div class="ios-android-demo" id="iosAndroidDemo">
                <div class="demo-header">
                    <h2 class="demo-title">📱 iOS vs Android 代码对比</h2>
                </div>
                
                <p class="demo-intro">
                    同一个功能，在两个平台上的实现代码完全不同。选择平台和组件类型，看看代码差异！
                </p>
                
                <div class="platform-selector">
                    <button class="platform-btn ${demoState.platform === 'ios' ? 'active' : ''}" data-platform="ios">
                        <span class="platform-icon">🍎</span>
                        <span>iOS (Swift)</span>
                    </button>
                    <button class="platform-btn ${demoState.platform === 'android' ? 'active' : ''}" data-platform="android">
                        <span class="platform-icon">🤖</span>
                        <span>Android (Kotlin)</span>
                    </button>
                </div>
                
                <div class="component-tabs">
                    <button class="comp-tab ${demoState.activeTab === 'button' ? 'active' : ''}" data-tab="button">
                        <span class="tab-icon">🔘</span>
                        <span>按钮</span>
                    </button>
                    <button class="comp-tab ${demoState.activeTab === 'alert' ? 'active' : ''}" data-tab="alert">
                        <span class="tab-icon">💬</span>
                        <span>弹窗</span>
                    </button>
                    <button class="comp-tab ${demoState.activeTab === 'list' ? 'active' : ''}" data-tab="list">
                        <span class="tab-icon">📋</span>
                        <span>列表</span>
                    </button>
                </div>
                
                <div class="demo-workspace">
                    <div class="preview-section">
                        <h4 class="section-title">界面预览</h4>
                        <div class="phone-preview" id="phonePreview">
                            ${getPreviewHTML()}
                        </div>
                    </div>
                    
                    <div class="code-section">
                        <h4 class="section-title">代码实现</h4>
                        <div class="code-display">
                            <div class="code-header">
                                <span class="code-lang" id="codeLang">Swift</span>
                                <button class="copy-btn" id="copyBtn">📋 复制</button>
                            </div>
                            <pre class="code-content" id="codeContent"><code>${getCodeHTML()}</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="comparison-section">
                    <h4 class="section-title">🔍 关键差异</h4>
                    <div class="diff-grid" id="diffGrid">
                        ${getDiffHTML()}
                    </div>
                </div>
                
                <p class="demo-footer">
                    💡 <strong>产品经理提示：</strong>设计功能时要考虑两个平台的实现差异。iOS限制更严格（如支付必须用Apple Pay），Android更开放但碎片化严重。
                </p>
            </div>
        `;
    }

    function getPreviewHTML() {
        const isIOS = demoState.platform === 'ios';
        
        if (demoState.activeTab === 'button') {
            const btn = isIOS ? demoState.ios.button : demoState.android.button;
            const bg = isIOS ? btn.color : btn.backgroundColor;
            const radius = isIOS ? btn.cornerRadius : btn.cornerRadius;
            const text = isIOS ? btn.title : btn.text;
            
            return `
                <div class="preview-content">
                    <div class="mock-button" style="background: ${bg}; border-radius: ${radius}px;">
                        ${text}
                    </div>
                </div>
            `;
        } else if (demoState.activeTab === 'alert') {
            const alert = isIOS ? demoState.ios.alert : demoState.android.dialog;
            
            if (isIOS) {
                return `
                    <div class="preview-content">
                        <div class="ios-alert">
                            <div class="alert-title">${alert.title}</div>
                            <div class="alert-message">${alert.message}</div>
                            <div class="alert-actions">
                                <button class="alert-btn cancel">${alert.actions[0]}</button>
                                <button class="alert-btn confirm">${alert.actions[1]}</button>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="preview-content">
                        <div class="android-dialog">
                            <div class="dialog-title">${alert.title}</div>
                            <div class="dialog-message">${alert.message}</div>
                            <div class="dialog-actions">
                                <button class="dialog-btn negative">${alert.negativeBtn}</button>
                                <button class="dialog-btn positive">${alert.positiveBtn}</button>
                            </div>
                        </div>
                    </div>
                `;
            }
        } else if (demoState.activeTab === 'list') {
            const items = isIOS ? demoState.ios.list.items : demoState.android.list.items;
            const itemClass = isIOS ? 'ios-list-item' : 'android-list-item';
            
            return `
                <div class="preview-content">
                    <div class="${isIOS ? 'ios-list' : 'android-list'}">
                        ${items.map(item => `
                            <div class="${itemClass}">
                                <span>${item}</span>
                                ${isIOS ? '<span class="chevron">›</span>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }

    function getCodeHTML() {
        const isIOS = demoState.platform === 'ios';
        
        if (demoState.activeTab === 'button') {
            if (isIOS) {
                return `// iOS - 创建按钮
let button = UIButton(type: .system)
button.setTitle("登录", for: .normal)
button.backgroundColor = UIColor(red: 0, green: 0.48, blue: 1, alpha: 1)
button.setTitleColor(.white, for: .normal)
button.layer.cornerRadius = 8
button.titleLabel?.font = UIFont.systemFont(ofSize: 16, weight: .semibold)

// 添加点击事件
button.addTarget(self, action: #selector(loginTapped), for: .touchUpInside)

// 添加到视图
view.addSubview(button)`;
            } else {
                return `// Android - 创建按钮
val button = Button(context).apply {
    text = "登录"
    setBackgroundColor(Color.parseColor("#6200EE"))
    setTextColor(Color.WHITE)
    textSize = 16f
    typeface = Typeface.DEFAULT_BOLD
}

// 设置圆角（需要额外的drawable）
button.background = ContextCompat.getDrawable(context, R.drawable.rounded_button)

// 添加点击事件
button.setOnClickListener {
    login()
}

// 添加到布局
layout.addView(button)`;
            }
        } else if (demoState.activeTab === 'alert') {
            if (isIOS) {
                return `// iOS - 显示警告框
let alert = UIAlertController(
    title: "提示",
    message: "确定要退出吗？",
    preferredStyle: .alert
)

// 添加取消按钮
alert.addAction(UIAlertAction(
    title: "取消",
    style: .cancel
) { _ in
    // 取消操作
})

// 添加确定按钮
alert.addAction(UIAlertAction(
    title: "确定",
    style: .default
) { _ in
    // 执行退出
    self.logout()
})

// 显示弹窗
present(alert, animated: true)`;
            } else {
                return `// Android - 显示对话框
AlertDialog.Builder(context)
    .setTitle("提示")
    .setMessage("确定要退出吗？")
    .setNegativeButton("取消") { dialog, _ ->
        // 取消操作
        dialog.dismiss()
    }
    .setPositiveButton("确定") { _, _ ->
        // 执行退出
        logout()
    }
    .setCancelable(false)  // 点击外部不可取消
    .show()`;
            }
        } else if (demoState.activeTab === 'list') {
            if (isIOS) {
                return `// iOS - 创建列表（UITableView）
class SettingsViewController: UIViewController {
    
    let tableView = UITableView()
    let items = ["设置", "个人资料", "消息通知", "隐私", "关于"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        tableView.delegate = self
        tableView.dataSource = self
        tableView.register(UITableViewCell.self, 
                          forCellReuseIdentifier: "cell")
        
        view.addSubview(tableView)
    }
}

// 实现数据源方法
extension SettingsViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, 
                   numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    func tableView(_ tableView: UITableView, 
                   cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(
            withIdentifier: "cell", 
            for: indexPath
        )
        cell.textLabel?.text = items[indexPath.row]
        cell.accessoryType = .disclosureIndicator
        return cell
    }
}`;
            } else {
                return `// Android - 创建列表（RecyclerView）
class SettingsActivity : AppCompatActivity() {
    
    private val items = listOf(
        "设置", "个人资料", "消息通知", "隐私", "关于"
    )
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_settings)
        
        val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = SettingsAdapter(items)
    }
}

// 适配器类
class SettingsAdapter(private val items: List<String>) : 
    RecyclerView.Adapter<SettingsAdapter.ViewHolder>() {
    
    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val textView: TextView = view.findViewById(R.id.textView)
    }
    
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_setting, parent, false)
        return ViewHolder(view)
    }
    
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.textView.text = items[position]
    }
    
    override fun getItemCount() = items.size
}`;
            }
        }
    }

    function getDiffHTML() {
        const isIOS = demoState.platform === 'ios';
        
        if (demoState.activeTab === 'button') {
            return `
                <div class="diff-item">
                    <span class="diff-label">圆角</span>
                    <span class="diff-value">${isIOS ? '8px（较大）' : '4px（较小）'}</span>
                </div>
                <div class="diff-item">
                    <span class="diff-label">默认颜色</span>
                    <span class="diff-value">${isIOS ? '#007AFF 蓝色' : '#6200EE 紫色'}</span>
                </div>
                <div class="diff-item">
                    <span class="diff-label">代码复杂度</span>
                    <span class="diff-value">${isIOS ? '较简单' : '较复杂（需要drawable）'}</span>
                </div>
            `;
        } else if (demoState.activeTab === 'alert') {
            return `
                <div class="diff-item">
                    <span class="diff-label">按钮位置</span>
                    <span class="diff-value">${isIOS ? '横向排列' : '右对齐'}</span>
                </div>
                <div class="diff-item">
                    <span class="diff-label">取消按钮</span>
                    <span class="diff-value">${isIOS ? '左侧' : '左侧（但颜色不同）'}</span>
                </div>
                <div class="diff-item">
                    <span class="diff-label">API风格</span>
                    <span class="diff-value">${isIOS ? '闭包回调' : 'Lambda表达式'}</span>
                </div>
            `;
        } else if (demoState.activeTab === 'list') {
            return `
                <div class="diff-item">
                    <span class="diff-label">实现方式</span>
                    <span class="diff-value">${isIOS ? 'UITableView（更简单）' : 'RecyclerView（更灵活）'}</span>
                </div>
                <div class="diff-item">
                    <span class="diff-label">箭头指示</span>
                    <span class="diff-value">${isIOS ? '系统自带 disclosure' : '需手动添加'}</span>
                </div>
                <div class="diff-item">
                    <span class="diff-label">代码量</span>
                    <span class="diff-value">${isIOS ? '较少' : '较多（需适配器）'}</span>
                </div>
            `;
        }
    }

    function cacheElements() {
        elements = {
            container: document.getElementById('iosAndroidDemo'),
            platformBtns: document.querySelectorAll('.ios-android-demo .platform-btn'),
            compTabs: document.querySelectorAll('.ios-android-demo .comp-tab'),
            phonePreview: document.getElementById('phonePreview'),
            codeLang: document.getElementById('codeLang'),
            codeContent: document.getElementById('codeContent'),
            diffGrid: document.getElementById('diffGrid'),
            copyBtn: document.getElementById('copyBtn')
        };
    }

    function bindEvents() {
        elements.platformBtns.forEach(btn => {
            btn.addEventListener('click', () => switchPlatform(btn.dataset.platform));
        });
        
        elements.compTabs.forEach(tab => {
            tab.addEventListener('click', () => switchTab(tab.dataset.tab));
        });
        
        elements.copyBtn.addEventListener('click', copyCode);
    }

    function switchPlatform(platform) {
        demoState.platform = platform;
        
        elements.platformBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.platform === platform);
        });
        
        render();
    }

    function switchTab(tab) {
        demoState.activeTab = tab;
        
        elements.compTabs.forEach(t => {
            t.classList.toggle('active', t.dataset.tab === tab);
        });
        
        render();
    }

    function render() {
        elements.phonePreview.innerHTML = getPreviewHTML();
        elements.codeLang.textContent = demoState.platform === 'ios' ? 'Swift' : 'Kotlin';
        elements.codeContent.innerHTML = `<code>${escapeHtml(getCodeHTML())}</code>`;
        elements.diffGrid.innerHTML = getDiffHTML();
    }

    function copyCode() {
        const code = getCodeHTML();
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
        if (document.getElementById('ios-android-demo-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'ios-android-demo-styles';
        style.textContent = `
            .ios-android-demo {
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
            
            .platform-selector {
                display: flex;
                gap: 12px;
                margin-bottom: 20px;
            }
            
            .platform-btn {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 14px 20px;
                background: #f1f5f9;
                border: 2px solid transparent;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9375rem;
                font-weight: 500;
                color: #64748b;
            }
            
            .platform-btn:hover {
                background: #e2e8f0;
            }
            
            .platform-btn.active[data-platform="ios"] {
                background: #fff1f2;
                border-color: #f43f5e;
                color: #f43f5e;
            }
            
            .platform-btn.active[data-platform="android"] {
                background: #f0fdf4;
                border-color: #10b981;
                color: #10b981;
            }
            
            .platform-icon {
                font-size: 1.25rem;
            }
            
            .component-tabs {
                display: flex;
                gap: 8px;
                margin-bottom: 24px;
                flex-wrap: wrap;
            }
            
            .comp-tab {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 10px 16px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 0.875rem;
                font-weight: 500;
                color: #64748b;
            }
            
            .comp-tab:hover {
                background: #f1f5f9;
            }
            
            .comp-tab.active {
                background: #0d9488;
                border-color: #0d9488;
                color: white;
            }
            
            .demo-workspace {
                display: grid;
                grid-template-columns: 1fr 1.5fr;
                gap: 24px;
                margin-bottom: 24px;
            }
            
            @media (max-width: 768px) {
                .demo-workspace {
                    grid-template-columns: 1fr;
                }
            }
            
            .section-title {
                font-size: 0.875rem;
                font-weight: 600;
                color: #64748b;
                margin-bottom: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .phone-preview {
                background: #f8fafc;
                border-radius: 16px;
                padding: 24px;
                min-height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #e2e8f0;
            }
            
            .preview-content {
                width: 100%;
                max-width: 280px;
            }
            
            .mock-button {
                padding: 14px 32px;
                color: white;
                font-weight: 600;
                text-align: center;
                cursor: pointer;
                transition: transform 0.2s ease;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            }
            
            .mock-button:hover {
                transform: scale(1.02);
            }
            
            /* iOS Alert Style */
            .ios-alert {
                background: white;
                border-radius: 14px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                max-width: 260px;
                margin: 0 auto;
            }
            
            .alert-title {
                font-size: 1.0625rem;
                font-weight: 600;
                text-align: center;
                padding: 16px 16px 4px;
                color: #1e293b;
            }
            
            .alert-message {
                font-size: 0.8125rem;
                text-align: center;
                padding: 4px 16px 16px;
                color: #64748b;
            }
            
            .alert-actions {
                display: flex;
                border-top: 1px solid #e2e8f0;
            }
            
            .alert-btn {
                flex: 1;
                padding: 12px;
                border: none;
                background: none;
                font-size: 1rem;
                cursor: pointer;
                transition: background 0.2s ease;
            }
            
            .alert-btn.cancel {
                color: #007AFF;
                border-right: 1px solid #e2e8f0;
            }
            
            .alert-btn.confirm {
                color: #007AFF;
                font-weight: 600;
            }
            
            .alert-btn:hover {
                background: #f8fafc;
            }
            
            /* Android Dialog Style */
            .android-dialog {
                background: white;
                border-radius: 28px;
                padding: 24px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                max-width: 280px;
                margin: 0 auto;
            }
            
            .dialog-title {
                font-size: 1.25rem;
                font-weight: 500;
                color: #1e293b;
                margin-bottom: 12px;
            }
            
            .dialog-message {
                font-size: 0.875rem;
                color: #64748b;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            
            .dialog-actions {
                display: flex;
                justify-content: flex-end;
                gap: 8px;
            }
            
            .dialog-btn {
                padding: 10px 16px;
                border: none;
                background: none;
                font-size: 0.875rem;
                font-weight: 600;
                cursor: pointer;
                border-radius: 8px;
                transition: background 0.2s ease;
            }
            
            .dialog-btn.negative {
                color: #64748b;
            }
            
            .dialog-btn.positive {
                color: #6200EE;
            }
            
            .dialog-btn:hover {
                background: #f1f5f9;
            }
            
            /* List Styles */
            .ios-list, .android-list {
                background: white;
                border-radius: 10px;
                overflow: hidden;
            }
            
            .ios-list-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 16px;
                border-bottom: 1px solid #e2e8f0;
                font-size: 0.9375rem;
                color: #1e293b;
            }
            
            .ios-list-item:last-child {
                border-bottom: none;
            }
            
            .chevron {
                color: #c1c1c1;
                font-size: 1.25rem;
            }
            
            .android-list-item {
                padding: 16px;
                border-bottom: 1px solid #e2e8f0;
                font-size: 0.9375rem;
                color: #1e293b;
            }
            
            .android-list-item:last-child {
                border-bottom: none;
            }
            
            .code-display {
                background: #f8fafc;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #e2e8f0;
            }
            
            .code-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
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
            
            .copy-btn {
                padding: 6px 12px;
                background: white;
                border: 1px solid #cbd5e1;
                border-radius: 6px;
                font-size: 0.75rem;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .copy-btn:hover {
                background: #f1f5f9;
            }
            
            .code-content {
                padding: 16px;
                margin: 0;
                font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
                font-size: 0.8125rem;
                line-height: 1.7;
                color: #1e293b;
                overflow-x: auto;
                max-height: 300px;
                overflow-y: auto;
            }
            
            .code-content code {
                font-family: inherit;
            }
            
            .comparison-section {
                background: #f8fafc;
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 20px;
            }
            
            .diff-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 12px;
            }
            
            .diff-item {
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding: 12px 16px;
                background: white;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
            }
            
            .diff-label {
                font-size: 0.75rem;
                color: #94a3b8;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .diff-value {
                font-size: 0.9375rem;
                font-weight: 500;
                color: #1e293b;
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
                .ios-android-demo {
                    padding: 20px;
                }
                
                .demo-title {
                    font-size: 1.25rem;
                }
                
                .platform-selector {
                    flex-direction: column;
                }
                
                .component-tabs {
                    justify-content: center;
                }
                
                .diff-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    window.startIosAndroidDemo = init;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    setTimeout(init, 100);

})();
