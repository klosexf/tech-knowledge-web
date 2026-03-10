/**
 * 模块验证测试脚本
 */

const fs = require('fs');
const path = require('path');

// 测试各模块文件是否可以正确加载
const modules = [
    'data/categories.js',
    'data/architecture.js',
    'data/programming.js',
    'data/database.js',
    'data/frontend.js',
    'data/backend.js',
    'data/data-analysis.js'
];

console.log('=== 模块文件验证 ===\n');

let totalKnowledge = 0;
modules.forEach(file => {
    try {
        const fullPath = path.join(__dirname, file);
        delete require.cache[require.resolve(fullPath)];
        const mod = require(fullPath);
        const count = mod.knowledge ? mod.knowledge.length : 0;
        totalKnowledge += count;
        console.log('✓', file, '-', count, '个知识点');
    } catch (err) {
        console.log('✗', file, '-', err.message);
    }
});

console.log('\n总计:', totalKnowledge, '个知识点');

// 验证 index.js 聚合功能
console.log('\n=== 测试 index.js 聚合 ===\n');
try {
    const knowledgeData = require('./data/index.js');
    console.log('✓ index.js 加载成功');
    console.log('  - 分类数量:', knowledgeData.categories.length);
    console.log('  - 知识点数量:', knowledgeData.knowledge.length);
} catch (err) {
    console.log('✗ index.js 加载失败:', err.message);
}
