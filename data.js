const knowledgeData = {
    categories: [
        {
            id: 'architecture',
            name: '互联网基础架构',
            icon: '🏗️',
            description: '零基础理解互联网产品是怎么跑起来的，不用写代码也能看懂',
            topics: ['产品是怎么跑起来的', '点击按钮后发生了什么', '和程序员怎么沟通', '哪些需求做不了']
        },
        {
            id: 'programming',
            name: '编程入门知识',
            icon: '💻',
            description: '不用写代码，但要知道程序员是怎么思考的',
            topics: ['数据是什么', '程序怎么做事', '数据怎么存放', '功能怎么复用']
        },
        {
            id: 'database',
            name: '数据存储原理',
            icon: '🗄️',
            description: '理解数据存在哪里，产品经理怎么设计数据',
            topics: ['Excel式存储', '文件夹式存储', '怎么查数据', '删了还能找回吗']
        },
        {
            id: 'frontend',
            name: '手机APP是怎么做的',
            icon: '📱',
            description: '你看到的界面是怎么来的，为什么有的APP流畅有的卡',
            topics: ['苹果和安卓的区别', '界面上的按钮文字', '网页和APP的区别', '做APP的三种方式']
        },
        {
            id: 'backend',
            name: '服务器和接口',
            icon: '⚙️',
            description: '理解后台是怎么工作的，学会看接口文档',
            topics: ['后端用什么写', '接口文档怎么看', '服务器是什么', '接口基础', '常见接口类型']
        },
        {
            id: 'data',
            name: '数据驱动产品',
            icon: '📊',
            description: '用数据说话，产品经理必看的数据指标',
            topics: ['核心数据指标', '数据怎么看', '数据怎么展示']
        }
    ],
    
    knowledge: [
        {
            id: 'arch-1',
            categoryId: 'architecture',
            title: '一个APP是怎么跑起来的？',
            difficulty: 'beginner',
            summary: '用最通俗的方式理解APP的四个组成部分，像点外卖一样简单。',
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
        },
        {
            id: 'prog-1',
            categoryId: 'programming',
            title: '数据是什么？',
            difficulty: 'beginner',
            summary: '用生活中的例子理解程序里的数据，知道数据有哪些类型。',
            content: `
                <h3>📦 数据就是"东西"</h3>
                <p>在程序员眼里，世界上的一切都是<strong>数据</strong>。就像你家里的东西一样，数据也有不同的类型。</p>
                
                <div class="example-box">
                    <h4>🏠 打个比方：你家里的东西</h4>
                    <table class="concept-table">
                        <tr>
                            <th>家里的东西</th>
                            <th>程序里的数据</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>写着字的纸条</td>
                            <td>文字（字符串）</td>
                            <td>用户名、地址、商品名称</td>
                        </tr>
                        <tr>
                            <td>计算器上的数字</td>
                            <td>数字（数值）</td>
                            <td>价格、数量、年龄</td>
                        </tr>
                        <tr>
                            <td>开关（开/关）</td>
                            <td>真假（布尔值）</td>
                            <td>是否会员、是否上架</td>
                        </tr>
                        <tr>
                            <td>相册</td>
                            <td>列表（数组）</td>
                            <td>购物车里的商品列表</td>
                        </tr>
                        <tr>
                            <td>档案袋（装着各种资料）</td>
                            <td>对象（字典）</td>
                            <td>一个用户的全部信息</td>
                        </tr>
                    </table>
                </div>
                
                <h3>📝 文字（字符串）</h3>
                <p><strong>字符串</strong>就是一串文字，用引号包起来。</p>
                
                <div class="code-block">
                    <div class="code-header"><span class="code-lang">生活中的字符串</span></div>
                    <pre><code>"张三"                    ← 用户名
"北京市朝阳区"            ← 地址
"13800138000"            ← 手机号（虽然是数字，但通常当字符串存）
"这款商品真的很不错！"     ← 评论内容</code></pre>
                </div>
                
                <div class="info-box">
                    <h4>💡 产品经理要注意</h4>
                    <ul>
                        <li>手机号、身份证号虽然是数字，但要用<strong>字符串</strong>存（因为不用计算，而且可能以0开头）</li>
                        <li>设计字段时要考虑<strong>最大长度</strong>，比如用户名最多20个字</li>
                        <li>文字内容要考虑<strong>特殊字符</strong>，比如表情符号、引号</li>
                    </ul>
                </div>
                
                <h3>🔢 数字（数值）</h3>
                <p>数字就是可以计算的数值，分为整数和小数。</p>
                
                <div class="code-block">
                    <div class="code-header"><span class="code-lang">生活中的数字</span></div>
                    <pre><code>整数：
25    ← 年龄
100   ← 商品库存
5     ← 评分（1-5星）

小数：
99.99   ← 商品价格
4.5     ← 平均评分
0.85    ← 折扣（85折）</code></pre>
                </div>
                
                <div class="example-box">
                    <h4>⚠️ 注意：钱怎么存？</h4>
                    <p>商品价格<strong>不要用小数存</strong>！因为计算机算小数会有误差。</p>
                    <p><strong>正确做法：</strong>按"分"存整数</p>
                    <ul>
                        <li>99.99元 → 存成 9999（分）</li>
                        <li>显示的时候再除以100</li>
                    </ul>
                    <p><strong>产品经理要做什么：</strong>和技术确认价格字段的单位</p>
                </div>
                
                <h3>✅❌ 真假（布尔值）</h3>
                <p>布尔值只有两种：<strong>是/否</strong>、<strong>真/假</strong>、<strong>开/关</strong></p>
                
                <div class="code-block">
                    <div class="code-header"><span class="code-lang">生活中的布尔值</span></div>
                    <pre><code>是/否的问题：
是否会员？      true / false
是否上架？      true / false
是否已付款？    true / false
是否已发货？    true / false

开关状态：
通知开关        开 / 关
隐私模式        开 / 关</code></pre>
                </div>
                
                <h3>📋 列表（数组）</h3>
                <p>列表就是一组相同类型的数据，按顺序排列。</p>
                
                <div class="example-box">
                    <h4>🛒 案例：购物车</h4>
                    <p>你的购物车里有多个商品，这就是一个列表：</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">购物车列表</span></div>
                        <pre><code>[
    "iPhone 15",
    "手机壳",
    "充电器",
    "耳机"
]</code></pre>
                    </div>
                </div>
                
                <div class="example-box">
                    <h4>⭐ 案例：评分列表</h4>
                    <p>一个商品有多个用户评分：</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">评分列表</span></div>
                        <pre><code>[5, 4, 5, 3, 5, 4, 4, 5]

计算平均分：
(5+4+5+3+5+4+4+5) ÷ 8 = 4.375</code></pre>
                    </div>
                </div>
                
                <h3>📁 对象（字典/Map）</h3>
                <p>对象就像一个档案袋，里面装着一个人的各种信息。</p>
                
                <div class="example-box">
                    <h4>👤 案例：用户信息</h4>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">一个用户的数据</span></div>
                        <pre><code>{
    "用户ID": "12345",
    "昵称": "小明",
    "手机号": "13800138000",
    "年龄": 25,
    "是否会员": true,
    "收货地址": [
        "北京市朝阳区xxx",
        "上海市浦东新区yyy"
    ]
}</code></pre>
                    </div>
                </div>
                
                <div class="info-box">
                    <h4>💡 对象 vs 列表的区别</h4>
                    <table class="concept-table">
                        <tr>
                            <th></th>
                            <th>对象（字典）</th>
                            <th>列表（数组）</th>
                        </tr>
                        <tr>
                            <td>像什么</td>
                            <td>档案袋、表格的一行</td>
                            <td>名单、清单</td>
                        </tr>
                        <tr>
                            <td>存什么</td>
                            <td>一个事物的多个属性</td>
                            <td>多个相同的事物</td>
                        </tr>
                        <tr>
                            <td>例子</td>
                            <td>一个用户的全部信息</td>
                            <td>所有用户的列表</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="example-box">
                    <h4>📝 设计数据字段时的 checklist</h4>
                    <ol>
                        <li><strong>这个字段是什么类型？</strong>
                            <ul>
                                <li>名字、描述 → 字符串</li>
                                <li>价格、数量 → 数字</li>
                                <li>是/否 → 布尔值</li>
                            </ul>
                        </li>
                        <li><strong>最大长度是多少？</strong>
                            <ul>
                                <li>用户名：20字？50字？</li>
                                <li>商品标题：100字？</li>
                            </ul>
                        </li>
                        <li><strong>能不能为空？</strong>
                            <ul>
                                <li>手机号：必填</li>
                                <li>昵称：可以空，显示"用户12345"</li>
                            </ul>
                        </li>
                        <li><strong>有没有默认值？</strong>
                            <ul>
                                <li>新用户积分：默认0</li>
                                <li>是否会员：默认false</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：时间怎么存？</h4>
                    <p>时间通常存成<strong>时间戳</strong>（一串数字），表示从1970年1月1日到现在过了多少秒。</p>
                    <div class="code-block">
                        <pre><code>2024年1月1日 12:00:00 → 1704081600</code></pre>
                    </div>
                    <p><strong>为什么这样存？</strong>方便计算，比如算两个时间差多少天。</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：图片、视频怎么存？</h4>
                    <p>图片和视频<strong>不直接存到数据库</strong>，而是：</p>
                    <ol>
                        <li>把图片上传到文件服务器</li>
                        <li>拿到图片的链接地址</li>
                        <li>把链接地址（字符串）存到数据库</li>
                    </ol>
                    <div class="code-block">
                        <pre><code>{
    "用户名": "小明",
    "头像": "https://xxx.com/avatar/123.jpg"
}</code></pre>
                    </div>
                </div>
                
                <div class="example-box">
                    <h4>Q3：数据类型错了会怎样？</h4>
                    <p>可能会导致：</p>
                    <ul>
                        <li>程序报错崩溃</li>
                        <li>计算结果错误（比如字符串相加变成拼接）</li>
                        <li>数据显示异常</li>
                    </ul>
                    <p><strong>产品经理要做什么：</strong>写需求时明确每个字段的类型</p>
                </div>
            `
        },
        {
            id: 'prog-2',
            categoryId: 'programming',
            title: '程序怎么做事？',
            difficulty: 'beginner',
            summary: '理解程序的执行逻辑：顺序、判断、循环，像做菜谱一样简单。',
            content: `
                <h3>🍳 程序就像菜谱</h3>
                <p>程序做事的方式，就像你按照<strong>菜谱做菜</strong>一样，一步一步来。</p>
                
                <div class="example-box">
                    <h4>📝 菜谱 vs 程序</h4>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">做番茄炒蛋的菜谱</span></div>
                        <pre><code>1. 准备2个番茄、3个鸡蛋
2. 把番茄切块
3. 把鸡蛋打散
4. 热锅倒油
5. 倒入鸡蛋液，炒熟盛出
6. 再倒油，炒番茄
7. 倒入鸡蛋，一起炒
8. 加盐调味
9. 出锅装盘</code></pre>
                    </div>
                    
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">用户下单的程序</span></div>
                        <pre><code>1. 用户点击"购买"按钮
2. 检查用户是否登录
3. 检查商品库存
4. 计算订单金额
5. 创建订单
6. 扣减库存
7. 跳转到支付页面
8. 显示"订单创建成功"</code></pre>
                    </div>
                </div>
                
                <h3>➡️ 顺序执行</h3>
                <p>最基本的逻辑：<strong>按顺序一步一步做</strong></p>
                
                <div class="diagram-box">
                    <pre style="font-family: monospace; line-height: 2;">
步骤1 → 步骤2 → 步骤3 → 步骤4
                    </pre>
                </div>
                
                <div class="example-box">
                    <h4>📦 案例：发货流程</h4>
                    <div class="code-block">
                        <pre><code>1. 用户付款成功
2. 系统生成发货单
3. 仓库打印快递单
4. 拣货员拣货
5. 打包
6. 交给快递员
7. 更新订单状态为"已发货"
8. 给用户发通知</code></pre>
                    </div>
                    <p><strong>注意：</strong>这些步骤必须按顺序做，不能先打包再拣货。</p>
                </div>
                
                <h3>🔀 判断（如果...就...）</h3>
                <p>程序需要根据不同情况做不同的事，这就是<strong>判断</strong>。</p>
                
                <div class="diagram-box">
                    <pre style="font-family: monospace; line-height: 1.8;">
        是 → 做A
       /
如果？
       \
        否 → 做B
                    </pre>
                </div>
                
                <div class="example-box">
                    <h4>🎫 案例：买票判断</h4>
                    <div class="code-block">
                        <pre><code>如果 年龄 < 6岁:
    票价 = 0（免票）
否则 如果 年龄 < 18岁:
    票价 = 50（儿童票）
否则 如果 年龄 >= 60岁:
    票价 = 50（老人票）
否则:
    票价 = 100（全价票）</code></pre>
                    </div>
                </div>
                
                <div class="example-box">
                    <h4>🛒 案例：购物车结算</h4>
                    <div class="code-block">
                        <pre><code>如果 购物车是空的:
    提示"购物车空空如也，快去选购吧"
    不执行结算
否则:
    如果 有未选中的商品:
        提示"还有商品未选中，确认只结算选中的吗？"
    否则:
        进入结算页面</code></pre>
                    </div>
                </div>
                
                <h3>🔄 循环（重复做）</h3>
                <p>有些事情需要<strong>重复做多次</strong>，这就是循环。</p>
                
                <div class="diagram-box">
                    <pre style="font-family: monospace; line-height: 1.8;">
开始
  │
  ▼
做这件事
  │
  ▼
还有吗？──否──→ 结束
  │
  是
  │
  └──────────┘
                    </pre>
                </div>
                
                <div class="example-box">
                    <h4>📧 案例：群发消息</h4>
                    <p>要给100个用户发通知：</p>
                    <div class="code-block">
                        <pre><code>对于 用户列表 里的每一个用户:
    发送消息("您的订单已发货")
    记录发送日志
结束循环</code></pre>
                    </div>
                    <p><strong>结果：</strong>100个用户都收到了消息</p>
                </div>
                
                <div class="example-box">
                    <h4>🔍 案例：查找商品</h4>
                    <p>在商品列表里找价格低于100的商品：</p>
                    <div class="code-block">
                        <pre><code>结果列表 = 空的

对于 每个商品 in 商品列表:
    如果 商品.价格 < 100:
        把商品加入结果列表
    结束判断
结束循环

显示结果列表</code></pre>
                    </div>
                </div>
                
                <h3>🎯 三种逻辑的组合</h3>
                <p>实际程序是这三种逻辑的组合：</p>
                
                <div class="example-box">
                    <h4>📦 完整案例：处理订单</h4>
                    <div class="code-block">
                        <pre><code>// 1. 获取所有待发货订单（循环的前置）
待发货订单 = 查询数据库("状态=待发货")

// 2. 逐个处理（循环）
对于 每个订单 in 待发货订单:
    
    // 3. 检查库存（判断）
    如果 订单.商品.库存 >= 订单.数量:
        // 4. 执行发货流程（顺序）
        扣减库存(订单.商品, 订单.数量)
        生成快递单(订单)
        更新订单状态(订单, "已发货")
        发送通知(订单.用户, "您的订单已发货")
    否则:
        标记缺货(订单)
        发送通知(订单.用户, "商品缺货，正在补货")
    结束判断
    
结束循环

// 5. 生成报表
生成今日发货报表()</code></pre>
                    </div>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>✍️ 写需求时怎么描述逻辑</h4>
                    <table class="concept-table">
                        <tr>
                            <th>逻辑类型</th>
                            <th>关键词</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>顺序</td>
                            <td>先...然后...最后...</td>
                            <td>先验证手机号，然后发验证码，最后进入首页</td>
                        </tr>
                        <tr>
                            <td>判断</td>
                            <td>如果...就...否则...</td>
                            <td>如果库存不足，就显示"缺货"，否则显示"立即购买"</td>
                        </tr>
                        <tr>
                            <td>循环</td>
                            <td>每个...都...</td>
                            <td>每个选中的商品都要计算价格</td>
                        </tr>
                    </table>
                </div>
                
                <div class="example-box">
                    <h4>❌ 错误示范 vs ✅ 正确示范</h4>
                    
                    <h5 style="color: #dc2626;">❌ 模糊的需求</h5>
                    <p>"用户下单后要处理一下，然后通知用户"</p>
                    
                    <h5 style="color: #16a34a;">✅ 清晰的需求</h5>
                    <div class="code-block">
                        <pre><code>用户点击"提交订单"后：
1. 检查用户是否登录（如果没登录，跳转登录页）
2. 检查商品库存（如果库存不足，提示"库存不足"）
3. 计算订单总价（商品价格 × 数量 + 运费）
4. 创建订单，状态设为"待付款"
5. 扣减商品库存
6. 给用户发送订单创建成功的通知
7. 跳转支付页面

异常处理：
- 如果第3步计算出错，显示"系统繁忙，请重试"
- 如果第5步扣减库存失败，回滚订单（取消订单）</code></pre>
                    </div>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：什么是"回滚"？</h4>
                    <p>就像你做错了一道题，用橡皮擦掉重来。</p>
                    <p><strong>例子：</strong>下单时扣了库存，但支付失败了，要把库存加回去。</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：什么是"死循环"？</h4>
                    <p>循环没有结束条件，一直转圈圈。</p>
                    <p><strong>例子：</strong>"只要用户没付款，就一直发提醒" → 结果用户被骚扰100条消息</p>
                    <p><strong>正确做法：</strong>最多提醒3次，或者隔24小时再提醒</p>
                </div>
                
                <div class="example-box">
                    <h4>Q3：程序出错了会怎样？</h4>
                    <p>可能出现的情况：</p>
                    <ul>
                        <li>程序卡住不动</li>
                        <li>显示错误信息</li>
                        <li>直接闪退</li>
                        <li>数据错乱</li>
                    </ul>
                    <p><strong>产品经理要做什么：</strong>设计友好的错误提示，告诉用户发生了什么、该怎么办</p>
                </div>
            `
        },
        {
            id: 'prog-3',
            categoryId: 'programming',
            title: '数据怎么存放？',
            difficulty: 'beginner',
            summary: '理解变量和存储的概念，知道数据存在哪里、怎么找。',
            content: `
                <h3>📦 变量就是"盒子"</h3>
                <p>程序里用<strong>变量</strong>来存数据，就像用盒子装东西。</p>
                
                <div class="example-box">
                    <h4>🎁 打个比方：贴标签的盒子</h4>
                    <div class="code-block">
                        <pre><code>盒子A（贴标签：用户名）→ 里面装着："张三"
盒子B（贴标签：年龄）   → 里面装着：25
盒子C（贴标签：是否会员）→ 里面装着：是</code></pre>
                    </div>
                    <p>在程序里，这些"盒子"就叫<strong>变量</strong>，标签就是<strong>变量名</strong>。</p>
                </div>
                
                <h3>📥 存数据（赋值）</h3>
                <p>把数据放进变量的过程叫<strong>赋值</strong>。</p>
                
                <div class="code-block">
                    <div class="code-header"><span class="code-lang">赋值语句</span></div>
                    <pre><code>用户名 = "张三"        ← 把"张三"放进"用户名"这个盒子
年龄 = 25             ← 把25放进"年龄"这个盒子
是否会员 = 是         ← 把"是"放进"是否会员"这个盒子</code></pre>
                </div>
                
                <div class="example-box">
                    <h4>🛒 案例：购物车计算</h4>
                    <div class="code-block">
                        <pre><code>商品单价 = 99
购买数量 = 3
运费 = 10

商品总价 = 商品单价 × 购买数量    → 297
订单总价 = 商品总价 + 运费        → 307</code></pre>
                    </div>
                    <p>每个"="号就是把右边的计算结果，存到左边的变量里。</p>
                </div>
                
                <h3>📤 取数据（使用变量）</h3>
                <p>使用变量里的数据，就像从盒子里把东西拿出来用。</p>
                
                <div class="code-block">
                    <div class="code-header"><span class="code-lang">使用变量</span></div>
                    <pre><code>用户名 = "张三"
欢迎语 = "你好，" + 用户名     → "你好，张三"

年龄 = 25
明年年龄 = 年龄 + 1           → 26</code></pre>
                </div>
                
                <h3>🏪 数据存在哪里？</h3>
                
                <div class="example-box">
                    <h4>📍 三种存储位置</h4>
                    <table class="concept-table">
                        <tr>
                            <th>存储位置</th>
                            <th>像什么</th>
                            <th>特点</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>内存（RAM）</td>
                            <td>办公桌</td>
                            <td>快，但断电就消失</td>
                            <td>APP运行时的临时数据</td>
                        </tr>
                        <tr>
                            <td>本地存储</td>
                            <td>办公桌抽屉</td>
                            <td>较慢，但关机还在</td>
                            <td>记住登录状态、缓存图片</td>
                        </tr>
                        <tr>
                            <td>服务器/数据库</td>
                            <td>公司档案室</td>
                            <td>永久保存，多台设备同步</td>
                            <td>账号信息、订单记录</td>
                        </tr>
                    </table>
                </div>
                
                <h3>💾 临时存储（内存）</h3>
                <p>APP运行时，数据存在内存里，速度快但<strong>断电就没了</strong>。</p>
                
                <div class="example-box">
                    <h4>📝 案例：填写表单</h4>
                    <p>你在注册页面填写信息：</p>
                    <div class="code-block">
                        <pre><code>用户输入：
手机号 = "13800138000"
密码 = "123456"
昵称 = "小明"

这些数据暂时存在内存里

如果这时候APP闪退了：
→ 这些数据就没了，要重新填</code></pre>
                    </div>
                </div>
                
                <h3>💿 本地存储</h3>
                <p>把数据存到手机本地，<strong>关掉APP再打开还在</strong>。</p>
                
                <div class="example-box">
                    <h4>🔑 案例：记住登录状态</h4>
                    <div class="code-block">
                        <pre><code>登录成功后：
本地存储.保存("token", "abc123")
本地存储.保存("用户名", "张三")

下次打开APP：
Token = 本地存储.读取("token")
如果 Token 存在:
    直接进首页（免登录）
否则:
    显示登录页</code></pre>
                    </div>
                </div>
                
                <div class="info-box">
                    <h4>💡 本地存储适合存什么？</h4>
                    <ul>
                        <li>✅ 登录凭证（Token）</li>
                        <li>✅ 用户设置（夜间模式、字体大小）</li>
                        <li>✅ 缓存数据（图片、文章，下次打开更快）</li>
                        <li>❌ 重要数据（订单、支付信息）→ 要存服务器</li>
                    </ul>
                </div>
                
                <h3>🌐 服务器存储</h3>
                <p>重要的数据要存到服务器，这样<strong>换手机也能看到</strong>。</p>
                
                <div class="example-box">
                    <h4>📦 案例：订单数据</h4>
                    <div class="code-block">
                        <pre><code>用户下单：
1. APP收集订单信息（内存）
2. 发送到服务器
3. 服务器存到数据库（永久保存）
4. 返回"保存成功"

用户换手机登录：
1. 新手机登录账号
2. 从服务器获取历史订单
3. 显示给用户</code></pre>
                    </div>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>📝 设计功能时，想清楚数据存在哪</h4>
                    <table class="concept-table">
                        <tr>
                            <th>数据类型</th>
                            <th>存储位置</th>
                            <th>原因</th>
                        </tr>
                        <tr>
                            <td>用户账号密码</td>
                            <td>服务器</td>
                            <td>换设备要能用，要加密</td>
                        </tr>
                        <tr>
                            <td>购物车</td>
                            <td>服务器（推荐）</td>
                            <td>换设备同步，不怕APP被删</td>
                        </tr>
                        <tr>
                            <td>浏览记录</td>
                            <td>本地或服务器</td>
                            <td>看需求，本地省流量，服务器可同步</td>
                        </tr>
                        <tr>
                            <td>夜间模式开关</td>
                            <td>本地</td>
                            <td>个人偏好，不用同步</td>
                        </tr>
                        <tr>
                            <td>草稿箱</td>
                            <td>本地+服务器</td>
                            <td>本地先存，有网了同步到服务器</td>
                        </tr>
                    </table>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：为什么有时候APP闪退后数据没了？</h4>
                    <p>因为数据只存在内存里，没来得及存到本地或服务器。</p>
                    <p><strong>产品经理要做什么：</strong>重要数据要自动保存，比如写长文章时每隔30秒自动存草稿</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：清理缓存会删掉什么？</h4>
                    <p>清理缓存会删除：</p>
                    <ul>
                        <li>下载的图片、视频</li>
                        <li>临时文件</li>
                        <li>部分本地存储的数据</li>
                    </ul>
                    <p>不会删除：</p>
                    <ul>
                        <li>服务器上的数据（订单、账号信息）</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q3：为什么换手机后有些数据没了？</h4>
                    <p>因为那些数据只存在旧手机的本地存储里，没有同步到服务器。</p>
                    <p><strong>产品经理要做什么：</strong>重要数据要设计同步机制，或者提示用户"数据只保存在本地"</p>
                </div>
            `
        },
        {
            id: 'prog-4',
            categoryId: 'programming',
            title: '功能怎么复用？',
            difficulty: 'beginner',
            summary: '理解函数和模块的概念，知道怎么把重复的逻辑封装起来。',
            content: `
                <h3>🔧 函数就是"工具"</h3>
                <p>程序里把常用的功能打包成<strong>函数</strong>（也叫方法），就像你家里的工具。</p>
                
                <div class="example-box">
                    <h4>🔨 打个比方：工具箱</h4>
                    <table class="concept-table">
                        <tr>
                            <th>工具</th>
                            <th>作用</th>
                            <th>输入</th>
                            <th>输出</th>
                        </tr>
                        <tr>
                            <td>榨汁机</td>
                            <td>把水果榨成汁</td>
                            <td>水果</td>
                            <td>果汁</td>
                        </tr>
                        <tr>
                            <td>计算器</td>
                            <td>算加减乘除</td>
                            <td>数字和运算符</td>
                            <td>计算结果</td>
                        </tr>
                        <tr>
                            <td>微波炉</td>
                            <td>加热食物</td>
                            <td>食物、时间</td>
                            <td>热好的食物</td>
                        </tr>
                    </table>
                    <p>程序里的<strong>函数</strong>就像这些工具，输入数据，处理，输出结果。</p>
                </div>
                
                <h3>📞 调用函数</h3>
                <p>使用函数的过程叫<strong>调用</strong>，就像你使用工具一样。</p>
                
                <div class="code-block">
                    <div class="code-header"><span class="code-lang">调用函数的例子</span></div>
                    <pre><code>// 定义一个计算打折价格的函数
函数 计算折扣价(原价, 折扣):
    折扣价 = 原价 × 折扣
    返回 折扣价
结束函数

// 调用函数
价格1 = 计算折扣价(100, 0.8)    → 80
价格2 = 计算折扣价(200, 0.5)    → 100
价格3 = 计算折扣价(50, 0.9)     → 45</code></pre>
                </div>
                
                <div class="example-box">
                    <h4>🧮 案例：验证手机号</h4>
                    <div class="code-block">
                        <pre><code>// 定义验证手机号的函数
函数 验证手机号(手机号):
    如果 手机号长度 ≠ 11:
        返回 "手机号必须是11位"
    结束如果
    
    如果 手机号开头不是 "1":
        返回 "手机号格式不正确"
    结束如果
    
    返回 "格式正确"
结束函数

// 多处调用
结果1 = 验证手机号("13800138000")   → "格式正确"
结果2 = 验证手机号("123")           → "手机号必须是11位"
结果3 = 验证手机号("23800138000")   → "手机号格式不正确"</code></pre>
                    </div>
                    <p><strong>好处：</strong>写一次，到处用，如果要改规则，只改一个地方</p>
                </div>
                
                <h3>📦 模块就是"工具箱"</h3>
                <p>把相关的函数打包在一起，就是<strong>模块</strong>（也叫组件、类）。</p>
                
                <div class="example-box">
                    <h4>🧰 案例：用户管理模块</h4>
                    <div class="code-block">
                        <pre><code>模块：用户管理

  函数：注册用户(手机号, 密码)
    - 检查手机号是否已存在
    - 加密密码
    - 保存到数据库
    - 返回新用户ID
  
  函数：登录(手机号, 密码)
    - 查找用户
    - 验证密码
    - 生成登录凭证
    - 返回凭证
  
  函数：修改密码(用户ID, 旧密码, 新密码)
    - 验证旧密码
    - 加密新密码
    - 更新数据库
    - 返回成功/失败
  
  函数：获取用户信息(用户ID)
    - 查询数据库
    - 返回用户信息

结束模块</code></pre>
                    </div>
                </div>
                
                <h3>🎯 为什么要复用？</h3>
                
                <div class="info-box">
                    <h4>✅ 复用的好处</h4>
                    <table class="concept-table">
                        <tr>
                            <th>好处</th>
                            <th>解释</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>少写代码</td>
                            <td>写一次，到处用</td>
                            <td>验证手机号的功能，全APP共用</td>
                        </tr>
                        <tr>
                            <td>容易修改</td>
                            <td>改一处，全生效</td>
                            <td>改折扣计算规则，只改函数内部</td>
                        </tr>
                        <tr>
                            <td>减少错误</td>
                            <td>用经过测试的代码</td>
                            <td>用现成的支付模块，更安全</td>
                        </tr>
                        <tr>
                            <td>分工合作</td>
                            <td>不同人写不同模块</td>
                            <td>A写用户模块，B写订单模块</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="example-box">
                    <h4>📝 识别可复用的功能</h4>
                    <p>设计产品时，看看哪些功能可以做成"通用组件"：</p>
                    
                    <h5>常见的可复用组件</h5>
                    <table class="concept-table">
                        <tr>
                            <th>组件</th>
                            <th>使用场景</th>
                        </tr>
                        <tr>
                            <td>手机号输入框</td>
                            <td>登录、注册、绑定手机、修改手机号</td>
                        </tr>
                        <tr>
                            <td>地址选择器</td>
                            <td>添加收货地址、修改地址、定位</td>
                        </tr>
                        <tr>
                            <td>图片上传</td>
                            <td>上传头像、上传商品图、发带图评论</td>
                        </tr>
                        <tr>
                            <td>支付弹窗</td>
                            <td>商品购买、充值、打赏</td>
                        </tr>
                        <tr>
                            <td>分享面板</td>
                            <td>分享商品、分享文章、分享活动</td>
                        </tr>
                    </table>
                    
                    <p><strong>产品经理要做什么：</strong>设计时标注"这里用通用组件"，避免重复造轮子</p>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：什么是API？</h4>
                    <p>API就是<strong>函数的使用说明书</strong>，告诉你：</p>
                    <ul>
                        <li>这个函数是干嘛的</li>
                        <li>需要输入什么（参数）</li>
                        <li>会返回什么（结果）</li>
                    </ul>
                    <p><strong>例子：</strong>微信支付的API，告诉你怎么调用微信支付功能</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：什么是SDK？</h4>
                    <p>SDK就是<strong>工具包</strong>，里面包含了一堆现成的函数和模块。</p>
                    <p><strong>例子：</strong>高德地图SDK，里面包含了定位、导航、地图显示等功能，直接调用就行</p>
                </div>
                
                <div class="example-box">
                    <h4>Q3：改一个通用组件会影响哪些地方？</h4>
                    <p>所有用到这个组件的地方都会受影响。</p>
                    <p><strong>例子：</strong>改了"手机号输入框"的验证规则，登录、注册、绑定手机页面都会变</p>
                    <p><strong>产品经理要做什么：</strong>改通用组件前，要确认影响范围，避免意外改坏其他功能</p>
                </div>
            `
        },
        {
            id: 'db-1',
            categoryId: 'database',
            title: 'Excel式存储（关系型数据库）',
            difficulty: 'beginner',
            summary: '像Excel表格一样存储数据，理解表、行、列的概念。',
            content: `
                <h3>📊 数据库就像Excel表格</h3>
                <p>最常见的数据存储方式，就是像<strong>Excel表格</strong>一样，把数据一行一行地存起来。</p>
                
                <div class="example-box">
                    <h4>📋 用户表（就像Excel的一个Sheet）</h4>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">用户表</span></div>
                        <pre><code>| 用户ID | 手机号      | 昵称   | 注册时间   | 积分  |
|--------|-------------|--------|------------|-------|
| 1      | 13800138000 | 张三   | 2024-01-01 | 100   |
| 2      | 13900139000 | 李四   | 2024-01-02 | 50    |
| 3      | 13700137000 | 王五   | 2024-01-03 | 200   |</code></pre>
                    </div>
                    
                    <h5>表格里的术语</h5>
                    <table class="concept-table">
                        <tr>
                            <th>Excel叫法</th>
                            <th>数据库叫法</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>Sheet（工作表）</td>
                            <td>表（Table）</td>
                            <td>用户表、订单表、商品表</td>
                        </tr>
                        <tr>
                            <td>行（Row）</td>
                            <td>记录（Record）</td>
                            <td>张三这一行的信息</td>
                        </tr>
                        <tr>
                            <td>列（Column）</td>
                            <td>字段（Field）</td>
                            <td>手机号这一列</td>
                        </tr>
                        <tr>
                            <td>单元格</td>
                            <td>数据项</td>
                            <td>张三的手机号：13800138000</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🔗 表与表之间的关系</h3>
                <p>就像Excel里多个Sheet可以关联起来，数据库的表也可以关联。</p>
                
                <div class="example-box">
                    <h4>🛒 案例：用户和订单</h4>
                    <p><strong>用户表：</strong></p>
                    <div class="code-block">
                        <pre><code>| 用户ID | 昵称   | 手机号      |
|--------|--------|-------------|
| 1      | 张三   | 13800138000 |
| 2      | 李四   | 13900139000 |</code></pre>
                    </div>
                    
                    <p><strong>订单表：</strong></p>
                    <div class="code-block">
                        <pre><code>| 订单ID | 用户ID | 商品名称 | 金额  | 状态   |
|--------|--------|----------|-------|--------|
| A001   | 1      | iPhone   | 5999  | 已付款 |
| A002   | 1      | 耳机     | 199   | 待发货 |
| A003   | 2      | 充电器   | 99    | 已收货 |</code></pre>
                    </div>
                    
                    <p><strong>关联关系：</strong></p>
                    <ul>
                        <li>订单表里的"用户ID" = 用户表里的"用户ID"</li>
                        <li>通过用户ID，就能知道订单是谁下的</li>
                        <li>张三（用户ID=1）有2个订单：A001、A002</li>
                    </ul>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>📝 设计数据表时的 checklist</h4>
                    <ol>
                        <li><strong>需要几张表？</strong>
                            <ul>
                                <li>用户表：存用户信息</li>
                                <li>订单表：存订单信息</li>
                                <li>商品表：存商品信息</li>
                            </ul>
                        </li>
                        <li><strong>每张表有哪些字段？</strong>
                            <ul>
                                <li>必填字段：用户ID、手机号</li>
                                <li>可选字段：昵称、头像</li>
                            </ul>
                        </li>
                        <li><strong>表之间怎么关联？</strong>
                            <ul>
                                <li>订单表通过"用户ID"关联用户表</li>
                                <li>订单表通过"商品ID"关联商品表</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：什么是主键？</h4>
                    <p>主键就是每行的<strong>唯一标识</strong>，就像身份证号。</p>
                    <ul>
                        <li>不能重复（每个人的身份证号都不一样）</li>
                        <li>不能为空（每个人都有身份证号）</li>
                        <li>一般叫"ID"或"编号"</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q2：数据量很大会怎样？</h4>
                    <p>如果一张表有几千万行数据：</p>
                    <ul>
                        <li>查询会变慢</li>
                        <li>需要加"索引"（就像书的目录）</li>
                        <li>可能需要分表（把数据拆到多张表）</li>
                    </ul>
                    <p><strong>产品经理要做什么：</strong>和技术讨论数据量预期，提前规划</p>
                </div>
            `
        },
        {
            id: 'db-2',
            categoryId: 'database',
            title: '文件夹式存储（非关系型数据库）',
            difficulty: 'beginner',
            summary: '像文件夹一样灵活存储，适合存复杂、不规则的数据。',
            content: `
                <h3>📁 像文件夹一样存数据</h3>
                <p>除了Excel式的表格，还有一种更灵活的存储方式，就像<strong>电脑里的文件夹</strong>。</p>
                
                <div class="example-box">
                    <h4>📂 打个比方：档案柜</h4>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">档案柜结构</span></div>
                        <pre><code>档案柜（数据库）
├── 用户档案（集合）
│   ├── 张三的档案（文档）
│   │   ├── 姓名：张三
│   │   ├── 年龄：25
│   │   └── 爱好：["篮球", "音乐"]
│   └── 李四的档案（文档）
│       ├── 姓名：李四
│       ├── 职业：医生
│       └── 简介："我是一名医生..."
│
└── 商品档案（集合）
    ├── iPhone档案
    │   ├── 名称：iPhone 15
    │   ├── 价格：5999
    │   └── 参数：{颜色: ["黑", "白"], 内存: ["128G", "256G"]}
    └── 耳机档案
        ├── 名称：AirPods
        └── 价格：1999</code></pre>
                    </div>
                </div>
                
                <h3>📄 文档型数据库的特点</h3>
                
                <div class="info-box">
                    <h4>✅ 适合用文档型数据库的场景</h4>
                    <table class="concept-table">
                        <tr>
                            <th>场景</th>
                            <th>为什么适合</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>数据结构不固定</td>
                            <td>每条记录可以有不同的字段</td>
                            <td>用户资料，有的用户填了职业，有的没填</td>
                        </tr>
                        <tr>
                            <td>嵌套数据多</td>
                            <td>可以一层套一层</td>
                            <td>商品参数：颜色、尺寸、配置等</td>
                        </tr>
                        <tr>
                            <td>数据量大、访问频繁</td>
                            <td>读写速度快</td>
                            <td>日志记录、用户行为数据</td>
                        </tr>
                    </table>
                </div>
                
                <div class="example-box">
                    <h4>🛍️ 案例：商品信息存储</h4>
                    <p><strong>关系型数据库（表格）的问题：</strong></p>
                    <ul>
                        <li>手机有"内存"、"颜色"参数</li>
                        <li>衣服有"尺码"、"颜色"参数</li>
                        <li>食品有"保质期"、"配料"参数</li>
                        <li>很难用一张表存所有商品</li>
                    </ul>
                    
                    <p><strong>文档型数据库的解决方案：</strong></p>
                    <div class="code-block">
                        <pre><code>手机商品：
{
    "名称": "iPhone 15",
    "价格": 5999,
    "参数": {
        "颜色": ["黑色", "白色", "蓝色"],
        "内存": ["128GB", "256GB", "512GB"],
        "屏幕": "6.1英寸"
    }
}

衣服商品：
{
    "名称": "T恤",
    "价格": 99,
    "参数": {
        "尺码": ["S", "M", "L", "XL"],
        "颜色": ["红", "蓝", "白"],
        "材质": "纯棉"
    }
}</code></pre>
                    </div>
                    <p><strong>好处：</strong>每个商品可以有自己的参数，不用强行统一</p>
                </div>
                
                <h3>🔄 两种数据库怎么选？</h3>
                
                <div class="example-box">
                    <h4>📊 对比表</h4>
                    <table class="concept-table">
                        <tr>
                            <th></th>
                            <th>关系型数据库（Excel式）</th>
                            <th>文档型数据库（文件夹式）</th>
                        </tr>
                        <tr>
                            <td>像什么</td>
                            <td>Excel表格</td>
                            <td>文件夹、JSON文件</td>
                        </tr>
                        <tr>
                            <td>数据结构</td>
                            <td>固定，每行一样</td>
                            <td>灵活，每行可以不同</td>
                        </tr>
                        <tr>
                            <td>适合存</td>
                            <td>订单、用户账号</td>
                            <td>商品信息、日志、配置</td>
                        </tr>
                        <tr>
                            <td>例子</td>
                            <td>MySQL、Oracle</td>
                            <td>MongoDB、Redis</td>
                        </tr>
                    </table>
                </div>
                
                <div class="info-box">
                    <h4>💡 实际项目中怎么用？</h4>
                    <p>大多数项目<strong>两种都用</strong>：</p>
                    <ul>
                        <li>用户、订单 → 关系型数据库（数据严谨，不能丢）</li>
                        <li>商品详情、用户行为日志 → 文档型数据库（灵活，量大）</li>
                        <li>缓存数据 → Redis（内存数据库，超快）</li>
                    </ul>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：Redis是什么？</h4>
                    <p>Redis是一种<strong>内存数据库</strong>，速度超快，但断电数据就没了。</p>
                    <p><strong>适合存：</strong></p>
                    <ul>
                        <li>缓存（把常用数据放内存，查询快）</li>
                        <li>验证码（5分钟后过期）</li>
                        <li>在线人数（实时变化）</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q2：数据丢了怎么办？</h4>
                    <p>数据库都有<strong>备份机制</strong>：</p>
                    <ul>
                        <li>定期自动备份（每天、每小时）</li>
                        <li>主从复制（数据同时存多份）</li>
                        <li>云数据库自动备份</li>
                    </ul>
                    <p><strong>产品经理要做什么：</strong>确认核心数据有备份策略</p>
                </div>
            `
        },
        {
            id: 'db-3',
            categoryId: 'database',
            title: '怎么查数据？',
            difficulty: 'beginner',
            summary: '理解查询的基本逻辑，知道怎么从数据库里找到想要的数据。',
            content: `
                <h3>🔍 查数据就像找文件</h3>
                <p>从数据库查数据，就像你在电脑上<strong>找文件</strong>一样，有不同的找法。</p>
                
                <div class="example-box">
                    <h4>📂 找文件的几种方式</h4>
                    <table class="concept-table">
                        <tr>
                            <th>找法</th>
                            <th>例子</th>
                            <th>数据库对应</th>
                        </tr>
                        <tr>
                            <td>按名字找</td>
                            <td>找"合同.pdf"</td>
                            <td>按ID查</td>
                        </tr>
                        <tr>
                            <td>按类型找</td>
                            <td>找所有图片</td>
                            <td>按类型查</td>
                        </tr>
                        <tr>
                            <td>按时间找</td>
                            <td>找最近一周的文件</td>
                            <td>按时间范围查</td>
                        </tr>
                        <tr>
                            <td>按内容找</td>
                            <td>搜索文件里的关键词</td>
                            <td>模糊查询</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎯 常见的查询方式</h3>
                
                <div class="example-box">
                    <h4>1️⃣ 精确查询（按ID查）</h4>
                    <p>知道具体ID，查唯一的一条记录。</p>
                    <div class="code-block">
                        <pre><code>查用户ID=123的信息

结果：
| 用户ID | 昵称 | 手机号      |
|--------|------|-------------|
| 123    | 张三 | 13800138000 |</code></pre>
                    </div>
                    <p><strong>场景：</strong>查看个人资料、查看订单详情</p>
                </div>
                
                <div class="example-box">
                    <h4>2️⃣ 条件查询（按条件筛选）</h4>
                    <p>查符合某些条件的记录。</p>
                    <div class="code-block">
                        <pre><code>查所有积分大于100的用户

结果：
| 用户ID | 昵称 | 积分 |
|--------|------|------|
| 123    | 张三 | 200  |
| 125    | 李四 | 150  |
| 128    | 王五 | 300  |</code></pre>
                    </div>
                    <p><strong>场景：</strong>筛选VIP用户、查找未付款订单</p>
                </div>
                
                <div class="example-box">
                    <h4>3️⃣ 模糊查询（搜索）</h4>
                    <p>不记得完整信息，只记得一部分。</p>
                    <div class="code-block">
                        <pre><code>查昵称包含"张"的用户

结果：
| 用户ID | 昵称   |
|--------|--------|
| 123    | 张三   |
| 124    | 张三丰 |
| 125    | 小张   |</code></pre>
                    </div>
                    <p><strong>场景：</strong>搜索商品、搜索用户</p>
                </div>
                
                <div class="example-box">
                    <h4>4️⃣ 排序查询</h4>
                    <p>按某个字段排序后显示。</p>
                    <div class="code-block">
                        <pre><code>查所有用户，按积分从高到低排序

结果：
| 用户ID | 昵称 | 积分 |
|--------|------|------|
| 128    | 王五 | 300  | ← 第一名
| 123    | 张三 | 200  | ← 第二名
| 125    | 李四 | 150  | ← 第三名</code></pre>
                    </div>
                    <p><strong>场景：</strong>排行榜、按价格排序</p>
                </div>
                
                <div class="example-box">
                    <h4>5️⃣ 分页查询</h4>
                    <p>数据太多，一次只显示一部分。</p>
                    <div class="code-block">
                        <pre><code>总共有1000个商品
每页显示20个

第1页：显示第1-20个
第2页：显示第21-40个
第3页：显示第41-60个
...</code></pre>
                    </div>
                    <p><strong>场景：</strong>商品列表、订单列表</p>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>📝 设计查询功能时的 checklist</h4>
                    <ol>
                        <li><strong>用户会怎么找数据？</strong>
                            <ul>
                                <li>按关键词搜索？</li>
                                <li>按条件筛选？</li>
                                <li>按时间排序？</li>
                            </ul>
                        </li>
                        <li><strong>默认显示什么？</strong>
                            <ul>
                                <li>默认按时间倒序（最新的在前）？</li>
                                <li>默认按热度排序？</li>
                            </ul>
                        </li>
                        <li><strong>数据量大怎么办？</strong>
                            <ul>
                                <li>需要分页吗？</li>
                                <li>每页显示多少条？</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：为什么搜索有时候很慢？</h4>
                    <p>可能的原因：</p>
                    <ul>
                        <li>数据量太大（几百万条）</li>
                        <li>没有加索引（就像书没有目录）</li>
                        <li>搜索条件太复杂</li>
                    </ul>
                    <p><strong>优化方法：</strong>加索引、用搜索引擎（如Elasticsearch）</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：什么是索引？</h4>
                    <p>索引就像<strong>书的目录</strong>，让你快速找到内容。</p>
                    <ul>
                        <li>没索引：从头到尾一条条找（慢）</li>
                        <li>有索引：直接跳到对应位置（快）</li>
                    </ul>
                    <p><strong>产品经理要做什么：</strong>和技术确认常用查询字段是否加了索引</p>
                </div>
            `
        },
        {
            id: 'db-4',
            categoryId: 'database',
            title: '删了还能找回吗？',
            difficulty: 'beginner',
            summary: '理解数据的增删改查，特别是删除和恢复机制。',
            content: `
                <h3>🗑️ 删除不是真的删除</h3>
                <p>在大多数系统里，"删除"数据并不是真的从数据库删掉，而是<strong>标记为已删除</strong>。</p>
                
                <div class="example-box">
                    <h4>📋 两种删除方式</h4>
                    <table class="concept-table">
                        <tr>
                            <th>方式</th>
                            <th>实际做了什么</th>
                            <th>能恢复吗</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>软删除</td>
                            <td>加个"已删除"标记</td>
                            <td>✅ 能</td>
                            <td>删除订单、删除文章</td>
                        </tr>
                        <tr>
                            <td>硬删除</td>
                            <td>真正从数据库删掉</td>
                            <td>❌ 不能</td>
                            <td>清理日志、清空回收站</td>
                        </tr>
                    </table>
                </div>
                
                <h3>✏️ 数据的增删改查</h3>
                
                <div class="example-box">
                    <h4>📊 四种操作</h4>
                    <div class="code-block">
                        <pre><code>1. 增（Create）- 插入新数据
   新用户注册 → 往用户表加一条记录

2. 删（Delete）- 删除数据
   用户删除订单 → 给订单加"已删除"标记

3. 改（Update）- 修改数据
   用户改昵称 → 更新用户表的昵称字段

4. 查（Read）- 查询数据
   查看订单列表 → 从订单表查数据</code></pre>
                    </div>
                    <p>合起来叫 <strong>CRUD</strong>，是数据库最基本的四个操作。</p>
                </div>
                
                <h3>🔄 软删除的实现</h3>
                
                <div class="example-box">
                    <h4>📁 案例：文章删除</h4>
                    <p><strong>文章表结构：</strong></p>
                    <div class="code-block">
                        <pre><code>| 文章ID | 标题         | 内容      | 作者 | 是否删除 | 删除时间 |
|--------|--------------|-----------|------|----------|----------|
| 1      | 你好世界     | 内容...   | 张三 | 否       | -        |
| 2      | 技术分享     | 内容...   | 李四 | 是       | 2024-01-15 |
| 3      | 产品心得     | 内容...   | 张三 | 否       | -        |</code></pre>
                    </div>
                    
                    <p><strong>用户看到的：</strong></p>
                    <ul>
                        <li>文章1 ✅ 可见</li>
                        <li>文章2 ❌ 不可见（显示"已删除"或看不到）</li>
                        <li>文章3 ✅ 可见</li>
                    </ul>
                    
                    <p><strong>恢复文章：</strong></p>
                    <ul>
                        <li>把"是否删除"改成"否"</li>
                        <li>文章2就恢复了</li>
                    </ul>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>📝 设计删除功能时的 checklist</h4>
                    <ol>
                        <li><strong>需要软删除还是硬删除？</strong>
                            <ul>
                                <li>用户重要数据 → 软删除（可恢复）</li>
                                <li>临时数据、日志 → 硬删除</li>
                            </ul>
                        </li>
                        <li><strong>谁能删除？</strong>
                            <ul>
                                <li>用户自己能删自己的？</li>
                                <li>管理员能删所有的？</li>
                            </ul>
                        </li>
                        <li><strong>删除前要不要确认？</strong>
                            <ul>
                                <li>重要操作 → 弹窗确认</li>
                                <li>普通操作 → 直接删除</li>
                            </ul>
                        </li>
                        <li><strong>删除后去哪了？</strong>
                            <ul>
                                <li>有"回收站"吗？</li>
                                <li>多久后彻底删除？</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：为什么有些数据删不掉？</h4>
                    <p>可能的原因：</p>
                    <ul>
                        <li>数据被其他数据引用了（外键约束）</li>
                        <li>没有删除权限</li>
                        <li>系统保护（防止误删）</li>
                    </ul>
                    <p><strong>例子：</strong>不能删除有订单的用户，因为订单表引用了用户ID</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：数据被误删了怎么办？</h4>
                    <p>恢复方法：</p>
                    <ul>
                        <li>软删除 → 直接恢复标记</li>
                        <li>有备份 → 从备份恢复</li>
                        <li>没备份 → 找数据恢复公司（贵且不保证）</li>
                    </ul>
                    <p><strong>产品经理要做什么：</strong>核心数据一定要有备份策略</p>
                </div>
                
                <div class="example-box">
                    <h4>Q3：修改数据有记录吗？</h4>
                    <p>重要的系统会有<strong>操作日志</strong>，记录：</p>
                    <ul>
                        <li>谁修改的</li>
                        <li>什么时候修改的</li>
                        <li>修改前是什么</li>
                        <li>修改后是什么</li>
                    </ul>
                    <p><strong>产品经理要做什么：</strong>核心数据（订单金额、用户余额）修改要有日志</p>
                </div>
            `
        },
        {
            id: 'front-1',
            categoryId: 'frontend',
            title: '苹果和安卓的区别',
            difficulty: 'beginner',
            summary: '理解iOS和Android的差异，知道为什么有些功能两个平台不一样。',
            content: `
                <h3>📱 两个不同的世界</h3>
                <p>苹果手机（iOS）和安卓手机（Android）是两个完全不同的系统，就像<strong>中文和英文</strong>，虽然都能表达意思，但写法完全不同。</p>
                
                <div class="example-box">
                    <h4>📊 iOS vs Android 对比</h4>
                    <table class="concept-table">
                        <tr>
                            <th></th>
                            <th>iOS（苹果）</th>
                            <th>Android（安卓）</th>
                        </tr>
                        <tr>
                            <td>开发公司</td>
                            <td>Apple</td>
                            <td>Google</td>
                        </tr>
                        <tr>
                            <td>编程语言</td>
                            <td>Swift / Objective-C</td>
                            <td>Kotlin / Java</td>
                        </tr>
                        <tr>
                            <td>应用商店</td>
                            <td>App Store（审核严格）</td>
                            <td>应用宝、华为市场等（较宽松）</td>
                        </tr>
                        <tr>
                            <td>用户群体</td>
                            <td>相对高端，付费意愿强</td>
                            <td>覆盖广，各种价位都有</td>
                        </tr>
                        <tr>
                            <td>系统版本</td>
                            <td>更新快，用户升级积极</td>
                            <td>碎片化严重，版本多</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🔒 为什么有些功能iOS不让做？</h3>
                
                <div class="info-box">
                    <h4>📋 iOS的限制（苹果管得严）</h4>
                    <table class="concept-table">
                        <tr>
                            <th>功能</th>
                            <th>iOS</th>
                            <th>Android</th>
                        </tr>
                        <tr>
                            <td>应用内购买</td>
                            <td>必须用苹果支付（抽成30%）</td>
                            <td>可以用微信/支付宝</td>
                        </tr>
                        <tr>
                            <td>后台运行</td>
                            <td>限制很严，容易被系统杀掉</td>
                            <td>相对宽松</td>
                        </tr>
                        <tr>
                            <td>获取设备信息</td>
                            <td>限制多，保护隐私</td>
                            <td>相对宽松</td>
                        </tr>
                        <tr>
                            <td>推送通知</td>
                            <td>必须用苹果推送（APNs）</td>
                            <td>可以用第三方推送</td>
                        </tr>
                    </table>
                </div>
                
                <div class="example-box">
                    <h4>💰 案例：为什么iOS充值比安卓贵？</h4>
                    <p>你在APP里买虚拟商品（比如游戏币、会员）：</p>
                    <ul>
                        <li><strong>iOS：</strong>必须用苹果支付，苹果抽30%</li>
                        <li><strong>Android：</strong>可以用微信/支付宝，没有额外抽成</li>
                    </ul>
                    <p><strong>结果：</strong>同样的商品，iOS价格可能是安卓的1.3倍</p>
                    <p><strong>产品经理要做什么：</strong>设计付费功能时，考虑是否统一价格，还是按平台差异化定价</p>
                </div>
                
                <h3>🎨 界面设计的差异</h3>
                
                <div class="example-box">
                    <h4>📱 两个平台的设计规范</h4>
                    <table class="concept-table">
                        <tr>
                            <th>元素</th>
                            <th>iOS风格</th>
                            <th>Android风格</th>
                        </tr>
                        <tr>
                            <td>返回按钮</td>
                            <td>一般在左下角，带文字</td>
                            <td>一般在左上角，箭头图标</td>
                        </tr>
                        <tr>
                            <td>底部导航</td>
                            <td>Tab Bar（底部固定）</td>
                            <td>Bottom Navigation（类似）</td>
                        </tr>
                        <tr>
                            <td>弹窗</td>
                            <td>居中显示，圆角</td>
                            <td>底部弹出或居中</td>
                        </tr>
                        <tr>
                            <td>字体</td>
                            <td>默认苹方字体</td>
                            <td>默认Roboto字体</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>✅ 设计APP时的 checklist</h4>
                    <ol>
                        <li><strong>这个功能两个平台都能做吗？</strong>
                            <ul>
                                <li>有些功能iOS限制多，要提前确认</li>
                            </ul>
                        </li>
                        <li><strong>界面要统一还是按平台规范？</strong>
                            <ul>
                                <li>统一风格：开发成本低，但可能不符合平台习惯</li>
                                <li>按平台规范：用户体验好，但开发成本高</li>
                            </ul>
                        </li>
                        <li><strong>测试要覆盖哪些机型？</strong>
                            <ul>
                                <li>iOS：iPhone 12/13/14/15系列</li>
                                <li>Android：华为、小米、OPPO、vivo主流机型</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：为什么同一个APP，iOS和安卓功能不一样？</h4>
                    <p>可能的原因：</p>
                    <ul>
                        <li>iOS政策限制（比如支付、后台运行）</li>
                        <li>开发资源有限，先做一个平台</li>
                        <li>两个平台的用户群体不同，需求不同</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q2：开发一个APP要多久？</h4>
                    <p>参考时间：</p>
                    <ul>
                        <li><strong>简单APP：</strong>1-2个月（如展示型APP）</li>
                        <li><strong>中等复杂度：</strong>3-6个月（如电商APP）</li>
                        <li><strong>复杂APP：</strong>6个月以上（如社交、游戏APP）</li>
                    </ul>
                    <p><strong>注意：</strong>这是单平台的时间，如果iOS和安卓都要，时间翻倍或并行开发</p>
                </div>
            `
        },
        {
            id: 'front-2',
            categoryId: 'frontend',
            title: '界面上的按钮文字',
            difficulty: 'beginner',
            summary: '理解前端开发的基本概念，知道界面是怎么画出来的。',
            content: `
                <h3>🎨 界面是怎么画出来的？</h3>
                <p>你看到的APP界面，其实是程序员用代码"画"出来的。就像你用乐高积木搭房子一样，他们用代码积木搭界面。</p>
                
                <div class="example-box">
                    <h4>🧱 界面元素 = 积木</h4>
                    <table class="concept-table">
                        <tr>
                            <th>你看到的</th>
                            <th>程序员叫法</th>
                            <th>像什么积木</th>
                        </tr>
                        <tr>
                            <td>文字</td>
                            <td>Text / Label</td>
                            <td>印字的积木块</td>
                        </tr>
                        <tr>
                            <td>按钮</td>
                            <td>Button</td>
                            <td>可以按的积木块</td>
                        </tr>
                        <tr>
                            <td>输入框</td>
                            <td>Input / TextField</td>
                            <td>可以写字的积木块</td>
                        </tr>
                        <tr>
                            <td>图片</td>
                            <td>Image</td>
                            <td>贴画的积木块</td>
                        </tr>
                        <tr>
                            <td>列表</td>
                            <td>List / TableView</td>
                            <td>一排排的积木</td>
                        </tr>
                    </table>
                </div>
                
                <h3>📐 布局：怎么排列这些积木？</h3>
                
                <div class="example-box">
                    <h4>📱 登录页面的布局</h4>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">界面结构</span></div>
                        <pre><code>页面（大容器）
├── 顶部：Logo图片
├── 中间：
│   ├── 手机号输入框
│   ├── 密码输入框
│   └── 忘记密码？（文字按钮）
├── 底部：
│   ├── 登录按钮（红色，大）
│   └── 注册账号（文字按钮）
└── 最底部：第三方登录（微信、QQ图标）</code></pre>
                    </div>
                </div>
                
                <h3>🎨 样式：让界面好看</h3>
                
                <div class="example-box">
                    <h4>🖌️ 按钮的样式属性</h4>
                    <div class="code-block">
                        <pre><code>一个按钮可以设置：
- 背景颜色（红色、蓝色、白色）
- 文字颜色（白色、黑色）
- 文字大小（14号字、16号字）
- 圆角（直角、圆角）
- 边框（有边框、无边框）
- 大小（宽度、高度）
- 位置（在页面哪里）</code></pre>
                    </div>
                </div>
                
                <h3>👆 交互：点击后发生什么？</h3>
                
                <div class="example-box">
                    <h4>🎯 按钮点击的逻辑</h4>
                    <div class="code-block">
                        <pre><code>登录按钮被点击后：
1. 检查手机号输入框是否为空
   → 如果为空，提示"请输入手机号"
   → 如果不为空，继续

2. 检查密码输入框是否为空
   → 如果为空，提示"请输入密码"
   → 如果不为空，继续

3. 显示加载动画（转圈圈）

4. 发送登录请求给服务器

5. 等待服务器返回结果
   → 成功：保存登录信息，跳转首页
   → 失败：提示"手机号或密码错误"</code></pre>
                    </div>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>📝 给程序员的设计稿要包含什么？</h4>
                    <ol>
                        <li><strong>界面布局：</strong>每个元素的位置、大小</li>
                        <li><strong>样式规范：</strong>颜色、字体、间距</li>
                        <li><strong>交互说明：</strong>点击后发生什么</li>
                        <li><strong>异常状态：</strong>加载中、加载失败、空数据</li>
                        <li><strong>不同屏幕适配：</strong>小屏手机、大屏手机、iPad</li>
                    </ol>
                </div>
                
                <div class="example-box">
                    <h4>⚠️ 常见的设计问题</h4>
                    <table class="concept-table">
                        <tr>
                            <th>问题</th>
                            <th>后果</th>
                            <th>解决方法</th>
                        </tr>
                        <tr>
                            <td>文字太多，超出按钮</td>
                            <td>显示不全，很难看</td>
                            <td>限制字数，或让按钮自适应宽度</td>
                        </tr>
                        <tr>
                            <td>没考虑小屏手机</td>
                            <td>内容被截断，按钮点不到</td>
                            <td>提供适配方案，或支持滚动</td>
                        </tr>
                        <tr>
                            <td>图片太大</td>
                            <td>加载慢，耗流量</td>
                            <td>压缩图片，或用缩略图</td>
                        </tr>
                        <tr>
                            <td>颜色对比度不够</td>
                            <td>看不清，不符合无障碍标准</td>
                            <td>检查对比度，确保可读性</td>
                        </tr>
                    </table>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：为什么设计稿和实际效果不一样？</h4>
                    <p>可能的原因：</p>
                    <ul>
                        <li>不同手机屏幕尺寸不同</li>
                        <li>字体在不同系统显示效果不同</li>
                        <li>颜色在不同屏幕有偏差</li>
                        <li>程序员实现有误差</li>
                    </ul>
                    <p><strong>建议：</strong>在多种真机上测试，不要只看设计稿</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：什么是响应式设计？</h4>
                    <p>界面能<strong>自动适应</strong>不同屏幕大小。</p>
                    <p><strong>例子：</strong></p>
                    <ul>
                        <li>小屏手机：一列显示</li>
                        <li>大屏手机：两列显示</li>
                        <li>iPad：三列显示</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'front-3',
            categoryId: 'frontend',
            title: '网页和APP的区别',
            difficulty: 'beginner',
            summary: '理解H5、小程序、原生APP的区别，知道什么时候用什么。',
            content: `
                <h3>🌐 三种前端形态</h3>
                <p>用户可以在手机上通过三种方式使用你的产品：<strong>网页（H5）</strong>、<strong>小程序</strong>、<strong>原生APP</strong>。</p>
                
                <div class="example-box">
                    <h4>📊 三种方式对比</h4>
                    <table class="concept-table">
                        <tr>
                            <th></th>
                            <th>网页（H5）</th>
                            <th>小程序</th>
                            <th>原生APP</th>
                        </tr>
                        <tr>
                            <td>怎么打开</td>
                            <td>浏览器输入网址</td>
                            <td>微信/支付宝里打开</td>
                            <td>下载安装，点图标</td>
                        </tr>
                        <tr>
                            <td>开发成本</td>
                            <td>低</td>
                            <td>中</td>
                            <td>高</td>
                        </tr>
                        <tr>
                            <td>用户体验</td>
                            <td>一般</td>
                            <td>较好</td>
                            <td>最好</td>
                        </tr>
                        <tr>
                            <td>功能限制</td>
                            <td>多（受浏览器限制）</td>
                            <td>较多（受平台限制）</td>
                            <td>少（几乎都能做）</td>
                        </tr>
                        <tr>
                            <td>推广难度</td>
                            <td>低（分享链接）</td>
                            <td>低（分享卡片）</td>
                            <td>高（要下载）</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎯 什么时候用什么？</h3>
                
                <div class="example-box">
                    <h4>📱 选择建议</h4>
                    <table class="concept-table">
                        <tr>
                            <th>场景</th>
                            <th>推荐方案</th>
                            <th>原因</th>
                        </tr>
                        <tr>
                            <td>活动页面、宣传页</td>
                            <td>H5</td>
                            <td>开发快，分享方便</td>
                        </tr>
                        <tr>
                            <td>轻量级工具</td>
                            <td>小程序</td>
                            <td>不用下载，即用即走</td>
                        </tr>
                        <tr>
                            <td>复杂功能、高频使用</td>
                            <td>原生APP</td>
                            <td>体验好，功能强</td>
                        </tr>
                        <tr>
                            <td>创业公司MVP</td>
                            <td>小程序</td>
                            <td>成本低，验证快</td>
                        </tr>
                    </table>
                </div>
                
                <h3>💡 混合开发</h3>
                
                <div class="info-box">
                    <h4>🔄 一套代码，多个平台</h4>
                    <p>现在有很多技术可以<strong>一次开发，多处运行</strong>：</p>
                    <ul>
                        <li><strong>React Native / Flutter：</strong>一套代码生成iOS和Android APP</li>
                        <li><strong>uni-app / Taro：</strong>一套代码生成H5、小程序、APP</li>
                    </ul>
                    <p><strong>优点：</strong>开发快、成本低</p>
                    <p><strong>缺点：</strong>性能可能不如原生，某些功能受限</p>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="example-box">
                    <h4>📝 产品形态决策 checklist</h4>
                    <ol>
                        <li><strong>用户使用频率？</strong>
                            <ul>
                                <li>每天用 → APP</li>
                                <li>偶尔用 → 小程序或H5</li>
                            </ul>
                        </li>
                        <li><strong>功能复杂程度？</strong>
                            <ul>
                                <li>需要摄像头、蓝牙等硬件 → APP</li>
                                <li>简单展示、下单 → 小程序</li>
                            </ul>
                        </li>
                        <li><strong>预算和时间？</strong>
                            <ul>
                                <li>紧 → 小程序或H5</li>
                                <li>充裕 → APP</li>
                            </ul>
                        </li>
                        <li><strong>推广方式？</strong>
                            <ul>
                                <li>靠社交传播 → 小程序（分享方便）</li>
                                <li>靠应用商店 → APP</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：小程序和H5有什么区别？</h4>
                    <p>主要区别：</p>
                    <ul>
                        <li><strong>运行环境：</strong>小程序在微信里运行，H5在浏览器里运行</li>
                        <li><strong>功能：</strong>小程序能调用微信的能力（支付、扫码、定位），H5受限较多</li>
                        <li><strong>体验：</strong>小程序更接近APP，H5更像网页</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q2：已经有了APP，还要做小程序吗？</h4>
                    <p><strong>建议做：</strong></p>
                    <ul>
                        <li>小程序是流量入口，用户不用下载就能体验</li>
                        <li>可以从小程序引流到APP</li>
                        <li>覆盖不习惯下载APP的用户群体</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'front-4',
            categoryId: 'frontend',
            title: '做APP的三种方式',
            difficulty: 'beginner',
            summary: '了解原生开发、混合开发、跨平台开发的区别和适用场景。',
            content: `
                <h3>🔨 三种开发方式</h3>
                <p>做APP有三种主流方式，各有优缺点。</p>
                
                <div class="example-box">
                    <h4>📊 三种方式对比</h4>
                    <table class="concept-table">
                        <tr>
                            <th></th>
                            <th>原生开发</th>
                            <th>混合开发</th>
                            <th>跨平台开发</th>
                        </tr>
                        <tr>
                            <td>代表技术</td>
                            <td>Swift/Kotlin</td>
                            <td>WebView + 原生</td>
                            <td>Flutter/React Native</td>
                        </tr>
                        <tr>
                            <td>一套代码？</td>
                            <td>❌ iOS和安卓分开写</td>
                            <td>⚠️ 部分共用</td>
                            <td>✅ 一套代码</td>
                        </tr>
                        <tr>
                            <td>性能</td>
                            <td>⭐⭐⭐ 最好</td>
                            <td>⭐⭐ 一般</td>
                            <td>⭐⭐⭐ 接近原生</td>
                        </tr>
                        <tr>
                            <td>开发成本</td>
                            <td>高（要两个团队）</td>
                            <td>中</td>
                            <td>低（一个团队）</td>
                        </tr>
                        <tr>
                            <td>维护成本</td>
                            <td>高</td>
                            <td>中</td>
                            <td>低</td>
                        </tr>
                    </table>
                </div>
                
                <h3>📱 1. 原生开发</h3>
                <p>用苹果和官方提供的语言和工具开发。</p>
                
                <div class="example-box">
                    <h4>✅ 适合原生开发的场景</h4>
                    <ul>
                        <li>大型APP（微信、抖音）</li>
                        <li>对性能要求极高（游戏、视频编辑）</li>
                        <li>需要大量硬件交互（蓝牙、NFC）</li>
                        <li>预算充足，追求极致体验</li>
                    </ul>
                </div>
                
                <h3>🌐 2. 混合开发</h3>
                <p>用网页技术（HTML/CSS/JS）开发，套一个原生外壳。</p>
                
                <div class="example-box">
                    <h4>✅ 适合混合开发的场景</h4>
                    <ul>
                        <li>内容展示型APP（新闻、资讯）</li>
                        <li>需要频繁更新内容的APP</li>
                        <li>预算有限，快速上线</li>
                        <li>内部工具类APP</li>
                    </ul>
                </div>
                
                <h3>⚡ 3. 跨平台开发</h3>
                <p>用一套代码，同时生成iOS和Android APP。</p>
                
                <div class="example-box">
                    <h4>主流跨平台技术</h4>
                    <table class="concept-table">
                        <tr>
                            <th>技术</th>
                            <th>开发语言</th>
                            <th>代表APP</th>
                        </tr>
                        <tr>
                            <td>Flutter</td>
                            <td>Dart</td>
                            <td>闲鱼、美团、支付宝部分页面</td>
                        </tr>
                        <tr>
                            <td>React Native</td>
                            <td>JavaScript</td>
                            <td>Facebook、Instagram、Discord</td>
                        </tr>
                        <tr>
                            <td>uni-app</td>
                            <td>Vue</td>
                            <td>很多中小型APP</td>
                        </tr>
                    </table>
                </div>
                
                <div class="info-box">
                    <h4>✅ 适合跨平台开发的场景</h4>
                    <ul>
                        <li>创业团队，人力有限</li>
                        <li>需要同时上线iOS和安卓</li>
                        <li>界面复杂但交互不复杂</li>
                        <li>追求开发效率</li>
                    </ul>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="example-box">
                    <h4>📝 技术选型 checklist</h4>
                    <table class="concept-table">
                        <tr>
                            <th>考虑因素</th>
                            <th>问题</th>
                        </tr>
                        <tr>
                            <td>预算</td>
                            <td>有多少开发预算？能养几个开发？</td>
                        </tr>
                        <tr>
                            <td>时间</td>
                            <td>什么时候必须上线？</td>
                        </tr>
                        <tr>
                            <td>功能</td>
                            <td>需要调用哪些硬件功能？</td>
                        </tr>
                        <tr>
                            <td>性能</td>
                            <td>对流畅度要求高吗？</td>
                        </tr>
                        <tr>
                            <td>维护</td>
                            <td>后续迭代频率？</td>
                        </tr>
                    </table>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：大厂用什么技术？</h4>
                    <p>大厂通常是<strong>混合策略</strong>：</p>
                    <ul>
                        <li>核心功能用原生（保证性能）</li>
                        <li>非核心用跨平台或H5（提高效率）</li>
                        <li>不同团队用不同技术</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q2：跨平台开发的APP能上架吗？</h4>
                    <p><strong>可以上架。</strong></p>
                    <p>Flutter和React Native生成的就是原生APP，App Store和各大应用市场都接受。</p>
                </div>
            `
        },
        {
            id: 'back-1',
            categoryId: 'backend',
            title: '后端用什么写？',
            difficulty: 'beginner',
            summary: '了解主流后端编程语言，知道不同语言的适用场景。',
            content: `
                <h3>🖥️ 后端开发语言</h3>
                <p>后端（服务端）可以用多种编程语言写，就像你可以用中文、英文、法文表达同一个意思。</p>
                
                <div class="example-box">
                    <h4>📊 主流后端语言对比</h4>
                    <table class="concept-table">
                        <tr>
                            <th>语言</th>
                            <th>特点</th>
                            <th>适合场景</th>
                            <th>代表公司</th>
                        </tr>
                        <tr>
                            <td>Java</td>
                            <td>稳定、生态完善、企业首选</td>
                            <td>大型企业应用、金融系统</td>
                            <td>阿里、京东、美团</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>简单易学、开发快</td>
                            <td>数据分析、AI、快速原型</td>
                            <td>字节、知乎、豆瓣</td>
                        </tr>
                        <tr>
                            <td>Go</td>
                            <td>高性能、并发强</td>
                            <td>高并发服务、微服务</td>
                            <td>腾讯、百度、滴滴</td>
                        </tr>
                        <tr>
                            <td>Node.js</td>
                            <td>前后端统一语言、异步处理</td>
                            <td>实时应用、I/O密集型</td>
                            <td>淘宝部分业务、饿了么</td>
                        </tr>
                        <tr>
                            <td>PHP</td>
                            <td>简单、部署方便</td>
                            <td>中小型网站、快速开发</td>
                            <td>百度、微博早期</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎯 怎么选后端语言？</h3>
                
                <div class="info-box">
                    <h4>💡 选择建议</h4>
                    <table class="concept-table">
                        <tr>
                            <th>场景</th>
                            <th>推荐语言</th>
                            <th>原因</th>
                        </tr>
                        <tr>
                            <td>创业公司、快速验证</td>
                            <td>Python / Node.js</td>
                            <td>开发快，人少也能做</td>
                        </tr>
                        <tr>
                            <td>大型系统、要求高稳定</td>
                            <td>Java</td>
                            <td>成熟稳定，招人容易</td>
                        </tr>
                        <tr>
                            <td>高并发、性能要求高</td>
                            <td>Go / Java</td>
                            <td>性能优秀，并发处理好</td>
                        </tr>
                        <tr>
                            <td>数据分析、AI相关</td>
                            <td>Python</td>
                            <td>生态丰富，库多</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎓 产品经理需要关心吗？</h3>
                
                <div class="example-box">
                    <h4>🤔 产品经理要知道什么？</h4>
                    <p><strong>不需要：</strong>具体用什么语言写代码</p>
                    <p><strong>需要知道：</strong></p>
                    <ul>
                        <li>团队用什么语言（影响招人）</li>
                        <li>这种语言的优势和局限</li>
                        <li>性能瓶颈可能在哪里</li>
                    </ul>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：后端语言会影响APP性能吗？</h4>
                    <p>会，但影响有限。瓶颈通常在：</p>
                    <ul>
                        <li>数据库查询</li>
                        <li>网络传输</li>
                        <li>算法效率</li>
                    </ul>
                    <p>语言选择更多是开发效率和团队熟悉度的问题。</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：一个项目可以用多种语言吗？</h4>
                    <p><strong>可以。</strong>大厂通常这样：</p>
                    <ul>
                        <li>核心业务用Java（稳定）</li>
                        <li>数据分析用Python（方便）</li>
                        <li>网关层用Go（高性能）</li>
                    </ul>
                    <p>通过接口互相调用。</p>
                </div>
            `
        },
        {
            id: 'back-2',
            categoryId: 'backend',
            title: '接口文档怎么看？',
            difficulty: 'beginner',
            summary: '学会看懂接口文档，知道前后端怎么协作。',
            content: `
                <h3>📄 接口文档是什么？</h3>
                <p>接口文档就是<strong>前后端的"合同"</strong>，约定好：前端要什么数据，后端给什么数据。</p>
                
                <div class="example-box">
                    <h4>📝 接口文档示例：用户登录</h4>
                    <div class="code-block">
                        <div class="code-header"><span class="code-lang">接口文档</span></div>
                        <pre><code>【接口名称】用户登录
【接口地址】POST /api/user/login
【功能说明】用户输入手机号和密码，验证通过后返回登录凭证

【请求参数】
| 参数名   | 类型   | 必填 | 说明       |
|----------|--------|------|------------|
| phone    | string | 是   | 手机号     |
| password | string | 是   | 密码（MD5加密）|

【返回数据】
成功时：
{
    "code": 200,
    "message": "登录成功",
    "data": {
        "userId": "12345",
        "nickname": "张三",
        "token": "abc123def456"
    }
}

失败时：
{
    "code": 400,
    "message": "手机号或密码错误",
    "data": null
}</code></pre>
                    </div>
                </div>
                
                <h3>🔍 接口文档的关键要素</h3>
                
                <div class="example-box">
                    <h4>📋 一份完整的接口文档包含</h4>
                    <table class="concept-table">
                        <tr>
                            <th>要素</th>
                            <th>说明</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>接口地址</td>
                            <td>访问这个接口的URL</td>
                            <td>/api/user/login</td>
                        </tr>
                        <tr>
                            <td>请求方法</td>
                            <td>GET（查）、POST（增）、PUT（改）、DELETE（删）</td>
                            <td>POST</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td>前端要传给后端的数据</td>
                            <td>手机号、密码</td>
                        </tr>
                        <tr>
                            <td>返回数据</td>
                            <td>后端返回给前端的数据</td>
                            <td>用户信息、Token</td>
                        </tr>
                        <tr>
                            <td>错误码</td>
                            <td>不同错误对应的代码</td>
                            <td>200成功、400参数错误</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎯 产品经理怎么看接口文档？</h3>
                
                <div class="info-box">
                    <h4>✅ 关注点</h4>
                    <ol>
                        <li><strong>功能覆盖：</strong>需要的功能都有接口吗？</li>
                        <li><strong>数据完整：</strong>返回的数据够不够用？</li>
                        <li><strong>错误处理：</strong>各种异常情况有处理吗？</li>
                        <li><strong>性能：</strong>接口响应时间要求是多少？</li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：接口改了怎么办？</h4>
                    <p>接口改动会影响前后端，需要：</p>
                    <ul>
                        <li>提前沟通，约定好改动时间</li>
                        <li>更新接口文档</li>
                        <li>通知所有相关人员</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q2：什么是RESTful接口？</h4>
                    <p>一种接口设计规范，简单理解：</p>
                    <ul>
                        <li>GET /users 获取用户列表</li>
                        <li>GET /users/123 获取ID为123的用户</li>
                        <li>POST /users 创建用户</li>
                        <li>PUT /users/123 修改用户</li>
                        <li>DELETE /users/123 删除用户</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'back-3',
            categoryId: 'backend',
            title: '服务器是什么？',
            difficulty: 'beginner',
            summary: '理解服务器的概念，知道云服务器和物理服务器的区别。',
            content: `
                <h3>🖥️ 服务器就是24小时开机的电脑</h3>
                <p>服务器本质上就是一台<strong>一直开机的电脑</strong>，专门用来提供服务。</p>
                
                <div class="example-box">
                    <h4>🏠 打个比方：餐厅</h4>
                    <table class="concept-table">
                        <tr>
                            <th>餐厅</th>
                            <th>互联网</th>
                        </tr>
                        <tr>
                            <td>餐厅店面</td>
                            <td>服务器</td>
                        </tr>
                        <tr>
                            <td>厨师</td>
                            <td>后端程序</td>
                        </tr>
                        <tr>
                            <td>菜单</td>
                            <td>接口文档</td>
                        </tr>
                        <tr>
                            <td>顾客</td>
                            <td>用户/前端</td>
                        </tr>
                    </table>
                </div>
                
                <h3>☁️ 云服务器 vs 物理服务器</h3>
                
                <div class="example-box">
                    <h4>📊 两种服务器的区别</h4>
                    <table class="concept-table">
                        <tr>
                            <th></th>
                            <th>物理服务器</th>
                            <th>云服务器</th>
                        </tr>
                        <tr>
                            <td>像什么</td>
                            <td>自己买电脑放家里</td>
                            <td>租别人的电脑用</td>
                        </tr>
                        <tr>
                            <td>成本</td>
                            <td>一次性投入大</td>
                            <td>按月付费，弹性</td>
                        </tr>
                        <tr>
                            <td>维护</td>
                            <td>需要自己维护</td>
                            <td>服务商维护</td>
                        </tr>
                        <tr>
                            <td>扩展</td>
                            <td>买新机器</td>
                            <td>点几下鼠标升级</td>
                        </tr>
                        <tr>
                            <td>适合</td>
                            <td>大企业、特殊需求</td>
                            <td>创业公司、中小企业</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🌐 主流云服务商</h3>
                
                <div class="example-box">
                    <h4>☁️ 国内云服务商</h4>
                    <table class="concept-table">
                        <tr>
                            <th>厂商</th>
                            <th>特点</th>
                        </tr>
                        <tr>
                            <td>阿里云</td>
                            <td>市场份额最大，生态完善</td>
                        </tr>
                        <tr>
                            <td>腾讯云</td>
                            <td>游戏、社交领域强</td>
                        </tr>
                        <tr>
                            <td>华为云</td>
                            <td>政企客户多，安全强</td>
                        </tr>
                        <tr>
                            <td>AWS（亚马逊）</td>
                            <td>国际业务首选</td>
                        </tr>
                    </table>
                </div>
                
                <h3>💰 服务器成本</h3>
                
                <div class="example-box">
                    <h4>📊 成本构成</h4>
                    <table class="concept-table">
                        <tr>
                            <th>项目</th>
                            <th>说明</th>
                            <th>大概价格</th>
                        </tr>
                        <tr>
                            <td>云服务器</td>
                            <td>基础计算资源</td>
                            <td>几百~几千/月</td>
                        </tr>
                        <tr>
                            <td>数据库</td>
                            <td>数据存储</td>
                            <td>几百~几千/月</td>
                        </tr>
                        <tr>
                            <td>带宽</td>
                            <td>网络流量</td>
                            <td>按流量计费</td>
                        </tr>
                        <tr>
                            <td>CDN</td>
                            <td>加速静态资源</td>
                            <td>按流量计费</td>
                        </tr>
                        <tr>
                            <td>存储</td>
                            <td>图片、视频等文件</td>
                            <td>按容量计费</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>💡 需要关注的服务器指标</h4>
                    <ul>
                        <li><strong>CPU使用率：</strong>服务器忙不忙</li>
                        <li><strong>内存使用率：</strong>内存够不够用</li>
                        <li><strong>带宽：</strong>网络够不够快</li>
                        <li><strong>响应时间：</strong>接口返回快不快</li>
                        <li><strong>错误率：</strong>有多少请求失败了</li>
                    </ul>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：服务器会宕机吗？</h4>
                    <p>会，原因可能是：</p>
                    <ul>
                        <li>访问量太大，服务器扛不住</li>
                        <li>程序有bug，导致崩溃</li>
                        <li>硬件故障</li>
                        <li>网络问题</li>
                    </ul>
                    <p><strong>解决方案：</strong>多部署几台服务器（集群），一台挂了其他还能用</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：什么是扩容？</h4>
                    <p>就是<strong>加服务器</strong>。</p>
                    <ul>
                        <li>垂直扩容：给现有服务器升级配置（加CPU、加内存）</li>
                        <li>水平扩容：加更多服务器</li>
                    </ul>
                    <p><strong>例子：</strong>双11前，淘宝会增加几千台服务器应对流量高峰</p>
                </div>
            `
        },
        {
            id: 'back-4',
            categoryId: 'backend',
            title: '接口基础：产品与服务端的"沟通协议"',
            difficulty: 'beginner',
            summary: '理解接口的本质，它是前端与服务端、服务端与数据库之间的"沟通通道"。',
            content: `
                <h3>🔌 接口是什么？</h3>
                <p>接口（API）就是<strong>产品与服务端的"沟通协议"</strong>，规定了数据传递的格式、方式和内容。</p>
                
                <div class="example-box">
                    <h4>🏠 打个比方：餐厅点餐</h4>
                    <table class="concept-table">
                        <tr>
                            <th>餐厅场景</th>
                            <th>互联网产品</th>
                        </tr>
                        <tr>
                            <td>顾客（你）</td>
                            <td>前端（APP/网页）</td>
                        </tr>
                        <tr>
                            <td>服务员</td>
                            <td>接口</td>
                        </tr>
                        <tr>
                            <td>厨房</td>
                            <td>服务端</td>
                        </tr>
                        <tr>
                            <td>菜品</td>
                            <td>数据</td>
                        </tr>
                    </table>
                    <p><strong>接口就像服务员：</strong>你告诉服务员要什么菜，服务员去厨房下单，厨房做好后服务员把菜端给你。</p>
                </div>
                
                <h3>🔄 接口的三个角色</h3>
                
                <div class="example-box">
                    <h4>📊 接口连接的三方</h4>
                    <table class="concept-table">
                        <tr>
                            <th>角色</th>
                            <th>做什么</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>前端（APP/网页）</td>
                            <td>发起请求，展示数据</td>
                            <td>你点击"登录"按钮</td>
                        </tr>
                        <tr>
                            <td>接口</td>
                            <td>传递数据，约定格式</td>
                            <td>把账号密码发给服务端</td>
                        </tr>
                        <tr>
                            <td>服务端/数据库</td>
                            <td>处理请求，返回结果</td>
                            <td>验证账号密码，返回登录成功</td>
                        </tr>
                    </table>
                </div>
                
                <h3>📝 接口规定了什么？</h3>
                
                <div class="info-box">
                    <h4>💡 接口的三要素</h4>
                    <ul>
                        <li><strong>格式：</strong>数据用什么格式传递（如JSON）</li>
                        <li><strong>方式：</strong>用什么方法传递（如GET、POST）</li>
                        <li><strong>内容：</strong>传递什么数据（如用户名、密码）</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>📋 一个登录接口的例子</h4>
                    <div class="code-block">
<pre>{
    "接口地址": "/api/login",
    "请求方式": "POST",
    "请求数据": {
        "username": "zhangsan",
        "password": "123456"
    },
    "返回数据": {
        "code": 200,
        "message": "登录成功",
        "data": {
            "userId": 10001,
            "nickname": "张三"
        }
    }
}</pre>
                    </div>
                </div>
                
                <h3>🎯 为什么产品经理要懂接口？</h3>
                
                <div class="info-box">
                    <h4>💡 产品经理的工作场景</h4>
                    <ul>
                        <li><strong>需求评审：</strong>和开发讨论功能怎么实现</li>
                        <li><strong>看接口文档：</strong>确认前端能拿到什么数据</li>
                        <li><strong>排查问题：</strong>功能不work时定位是前端还是后端问题</li>
                        <li><strong>对接第三方：</strong>接入微信支付、地图等功能需要看接口文档</li>
                    </ul>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：接口和API是一回事吗？</h4>
                    <p><strong>基本是一回事。</strong>API（Application Programming Interface）是应用程序接口的英文缩写，接口是中文说法。日常交流中两个词经常混用。</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：前端和后端都能写接口吗？</h4>
                    <p><strong>接口由后端开发。</strong>前端调用接口，后端定义和实现接口。产品经理主要看接口文档（后端写的）。</p>
                </div>
            `
        },
        {
            id: 'back-5',
            categoryId: 'backend',
            title: '常见接口类型：对应产品不同功能场景',
            difficulty: 'beginner',
            summary: '掌握4种常用接口类型，覆盖80%的产品场景，和数据库"增删改查"一一对应。',
            content: `
                <h3>📚 四种常用接口类型</h3>
                <p>接口按功能可分为4种常用类型，分别对应<strong>"查、增、改、删"</strong>四大操作，和数据库的"增删改查"一一对应。</p>
                
                <div class="example-box">
                    <h4>📊 四种接口类型速查表</h4>
                    <table class="concept-table">
                        <tr>
                            <th>操作类型</th>
                            <th>接口方法</th>
                            <th>产品场景</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>查（Read）</td>
                            <td>GET</td>
                            <td>查看、搜索、列表</td>
                            <td>查看商品列表、搜索用户</td>
                        </tr>
                        <tr>
                            <td>增（Create）</td>
                            <td>POST</td>
                            <td>新建、添加、发布</td>
                            <td>注册账号、发布文章、加入购物车</td>
                        </tr>
                        <tr>
                            <td>改（Update）</td>
                            <td>PUT/PATCH</td>
                            <td>修改、编辑、更新</td>
                            <td>修改个人信息、编辑文章</td>
                        </tr>
                        <tr>
                            <td>删（Delete）</td>
                            <td>DELETE</td>
                            <td>删除、移除</td>
                            <td>删除评论、移出购物车</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🔍 1. 查询接口（GET）</h3>
                
                <div class="example-box">
                    <h4>📱 产品场景</h4>
                    <ul>
                        <li>查看商品列表</li>
                        <li>搜索用户</li>
                        <li>获取个人信息</li>
                        <li>查看订单详情</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>📋 接口示例</h4>
                    <div class="code-block">
<pre>GET /api/users/123
// 获取ID为123的用户信息

返回：
{
    "code": 200,
    "data": {
        "id": 123,
        "name": "张三",
        "age": 25
    }
}</pre>
                    </div>
                </div>
                
                <h3>➕ 2. 新增接口（POST）</h3>
                
                <div class="example-box">
                    <h4>📱 产品场景</h4>
                    <ul>
                        <li>用户注册</li>
                        <li>发布文章/评论</li>
                        <li>加入购物车</li>
                        <li>创建订单</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>📋 接口示例</h4>
                    <div class="code-block">
<pre>POST /api/articles
// 发布新文章

请求数据：
{
    "title": "我的第一篇文章",
    "content": "文章内容..."
}

返回：
{
    "code": 200,
    "message": "发布成功",
    "data": {
        "articleId": 1001
    }
}</pre>
                    </div>
                </div>
                
                <h3>✏️ 3. 修改接口（PUT/PATCH）</h3>
                
                <div class="example-box">
                    <h4>📱 产品场景</h4>
                    <ul>
                        <li>修改个人信息</li>
                        <li>编辑文章</li>
                        <li>更新订单状态</li>
                        <li>修改密码</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>📋 接口示例</h4>
                    <div class="code-block">
<pre>PUT /api/users/123
// 修改ID为123的用户信息

请求数据：
{
    "name": "李四",
    "age": 28
}

返回：
{
    "code": 200,
    "message": "修改成功"
}</pre>
                    </div>
                </div>
                
                <h3>🗑️ 4. 删除接口（DELETE）</h3>
                
                <div class="example-box">
                    <h4>📱 产品场景</h4>
                    <ul>
                        <li>删除评论</li>
                        <li>移出购物车</li>
                        <li>取消收藏</li>
                        <li>删除地址</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>📋 接口示例</h4>
                    <div class="code-block">
<pre>DELETE /api/comments/456
// 删除ID为456的评论

返回：
{
    "code": 200,
    "message": "删除成功"
}</pre>
                    </div>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>💡 如何快速判断用什么接口？</h4>
                    <ul>
                        <li>用户在<strong>看</strong>东西 → GET接口</li>
                        <li>用户在<strong>创建</strong>东西 → POST接口</li>
                        <li>用户在<strong>修改</strong>东西 → PUT接口</li>
                        <li>用户在<strong>删除</strong>东西 → DELETE接口</li>
                    </ul>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：PUT和PATCH有什么区别？</h4>
                    <p><strong>PUT是全量更新，PATCH是部分更新。</strong></p>
                    <ul>
                        <li>PUT：需要传所有字段，没传的字段会被清空</li>
                        <li>PATCH：只传要修改的字段，其他字段不变</li>
                    </ul>
                    <p>实际工作中，两个经常混用，不用太纠结。</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：记住这4种就够了吗？</h4>
                    <p><strong>覆盖80%的场景够了。</strong>还有一些特殊场景：</p>
                    <ul>
                        <li>文件上传：特殊的POST接口</li>
                        <li>批量操作：一次操作多条数据</li>
                        <li>复杂查询：带筛选、排序、分页</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'data-1',
            categoryId: 'data',
            title: '核心数据指标',
            difficulty: 'beginner',
            summary: '了解产品经理必须关注的核心数据指标，用数据驱动产品决策。',
            content: `
                <h3>📊 数据是产品的指南针</h3>
                <p>产品经理不能靠感觉做决策，要<strong>用数据说话</strong>。了解一些核心指标，能帮你判断产品做得好不好。</p>
                
                <div class="example-box">
                    <h4>🎯 用户相关指标</h4>
                    <table class="concept-table">
                        <tr>
                            <th>指标</th>
                            <th>英文</th>
                            <th>含义</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>日活跃用户</td>
                            <td>DAU</td>
                            <td>每天有多少人用</td>
                            <td>DAU 10万</td>
                        </tr>
                        <tr>
                            <td>月活跃用户</td>
                            <td>MAU</td>
                            <td>每月有多少人用</td>
                            <td>MAU 100万</td>
                        </tr>
                        <tr>
                            <td>新增用户</td>
                            <td>-</td>
                            <td>每天新注册多少人</td>
                            <td>日新增 5000</td>
                        </tr>
                        <tr>
                            <td>留存率</td>
                            <td>Retention</td>
                            <td>用户用了之后，第二天/7天/30天还回来用的比例</td>
                            <td>次日留存 40%</td>
                        </tr>
                    </table>
                </div>
                
                <div class="example-box">
                    <h4>💰 商业相关指标</h4>
                    <table class="concept-table">
                        <tr>
                            <th>指标</th>
                            <th>英文</th>
                            <th>含义</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>转化率</td>
                            <td>CVR</td>
                            <td>多少人完成了你想让他做的事</td>
                            <td>购买转化率 5%</td>
                        </tr>
                        <tr>
                            <td>客单价</td>
                            <td>AOV</td>
                            <td>平均每个订单多少钱</td>
                            <td>客单价 200元</td>
                        </tr>
                        <tr>
                            <td>用户生命周期价值</td>
                            <td>LTV</td>
                            <td>一个用户在整个使用过程中贡献多少钱</td>
                            <td>LTV 500元</td>
                        </tr>
                        <tr>
                            <td>获客成本</td>
                            <td>CAC</td>
                            <td>获得一个新用户要花多少钱</td>
                            <td>CAC 50元</td>
                        </tr>
                    </table>
                </div>
                
                <h3>📈 关键公式</h3>
                
                <div class="info-box">
                    <h4>💡 产品经理必知的公式</h4>
                    <div class="code-block">
                        <pre><code>1. 留存率 = 第N天还活跃的用户数 ÷ 新增用户数 × 100%

2. 转化率 = 完成目标的用户数 ÷ 参与转化的用户数 × 100%

3. LTV > CAC 才能赚钱
   （用户贡献的价值 > 获得用户的成本）

4. 收入 = 流量 × 转化率 × 客单价</code></pre>
                    </div>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="example-box">
                    <h4>✅ 建立数据思维</h4>
                    <ol>
                        <li><strong>定义北极星指标</strong>
                            <ul>
                                <li>最能反映产品价值的1个指标</li>
                                <li>比如：微信是消息发送数，淘宝是GMV</li>
                            </ul>
                        </li>
                        <li><strong>建立指标体系</strong>
                            <ul>
                                <li>核心指标 → 过程指标 → 观察指标</li>
                            </ul>
                        </li>
                        <li><strong>设定目标</strong>
                            <ul>
                                <li>每个指标要有目标值</li>
                                <li>比如：本月DAU提升到15万</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：DAU怎么提升？</h4>
                    <p>提升DAU的方法：</p>
                    <ul>
                        <li>拉新：增加新用户（投放、活动）</li>
                        <li>促活：让老用户更活跃（推送、内容）</li>
                        <li>留存：减少用户流失（优化体验）</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q2：留存率多少算好？</h4>
                    <p>参考标准：</p>
                    <ul>
                        <li>次日留存 40%+ 算不错</li>
                        <li>7日留存 20%+ 算不错</li>
                        <li>30日留存 10%+ 算不错</li>
                    </ul>
                    <p>不同行业差异很大，要和同行对比。</p>
                </div>
            `
        },
        {
            id: 'data-2',
            categoryId: 'data',
            title: '数据怎么看？',
            difficulty: 'beginner',
            summary: '学会使用数据分析工具，理解埋点和事件追踪的概念。',
            content: `
                <h3>🔍 数据从哪来？</h3>
                <p>APP里的用户行为数据，是通过<strong>埋点</strong>收集的。就像在路上装摄像头，记录经过的车辆。</p>
                
                <div class="example-box">
                    <h4>📍 什么是埋点？</h4>
                    <p>在代码里加一段记录代码，当用户做了某件事，就记录下来。</p>
                    <div class="code-block">
                        <pre><code>用户点击"购买"按钮时，记录：
- 谁点的（用户ID）
- 什么时候点的（时间）
- 点的哪个按钮（事件名）
- 点的哪个商品（商品ID）

这些数据会发送到数据分析平台</code></pre>
                    </div>
                </div>
                
                <h3>📊 常用的数据分析工具</h3>
                
                <div class="example-box">
                    <h4>🛠️ 主流工具对比</h4>
                    <table class="concept-table">
                        <tr>
                            <th>工具</th>
                            <th>特点</th>
                            <th>适合</th>
                        </tr>
                        <tr>
                            <td>神策数据</td>
                            <td>功能全面，私有化部署</td>
                            <td>中大型企业</td>
                        </tr>
                        <tr>
                            <td>友盟+</td>
                            <td>阿里系，免费版够用</td>
                            <td>中小企业</td>
                        </tr>
                        <tr>
                            <td>GrowingIO</td>
                            <td>无埋点技术，易上手</td>
                            <td>创业公司</td>
                        </tr>
                        <tr>
                            <td>Google Analytics</td>
                            <td>免费，国际化</td>
                            <td>海外业务</td>
                        </tr>
                    </table>
                </div>
                
                <h3>🎯 埋点设计</h3>
                
                <div class="example-box">
                    <h4>📝 埋点文档示例</h4>
                    <div class="code-block">
                        <pre><code>【事件名】商品详情页浏览
【触发时机】进入商品详情页
【事件属性】
- 商品ID
- 商品名称
- 商品分类
- 商品价格
- 来源页面（从哪点进来的）

【事件名】加入购物车
【触发时机】点击"加入购物车"按钮
【事件属性】
- 商品ID
- 商品数量
- 用户ID</code></pre>
                    </div>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="info-box">
                    <h4>✅ 埋点设计 checklist</h4>
                    <ol>
                        <li><strong>想清楚要分析什么？</strong>
                            <ul>
                                <li>用户路径？转化漏斗？功能使用？</li>
                            </ul>
                        </li>
                        <li><strong>需要哪些事件？</strong>
                            <ul>
                                <li>页面浏览、按钮点击、表单提交...</li>
                            </ul>
                        </li>
                        <li><strong>每个事件需要哪些属性？</strong>
                            <ul>
                                <li>用户ID、时间、设备信息、业务属性...</li>
                            </ul>
                        </li>
                        <li><strong>什么时候埋？</strong>
                            <ul>
                                <li>最好在开发前就确定好埋点文档</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：埋点会拖慢APP吗？</h4>
                    <p>影响很小。埋点数据是异步发送的，不会阻塞用户操作。</p>
                    <p>但如果埋点太多，可能会增加APP体积和耗电量。</p>
                </div>
                
                <div class="example-box">
                    <h4>Q2：什么是无埋点？</h4>
                    <p>无埋点（可视化埋点）就是不用写代码，通过圈选界面元素来收集数据。</p>
                    <p><strong>优点：</strong>产品经理自己就能配置，不用等开发</p>
                    <p><strong>缺点：</strong>灵活性不如代码埋点</p>
                </div>
            `
        },
        {
            id: 'data-3',
            categoryId: 'data',
            title: '数据怎么展示？',
            difficulty: 'beginner',
            summary: '学会制作数据报表和看板，让数据更直观地指导决策。',
            content: `
                <h3>📈 数据可视化</h3>
                <p>把数据变成图表，更容易发现问题和趋势。</p>
                
                <div class="example-box">
                    <h4>📊 常用图表类型</h4>
                    <table class="concept-table">
                        <tr>
                            <th>图表</th>
                            <th>适合展示</th>
                            <th>例子</th>
                        </tr>
                        <tr>
                            <td>折线图</td>
                            <td>趋势变化</td>
                            <td>DAU随时间变化</td>
                        </tr>
                        <tr>
                            <td>柱状图</td>
                            <td>对比数据</td>
                            <td>各渠道新增用户对比</td>
                        </tr>
                        <tr>
                            <td>饼图</td>
                            <td>占比分布</td>
                            <td>用户设备分布</td>
                        </tr>
                        <tr>
                            <td>漏斗图</td>
                            <td>转化流程</td>
                            <td>注册→浏览→下单→支付</td>
                        </tr>
                        <tr>
                            <td>热力图</td>
                            <td>页面点击分布</td>
                            <td>用户点哪里最多</td>
                        </tr>
                    </table>
                </div>
                
                <h3>📋 数据报表</h3>
                
                <div class="example-box">
                    <h4>📝 日报/周报/月报内容</h4>
                    <div class="code-block">
                        <pre><code>【日报】
- 核心指标：DAU、新增、留存
- 与昨日对比：涨跌幅度
- 异常说明：为什么涨了/跌了
- 今日关注：要盯什么数据

【周报】
- 本周核心数据总结
- 主要功能数据表现
- 问题与风险
- 下周计划

【月报】
- 月度目标完成情况
- 用户增长分析
- 功能效果评估
- 下月规划</code></pre>
                    </div>
                </div>
                
                <h3>🎯 数据看板</h3>
                
                <div class="info-box">
                    <h4>💡 看板设计原则</h4>
                    <ol>
                        <li><strong>一页看完：</strong>核心指标在一屏内展示</li>
                        <li><strong>实时更新：</strong>关键数据实时刷新</li>
                        <li><strong>异常预警：</strong>数据异常时标红/发通知</li>
                        <li><strong>下钻分析：</strong>能点击查看详情</li>
                    </ol>
                </div>
                
                <div class="example-box">
                    <h4>📱 产品经理的数据看板示例</h4>
                    <div class="code-block">
                        <pre><code>第一行（核心指标）：
┌─────────┬─────────┬─────────┬─────────┐
│  DAU    │  新增   │  留存   │  收入   │
│  12.5万 │  5000   │  45%    │  50万   │
│  ↑5%    │  ↑10%   │  →0%    │  ↑8%    │
└─────────┴─────────┴─────────┴─────────┘

第二行（趋势图）：
┌─────────────────────────┬─────────────┐
│    DAU 7日趋势（折线图）  │ 渠道分布    │
│                         │ （饼图）     │
└─────────────────────────┴─────────────┘

第三行（转化漏斗）：
┌───────────────────────────────────────┐
│      购买转化漏斗（漏斗图）            │
│  浏览商品 → 加入购物车 → 下单 → 支付   │
│   10000  →   3000    →  1500 →  1200  │
└───────────────────────────────────────┘</code></pre>
                    </div>
                </div>
                
                <h3>🎓 产品经理工作指南</h3>
                
                <div class="example-box">
                    <h4>✅ 数据驱动决策的流程</h4>
                    <ol>
                        <li><strong>发现问题：</strong>看数据哪里异常</li>
                        <li><strong>分析原因：</strong>为什么这样？</li>
                        <li><strong>提出假设：</strong>可能是XX原因</li>
                        <li><strong>设计实验：</strong>做个A/B测试验证</li>
                        <li><strong>看结果：</strong>数据验证假设</li>
                        <li><strong>决策：</strong>全量上线或继续优化</li>
                    </ol>
                </div>
                
                <h3>❓ 常见问题</h3>
                
                <div class="example-box">
                    <h4>Q1：数据涨了，就是好吗？</h4>
                    <p>不一定，要看：</p>
                    <ul>
                        <li>为什么涨？（是产品改进还是外部因素）</li>
                        <li>有没有副作用？（比如DAU涨了但收入降了）</li>
                        <li>能不能持续？</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>Q2：什么是A/B测试？</h4>
                    <p>把用户分成两组，用不同方案，看哪组数据更好。</p>
                    <p><strong>例子：</strong></p>
                    <ul>
                        <li>A组：按钮是红色</li>
                        <li>B组：按钮是蓝色</li>
                        <li>看哪组的点击率更高</li>
                    </ul>
                </div>
            `
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = knowledgeData;
}
