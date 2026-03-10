/**
 * @fileoverview 数据分析模块
 * @description 包含 3 个知识点：data-1, data-2, data-3
 * @module data/data-analysis
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 导入模块数据
 * import { knowledge } from './data-analysis.js';
 * 
 * // 获取所有知识点
 * console.log(knowledge);
 * 
 * // 根据 categoryId 过滤
 * const items = knowledge.filter(item => item.categoryId === 'data');
 */

/**
 * 数据分析模块知识点数组
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
];

// 浏览器环境：挂载到 window 对象
if (typeof window !== 'undefined') {
    window.dataAnalysisKnowledge = knowledge;
}

// Node.js 环境：CommonJS 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { knowledge };
}
