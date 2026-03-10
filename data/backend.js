/**
 * @fileoverview 后端开发模块
 * @description 包含 5 个知识点：back-1, back-2, back-3, back-4, back-5
 * @module data/backend
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 导入模块数据
 * import { knowledge } from './backend.js';
 * 
 * // 获取所有知识点
 * console.log(knowledge);
 * 
 * // 根据 categoryId 过滤
 * const items = knowledge.filter(item => item.categoryId === 'backend');
 */

/**
 * 后端开发模块知识点数组
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
        }
];

// 浏览器环境：挂载到 window 对象
if (typeof window !== 'undefined') {
    window.backendKnowledge = knowledge;
}

// Node.js 环境：CommonJS 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { knowledge };
}
