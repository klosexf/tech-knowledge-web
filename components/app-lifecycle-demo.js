/**
 * APP运行流程交互式演示组件
 * 展示APP从启动到运行的完整流程
 * 
 * 自动显示在 arch-1 知识点详情页
 */

(function() {
    'use strict';

    const demoState = {
        currentStep: 0,
        isRunning: false,
        speed: 1000,
        scenario: 'login',
        isInitialized: false,
        logs: [],
        dataFlow: []
    };

    const scenarios = {
        login: {
            name: '用户登录',
            icon: '🔐',
            steps: [
                { name: '点击APP图标', icon: '👆', duration: 500 },
                { name: '操作系统加载', icon: '⚙️', duration: 800 },
                { name: 'APP初始化', icon: '🚀', duration: 600 },
                { name: '渲染登录界面', icon: '🎨', duration: 700 },
                { name: '用户输入账号密码', icon: '⌨️', duration: 1000 },
                { name: '发送登录请求', icon: '📡', duration: 500 },
                { name: '服务器验证', icon: '🖥️', duration: 800 },
                { name: '数据库查询', icon: '🗄️', duration: 600 },
                { name: '返回用户信息', icon: '📥', duration: 500 },
                { name: '跳转首页', icon: '✅', duration: 400 }
            ]
        },
        browse: {
            name: '浏览商品',
            icon: '🛒',
            steps: [
                { name: '打开商品列表', icon: '📋', duration: 400 },
                { name: '发起数据请求', icon: '📡', duration: 500 },
                { name: '服务器处理', icon: '🖥️', duration: 600 },
                { name: '数据库查询商品', icon: '🗄️', duration: 700 },
                { name: '返回商品数据', icon: '📥', duration: 500 },
                { name: '渲染商品卡片', icon: '🎨', duration: 800 },
                { name: '图片懒加载', icon: '🖼️', duration: 600 },
                { name: '用户滑动浏览', icon: '👆', duration: 400 }
            ]
        },
        order: {
            name: '下单购买',
            icon: '💳',
            steps: [
                { name: '点击购买按钮', icon: '👆', duration: 300 },
                { name: '校验登录状态', icon: '🔐', duration: 400 },
                { name: '创建订单请求', icon: '📝', duration: 500 },
                { name: '服务器验证库存', icon: '🖥️', duration: 700 },
                { name: '数据库事务处理', icon: '🗄️', duration: 900 },
                { name: '扣减库存', icon: '📉', duration: 500 },
                { name: '生成订单号', icon: '🔢', duration: 400 },
                { name: '返回订单结果', icon: '📥', duration: 500 },
                { name: '更新界面状态', icon: '✅', duration: 400 }
            ]
        }
    };

    const codeExamples = {
        '点击APP图标': `// 用户点击APP图标
// 操作系统接收触摸事件
TouchManager.onTap((event) => {
    const app = AppLauncher.findByIcon(event.target);
    app.launch();
});`,
        '操作系统加载': `// 操作系统加载APP进程
Process fork = Process.fork();
fork.setPriority(PRIORITY_FOREGROUND);
fork.allocateMemory(APP_MEMORY_SIZE);
fork.loadExecutable("/apps/myapp/main");`,
        'APP初始化': `// APP启动入口函数
func application(_ application: UIApplication, 
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // 初始化网络库
    NetworkManager.shared.configure()
    // 初始化数据库
    DatabaseManager.shared.connect()
    // 初始化UI框架
    window = UIWindow(frame: UIScreen.main.bounds)
    return true
}`,
        '渲染登录界面': `// 渲染登录界面
class LoginViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        // 创建UI组件
        let usernameField = UITextField()
        let passwordField = UITextField()
        let loginButton = UIButton()
        // 布局约束
        NSLayoutConstraint.activate([...])
    }
}`,
        '用户输入账号密码': `// 用户输入处理
usernameField.addTarget(self, action: #selector(textChanged), for: .editingChanged)

@objc func textChanged() {
    // 实时验证输入
    let isValid = usernameField.text?.count ?? 0 >= 6
    loginButton.isEnabled = isValid
}`,
        '发送登录请求': `// 发送登录请求
let params = [
    "username": usernameField.text!,
    "password": passwordField.text!
]

API.request(.POST, "/api/login", params: params) { response in
    if response.success {
        self.handleLoginSuccess(response.data)
    }
}`,
        '服务器验证': `// 服务器端验证
@PostMapping("/api/login")
public Response login(@RequestBody LoginRequest request) {
    // 参数校验
    if (!Validator.isValid(request)) {
        return Response.error("参数错误");
    }
    // 调用用户服务
    User user = userService.login(request);
    return Response.success(user);
}`,
        '数据库查询': `// 数据库查询用户
SELECT id, username, password_hash, nickname, avatar
FROM users 
WHERE username = ? AND status = 1

// 验证密码
if (BCrypt.checkpw(inputPassword, user.passwordHash)) {
    return generateToken(user);
}`,
        '返回用户信息': `// 返回用户信息
{
    "code": 200,
    "data": {
        "userId": 10086,
        "username": "zhang_san",
        "nickname": "张三",
        "avatar": "https://cdn.example.com/avatar.jpg",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}`,
        '跳转首页': `// 登录成功，跳转首页
func handleLoginSuccess(_ data: LoginResponse) {
    // 保存用户信息
    UserManager.shared.saveUser(data)
    // 跳转到首页
    let homeVC = HomeViewController()
    navigationController?.setViewControllers([homeVC], animated: true)
}`,
        '打开商品列表': `// 打开商品列表页面
let productVC = ProductListViewController()
navigationController?.pushViewController(productVC, animated: true)

// viewDidLoad 中发起请求
override func viewDidLoad() {
    super.viewDidLoad()
    loadProducts()
}`,
        '发起数据请求': `// 发起商品列表请求
func loadProducts() {
    API.request(.GET, "/api/products", params: [
        "page": currentPage,
        "size": 20,
        "category": categoryId
    ]) { response in
        self.products = response.data
        self.tableView.reloadData()
    }
}`,
        '服务器处理': `// 服务器处理商品请求
@GetMapping("/api/products")
public Response getProducts(@RequestParam Map<String, Object> params) {
    int page = (int) params.getOrDefault("page", 1);
    int size = (int) params.getOrDefault("size", 20);
    
    Page<Product> products = productService.findByPage(page, size);
    return Response.success(products);
}`,
        '数据库查询商品': `// 数据库查询商品列表
SELECT p.id, p.name, p.price, p.image_url, p.stock,
       c.name as category_name
FROM products p
LEFT JOIN categories c ON p.category_id = c.id
WHERE p.status = 1
ORDER BY p.created_at DESC
LIMIT ? OFFSET ?`,
        '返回商品数据': `// 返回商品数据
{
    "code": 200,
    "data": {
        "total": 156,
        "items": [
            {
                "id": 1,
                "name": "iPhone 15 Pro",
                "price": 8999,
                "imageUrl": "https://cdn.example.com/iphone.jpg"
            }
        ]
    }
}`,
        '渲染商品卡片': `// 渲染商品卡片
func tableView(_ tableView: UITableView, 
               cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(
        withIdentifier: "ProductCell", for: indexPath)
    let product = products[indexPath.row]
    
    cell.nameLabel.text = product.name
    cell.priceLabel.text = "¥\\(product.price)"
    cell.imageView?.sd_setImage(with: URL(string: product.imageUrl))
    
    return cell
}`,
        '图片懒加载': `// 图片懒加载
extension UIImageView {
    func lazyLoad(url: String, placeholder: UIImage?) {
        self.image = placeholder
        DispatchQueue.global().async {
            if let data = try? Data(contentsOf: URL(string: url)!) {
                DispatchQueue.main.async {
                    self.image = UIImage(data: data)
                }
            }
        }
    }
}`,
        '用户滑动浏览': `// 用户滑动浏览
func scrollViewDidScroll(_ scrollView: UIScrollView) {
    let offsetY = scrollView.contentOffset.y
    let contentHeight = scrollView.contentSize.height
    
    // 触底加载更多
    if offsetY > contentHeight - scrollView.frame.height - 100 {
        loadMoreProducts()
    }
}`,
        '点击购买按钮': `// 点击购买按钮
@IBAction func buyButtonTapped(_ sender: UIButton) {
    // 检查登录状态
    guard UserManager.shared.isLoggedIn else {
        present(LoginViewController(), animated: true)
        return
    }
    
    // 创建订单
    createOrder(product: selectedProduct)
}`,
        '校验登录状态': `// 校验登录状态
class UserManager {
    static let shared = UserManager()
    
    var isLoggedIn: Bool {
        return currentUser != nil && token != nil
    }
    
    var token: String? {
        return KeychainManager.get("auth_token")
    }
}`,
        '创建订单请求': `// 创建订单请求
func createOrder(product: Product) {
    let order = CreateOrderRequest(
        productId: product.id,
        quantity: 1,
        addressId: defaultAddress.id
    )
    
    API.request(.POST, "/api/orders", body: order) { response in
        self.handleOrderResult(response)
    }
}`,
        '服务器验证库存': `// 服务器验证库存
@PostMapping("/api/orders")
@Transactional
public Response createOrder(@RequestBody OrderRequest request) {
    // 查询商品库存
    Product product = productDao.findById(request.getProductId());
    
    if (product.getStock() < request.getQuantity()) {
        throw new BusinessException("库存不足");
    }
    
    // 创建订单...
}`,
        '数据库事务处理': `// 数据库事务处理
@Transactional
public Order createOrder(OrderRequest request) {
    // 1. 创建订单记录
    Order order = new Order();
    order.setUserId(request.getUserId());
    order.setTotalAmount(calculateTotal());
    orderDao.save(order);
    
    // 2. 扣减库存
    productDao.decreaseStock(request.getProductId(), request.getQuantity());
    
    // 3. 创建支付记录
    Payment payment = paymentService.createPayment(order);
    
    return order;
}`,
        '扣减库存': `// 扣减库存（乐观锁）
UPDATE products 
SET stock = stock - ?, 
    version = version + 1
WHERE id = ? 
  AND stock >= ? 
  AND version = ?`,
        '生成订单号': `// 生成订单号
public String generateOrderNo() {
    // 格式：时间戳 + 随机数
    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
    String timestamp = sdf.format(new Date());
    String random = String.format("%04d", new Random().nextInt(10000));
    return "ORD" + timestamp + random;
}`,
        '返回订单结果': `// 返回订单结果
{
    "code": 200,
    "data": {
        "orderId": 20240312001,
        "orderNo": "ORD202403121530451234",
        "status": "PENDING_PAYMENT",
        "totalAmount": 8999.00,
        "paymentUrl": "https://pay.example.com/..."
    }
}`,
        '更新界面状态': `// 更新界面状态
func handleOrderResult(_ response: OrderResponse) {
    if response.success {
        // 显示成功提示
        showToast("下单成功")
        // 跳转到支付页
        let paymentVC = PaymentViewController()
        paymentVC.orderId = response.data.orderId
        navigationController?.pushViewController(paymentVC, animated: true)
    }
}`
    };

    let elements = {};
    let animationTimer = null;

    function init() {
        const demoArea = document.getElementById('appLifecycleDemoArea');
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
            <div class="app-lifecycle-demo" id="appLifecycleDemo">
                <div class="demo-header">
                    <h2 class="demo-title">🚀 APP运行流程模拟器</h2>
                    <p class="demo-subtitle">点击开始，观察APP从启动到运行的完整过程</p>
                </div>
                
                <div class="control-panel">
                    <div class="scenario-selector">
                        <label>选择场景：</label>
                        <div class="scenario-buttons">
                            ${Object.entries(scenarios).map(([key, data]) => `
                                <button class="scenario-btn ${demoState.scenario === key ? 'active' : ''}" data-scenario="${key}">
                                    <span class="scenario-icon">${data.icon}</span>
                                    <span class="scenario-name">${data.name}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="speed-control">
                        <label>演示速度：</label>
                        <input type="range" id="speedSlider" min="200" max="2000" value="${demoState.speed}" step="100">
                        <span id="speedValue">${demoState.speed}ms</span>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="action-btn primary" id="startBtn">
                            <span class="btn-icon">▶️</span>
                            <span>开始演示</span>
                        </button>
                        <button class="action-btn secondary" id="pauseBtn" disabled>
                            <span class="btn-icon">⏸️</span>
                            <span>暂停</span>
                        </button>
                        <button class="action-btn secondary" id="resetBtn">
                            <span class="btn-icon">🔄</span>
                            <span>重置</span>
                        </button>
                    </div>
                </div>
                
                <div class="main-content">
                    <div class="flow-visualization">
                        <div class="architecture-diagram">
                            <div class="arch-layer client-layer">
                                <div class="layer-header">
                                    <span class="layer-icon">📱</span>
                                    <span class="layer-title">客户端（APP）</span>
                                </div>
                                <div class="layer-content" id="clientLayer">
                                    <div class="process-node" data-process="ui">
                                        <div class="node-icon">🎨</div>
                                        <div class="node-label">UI渲染</div>
                                    </div>
                                    <div class="process-node" data-process="logic">
                                        <div class="node-icon">⚙️</div>
                                        <div class="node-label">业务逻辑</div>
                                    </div>
                                    <div class="process-node" data-process="cache">
                                        <div class="node-icon">💾</div>
                                        <div class="node-label">本地缓存</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="data-flow-area" id="dataFlowArea">
                                <div class="flow-line">
                                    <svg width="100%" height="60">
                                        <defs>
                                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                                <polygon points="0 0, 10 3.5, 0 7" fill="#0d9488"/>
                                            </marker>
                                        </defs>
                                        <path id="flowPath" d="M 0 30 Q 50 10 100 30 T 200 30" stroke="#0d9488" stroke-width="2" fill="none" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
                                    </svg>
                                </div>
                                <div class="flow-label">网络请求 (HTTP/HTTPS)</div>
                            </div>
                            
                            <div class="arch-layer server-layer">
                                <div class="layer-header">
                                    <span class="layer-icon">🖥️</span>
                                    <span class="layer-title">服务器（后端）</span>
                                </div>
                                <div class="layer-content" id="serverLayer">
                                    <div class="process-node" data-process="api">
                                        <div class="node-icon">🔌</div>
                                        <div class="node-label">API接口</div>
                                    </div>
                                    <div class="process-node" data-process="business">
                                        <div class="node-icon">🔧</div>
                                        <div class="node-label">业务处理</div>
                                    </div>
                                    <div class="process-node" data-process="auth">
                                        <div class="node-icon">🔐</div>
                                        <div class="node-label">权限验证</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="data-flow-area" id="dbFlowArea">
                                <div class="flow-line">
                                    <svg width="100%" height="60">
                                        <path id="dbFlowPath" d="M 0 30 Q 50 50 100 30 T 200 30" stroke="#f59e0b" stroke-width="2" fill="none" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
                                    </svg>
                                </div>
                                <div class="flow-label">数据查询 (SQL)</div>
                            </div>
                            
                            <div class="arch-layer database-layer">
                                <div class="layer-header">
                                    <span class="layer-icon">🗄️</span>
                                    <span class="layer-title">数据库</span>
                                </div>
                                <div class="layer-content" id="databaseLayer">
                                    <div class="process-node" data-process="query">
                                        <div class="node-icon">🔍</div>
                                        <div class="node-label">查询引擎</div>
                                    </div>
                                    <div class="process-node" data-process="storage">
                                        <div class="node-icon">💿</div>
                                        <div class="node-label">数据存储</div>
                                    </div>
                                    <div class="process-node" data-process="cache">
                                        <div class="node-icon">⚡</div>
                                        <div class="node-label">缓存层</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="info-panel">
                        <div class="step-timeline">
                            <h4 class="panel-title">📍 执行步骤</h4>
                            <div class="timeline-container" id="timelineContainer">
                                ${renderTimeline()}
                            </div>
                        </div>
                        
                        <div class="code-panel">
                            <div class="code-header">
                                <h4 class="panel-title">💻 代码示例</h4>
                                <button class="copy-btn" id="copyCodeBtn">📋 复制</button>
                            </div>
                            <div class="code-display" id="codeDisplay">
                                <pre><code>// 点击"开始演示"查看代码执行过程</code></pre>
                            </div>
                        </div>
                        
                        <div class="log-panel">
                            <h4 class="panel-title">📜 执行日志</h4>
                            <div class="log-container" id="logContainer">
                                <div class="log-item info">系统就绪，等待开始...</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="metrics-panel">
                    <div class="metric-card">
                        <div class="metric-icon">⏱️</div>
                        <div class="metric-info">
                            <div class="metric-value" id="totalTime">0ms</div>
                            <div class="metric-label">总耗时</div>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">📊</div>
                        <div class="metric-info">
                            <div class="metric-value" id="currentStep">0/${scenarios[demoState.scenario].steps.length}</div>
                            <div class="metric-label">当前步骤</div>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">📡</div>
                        <div class="metric-info">
                            <div class="metric-value" id="networkCount">0</div>
                            <div class="metric-label">网络请求</div>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">🗄️</div>
                        <div class="metric-info">
                            <div class="metric-value" id="dbCount">0</div>
                            <div class="metric-label">数据库操作</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderTimeline() {
        const steps = scenarios[demoState.scenario].steps;
        return steps.map((step, index) => `
            <div class="timeline-item ${index < demoState.currentStep ? 'completed' : ''} ${index === demoState.currentStep ? 'active' : ''}" data-step="${index}">
                <div class="timeline-marker">
                    <span class="step-number">${index + 1}</span>
                </div>
                <div class="timeline-content">
                    <span class="step-icon">${step.icon}</span>
                    <span class="step-name">${step.name}</span>
                </div>
            </div>
        `).join('');
    }

    function cacheElements() {
        elements = {
            container: document.getElementById('appLifecycleDemo'),
            startBtn: document.getElementById('startBtn'),
            pauseBtn: document.getElementById('pauseBtn'),
            resetBtn: document.getElementById('resetBtn'),
            speedSlider: document.getElementById('speedSlider'),
            speedValue: document.getElementById('speedValue'),
            timelineContainer: document.getElementById('timelineContainer'),
            codeDisplay: document.getElementById('codeDisplay'),
            logContainer: document.getElementById('logContainer'),
            totalTime: document.getElementById('totalTime'),
            currentStep: document.getElementById('currentStep'),
            networkCount: document.getElementById('networkCount'),
            dbCount: document.getElementById('dbCount'),
            clientLayer: document.getElementById('clientLayer'),
            serverLayer: document.getElementById('serverLayer'),
            databaseLayer: document.getElementById('databaseLayer'),
            dataFlowArea: document.getElementById('dataFlowArea'),
            dbFlowArea: document.getElementById('dbFlowArea'),
            copyCodeBtn: document.getElementById('copyCodeBtn')
        };
    }

    function bindEvents() {
        elements.startBtn.addEventListener('click', startDemo);
        elements.pauseBtn.addEventListener('click', togglePause);
        elements.resetBtn.addEventListener('click', resetDemo);
        elements.speedSlider.addEventListener('input', updateSpeed);
        elements.copyCodeBtn.addEventListener('click', copyCode);
        
        document.querySelectorAll('.scenario-btn').forEach(btn => {
            btn.addEventListener('click', () => switchScenario(btn.dataset.scenario));
        });
    }

    function switchScenario(scenario) {
        if (demoState.isRunning) return;
        
        demoState.scenario = scenario;
        demoState.currentStep = 0;
        
        document.querySelectorAll('.scenario-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.scenario === scenario);
        });
        
        elements.timelineContainer.innerHTML = renderTimeline();
        resetMetrics();
    }

    function updateSpeed() {
        demoState.speed = parseInt(elements.speedSlider.value);
        elements.speedValue.textContent = `${demoState.speed}ms`;
    }

    function startDemo() {
        if (demoState.isRunning) return;
        
        demoState.isRunning = true;
        demoState.currentStep = 0;
        demoState.logs = [];
        
        elements.startBtn.disabled = true;
        elements.pauseBtn.disabled = false;
        
        addLog('🚀 开始执行APP运行流程...', 'info');
        
        runNextStep();
    }

    function runNextStep() {
        if (!demoState.isRunning) return;
        
        const steps = scenarios[demoState.scenario].steps;
        
        if (demoState.currentStep >= steps.length) {
            completeDemo();
            return;
        }
        
        const step = steps[demoState.currentStep];
        
        // 更新时间线
        updateTimeline();
        
        // 更新代码显示
        updateCodeDisplay(step.name);
        
        // 添加日志
        addLog(`${step.icon} ${step.name}`, 'step');
        
        // 更新架构图高亮
        updateArchitectureHighlight(step.name);
        
        // 更新指标
        updateMetrics(step.name);
        
        // 动画数据流
        animateDataFlow(step.name);
        
        demoState.currentStep++;
        
        animationTimer = setTimeout(runNextStep, demoState.speed);
    }

    function updateTimeline() {
        const items = elements.timelineContainer.querySelectorAll('.timeline-item');
        items.forEach((item, index) => {
            item.classList.remove('active', 'completed');
            if (index < demoState.currentStep) {
                item.classList.add('completed');
            } else if (index === demoState.currentStep) {
                item.classList.add('active');
            }
        });
    }

    function updateCodeDisplay(stepName) {
        const code = codeExamples[stepName] || `// ${stepName} - 代码示例`;
        elements.codeDisplay.innerHTML = `<pre><code>${escapeHtml(code)}</code></pre>`;
    }

    function updateArchitectureHighlight(stepName) {
        // 清除所有高亮
        document.querySelectorAll('.process-node').forEach(node => {
            node.classList.remove('active');
        });
        
        // 根据步骤名称高亮对应节点
        const highlightMap = {
            '点击APP图标': ['logic'],
            '操作系统加载': ['logic'],
            'APP初始化': ['logic', 'cache'],
            '渲染登录界面': ['ui'],
            '用户输入账号密码': ['ui'],
            '发送登录请求': ['logic'],
            '服务器验证': ['api', 'auth'],
            '数据库查询': ['query', 'storage'],
            '返回用户信息': ['api'],
            '跳转首页': ['ui'],
            '打开商品列表': ['ui'],
            '发起数据请求': ['logic'],
            '服务器处理': ['business'],
            '数据库查询商品': ['query', 'storage'],
            '返回商品数据': ['api'],
            '渲染商品卡片': ['ui'],
            '图片懒加载': ['cache'],
            '用户滑动浏览': ['ui'],
            '点击购买按钮': ['ui'],
            '校验登录状态': ['auth', 'cache'],
            '创建订单请求': ['logic'],
            '服务器验证库存': ['business'],
            '数据库事务处理': ['storage'],
            '扣减库存': ['storage'],
            '生成订单号': ['business'],
            '返回订单结果': ['api'],
            '更新界面状态': ['ui']
        };
        
        const nodesToHighlight = highlightMap[stepName] || [];
        nodesToHighlight.forEach(nodeName => {
            const node = document.querySelector(`[data-process="${nodeName}"]`);
            if (node) {
                node.classList.add('active');
            }
        });
    }

    function animateDataFlow(stepName) {
        const networkSteps = ['发送登录请求', '返回用户信息', '发起数据请求', '返回商品数据', '创建订单请求', '返回订单结果'];
        const dbSteps = ['数据库查询', '数据库查询商品', '数据库事务处理', '扣减库存'];
        
        if (networkSteps.includes(stepName)) {
            elements.dataFlowArea.classList.add('active');
            setTimeout(() => elements.dataFlowArea.classList.remove('active'), demoState.speed * 0.8);
        }
        
        if (dbSteps.includes(stepName)) {
            elements.dbFlowArea.classList.add('active');
            setTimeout(() => elements.dbFlowArea.classList.remove('active'), demoState.speed * 0.8);
        }
    }

    function updateMetrics(stepName) {
        const totalSteps = scenarios[demoState.scenario].steps.length;
        const elapsedTime = demoState.currentStep * demoState.speed;
        
        elements.totalTime.textContent = `${elapsedTime}ms`;
        elements.currentStep.textContent = `${demoState.currentStep + 1}/${totalSteps}`;
        
        const networkSteps = ['发送登录请求', '发起数据请求', '创建订单请求'];
        const dbSteps = ['数据库查询', '数据库查询商品', '数据库事务处理', '扣减库存'];
        
        if (networkSteps.includes(stepName)) {
            const count = parseInt(elements.networkCount.textContent) + 1;
            elements.networkCount.textContent = count;
        }
        
        if (dbSteps.includes(stepName)) {
            const count = parseInt(elements.dbCount.textContent) + 1;
            elements.dbCount.textContent = count;
        }
    }

    function addLog(message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString();
        demoState.logs.push({ message, type, timestamp });
        
        const logItem = document.createElement('div');
        logItem.className = `log-item ${type}`;
        logItem.innerHTML = `<span class="log-time">[${timestamp}]</span> ${message}`;
        
        elements.logContainer.appendChild(logItem);
        elements.logContainer.scrollTop = elements.logContainer.scrollHeight;
    }

    function togglePause() {
        if (animationTimer) {
            clearTimeout(animationTimer);
            animationTimer = null;
            demoState.isRunning = false;
            elements.pauseBtn.innerHTML = '<span class="btn-icon">▶️</span><span>继续</span>';
            addLog('⏸️ 演示已暂停', 'warning');
        } else {
            demoState.isRunning = true;
            elements.pauseBtn.innerHTML = '<span class="btn-icon">⏸️</span><span>暂停</span>';
            addLog('▶️ 继续执行...', 'info');
            runNextStep();
        }
    }

    function resetDemo() {
        if (animationTimer) {
            clearTimeout(animationTimer);
            animationTimer = null;
        }
        
        demoState.isRunning = false;
        demoState.currentStep = 0;
        
        elements.startBtn.disabled = false;
        elements.pauseBtn.disabled = true;
        elements.pauseBtn.innerHTML = '<span class="btn-icon">⏸️</span><span>暂停</span>';
        
        elements.timelineContainer.innerHTML = renderTimeline();
        elements.codeDisplay.innerHTML = '<pre><code>// 点击"开始演示"查看代码执行过程</code></pre>';
        elements.logContainer.innerHTML = '<div class="log-item info">系统已重置，等待开始...</div>';
        
        resetMetrics();
        
        document.querySelectorAll('.process-node').forEach(node => {
            node.classList.remove('active');
        });
        
        elements.dataFlowArea.classList.remove('active');
        elements.dbFlowArea.classList.remove('active');
    }

    function resetMetrics() {
        elements.totalTime.textContent = '0ms';
        elements.currentStep.textContent = `0/${scenarios[demoState.scenario].steps.length}`;
        elements.networkCount.textContent = '0';
        elements.dbCount.textContent = '0';
    }

    function completeDemo() {
        demoState.isRunning = false;
        elements.startBtn.disabled = false;
        elements.pauseBtn.disabled = true;
        
        const totalTime = scenarios[demoState.scenario].steps.length * demoState.speed;
        elements.totalTime.textContent = `${totalTime}ms`;
        
        addLog('✅ APP运行流程演示完成！', 'success');
    }

    function copyCode() {
        const codeElement = elements.codeDisplay.querySelector('code');
        if (codeElement) {
            navigator.clipboard.writeText(codeElement.textContent).then(() => {
                showFeedback('代码已复制！', 'success');
            });
        }
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
        // 初始渲染
    }

    function addComponentStyles() {
        if (document.getElementById('app-lifecycle-demo-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'app-lifecycle-demo-styles';
        style.textContent = `
            .app-lifecycle-demo {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                border-radius: 20px;
                padding: 28px;
                color: #e2e8f0;
                font-family: 'SF Pro Display', -apple-system, sans-serif;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                position: relative;
                overflow: hidden;
            }
            
            .app-lifecycle-demo::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(13, 148, 136, 0.5), transparent);
            }
            
            .demo-header {
                text-align: center;
                margin-bottom: 24px;
            }
            
            .demo-title {
                font-size: 1.75rem;
                font-weight: 700;
                background: linear-gradient(135deg, #0d9488, #14b8a6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin: 0 0 8px;
            }
            
            .demo-subtitle {
                color: #94a3b8;
                font-size: 0.9375rem;
                margin: 0;
            }
            
            .control-panel {
                background: rgba(30, 41, 59, 0.5);
                border-radius: 16px;
                padding: 20px;
                margin-bottom: 24px;
                border: 1px solid rgba(71, 85, 105, 0.3);
            }
            
            .scenario-selector {
                margin-bottom: 16px;
            }
            
            .scenario-selector label {
                display: block;
                font-size: 0.8125rem;
                color: #94a3b8;
                margin-bottom: 10px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .scenario-buttons {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
            
            .scenario-btn {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 16px;
                background: rgba(51, 65, 85, 0.5);
                border: 1px solid rgba(71, 85, 105, 0.5);
                border-radius: 10px;
                color: #94a3b8;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.875rem;
            }
            
            .scenario-btn:hover {
                background: rgba(71, 85, 105, 0.5);
                color: #e2e8f0;
            }
            
            .scenario-btn.active {
                background: linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(20, 184, 166, 0.3));
                border-color: #0d9488;
                color: #5eead4;
            }
            
            .scenario-icon {
                font-size: 1.125rem;
            }
            
            .speed-control {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
            }
            
            .speed-control label {
                font-size: 0.8125rem;
                color: #94a3b8;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .speed-control input[type="range"] {
                flex: 1;
                height: 6px;
                -webkit-appearance: none;
                background: rgba(71, 85, 105, 0.5);
                border-radius: 3px;
                outline: none;
            }
            
            .speed-control input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 18px;
                height: 18px;
                background: #0d9488;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 0 10px rgba(13, 148, 136, 0.5);
            }
            
            #speedValue {
                font-size: 0.875rem;
                color: #5eead4;
                font-weight: 600;
                min-width: 60px;
            }
            
            .action-buttons {
                display: flex;
                gap: 12px;
            }
            
            .action-btn {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 12px 20px;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9375rem;
                font-weight: 500;
                border: none;
            }
            
            .action-btn.primary {
                background: linear-gradient(135deg, #0d9488, #14b8a6);
                color: white;
                box-shadow: 0 4px 15px rgba(13, 148, 136, 0.4);
            }
            
            .action-btn.primary:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(13, 148, 136, 0.5);
            }
            
            .action-btn.secondary {
                background: rgba(51, 65, 85, 0.5);
                color: #94a3b8;
                border: 1px solid rgba(71, 85, 105, 0.5);
            }
            
            .action-btn.secondary:hover:not(:disabled) {
                background: rgba(71, 85, 105, 0.5);
                color: #e2e8f0;
            }
            
            .action-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .main-content {
                display: grid;
                grid-template-columns: 1fr 380px;
                gap: 24px;
                margin-bottom: 24px;
            }
            
            @media (max-width: 1024px) {
                .main-content {
                    grid-template-columns: 1fr;
                }
            }
            
            .flow-visualization {
                background: rgba(30, 41, 59, 0.3);
                border-radius: 16px;
                padding: 20px;
                border: 1px solid rgba(71, 85, 105, 0.2);
            }
            
            .architecture-diagram {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .arch-layer {
                background: rgba(51, 65, 85, 0.3);
                border-radius: 12px;
                padding: 16px;
                border: 1px solid rgba(71, 85, 105, 0.2);
                transition: all 0.3s ease;
            }
            
            .layer-header {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;
            }
            
            .layer-icon {
                font-size: 1.5rem;
            }
            
            .layer-title {
                font-weight: 600;
                color: #e2e8f0;
            }
            
            .layer-content {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }
            
            .process-node {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
                padding: 12px 16px;
                background: rgba(30, 41, 59, 0.5);
                border-radius: 10px;
                border: 1px solid rgba(71, 85, 105, 0.3);
                transition: all 0.3s ease;
                min-width: 80px;
            }
            
            .process-node.active {
                background: linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(20, 184, 166, 0.3));
                border-color: #0d9488;
                transform: scale(1.05);
                box-shadow: 0 0 20px rgba(13, 148, 136, 0.3);
            }
            
            .process-node .node-icon {
                font-size: 1.5rem;
            }
            
            .process-node .node-label {
                font-size: 0.75rem;
                color: #94a3b8;
                text-align: center;
            }
            
            .data-flow-area {
                padding: 8px;
                text-align: center;
                transition: all 0.3s ease;
            }
            
            .data-flow-area.active {
                background: rgba(13, 148, 136, 0.1);
            }
            
            .data-flow-area.active svg path {
                animation: flowPulse 0.5s ease infinite;
            }
            
            @keyframes flowPulse {
                0%, 100% { stroke-dashoffset: 0; }
                50% { stroke-dashoffset: 10; }
            }
            
            .flow-label {
                font-size: 0.75rem;
                color: #64748b;
                margin-top: 4px;
            }
            
            .info-panel {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            
            .panel-title {
                font-size: 0.875rem;
                font-weight: 600;
                color: #e2e8f0;
                margin: 0 0 12px;
            }
            
            .step-timeline {
                background: rgba(30, 41, 59, 0.3);
                border-radius: 12px;
                padding: 16px;
                border: 1px solid rgba(71, 85, 105, 0.2);
                max-height: 200px;
                overflow-y: auto;
            }
            
            .timeline-container {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .timeline-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 8px 12px;
                background: rgba(51, 65, 85, 0.3);
                border-radius: 8px;
                transition: all 0.3s ease;
            }
            
            .timeline-item.active {
                background: linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(20, 184, 166, 0.3));
                border: 1px solid #0d9488;
            }
            
            .timeline-item.completed {
                opacity: 0.6;
            }
            
            .timeline-marker {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(71, 85, 105, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.75rem;
                font-weight: 600;
                color: #94a3b8;
            }
            
            .timeline-item.active .timeline-marker {
                background: #0d9488;
                color: white;
            }
            
            .timeline-item.completed .timeline-marker {
                background: #10b981;
                color: white;
            }
            
            .timeline-content {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .step-icon {
                font-size: 1rem;
            }
            
            .step-name {
                font-size: 0.8125rem;
                color: #e2e8f0;
            }
            
            .code-panel {
                background: rgba(30, 41, 59, 0.3);
                border-radius: 12px;
                padding: 16px;
                border: 1px solid rgba(71, 85, 105, 0.2);
            }
            
            .code-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 12px;
            }
            
            .copy-btn {
                padding: 6px 12px;
                background: rgba(71, 85, 105, 0.5);
                border: none;
                border-radius: 6px;
                color: #94a3b8;
                font-size: 0.75rem;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .copy-btn:hover {
                background: rgba(71, 85, 105, 0.8);
                color: #e2e8f0;
            }
            
            .code-display {
                background: #0f172a;
                border-radius: 8px;
                padding: 12px;
                max-height: 180px;
                overflow-y: auto;
            }
            
            .code-display pre {
                margin: 0;
                font-family: 'SF Mono', 'Fira Code', monospace;
                font-size: 0.75rem;
                line-height: 1.6;
            }
            
            .code-display code {
                color: #a5f3fc;
            }
            
            .log-panel {
                background: rgba(30, 41, 59, 0.3);
                border-radius: 12px;
                padding: 16px;
                border: 1px solid rgba(71, 85, 105, 0.2);
            }
            
            .log-container {
                background: #0f172a;
                border-radius: 8px;
                padding: 12px;
                max-height: 120px;
                overflow-y: auto;
                font-family: 'SF Mono', monospace;
                font-size: 0.75rem;
            }
            
            .log-item {
                padding: 4px 0;
                color: #94a3b8;
                line-height: 1.5;
            }
            
            .log-item.step {
                color: #5eead4;
            }
            
            .log-item.success {
                color: #34d399;
            }
            
            .log-item.warning {
                color: #fbbf24;
            }
            
            .log-item.error {
                color: #f87171;
            }
            
            .log-time {
                color: #64748b;
            }
            
            .metrics-panel {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 12px;
            }
            
            @media (max-width: 768px) {
                .metrics-panel {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            
            .metric-card {
                display: flex;
                align-items: center;
                gap: 12px;
                background: rgba(30, 41, 59, 0.3);
                border-radius: 12px;
                padding: 16px;
                border: 1px solid rgba(71, 85, 105, 0.2);
            }
            
            .metric-icon {
                font-size: 1.5rem;
            }
            
            .metric-info {
                display: flex;
                flex-direction: column;
            }
            
            .metric-value {
                font-size: 1.25rem;
                font-weight: 700;
                color: #5eead4;
            }
            
            .metric-label {
                font-size: 0.75rem;
                color: #64748b;
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
            
            /* Scrollbar Styles */
            .step-timeline::-webkit-scrollbar,
            .code-display::-webkit-scrollbar,
            .log-container::-webkit-scrollbar {
                width: 6px;
            }
            
            .step-timeline::-webkit-scrollbar-track,
            .code-display::-webkit-scrollbar-track,
            .log-container::-webkit-scrollbar-track {
                background: rgba(30, 41, 59, 0.5);
                border-radius: 3px;
            }
            
            .step-timeline::-webkit-scrollbar-thumb,
            .code-display::-webkit-scrollbar-thumb,
            .log-container::-webkit-scrollbar-thumb {
                background: rgba(71, 85, 105, 0.5);
                border-radius: 3px;
            }
            
            @media (max-width: 640px) {
                .app-lifecycle-demo {
                    padding: 16px;
                }
                
                .demo-title {
                    font-size: 1.375rem;
                }
                
                .scenario-buttons {
                    flex-direction: column;
                }
                
                .action-buttons {
                    flex-direction: column;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    window.startAppLifecycleDemo = init;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    setTimeout(init, 100);

})();
