/**
 * @fileoverview data.js 文件拆分脚本
 * @description 将大型 data.js 文件按功能模块拆分为多个独立文件
 * @usage node split-data.js
 */

const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '../data.js');
const OUTPUT_DIR = __dirname;

console.log('开始拆分 data.js 文件...\n');

// 读取源文件
let content;
try {
    content = fs.readFileSync(SOURCE_FILE, 'utf-8');
    console.log('✓ 成功读取源文件');
} catch (err) {
    console.error('✗ 读取源文件失败:', err.message);
    process.exit(1);
}

// 定义模块配置
const modules = [
    {
        name: 'architecture',
        filename: 'architecture.js',
        description: '互联网基础架构模块',
        categoryId: 'architecture',
        ids: ['arch-1', 'arch-2', 'arch-3', 'arch-4']
    },
    {
        name: 'programming',
        filename: 'programming.js',
        description: '编程入门知识模块',
        categoryId: 'programming',
        ids: ['prog-1', 'prog-2', 'prog-3', 'prog-4']
    },
    {
        name: 'database',
        filename: 'database.js',
        description: '数据存储原理模块',
        categoryId: 'database',
        ids: ['db-1', 'db-2', 'db-3', 'db-4']
    },
    {
        name: 'frontend',
        filename: 'frontend.js',
        description: '前端开发模块',
        categoryId: 'frontend',
        ids: ['front-1', 'front-2', 'front-3', 'front-4']
    },
    {
        name: 'backend',
        filename: 'backend.js',
        description: '后端开发模块',
        categoryId: 'backend',
        ids: ['back-1', 'back-2', 'back-3', 'back-4', 'back-5']
    },
    {
        name: 'data-analysis',
        filename: 'data-analysis.js',
        description: '数据分析模块',
        categoryId: 'data',
        ids: ['data-1', 'data-2', 'data-3']
    }
];

// 提取知识点数据的函数
function extractKnowledgeItems(content, ids) {
    const items = [];
    
    for (const id of ids) {
        // 查找知识点开始位置
        const startPattern = new RegExp(`id:\\s*['"\`]${id}['"\`]`);
        const startIndex = content.search(startPattern);
        
        if (startIndex === -1) {
            console.log(`  ⚠ 未找到知识点: ${id}`);
            continue;
        }
        
        // 向前找到对象开始位置 {
        let braceStart = startIndex;
        while (braceStart > 0 && content[braceStart] !== '{') {
            braceStart--;
        }
        
        // 找到对象结束位置
        let braceCount = 0;
        let braceEnd = braceStart;
        let foundStart = false;
        
        while (braceEnd < content.length) {
            if (content[braceEnd] === '{') {
                braceCount++;
                foundStart = true;
            } else if (content[braceEnd] === '}') {
                braceCount--;
                if (foundStart && braceCount === 0) {
                    break;
                }
            }
            braceEnd++;
        }
        
        // 提取知识点内容
        const itemContent = content.substring(braceStart, braceEnd + 1);
        items.push(itemContent);
        console.log(`  ✓ 提取知识点: ${id}`);
    }
    
    return items;
}

// 生成模块文件
function generateModuleFile(module, items) {
    const header = `/**
 * @fileoverview ${module.description}
 * @description 包含 ${module.ids.length} 个知识点：${module.ids.join(', ')}
 * @module data/${module.name}
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 导入模块数据
 * import { knowledge } from './${module.filename}';
 * 
 * // 获取所有知识点
 * console.log(knowledge);
 * 
 * // 根据 categoryId 过滤
 * const items = knowledge.filter(item => item.categoryId === '${module.categoryId}');
 */

/**
 * ${module.description}知识点数组
 * @type {Array<Object>}
 * @property {string} id - 知识点唯一标识符
 * @property {string} categoryId - 所属分类ID
 * @property {string} title - 知识点标题
 * @property {string} difficulty - 难度级别 (beginner/intermediate/advanced)
 * @property {string} summary - 知识点摘要
 * @property {Object} [technicalContent] - 技术内容详情（可选）
 * @property {string} content - 知识点正文内容（HTML格式）
 */
const knowledge = [
`;

    const footer = `
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { knowledge };
}
`;

    return header + items.join(',\n') + footer;
}

// 处理每个模块
console.log('开始提取各模块内容...\n');

for (const module of modules) {
    console.log(`处理模块: ${module.name}`);
    
    const items = extractKnowledgeItems(content, module.ids);
    
    if (items.length > 0) {
        const fileContent = generateModuleFile(module, items);
        const outputPath = path.join(OUTPUT_DIR, module.filename);
        
        try {
            fs.writeFileSync(outputPath, fileContent, 'utf-8');
            console.log(`  ✓ 生成文件: ${module.filename} (${items.length} 个知识点)\n`);
        } catch (err) {
            console.error(`  ✗ 写入文件失败: ${err.message}\n`);
        }
    } else {
        console.log(`  ✗ 未提取到任何知识点\n`);
    }
}

console.log('拆分完成!');
console.log('\n生成的文件:');
for (const module of modules) {
    const filePath = path.join(OUTPUT_DIR, module.filename);
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`  - ${module.filename} (${(stats.size / 1024).toFixed(2)} KB)`);
    }
}
