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
            technicalContent: {
                principle: `
                    <section class="tech-module" data-module="principle">
                        <div class="module-header">
                            <span class="module-icon">🔬</span>
                            <h2>技术原理：数据类型系统</h2>
                        </div>
                        
                        <div class="highlight-box">
                            <blockquote>
                                <strong>数据类型系统（Type System）</strong>是编程语言用于定义、组织和操作数据的核心机制，决定了数据的存储方式、运算规则和合法性验证。
                            </blockquote>
                        </div>
                        
                        <h3>一、核心概念</h3>
                        
                        <h4>1.1 数据类型的本质</h4>
                        <p>在计算机世界中，<strong>数据类型</strong>是对数据的分类方式，它定义了：</p>
                        <ul class="feature-list">
                            <li><strong>数据的取值范围</strong>：如整数类型的最大值、最小值</li>
                            <li><strong>数据的存储格式</strong>：如字符串的编码方式、数字的二进制表示</li>
                            <li><strong>数据的操作规则</strong>：如数字可以加减乘除，字符串可以拼接</li>
                            <li><strong>数据的内存占用</strong>：不同类型占用不同的内存空间</li>
                        </ul>
                        
                        <h4>1.2 类型分类体系</h4>
                        <div class="tech-diagram">
                            <div class="diagram-flow">
                                <div class="diagram-node">
                                    <div class="node-icon">🔤</div>
                                    <div class="node-title">基本类型</div>
                                    <div class="node-desc">String / Number<br/>Boolean / Null</div>
                                </div>
                                <div class="diagram-arrow">→</div>
                                <div class="diagram-node">
                                    <div class="node-icon">📦</div>
                                    <div class="node-title">复合类型</div>
                                    <div class="node-desc">Array / Object<br/>Map / Set</div>
                                </div>
                                <div class="diagram-arrow">→</div>
                                <div class="diagram-node">
                                    <div class="node-icon">⚙️</div>
                                    <div class="node-title">内存存储</div>
                                    <div class="node-desc">栈 / 堆<br/>引用 / 值</div>
                                </div>
                            </div>
                        </div>
                        
                        <h3>二、技术特性</h3>
                        
                        <h4>2.1 基本类型特性</h4>
                        <ul class="feature-list">
                            <li><strong>按值存储</strong>：数据直接存储在变量所在的内存位置</li>
                            <li><strong>不可变</strong>：基本类型的值一旦创建就不能修改</li>
                            <li><strong>比较方式</strong>：通过值本身进行比较（=== 比较值和类型）</li>
                            <li><strong>内存分配</strong>：存储在<strong>栈内存</strong>中，访问速度快</li>
                        </ul>
                        
                        <h4>2.2 复合类型特性</h4>
                        <ul class="feature-list">
                            <li><strong>按引用存储</strong>：变量存储的是数据的内存地址（引用）</li>
                            <li><strong>可变</strong>：复合类型的内容可以修改</li>
                            <li><strong>比较方式</strong>：比较的是引用地址，而非内容</li>
                            <li><strong>内存分配</strong>：数据存储在<strong>堆内存</strong>中，变量存储引用</li>
                        </ul>
                        
                        <h4>2.3 类型转换规则</h4>
                        <div class="info-block">
                            <p><strong>隐式转换</strong>：JavaScript 在某些操作中自动进行类型转换</p>
                            <ul class="feature-list">
                                <li><code>"1" + 1</code> → <code>"11"</code>（数字转字符串）</li>
                                <li><code>"2" * 3</code> → <code>6</code>（字符串转数字）</li>
                                <li><code>!!"text"</code> → <code>true</code>（转布尔值）</li>
                            </ul>
                        </div>
                        
                        <h3>三、应用场景</h3>
                        
                        <h4>3.1 数据类型选型对比</h4>
                        <table class="concept-table">
                            <thead>
                                <tr>
                                    <th>类型名称</th>
                                    <th>核心特点</th>
                                    <th>适用场景</th>
                                    <th>局限性</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>String</strong></td>
                                    <td>字符序列，UTF-8编码，不可变</td>
                                    <td>文本内容、ID标识、手机号、邮箱</td>
                                    <td>不能直接进行数学运算</td>
                                </tr>
                                <tr>
                                    <td><strong>Number</strong></td>
                                    <td>64位浮点数（IEEE 754标准）</td>
                                    <td>数值计算、年龄、数量、评分</td>
                                    <td>浮点数精度问题，金额需谨慎</td>
                                </tr>
                                <tr>
                                    <td><strong>Boolean</strong></td>
                                    <td>仅有 true/false 两个值</td>
                                    <td>状态标记、开关控制、条件判断</td>
                                    <td>只能表示二元状态</td>
                                </tr>
                                <tr>
                                    <td><strong>Object</strong></td>
                                    <td>键值对集合，无序</td>
                                    <td>结构化数据、实体建模、配置项</td>
                                    <td>键只能是字符串或Symbol</td>
                                </tr>
                                <tr>
                                    <td><strong>Array</strong></td>
                                    <td>有序集合，有索引</td>
                                    <td>列表数据、队列、栈、批量处理</td>
                                    <td>查找效率低（O(n)）</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <h4>3.2 内存存储对比</h4>
                        <table class="concept-table">
                            <thead>
                                <tr>
                                    <th>存储方式</th>
                                    <th>存储内容</th>
                                    <th>适用类型</th>
                                    <th>特点</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>栈内存（Stack）</strong></td>
                                    <td>基本类型的值、引用类型的地址</td>
                                    <td>String、Number、Boolean</td>
                                    <td>空间小、速度快、自动释放</td>
                                </tr>
                                <tr>
                                    <td><strong>堆内存（Heap）</strong></td>
                                    <td>引用类型的实际数据</td>
                                    <td>Object、Array</td>
                                    <td>空间大、速度较慢、需垃圾回收</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                `,
                role: `
                    <section class="tech-module" data-module="role">
                        <div class="module-header">
                            <span class="module-icon">🎯</span>
                            <h2>核心作用：数据类型的价值</h2>
                        </div>
                        
                        <div class="highlight-box">
                            <blockquote>
                                数据类型系统是程序世界的"分类法则"，它让计算机知道如何<strong>存储</strong>、<strong>处理</strong>和<strong>验证</strong>数据，是构建可靠软件的基石。
                            </blockquote>
                        </div>
                        
                        <h3>一、核心概念</h3>
                        
                        <h4>1.1 类型系统的本质</h4>
                        <p><strong>类型系统</strong>是一套规则集合，定义了：</p>
                        <ul class="feature-list">
                            <li><strong>数据分类规则</strong>：如何区分不同种类的数据</li>
                            <li><strong>操作约束规则</strong>：每种类型支持哪些操作</li>
                            <li><strong>类型兼容规则</strong>：不同类型之间如何转换</li>
                            <li><strong>类型安全规则</strong>：如何防止类型错误</li>
                        </ul>
                        
                        <h4>1.2 数据建模的本质</h4>
                        <p><strong>数据建模</strong>是将现实世界的事物抽象为程序中的数据结构：</p>
                        <ul class="feature-list">
                            <li><strong>实体抽象</strong>：将"用户"、"订单"等概念转化为数据对象</li>
                            <li><strong>属性定义</strong>：确定每个实体包含哪些字段</li>
                            <li><strong>关系建立</strong>：定义实体之间的关联关系</li>
                            <li><strong>约束设置</strong>：为数据添加验证规则</li>
                        </ul>
                        
                        <h3>二、技术特性</h3>
                        
                        <div class="role-grid">
                            <div class="role-card">
                                <h4>类型系统特性</h4>
                                <ul class="feature-list">
                                    <li><strong>类型检查</strong>
                                        <ul>
                                            <li>编译期检查：静态类型语言（TypeScript、Java）</li>
                                            <li>运行期检查：动态类型语言（JavaScript、Python）</li>
                                        </ul>
                                    </li>
                                    <li><strong>内存分配</strong>
                                        <ul>
                                            <li>根据类型确定存储空间大小</li>
                                            <li>决定数据存储在栈还是堆</li>
                                        </ul>
                                    </li>
                                    <li><strong>运算规则</strong>
                                        <ul>
                                            <li>数字支持算术运算</li>
                                            <li>字符串支持拼接和截取</li>
                                        </ul>
                                    </li>
                                    <li><strong>序列化支持</strong>
                                        <ul>
                                            <li>JSON/XML 格式转换</li>
                                            <li>数据持久化存储</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="role-card">
                                <h4>数据建模特性</h4>
                                <ul class="feature-list">
                                    <li><strong>实体设计</strong>
                                        <ul>
                                            <li>用户实体：{ id, name, phone, email }</li>
                                            <li>订单实体：{ orderId, userId, amount, status }</li>
                                        </ul>
                                    </li>
                                    <li><strong>关系映射</strong>
                                        <ul>
                                            <li>一对一：用户-档案</li>
                                            <li>一对多：用户-订单</li>
                                            <li>多对多：学生-课程</li>
                                        </ul>
                                    </li>
                                    <li><strong>字段约束</strong>
                                        <ul>
                                            <li>必填校验：手机号不能为空</li>
                                            <li>格式校验：邮箱格式验证</li>
                                        </ul>
                                    </li>
                                    <li><strong>性能优化</strong>
                                        <ul>
                                            <li>索引设计：加快查询速度</li>
                                            <li>分表策略：大数据量处理</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <h3>三、应用场景</h3>
                        
                        <h4>3.1 类型系统应用场景</h4>
                        <table class="concept-table">
                            <thead>
                                <tr>
                                    <th>应用场景</th>
                                    <th>技术实现</th>
                                    <th>业务价值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>接口参数校验</strong></td>
                                    <td>使用 TypeScript 定义接口类型</td>
                                    <td>提前发现参数错误，减少运行时异常</td>
                                </tr>
                                <tr>
                                    <td><strong>数据格式转换</strong></td>
                                    <td>JSON.stringify() / JSON.parse()</td>
                                    <td>实现前后端数据传输</td>
                                </tr>
                                <tr>
                                    <td><strong>状态机设计</strong></td>
                                    <td>使用枚举类型定义状态</td>
                                    <td>确保状态流转的合法性</td>
                                </tr>
                                <tr>
                                    <td><strong>API 文档生成</strong></td>
                                    <td>基于类型定义自动生成文档</td>
                                    <td>提高前后端协作效率</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <h4>3.2 数据建模应用场景</h4>
                        <table class="concept-table">
                            <thead>
                                <tr>
                                    <th>应用场景</th>
                                    <th>建模方法</th>
                                    <th>关键考虑</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>用户系统</strong></td>
                                    <td>用户实体 + 权限实体 + 角色实体</td>
                                    <td>数据安全、隐私保护</td>
                                </tr>
                                <tr>
                                    <td><strong>订单系统</strong></td>
                                    <td>订单实体 + 商品实体 + 用户实体</td>
                                    <td>事务一致性、状态流转</td>
                                </tr>
                                <tr>
                                    <td><strong>内容系统</strong></td>
                                    <td>文章实体 + 评论实体 + 标签实体</td>
                                    <td>搜索优化、关联查询</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                `,
                businessScenario: `
                    <section class="tech-module" data-module="businessScenario">
                        <div class="module-header">
                            <span class="module-icon">💼</span>
                            <h2>业务场景：数据类型的实际应用</h2>
                        </div>
                        
                        <div class="highlight-box">
                            <blockquote>
                                在实际业务开发中，<strong>正确的数据类型选择</strong>直接影响系统的稳定性、性能和用户体验。以下是典型的业务场景分析。
                            </blockquote>
                        </div>
                        
                        <h3>一、核心概念</h3>
                        
                        <h4>1.1 业务数据的特点</h4>
                        <p>业务数据通常具有以下特征：</p>
                        <ul class="feature-list">
                            <li><strong>多样性</strong>：文本、数字、日期、文件等多种形式</li>
                            <li><strong>关联性</strong>：数据之间存在复杂的关联关系</li>
                            <li><strong>时效性</strong>：数据有创建时间、更新时间、过期时间</li>
                            <li><strong>敏感性</strong>：部分数据涉及用户隐私，需要加密存储</li>
                        </ul>
                        
                        <h4>1.2 数据类型选择原则</h4>
                        <ul class="feature-list">
                            <li><strong>最小够用原则</strong>：选择能满足需求的最小数据类型</li>
                            <li><strong>安全优先原则</strong>：敏感数据必须加密存储</li>
                            <li><strong>性能优化原则</strong>：考虑查询效率和存储空间</li>
                            <li><strong>扩展性原则</strong>：预留字段扩展空间</li>
                        </ul>
                        
                        <h3>二、技术特性</h3>
                        
                        <div class="scenario-timeline">
                            <div class="scenario-item">
                                <div class="scenario-number">1</div>
                                <div class="scenario-content">
                                    <h4>用户注册数据</h4>
                                    <div class="info-block">
                                        <p><strong>场景描述</strong>：用户在APP上完成注册，需要收集和存储用户基本信息</p>
                                    </div>
                                    <table class="concept-table">
                                        <thead>
                                            <tr>
                                                <th>字段名称</th>
                                                <th>数据类型</th>
                                                <th>验证规则</th>
                                                <th>设计理由</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>手机号</strong></td>
                                                <td>String</td>
                                                <td>正则验证：^1[3-9]\\d{9}$</td>
                                                <td>以0开头、不用计算、需格式校验</td>
                                            </tr>
                                            <tr>
                                                <td><strong>年龄</strong></td>
                                                <td>Number</td>
                                                <td>范围校验：0-150</td>
                                                <td>需要计算、范围明确</td>
                                            </tr>
                                            <tr>
                                                <td><strong>是否会员</strong></td>
                                                <td>Boolean</td>
                                                <td>默认值：false</td>
                                                <td>只有两种状态：是/否</td>
                                            </tr>
                                            <tr>
                                                <td><strong>标签列表</strong></td>
                                                <td>Array</td>
                                                <td>最多10个标签</td>
                                                <td>用户可能有多个兴趣标签</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div class="scenario-item">
                                <div class="scenario-number">2</div>
                                <div class="scenario-content">
                                    <h4>订单数据结构</h4>
                                    <div class="info-block">
                                        <p><strong>场景描述</strong>：用户下单购买商品，需要存储完整的订单信息</p>
                                    </div>
                                    <table class="concept-table">
                                        <thead>
                                            <tr>
                                                <th>字段名称</th>
                                                <th>数据类型</th>
                                                <th>示例值</th>
                                                <th>设计理由</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>订单对象</strong></td>
                                                <td>Object</td>
                                                <td>{ orderId, amount, status }</td>
                                                <td>包含多个相关字段的结构化数据</td>
                                            </tr>
                                            <tr>
                                                <td><strong>商品列表</strong></td>
                                                <td>Array</td>
                                                <td>[{ productId, name, price }]</td>
                                                <td>一个订单包含多个商品</td>
                                            </tr>
                                            <tr>
                                                <td><strong>地址信息</strong></td>
                                                <td>嵌套 Object</td>
                                                <td>{ province, city, district }</td>
                                                <td>省市区街道层级结构</td>
                                            </tr>
                                            <tr>
                                                <td><strong>订单金额</strong></td>
                                                <td>Number（分）</td>
                                                <td>9999（表示99.99元）</td>
                                                <td>避免浮点数精度问题</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                        <h3>三、应用场景</h3>
                        
                        <h4>3.1 常见业务数据类型选型</h4>
                        <table class="concept-table">
                            <thead>
                                <tr>
                                    <th>业务场景</th>
                                    <th>推荐类型</th>
                                    <th>注意事项</th>
                                    <th>常见错误</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>金额/价格</strong></td>
                                    <td>Number（分为单位）</td>
                                    <td>使用整数存储，避免浮点精度问题</td>
                                    <td>直接用小数存储，导致计算误差</td>
                                </tr>
                                <tr>
                                    <td><strong>手机号/身份证</strong></td>
                                    <td>String</td>
                                    <td>可能以0开头，不需要数学运算</td>
                                    <td>用Number存储，丢失前导0</td>
                                </tr>
                                <tr>
                                    <td><strong>状态标记</strong></td>
                                    <td>Boolean 或 枚举</td>
                                    <td>二元状态用Boolean，多状态用枚举</td>
                                    <td>用数字0/1表示状态，可读性差</td>
                                </tr>
                                <tr>
                                    <td><strong>时间日期</strong></td>
                                    <td>Number（时间戳）或 String</td>
                                    <td>时间戳便于计算，字符串便于显示</td>
                                    <td>格式不统一，导致解析错误</td>
                                </tr>
                                <tr>
                                    <td><strong>配置项</strong></td>
                                    <td>Object</td>
                                    <td>键值对结构，便于扩展</td>
                                    <td>用多个变量分散存储，难以管理</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <h4>3.2 数据验证最佳实践</h4>
                        <div class="info-block">
                            <ul class="feature-list">
                                <li><strong>前端验证</strong>：即时反馈，提升用户体验</li>
                                <li><strong>后端验证</strong>：安全保障，防止绕过前端验证</li>
                                <li><strong>数据库约束</strong>：最后一道防线，确保数据完整性</li>
                            </ul>
                        </div>
                    </section>
                `,
                pmDevScenario: `
                    <section class="tech-module" data-module="pmDevScenario">
                        <div class="module-header">
                            <span class="module-icon">🗣️</span>
                            <h2>产品经理与开发沟通场景</h2>
                        </div>
                        
                        <div class="highlight-box">
                            <blockquote>
                                <strong>清晰的数据定义</strong>是产品经理与开发高效协作的基础。模糊的需求描述会导致理解偏差、返工成本增加，甚至线上故障。
                            </blockquote>
                        </div>
                    
                    <h3>一、核心概念</h3>
                    
                    <h4>1.1 数据沟通的关键要素</h4>
                    <p>产品经理在描述数据需求时，必须明确以下要素：</p>
                    <ul class="feature-list">
                        <li><strong>数据类型</strong>：String / Number / Boolean / Object / Array</li>
                        <li><strong>是否必填</strong>：必填字段需要明确标注</li>
                        <li><strong>默认值</strong>：字段为空时的默认处理方式</li>
                        <li><strong>验证规则</strong>：格式要求、取值范围、长度限制</li>
                        <li><strong>边界情况</strong>：空值、超长、特殊字符如何处理</li>
                    </ul>
                    
                    <h4>1.2 常见沟通误区</h4>
                    <table class="concept-table">
                        <thead>
                            <tr>
                                <th>误区类型</th>
                                <th>模糊描述</th>
                                <th>开发困惑</th>
                                <th>改进建议</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>类型模糊</strong></td>
                                <td>"年龄存数字"</td>
                                <td>整数还是小数？最大多少？</td>
                                <td>"年龄：整数类型，范围0-150"</td>
                            </tr>
                            <tr>
                                <td><strong>必填不明</strong></td>
                                <td>"用户填写手机号"</td>
                                <td>是必填还是选填？</td>
                                <td>"手机号：必填，11位数字"</td>
                            </tr>
                            <tr>
                                <td><strong>边界不清</strong></td>
                                <td>"用户名不能太长"</td>
                                <td>多长算太长？</td>
                                <td>"用户名：最长20个字符"</td>
                            </tr>
                            <tr>
                                <td><strong>默认缺失</strong></td>
                                <td>"显示用户积分"</td>
                                <td>新用户积分是多少？</td>
                                <td>"积分：默认0，最小值0"</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h3>二、技术特性</h3>
                    
                    <h4>2.1 沟通对比案例</h4>
                    <div class="conversation-box">
                        <div class="conversation-item bad">
                            <div class="conv-header">
                                <span class="conv-icon">❌</span>
                                <span class="conv-title">错误沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"用户年龄就存数字吧。"</p>
                                <p><strong>开发内心：</strong></p>
                                <ul class="feature-list">
                                    <li>年龄是整数还是小数？</li>
                                    <li>最大多少？最小多少？</li>
                                    <li>可以为空吗？</li>
                                    <li>负数怎么处理？</li>
                                </ul>
                                <p><strong>结果：</strong>数据校验不完善，出现负数年龄、200岁年龄等异常数据</p>
                            </div>
                        </div>
                        
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong></p>
                                <div class="info-block">
                                    <table class="concept-table">
                                        <thead>
                                            <tr>
                                                <th>字段</th>
                                                <th>类型</th>
                                                <th>约束</th>
                                                <th>错误提示</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>年龄</td>
                                                <td>Integer（整数）</td>
                                                <td>范围 0-150，必填</td>
                                                <td>"请输入有效年龄"</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p><strong>开发：</strong>"明白了，我会在数据库加CHECK约束，API层加参数校验，前端加输入限制。"</p>
                                <p><strong>结果：</strong>数据质量高，系统稳定</p>
                            </div>
                        </div>
                    </div>
                    
                    <h3>三、应用场景</h3>
                    
                    <h4>3.1 数据设计清单</h4>
                    <div class="tips-box">
                        <h5>📋 产品经理数据设计 Checklist</h5>
                        <table class="concept-table">
                            <thead>
                                <tr>
                                    <th>检查项</th>
                                    <th>说明</th>
                                    <th>示例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>数据类型</strong></td>
                                    <td>每个字段的数据类型是什么？</td>
                                    <td>String / Number / Boolean / Object / Array</td>
                                </tr>
                                <tr>
                                    <td><strong>是否必填</strong></td>
                                    <td>字段是否可以为空？</td>
                                    <td>手机号必填，昵称选填</td>
                                </tr>
                                <tr>
                                    <td><strong>默认值</strong></td>
                                    <td>字段为空时的默认值？</td>
                                    <td>积分默认0，是否会员默认false</td>
                                </tr>
                                <tr>
                                    <td><strong>格式要求</strong></td>
                                    <td>有没有格式要求？</td>
                                    <td>手机号、邮箱、身份证号</td>
                                </tr>
                                <tr>
                                    <td><strong>取值范围</strong></td>
                                    <td>数值的范围限制？</td>
                                    <td>年龄0-150，评分1-5</td>
                                </tr>
                                <tr>
                                    <td><strong>唯一约束</strong></td>
                                    <td>是否需要唯一？</td>
                                    <td>用户ID、订单号、手机号</td>
                                </tr>
                                <tr>
                                    <td><strong>长度限制</strong></td>
                                    <td>文本的最大长度？</td>
                                    <td>用户名最长20字，评论最长500字</td>
                                </tr>
                                <tr>
                                    <td><strong>边界处理</strong></td>
                                    <td>特殊情况怎么处理？</td>
                                    <td>空值显示"未设置"，超长截断</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h4>3.2 需求文档模板</h4>
                    <div class="info-block">
                        <h5>📝 字段定义模板</h5>
                        <pre><code>字段名称：[字段名]
数据类型：[String/Number/Boolean/Object/Array]
是否必填：[是/否]
默认值：[无/具体值]
验证规则：
  - [格式要求，如：正则表达式]
  - [范围要求，如：0-150]
  - [长度要求，如：最长20字符]
错误提示：[验证失败时的提示语]
备注：[其他说明]</code></pre>
                    </div>
                    </section>
                `,
                codeExample: `
                    <section class="tech-module" data-module="codeExample">
                        <div class="module-header">
                            <span class="module-icon">💻</span>
                            <h2>代码实例：用户注册数据验证</h2>
                        </div>
                    
                    <div class="highlight-box">
                        <blockquote>
                            本节通过一个真实的<strong>用户注册场景</strong>，展示不同数据类型的实际使用方式和验证逻辑，帮助产品经理理解代码层面的数据实现。
                        </blockquote>
                    </div>
                    
                    <h3>一、核心概念</h3>
                    
                    <h4>1.1 场景背景</h4>
                    <p>用户在APP上填写注册表单，需要收集以下信息：</p>
                    <table class="concept-table">
                        <thead>
                            <tr>
                                <th>字段</th>
                                <th>数据类型</th>
                                <th>业务含义</th>
                                <th>验证要求</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>用户名</strong></td>
                                <td>String</td>
                                <td>用户的显示名称</td>
                                <td>2-20个字符</td>
                            </tr>
                            <tr>
                                <td><strong>手机号</strong></td>
                                <td>String</td>
                                <td>登录凭证</td>
                                <td>11位，以1开头</td>
                            </tr>
                            <tr>
                                <td><strong>年龄</strong></td>
                                <td>Number</td>
                                <td>用户年龄</td>
                                <td>0-150的整数</td>
                            </tr>
                            <tr>
                                <td><strong>是否会员</strong></td>
                                <td>Boolean</td>
                                <td>会员状态</td>
                                <td>默认false</td>
                            </tr>
                            <tr>
                                <td><strong>兴趣爱好</strong></td>
                                <td>Array</td>
                                <td>用户兴趣标签</td>
                                <td>最多10个</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h4>1.2 代码结构说明</h4>
                    <ul class="feature-list">
                        <li><strong>数据定义</strong>：使用 Object 类型组织用户的所有信息</li>
                        <li><strong>数据验证</strong>：使用函数封装验证逻辑，返回验证结果</li>
                        <li><strong>结果处理</strong>：根据验证结果决定后续流程</li>
                    </ul>
                    
                    <h3>二、技术特性</h3>
                    
                    <h4>2.1 完整代码示例</h4>
                    <div class="code-example">
                        <div class="code-example-header">
                            <span class="code-example-title">用户注册数据验证</span>
                            <span class="code-example-lang">JavaScript</span>
                        </div>
                        <div class="code-example-body">
                            <pre><code>// ==========================================
// 用户注册 - 数据类型实战示例
// 场景：用户在APP上填写注册表单
// ==========================================

// 【第1步：定义用户数据对象】
// 使用 Object 类型存储用户的完整信息
const userData = {
    // String 类型：存储文本信息
    username: '张三',           // 用户名
    phone: '13800138000',      // 手机号（字符串存储）
    email: 'zhangsan@example.com', // 邮箱地址
    
    // Number 类型：存储数值信息
    age: 25,                    // 年龄
    height: 175,                // 身高（厘米）
    
    // Boolean 类型：存储状态信息
    isMember: false,            // 是否会员
    agreedTerms: true,          // 是否同意用户协议
    
    // Array 类型：存储列表信息
    interests: ['读书', '游泳', '编程'], // 兴趣爱好列表
    addresses: [                // 收货地址列表
        { label: '家', city: '北京', detail: '朝阳区某某小区' },
        { label: '公司', city: '北京', detail: '海淀区某某大厦' }
    ]
};

// 【第2步：数据验证函数】
function validateUserData(user) {
    const errors = []; // 存储错误信息
    
    // 验证用户名：String类型，长度2-20个字符
    if (typeof user.username !== 'string') {
        errors.push('用户名必须是文字');
    } else if (user.username.length < 2 || user.username.length > 20) {
        errors.push('用户名长度需要在2-20个字符之间');
    }
    
    // 验证手机号：String类型，11位数字
    if (!/^1[3-9]\\d{9}$/.test(user.phone)) {
        errors.push('请输入正确的手机号');
    }
    
    // 验证年龄：Number类型，范围0-150
    if (typeof user.age !== 'number' || user.age < 0 || user.age > 150) {
        errors.push('请输入有效的年龄');
    }
    
    // 验证是否同意协议：Boolean类型，必须为true
    if (user.agreedTerms !== true) {
        errors.push('请阅读并同意用户协议');
    }
    
    return {
        isValid: errors.length === 0,  // 是否通过验证
        errors: errors                    // 错误信息列表
    };
}

// 【第3步：执行验证并输出结果】
const result = validateUserData(userData);

if (result.isValid) {
    console.log('✅ 验证通过！可以保存到数据库');
} else {
    console.log('❌ 验证失败：', result.errors);
}</code></pre>
                        </div>
                    </div>
                    
                    <h3>三、应用场景</h3>
                    
                    <h4>3.1 代码解读（产品经理视角）</h4>
                    
                    <div class="code-explanation">
                        <div class="explanation-item">
                            <h5>📌 数据对象是什么？</h5>
                            <p><strong>userData</strong> 就是一个"用户档案袋"，里面装着用户填写的所有信息：</p>
                            <table class="concept-table">
                                <thead>
                                    <tr>
                                        <th>类型</th>
                                        <th>包含字段</th>
                                        <th>特点</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>String</strong></td>
                                        <td>用户名、手机号、邮箱</td>
                                        <td>文本信息，不能做数学运算</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Number</strong></td>
                                        <td>年龄、身高</td>
                                        <td>数值信息，可以计算</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Boolean</strong></td>
                                        <td>是否会员、是否同意协议</td>
                                        <td>只有两种状态：是/否</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Array</strong></td>
                                        <td>兴趣爱好、收货地址</td>
                                        <td>可以放多个同类信息</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="explanation-item">
                            <h5>📌 验证函数在做什么？</h5>
                            <p>就像快递员检查包裹，确保数据符合要求：</p>
                            <ul class="feature-list">
                                <li><strong>类型检查</strong>：<code>typeof</code> 检查数据是不是正确的类型</li>
                                <li><strong>长度检查</strong>：<code>.length</code> 检查文字长度是否在范围内</li>
                                <li><strong>格式检查</strong>：正则表达式检查手机号格式</li>
                                <li><strong>范围检查</strong>：检查数字是否在合理范围内</li>
                            </ul>
                        </div>
                        
                        <div class="explanation-item">
                            <h5>📌 与产品功能的关系</h5>
                            <p>当用户点击"注册"按钮时的完整流程：</p>
                            <div class="info-block">
                                <ol class="feature-list">
                                    <li><strong>数据收集</strong>：前端收集用户填写的数据 → 形成 userData 对象</li>
                                    <li><strong>前端验证</strong>：调用验证函数检查数据 → validateUserData</li>
                                    <li><strong>错误提示</strong>：如果有错误，显示错误提示 → errors</li>
                                    <li><strong>提交保存</strong>：如果验证通过，发送给服务器保存</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    
                    <h4>3.2 产品经理关注要点</h4>
                    <div class="tips-box">
                        <h5>📋 需求文档中需要明确的内容</h5>
                        <table class="concept-table">
                            <thead>
                                <tr>
                                    <th>关注点</th>
                                    <th>问题</th>
                                    <th>示例答案</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>验证规则</strong></td>
                                    <td>每个字段的验证规则是什么？</td>
                                    <td>手机号11位、年龄0-150</td>
                                </tr>
                                <tr>
                                    <td><strong>错误提示</strong></td>
                                    <td>验证失败时提示什么信息？</td>
                                    <td>"请输入正确的手机号"</td>
                                </tr>
                                <tr>
                                    <td><strong>必填标识</strong></td>
                                    <td>哪些字段是必填的？</td>
                                    <td>手机号必填，昵称选填</td>
                                </tr>
                                <tr>
                                    <td><strong>默认值</strong></td>
                                    <td>字段的默认值是什么？</td>
                                    <td>是否会员默认false</td>
                                </tr>
                                <tr>
                                    <td><strong>边界处理</strong></td>
                                    <td>特殊情况怎么处理？</td>
                                    <td>空值显示"未设置"</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </section>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>用生活中的例子理解程序中的数据类型，包括字符串、数字、布尔值、数组、对象等基本概念。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够识别业务场景中的数据类型，掌握数据字段设计的基本方法，能与技术讨论数据存储方案。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是编程入门的第一课，是理解程序如何处理信息的基础，为后续学习程序逻辑奠定基础。</div>
                </div>
                
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
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>程序执行遵循<strong>控制流（Control Flow）</strong>模型，包括三种基本结构：顺序结构、选择结构、循环结构。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node">
                                <div class="node-icon">➡️</div>
                                <div class="node-title">顺序结构</div>
                                <div class="node-desc">按代码顺序<br/>逐行执行</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">🔀</div>
                                <div class="node-title">选择结构</div>
                                <div class="node-desc">if/else<br/>switch/case</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">🔄</div>
                                <div class="node-title">循环结构</div>
                                <div class="node-desc">for/while<br/>do-while</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>控制流语句对比</h5>
                    <table class="concept-table">
                        <tr>
                            <th>类型</th>
                            <th>语句</th>
                            <th>使用场景</th>
                        </tr>
                        <tr>
                            <td>条件判断</td>
                            <td>if / else if / else</td>
                            <td>多条件分支判断</td>
                        </tr>
                        <tr>
                            <td>多值匹配</td>
                            <td>switch / case</td>
                            <td>枚举值匹配</td>
                        </tr>
                        <tr>
                            <td>计数循环</td>
                            <td>for</td>
                            <td>已知次数的循环</td>
                        </tr>
                        <tr>
                            <td>条件循环</td>
                            <td>while</td>
                            <td>未知次数的循环</td>
                        </tr>
                        <tr>
                            <td>遍历循环</td>
                            <td>for...of / for...in</td>
                            <td>数组/对象遍历</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>顺序结构</h5>
                            <ul>
                                <li><strong>特点</strong>：从上到下，逐行执行</li>
                                <li><strong>应用</strong>：变量声明、函数调用、数据处理</li>
                                <li><strong>注意</strong>：依赖关系要正确排序</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>选择结构</h5>
                            <ul>
                                <li><strong>特点</strong>：根据条件选择执行路径</li>
                                <li><strong>应用</strong>：权限判断、状态处理、异常分支</li>
                                <li><strong>注意</strong>：避免深层嵌套，考虑边界条件</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>循环结构</h5>
                            <ul>
                                <li><strong>特点</strong>：重复执行特定代码块</li>
                                <li><strong>应用</strong>：批量处理、数据遍历、定时任务</li>
                                <li><strong>注意</strong>：避免死循环，注意性能优化</li>
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
                                <h5>订单状态处理（选择结构）</h5>
                                <p><strong>场景</strong>：根据订单状态显示不同操作按钮</p>
                                <p><strong>逻辑</strong>：待支付→显示"去支付"；待发货→显示"催发货"；已完成→显示"再次购买"</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">2</div>
                            <div class="scenario-content">
                                <h5>批量发送通知（循环结构）</h5>
                                <p><strong>场景</strong>：给100万用户发送活动通知</p>
                                <p><strong>逻辑</strong>：遍历用户列表→检查发送条件→调用发送接口→记录发送结果</p>
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
                                <p><strong>产品经理：</strong>"用户没登录就不能买。"</p>
                                <p><strong>开发内心：</strong>没登录是跳登录页还是弹窗？登录后是回到当前页还是首页？</p>
                                <p><strong>结果：</strong>实现与预期不符，反复修改</p>
                            </div>
                        </div>
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"未登录用户点击购买时：1. 弹出登录弹窗；2. 登录成功后自动继续购买流程；3. 登录失败提示错误信息。"</p>
                                <p><strong>开发：</strong>"明白了，我会用if-else处理登录状态，登录成功后回调继续执行购买逻辑。"</p>
                                <p><strong>结果：</strong>逻辑清晰，一次做对</p>
                            </div>
                        </div>
                    </div>
                    <div class="tips-box">
                        <h5>💡 流程设计清单</h5>
                        <ul>
                            <li>正常流程是什么？（主流程）</li>
                            <li>有哪些异常情况？（分支流程）</li>
                            <li>每个分支的入口条件是什么？</li>
                            <li>循环的终止条件是什么？</li>
                            <li>极端情况怎么处理？（空数据、超大数据量）</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>理解程序的三大执行逻辑：顺序、判断、循环，学会用流程化的思维方式描述业务逻辑。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够用清晰的步骤描述功能流程，掌握编写需求文档的逻辑方法，避免模糊的需求描述。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是理解程序如何"做事"的核心课程，是产品经理将业务需求转化为技术语言的关键能力。</div>
                </div>
                
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
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p>变量是程序中用于存储数据的<strong>命名存储空间</strong>。不同编程语言有不同的变量声明方式和作用域规则。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node">
                                <div class="node-icon">📝</div>
                                <div class="node-title">声明变量</div>
                                <div class="node-desc">let / const / var<br/>分配内存空间</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">💾</div>
                                <div class="node-title">存储数据</div>
                                <div class="node-desc">栈内存（基本类型）<br/>堆内存（引用类型）</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">🔍</div>
                                <div class="node-title">访问变量</div>
                                <div class="node-desc">作用域链查找<br/>闭包引用</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>变量声明方式对比</h5>
                    <table class="concept-table">
                        <tr>
                            <th>关键字</th>
                            <th>作用域</th>
                            <th>是否可变</th>
                            <th>推荐场景</th>
                        </tr>
                        <tr>
                            <td>var</td>
                            <td>函数作用域</td>
                            <td>可变</td>
                            <td>不推荐使用</td>
                        </tr>
                        <tr>
                            <td>let</td>
                            <td>块级作用域</td>
                            <td>可变</td>
                            <td>需要重新赋值的变量</td>
                        </tr>
                        <tr>
                            <td>const</td>
                            <td>块级作用域</td>
                            <td>不可变</td>
                            <td>常量、配置项</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>变量作用域</h5>
                            <ul>
                                <li><strong>全局作用域</strong>：整个程序可访问</li>
                                <li><strong>函数作用域</strong>：函数内部可访问</li>
                                <li><strong>块级作用域</strong>：{} 内部可访问</li>
                                <li><strong>作用域链</strong>：嵌套作用域的查找机制</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>内存管理</h5>
                            <ul>
                                <li><strong>栈内存</strong>：存储基本类型和引用地址</li>
                                <li><strong>堆内存</strong>：存储对象和数组数据</li>
                                <li><strong>垃圾回收</strong>：自动释放无用内存</li>
                                <li><strong>内存泄漏</strong>：未正确释放的内存</li>
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
                                <h5>用户状态管理</h5>
                                <p><strong>场景</strong>：存储用户登录状态和信息</p>
                                <p><strong>实现</strong>：const token = getToken(); let userInfo = null;</p>
                                <p><strong>注意</strong>：敏感信息不要存储在全局变量</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">2</div>
                            <div class="scenario-content">
                                <h5>配置常量管理</h5>
                                <p><strong>场景</strong>：API地址、超时时间等配置</p>
                                <p><strong>实现</strong>：const API_BASE_URL = 'https://api.example.com';</p>
                                <p><strong>注意</strong>：使用const防止意外修改</p>
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
                                <p><strong>产品经理：</strong>"这个数据存起来，后面要用。"</p>
                                <p><strong>开发内心：</strong>存多久？存在哪里？页面刷新还在吗？要持久化吗？</p>
                                <p><strong>结果：</strong>数据丢失，用户体验差</p>
                            </div>
                        </div>
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"用户选择的商品要保存，关闭页面后再次打开还能看到。需要持久化存储。"</p>
                                <p><strong>开发：</strong>"明白了，我会用localStorage存储，设置7天过期时间。"</p>
                                <p><strong>结果：</strong>数据持久化，用户体验好</p>
                            </div>
                        </div>
                    </div>
                    <div class="tips-box">
                        <h5>💡 数据存储清单</h5>
                        <ul>
                            <li>数据需要存储多久？（页面级/会话级/持久化）</li>
                            <li>数据量有多大？（影响存储方案选择）</li>
                            <li>数据是否敏感？（敏感数据需要加密）</li>
                            <li>是否需要跨设备同步？（需要服务端存储）</li>
                            <li>数据过期策略是什么？（自动清理机制）</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>理解变量和存储的概念，区分内存、本地存储、服务器存储三种方式，掌握数据持久化的基本原理。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够判断数据应该存储在哪里，理解数据丢失的原因，设计合理的数据保存策略。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是理解数据如何"安家"的基础课程，帮助产品经理做出正确的数据存储决策。</div>
                </div>
                
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
            technicalContent: {
                principle: `
                    <h4>🔬 技术原理</h4>
                    <p><strong>函数（Function）</strong>是一段可重复使用的代码块，通过参数接收输入，通过返回值输出结果。<strong>模块（Module）</strong>是函数和数据的集合，用于组织代码结构。</p>
                    
                    <div class="tech-diagram">
                        <div class="diagram-flow">
                            <div class="diagram-node">
                                <div class="node-icon">📥</div>
                                <div class="node-title">参数输入</div>
                                <div class="node-desc">形参 / 实参<br/>默认参数 / 剩余参数</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">⚙️</div>
                                <div class="node-title">函数执行</div>
                                <div class="node-desc">函数体<br/>作用域 / 闭包</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-node">
                                <div class="node-icon">📤</div>
                                <div class="node-title">返回输出</div>
                                <div class="node-desc">return 语句<br/>异步返回 Promise</div>
                            </div>
                        </div>
                    </div>
                    
                    <h5>函数类型对比</h5>
                    <table class="concept-table">
                        <tr>
                            <th>类型</th>
                            <th>语法</th>
                            <th>特点</th>
                        </tr>
                        <tr>
                            <td>普通函数</td>
                            <td>function name() {}</td>
                            <td>有自己的this绑定</td>
                        </tr>
                        <tr>
                            <td>箭头函数</td>
                            <td>() => {}</td>
                            <td>没有自己的this，更简洁</td>
                        </tr>
                        <tr>
                            <td>异步函数</td>
                            <td>async function() {}</td>
                            <td>返回Promise，支持await</td>
                        </tr>
                        <tr>
                            <td>构造函数</td>
                            <td>function Name() {} + new</td>
                            <td>用于创建对象实例</td>
                        </tr>
                    </table>
                `,
                role: `
                    <h4>🎯 核心作用</h4>
                    <div class="role-grid">
                        <div class="role-card">
                            <h5>函数封装</h5>
                            <ul>
                                <li><strong>代码复用</strong>：避免重复编写相同逻辑</li>
                                <li><strong>抽象隐藏</strong>：隐藏实现细节，暴露接口</li>
                                <li><strong>参数化</strong>：通过参数实现灵活配置</li>
                                <li><strong>单一职责</strong>：每个函数只做一件事</li>
                            </ul>
                        </div>
                        <div class="role-card">
                            <h5>模块化</h5>
                            <ul>
                                <li><strong>命名空间</strong>：避免全局变量污染</li>
                                <li><strong>依赖管理</strong>：import/export管理依赖</li>
                                <li><strong>代码分割</strong>：按功能拆分代码文件</li>
                                <li><strong>按需加载</strong>：动态导入提升性能</li>
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
                                <h5>工具函数封装</h5>
                                <p><strong>场景</strong>：日期格式化、金额计算、数据校验</p>
                                <p><strong>实现</strong>：封装成utils模块，统一管理</p>
                                <p><strong>示例</strong>：formatDate(date, 'YYYY-MM-DD')</p>
                            </div>
                        </div>
                        <div class="scenario-item">
                            <div class="scenario-number">2</div>
                            <div class="scenario-content">
                                <h5>API请求封装</h5>
                                <p><strong>场景</strong>：统一的HTTP请求处理</p>
                                <p><strong>实现</strong>：封装request函数，统一处理token、错误、超时</p>
                                <p><strong>示例</strong>：request('/api/user', { method: 'GET' })</p>
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
                                <p><strong>产品经理：</strong>"这个功能跟那个功能差不多，复制一下就行。"</p>
                                <p><strong>开发内心：</strong>复制代码会导致维护困难，后期改一个地方要改多处。</p>
                                <p><strong>结果：</strong>代码冗余，维护成本高，Bug修复困难</p>
                            </div>
                        </div>
                        <div class="conversation-item good">
                            <div class="conv-header">
                                <span class="conv-icon">✅</span>
                                <span class="conv-title">正确沟通</span>
                            </div>
                            <div class="conv-content">
                                <p><strong>产品经理：</strong>"这两个功能的逻辑很相似，能不能做成通用的组件？这样以后改一处就能影响所有地方。"</p>
                                <p><strong>开发：</strong>"好的，我会把公共逻辑抽离成函数，通过参数控制差异部分。这样维护更方便。"</p>
                                <p><strong>结果：</strong>代码复用率高，维护成本低</p>
                            </div>
                        </div>
                    </div>
                    <div class="tips-box">
                        <h5>💡 函数设计清单</h5>
                        <ul>
                            <li>函数名是否清晰表达功能？（动词+名词）</li>
                            <li>参数数量是否合理？（建议不超过3-4个）</li>
                            <li>是否有返回值？返回值类型是什么？</li>
                            <li>是否需要错误处理？异常怎么抛出？</li>
                            <li>是否需要单元测试？测试用例有哪些？</li>
                        </ul>
                    </div>
                `
            },
            content: `
                <div class="knowledge-overview">
                    <h4>【知识点概览】</h4>
                    <div class="overview-item"><strong>核心内容：</strong>理解函数和模块的概念，掌握代码复用的思想，学会识别可复用的功能组件。</div>
                    <div class="overview-item"><strong>学习目标：</strong>能够识别产品中的可复用功能，理解组件化开发的优势，与技术讨论功能复用方案。</div>
                    <div class="overview-item"><strong>课程定位：</strong>这是提升开发效率的重要课程，帮助产品经理理解技术架构，做出更合理的产品规划。</div>
                </div>
                
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
