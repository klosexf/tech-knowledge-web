const knowledgeData = {
    categories: [
        {
            id: 'architecture',
            name: '互联网基础架构',
            icon: '🏗️',
            description: '深入理解互联网产品的技术架构体系，建立完整的技术思维框架，掌握前端、网络、服务端、数据库的协作机制',
            topics: ['前端-网络-服务端-数据库四层架构', '请求响应模型详解', '技术思维与产品设计', '技术边界与可行性评估']
        },
        {
            id: 'programming',
            name: '编程基本原理',
            icon: '💻',
            description: '系统学习编程核心概念，理解代码逻辑思维方式，掌握数据类型、控制结构、数据结构和函数等基础知识',
            topics: ['数据类型与变量', '条件判断与循环', '数据结构详解', '函数与模块化']
        },
        {
            id: 'database',
            name: '数据库与存储',
            icon: '🗄️',
            description: '全面掌握数据存储技术，深入理解关系型与非关系型数据库原理，学习SQL操作和数据管理策略',
            topics: ['关系型数据库设计', '非关系型数据库应用', 'SQL语言精通', '数据安全与删除策略']
        },
        {
            id: 'frontend',
            name: '客户端技术',
            icon: '📱',
            description: '深入了解客户端技术实现，掌握Android/iOS平台特性，理解Web技术栈和各类应用形态',
            topics: ['移动平台特性对比', 'UI控件与交互组件', 'Web核心技术栈', '应用形态选择策略']
        },
        {
            id: 'backend',
            name: '服务端与接口',
            icon: '⚙️',
            description: '掌握服务端技术体系，深入理解API接口设计规范，学习后端语言特性和云服务运维基础',
            topics: ['后端语言选型', 'RESTful API设计', '接口文档规范', '云服务与运维基础']
        },
        {
            id: 'data',
            name: '数据统计分析',
            icon: '📊',
            description: '建立数据驱动的产品思维，掌握核心数据指标体系，学习数据分析方法和可视化技术',
            topics: ['核心指标体系', '数据分析方法论', '数据可视化技术', 'A/B测试基础']
        }
    ],
    
    knowledge: [
        // ==================== 互联网基础架构模块 ====================
        {
            id: 'arch-1',
            categoryId: 'architecture',
            title: '互联网产品四层架构：前端-网络-服务端-数据库',
            difficulty: 'beginner',
            summary: '深入理解互联网产品的完整技术架构，掌握客户端、网络传输、服务端处理、数据存储四个核心层级的职责与协作机制。',
            content: `
                <h3>📚 核心概念定义</h3>
                <p>互联网产品技术架构采用<strong>分层设计思想</strong>，将整个系统划分为四个核心层级，每层负责特定的功能职责，通过标准化接口进行通信。这种架构设计确保了系统的可维护性、可扩展性和高可用性。</p>
                
                <div class="diagram-box">
                    <h4>🏗️ 四层架构示意图</h4>
                    <pre class="ascii-diagram">
┌─────────────────────────────────────────────────────────────┐
│                      用户层 (User Layer)                      │
│                    手机APP / 浏览器 / 小程序                    │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/HTTPS 请求
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                      前端层 (Frontend)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   UI渲染引擎   │  │  用户交互处理  │  │  本地数据缓存  │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│  技术栈: HTML/CSS/JS, React, Vue, iOS, Android              │
└────────────────────┬────────────────────────────────────────┘
                     │ API请求 (JSON/XML)
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                      网络层 (Network)                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   DNS解析     │  │   负载均衡    │  │   CDN加速    │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│  协议: HTTP/1.1, HTTP/2, HTTPS, TCP/IP, WebSocket           │
└────────────────────┬────────────────────────────────────────┘
                     │ 路由转发
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                      服务端层 (Backend)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  业务逻辑处理  │  │  权限验证    │  │  数据计算    │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│  技术栈: Java, Python, Node.js, Go, PHP                     │
└────────────────────┬────────────────────────────────────────┘
                     │ SQL/NoSQL 查询
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                      数据层 (Database)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  关系型数据库  │  │  缓存系统    │  │  文件存储    │       │
│  │  MySQL/PG    │  │  Redis       │  │  OSS/S3      │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                    </pre>
                </div>
                
                <h3>🔍 各层深度解析</h3>
                
                <h4>1. 前端层 (Frontend Layer)</h4>
                <p><strong>定义</strong>：直接与用户交互的界面层，负责页面渲染、用户输入处理、本地状态管理。</p>
                <ul>
                    <li><strong>核心职责</strong>：UI渲染、事件响应、表单验证、本地存储、API调用</li>
                    <li><strong>技术形态</strong>：Web页面(React/Vue)、原生APP(Swift/Kotlin)、小程序、H5</li>
                    <li><strong>性能指标</strong>：首屏加载时间 < 2s，交互响应时间 < 100ms，FPS > 50</li>
                </ul>
                
                <div class="code-block">
                    <div class="code-header">
                        <span class="code-lang">JavaScript</span>
                        <button class="copy-btn">复制</button>
                    </div>
                    <pre><code>// 前端层典型代码：用户登录请求
async function userLogin(username, password) {
    try {
        // 1. 表单验证（前端层职责）
        if (!username || !password) {
            throw new Error('用户名和密码不能为空');
        }
        
        // 2. 调用后端API（通过网络层）
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        
        // 3. 处理响应结果
        const data = await response.json();
        if (data.code === 200) {
            // 4. 本地存储Token（本地数据缓存）
            localStorage.setItem('token', data.data.token);
            return { success: true, user: data.data };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
}</code></pre>
                </div>
                
                <h4>2. 网络层 (Network Layer)</h4>
                <p><strong>定义</strong>：负责数据在网络中的传输，包括路由选择、负载均衡、安全防护、加速优化。</p>
                <ul>
                    <li><strong>核心组件</strong>：DNS服务器、CDN节点、负载均衡器、网关、防火墙</li>
                    <li><strong>关键协议</strong>：HTTP/HTTPS(应用层)、TCP/UDP(传输层)、IP(网络层)</li>
                    <li><strong>性能指标</strong>：网络延迟 < 200ms，丢包率 < 1%，可用性 > 99.9%</li>
                </ul>
                
                <div class="info-box">
                    <h4>💡 产品经理关注点</h4>
                    <ul>
                        <li><strong>HTTPS加密</strong>：涉及用户隐私、支付的功能必须使用HTTPS</li>
                        <li><strong>CDN加速</strong>：静态资源（图片、视频）使用CDN可提升50%+加载速度</li>
                        <li><strong>网络容错</strong>：弱网环境下的降级策略（如离线模式、缓存展示）</li>
                    </ul>
                </div>
                
                <h4>3. 服务端层 (Backend Layer)</h4>
                <p><strong>定义</strong>：业务逻辑处理中心，负责数据处理、业务规则执行、权限控制、与数据库交互。</p>
                <ul>
                    <li><strong>核心职责</strong>：业务逻辑、数据校验、权限认证、事务管理、第三方集成</li>
                    <li><strong>架构模式</strong>：MVC、微服务、Serverless、中台架构</li>
                    <li><strong>性能指标</strong>：接口响应时间 < 500ms，并发处理能力，错误率 < 0.1%</li>
                </ul>
                
                <div class="code-block">
                    <div class="code-header">
                        <span class="code-lang">Java (Spring Boot)</span>
                        <button class="copy-btn">复制</button>
                    </div>
                    <pre><code>// 服务端层典型代码：订单处理逻辑
@RestController
@RequestMapping("/api/order")
public class OrderController {
    
    @PostMapping("/create")
    public ResponseEntity&lt;ApiResponse&gt; createOrder(
            @RequestBody OrderRequest request,
            @RequestHeader("Authorization") String token) {
        
        try {
            // 1. 权限验证（服务端职责）
            User user = authService.validateToken(token);
            if (user == null) {
                return ResponseEntity.status(401)
                    .body(ApiResponse.error("未登录或登录已过期"));
            }
            
            // 2. 业务逻辑处理
            Order order = orderService.createOrder(request, user);
            
            // 3. 返回标准化响应
            return ResponseEntity.ok(ApiResponse.success(order));
            
        } catch (BusinessException e) {
            return ResponseEntity.ok(ApiResponse.error(e.getMessage()));
        }
    }
}</code></pre>
                </div>
                
                <h4>4. 数据层 (Data Layer)</h4>
                <p><strong>定义</strong>：负责数据的持久化存储、查询优化、数据安全、备份恢复。</p>
                <ul>
                    <li><strong>存储类型</strong>：关系型数据库(MySQL)、NoSQL(MongoDB)、缓存(Redis)、对象存储(OSS)</li>
                    <li><strong>核心机制</strong>：索引优化、事务ACID、主从复制、分库分表</li>
                    <li><strong>性能指标</strong>：查询响应时间 < 100ms，数据一致性，备份完整性</li>
                </ul>
                
                <h3>🔄 完整请求流程示例</h3>
                <div class="flow-diagram">
                    <h4>场景：用户在电商APP下单购买商品</h4>
                    <div class="flow-steps">
                        <div class="flow-step">
                            <div class="step-num">1</div>
                            <div class="step-content">
                                <strong>前端层</strong>
                                <p>用户点击"立即购买"，前端校验商品信息、库存状态，展示确认弹窗</p>
                            </div>
                        </div>
                        <div class="flow-arrow">↓ HTTPS请求</div>
                        <div class="flow-step">
                            <div class="step-num">2</div>
                            <div class="step-content">
                                <strong>网络层</strong>
                                <p>DNS解析域名→CDN节点检查→负载均衡分配→SSL/TLS握手加密</p>
                            </div>
                        </div>
                        <div class="flow-arrow">↓ 路由转发</div>
                        <div class="flow-step">
                            <div class="step-num">3</div>
                            <div class="step-content">
                                <strong>服务端层</strong>
                                <p>验证用户Token→检查库存→计算价格→生成订单→调用支付接口</p>
                            </div>
                        </div>
                        <div class="flow-arrow">↓ SQL查询</div>
                        <div class="flow-step">
                            <div class="step-num">4</div>
                            <div class="step-content">
                                <strong>数据层</strong>
                                <p>订单表插入记录→库存表扣减→用户积分更新→事务提交</p>
                            </div>
                        </div>
                        <div class="flow-arrow">↑ 响应返回</div>
                        <div class="flow-step">
                            <div class="step-num">5</div>
                            <div class="step-content">
                                <strong>前端层</strong>
                                <p>接收订单号→跳转支付页面→展示订单详情</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h3>🎯 产品经理实战指南</h3>
                
                <div class="example-box">
                    <h4>场景1：为什么页面加载慢？</h4>
                    <table class="pm-table">
                        <tr>
                            <th>现象</th>
                            <th>可能原因</th>
                            <th>解决方向</th>
                        </tr>
                        <tr>
                            <td>首屏白屏 > 3秒</td>
                            <td>前端资源过大、网络延迟</td>
                            <td>CDN加速、资源压缩、懒加载</td>
                        </tr>
                        <tr>
                            <td>图片加载慢</td>
                            <td>未使用CDN、图片未压缩</td>
                            <td>OSS对象存储、WebP格式、渐进加载</td>
                        </tr>
                        <tr>
                            <td>接口响应慢</td>
                            <td>服务端处理慢、数据库查询慢</td>
                            <td>接口优化、缓存策略、SQL优化</td>
                        </tr>
                    </table>
                </div>
                
                <div class="example-box">
                    <h4>场景2：系统崩溃怎么排查？</h4>
                    <p><strong>排查思路（从外到内）</strong>：</p>
                    <ol>
                        <li><strong>前端层</strong>：检查是否是前端JS错误导致页面白屏</li>
                        <li><strong>网络层</strong>：检查DNS解析、CDN节点、SSL证书是否过期</li>
                        <li><strong>服务端层</strong>：检查服务器CPU/内存、应用日志、错误监控</li>
                        <li><strong>数据层</strong>：检查数据库连接数、慢查询、磁盘空间</li>
                    </ol>
                </div>
                
                <h3>📋 技术决策检查清单</h3>
                <ul class="checklist">
                    <li>☐ 功能涉及哪些技术层？每层的技术方案是什么？</li>
                    <li>☐ 接口设计是否遵循RESTful规范？</li>
                    <li>☐ 是否考虑了高并发场景下的性能瓶颈？</li>
                    <li>☐ 数据存储选型是否合理（关系型 vs 非关系型）？</li>
                    <li>☐ 是否考虑了数据安全和用户隐私保护？</li>
                    <li>☐ 是否有完善的监控和告警机制？</li>
                </ul>
            `
        },
        {
            id: 'arch-2',
            categoryId: 'architecture',
            title: 'HTTP请求响应模型深度解析',
            difficulty: 'beginner',
            summary: '深入理解HTTP协议的工作原理，掌握请求方法、状态码、Headers等核心概念，建立完整的网络通信思维模型。',
            content: `
                <h3>📚 核心概念定义</h3>
                <p>HTTP（HyperText Transfer Protocol）是互联网上应用最广泛的协议，采用<strong>请求-响应（Request-Response）</strong>模式，是无状态、基于文本的应用层协议。理解HTTP是产品经理与开发沟通的基础。</p>
                
                <div class="diagram-box">
                    <h4>🔄 请求响应模型示意图</h4>
                    <pre class="ascii-diagram">
客户端 (浏览器/APP)                    服务端 (Web Server)
┌─────────────────┐                  ┌─────────────────┐
│  1. 构建请求      │ ───────────────> │  2. 解析请求      │
│  - URL           │   HTTP Request   │  - 方法/路径      │
│  - Method        │                  │  - Headers       │
│  - Headers       │                  │  - Body          │
│  - Body          │                  │                  │
└─────────────────┘                  └─────────────────┘
                                              │
                                              ▼
                                       ┌─────────────────┐
                                       │  3. 业务处理      │
                                       │  - 权限验证       │
                                       │  - 数据查询       │
                                       │  - 逻辑计算       │
                                       └─────────────────┘
                                              │
┌─────────────────┐                  ┌─────────────────┐
│  5. 处理响应      │ <─────────────── │  4. 构建响应      │
│  - 解析状态码     │   HTTP Response  │  - 状态码        │
│  - 读取Headers   │                  │  - Headers       │
│  - 处理Body      │                  │  - Body (JSON)   │
│  - 渲染页面      │                  │                  │
└─────────────────┘                  └─────────────────┘
                    </pre>
                </div>
                
                <h3>🔍 HTTP请求详解</h3>
                
                <h4>请求方法（HTTP Methods）</h4>
                <table class="pm-table">
                    <tr>
                        <th>方法</th>
                        <th>用途</th>
                        <th>幂等性</th>
                        <th>产品场景</th>
                    </tr>
                    <tr>
                        <td><code>GET</code></td>
                        <td>获取资源</td>
                        <td>✅ 幂等</td>
                        <td>获取商品列表、查看用户信息</td>
                    </tr>
                    <tr>
                        <td><code>POST</code></td>
                        <td>创建资源</td>
                        <td>❌ 非幂等</td>
                        <td>提交订单、用户注册、发表评论</td>
                    </tr>
                    <tr>
                        <td><code>PUT</code></td>
                        <td>更新资源（全量）</td>
                        <td>✅ 幂等</td>
                        <td>修改用户资料（全部字段）</td>
                    </tr>
                    <tr>
                        <td><code>PATCH</code></td>
                        <td>更新资源（部分）</td>
                        <td>❌ 非幂等</td>
                        <td>修改用户昵称（单个字段）</td>
                    </tr>
                    <tr>
                        <td><code>DELETE</code></td>
                        <td>删除资源</td>
                        <td>✅ 幂等</td>
                        <td>删除订单、取消收藏</td>
                    </tr>
                </table>
                
                <div class="info-box">
                    <h4>💡 幂等性说明</h4>
                    <p><strong>幂等</strong>：多次执行结果相同。GET请求多次刷新页面，结果一样；POST创建订单，多次提交会创建多个订单。</p>
                </div>
                
                <h4>请求结构示例</h4>
                <div class="code-block">
                    <div class="code-header">
                        <span class="code-lang">HTTP Request</span>
                        <button class="copy-btn">复制</button>
                    </div>
                    <pre><code>POST /api/order/create HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS...)
Accept: application/json
Content-Length: 156

{
    "productId": "SKU123456",
    "quantity": 2,
    "addressId": "ADDR789",
    "couponCode": "SAVE20"
}</code></pre>
                </div>
                
                <h4>常见请求Headers</h4>
                <table class="pm-table">
                    <tr>
                        <th>Header</th>
                        <th>说明</th>
                        <th>产品意义</th>
                    </tr>
                    <tr>
                        <td><code>Content-Type</code></td>
                        <td>请求体格式</td>
                        <td>告诉服务端数据格式：JSON、表单、文件</td>
                    </tr>
                    <tr>
                        <td><code>Authorization</code></td>
                        <td>认证信息</td>
                        <td>用户登录凭证，证明"你是谁"</td>
                    </tr>
                    <tr>
                        <td><code>User-Agent</code></td>
                        <td>客户端信息</td>
                        <td>区分iOS/Android/Web，用于统计分析</td>
                    </tr>
                    <tr>
                        <td><code>Accept-Language</code></td>
                        <td>语言偏好</td>
                        <td>实现多语言产品，自动切换语言</td>
                    </tr>
                </table>
                
                <h3>🔍 HTTP响应详解</h3>
                
                <h4>状态码分类</h4>
                <div class="status-codes">
                    <div class="status-group">
                        <h5>2xx 成功类</h5>
                        <ul>
                            <li><code>200 OK</code> - 请求成功，标准响应</li>
                            <li><code>201 Created</code> - 资源创建成功</li>
                            <li><code>204 No Content</code> - 成功但无返回内容</li>
                        </ul>
                    </div>
                    <div class="status-group">
                        <h5>3xx 重定向类</h5>
                        <ul>
                            <li><code>301 Moved Permanently</code> - 永久重定向</li>
                            <li><code>302 Found</code> - 临时重定向</li>
                            <li><code>304 Not Modified</code> - 缓存有效，使用缓存</li>
                        </ul>
                    </div>
                    <div class="status-group">
                        <h5>4xx 客户端错误类</h5>
                        <ul>
                            <li><code>400 Bad Request</code> - 请求参数错误</li>
                            <li><code>401 Unauthorized</code> - 未登录/Token过期</li>
                            <li><code>403 Forbidden</code> - 无权限访问</li>
                            <li><code>404 Not Found</code> - 资源不存在</li>
                            <li><code>429 Too Many Requests</code> - 请求过于频繁</li>
                        </ul>
                    </div>
                    <div class="status-group">
                        <h5>5xx 服务端错误类</h5>
                        <ul>
                            <li><code>500 Internal Server Error</code> - 服务端内部错误</li>
                            <li><code>502 Bad Gateway</code> - 网关错误</li>
                            <li><code>503 Service Unavailable</code> - 服务暂时不可用</li>
                        </ul>
                    </div>
                </div>
                
                <h4>响应结构示例</h4>
                <div class="code-block">
                    <div class="code-header">
                        <span class="code-lang">HTTP Response</span>
                        <button class="copy-btn">复制</button>
                    </div>
                    <pre><code>HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 523
Cache-Control: max-age=3600
Set-Cookie: sessionId=abc123; Path=/; HttpOnly

{
    "code": 200,
    "message": "success",
    "data": {
        "orderId": "ORD202403090001",
        "status": "pending_payment",
        "totalAmount": 199.99,
        "createdAt": "2024-03-09T10:30:00Z",
        "items": [
            {
                "productId": "SKU123456",
                "productName": "无线蓝牙耳机",
                "price": 99.99,
                "quantity": 2
            }
        ]
    }
}</code></pre>
                </div>
                
                <h3>🎯 产品经理实战指南</h3>
                
                <div class="example-box">
                    <h4>场景1：设计错误提示策略</h4>
                    <table class="pm-table">
                        <tr>
                            <th>状态码</th>
                            <th>用户场景</th>
                            <th>产品提示文案</th>
                        </tr>
                        <tr>
                            <td>400</td>
                            <td>表单填写错误</td>
                            <td>"手机号格式不正确，请检查"</td>
                        </tr>
                        <tr>
                            <td>401</td>
                            <td>登录过期</td>
                            <td>"登录已过期，请重新登录" → 跳转登录页</td>
                        </tr>
                        <tr>
                            <td>403</td>
                            <td>无权限操作</td>
                            <td>"您暂无权限执行此操作"</td>
                        </tr>
                        <tr>
                            <td>404</td>
                            <td>商品下架</td>
                            <td>"该商品已下架，看看其他商品吧"</td>
                        </tr>
                        <tr>
                            <td>429</td>
                            <td>操作太频繁</td>
                            <td>"操作过于频繁，请稍后再试"</td>
                        </tr>
                        <tr>
                            <td>500</td>
                            <td>服务器错误</td>
                            <td>"系统繁忙，请稍后重试"（不要暴露技术细节）</td>
                        </tr>
                    </table>
                </div>
                
                <div class="example-box">
                    <h4>场景2：API接口设计评审</h4>
                    <p><strong>评审清单</strong>：</p>
                    <ul class="checklist">
                        <li>☐ 接口路径是否符合RESTful规范？<code>/api/users/{id}</code> vs <code>/api/getUserInfo</code></li>
                        <li>☐ HTTP方法是否正确？获取用GET，创建用POST</li>
                        <li>☐ 请求参数是否有校验规则？必填/选填、类型、长度限制</li>
                        <li>☐ 响应数据结构是否统一？code/message/data格式</li>
                        <li>☐ 错误码设计是否完整？不同场景返回不同状态码</li>
                        <li>☐ 是否考虑了分页？列表接口需要page/size参数</li>
                    </ul>
                </div>
                
                <h3>🔐 HTTPS安全传输</h3>
                <p>HTTPS = HTTP + SSL/TLS加密，确保数据传输安全，防止中间人攻击。</p>
                
                <div class="diagram-box">
                    <h4>🔒 HTTPS握手过程</h4>
                    <pre class="ascii-diagram">
客户端                                    服务端
  │                                          │
  │  1. Client Hello (支持的加密算法)         │
  │ ───────────────────────────────────────> │
  │                                          │
  │  2. Server Hello + 证书 (公钥)           │
  │ <─────────────────────────────────────── │
  │                                          │
  │  3. 验证证书 → 生成随机密钥 (Pre-master)  │
  │  4. 用公钥加密密钥发送                     │
  │ ───────────────────────────────────────> │
  │                                          │
  │  5. 服务端用私钥解密，获得密钥              │
  │  6. 双方使用密钥对称加密通信                │
  │ <══════════════════════════════════════> │
  │         加密通道建立，开始传输数据          │
                    </pre>
                </div>
                
                <div class="info-box">
                    <h4>⚠️ 产品经理注意</h4>
                    <ul>
                        <li>所有涉及<strong>用户隐私</strong>（手机号、地址）的接口必须用HTTPS</li>
                        <li>所有<strong>支付相关</strong>功能必须用HTTPS</li>
                        <li>登录注册接口必须用HTTPS，防止密码泄露</li>
                        <li>HTTP网站会被浏览器标记为"不安全"，影响用户信任</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'arch-3',
            categoryId: 'architecture',
            title: '技术思维：从需求到实现的产品设计方法',
            difficulty: 'intermediate',
            summary: '培养技术思维，学会从开发角度思考产品设计，掌握需求拆解、流程梳理、异常处理等核心方法。',
            content: `
                <h3>📚 什么是技术思维？</h3>
                <p>技术思维是产品经理的一种核心能力，指<strong>从实现角度思考产品设计</strong>的能力。它要求你不仅思考"用户要什么"，更要思考"这个功能如何一步步实现"、"有哪些技术限制"、"会出现什么异常情况"。</p>
                
                <div class="diagram-box">
                    <h4>🧠 产品思维 vs 技术思维</h4>
                    <div class="compare-table">
                        <table class="pm-table">
                            <tr>
                                <th>维度</th>
                                <th>产品思维</th>
                                <th>技术思维</th>
                            </tr>
                            <tr>
                                <td>关注点</td>
                                <td>用户需求、商业价值、用户体验</td>
                                <td>实现路径、技术可行性、系统稳定性</td>
                            </tr>
                            <tr>
                                <td>思考方式</td>
                                <td>"用户想要一个点赞功能"</td>
                                <td>"点赞需要记录用户ID、内容ID、时间戳，要考虑并发冲突"</td>
                            </tr>
                            <tr>
                                <td>输出物</td>
                                <td>需求文档、原型图、流程图</td>
                                <td>技术方案、接口设计、数据库表结构</td>
                            </tr>
                            <tr>
                                <td>风险关注</td>
                                <td>用户不喜欢、竞品抢先</td>
                                <td>性能瓶颈、安全漏洞、维护成本</td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                <h3>🔧 技术思维核心方法</h3>
                
                <h4>方法1：流程拆解法</h4>
                <p>将用户的一个操作，拆解成系统执行的详细步骤，识别每个步骤的输入、处理、输出。</p>
                
                <div class="example-box">
                    <h4>💡 案例：用户下单流程拆解</h4>
                    <div class="flow-breakdown">
                        <div class="step-detail">
                            <h5>步骤1：点击"立即购买"</h5>
                            <ul>
                                <li><strong>触发条件</strong>：用户点击按钮</li>
                                <li><strong>前端处理</strong>：校验商品信息是否完整</li>
                                <li><strong>异常场景</strong>：商品已下架？库存为0？</li>
                            </ul>
                        </div>
                        <div class="step-detail">
                            <h5>步骤2：进入订单确认页</h5>
                            <ul>
                                <li><strong>数据获取</strong>：调用接口获取默认地址、可用优惠券</li>
                                <li><strong>计算逻辑</strong>：商品总价 = 单价 × 数量 - 优惠</li>
                                <li><strong>异常场景</strong>：没有收货地址？优惠券已过期？</li>
                            </ul>
                        </div>
                        <div class="step-detail">
                            <h5>步骤3：提交订单</h5>
                            <ul>
                                <li><strong>数据校验</strong>：地址是否完整？商品是否可售？</li>
                                <li><strong>库存锁定</strong>：预占库存（防止超卖）</li>
                                <li><strong>订单创建</strong>：生成订单号，写入数据库</li>
                                <li><strong>异常场景</strong>：库存不足？并发冲突？</li>
                            </ul>
                        </div>
                        <div class="step-detail">
                            <h5>步骤4：跳转支付</h5>
                            <ul>
                                <li><strong>状态变更</strong>：订单状态改为"待支付"</li>
                                <li><strong>超时处理</strong>：15分钟未支付自动取消</li>
                                <li><strong>异常场景</strong>：支付失败？用户取消？</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h4>方法2：状态机设计法</h4>
                <p>复杂业务对象（如订单、任务）有多个状态，状态之间有转换规则。用状态机思维可以清晰梳理业务逻辑。</p>
                
                <div class="diagram-box">
                    <h4>📊 订单状态机</h4>
                    <pre class="ascii-diagram">
                    ┌──────────┐
         ┌─────────│  待付款   │◄────────┐
         │         └────┬─────┘         │
         │    15分钟超时 │               │
         │    或用户取消 │               │ 创建订单
         ▼              ▼               │
    ┌──────────┐   ┌──────────┐        │
    │  已取消   │   │  已付款   │        │
    └──────────┘   └────┬─────┘        │
                        │ 发货          │
                        ▼               │
                   ┌──────────┐         │
                   │  待收货   │─────────┘
                   └────┬─────┘   退货退款
                        │
                        ▼ 确认收货
                   ┌──────────┐
                   │  已完成   │
                   └──────────┘
                    </pre>
                </div>
                
                <div class="code-block">
                    <div class="code-header">
                        <span class="code-lang">状态转换代码示例</span>
                        <button class="copy-btn">复制</button>
                    </div>
                    <pre><code>// 订单状态枚举
enum OrderStatus {
    PENDING_PAYMENT,    // 待付款
    PAID,               // 已付款
    SHIPPED,            // 待收货
    COMPLETED,          // 已完成
    CANCELLED           // 已取消
}

// 状态转换规则
class OrderStateMachine {
    // 允许的状态转换
    private static final Map&lt;OrderStatus, List&lt;OrderStatus&gt;&gt; transitions = Map.of(
        PENDING_PAYMENT, List.of(PAID, CANCELLED),
        PAID, List.of(SHIPPED, CANCELLED),
        SHIPPED, List.of(COMPLETED),
        COMPLETED, List.of(),  // 终态，不可转换
        CANCELLED, List.of()   // 终态，不可转换
    );
    
    public void transition(Order order, OrderStatus newStatus) {
        OrderStatus current = order.getStatus();
        
        // 校验转换是否合法
        if (!transitions.get(current).contains(newStatus)) {
            throw new IllegalStateException(
                String.format("不能从 %s 转换到 %s", current, newStatus)
            );
        }
        
        // 执行状态转换
        order.setStatus(newStatus);
        order.setUpdateTime(LocalDateTime.now());
        
        // 触发对应业务逻辑
        onStatusChange(order, newStatus);
    }
}</code></pre>
                </div>
                
                <h4>方法3：异常场景梳理法</h4>
                <p>好的产品设计要考虑所有可能的异常情况，提前定义处理策略。</p>
                
                <div class="example-box">
                    <h4>💡 案例：用户注册功能的异常场景</h4>
                    <table class="pm-table">
                        <tr>
                            <th>场景类型</th>
                            <th>具体场景</th>
                            <th>产品策略</th>
                        </tr>
                        <tr>
                            <td rowspan="4">输入异常</td>
                            <td>手机号格式错误</td>
                            <td>前端实时校验，提示"请输入正确的手机号"</td>
                        </tr>
                        <tr>
                            <td>手机号已注册</td>
                            <td>提示"该手机号已注册，直接登录？"</td>
                        </tr>
                        <tr>
                            <td>验证码错误</td>
                            <td>提示"验证码错误，请重新输入"</td>
                        </tr>
                        <tr>
                            <td>验证码过期</td>
                            <td>提示"验证码已过期，请重新获取"</td>
                        </tr>
                        <tr>
                            <td rowspan="3">系统异常</td>
                            <td>短信发送失败</td>
                            <td>提示"短信发送失败，请稍后重试或联系客服"</td>
                        </tr>
                        <tr>
                            <td>数据库写入失败</td>
                            <td>提示"注册失败，请稍后重试"，记录错误日志</td>
                        </tr>
                        <tr>
                            <td>网络超时</td>
                            <td>自动重试3次，仍失败则提示用户手动重试</td>
                        </tr>
                        <tr>
                            <td rowspan="2">安全异常</td>
                            <td>同一IP频繁注册</td>
                            <td>触发风控，要求图形验证码或限制注册</td>
                        </tr>
                        <tr>
                            <td>疑似机器人注册</td>
                            <td>增加滑块验证或人工审核</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎯 产品经理实战技巧</h3>
                
                <div class="info-box">
                    <h4>✅ 技术思维培养清单</h4>
                    <ul class="checklist">
                        <li>☐ 画流程图：用泳道图画出用户、前端、服务端、数据库的交互</li>
                        <li>☐ 写伪代码：用自然语言描述功能实现步骤</li>
                        <li>☐ 列异常表：列出所有可能的异常情况，定义处理策略</li>
                        <li>☐ 问开发：评审时问"这个需求技术上怎么实现？""有什么难点？"</li>
                        <li>☐ 看日志：学会看简单的错误日志，理解问题原因</li>
                        <li>☐ 学基础：了解基本的数据库、API、网络知识</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>💡 评审需求时的技术思考问题</h4>
                    <ol>
                        <li><strong>数据存储</strong>：这个功能需要存哪些数据？存在哪里？数据量有多大？</li>
                        <li><strong>接口设计</strong>：需要哪些接口？接口的输入输出是什么？</li>
                        <li><strong>性能影响</strong>：这个功能会影响页面加载速度吗？并发量有多大？</li>
                        <li><strong>兼容性</strong>：老版本APP能使用这个功能吗？需要做兼容处理吗？</li>
                        <li><strong>安全性</strong>：这个功能有安全风险吗？需要权限控制吗？</li>
                        <li><strong>回滚方案</strong>：如果上线后有问题，能快速回滚吗？</li>
                    </ol>
                </div>
            `
        },
        {
            id: 'arch-4',
            categoryId: 'architecture',
            title: '技术边界与可行性评估',
            difficulty: 'intermediate',
            summary: '了解当前技术的能力边界，学会评估需求的可行性，避免提出不切实际的技术方案。',
            content: `
                <h3>📚 什么是技术边界？</h3>
                <p>技术边界是指<strong>当前技术条件下能够实现的功能范围</strong>。作为产品经理，了解技术边界可以帮助你：</p>
                <ul>
                    <li>避免提出"无法实现"的需求，减少无效沟通</li>
                    <li>合理评估开发周期和成本</li>
                    <li>在技术限制内寻找最优产品方案</li>
                    <li>识别技术风险，提前制定应对策略</li>
                </ul>
                
                <h3>✅ 当前技术可轻松实现的功能</h3>
                
                <div class="capability-grid">
                    <div class="capability-card">
                        <h4>📍 位置服务</h4>
                        <ul>
                            <li>GPS定位（精度5-10米）</li>
                            <li>基站定位（精度100-500米）</li>
                            <li>WiFi定位（室内定位）</li>
                            <li>地理围栏（进入区域触发）</li>
                            <li>路径规划与导航</li>
                        </ul>
                        <p class="product-case"><strong>产品案例</strong>：美团外卖配送、滴滴打车、高德地图</p>
                    </div>
                    
                    <div class="capability-card">
                        <h4>📷 图像识别</h4>
                        <ul>
                            <li>二维码/条形码扫描</li>
                            <li>人脸识别（1:1比对）</li>
                            <li>OCR文字识别（印刷体）</li>
                            <li>物体识别（通用物品）</li>
                            <li>图像质量检测（模糊、亮度）</li>
                        </ul>
                        <p class="product-case"><strong>产品案例</strong>：支付宝扫码、美颜相机、扫描全能王</p>
                    </div>
                    
                    <div class="capability-card">
                        <h4>🎤 语音技术</h4>
                        <ul>
                            <li>语音识别（普通话准确率>95%）</li>
                            <li>语音合成（TTS，自然度较高）</li>
                            <li>语音唤醒（"小爱同学""Siri"）</li>
                            <li>声纹识别（身份验证）</li>
                        </ul>
                        <p class="product-case"><strong>产品案例</strong>：讯飞输入法、天猫精灵、微信语音转文字</p>
                    </div>
                    
                    <div class="capability-card">
                        <h4>📡 实时通信</h4>
                        <ul>
                            <li>即时消息（IM，延迟<100ms）</li>
                            <li>音视频通话（1对1、多人）</li>
                            <li>实时推送（Push通知）</li>
                            <li>直播推流与播放</li>
                            <li>屏幕共享</li>
                        </ul>
                        <p class="product-case"><strong>产品案例</strong>：微信、钉钉、抖音直播、腾讯会议</p>
                    </div>
                </div>
                
                <h3>⚠️ 当前技术难以实现或成本极高的功能</h3>
                
                <div class="limitation-section">
                    <div class="limitation-item">
                        <h4>❌ 读心术（脑机接口）</h4>
                        <p><strong>需求描述</strong>：APP能知道用户心里在想什么，自动推荐内容</p>
                        <p><strong>技术现状</strong>：消费级脑机接口仅能识别简单的脑电波模式（专注/放松），无法读取具体想法</p>
                        <p><strong>替代方案</strong>：通过用户行为数据（浏览、点击、停留时长）推测兴趣，用推荐算法实现</p>
                    </div>
                    
                    <div class="limitation-item">
                        <h4>❌ 离线实时同步</h4>
                        <p><strong>需求描述</strong>：手机不联网也能实时看到其他用户的操作</p>
                        <p><strong>技术现状</strong>：数据同步必须通过网络传输，离线状态下无法实现实时通信</p>
                        <p><strong>替代方案</strong>：离线时本地缓存操作，联网后批量同步；或使用蓝牙/WiFi直连（距离限制10米内）</p>
                    </div>
                    
                    <div class="limitation-item">
                        <h4>❌ 亿级并发实时处理</h4>
                        <p><strong>需求描述</strong>：1秒内处理10亿用户同时提交的数据</p>
                        <p><strong>技术现状</strong>：需要巨大的服务器集群和极高的带宽成本，目前只有Google、阿里等巨头在特定场景下能达到</p>
                        <p><strong>替代方案</strong>：削峰填谷（消息队列）、异步处理、分级策略（VIP用户优先）</p>
                    </div>
                    
                    <div class="limitation-item">
                        <h4>❌ 100%准确的人脸识别</h4>
                        <p><strong>需求描述</strong>：人脸识别准确率100%，零误识别</p>
                        <p><strong>技术现状</strong>：当前最好的人脸识别算法准确率约99.5%，存在双胞胎误判、照片攻击等问题</p>
                        <p><strong>替代方案</strong>：多因素认证（人脸+活体检测+短信验证），设置合理的容错机制</p>
                    </div>
                </div>
                
                <h3>💰 成本敏感的技术方案</h3>
                
                <p>有些功能技术上可以实现，但成本极高，需要权衡投入产出比。</p>
                
                <table class="pm-table">
                    <tr>
                        <th>功能</th>
                        <th>低成本方案</th>
                        <th>高成本方案</th>
                        <th>成本差异</th>
                    </tr>
                    <tr>
                        <td>视频存储</td>
                        <td>压缩率80%，标清存储</td>
                        <td>原画存储，多副本备份</td>
                        <td>10-50倍</td>
                    </tr>
                    <tr>
                        <td>实时翻译</td>
                        <td>文本翻译，通用模型</td>
                        <td>同声传译，领域定制模型</td>
                        <td>20-100倍</td>
                    </tr>
                    <tr>
                        <td>图像搜索</td>
                        <td>标签搜索，简单匹配</td>
                        <td>以图搜图，AI特征向量</td>
                        <td>50-200倍</td>
                    </tr>
                    <tr>
                        <td>推荐系统</td>
                        <td>规则推荐，热门排序</td>
                        <td>深度学习，实时个性化</td>
                        <td>100-500倍</td>
                    </tr>
                </table>
                
                <h3>🎯 可行性评估框架</h3>
                
                <div class="evaluation-framework">
                    <h4>技术可行性评估四维度</h4>
                    <div class="dimension-cards">
                        <div class="dimension-card">
                            <h5>1. 技术成熟度</h5>
                            <ul>
                                <li>🔵 成熟：有开源方案，文档完善，社区活跃</li>
                                <li>🟡 可用：有商业方案，但需定制开发</li>
                                <li>🔴 前沿：学术界刚提出，无成熟方案</li>
                            </ul>
                        </div>
                        <div class="dimension-card">
                            <h5>2. 开发成本</h5>
                            <ul>
                                <li>🔵 低：1-2周，1-2人</li>
                                <li>🟡 中：1-2月，3-5人</li>
                                <li>🔴 高：3月+，5人+团队</li>
                            </ul>
                        </div>
                        <div class="dimension-card">
                            <h5>3. 运维成本</h5>
                            <ul>
                                <li>🔵 低：云服务商托管，自动扩容</li>
                                <li>🟡 中：需专人维护，监控告警</li>
                                <li>🔴 高：需专业运维团队，7x24值班</li>
                            </ul>
                        </div>
                        <div class="dimension-card">
                            <h5>4. 风险评估</h5>
                            <ul>
                                <li>🔵 低：技术方案确定，风险可控</li>
                                <li>🟡 中：有技术难点，需技术预研</li>
                                <li>🔴 高：技术不确定，可能延期或失败</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="example-box">
                    <h4>💡 案例：评估"AI智能客服"功能</h4>
                    <table class="pm-table">
                        <tr>
                            <th>评估维度</th>
                            <th>评估结果</th>
                            <th>说明</th>
                        </tr>
                        <tr>
                            <td>技术成熟度</td>
                            <td>🟡 可用</td>
                            <td>有成熟的NLP方案（百度UNIT、阿里小蜜），但需针对业务训练</td>
                        </tr>
                        <tr>
                            <td>开发成本</td>
                            <td>🟡 中</td>
                            <td>接入SDK 1周，训练模型+优化 1-2月</td>
                        </tr>
                        <tr>
                            <td>运维成本</td>
                            <td>🔵 低</td>
                            <td>云服务按调用量付费，无需维护服务器</td>
                        </tr>
                        <tr>
                            <td>风险评估</td>
                            <td>🟡 中</td>
                            <td>识别准确率依赖训练数据，需持续优化</td>
                        </tr>
                        <tr>
                            <td><strong>综合结论</strong></td>
                            <td colspan="2"><strong>可行，建议MVP验证</strong>：先接入通用模型，覆盖80%常见问题，再逐步优化</td>
                        </tr>
                    </table>
                </div>
                
                <div class="info-box">
                    <h4>✅ 技术可行性评估清单</h4>
                    <ul class="checklist">
                        <li>☐ 这个功能在竞品中有实现吗？怎么实现的？</li>
                        <li>☐ 需要用到什么技术？技术成熟度如何？</li>
                        <li>☐ 开发周期预估？需要多少人？</li>
                        <li>☐ 服务器成本预估？流量费用多少？</li>
                        <li>☐ 是否有法律/合规风险？（如隐私、版权）</li>
                        <li>☐ 如果技术方案失败，有Plan B吗？</li>
                    </ul>
                </div>
            `
        }
    ]
};

// 导出数据（如果在Node环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = knowledgeData;
}
