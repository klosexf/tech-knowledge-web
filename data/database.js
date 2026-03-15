/**
 * @fileoverview 数据存储原理模块
 * @description 包含 4 个知识点：db-1, db-2, db-3, db-4
 * @module data/database
 * @version 2.0.0
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
 * @property {string} content - 知识点正文内容（Markdown格式）
 */
var knowledge = [
{
    id: 'db-1',
    categoryId: 'database',
    title: '关系型数据库',
    difficulty: 'beginner',
    summary: '理解数据表设计，掌握主键、索引、外键等核心概念，能参与数据库设计评审。',
    technicalContent: {
        principle: `
<h4>技术原理</h4>
<p><strong>关系型数据库（Relational Database）</strong>是基于关系模型组织数据的数据库，数据以<strong>表（Table）</strong>的形式存储，表与表之间通过<strong>关系（Relationship）</strong>关联。主流的关系型数据库包括 MySQL、PostgreSQL、Oracle、SQL Server 等。</p>
<table class="concept-table">
<tr>
<th>概念</th>
<th>说明</th>
<th>类比</th>
</tr>
<tr>
<td><strong>表（Table）</strong></td>
<td>数据的集合，由行和列组成</td>
<td>Excel工作表</td>
</tr>
<tr>
<td><strong>字段（Field/Column）</strong></td>
<td>表中的列，定义数据的属性</td>
<td>Excel的列标题</td>
</tr>
<tr>
<td><strong>记录（Record/Row）</strong></td>
<td>表中的一行，代表一条数据</td>
<td>Excel的一行数据</td>
</tr>
<tr>
<td><strong>主键（Primary Key）</strong></td>
<td>唯一标识每条记录的字段</td>
<td>身份证号</td>
</tr>
<tr>
<td><strong>外键（Foreign Key）</strong></td>
<td>建立表与表之间关联的字段</td>
<td>引用其他表的ID</td>
</tr>
<tr>
<td><strong>索引（Index）</strong></td>
<td>加速数据查询的数据结构</td>
<td>书的目录</td>
</tr>
</table>
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
<tr>
<td>SQL Server</td>
<td>微软生态、易用</td>
<td>企业内部系统</td>
</tr>
</table>
`,
        role: `
<h4>核心作用</h4>
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
<h4>业务场景</h4>
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
<div class="scenario-item">
<div class="scenario-number">2</div>
<div class="scenario-content">
<h5>社交应用用户关系</h5>
<p><strong>用户表</strong>：存储用户信息</p>
<p><strong>关注关系表</strong>：单向关注关系</p>
<p><strong>好友关系表</strong>：双向好友关系</p>
</div>
</div>
</div>
`,
        pmDevScenario: `
<h4>产品经理与开发沟通场景</h4>
<div class="conversation-box">
<div class="conversation-item good">
<div class="conv-header">
<span class="conv-icon">✅</span>
<span class="conv-title">数据库设计评审</span>
</div>
<div class="conv-content">
<p><strong>产品经理：</strong>"这个订单表，为什么要有order_no字段？直接用id不行吗？"</p>
<p><strong>开发：</strong>"id是数据库自增的，用户不可见。order_no是给用户看的订单号，比如'20240315120001'，包含日期信息，方便客服查询。"</p>
<p><strong>产品经理：</strong>"那订单状态有哪些？能支持退款流程吗？"</p>
<p><strong>开发：</strong>"目前设计了这些状态：0-待付款、1-已付款、2-已发货、3-已收货、4-已完成、5-已取消、6-退款中、7-已退款"</p>
</div>
</div>
</div>
<div class="tips-box">
<h5>数据库设计清单</h5>
<ul>
<li>数据表是否覆盖了所有业务实体和关系？</li>
<li>主键选择是否合理？是否考虑了分布式场景？</li>
<li>查询频繁的字段是否有索引支持？</li>
<li>敏感数据是否有加密或脱敏处理？</li>
</ul>
</div>
`
    },
    content: `
# 关系型数据库

> **核心问题**：如何用数据表表示现实世界的关系？如何设计高效的数据存储结构？

---

## 学习目标

学完本节，你将能够：
- 理解关系型数据库的核心概念（表、字段、记录、主键、外键）
- 掌握主键和索引的作用及使用场景
- 能分析现实世界中的实体关系并设计数据表
- 能在数据库设计评审中提出有价值的问题

---

## 一、核心概念

### 专业解释

**关系型数据库（Relational Database）**是基于关系模型组织数据的数据库，数据以**表（Table）**的形式存储，表与表之间通过**关系（Relationship）**关联。主流的关系型数据库包括 MySQL、PostgreSQL、Oracle、SQL Server 等。

### 大白话解释

关系型数据库就像**图书馆的图书管理系统**：

| 技术概念 | 图书馆类比 | 通俗理解 |
|---------|-----------|---------|
| **数据库** | 整个图书馆 | 存储所有数据的地方 |
| **表** | 图书分类目录 | 一类数据的集合，如"小说类"、"科技类" |
| **字段** | 图书信息项 | 描述图书的属性，如书名、作者、出版社 |
| **记录** | 一本具体的书 | 一条完整的数据，如《三体》的信息 |
| **主键** | 图书编号 | 每本书的唯一标识，不会重复 |
| **外键** | 借阅者ID | 关联到借阅者表，知道谁借了这本书 |
| **索引** | 检索卡片 | 按作者、书名建立的快速查找卡片 |

---

## 二、生活化类比详解

### 类比主题：学校学生管理系统

想象你要设计一个学校的学生管理系统，需要存储学生、班级、课程、成绩等信息：

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    学校学生管理系统                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   【实体识别】                                                   │
│   ├── 学生：学号、姓名、性别、出生日期、班级ID                   │
│   ├── 班级：班级ID、班级名称、班主任、年级                       │
│   ├── 课程：课程ID、课程名称、学分、任课教师                     │
│   └── 成绩：成绩ID、学生ID、课程ID、分数、考试日期               │
│                                                                 │
│   【实体关系】                                                   │
│   ├── 学生 "属于" 一个班级（多对一）                             │
│   ├── 班级 "包含" 多个学生（一对多）                             │
│   ├── 学生 "选修" 多门课程（多对多）                             │
│   └── 课程 "被" 多个学生选修（多对多）                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

**对应到数据库表设计：**

| 现实世界 | 数据库概念 | 示例 |
|---------|-----------|------|
| 学生信息登记表 | 学生表（students） | 存储所有学生的基本信息 |
| 班级花名册 | 班级表（classes） | 存储所有班级的信息 |
| 课程表 | 课程表（courses） | 存储所有课程的信息 |
| 成绩单 | 成绩表（scores） | 存储学生的考试成绩 |
| 学号 | 主键 | 唯一标识一个学生 |
| 班级编号 | 外键 | 关联学生和班级 |

---

## 三、详细原理阐述

### 3.1 数据表设计

**专业定义**：数据表是关系型数据库中存储数据的基本单位，由表结构（字段定义）和表数据（记录）组成。

**大白话**：数据表就像Excel表格，先定义好有哪些列（字段），然后每一行填一条数据（记录）。

**常用字段数据类型：**

| 类型 | 说明 | 示例 | 使用场景 |
|-----|------|------|---------|
| **INT** | 整数 | 1, 100, -50 | ID、数量、年龄 |
| **BIGINT** | 大整数 | 9223372036854775807 | 大数量级ID、时间戳 |
| **DECIMAL** | 精确小数 | 99.99, 100.00 | 金额、价格 |
| **VARCHAR** | 变长字符串 | "张三", "abc123" | 姓名、地址、描述 |
| **TEXT** | 长文本 | 文章内容 | 详情、备注 |
| **DATE** | 日期 | 2024-03-15 | 生日、纪念日 |
| **DATETIME** | 日期时间 | 2024-03-15 14:30:00 | 创建时间、更新时间 |
| **BOOLEAN** | 布尔值 | true/false | 是否、开关状态 |

### 3.2 主键（Primary Key）

**专业定义**：主键是表中唯一标识每条记录的字段或字段组合，具有唯一性和非空性。

**大白话**：主键就像身份证号，每个人都有唯一的身份证号，而且必须有。

**主键的特点：**

| 特点 | 说明 | 示例 |
|-----|------|------|
| **唯一性** | 每条记录的主键值都不同 | 学生ID：1, 2, 3... |
| **非空性** | 主键字段不能为空 | 每个学生必须有ID |
| **不可重复** | 不能有两条记录用同一个主键 | 不能有ID=1的两个学生 |
| **尽量不变** | 主键值一般不改 | 学号一旦确定不变 |

**主键的选择策略：**

| 策略 | 实现 | 优点 | 缺点 | 适用场景 |
|-----|------|------|------|---------|
| **自增ID** | 数据库自动生成 1, 2, 3... | 简单、高效、无业务含义 | 可能暴露数据量 | 大多数场景 |
| **业务ID** | 使用业务编号，如学号"2024001" | 有业务含义，易理解 | 可能重复、格式变化 | 有明确业务编号的场景 |
| **UUID** | 生成唯一字符串 | 全局唯一，不暴露数据量 | 占用空间大，查询效率低 | 分布式系统、对外暴露的场景 |

### 3.3 索引（Index）

**专业定义**：索引是一种数据结构，通过创建数据的"目录"，大幅提高数据查询速度，但会增加写入时的开销。

**大白话**：索引就像书的目录，通过目录可以快速找到内容，但编目录需要额外工作。

**索引的工作原理：**

- **无索引查询 - 全表扫描**：从第1条记录开始，逐条检查。100万条数据需要检查100万次。效率：O(n)，数据量越大越慢。
- **有索引查询 - 快速定位**：通过索引树快速定位。100万条数据只需检查约20次。效率：O(log n)，数据量影响小。

**索引的类型：**

| 类型 | 说明 | 使用场景 |
|-----|------|---------|
| **主键索引** | 主键自动创建的索引 | 主键查询 |
| **唯一索引** | 确保字段值唯一 | 手机号、邮箱、学号 |
| **普通索引** | 加速普通字段查询 | 姓名、状态等查询条件 |
| **组合索引** | 多个字段联合索引 | 多条件组合查询 |
| **全文索引** | 用于文本内容搜索 | 文章标题、内容搜索 |

**索引设计原则：**

| 原则 | 说明 | 示例 |
|-----|------|------|
| **WHERE字段建索引** | 查询条件中的字段 | WHERE name = '张三'，给name建索引 |
| **JOIN字段建索引** | 关联查询的字段 | 外键字段通常建索引 |
| **ORDER BY字段建索引** | 排序字段 | ORDER BY create_time，给时间字段建索引 |
| **区分度高的字段** | 值分布均匀的字段 | 性别（只有男女）不适合建索引 |
| **控制索引数量** | 索引过多影响写入 | 单表索引不超过5个 |

### 3.4 表关联关系

**专业定义**：表关联是指通过外键建立表与表之间的关系，反映现实世界中实体之间的联系。

**三种基本关联关系：**

| 关系类型 | 定义 | 示例 | 实现方式 |
|---------|------|------|---------|
| **一对一（1:1）** | A表的一条记录对应B表的一条记录 | 用户表 ↔ 用户详情表 | 在任意一方加外键，或共用主键 |
| **一对多（1:N）** | A表的一条记录对应B表的多条记录 | 班级表 → 学生表 | 在"多"的一方（学生表）加外键 |
| **多对多（M:N）** | A表的多条记录对应B表的多条记录 | 学生表 ↔ 课程表 | 建立中间表（成绩表），包含两个外键 |

---

## 四、市面产品案例

### 案例1：电商平台的商品数据设计

**场景**：设计一个电商平台的商品模块数据表。

**设计要点：**

| 设计决策 | 说明 | 产品价值 |
|---------|------|---------|
| SPU/SKU分离 | 一个商品多个规格 | 支持多规格商品管理 |
| 分类层级设计 | parent_id自关联 | 支持多级分类，灵活扩展 |
| 库存分离 | SKU独立库存 | 精确管理每个规格的库存 |
| 状态字段 | status控制上下架 | 灵活控制商品展示 |

### 案例2：订单系统的数据设计

**场景**：设计一个电商订单系统的数据表。

**设计要点：**

| 设计决策 | 说明 | 产品价值 |
|---------|------|---------|
| 订单和商品分离 | 一对多关系 | 一个订单可含多个商品 |
| 数据快照 | 存储商品名称和价格 | 防止商品信息变更影响历史订单 |
| 状态拆分 | order_status + pay_status | 细粒度控制订单和支付状态 |

---

## 五、常见误区

### 误区1："表越多越好"

**错误认知**：功能复杂就需要很多表，表越多设计越专业。

**正确理解**：表的数量应该合理，避免过度设计：

| 问题 | 说明 | 建议 |
|-----|------|------|
| 表过多 | 增加关联复杂度 | 合理合并相关数据 |
| 表过少 | 数据冗余，难以维护 | 按实体拆分表 |
| 过度设计 | 预留大量无用字段 | 按需设计，预留扩展字段即可 |

### 误区2："所有字段都要建索引"

**错误认知**：索引能提高查询速度，所以所有字段都建索引。

**正确理解**：索引有成本，需要合理使用：

| 成本 | 说明 |
|-----|------|
| 存储成本 | 每个索引都需要额外存储空间 |
| 写入成本 | 插入、更新、删除时需要维护索引 |
| 维护成本 | 索引过多会增加数据库维护负担 |

### 误区3："数据库设计是开发的事"

**错误认知**：数据库设计太技术，产品经理不需要参与。

**正确理解**：产品经理应该参与数据库设计评审：

| 参与价值 | 说明 |
|---------|------|
| 业务完整性 | 确保数据设计覆盖所有业务场景 |
| 扩展性评估 | 评估未来业务增长对数据的影响 |
| 查询需求 | 确保数据设计支持产品查询需求 |
| 数据安全 | 关注敏感数据的存储和保护 |

---

## 六、本节小结

### 产品经理需要记住的3句话

1. **数据表是现实世界的映射**——好的表设计能准确反映业务实体和关系
2. **索引是查询和写入的权衡**——不是越多越好，要根据查询需求合理设计
3. **参与数据库设计评审**——从业务角度确保数据设计满足产品需求

### 自检清单

在参与数据库设计时，问自己这些问题：

- 数据表是否覆盖了所有业务实体和关系？
- 主键选择是否合理？是否考虑了分布式场景？
- 查询频繁的字段是否有索引支持？
- 敏感数据是否有加密或脱敏处理？
- 是否考虑了数据增长和性能优化方案？
`
},
{
    id: 'db-2',
    categoryId: 'database',
    title: '非关系型数据库',
    difficulty: 'intermediate',
    summary: '了解NoSQL四大类型，掌握MongoDB、Redis等数据库的适用场景。',
    technicalContent: {
        principle: `
<h4>技术原理</h4>
<p><strong>非关系型数据库（NoSQL）</strong>是一种不遵循传统关系型数据库表结构的数据存储方案，通过键值对、文档、列族或图等灵活格式存储数据，特别适合处理海量、高并发、非结构化的数据场景。</p>
<h5>NoSQL四大类型</h5>
<table class="concept-table">
<tr>
<th>类型</th>
<th>代表产品</th>
<th>数据模型</th>
<th>适用场景</th>
</tr>
<tr>
<td>键值存储</td>
<td>Redis、Memcached</td>
<td>Key-Value</td>
<td>缓存、会话、计数器</td>
</tr>
<tr>
<td>文档存储</td>
<td>MongoDB、CouchDB</td>
<td>JSON文档</td>
<td>内容管理、日志、用户数据</td>
</tr>
<tr>
<td>列族存储</td>
<td>HBase、Cassandra</td>
<td>列族</td>
<td>大数据分析、时序数据</td>
</tr>
<tr>
<td>图数据库</td>
<td>Neo4j、JanusGraph</td>
<td>节点和边</td>
<td>社交网络、推荐系统</td>
</tr>
</table>
`,
        role: `
<h4>核心作用</h4>
<div class="role-grid">
<div class="role-card">
<h5>MongoDB特点</h5>
<ul>
<li><strong>灵活Schema</strong>：无需预定义表结构</li>
<li><strong>嵌套文档</strong>：支持复杂嵌套结构</li>
<li><strong>水平扩展</strong>：支持分片，易扩展</li>
<li><strong>JSON格式</strong>：与前端数据格式一致</li>
</ul>
</div>
<div class="role-card">
<h5>Redis特点</h5>
<ul>
<li><strong>高性能</strong>：内存存储，读写极快</li>
<li><strong>数据结构丰富</strong>：String/Hash/List/Set</li>
<li><strong>持久化</strong>：支持数据持久化到磁盘</li>
<li><strong>原子操作</strong>：支持事务和原子命令</li>
</ul>
</div>
</div>
`,
        businessScenario: `
<h4>业务场景</h4>
<div class="scenario-timeline">
<div class="scenario-item">
<div class="scenario-number">1</div>
<div class="scenario-content">
<h5>会话缓存（Redis）</h5>
<p><strong>场景</strong>：电商网站用户登录会话管理</p>
<p><strong>选择</strong>：Redis键值存储</p>
<p><strong>原因</strong>：避免频繁查询数据库，减轻DB压力，提升响应速度</p>
</div>
</div>
<div class="scenario-item">
<div class="scenario-number">2</div>
<div class="scenario-content">
<h5>商品信息存储（MongoDB）</h5>
<p><strong>场景</strong>：电商平台商品信息管理</p>
<p><strong>选择</strong>：MongoDB文档存储</p>
<p><strong>原因</strong>：不同品类字段差异大，同一集合存储不同结构文档</p>
</div>
</div>
<div class="scenario-item">
<div class="scenario-number">3</div>
<div class="scenario-content">
<h5>实时排行榜（Redis有序集合）</h5>
<p><strong>场景</strong>：游戏实时排行榜</p>
<p><strong>选择</strong>：Redis Sorted Set</p>
<p><strong>原因</strong>：自动排序、实时更新、支持范围查询</p>
</div>
</div>
</div>
`,
        pmDevScenario: `
<h4>产品经理与开发沟通场景</h4>
<div class="conversation-box">
<div class="conversation-item good">
<div class="conv-header">
<span class="conv-icon">✅</span>
<span class="conv-title">技术选型讨论</span>
</div>
<div class="conv-content">
<p><strong>产品经理：</strong>"我们的APP需要实现一个用户积分排行榜，要求实时更新，支持查看前100名，这个难度大吗？"</p>
<p><strong>开发：</strong>"这个功能用Redis的有序集合（Sorted Set）来实现最合适。它的特点是：插入数据时自动按分数排序，查询Top100非常快，几乎是毫秒级。"</p>
<p><strong>产品经理：</strong>"那需要多少服务器资源？"</p>
<p><strong>开发：</strong>"单台Redis实例可以支持几十万玩家没问题。如果用户量更大，可以用Redis Cluster分片扩展。"</p>
</div>
</div>
</div>
<div class="tips-box">
<h5>数据库选型清单</h5>
<ul>
<li>数据结构是否固定？</li>
<li>是否需要复杂查询？</li>
<li>数据量有多大？</li>
<li>读写频率如何？</li>
<li>是否需要事务支持？</li>
</ul>
</div>
`
    },
    content: `
# 非关系型数据库

## 一句话解释

非关系型数据库（NoSQL）是一种不遵循传统关系型数据库表结构的数据存储方案，通过键值对、文档、列族或图等灵活格式存储数据，特别适合处理海量、高并发、非结构化的数据场景。

---

## 生活化比喻

### 比喻一：图书馆 vs 储物柜

| 存储方式 | 类比 | 特点 |
|---------|------|------|
| **关系型数据库** | 传统图书馆 | 书籍按分类号严格排列，每本书有固定位置，查找需要遵循目录规则 |
| **键值数据库** | 快递柜 | 每个包裹对应一个取件码（Key），扫码即取，不关心里面是什么 |
| **文档数据库** | 档案袋 | 每个档案袋装一份完整资料，格式灵活，可以装不同内容 |

### 比喻二：Excel vs 便签墙

想象一下：
- **Excel表格（关系型）**：所有数据必须填入固定的行列，格式统一，方便统计计算
- **便签墙（NoSQL）**：每张便签可以写不同内容，贴哪里都行，快速灵活，适合头脑风暴

---

## 技术原理解析

### 四大NoSQL类型详解

#### 1. 键值存储 (Key-Value Store)

最简单的存储模型，查询速度极快。代表：Redis、Memcached、etcd。

\`\`\`
Key          │  Value
──────────────┼────────────────────────────
user:1001     │  {"name":"张三","age":25}
session:abc   │  {"userId":1001,"loginTime":"..."}
cache:page1   │  "<html>...</html>"
\`\`\`

#### 2. 文档存储 (Document Store)

JSON格式，支持嵌套结构，灵活Schema。代表：MongoDB、CouchDB、Elasticsearch。

\`\`\`json
{
  "_id": "user_1001",
  "name": "张三",
  "orders": [
    {"id": "O001", "amount": 199},
    {"id": "O002", "amount": 299}
  ],
  "address": {
    "city": "北京",
    "street": "中关村"
  }
}
\`\`\`

#### 3. 列族存储 (Wide Column Store)

按列存储，适合海量数据，水平扩展能力强。代表：HBase、Cassandra、Google Bigtable。

#### 4. 图数据库 (Graph Database)

专门存储实体关系，社交网络、推荐系统首选。代表：Neo4j、Amazon Neptune、JanusGraph。

---

## 核心作用与价值

### 技术价值

| 价值维度 | 说明 |
|---------|------|
| **高性能** | 简单的数据模型带来极高的读写性能，Redis可达10万+ QPS |
| **高可扩展** | 天然支持分布式架构，轻松水平扩展至数百节点 |
| **灵活Schema** | 无需预定义表结构，适应快速迭代的业务需求 |
| **大数据量** | 专为海量数据设计，轻松处理PB级数据 |
| **高可用** | 内置复制、分片机制，自动故障转移 |

### 业务价值

| 场景类型 | 传统方案 | NoSQL方案 |
|---------|---------|---------|
| 用户会话存储 | 数据库查询慢 | Redis缓存，毫秒级响应 |
| 商品详情页 | 多表JOIN慢 | MongoDB文档，单文档查询 |
| 实时排行榜 | 定时统计慢 | Redis有序集合，实时更新 |
| 日志存储 | 写入瓶颈 | HBase批量写入，高吞吐 |
| 社交关系 | 多层JOIN复杂 | Neo4j图遍历，高效查询 |

---

## 典型业务场景

### 场景一：会话缓存（Redis键值存储）

电商网站用户登录会话管理：

- 用户登录后生成Token
- Token和用户信息存入Redis，设置过期时间
- 后续请求携带Token，Redis查询验证
- 优势：避免频繁查询数据库，减轻DB压力，提升响应速度

### 场景二：商品信息存储（MongoDB文档存储）

电商平台商品信息管理：

- 不同品类字段差异大（手机有内存参数，服装有尺码参数）
- MongoDB每个文档可以有不同的字段结构
- 优势：同一集合存储不同结构文档，无需为每种商品建表

### 场景三：实时排行榜（Redis有序集合）

游戏实时排行榜：

- Redis Sorted Set自动按分数排序
- 支持实时更新、范围查询、个人排名查询
- 优势：自动排序、实时更新、性能极高

---

## 常见误区与避坑指南

### 误区一：NoSQL可以完全替代关系型数据库

**错误认知**：NoSQL更先进，新项目都应该用NoSQL

**正确理解**：两者是互补关系，不是替代关系

| 关系型数据库适合 | NoSQL适合 |
|----------------|----------|
| 事务性业务（订单、支付） | 高并发缓存 |
| 复杂查询、报表统计 | 海量日志存储 |
| 数据强一致性要求 | 灵活Schema场景 |
| 多表关联分析 | 实时计算场景 |

**实际项目通常是：MySQL + Redis + MongoDB 组合使用**

### 误区二：NoSQL不需要设计数据模型

**错误认知**：NoSQL是Schema-less，可以随意存数据

**正确理解**：虽然不需要预定义Schema，但仍需合理设计

| 不好的设计 | 好的设计 |
|-----------|---------|
| 所有数据塞一个集合 | 按业务领域分集合 |
| 文档嵌套层级过深 | 控制嵌套在3层以内 |
| 单文档体积过大(>16MB) | 大数组拆分到独立集合 |
| 没有考虑查询模式 | 根据查询需求设计索引 |

### 误区三：Redis只是缓存

**错误认知**：Redis只能当缓存用，数据丢了没关系

**正确理解**：Redis支持持久化，可以作主数据库使用

Redis持久化方式：
- **RDB**：定时快照，适合备份恢复
- **AOF**：记录写操作，数据更安全
- **混合模式**：RDB + AOF，兼顾性能和安全

---

## 知识回顾

### 核心要点

1. **NoSQL四大类型**：键值存储、文档存储、列族存储、图数据库
2. **键值对**：最简单的数据模型，Key唯一标识，Value存储数据
3. **JSON格式**：文档数据库的标准格式，支持嵌套和数组
4. **适用场景**：高并发、海量数据、灵活Schema、实时计算
5. **选型原则**：根据数据特点和访问模式选择合适的数据库

### 一句话总结

> NoSQL不是银弹，但在合适的场景下，它能解决关系型数据库难以应对的高并发和大数据挑战。
`
},
{
    id: 'db-3',
    categoryId: 'database',
    title: 'SQL语言基础',
    difficulty: 'intermediate',
    summary: '掌握SQL增删改查基础语法，能读懂SQL语句，理解数据查询逻辑。',
    technicalContent: {
        principle: `
<h4>技术原理</h4>
<p><strong>SQL（Structured Query Language，结构化查询语言）</strong>是操作关系型数据库的标准语言，通过简单的声明式语句实现数据的增删改查，是产品经理与开发沟通数据需求、验证数据逻辑的重要工具。</p>
<h5>SQL语言分类</h5>
<table class="concept-table">
<tr>
<th>分类</th>
<th>说明</th>
<th>主要语句</th>
</tr>
<tr>
<td>DDL（数据定义语言）</td>
<td>定义数据库结构</td>
<td>CREATE、ALTER、DROP</td>
</tr>
<tr>
<td>DML（数据操作语言）</td>
<td>操作数据</td>
<td>INSERT、UPDATE、DELETE</td>
</tr>
<tr>
<td>DQL（数据查询语言）</td>
<td>查询数据</td>
<td>SELECT、FROM、WHERE、GROUP BY、ORDER BY</td>
</tr>
</table>
`,
        role: `
<h4>核心作用</h4>
<div class="role-grid">
<div class="role-card">
<h5>数据验证</h5>
<ul>
<li><strong>验证报表数据</strong>：核对数据来源和口径</li>
<li><strong>确认数据范围</strong>：理解筛选条件</li>
<li><strong>核对统计口径</strong>：确保数据准确</li>
</ul>
</div>
<div class="role-card">
<h5>需求沟通</h5>
<ul>
<li><strong>准确描述需求</strong>：用SQL表达数据逻辑</li>
<li><strong>理解开发方案</strong>：评估实现难度</li>
<li><strong>问题排查</strong>：定位数据问题</li>
</ul>
</div>
</div>
`,
        businessScenario: `
<h4>业务场景</h4>
<div class="scenario-timeline">
<div class="scenario-item">
<div class="scenario-number">1</div>
<div class="scenario-content">
<h5>用户增长分析</h5>
<p><strong>需求</strong>：查询最近30天每日新增用户数</p>
<p><strong>SQL</strong>：SELECT DATE(created_at), COUNT(*) FROM users WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) GROUP BY DATE(created_at)</p>
</div>
</div>
<div class="scenario-item">
<div class="scenario-number">2</div>
<div class="scenario-content">
<h5>销售数据统计</h5>
<p><strong>需求</strong>：查询各品类月度销售额TOP10</p>
<p><strong>SQL</strong>：SELECT category, SUM(amount) FROM orders GROUP BY category ORDER BY SUM(amount) DESC LIMIT 10</p>
</div>
</div>
<div class="scenario-item">
<div class="scenario-number">3</div>
<div class="scenario-content">
<h5>用户留存分析</h5>
<p><strong>需求</strong>：计算某日注册用户的次日留存率</p>
<p><strong>方法</strong>：找出注册用户，关联登录日志，计算比例</p>
</div>
</div>
</div>
`,
        pmDevScenario: `
<h4>产品经理与开发沟通场景</h4>
<div class="conversation-box">
<div class="conversation-item good">
<div class="conv-header">
<span class="conv-icon">✅</span>
<span class="conv-title">数据需求沟通</span>
</div>
<div class="conv-content">
<p><strong>产品经理：</strong>"我需要统计'过去7天内，每个渠道的新注册用户中，完成实名认证的比例'"。</p>
<p><strong>开发：</strong>"这个需求涉及用户表和认证记录表，我需要确认几个点：1. 渠道信息存在哪个字段？2. 实名认证的状态怎么判断？3. 是按注册日期分组，还是按认证日期分组？"</p>
<p><strong>产品经理：</strong>"渠道是channel字段，认证状态看auth_status = 'verified'，按注册日期分组，看注册后7天内是否完成认证。"</p>
</div>
</div>
</div>
<div class="tips-box">
<h5>SQL能力层级</h5>
<ul>
<li><strong>Level 1</strong>：能读懂SQL，理解查询逻辑</li>
<li><strong>Level 2</strong>：能写简单查询（单表+条件）</li>
<li><strong>Level 3</strong>：能写复杂查询（多表JOIN+聚合）</li>
<li><strong>Level 4</strong>：能优化SQL性能</li>
</ul>
</div>
`
    },
    content: `
# SQL语言基础

## 一句话解释

SQL（Structured Query Language，结构化查询语言）是操作关系型数据库的标准语言，通过简单的声明式语句实现数据的增删改查，是产品经理与开发沟通数据需求、验证数据逻辑的重要工具。

---

## 生活化比喻

### 比喻一：餐厅点餐

| SQL操作 | 餐厅类比 | 说明 |
|---------|---------|------|
| **SELECT** | 看菜单点菜 | "我要看你们有什么菜" |
| **INSERT** | 下单加菜 | "再加一份红烧肉" |
| **UPDATE** | 修改订单 | "刚才的奶茶改成去冰" |
| **DELETE** | 退菜 | "这个菜不要了" |
| **WHERE** | 指定条件 | "只要微辣的菜" |
| **ORDER BY** | 排序要求 | "按价格从低到高排" |

### 比喻二：图书馆借书

想象数据库是一个图书馆：
- **SELECT** = 找书（"我要找编程类的书"）
- **FROM** = 指定书架（"在计算机类书架"）
- **WHERE** = 筛选条件（"作者是张三的"）
- **ORDER BY** = 排序（"按出版日期最新的排前面"）
- **LIMIT** = 限制数量（"先拿前5本看看"）

---

## 技术原理解析

### SQL执行流程

\`\`\`
编写SQL语句 → 解析语法检查 → 优化生成计划 → 执行返回结果
\`\`\`

### 数据查询核心语法

\`\`\`sql
SELECT DISTINCT column1, column2, ...    -- 选择列
FROM table_name                          -- 指定表
WHERE condition                          -- 过滤条件
GROUP BY column                          -- 分组
HAVING condition                         -- 分组过滤
ORDER BY column [ASC|DESC]               -- 排序
LIMIT number [OFFSET number];            -- 限制结果
\`\`\`

**执行顺序（重要！）**：FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

### 多表关联查询

| 关联类型 | 语法 | 说明 |
|---------|------|------|
| **内连接** | INNER JOIN | 只返回两表匹配的数据 |
| **左连接** | LEFT JOIN | 返回左表所有数据，右表不匹配则为NULL |
| **右连接** | RIGHT JOIN | 返回右表所有数据，左表不匹配则为NULL |
| **全连接** | FULL OUTER JOIN | 返回两表所有数据（MySQL不支持） |

---

## 核心作用与价值

### 产品经理为什么需要懂SQL

| 能力 | 说明 |
|-----|------|
| **数据验证** | 验证报表数据、核对统计口径、确认数据范围 |
| **需求沟通** | 准确描述需求、理解开发方案、评估实现难度 |
| **问题排查** | 定位数据问题、分析异常原因、验证修复结果 |

### SQL能力层级

| 层级 | 能力描述 | 适用场景 |
|------|---------|---------|
| **Level 1** | 能读懂SQL，理解查询逻辑 | 查看报表SQL，理解数据来源 |
| **Level 2** | 能写简单查询（单表+条件） | 日常数据验证，简单统计 |
| **Level 3** | 能写复杂查询（多表JOIN+聚合） | 复杂业务分析，漏斗分析 |
| **Level 4** | 能优化SQL性能 | 参与技术方案评审，性能优化 |

---

## 常用SQL速查表

### 基础查询

| 操作 | 语法示例 | 说明 |
|------|---------|------|
| **查询所有列** | SELECT * FROM users; | 查看表中所有数据 |
| **查询指定列** | SELECT name, email FROM users; | 只返回需要的字段 |
| **去重** | SELECT DISTINCT city FROM users; | 返回不重复的城市 |
| **条件查询** | SELECT * FROM users WHERE age > 18; | 筛选符合条件的记录 |
| **模糊查询** | SELECT * FROM users WHERE name LIKE '%张%'; | 姓名包含"张"的用户 |
| **范围查询** | SELECT * FROM orders WHERE amount BETWEEN 100 AND 500; | 金额在100-500之间 |
| **排序** | ORDER BY created_at DESC | 按时间倒序排列 |
| **限制条数** | LIMIT 10 / LIMIT 10 OFFSET 20 | 只返回前10条/分页 |

### 聚合函数

| 函数 | 示例 | 说明 |
|------|------|------|
| **COUNT** | COUNT(*) / COUNT(DISTINCT user_id) | 计数/去重计数 |
| **SUM** | SUM(amount) | 求和 |
| **AVG** | AVG(score) | 平均值 |
| **MAX** | MAX(created_at) | 最大值 |
| **MIN** | MIN(price) | 最小值 |
| **分组** | GROUP BY category | 按品类分组统计 |
| **分组过滤** | HAVING COUNT(*) > 10 | 分组后筛选 |

### 数据修改

| 操作 | 语法示例 | 说明 |
|------|---------|------|
| **插入** | INSERT INTO users (name, email) VALUES ('张三', 'zs@example.com'); | 新增记录 |
| **批量插入** | INSERT INTO users (name) VALUES ('A'), ('B'), ('C'); | 一次插入多条 |
| **更新** | UPDATE users SET status = 'inactive' WHERE id = 1; | 修改记录 |
| **删除** | DELETE FROM users WHERE id = 1; | 删除记录（慎用！） |
| **逻辑删除** | UPDATE users SET is_deleted = 1 WHERE id = 1; | 标记删除（推荐） |

---

## 常见误区与避坑指南

### 误区一：SELECT * 性能没问题

\`\`\`sql
-- ❌ 不推荐
SELECT * FROM orders WHERE user_id = 123;

-- ✅ 推荐
SELECT id, order_no, amount, status, created_at 
FROM orders 
WHERE user_id = 123;
\`\`\`

**原因**：
- 减少网络传输数据量
- 避免查询不需要的大字段（如text类型）
- 提高缓存命中率

### 误区二：忘记加WHERE条件

\`\`\`sql
-- ❌ 危险操作（会更新/删除全表！）
UPDATE users SET status = 'inactive';
DELETE FROM users;

-- ✅ 正确操作
UPDATE users SET status = 'inactive' WHERE last_login < '2023-01-01';
DELETE FROM users WHERE is_test = 1;
\`\`\`

**保命建议**：
- UPDATE/DELETE前先用SELECT验证条件
- 开启安全模式（SET SQL_SAFE_UPDATES = 1）
- 重要操作先在测试环境执行

### 误区三：忽视NULL值

\`\`\`sql
-- ❌ 错误：结果不会包含phone为NULL的记录
SELECT * FROM users WHERE phone != '13800138000';

-- ✅ 正确
SELECT * FROM users 
WHERE phone != '13800138000' OR phone IS NULL;
\`\`\`

**原因**：NULL与任何值的比较结果都是NULL（假），判断NULL必须用 IS NULL / IS NOT NULL

---

## 知识回顾

### 核心要点

1. **SQL分类**：DDL（定义）、DML（操作）、DQL（查询）
2. **SELECT结构**：SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT
3. **关联查询**：INNER JOIN、LEFT JOIN、RIGHT JOIN的区别和应用场景
4. **聚合函数**：COUNT、SUM、AVG、MAX、MIN配合GROUP BY使用
5. **数据修改**：INSERT、UPDATE、DELETE要谨慎，建议先SELECT验证

### 一句话总结

> SQL是产品经理的数据语言，掌握基础查询能让你更好地理解数据、沟通需求、发现问题。
`
},
{
    id: 'db-4',
    categoryId: 'database',
    title: '数据流转与恢复',
    difficulty: 'intermediate',
    summary: '理解逻辑删除与物理删除的区别，掌握数据备份策略和恢复机制。',
    technicalContent: {
        principle: `
<h4>技术原理</h4>
<p><strong>数据流转与恢复</strong>是保障数据安全和业务连续性的核心机制，逻辑删除通过标记实现数据可恢复，物理删除彻底移除数据，而备份恢复策略则是应对数据丢失的最后防线。</p>
<h5>删除策略对比</h5>
<table class="concept-table">
<tr>
<th>策略</th>
<th>实现方式</th>
<th>优势</th>
<th>劣势</th>
</tr>
<tr>
<td>软删除</td>
<td>is_deleted字段标记</td>
<td>可恢复、有审计</td>
<td>占用存储、查询需过滤</td>
</tr>
<tr>
<td>硬删除</td>
<td>DELETE语句</td>
<td>节省空间</td>
<td>不可恢复、无审计</td>
</tr>
<tr>
<td>归档删除</td>
<td>移到归档表</td>
<td>主表轻量、可恢复</td>
<td>增加复杂度</td>
</tr>
</table>
`,
        role: `
<h4>核心作用</h4>
<div class="role-grid">
<div class="role-card">
<h5>软删除实现</h5>
<ul>
<li><strong>字段设计</strong>：is_deleted (Boolean)</li>
<li><strong>删除时间</strong>：deleted_at (DateTime)</li>
<li><strong>删除人</strong>：deleted_by (UserId)</li>
<li><strong>查询过滤</strong>：WHERE is_deleted = false</li>
</ul>
</div>
<div class="role-card">
<h5>数据备份策略</h5>
<ul>
<li><strong>全量备份</strong>：每天凌晨完整备份</li>
<li><strong>增量备份</strong>：每小时备份变更数据</li>
<li><strong>binlog</strong>：实时记录数据变更</li>
<li><strong>恢复演练</strong>：定期测试恢复流程</li>
</ul>
</div>
</div>
`,
        businessScenario: `
<h4>业务场景</h4>
<div class="scenario-timeline">
<div class="scenario-item">
<div class="scenario-number">1</div>
<div class="scenario-content">
<h5>用户注销账号</h5>
<p><strong>软删除</strong>：标记用户为已删除，保留数据30天</p>
<p><strong>后悔期</strong>：30天内可恢复账号</p>
<p><strong>硬删除</strong>：30天后物理删除，符合隐私法规</p>
</div>
</div>
<div class="scenario-item">
<div class="scenario-number">2</div>
<div class="scenario-content">
<h5>订单数据归档</h5>
<p><strong>场景</strong>：订单表数据量过大，影响查询性能</p>
<p><strong>方案</strong>：将3年前的已完成订单归档到历史表</p>
<p><strong>好处</strong>：主表轻量，历史数据可查</p>
</div>
</div>
<div class="scenario-item">
<div class="scenario-number">3</div>
<div class="scenario-content">
<h5>数据库灾难恢复</h5>
<p><strong>场景</strong>：生产数据库服务器硬件故障</p>
<p><strong>恢复</strong>：从备份+binlog恢复数据</p>
<p><strong>RPO/RTO</strong>：恢复点目标/恢复时间目标</p>
</div>
</div>
</div>
`,
        pmDevScenario: `
<h4>产品经理与开发沟通场景</h4>
<div class="conversation-box">
<div class="conversation-item good">
<div class="conv-header">
<span class="conv-icon">✅</span>
<span class="conv-title">删除策略讨论</span>
</div>
<div class="conv-content">
<p><strong>产品经理：</strong>"用户删除订单的功能，数据是直接删掉还是怎么处理？"</p>
<p><strong>开发：</strong>"我建议采用逻辑删除，原因：1. 用户可能误操作，需要恢复功能 2. 财务审计需要保留订单记录 3. 数据分析需要历史订单数据"</p>
<p><strong>产品经理：</strong>"那已删除的订单在列表里还显示吗？"</p>
<p><strong>开发：</strong>"可以设计一个'回收站'功能：默认列表只显示未删除订单，用户可以在'回收站'查看30天内删除的订单，30天后系统自动清理。"</p>
</div>
</div>
</div>
<div class="tips-box">
<h5>数据删除设计清单</h5>
<ul>
<li>删除后是否需要恢复？</li>
<li>后悔期多长？</li>
<li>是否需要操作日志？</li>
<li>备份策略是什么？</li>
<li>是否符合隐私法规？</li>
</ul>
</div>
`
    },
    content: `
# 数据流转与恢复

## 一句话解释

数据流转与恢复是保障数据安全和业务连续性的核心机制，逻辑删除通过标记实现数据可恢复，物理删除彻底移除数据，而备份恢复策略则是应对数据丢失的最后防线。

---

## 生活化比喻

### 比喻一：文件管理系统

| 操作类型 | 类比 | 说明 |
|---------|------|------|
| **逻辑删除** | 放入回收站 | 文件还在，只是标记为"已删除"，随时可以恢复 |
| **物理删除** | 清空回收站 | 文件真正从硬盘上抹除，无法恢复 |
| **备份** | 复印存档 | 定期把重要文件复印一份存到保险柜 |
| **恢复** | 从保险柜取回 | 原件丢失时，用复印件还原 |

### 比喻二：员工档案管理

想象公司的人事档案管理：
- **在职员工**：档案在"在职"文件夹（正常数据）
- **离职员工**：档案移到"离职"文件夹（逻辑删除，标记状态）
- **销毁档案**：超过保存期限后彻底销毁（物理删除）
- **档案备份**：每月把档案复印一份存到档案室（数据备份）

---

## 技术原理解析

### 逻辑删除 vs 物理删除

#### 物理删除 (Physical Delete)

\`\`\`sql
DELETE FROM users WHERE id = 1;
\`\`\`

**特点**：
- 数据不可恢复（除非有备份）
- 释放存储空间
- 关联数据可能变成"孤儿数据"

#### 逻辑删除 (Logical Delete)

\`\`\`sql
UPDATE users SET is_deleted = 1, deleted_at = NOW() WHERE id = 1;
\`\`\`

**特点**：
- 数据可恢复（改is_deleted=0即可）
- 保留历史记录，便于审计
- 查询时需要过滤：WHERE is_deleted = 0
- 占用额外存储空间

### 数据备份策略

#### 全量备份 (Full Backup)

每天完整备份所有数据。

- **优点**：恢复简单，一份备份即可还原
- **缺点**：备份时间长，占用空间大
- **适用**：数据量小，或关键系统每日备份

#### 增量备份 (Incremental Backup)

只备份自上次备份以来变化的数据。

- **优点**：备份速度快，占用空间小
- **缺点**：恢复复杂，需要按顺序恢复所有备份
- **适用**：数据量大，变化频繁的场景

#### 差异备份 (Differential Backup)

备份自上次全量备份以来所有变化的数据。

- **优点**：恢复较快，只需全量+最新差异
- **缺点**：备份文件逐渐增大
- **适用**：折中方案，平衡备份和恢复效率

---

## 核心作用与价值

### 业务价值

| 价值维度 | 说明 |
|---------|------|
| **误操作防护** | 手滑删除可恢复、程序BUG可回滚、用户误操作可撤销 |
| **合规要求** | 数据保留期限、审计追溯需求、法律法规要求 |
| **业务连续性** | 灾难快速恢复、减少停机时间、保障收入稳定 |

### 技术价值

| 价值维度 | 逻辑删除 | 物理删除 | 备份恢复 |
|---------|---------|---------|---------|
| **数据可追溯** | ✅ 完整历史 | ❌ 无法追溯 | ✅ 可还原到某时点 |
| **存储成本** | ❌ 较高 | ✅ 最低 | ❌ 需要额外存储 |
| **查询复杂度** | ❌ 需过滤 | ✅ 简单 | - |
| **恢复速度** | ✅ 即时 | ❌ 不可恢复 | ❌ 需要恢复时间 |
| **审计合规** | ✅ 支持 | ❌ 不支持 | ✅ 支持 |

---

## 典型业务场景

### 场景一：用户注销与恢复

用户申请注销账号的完整流程：

1. **冷静期处理（7-30天）**
   - 账号标记为"注销中"
   - 禁止登录，但数据保留
   - 用户可随时取消注销

2. **冷静期结束 → 执行逻辑删除**
   - UPDATE users SET status = 'deleted', is_deleted = 1, deleted_at = NOW()
   - 同时脱敏敏感信息（手机号、邮箱）
   - 保留订单等交易数据（合规要求）

3. **保留期（通常1-3年）**
   - 数据可恢复（用户申诉）
   - 支持法律纠纷取证

4. **保留期结束 → 物理删除/归档**
   - 彻底删除或移至冷存储

### 场景二：订单数据归档

\`\`\`sql
-- 第1步：创建历史订单表
CREATE TABLE orders_history LIKE orders;

-- 第2步：将3年前的已完成订单迁移到历史表
INSERT INTO orders_history
SELECT * FROM orders
WHERE status = 'completed'
  AND completed_at < DATE_SUB(CURDATE(), INTERVAL 3 YEAR);

-- 第3步：从原表删除已归档数据
DELETE FROM orders
WHERE status = 'completed'
  AND completed_at < DATE_SUB(CURDATE(), INTERVAL 3 YEAR);
\`\`\`

### 场景三：数据库灾难恢复

**灾难场景**：生产数据库服务器硬件故障，数据无法读取

**恢复方案**（基于每日全量+每小时增量备份）：

1. 准备新服务器
2. 恢复最近全量备份
3. 应用增量备份
4. 应用binlog恢复到故障前
5. 验证数据完整性
6. 切换应用到新数据库

**关键指标**：
- **RPO（恢复点目标）**：最坏情况下会丢失多少数据
- **RTO（恢复时间目标）**：从故障发生到业务恢复需要多久

---

## 常见误区与避坑指南

### 误区一：逻辑删除就是万能的

**错误认知**：所有删除都用逻辑删除，永不物理删除

**正确理解**：根据数据类型选择合适的删除策略

| 数据类型 | 推荐策略 | 理由 |
|---------|---------|------|
| 用户账号 | 逻辑删除+定期清理 | 支持恢复，合规要求 |
| 订单记录 | 逻辑删除（永不物理删除） | 财务审计需要 |
| 系统日志 | 定期物理删除/归档 | 数据量巨大，有保留期限 |
| 临时文件 | 物理删除 | 无恢复价值 |
| 缓存数据 | 物理删除/过期自动清理 | 可重新生成 |

### 误区二：备份了就高枕无忧

**错误认知**：每天自动备份，数据安全没问题

**正确理解**：备份需要验证，恢复需要演练

**备份 checklist**：
- 备份任务是否成功执行？
- 备份文件是否完整可读取？
- 备份文件是否存储在异地？
- 是否定期进行恢复演练？
- 恢复流程文档是否最新？

### 误区三：物理删除可以释放所有空间

**错误认知**：DELETE删除数据后，数据库文件会变小

**正确理解**：DELETE只是标记删除，需要OPTIMIZE才能释放空间

\`\`\`sql
-- 删除大量数据
DELETE FROM logs WHERE created_at < '2023-01-01';
-- 表文件大小不变！

-- 需要执行优化命令才能真正释放空间
OPTIMIZE TABLE logs;
\`\`\`

### 误区四：软删除不影响性能

**错误认知**：加is_deleted字段过滤对性能没影响

**正确理解**：忘记加索引会导致全表扫描

\`\`\`sql
-- 不好的做法
SELECT * FROM orders WHERE is_deleted = 0;
-- 如果没有索引，会扫描全表

-- 好的做法
-- 1. 给is_deleted加索引
CREATE INDEX idx_is_deleted ON orders(is_deleted);

-- 2. 或者使用组合索引（更优）
CREATE INDEX idx_user_deleted ON orders(user_id, is_deleted);
\`\`\`

---

## 知识回顾

### 核心要点

1. **逻辑删除**：通过标记位（is_deleted）实现，数据可恢复，适合业务数据
2. **物理删除**：彻底删除数据，不可恢复，适合临时数据或过期数据
3. **备份策略**：全量备份、增量备份、差异备份各有适用场景
4. **RPO/RTO**：恢复点目标（丢多少数据）和恢复时间目标（多久恢复）
5. **数据生命周期**：创建 → 使用 → 归档 → 销毁，每个阶段需要不同策略

### 一句话总结

> 数据是企业的核心资产，逻辑删除提供"后悔药"，备份策略提供"保险单"，两者结合才能确保数据安全和业务连续性。
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
