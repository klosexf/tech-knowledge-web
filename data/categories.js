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
        topics: ['一个APP是怎么跑起来的', '用户点击按钮后发生了什么', '开发是怎么思考问题的', '什么能做，什么做不了']
    },
    {
        id: 'programming',
        name: '编程入门知识',
        icon: '💻',
        description: '理解编程基本原理与逻辑，掌握数据类型、逻辑结构、数据结构、函数方法等核心概念',
        topics: ['基本数据类型', '逻辑结构', '数据结构', '函数与方法']
    },
    {
        id: 'frontend',
        name: '手机APP是怎么做的',
        icon: '📱',
        description: '理解客户端技术，掌握平台特性、基本控件、Web技术和应用类型',
        topics: ['主流平台特性', '基本控件', 'Web技术', '应用类型']
    },
    {
        id: 'backend',
        name: '服务器和接口',
        icon: '⚙️',
        description: '理解后台是怎么工作的，学会看接口文档，掌握云服务与运维知识',
        topics: ['后端开发环境', 'API接口文档', '云服务与运维', '接口基础', '常见接口类型']
    },
    {
        id: 'database',
        name: '数据存储原理',
        icon: '🗄️',
        description: '理解数据库原理，掌握数据表设计、NoSQL、SQL语言和数据安全机制',
        topics: ['关系型数据库', '非关系型数据库', 'SQL语言基础', '数据流转与恢复']
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
