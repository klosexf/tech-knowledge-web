/**
 * @fileoverview 互联网基础架构模块
 * @description 包含 4 个知识点：arch-1, arch-2, arch-3, arch-4
 * @module data/architecture
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 导入模块数据
 * import { knowledge } from './architecture.js';
 * 
 * // 获取所有知识点
 * console.log(knowledge);
 * 
 * // 根据 categoryId 过滤
 * const items = knowledge.filter(item => item.categoryId === 'architecture');
 */

/**
 * 互联网基础架构模块知识点数组
 * @type {Array<Object>}
 * @property {string} id - 知识点唯一标识符
 * @property {string} categoryId - 所属分类ID
 * @property {string} title - 知识点标题
 * @property {string} difficulty - 难度级别 (beginner/intermediate/advanced)
 * @property {string} summary - 知识点摘要
 * @property {Object} [technicalContent] - 技术内容详情（可选）
 * @property {string} content - 知识点正文内容（HTML格式）
 */
var knowledge = [
{
            id: 'arch-1',
            categoryId: 'architecture',
            title: '一个APP是怎么跑起来的？',
            difficulty: 'beginner',
            summary: '用最通俗的方式理解APP的四个组成部分，像点外卖一样简单。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>现代APP采用<strong>客户端-服务器架构（Client-Server Architecture）</strong>，这是一种分布式计算模型。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node client">
                                <div class="node-icon">📱</div>
                                <div class="node-title">客户端（前端）</div>
                                <div class="node-desc">运行在用户设备上<br/>负责UI渲染和用户交互</div>
                            </div>
                            <div class="diagram-arrow">↔️ HTTP/HTTPS</div>
                            <div class="diagram-node server">
                                <div class="node-icon">🖥️</div>
                                <div class="node-title">服务器（后端）</div>
                                <div class="node-desc">运行在云端<br/>处理业务逻辑和数据</div>
                            </div>
                            <div class="diagram-arrow">↔️ SQL/NoSQL</div>
                            <div class="diagram-node database">
                                <div class="node-icon">🗄️</div>
                                <div class="node-title">数据库</div>
                                <div class="node-desc">持久化存储<br/>用户数据和业务数据</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>核心通信协议</h5>
                    <table class="concept-table">
                        <tr>
                            <th>协议</th>
                            <th>作用</th>
                            <th>特点</th>
                        </tr>
                        <tr>
                            <td>HTTP/HTTPS</td>
                            <td>客户端与服务器通信</td>
                            <td>无状态、请求-响应模式</td>
                        </tr>
                        <tr>
                            <td>REST API</td>
                            <td>接口设计规范</td>
                            <td>资源导向、统一接口</td>
                        </tr>
                        <tr>
                            <td>WebSocket</td>
                            <td>实时双向通信</td>
                            <td>长连接、低延迟</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>前端（客户端）</h5>
                            <ul>
                                <li><strong>UI渲染</strong>：将数据可视化展示给用户</li>
                                <li><strong>用户交互</strong>：响应用户的点击、滑动等操作</li>
                                <li><strong>数据缓存</strong>：本地存储提升体验</li>
                                <li><strong>请求发起</strong>：向服务器请求数据</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>后端（服务器）</h5>
                            <ul>
                                <li><strong>业务逻辑</strong>：处理核心业务规则</li>
                                <li><strong>数据验证</strong>：确保数据合法性和安全性</li>
                                <li><strong>权限控制</strong>：验证用户身份和权限</li>
                                <li><strong>数据聚合</strong>：整合多数据源返回</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>数据库</h5>
                            <ul>
                                <li><strong>持久化存储</strong>：数据永久保存</li>
                                <li><strong>高效查询</strong>：快速检索数据</li>
                                <li><strong>事务处理</strong>：保证数据一致性</li>
                                <li><strong>数据备份</strong>：防止数据丢失</li>
                            </ul>
                        </div>
                    </div>
                `,
                businessScenario: `
                    <h4>💼 业务场景</h4>
                    
                    <div class="scenario-timeline">
                        <div class="scenario-item">
                            <div class="scenario-number">1</div>
                            <div class="scenario-content">
                                <h5>用户登录场景</h5>
                                <p><strong>前端</strong>：收集用户输入 → 发起登录请求 → 保存Token</p>
                                <p><strong>后端</strong>：验证账号密码 → 生成Token → 返回用户信息</p>
                                <p><strong>数据库</strong>：查询用户记录 → 验证密码哈希</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">2</div>
                            <div class="scenario-content">
                                <h5>商品下单场景</h5>
                                <p><strong>前端</strong>：展示商品 → 收集订单信息 → 发起下单请求</p>
                                <p><strong>后端</strong>：验证库存 → 创建订单 → 扣减库存 → 返回结果</p>
                                <p><strong>数据库</strong>：事务处理保证库存和订单一致性</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">3</div>
                            <div class="scenario-content">
                                <h5>实时消息场景</h5>
                                <p><strong>前端</strong>：建立WebSocket连接 → 发送/接收消息</p>
                                <p><strong>后端</strong>：维护连接 → 消息路由 → 推送给接收方</p>
                                <p><strong>数据库</strong>：存储消息记录 → 更新未读数</p>
                            </div>
                        </div>
                    </div>
                `,
                pmDevScenario: `
                    <h4>🗣️ 产品经理与开发沟通场景</h4>
                    
                    <div class="conversation-box">
                        <div class="conversation-item bad">
                            <div class="conv-header">
                                <span class="conv-icon">❌</span>
                                <span class="conv-title">错误沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"这个功能很简单，就是加个按钮，点一下就行"</p>
                                <p><strong>开发内心：</strong>这需要前端改UI、后端加接口、数据库加字段、还要考虑并发和安全性...</p>
                                <p><strong>结果：</strong>开发时间预估严重不足，项目延期</p>
                            </div>
                        </div>
                        
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"用户点击这个按钮后，需要调用哪个接口？前端还是后端处理？需要存什么数据？"</p>
                                <p><strong>开发：</strong>"这个需要后端新加一个接口，前端调用。数据库需要加一个字段记录操作日志。大概需要2天时间。"</p>
                                <p><strong>结果：</strong>需求清晰，时间预估准确，项目按时交付</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tips-box">
                        <h5>💡 产品经理必问清单</h5>
                        <ul>
                            <li>这个功能前端做还是后端做？</li>
                            <li>需要新增接口吗？还是复用现有接口？</li>
                            <li>需要存哪些数据？数据库要改吗？</li>
                            <li>有没有性能风险？高并发怎么处理？</li>
                            <li>开发周期大概多久？</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <h3>🍔 先打个比方：点外卖</h3>
                <p>你每天都在用APP，但你知道它们是怎么工作的吗？别着急，我们先打个比方。</p>
                
                <p>想象一下<strong>点外卖</strong>的过程：</p>
                <ol>
                    <li>你打开美团APP，看到各种餐厅（这是<strong>前端</strong>）</li>
                    <li>你选好想吃的，点击下单（这是<strong>网络</strong>传消息）</li>
                    <li>餐厅收到订单，开始做菜（这是<strong>服务端</strong>处理）</li>
                    <li>餐厅从冰箱里拿食材（这是从<strong>数据库</strong>取数据）</li>
                </ol>
                
                <div class="example-box">
                    <h4>💡 对照表：APP = 外卖系统</h4>
                    <table class="concept-table">
                        <tr>
                            <th>APP里的叫法</th>
                            <th>外卖里的角色</th>
                            <th>是干嘛的</th>
                        </tr>
                        <tr>
                            <td>前端（客户端）</td>
                            <td>美团APP界面</td>
                            <td>给你看的、让你点的</td>
                        </tr>
                        <tr>
                            <td>网络</td>
                            <td>外卖骑手</td>
                            <td>跑腿传话的</td>
                        </tr>
                        <tr>
                            <td>服务端（后端）</td>
                            <td>餐厅后厨</td>
                            <td>真正干活的</td>
                        </tr>
                        <tr>
                            <td>数据库</td>
                            <td>冰箱/仓库</td>
                            <td>存东西的地方</td>
                        </tr>
                    </table>
                </div>
                
                <h3>📱 第一部分：前端（你能看到的）</h3>
                <p><strong>前端</strong>就是你能看到、能摸到的东西：</p>
                <ul>
                    <li>手机上的APP图标</li>
                    <li>APP里的按钮、图片、文字</li>
                    <li>你点击屏幕时的反应</li>
                </ul>
                
                <div class="info-box">
                    <h4>🎯 产品经理要关注什么？</h4>
                    <ul>
                        <li>按钮放哪里用户最容易点到？</li>
                        <li>页面加载慢不慢？（超过3秒用户就会烦躁）</li>
                        <li>图片显示正不正常？</li>
                        <li>文字能不能看清楚？</li>
                    </ul>
                </div>
                
                <h3>📡 第二部分：网络（传话的）</h3>
                <p>你在APP上点了一下"购买"，这个信息怎么传到商家那里？靠的就是<strong>网络</strong>。</p>
                
                <p>就像你打电话：</p>
                <ul>
                    <li>你说话（点击按钮）</li>
                    <li>电话线传输（网络传输）</li>
                    <li>对方听到（服务器收到）</li>
                </ul>
                
                <div class="example-box">
                    <h4>⚠️ 常见问题：网络不好会怎样？</h4>
                    <table class="concept-table">
                        <tr>
                            <th>现象</th>
                            <th>原因</th>
                            <th>产品经理怎么做</th>
                        </tr>
                        <tr>
                            <td>页面一直在转圈</td>
                            <td>网络慢，数据传不过来</td>
                            <td>设计加载动画，告诉用户"正在加载"</td>
                        </tr>
                        <tr>
                            <td>提示"网络错误"</td>
                            <td>没网了</td>
                            <td>设计友好的错误页面，提供重试按钮</td>
                        </tr>
                        <tr>
                            <td>图片显示不出来</td>
                            <td>图片太大，网络太慢</td>
                            <td>要求技术压缩图片，或者先显示模糊图</td>
                        </tr>
                    </table>
                </div>
                
                <h3>⚙️ 第三部分：服务端（干活的）</h3>
                <p><strong>服务端</strong>就是真正干活的地方。你在前端看到的数据，都是服务端算好、整理好再发过来的。</p>
                
                <p>比如你在淘宝搜索"手机"：</p>
                <ol>
                    <li>你输入"手机"，点击搜索</li>
                    <li>服务端收到请求，开始干活：
                        <ul>
                            <li>去数据库查所有带"手机"的商品</li>
                            <li>按销量排序</li>
                            <li>过滤掉没货的商品</li>
                            <li>把结果整理好</li>
                        </ul>
                    </li>
                    <li>把整理好的结果发回给你的手机</li>
                    <li>你的手机显示出来</li>
                </ol>
                
                <div class="info-box">
                    <h4>💡 服务端崩了会怎样？</h4>
                    <p>双11的时候淘宝有时候打不开，就是因为太多人同时访问，服务端忙不过来了。</p>
                    <p><strong>产品经理要考虑：</strong></p>
                    <ul>
                        <li>活动期间人很多，要提前告诉技术团队加服务器</li>
                        <li>设计排队页面，告诉用户"前方拥挤，请稍候"</li>
                        <li>重要的功能要设计备用方案</li>
                    </ul>
                </div>
                
                <h3>🗄️ 第四部分：数据库（存东西的）</h3>
                <p><strong>数据库</strong>就是存东西的地方。你的账号信息、订单记录、收藏的商品，都存在这里。</p>
                
                <p>就像你家的<strong>衣柜</strong>：</p>
                <ul>
                    <li>衣服分类放好（数据分类存储）</li>
                    <li>要找某件衣服，去对应的位置拿（查询数据）</li>
                    <li>买了新衣服，放进衣柜（添加数据）</li>
                    <li>旧衣服扔了，从衣柜拿出来（删除数据）</li>
                </ul>
                
                <div class="example-box">
                    <h4>📊 实际案例：用户注册</h4>
                    <p>你在一个APP上注册账号，数据是怎么存的？</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">数据库里的样子</span></div>
                        <pre><code>用户表（就像一张Excel表格）

| 用户ID | 手机号      | 昵称   | 注册时间   | 密码（加密）    |
|--------|-------------|--------|------------|-----------------|
| 1      | 13800138000 | 小明   | 2024-01-01 | a1b2c3d4e5f6... |
| 2      | 13900139000 | 小红   | 2024-01-02 | f6e5d4c3b2a1... |

当你登录时：
1. 你输入手机号和密码
2. 系统去表里查有没有这个手机号
3. 有的话，比对密码对不对
4. 对了就让你登录，不对就提示密码错误</code></pre>
                    </div>
                </div>
                
                <h3>🎓 小白产品经理必备常识</h3>
                <div class="info-box">
                    <h4>和程序员沟通时，记住这几句话：</h4>
                    <ul>
                        <li>"这个功能前端做还是后端做？"（确定是谁的活）</li>
                        <li>"这个数据存在哪里？"（确定数据怎么设计）</li>
                        <li>"网络不好的时候怎么处理？"（确定异常流程）</li>
                        <li>"这个要做多久？"（确定开发时间）</li>
                    </ul>
                </div>
                
                <h3>❓ 常见问题</h3>
                <div class="example-box">
                    <h4>Q1：为什么有时候APP很卡？</h4>
                    <p><strong>可能的原因：</strong></p>
                    <ul>
                        <li>你的网络不好（WiFi信号差、4G信号弱）</li>
                        <li>APP的服务器太忙（太多人同时用）</li>
                        <li>你的手机太老（带不动新APP）</li>
                        <li>APP本身写得不好（代码有问题）</li>
                    </ul>
                    <p><strong>产品经理能做什么：</strong>设计加载状态、优化页面结构、要求技术做性能测试</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：为什么有的功能安卓有，苹果没有？</h4>
                    <p>因为安卓和苹果是两个不同的系统，就像中文和英文，虽然都能表达意思，但写法不一样。</p>
                    <p>有些功能在一个系统上好做，在另一个系统上难做，或者根本做不了。</p>
                    <p><strong>产品经理能做什么：</strong>设计功能时要问清楚"安卓和苹果都能做吗？"</p>
                </div>
                
                <div class="example-box">
                    <h4>Q3：数据存在哪里安全吗？</h4>
                    <p>数据存在公司的服务器上，正规公司都会加密存储，不会明文存你的密码。</p>
                    <p>但是产品经理要注意：</p>
                    <ul>
                        <li>敏感信息（身份证号、银行卡号）要加密</li>
                        <li>不要随便把用户数据给第三方</li>
                        <li>要符合法律法规（比如 GDPR、个人信息保护法）</li>
                    </ul>
                </div>
                
                <h3>💻 实战代码示例</h3>
                <div class="code-example">
                    <div class="code-example-header">
                        <span class="code-example-title">模拟APP登录流程</span>
                        <span class="code-example-lang">JavaScript</span>
                    </div>
                    <div class="code-example-body">
                        <pre><code>// ==========================================
// APP登录流程模拟代码
// 功能：模拟用户登录的完整流程
// ==========================================

// 第1步：用户在前端输入手机号和密码
// 就像你在APP上填写登录表单
const userInput = {
    phone: '13800138000',    // 用户输入的手机号
    password: '123456'       // 用户输入的密码
};

// 第2步：前端把数据打包，通过网络发给服务器
// 就像填好快递单，交给快递员
function sendLoginRequest(userData) {
    console.log('📤 前端：正在发送登录请求...');
    console.log('📦 发送的数据：', userData);
    
    // 模拟网络传输延迟
    // 现实中，数据要通过互联网传输到服务器
    return new Promise((resolve) => {
        setTimeout(() => {
            // 网络传输完成，服务器收到请求
            resolve(userData);
        }, 500);  // 假设网络延迟500毫秒
    });
}

// 第3步：服务器收到请求，开始处理
// 就像快递到了分拣中心，开始分拣
async function serverHandleLogin(requestData) {
    console.log('\\n📥 服务器：收到登录请求');
    console.log('🔍 服务器：开始验证用户信息...');
    
    // 第4步：服务器去数据库查询用户信息
    // 就像去仓库找对应的包裹
    const userInfo = await queryDatabase(requestData.phone);
    
    // 第5步：验证密码是否正确
    if (userInfo && userInfo.password === requestData.password) {
        console.log('✅ 服务器：密码验证通过！');
        
        // 生成登录凭证（Token）
        // 就像给你发一张通行证
        const token = generateToken(userInfo.id);
        
        return {
            success: true,
            message: '登录成功',
            data: {
                userId: userInfo.id,
                nickname: userInfo.nickname,
                token: token
            }
        };
    } else {
        console.log('❌ 服务器：密码错误！');
        return {
            success: false,
            message: '手机号或密码错误',
            data: null
        };
    }
}

// 模拟数据库查询
// 就像去仓库的货架上找东西
async function queryDatabase(phone) {
    console.log('\\n🗄️ 数据库：正在查询用户信息...');
    
    // 模拟数据库中的用户表
    // 就像一张Excel表格
    const users = [
        { id: 1, phone: '13800138000', password: '123456', nickname: '张三' },
        { id: 2, phone: '13900139000', password: 'abcdef', nickname: '李四' }
    ];
    
    // 查找匹配的用户
    const user = users.find(u => u.phone === phone);
    
    if (user) {
        console.log('✅ 数据库：找到用户', user.nickname);
    } else {
        console.log('❌ 数据库：用户不存在');
    }
    
    return user;
}

// 生成登录凭证
// 就像给你发一张临时通行证
function generateToken(userId) {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2);
    const token = \`\${userId}_\${timestamp}_\${randomStr}\`;
    console.log('\\n🎫 服务器：生成登录凭证', token);
    return token;
}

// 第6步：服务器把结果返回给前端
// 就像快递送到你手上
function sendResponseToFrontend(result) {
    console.log('\\n📤 服务器：返回结果给前端');
    console.log('📦 返回数据：', JSON.stringify(result, null, 2));
    return result;
}

// 第7步：前端显示结果给用户
// 就像你拆开快递看到里面的东西
function showResultToUser(result) {
    console.log('\\n📱 前端：显示结果给用户');
    if (result.success) {
        console.log('🎉 登录成功！欢迎回来，' + result.data.nickname);
        console.log('📝 您的登录凭证已保存，下次自动登录');
    } else {
        console.log('😢 登录失败：' + result.message);
        console.log('💡 请检查手机号和密码是否正确');
    }
}

// ==========================================
// 执行完整的登录流程
// ==========================================
async function runLoginProcess() {
    console.log('========== APP登录流程演示 ==========\\n');
    
    // 执行每一步
    const request = await sendLoginRequest(userInput);
    const result = await serverHandleLogin(request);
    const response = sendResponseToFrontend(result);
    showResultToUser(response);
    
    console.log('\\n========== 流程结束 ==========');
}

// 运行演示
runLoginProcess();</code></pre>
                    </div>
                </div>
                
                <div class="try-it-section">
                    <div class="try-it-header">
                        <span class="try-it-icon">🎯</span>
                        <span class="try-it-title">动手试试看</span>
                    </div>
                    <div class="try-it-description">
                        修改上面代码中的手机号或密码，看看登录结果会有什么变化？试着用错误的密码登录，观察整个流程是如何处理的。
                    </div>
                    <button class="try-it-btn" onclick="openCodeEditor('arch-1')">
                        <span>▶️</span> 打开代码编辑器
                    </button>
                </div>
                
                <div class="practice-section">
                    <div class="practice-header">
                        <span class="practice-icon">📝</span>
                        <span class="practice-title">练习任务：模拟用户注册流程</span>
                    </div>
                    <div class="practice-description">
                        根据上面学到的登录流程，尝试设计一个用户注册的流程。注册需要验证手机号格式、检查用户是否已存在、保存用户信息到数据库。
                    </div>
                    <div class="practice-hint">
                        💡 提示：注册流程 = 验证手机号格式 → 检查手机号是否已注册 → 密码加密 → 保存到数据库 → 返回结果
                    </div>
                    <div class="practice-actions">
                        <button class="practice-btn primary" onclick="startPractice('arch-1')">开始练习</button>
                        <button class="practice-btn secondary" onclick="viewSolution('arch-1')">查看参考答案</button>
                    </div>
                </div>
            `
        },
{
            id: 'arch-2',
            categoryId: 'architecture',
            title: '点击一个按钮后，发生了什么？',
            difficulty: 'beginner',
            summary: '用发快递的例子，彻底理解APP点击后的完整流程。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>用户点击按钮后的完整流程涉及<strong>HTTP请求-响应模型</strong>，这是Web应用的核心通信机制。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow vertical">
                            <div class="diagram-step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h5>用户交互层</h5>
                                    <p>用户点击按钮 → 触发事件监听器</p>
                                    <p><strong>技术术语：</strong>Event Listener / DOM Event</p>
                                </div>
                            </div>
                            <div class="diagram-arrow down">↓</div>
                            <div class="diagram-step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h5>前端处理层</h5>
                                    <p>收集数据 → 构建请求 → 发起HTTP请求</p>
                                    <p><strong>技术术语：</strong>HTTP Request / AJAX / Fetch API</p>
                                </div>
                            </div>
                            <div class="diagram-arrow down">↓</div>
                            <div class="diagram-step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h5>网络传输层</h5>
                                    <p>DNS解析 → TCP连接 → 数据传输</p>
                                    <p><strong>技术术语：</strong>DNS / TCP/IP / SSL/TLS</p>
                                </div>
                            </div>
                            <div class="diagram-arrow down">↓</div>
                            <div class="diagram-step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h5>服务端处理层</h5>
                                    <p>接收请求 → 路由分发 → 业务处理</p>
                                    <p><strong>技术术语：</strong>Web Server / Router / Controller</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>关键技术指标</h5>
                    <table class="concept-table">
                        <tr>
                            <th>指标</th>
                            <th>说明</th>
                            <th>参考值</th>
                        </tr>
                        <tr>
                            <td>RTT（往返时间）</td>
                            <td>请求发出到收到响应的时间</td>
                            <td>< 200ms 为优秀</td>
                        </tr>
                        <tr>
                            <td>TTFB（首字节时间）</td>
                            <td>从请求到收到第一个字节的时间</td>
                            <td>< 100ms 为优秀</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>事件监听器</h5>
                            <ul>
                                <li><strong>作用</strong>：捕获用户的交互行为</li>
                                <li><strong>实现</strong>：addEventListener / onClick</li>
                                <li><strong>注意</strong>：防抖和节流优化</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>HTTP客户端</h5>
                            <ul>
                                <li><strong>作用</strong>：构建和发送网络请求</li>
                                <li><strong>实现</strong>：Fetch API / Axios</li>
                                <li><strong>注意</strong>：超时处理、错误重试</li>
                            </ul>
                        </div>
                    </div>
                `,
                businessScenario: `
                    <h4>💼 业务场景</h4>
                    <div class="scenario-timeline">
                        <div class="scenario-item">
                            <div class="scenario-number">1</div>
                            <div class="scenario-content">
                                <h5>电商下单场景</h5>
                                <p><strong>前端</strong>：收集商品ID、数量、地址 → 构建POST请求</p>
                                <p><strong>网络</strong>：HTTPS加密传输 → CDN加速</p>
                                <p><strong>后端</strong>：验证库存 → 创建订单 → 返回订单号</p>
                            </div>
                        </div>
                    </div>
                `,
                pmDevScenario: `
                    <h4>🗣️ 产品经理与开发沟通场景</h4>
                    <div class="conversation-box">
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"点击按钮后，网络超时怎么处理？用户重复点击怎么处理？"</p>
                                <p><strong>开发：</strong>"我会加防抖处理防止重复点击，超时3秒后提示用户重试。"</p>
                            </div>
                        </div>
                    </div>
                `
            },
            content: `
                <h3>📦 打个比方：发快递</h3>
                <p>你在APP上点击一个按钮，就像发一个快递。让我们看看完整流程：</p>
                
                <div class="diagram-box">
                    <pre style="font-family: monospace; line-height: 2;">
你（寄件人）
   │
   │ 1. 填快递单（点击按钮）
   ▼
快递员取件（网络传输）
   │
   │ 2. 运输中（数据在路上）
   ▼
快递分拣中心（服务端处理）
   │
   │ 3. 分拣、打包（数据处理）
   ▼
收件人收到（结果显示）
                    </pre>
                </div>
                
                <h3>📝 第一步：填快递单（发起请求）</h3>
                <p>你在APP上点击"购买"按钮，就像填了一张快递单，上面要写清楚：</p>
                <ul>
                    <li><strong>收件人地址</strong> → 要发给哪个服务器</li>
                    <li><strong>物品名称</strong> → 你要干什么（买商品？查信息？）</li>
                    <li><strong>物品详情</strong> → 具体信息（买什么商品？买几件？）</li>
                    <li><strong>寄件人信息</strong> → 你是谁（用户ID、登录凭证）</li>
                </ul>
                
                <div class="example-box">
                    <h4>💡 实际案例：下单买奶茶</h4>
                    <p>你在美团上点了一杯奶茶，点击"立即购买"，APP会打包这些信息：</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">发给服务器的信息</span></div>
                        <pre><code>{
    "用户ID": "12345",           ← 你是谁
    "商品ID": "奶茶001",         ← 买什么
    "数量": 1,                  ← 买几杯
    "甜度": "少糖",             ← 什么要求
    "地址": "北京市朝阳区xxx",   ← 送到哪
    "手机号": "13800138000"     ← 联系方式
}</code></pre>
                    </div>
                </div>
                
                <h3>🚚 第二步：快递员取件（网络传输）</h3>
                <p>信息打包好了，要通过<strong>网络</strong>送到服务器。这就像快递员上门取件。</p>
                
                <p>但是，路上可能会出问题：</p>
                <table class="concept-table">
                    <tr>
                        <th>快递问题</th>
                        <th>网络问题</th>
                        <th>用户看到的</th>
                    </tr>
                    <tr>
                        <td>快递员迷路了</td>
                        <td>网络延迟高</td>
                        <td>页面一直在转圈</td>
                    </tr>
                    <tr>
                        <td>快递车坏了</td>
                        <td>网络断开</td>
                        <td>提示"网络错误"</td>
                    </tr>
                    <tr>
                        <td>地址写错了</td>
                        <td>服务器地址错误</td>
                        <td>提示"页面找不到"</td>
                    </tr>
                </table>
                
                <div class="info-box">
                    <h4>⚠️ 产品经理要注意</h4>
                    <p>网络是不可靠的！设计功能时一定要考虑：</p>
                    <ul>
                        <li><strong>加载状态</strong>：让用户知道"正在处理，请稍候"</li>
                        <li><strong>超时处理</strong>：超过10秒还没响应，要提示用户</li>
                        <li><strong>重试机制</strong>：失败了给用户一个"重新加载"的按钮</li>
                        <li><strong>失败提示</strong>：不要用"系统错误"这种模糊的话，要说"网络不太好，请检查网络后重试"</li>
                    </ul>
                </div>
                
                <h3>🏭 第三步：快递分拣中心（服务端处理）</h3>
                <p>服务器收到你的请求后，开始处理。就像快递到了分拣中心，要：</p>
                <ol>
                    <li><strong>验货</strong> → 检查请求合不合法（你有没有登录？参数对不对？）</li>
                    <li><strong>分拣</strong> → 确定这个请求该谁处理（下单？查询？退款？）</li>
                    <li><strong>处理</strong> → 真正干活（扣款、减库存、生成订单）</li>
                    <li><strong>打包</strong> → 把处理结果整理好</li>
                </ol>
                
                <div class="example-box">
                    <h4>🔐 验货环节：检查你有没有权限</h4>
                    <p>服务器首先要确认你是谁，有没有资格做这件事：</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">服务器的检查流程</span></div>
                        <pre><code>收到买奶茶的请求后，服务器会检查：

1. 这个用户登录了吗？
   ├─ 没登录 → 返回"请先登录"
   └─ 登录了 → 继续下一步

2. 这个用户被封号了吗？
   ├─ 被封了 → 返回"账号异常"
   └─ 正常 → 继续下一步

3. 这个商品还有货吗？
   ├─ 没货了 → 返回"商品已售罄"
   └─ 有货 → 继续下一步

4. 这个用户的余额够吗？
   ├─ 不够 → 返回"余额不足"
   └─ 够 → 正式下单！</code></pre>
                    </div>
                </div>
                
                <h3>📬 第四步：收件人收到（返回结果）</h3>
                <p>服务器处理完了，要把结果返回给你。就像快递送到了，你要签收。</p>
                
                <p>结果有几种可能：</p>
                <table class="concept-table">
                    <tr>
                        <th>结果</th>
                        <th>含义</th>
                        <th>用户应该看到什么</th>
                    </tr>
                    <tr style="background: rgba(34, 197, 94, 0.1);">
                        <td>成功 ✅</td>
                        <td>一切都好</td>
                        <td>"下单成功！订单号：12345"</td>
                    </tr>
                    <tr style="background: rgba(249, 115, 22, 0.1);">
                        <td>参数错误 ⚠️</td>
                        <td>你填的信息不对</td>
                        <td>"请选择商品规格"</td>
                    </tr>
                    <tr style="background: rgba(249, 115, 22, 0.1);">
                        <td>没登录 ⚠️</td>
                        <td>需要登录</td>
                        <td>跳转登录页面</td>
                    </tr>
                    <tr style="background: rgba(239, 68, 68, 0.1);">
                        <td>服务器错误 ❌</td>
                        <td>服务器出bug了</td>
                        <td>"系统繁忙，请稍后重试"</td>
                    </tr>
                </table>
                
                <h3>🎓 小白产品经理工作指南</h3>
                <div class="info-box">
                    <h4>设计一个功能时，你要想清楚这几步：</h4>
                    <ol>
                        <li><strong>用户怎么触发？</strong>
                            <ul>
                                <li>点击按钮？</li>
                                <li>下拉刷新？</li>
                                <li>页面自动加载？</li>
                            </ul>
                        </li>
                        <li><strong>要传什么信息给服务器？</strong>
                            <ul>
                                <li>用户ID？</li>
                                <li>商品ID？</li>
                                <li>数量？</li>
                            </ul>
                        </li>
                        <li><strong>服务器要做什么处理？</strong>
                            <ul>
                                <li>查数据库？</li>
                                <li>计算价格？</li>
                                <li>生成订单？</li>
                            </ul>
                        </li>
                        <li><strong>返回什么结果？</strong>
                            <ul>
                                <li>成功显示什么？</li>
                                <li>失败显示什么？</li>
                                <li>加载中显示什么？</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 实际工作中的常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：用户说"我点了没反应"，怎么回事？</h4>
                    <p><strong>排查步骤：</strong></p>
                    <ol>
                        <li>问用户网络好不好（是不是WiFi断了）</li>
                        <li>看数据有没有发到服务器（查日志）</li>
                        <li>看服务器有没有处理（查服务端日志）</li>
                        <li>看结果有没有返回给客户端</li>
                    </ol>
                    <p><strong>产品经理要做什么：</strong>和技术一起定位问题，如果是网络问题，考虑优化提示文案；如果是bug，催技术修。</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：为什么有时候操作完要等很久？</h4>
                    <p>可能的原因：</p>
                    <ul>
                        <li>网络慢（用户那边信号不好）</li>
                        <li>服务器忙（太多人同时用）</li>
                        <li>处理复杂（要算很多东西）</li>
                    </ul>
                    <p><strong>优化方案：</strong></p>
                    <ul>
                        <li>设计骨架屏（先显示个大概轮廓）</li>
                        <li>分步加载（先显示文字，再加载图片）</li>
                        <li>缓存数据（把常用的先存本地）</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q3：怎么判断一个需求能不能做？</h4>
                    <p>问技术这几个问题：</p>
                    <ol>
                        <li>"这个功能技术上能实现吗？"</li>
                        <li>"大概要做多久？"</li>
                        <li>"有没有什么限制？"（比如苹果不让做）</li>
                        <li>"如果很多人同时用，会不会卡？"</li>
                    </ol>
                </div>
            `
        },
{
            id: 'arch-3',
            categoryId: 'architecture',
            title: '怎么和程序员好好说话？',
            difficulty: 'beginner',
            summary: '学会用程序员的思维方式沟通，避免撕逼，提高效率。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>软件开发遵循<strong>软件工程方法论</strong>，强调需求的完整性、可测试性和可实现性。</p>
                    
                    <h5>需求文档关键要素</h5>
                    <table class="concept-table">
                        <tr>
                            <th>要素</th>
                            <th>说明</th>
                            <th>示例</th>
                        </tr>
                        <tr>
                            <td>功能描述</td>
                            <td>这个功能是做什么的</td>
                            <td>用户可以使用积分兑换商品</td>
                        </tr>
                        <tr>
                            <td>前置条件</td>
                            <td>使用功能的前提</td>
                            <td>用户已登录，积分余额≥商品所需积分</td>
                        </tr>
                        <tr>
                            <td>输入参数</td>
                            <td>需要哪些数据</td>
                            <td>商品ID、兑换数量、收货地址</td>
                        </tr>
                        <tr>
                            <td>输出结果</td>
                            <td>返回什么数据</td>
                            <td>订单号、剩余积分、预计送达时间</td>
                        </tr>
                        <tr>
                            <td>异常处理</td>
                            <td>出错时怎么办</td>
                            <td>积分不足时提示"积分不足，当前积分XX"</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>产品经理</h5>
                            <ul>
                                <li><strong>定义需求</strong>：明确功能目标和用户价值</li>
                                <li><strong>梳理流程</strong>：完整的业务逻辑和分支</li>
                                <li><strong>验收标准</strong>：可测试的验收条件</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>开发工程师</h5>
                            <ul>
                                <li><strong>技术评估</strong>：可行性分析和工时评估</li>
                                <li><strong>方案设计</strong>：技术架构和接口设计</li>
                                <li><strong>风险识别</strong>：技术难点和依赖项</li>
                            </ul>
                        </div>
                    </div>
                `,
                businessScenario: `
                    <h4>💼 业务场景</h4>
                    <div class="scenario-timeline">
                        <div class="scenario-item">
                            <div class="scenario-number">1</div>
                            <div class="scenario-content">
                                <h5>需求评审会</h5>
                                <p><strong>产品经理</strong>：讲解需求背景、用户场景、功能目标</p>
                                <p><strong>开发</strong>：提问澄清、评估技术难度、识别风险点</p>
                            </div>
                        </div>
                    </div>
                `,
                pmDevScenario: `
                    <h4>🗣️ 产品经理与开发沟通场景</h4>
                    <div class="conversation-box">
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"用户点击这个按钮后，需要调用XX接口，参数是XX，成功后显示XX，失败时提示XX。"</p>
                                <p><strong>开发：</strong>"明白了，我需要新建一个接口，预计2天完成。"</p>
                            </div>
                        </div>
                    </div>
                `
            },
            content: `
                <h3>🗣️ 为什么和程序员沟通难？</h3>
                <p>很多产品经理和程序员沟通时，会出现这样的情况：</p>
                
                <div class="example-box" style="border-left-color: #dc2626;">
                    <h4 style="color: #dc2626;">❌ 错误示范</h4>
                    <p><strong>产品经理：</strong>"我要一个积分兑换功能，用户可以用积分换商品。"</p>
                    <p><strong>程序员：</strong>"好的。"（一周后...）</p>
                    <p><strong>程序员：</strong>"做好了。"</p>
                    <p><strong>产品经理：</strong>"怎么没有积分不足的提示？怎么没做兑换记录？怎么不能退货？"</p>
                    <p><strong>程序员：</strong>"你没说要这些啊！"</p>
                    <p><strong>结果：</strong>撕逼、延期、互相埋怨</p>
                </div>
                
                <div class="example-box" style="border-left-color: #16a34a;">
                    <h4 style="color: #16a34a;">✅ 正确示范</h4>
                    <p><strong>产品经理：</strong>"我要一个积分兑换功能，具体逻辑如下："</p>
                    <ol>
                        <li>用户点击兑换时，先判断积分够不够</li>
                        <li>不够的话提示"积分不足，还差XX分"</li>
                        <li>够的话判断库存够不够</li>
                        <li>库存不够提示"商品已售罄"</li>
                        <li>都够的话扣积分、减库存、生成订单</li>
                        <li>成功后显示"兑换成功，订单号XXX"</li>
                        <li>失败后显示"兑换失败，请重试"</li>
                        <li>用户可以在"我的订单"里查看兑换记录</li>
                    </ol>
                    <p><strong>程序员：</strong>"清楚，我评估一下工作量。"</p>
                    <p><strong>结果：</strong>一次做对，按时上线</p>
                </div>
                
                <h3>🧠 程序员的思维方式</h3>
                <p>程序员思考问题的方式是<strong>"步骤化"</strong>和<strong>"严谨化"</strong>。他们需要一个清晰的流程，每一步都要明确。</p>
                
                <div class="diagram-box">
                    <pre style="font-family: monospace; line-height: 1.8;">
产品经理的思维：              程序员的思维：
                              
"用户要兑换商品"      →      "怎么实现兑换？"
                              ↓
                        "第一步做什么？"
                              ↓
                        "第二步做什么？"
                              ↓
                        "如果失败了怎么办？"
                              ↓
                        "数据存在哪里？"
                    </pre>
                </div>
                
                <h3>✍️ 写需求文档的模板</h3>
                <p>一个好的需求文档，应该包含以下几个部分：</p>
                
                <div class="info-box">
                    <h4>📋 需求文档必备要素</h4>
                    <ol>
                        <li><strong>功能背景</strong>：为什么要做这个功能？解决什么问题？</li>
                        <li><strong>用户场景</strong>：谁在什么情况下会用这个功能？</li>
                        <li><strong>功能流程</strong>：一步一步详细描述（最重要！）</li>
                        <li><strong>页面原型</strong>：画个草图，标清楚每个按钮</li>
                        <li><strong>异常处理</strong>：出错时怎么办？</li>
                        <li><strong>数据统计</strong>：需要统计哪些数据？</li>
                    </ol>
                </div>
                
                <div class="example-box">
                    <h4>📝 完整案例：登录功能需求文档</h4>
                    
                    <h5>1. 功能背景</h5>
                    <p>目前用户每次打开APP都要重新登录，体验不好。需要记住登录状态，7天内免登录。</p>
                    
                    <h5>2. 用户场景</h5>
                    <p>小明昨天登录了APP，今天再次打开，希望不用输密码就能直接进去。</p>
                    
                    <h5>3. 功能流程</h5>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">正常流程</span></div>
                        <pre><code>用户打开APP
    ↓
检查本地有没有登录凭证（Token）
    ↓
有Token → 直接进首页
    ↓
没有Token → 显示登录页面
    ↓
用户输入手机号和密码
    ↓
点击登录按钮
    ↓
发给服务器验证
    ↓
验证成功 → 保存Token → 进首页
    ↓
验证失败 → 提示"手机号或密码错误"</code></pre>
                    </div>
                    
                    <h5>4. 异常处理</h5>
                    <table class="concept-table">
                        <tr>
                            <th>异常情况</th>
                            <th>处理方式</th>
                        </tr>
                        <tr>
                            <td>网络不好</td>
                            <td>提示"网络连接失败，请检查网络"，提供重试按钮</td>
                        </tr>
                        <tr>
                            <td>Token过期</td>
                            <td>提示"登录已过期，请重新登录"，跳转登录页</td>
                        </tr>
                        <tr>
                            <td>密码输错5次</td>
                            <td>提示"错误次数过多，请15分钟后再试"</td>
                        </tr>
                    </table>
                    
                    <h5>5. 数据统计</h5>
                    <ul>
                        <li>每天登录成功人数</li>
                        <li>每天登录失败次数及原因</li>
                        <li>使用"记住密码"功能的比例</li>
                    </ul>
                </div>
                
                <h3>💬 和程序员沟通的技巧</h3>
                
                <table class="concept-table">
                    <tr>
                        <th>别说</th>
                        <th>改说</th>
                        <th>为什么</th>
                    </tr>
                    <tr>
                        <td>"这个功能很简单吧？"</td>
                        <td>"这个功能大概要做多久？"</td>
                        <td>尊重专业，让技术评估</td>
                    </tr>
                    <tr>
                        <td>"用户想要一个酷炫的效果"</td>
                        <td>"具体是这样：点击后按钮放大1.5倍，持续0.3秒"</td>
                        <td>描述要具体可执行</td>
                    </tr>
                    <tr>
                        <td>"先做着看"</td>
                        <td>"我们先做MVP版本，包含核心功能A、B、C"</td>
                        <td>明确范围，避免无限延期</td>
                    </tr>
                    <tr>
                        <td>"这个应该很快吧？"</td>
                        <td>"这个有技术难度吗？需要什么支持？"</td>
                        <td>了解困难，提供帮助</td>
                    </tr>
                </table>
                
                <h3>🎯 程序员最喜欢的产品经理</h3>
                <div class="info-box">
                    <h4>做到这几点，程序员会爱上你</h4>
                    <ol>
                        <li><strong>需求清晰</strong>：有流程图、有原型、有异常处理</li>
                        <li><strong>不随便改需求</strong>：想好了再提，改了要说明原因</li>
                        <li><strong>尊重技术</strong>：不瞎指挥，相信技术的专业判断</li>
                        <li><strong>有优先级</strong>：告诉技术哪些必须做，哪些可以缓</li>
                        <li><strong>会换位思考</strong>：理解技术的难处，一起想办法</li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：程序员说"这个做不了"，是真的做不了吗？</h4>
                    <p>不一定。可能的情况：</p>
                    <ul>
                        <li><strong>真的做不了</strong>：技术限制（比如iOS不让做）</li>
                        <li><strong>能做但很难</strong>：成本太高，性价比低</li>
                        <li><strong>能做但没时间</strong>：排期满了</li>
                    </ul>
                    <p><strong>应对方法：</strong>问清楚原因，如果是成本问题，可以讨论简化方案；如果是时间问题，可以协调排期。</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：程序员总是延期，怎么办？</h4>
                    <p>先分析原因：</p>
                    <ul>
                        <li>需求中途改了？→ 产品经理背锅，以后少改</li>
                        <li>技术难度评估错了？→ 一起复盘，下次改进</li>
                        <li>需求本身不清楚？→ 产品经理写清楚点</li>
                        <li>程序员摸鱼？→ 找领导协调</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q3：技术说的术语听不懂，怎么办？</h4>
                    <p>直接问！不要装懂！</p>
                    <ul>
                        <li>"你说的'接口'是什么意思？"</li>
                        <li>"'回调'是啥？能给我解释一下吗？"</li>
                        <li>"你说的这个技术，对我们产品有什么影响？"</li>
                    </ul>
                    <p>好的程序员会耐心解释，不愿意解释的程序员...你也要坚持问，这是你的权利。</p>
                </div>
            `
        },
{
            id: 'arch-4',
            categoryId: 'architecture',
            title: '哪些需求技术上做不了？',
            difficulty: 'beginner',
            summary: '了解技术边界，避免提不靠谱的需求，提高沟通效率。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>技术实现受限于<strong>物理定律、计算复杂度、系统架构</strong>等因素。理解这些限制有助于制定可行的产品方案。</p>
                    
                    <h5>常见技术限制</h5>
                    <table class="concept-table">
                        <tr>
                            <th>限制类型</th>
                            <th>具体说明</th>
                            <th>示例</th>
                        </tr>
                        <tr>
                            <td>物理限制</td>
                            <td>受物理定律约束</td>
                            <td>无法突破光速传输数据</td>
                        </tr>
                        <tr>
                            <td>算法限制</td>
                            <td>NP-hard问题无法在合理时间内解决</td>
                            <td>大规模实时路径规划</td>
                        </tr>
                        <tr>
                            <td>平台限制</td>
                            <td>iOS/Android系统限制</td>
                            <td>iOS不允许后台持续定位</td>
                        </tr>
                        <tr>
                            <td>隐私限制</td>
                            <td>法律法规约束</td>
                            <td>无法获取用户通讯录</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>技术可行性评估</h5>
                            <ul>
                                <li><strong>算法复杂度</strong>：O(n) vs O(n²)的性能差异</li>
                                <li><strong>系统架构</strong>：单体 vs 微服务的扩展性</li>
                                <li><strong>第三方依赖</strong>：API限制和稳定性</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>替代方案设计</h5>
                            <ul>
                                <li><strong>近似算法</strong>：用启发式算法替代精确解</li>
                                <li><strong>分步实现</strong>：MVP + 迭代优化</li>
                                <li><strong>降级方案</strong>：优雅降级保证核心功能</li>
                            </ul>
                        </div>
                    </div>
                `,
                businessScenario: `
                    <h4>💼 业务场景</h4>
                    <div class="scenario-timeline">
                        <div class="scenario-item">
                            <div class="scenario-number">1</div>
                            <div class="scenario-content">
                                <h5>实时推荐场景</h5>
                                <p><strong>需求</strong>：用户每滑动一个商品，实时推荐相似商品</p>
                                <p><strong>技术限制</strong>：实时计算推荐结果需要大量计算资源</p>
                                <p><strong>替代方案</strong>：预计算推荐结果，缓存热点数据</p>
                            </div>
                        </div>
                    </div>
                `,
                pmDevScenario: `
                    <h4>🗣️ 产品经理与开发沟通场景</h4>
                    <div class="conversation-box">
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"这个功能的核心需求是什么？有没有替代方案可以达到类似效果？"</p>
                                <p><strong>开发：</strong>"实时计算成本太高，可以用预计算+缓存的方案，用户体验差不多。"</p>
                            </div>
                        </div>
                    </div>
                `
            },
            content: `
                <h3>🚫 先来看几个"翻车"案例</h3>
                
                <div class="example-box" style="border-left-color: #dc2626;">
                    <h4 style="color: #dc2626;">案例1：读心术功能</h4>
                    <p><strong>产品经理：</strong>"我们要做一个功能，能知道用户心里在想什么，然后给他推荐商品。"</p>
                    <p><strong>程序员：</strong>"？？？这是科幻片吗？"</p>
                    <p><strong>现实：</strong>目前没有任何技术能读取人的思想，脑机接口还在实验室阶段。</p>
                    <p><strong>替代方案：</strong>通过用户行为分析（浏览记录、购买历史）来推测喜好。</p>
                </div>
                
                <div class="example-box" style="border-left-color: #dc2626;">
                    <h4 style="color: #dc2626;">案例2：离线实时同步</h4>
                    <p><strong>产品经理：</strong>"用户没网络的时候也能聊天，等有网了自动同步。"</p>
                    <p><strong>程序员：</strong>"没网怎么发消息？用意念吗？"</p>
                    <p><strong>现实：</strong>数据同步必须通过网络，没网的时候只能存在本地，有网了再发。</p>
                    <p><strong>正确理解：</strong>"离线可以编辑，联网后自动发送"，不是"离线实时同步"。</p>
                </div>
                
                <div class="example-box" style="border-left-color: #dc2626;">
                    <h4 style="color: #dc2626;">案例3：100%准确的AI识别</h4>
                    <p><strong>产品经理：</strong>"我们的AI识别要做到100%准确，不能出错。"</p>
                    <p><strong>程序员：</strong>"那要人类干什么？"</p>
                    <p><strong>现实：</strong>AI识别有准确率上限，再好的算法也有误判。</p>
                    <p><strong>合理预期：</strong>95%准确率已经很厉害了，剩下的5%需要人工审核。</p>
                </div>
                
                <h3>✅ 容易实现的功能（放心提）</h3>
                
                <table class="concept-table">
                    <tr>
                        <th>功能</th>
                        <th>生活中类似</th>
                        <th>难度</th>
                        <th>成本</th>
                    </tr>
                    <tr>
                        <td>获取定位</td>
                        <td>导航软件找位置</td>
                        <td>⭐</td>
                        <td>低</td>
                    </tr>
                    <tr>
                        <td>扫码功能</td>
                        <td>支付宝付款</td>
                        <td>⭐</td>
                        <td>低</td>
                    </tr>
                    <tr>
                        <td>拍照上传</td>
                        <td>发朋友圈</td>
                        <td>⭐</td>
                        <td>低</td>
                    </tr>
                    <tr>
                        <td>推送通知</td>
                        <td>收到微信消息</td>
                        <td>⭐⭐</td>
                        <td>中</td>
                    </tr>
                    <tr>
                        <td>语音识别</td>
                        <td>Siri、小爱同学</td>
                        <td>⭐⭐</td>
                        <td>中（调接口）</td>
                    </tr>
                    <tr>
                        <td>人脸识别</td>
                        <td>iPhone人脸解锁</td>
                        <td>⭐⭐⭐</td>
                        <td>高</td>
                    </tr>
                </table>
                
                <h3>❌ 很难或做不了的功能（慎提）</h3>
                
                <table class="concept-table">
                    <tr>
                        <th>功能</th>
                        <th>为什么做不了</th>
                        <th>替代方案</th>
                    </tr>
                    <tr>
                        <td>读取用户思想</td>
                        <td>没有成熟技术</td>
                        <td>行为分析、问卷调查</td>
                    </tr>
                    <tr>
                        <td>离线实时通讯</td>
                        <td>物理限制（没网怎么传数据）</td>
                        <td>本地缓存+联网同步</td>
                    </tr>
                    <tr>
                        <td>100%准确识别</td>
                        <td>AI有理论上限</td>
                        <td>AI+人工审核</td>
                    </tr>
                    <tr>
                        <td>APP永久后台运行</td>
                        <td>iOS/Android系统限制</td>
                        <td>推送服务</td>
                    </tr>
                    <tr>
                        <td>获取其他APP数据</td>
                        <td>隐私政策不允许</td>
                        <td>用户主动授权</td>
                    </tr>
                    <tr>
                        <td>秒级处理亿级数据</td>
                        <td>成本极高</td>
                        <td>分批处理、排队</td>
                    </tr>
                </table>
                
                <h3>💰 成本vs效果的权衡</h3>
                
                <div class="example-box">
                    <h4>案例：实时在线人数显示</h4>
                    
                    <h5>方案A：简单版（推荐）</h5>
                    <ul>
                        <li>每5分钟更新一次人数</li>
                        <li>开发时间：1天</li>
                        <li>服务器成本：几乎为0</li>
                        <li>准确度：70%</li>
                    </ul>
                    
                    <h5>方案B：实时版</h5>
                    <ul>
                        <li>每秒更新人数</li>
                        <li>开发时间：1周</li>
                        <li>服务器成本：每月几千元</li>
                        <li>准确度：99%</li>
                    </ul>
                    
                    <h5>怎么选？</h5>
                    <p>如果只是显示"热闹氛围" → 选方案A</p>
                    <p>如果是游戏匹配（需要精确人数） → 选方案B</p>
                </div>
                
                <h3>🎯 提需求前的自检清单</h3>
                
                <div class="info-box">
                    <h4>问自己这6个问题：</h4>
                    <ol>
                        <li>☐ 市面上有类似功能吗？（验证可行性）</li>
                        <li>☐ 需要用到什么技术？（了解技术栈）</li>
                        <li>☐ 开发周期大概多久？（评估时间成本）</li>
                        <li>☐ 服务器成本会增加吗？（评估运营成本）</li>
                        <li>☐ 有法律或隐私风险吗？（合规性检查）</li>
                        <li>☐ 如果做不了，有Plan B吗？（准备备选方案）</li>
                    </ol>
                </div>
                
                <h3>💡 和程序员沟通的黄金话术</h3>
                
                <table class="concept-table">
                    <tr>
                        <th>你想知道</th>
                        <th>这么问</th>
                    </tr>
                    <tr>
                        <td>能不能做</td>
                        <td>"这个功能技术上能实现吗？有什么限制？"</td>
                    </tr>
                    <tr>
                        <td>要做多久</td>
                        <td>"评估一下工作量，大概需要多少天？"</td>
                    </tr>
                    <tr>
                        <td>难不难</td>
                        <td>"这个功能复杂度怎么样？是简单还是复杂？"</td>
                    </tr>
                    <tr>
                        <td>成本高不高</td>
                        <td>"实现这个功能，服务器成本会增加吗？"</td>
                    </tr>
                    <tr>
                        <td>有没有风险</td>
                        <td>"这个功能有什么潜在风险吗？比如性能、安全方面"</td>
                    </tr>
                </table>
                
                <h3>🎓 给小白产品经理的建议</h3>
                
                <div class="info-box">
                    <h4>记住这几句话</h4>
                    <ul>
                        <li><strong>"没有银弹"</strong>：没有完美的解决方案，都是权衡</li>
                        <li><strong>"简单即美"</strong>：能用简单方案解决的，不要用复杂的</li>
                        <li><strong>"先跑起来"</strong>：MVP（最小可行产品）比完美更重要</li>
                        <li><strong>"数据说话"</strong>：不确定的时候，先做个简单版测试</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>实战练习</h4>
                    <p>假设你要做一个"附近的人"功能，你会怎么和程序员沟通？</p>
                    <p><strong>参考答案：</strong></p>
                    <ol>
                        <li>"我们要做附近的人功能，用户可以看到周围5公里内的其他用户"</li>
                        <li>"技术上是用GPS定位吗？精度能做到多少？"</li>
                        <li>"如果用户量很大，比如100万用户同时用，会不会卡？"</li>
                        <li>"iOS和安卓都能做吗？有没有什么限制？"</li>
                        <li>"大概要做多久？如果先做简单版（只显示距离，不显示地图），能快多少？"</li>
                    </ol>
                </div>
            `
        }
];

// 浏览器环境：挂载到 window 对象
if (typeof window !== 'undefined') {
    window.architectureKnowledge = knowledge;
}

// Node.js 环境：CommonJS 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { knowledge };
}
