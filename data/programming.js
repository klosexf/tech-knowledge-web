/**
 * @fileoverview 编程入门知识模块
 * @description 包含 4 个知识点：prog-1, prog-2, prog-3, prog-4
 * @module data/programming
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 导入模块数据
 * import { knowledge } from './programming.js';
 * 
 * // 获取所有知识点
 * console.log(knowledge);
 * 
 * // 根据 categoryId 过滤
 * const items = knowledge.filter(item => item.categoryId === 'programming');
 */

/**
 * 编程入门知识模块知识点数组
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
                
                <h3>🎮 动手试试：代码的四个基本构件</h3>
                <p>理解了程序的执行逻辑，现在来动手体验一下代码的四个基本构件：<strong>变量、函数、条件、循环</strong>。</p>
                <p>这四个构件是所有程序的基础，就像乐高的四种基本积木块。掌握它们，你就能理解程序员在写什么。</p>
                
                <div class="interactive-demo-section" id="codeConceptsDemoArea"></div>
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
        }
];

// 浏览器环境：挂载到 window 对象
if (typeof window !== 'undefined') {
    window.programmingKnowledge = knowledge;
}

// Node.js 环境：CommonJS 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { knowledge };
}
