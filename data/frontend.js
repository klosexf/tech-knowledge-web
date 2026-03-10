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
                
                <div class="interactive-demo-section" id="iosAndroidDemoArea"></div>
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
                
                <div class="interactive-demo-section" id="uiBuilderDemoArea"></div>
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
                
                <div class="interactive-demo-section" id="appTypesDemoArea"></div>
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
