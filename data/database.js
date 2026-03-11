/**
 * @fileoverview 数据存储原理模块
 * @description 包含 4 个知识点：db-1, db-2, db-3, db-4
 * @module data/database
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 导入模块数据
 * import { knowledge } from './database.js';
 * 
 * // 获取所有知识点
 * console.log(knowledge);
 * 
 * // 根据 categoryId 过滤
 * const items = knowledge.filter(item => item.categoryId === 'database');
 */

/**
 * 数据存储原理模块知识点数组
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
            id: 'db-1',
            categoryId: 'database',
            title: 'Excel式存储（关系型数据库）',
            difficulty: 'beginner',
            summary: '像Excel表格一样存储数据，理解表、行、列的概念。',
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p><strong>关系型数据库（RDBMS）</strong>基于关系模型，使用SQL语言进行数据操作。数据以表格形式存储，表与表之间通过外键建立关联。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node">
                                <div class="node-icon">📊</div>
                                <div class="node-title">表结构</div>
                                <div class="node-desc">Schema定义<br/>字段类型约束</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">🔗</div>
                                <div class="node-title">关系映射</div>
                                <div class="node-desc">外键关联<br/>一对一/一对多</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">⚡</div>
                                <div class="node-title">索引优化</div>
                                <div class="node-desc">B+树索引<br/>查询加速</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>主流关系型数据库对比</h5>
                    <table class="concept-table">
                        <tr>
                            <th>数据库</th>
                            <th>特点</th>
                            <th>适用场景</th>
                        </tr>
                        <tr>
                            <td>MySQL</td>
                            <td>开源、轻量、社区活跃</td>
                            <td>Web应用、中小型系统</td>
                        </tr>
                        <tr>
                            <td>PostgreSQL</td>
                            <td>功能强大、扩展性好</td>
                            <td>复杂查询、地理信息</td>
                        </tr>
                        <tr>
                            <td>Oracle</td>
                            <td>企业级、稳定可靠</td>
                            <td>金融、电信、大型企业</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>数据建模</h5>
                            <ul>
                                <li><strong>表结构设计</strong>：定义字段类型、长度、约束</li>
                                <li><strong>关系设计</strong>：一对一、一对多、多对多</li>
                                <li><strong>规范化</strong>：消除数据冗余，保证一致性</li>
                                <li><strong>索引设计</strong>：提升查询性能</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>数据操作</h5>
                            <ul>
                                <li><strong>CRUD操作</strong>：增删改查</li>
                                <li><strong>事务处理</strong>：ACID保证数据一致性</li>
                                <li><strong>复杂查询</strong>：JOIN、子查询、聚合</li>
                                <li><strong>数据备份</strong>：定期备份、灾难恢复</li>
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
                                <h5>电商订单系统</h5>
                                <p><strong>用户表</strong>：存储用户基本信息</p>
                                <p><strong>订单表</strong>：存储订单信息，关联用户ID</p>
                                <p><strong>商品表</strong>：存储商品信息</p>
                                <p><strong>订单商品关联表</strong>：多对多关系</p>
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
                                <p><strong>产品经理：</strong>"这个查询功能需要支持哪些筛选条件？数据量大吗？需要多快返回结果？"</p>
                                <p><strong>开发：</strong>"需要按时间、状态、用户三个维度筛选，预计数据量100万条，加索引后1秒内返回。"</p>
                            </div>
                        </div>
                    </div>
                    <div class="tips-box">
                        <h5>💡 数据库设计清单</h5>
                        <ul>
                            <li>需要存储哪些数据？字段类型是什么？</li>
                            <li>表与表之间的关系是什么？</li>
                            <li>查询频率高的字段需要加索引吗？</li>
                            <li>数据量预估有多大？需要分表吗？</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>用Excel表格的比喻理解关系型数据库，掌握表、行、列、主键、外键等核心概念，理解表与表之间的关联关系。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够理解数据库表结构设计，参与数据模型讨论，知道数据是怎么组织和存储的。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是数据存储模块的基础课程，帮助产品经理建立结构化数据思维，是理解数据管理的关键。</div>
                </div>
                
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
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>用文件夹的比喻理解非关系型数据库，掌握文档型数据库的特点，对比关系型和非关系型数据库的适用场景。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够判断什么数据适合用哪种数据库，理解灵活数据结构的存储方式。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是数据存储模块的进阶课程，帮助产品经理理解现代数据存储的多样性，做出合理的技术选型。</div>
                </div>
                
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
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>理解数据库查询的基本逻辑，掌握精确查询、条件查询、模糊查询、排序查询、分页查询等常用方式。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够设计合理的查询功能，理解搜索性能问题，参与查询优化讨论。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是数据存储模块的实战课程，帮助产品经理理解"查找数据"背后的技术原理。</div>
                </div>
                
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
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>理解数据的增删改查操作，区分软删除和硬删除，掌握数据恢复机制和操作日志的重要性。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够设计合理的数据删除策略，理解数据安全和备份的重要性。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是数据存储模块的安全课程，帮助产品经理建立数据安全意识，设计可靠的数据管理策略。</div>
                </div>
                
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
        }
];

// 浏览器环境：挂载到 window 对象
if (typeof window !== 'undefined') {
    window.databaseKnowledge = knowledge;
}

// Node.js 环境：CommonJS 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { knowledge };
}
