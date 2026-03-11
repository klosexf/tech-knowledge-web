/**
 * @fileoverview 前端开发模块
 * @description 包含 4 个知识点：front-1, front-2, front-3, front-4
 * @module data/frontend
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 导入模块数据
 * import { knowledge } from './frontend.js';
 * 
 * // 获取所有知识点
 * console.log(knowledge);
 * 
 * // 根据 categoryId 过滤
 * const items = knowledge.filter(item => item.categoryId === 'frontend');
 */

/**
 * 前端开发模块知识点数组
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
            id: 'front-1',
            categoryId: 'frontend',
            title: '苹果和安卓的区别',
            difficulty: 'beginner',
            summary: '理解iOS和Android的差异，知道为什么有些功能两个平台不一样。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>iOS和Android是两个完全不同的<strong>移动操作系统</strong>，它们在内核、开发语言、UI框架、应用生态等方面都有本质区别。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node">
                                <div class="node-icon">🍎</div>
                                <div class="node-title">iOS架构</div>
                                <div class="node-desc">Darwin内核<br/>Cocoa Touch框架</div>
                            </div>
                            <div class="diagram-arrow">VS</div>
                            <div class="diagram-node">
                                <div class="node-icon">🤖</div>
                                <div class="node-title">Android架构</div>
                                <div class="node-desc">Linux内核<br/>Android Framework</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>技术栈对比</h5>
                    <table class="concept-table">
                        <tr>
                            <th>维度</th>
                            <th>iOS</th>
                            <th>Android</th>
                        </tr>
                        <tr>
                            <td>操作系统内核</td>
                            <td>Darwin (XNU)</td>
                            <td>Linux Kernel</td>
                        </tr>
                        <tr>
                            <td>开发语言</td>
                            <td>Swift / Objective-C</td>
                            <td>Kotlin / Java</td>
                        </tr>
                        <tr>
                            <td>IDE</td>
                            <td>Xcode</td>
                            <td>Android Studio</td>
                        </tr>
                        <tr>
                            <td>UI框架</td>
                            <td>UIKit / SwiftUI</td>
                            <td>Jetpack Compose / XML</td>
                        </tr>
                        <tr>
                            <td>应用商店</td>
                            <td>App Store</td>
                            <td>Google Play + 第三方</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>iOS平台特点</h5>
                            <ul>
                                <li><strong>封闭生态</strong>：严格的审核机制，应用质量高</li>
                                <li><strong>设备统一</strong>：屏幕尺寸、系统版本相对统一</li>
                                <li><strong>开发效率</strong>：适配成本低，调试方便</li>
                                <li><strong>用户付费意愿高</strong>：适合付费应用</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>Android平台特点</h5>
                            <ul>
                                <li><strong>开放生态</strong>：自由度高，分发渠道多</li>
                                <li><strong>设备碎片化</strong>：需要适配各种屏幕和系统版本</li>
                                <li><strong>市场份额大</strong>：全球用户基数大</li>
                                <li><strong>定制性强</strong>：支持深度定制和扩展</li>
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
                                <h5>功能差异场景</h5>
                                <p><strong>场景</strong>：iOS不支持后台下载，Android支持</p>
                                <p><strong>原因</strong>：iOS对后台任务限制严格，省电优先</p>
                                <p><strong>解决方案</strong>：iOS使用后台URLSession，Android使用Service</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">2</div>
                            <div class="scenario-content">
                                <h5>支付功能场景</h5>
                                <p><strong>场景</strong>：iOS必须使用IAP内购，Android可用第三方支付</p>
                                <p><strong>原因</strong>：Apple政策要求虚拟商品必须走内购</p>
                                <p><strong>影响</strong>：iOS需要抽成30%，Android可以绕过</p>
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
                                <p><strong>产品经理：</strong>"这个功能iOS和Android都要有，做得一模一样。"</p>
                                <p><strong>开发：</strong>"iOS有限制，做不到和Android一样。"</p>
                                <p><strong>结果：</strong>功能被砍掉，或者体验差异大</p>
                            </div>
                        </div>
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"这个功能两个平台的差异是什么？iOS有什么限制？有没有替代方案能达到类似效果？"</p>
                                <p><strong>开发：</strong>"iOS后台限制严格，可以用推送通知的方式实现类似效果。"</p>
                                <p><strong>结果：</strong>找到可行方案，功能顺利上线</p>
                            </div>
                        </div>
                    </div>
                    <div class="tips-box">
                        <h5>💡 平台差异清单</h5>
                        <ul>
                            <li>iOS后台任务限制有哪些？</li>
                            <li>Android设备碎片化怎么处理？</li>
                            <li>两个平台的支付政策差异？</li>
                            <li>应用审核周期和规则差异？</li>
                            <li>推送通知机制差异？</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>对比iOS和Android两大移动操作系统的差异，包括开发语言、审核机制、用户群体、功能限制等关键维度。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够理解两个平台的技术差异，在产品设计时考虑平台特性，避免提出跨平台不可行的需求。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是前端开发模块的基础课程，帮助产品经理理解移动端开发的基本约束，为后续学习前端技术奠定基础。</div>
                </div>
                
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
                
                <div class="interactive-demo-section" id="iosAndroidDemoArea"></div>
            `
        },
{
            id: 'front-2',
            categoryId: 'frontend',
            title: '界面上的按钮文字',
            difficulty: 'beginner',
            summary: '理解前端开发的基本概念，知道界面是怎么画出来的。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>前端界面通过<strong>UI组件（UI Component）</strong>构建，每个组件对应一个可视化元素。组件系统是现代前端开发的核心概念。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node">
                                <div class="node-icon">📝</div>
                                <div class="node-title">声明式UI</div>
                                <div class="node-desc">描述界面长什么样<br/>框架自动渲染</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">🧩</div>
                                <div class="node-title">组件化</div>
                                <div class="node-desc">可复用的UI单元<br/>组合构建页面</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">🔄</div>
                                <div class="node-title">状态驱动</div>
                                <div class="node-desc">数据变化自动更新<br/>响应式渲染</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>主流UI框架对比</h5>
                    <table class="concept-table">
                        <tr>
                            <th>平台</th>
                            <th>框架</th>
                            <th>语言</th>
                            <th>特点</th>
                        </tr>
                        <tr>
                            <td>iOS</td>
                            <td>SwiftUI / UIKit</td>
                            <td>Swift</td>
                            <td>声明式 / 命令式</td>
                        </tr>
                        <tr>
                            <td>Android</td>
                            <td>Jetpack Compose</td>
                            <td>Kotlin</td>
                            <td>声明式UI</td>
                        </tr>
                        <tr>
                            <td>Web</td>
                            <td>React / Vue</td>
                            <td>JavaScript</td>
                            <td>组件化开发</td>
                        </tr>
                        <tr>
                            <td>跨平台</td>
                            <td>Flutter</td>
                            <td>Dart</td>
                            <td>自绘引擎</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>基础组件</h5>
                            <ul>
                                <li><strong>Text/Label</strong>：文字显示组件</li>
                                <li><strong>Button</strong>：可点击按钮组件</li>
                                <li><strong>Image</strong>：图片显示组件</li>
                                <li><strong>Input/TextField</strong>：输入框组件</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>布局组件</h5>
                            <ul>
                                <li><strong>Container</strong>：容器组件，包裹其他组件</li>
                                <li><strong>ListView</strong>：列表组件，滚动显示多项</li>
                                <li><strong>Stack</strong>：堆叠布局，层叠显示</li>
                                <li><strong>Grid</strong>：网格布局，行列排列</li>
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
                                <h5>登录页面组件</h5>
                                <p><strong>组件结构</strong>：Logo图片 + 标题文字 + 手机号输入框 + 密码输入框 + 登录按钮</p>
                                <p><strong>交互逻辑</strong>：点击登录按钮 → 验证输入 → 调用API → 跳转首页</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">2</div>
                            <div class="scenario-content">
                                <h5>商品列表组件</h5>
                                <p><strong>组件结构</strong>：ListView包裹多个商品卡片组件</p>
                                <p><strong>数据驱动</strong>：传入商品数组 → 自动渲染对应数量的卡片</p>
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
                                <p><strong>产品经理：</strong>"这里加个按钮，好看一点。"</p>
                                <p><strong>开发：</strong>"按钮放哪？多大？什么样式？点击后做什么？"</p>
                                <p><strong>结果：</strong>反复修改，浪费时间</p>
                            </div>
                        </div>
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"在页面底部添加一个主按钮，宽度占满屏幕，高度44px，蓝色背景白色文字'提交'，点击后调用提交接口。"</p>
                                <p><strong>开发：</strong>"明白了，使用主按钮样式，绑定提交事件。"</p>
                                <p><strong>结果：</strong>一次做对，效率高</p>
                            </div>
                        </div>
                    </div>
                    <div class="tips-box">
                        <h5>💡 UI组件沟通清单</h5>
                        <ul>
                            <li>组件类型是什么？（按钮/输入框/列表）</li>
                            <li>位置和大小？（坐标、宽高）</li>
                            <li>样式是什么？（颜色、字体、圆角）</li>
                            <li>交互行为？（点击、滑动、长按）</li>
                            <li>数据来源？（静态文字/动态数据）</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>理解前端界面的构成元素，包括文字、按钮、输入框等UI组件，以及布局、样式、交互的基本概念。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够看懂设计稿，理解前端开发的要素，能与技术准确描述界面需求。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是前端开发模块的核心课程，帮助产品经理理解界面是如何"画"出来的，提升设计评审能力。</div>
                </div>
                
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
                
                <div class="interactive-demo-section" id="uiBuilderDemoArea"></div>
            `
        },
{
            id: 'front-3',
            categoryId: 'frontend',
            title: '网页和APP的区别',
            difficulty: 'beginner',
            summary: '理解H5、小程序、原生APP的区别，知道什么时候用什么。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>三种前端形态在<strong>运行环境、技术栈、性能、能力</strong>等方面有本质区别，选择合适的形态取决于业务需求和资源投入。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node">
                                <div class="node-icon">🌐</div>
                                <div class="node-title">H5网页</div>
                                <div class="node-desc">浏览器运行<br/>跨平台最强</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">📱</div>
                                <div class="node-title">小程序</div>
                                <div class="node-desc">微信/支付宝<br/>无需安装</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">📲</div>
                                <div class="node-title">原生APP</div>
                                <div class="node-desc">系统级能力<br/>性能最优</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>技术栈对比</h5>
                    <table class="concept-table">
                        <tr>
                            <th>维度</th>
                            <th>H5网页</th>
                            <th>小程序</th>
                            <th>原生APP</th>
                        </tr>
                        <tr>
                            <td>技术栈</td>
                            <td>HTML/CSS/JS</td>
                            <td>WXML/WXSS/JS</td>
                            <td>Swift/Kotlin</td>
                        </tr>
                        <tr>
                            <td>运行环境</td>
                            <td>浏览器内核</td>
                            <td>小程序引擎</td>
                            <td>操作系统</td>
                        </tr>
                        <tr>
                            <td>性能</td>
                            <td>一般</td>
                            <td>较好</td>
                            <td>最优</td>
                        </tr>
                        <tr>
                            <td>系统能力</td>
                            <td>受限</td>
                            <td>部分开放</td>
                            <td>全部能力</td>
                        </tr>
                        <tr>
                            <td>分发成本</td>
                            <td>最低（链接直达）</td>
                            <td>低（扫码/搜索）</td>
                            <td>高（应用商店）</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>H5网页</h5>
                            <ul>
                                <li><strong>优势</strong>：开发快、分发易、跨平台</li>
                                <li><strong>劣势</strong>：性能差、能力受限、体验一般</li>
                                <li><strong>适用场景</strong>：营销活动、落地页、内容展示</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>小程序</h5>
                            <ul>
                                <li><strong>优势</strong>：无需安装、体验好、获客成本低</li>
                                <li><strong>劣势</strong>：平台限制、包体积限制</li>
                                <li><strong>适用场景</strong>：电商、工具、轻量级应用</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>原生APP</h5>
                            <ul>
                                <li><strong>优势</strong>：性能最优、能力完整、体验最佳</li>
                                <li><strong>劣势</strong>：开发成本高、分发难、更新慢</li>
                                <li><strong>适用场景</strong>：高频应用、游戏、复杂功能</li>
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
                                <h5>营销活动页</h5>
                                <p><strong>选择</strong>：H5网页</p>
                                <p><strong>原因</strong>：开发快、易传播、生命周期短</p>
                                <p><strong>示例</strong>：双11活动页、抽奖活动</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">2</div>
                            <div class="scenario-content">
                                <h5>电商购物</h5>
                                <p><strong>选择</strong>：小程序 + 原生APP</p>
                                <p><strong>原因</strong>：小程序获客，APP沉淀用户</p>
                                <p><strong>示例</strong>：京东、拼多多</p>
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
                                <p><strong>产品经理：</strong>"这个功能需要用到蓝牙，H5能做吗？小程序呢？原生APP呢？"</p>
                                <p><strong>开发：</strong>"H5不支持蓝牙，小程序支持部分蓝牙功能，原生APP支持完整蓝牙能力。建议用原生APP或小程序。"</p>
                            </div>
                        </div>
                    </div>
                    <div class="tips-box">
                        <h5>💡 技术选型清单</h5>
                        <ul>
                            <li>目标用户在哪里？（微信/浏览器/应用商店）</li>
                            <li>需要哪些系统能力？（相机/蓝牙/定位）</li>
                            <li>性能要求多高？（流畅度、响应速度）</li>
                            <li>开发预算和时间？</li>
                            <li>是否需要离线使用？</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>对比H5网页、小程序、原生APP三种前端形态的特点，包括开发成本、用户体验、功能限制等关键维度。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够根据业务场景选择合适的前端形态，理解不同形态的优劣势和适用场景。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是前端开发模块的决策课程，帮助产品经理在产品规划阶段做出正确的技术选型。</div>
                </div>
                
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
                
                <div class="interactive-demo-section" id="appTypesDemoArea"></div>
            `
        },
{
            id: 'front-4',
            categoryId: 'frontend',
            title: '做APP的三种方式',
            difficulty: 'beginner',
            summary: '了解原生开发、混合开发、跨平台开发的区别和适用场景。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>APP开发方式的选择涉及<strong>性能、开发效率、团队技术栈、维护成本</strong>等多方面因素。三种方式各有优劣，需要根据实际情况选择。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node">
                                <div class="node-icon">📱</div>
                                <div class="node-title">原生开发</div>
                                <div class="node-desc">Swift/Kotlin<br/>性能最优</div>
                            </div>
                            <div class="diagram-arrow">VS</div>
                            <div class="diagram-node">
                                <div class="node-icon">🌐</div>
                                <div class="node-title">混合开发</div>
                                <div class="node-desc">WebView<br/>开发最快</div>
                            </div>
                            <div class="diagram-arrow">VS</div>
                            <div class="diagram-node">
                                <div class="node-icon">🔄</div>
                                <div class="node-title">跨平台</div>
                                <div class="node-desc">Flutter/RN<br/>平衡方案</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>开发方式技术对比</h5>
                    <table class="concept-table">
                        <tr>
                            <th>维度</th>
                            <th>原生开发</th>
                            <th>混合开发</th>
                            <th>跨平台</th>
                        </tr>
                        <tr>
                            <td>技术栈</td>
                            <td>Swift + Kotlin</td>
                            <td>HTML/CSS/JS</td>
                            <td>Dart/JavaScript</td>
                        </tr>
                        <tr>
                            <td>性能</td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td>开发效率</td>
                            <td>⭐⭐</td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td>代码复用率</td>
                            <td>0%</td>
                            <td>70-80%</td>
                            <td>90%+</td>
                        </tr>
                        <tr>
                            <td>团队能力要求</td>
                            <td>需要iOS+Android两套人</td>
                            <td>前端开发即可</td>
                            <td>学习新框架</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>原生开发</h5>
                            <ul>
                                <li><strong>优势</strong>：性能最优、体验最佳、能力完整</li>
                                <li><strong>劣势</strong>：开发成本高、维护两套代码</li>
                                <li><strong>适用场景</strong>：游戏、高性能应用、金融类</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>混合开发</h5>
                            <ul>
                                <li><strong>优势</strong>：开发快、前端技术栈、易更新</li>
                                <li><strong>劣势</strong>：性能差、体验一般</li>
                                <li><strong>适用场景</strong>：内容类、工具类、快速迭代</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>跨平台开发</h5>
                            <ul>
                                <li><strong>优势</strong>：一套代码多端运行、性能接近原生</li>
                                <li><strong>劣势</strong>：学习成本、部分原生能力需桥接</li>
                                <li><strong>适用场景</strong>：大多数应用、创业公司</li>
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
                                <h5>游戏类应用</h5>
                                <p><strong>选择</strong>：原生开发</p>
                                <p><strong>原因</strong>：对性能要求极高，需要GPU加速</p>
                                <p><strong>示例</strong>：王者荣耀、原神</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">2</div>
                            <div class="scenario-content">
                                <h5>内容类应用</h5>
                                <p><strong>选择</strong>：混合开发或跨平台</p>
                                <p><strong>原因</strong>：内容展示为主，性能要求不高</p>
                                <p><strong>示例</strong>：新闻APP、电商APP</p>
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
                                <p><strong>产品经理：</strong>"我们预算有限，团队只有前端，但想要接近原生的体验，有什么方案？"</p>
                                <p><strong>开发：</strong>"推荐Flutter，一套代码同时生成iOS和Android应用，性能接近原生，前端学习成本也不高。"</p>
                            </div>
                        </div>
                    </div>
                    <div class="tips-box">
                        <h5>💡 开发方式选型清单</h5>
                        <ul>
                            <li>团队技术栈是什么？</li>
                            <li>性能要求有多高？</li>
                            <li>预算和时间限制？</li>
                            <li>是否需要频繁更新？</li>
                            <li>是否需要复杂动画和交互？</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>介绍原生开发、混合开发、跨平台开发三种APP开发方式，对比其开发成本、性能表现、维护难度。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够理解不同开发方式的特点，在项目启动时参与技术选型讨论，做出合理的决策。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是前端开发模块的进阶课程，帮助产品经理理解开发方式对项目的影响，提升项目管理能力。</div>
                </div>
                
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
                
                <div class="interactive-demo-section" id="devMethodsDemoArea"></div>
            `
        }
];

// 浏览器环境：挂载到 window 对象
if (typeof window !== 'undefined') {
    window.frontendKnowledge = knowledge;
}

// Node.js 环境：CommonJS 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { knowledge };
}
