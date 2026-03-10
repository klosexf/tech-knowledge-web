/**
 * @fileoverview 分类定义模块
 * @description 定义知识库的所有分类信息，包括分类ID、名称、图标、描述和主题列表
 * @module data/categories
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 导入分类数据
 * import { categories } from './categories.js';
 * 
 * // 获取所有分类
 * console.log(categories);
 * 
 * // 根据ID查找分类
 * const category = categories.find(c => c.id === 'architecture');
 */

/**
 * 知识库分类数组
 * @type {Array<Object>}
 * @property {string} id - 分类唯一标识符
 * @property {string} name - 分类名称
 * @property {string} icon - 分类图标（emoji）
 * @property {string} description - 分类描述
 * @property {Array<string>} topics - 该分类下的主题列表
 */
var categories = [
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
        id: 'database',
        name: '数据存储原理',
        icon: '🗄️',
        description: '理解数据存在哪里，产品经理怎么设计数据',
        topics: ['Excel式存储', '文件夹式存储', '怎么查数据', '删了还能找回吗']
    },
    {
        id: 'data',
        name: '数据驱动产品',
        icon: '📊',
        description: '用数据说话，产品经理必看的数据指标',
        topics: ['核心数据指标', '数据怎么看', '数据怎么展示']
    }
];

// 浏览器环境：挂载到 window 对象
if (typeof window !== 'undefined') {
    window.categories = categories;
}

// Node.js 环境：CommonJS 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories };
}
