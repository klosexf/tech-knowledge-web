/**
 * @fileoverview 知识库数据主入口模块
 * @description 聚合所有分类和知识点数据，统一导出 knowledgeData 对象
 * @module data/index
 * @version 1.0.0
 * @author Tech Knowledge Web
 * 
 * @example
 * // 在浏览器环境中使用
 * // 所有模块文件通过 <script> 标签加载后
 * // knowledgeData 会自动聚合所有模块数据
 * console.log(knowledgeData.categories);
 * console.log(knowledgeData.knowledge);
 * 
 * @example
 * // 在 Node.js 环境中使用
 * const knowledgeData = require('./data/index.js');
 * console.log(knowledgeData.categories);
 */

(function() {
    'use strict';
    
    /**
     * 聚合所有知识点数据
     */
    var allKnowledge = [];
    
    // 浏览器环境：从 window 对象收集数据
    if (typeof window !== 'undefined') {
        if (window.architectureKnowledge) allKnowledge.push(...window.architectureKnowledge);
        if (window.programmingKnowledge) allKnowledge.push(...window.programmingKnowledge);
        if (window.databaseKnowledge) allKnowledge.push(...window.databaseKnowledge);
        if (window.frontendKnowledge) allKnowledge.push(...window.frontendKnowledge);
        if (window.backendKnowledge) allKnowledge.push(...window.backendKnowledge);
        if (window.dataAnalysisKnowledge) allKnowledge.push(...window.dataAnalysisKnowledge);
    }
    
    // Node.js 环境：直接加载各模块
    if (typeof require !== 'undefined' && typeof window === 'undefined') {
        try {
            const path = require('path');
            
            const modules = [
                './architecture.js',
                './programming.js',
                './database.js',
                './frontend.js',
                './backend.js',
                './data-analysis.js'
            ];
            
            modules.forEach(modPath => {
                try {
                    const mod = require(modPath);
                    if (mod.knowledge) {
                        allKnowledge.push(...mod.knowledge);
                    }
                } catch (e) {
                    // 忽略加载失败的模块
                }
            });
        } catch (e) {
            // require 不可用时忽略
        }
    }
    
    /**
     * 知识库数据对象
     * @type {Object}
     * @property {Array<Object>} categories - 分类列表
     * @property {Array<Object>} knowledge - 所有知识点列表
     */
    var knowledgeData = {
        categories: typeof window !== 'undefined' ? (window.categories || []) : [],
        knowledge: allKnowledge
    };
    
    // 浏览器环境：导出到全局对象
    if (typeof window !== 'undefined') {
        window.knowledgeData = knowledgeData;
    }
    
    // Node.js 环境：CommonJS 模块导出
    if (typeof module !== 'undefined' && module.exports) {
        // 加载分类数据
        try {
            const categoriesModule = require('./categories.js');
            knowledgeData.categories = categoriesModule.categories || [];
        } catch (e) {
            // 忽略
        }
        module.exports = knowledgeData;
    }
    
    // 输出加载信息
    const logInfo = () => {
        console.log('📚 知识库数据加载完成');
        console.log(`  - 分类数量: ${knowledgeData.categories.length}`);
        console.log(`  - 知识点数量: ${knowledgeData.knowledge.length}`);
    };
    
    if (typeof window !== 'undefined') {
        logInfo();
    }
    
})();
