var AppDiagramDetection = (function() {
    'use strict';
    
    function isHttpStructureDiagram(content) {
        var trimmed = content.trim();
        return (trimmed.startsWith('flowchart') || trimmed.startsWith('graph')) && 
               (trimmed.includes('HTTP请求') || trimmed.includes('HTTP响应') || 
                trimmed.includes('Request') || trimmed.includes('Response') ||
                (trimmed.includes('请求') && trimmed.includes('响应')));
    }
    
    function isDataTypeDiagram(content) {
        var dataTypeKeywords = [
            '整型', 'int', '字符型', 'String', '浮点型', 'float', '布尔型', 'boolean',
            '数据类型类比', '购物清单'
        ];
        var hasKeywords = dataTypeKeywords.some(function(keyword) { 
            return content.toLowerCase().includes(keyword.toLowerCase());
        });
        var hasAsciiArt = content.includes('┌') || content.includes('│') || content.includes('└');
        return hasKeywords && hasAsciiArt;
    }
    
    function isArchitectureDiagram(content) {
        var archKeywords = [
            '表现层', 'Presentation Layer', '前端', '客户端', 'Client',
            '业务逻辑层', 'Business Logic Layer', '服务端', '后端', 'Server',
            '数据层', 'Data Layer', '数据库', 'Database',
            '互联网产品技术架构', '技术架构', '四层架构', '三层架构'
        ];
        var hasKeywords = archKeywords.some(function(keyword) { return content.includes(keyword); });
        var hasAsciiArt = content.includes('┌') || content.includes('│') || content.includes('└');
        var hasMermaid = content.includes('flowchart') || content.includes('subgraph');
        return hasKeywords && (hasAsciiArt || hasMermaid);
    }
    
    function isKnowledgeGraph(content) {
        var graphKeywords = ['知识图谱', '核心知识点', '产品经理需要记住'];
        return graphKeywords.some(function(keyword) { return content.includes(keyword); }) ||
               (content.includes('前端（客户端）') && content.includes('服务端（后端）') && content.includes('数据库'));
    }
    
    function isEvolutionTimeline(content) {
        return content.includes('单体架构') && 
               (content.includes('微服务架构') || content.includes('云原生架构'));
    }
    
    function isCategoryTree(content) {
        var treeKeywords = ['分类体系', '边界分类', '能力边界分类', '技术边界分类'];
        return treeKeywords.some(function(keyword) { return content.includes(keyword); }) ||
               (content.includes('├──') && content.includes('└──') && content.includes('1.') && content.includes('2.'));
    }
    
    function isDecisionFlow(content) {
        var flowKeywords = ['用户点击', '检查', '判断', '├──', '└──', '──>'];
        var hasFlowArrows = (content.match(/──>/g) || []).length >= 3;
        var hasDecisionPoints = (content.match(/├──|└──/g) || []).length >= 2;
        return hasFlowArrows && hasDecisionPoints;
    }
    
    function isProcessTimeline(content) {
        var timelineKeywords = ['步骤', '阶段', '流程', '第一步', '第二步', '1.', '2.', '3.'];
        var hasNumbers = (content.match(/^\s*\d+\./gm) || []).length >= 3;
        return hasNumbers && (content.includes('──>') || content.includes('→'));
    }
    
    function isComparisonDiagram(content) {
        var compareKeywords = ['对比', 'vs', 'VS', '区别', '不同', '比较'];
        var hasTable = content.includes('|') && (content.match(/\|/g) || []).length >= 10;
        return compareKeywords.some(function(keyword) { return content.includes(keyword); }) && hasTable;
    }
    
    function isChecklistDiagram(content) {
        var checklistKeywords = ['自检清单', '检查清单', '□', '✓', '清单'];
        return checklistKeywords.some(function(keyword) { return content.includes(keyword); }) ||
               ((content.match(/□/g) || []).length >= 5);
    }
    
    function isTechThinkingFlow(content) {
        var flowKeywords = ['技术思维拆解', '产品思维', '【产品思维】', '【技术思维】', '优惠券使用', '秒杀活动', '用户注册', '发布动态'];
        var hasComplexStructure = (content.match(/├──|└──/g) || []).length >= 5;
        var hasNumberedSteps = (content.match(/^\s*\d+\.\s+.+/gm) || []).length >= 2;
        return flowKeywords.some(function(keyword) { return content.includes(keyword); }) && (hasComplexStructure || hasNumberedSteps);
    }
    
    function isSolutionComparison(content) {
        var compareKeywords = ['方案对比', '方案1', '方案2', '方案3', '库存扣减时机', '方案：'];
        return compareKeywords.some(function(keyword) { return content.includes(keyword); }) && 
               content.includes('优点') && content.includes('缺点');
    }
    
    function isSpecificationDiagram(content) {
        var specKeywords = ['绘制规范', '设计模板', '基本符号', '绘制步骤'];
        return specKeywords.some(function(keyword) { return content.includes(keyword); });
    }
    
    return {
        isHttpStructureDiagram: isHttpStructureDiagram,
        isDataTypeDiagram: isDataTypeDiagram,
        isArchitectureDiagram: isArchitectureDiagram,
        isKnowledgeGraph: isKnowledgeGraph,
        isEvolutionTimeline: isEvolutionTimeline,
        isCategoryTree: isCategoryTree,
        isDecisionFlow: isDecisionFlow,
        isProcessTimeline: isProcessTimeline,
        isComparisonDiagram: isComparisonDiagram,
        isChecklistDiagram: isChecklistDiagram,
        isTechThinkingFlow: isTechThinkingFlow,
        isSolutionComparison: isSolutionComparison,
        isSpecificationDiagram: isSpecificationDiagram
    };
})();

if (typeof window !== 'undefined') {
    window.AppDiagramDetection = AppDiagramDetection;
}
