/**
 * Visual Cards System v4.0
 * Bento Box + Glassmorphism 混合设计风格的卡片组件
 */

const VisualCards = (function() {
    
    // Emoji 图标映射（避免使用emoji作为UI图标，使用SVG替代）
    const IconMap = {
        client: { emoji: '👤', color: '#3b82f6' },
        server: { emoji: '⚙️', color: '#10b981' },
        database: { emoji: '🗄️', color: '#ec4899' },
        network: { emoji: '🌐', color: '#f59e0b' },
        security: { emoji: '🔒', color: '#8b5cf6' },
        cache: { emoji: '⚡', color: '#06b6d4' },
        frontend: { emoji: '🎨', color: '#3b82f6' },
        backend: { emoji: '🔧', color: '#10b981' },
        cloud: { emoji: '☁️', color: '#60a5fa' },
        api: { emoji: '🔌', color: '#f97316' },
        mobile: { emoji: '📱', color: '#8b5cf6' },
        web: { emoji: '🌐', color: '#3b82f6' },
        tip: { emoji: '💡', color: '#3b82f6' },
        warning: { emoji: '⚠️', color: '#f59e0b' },
        note: { emoji: '📝', color: '#8b5cf6' },
        example: { emoji: '✨', color: '#10b981' }
    };

    /**
     * 创建架构图卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {string} config.subtitle - 副标题
     * @param {Array} config.layers - 层级数组
     */
    function createArchitectureCard(config) {
        const { 
            title = '互联网产品技术架构', 
            subtitle = '典型三层架构设计',
            layers = [
                { type: 'client', name: '客户端层', desc: 'Web/App/小程序', icon: 'client' },
                { type: 'server', name: '服务端层', desc: '业务逻辑处理', icon: 'server' },
                { type: 'database', name: '数据存储层', desc: '持久化数据存储', icon: 'database' }
            ]
        } = config;
        
        const layersHtml = layers.map((layer, index) => {
            const iconData = IconMap[layer.icon] || IconMap.server;
            return `
                <div class="vc-architecture__layer vc-architecture__layer--${layer.type}" style="animation-delay: ${index * 0.1}s">
                    <div class="vc-architecture__layer-icon" style="background: ${iconData.color}20; color: ${iconData.color}">
                        ${iconData.emoji}
                    </div>
                    <div class="vc-architecture__layer-content">
                        <div class="vc-architecture__layer-title">${layer.name}</div>
                        <div class="vc-architecture__layer-desc">${layer.desc}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="vc-card vc-architecture">
                <div class="vc-architecture__header">
                    <div class="vc-architecture__icon vc-architecture__icon--server">${IconMap.server.emoji}</div>
                    <div>
                        <div class="vc-architecture__title">${title}</div>
                        <div class="vc-architecture__subtitle">${subtitle}</div>
                    </div>
                </div>
                <div class="vc-architecture__layers">
                    ${layersHtml}
                </div>
            </div>
        `;
    }

    /**
     * 创建流程图卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {string} config.badge - 徽章文字
     * @param {Array} config.steps - 步骤数组
     */
    function createFlowCard(config) {
        const { 
            title = '请求处理流程', 
            badge = '4步流程',
            steps = [
                { title: '发送请求', desc: '客户端向服务器发送HTTP请求' },
                { title: '路由解析', desc: '服务器解析请求路径和参数' },
                { title: '业务处理', desc: '执行相应的业务逻辑' },
                { title: '返回响应', desc: '将处理结果返回给客户端' }
            ]
        } = config;
        
        const stepsHtml = steps.map((step, index) => `
            <div class="vc-flow__step">
                <div class="vc-flow__step-number">${index + 1}</div>
                <div class="vc-flow__step-content">
                    <div class="vc-flow__step-title">${step.title}</div>
                    <div class="vc-flow__step-desc">${step.desc}</div>
                </div>
            </div>
        `).join('');
        
        return `
            <div class="vc-card vc-flow">
                <div class="vc-flow__header">
                    <div class="vc-flow__title">${title}</div>
                    <div class="vc-flow__badge">${badge}</div>
                </div>
                <div class="vc-flow__steps">
                    ${stepsHtml}
                </div>
            </div>
        `;
    }

    /**
     * 创建思维导图卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 中心标题
     * @param {Array} config.branches - 分支数组
     */
    function createMindmapCard(config) {
        const { 
            title = '核心概念', 
            branches = [
                { type: 'concept', title: '基础概念', items: ['定义', '特点', '应用场景'] },
                { type: 'feature', title: '核心特性', items: ['高性能', '可扩展', '易维护'] },
                { type: 'tech', title: '相关技术', items: ['技术A', '技术B', '技术C'] },
                { type: 'example', title: '实际案例', items: ['案例1', '案例2', '案例3'] }
            ]
        } = config;
        
        const branchesHtml = branches.map(branch => {
            const itemsHtml = branch.items.map(item => `
                <span class="vc-mindmap__item">${item}</span>
            `).join('');
            
            return `
                <div class="vc-mindmap__branch vc-mindmap__branch--${branch.type}">
                    <div class="vc-mindmap__branch-title">${branch.title}</div>
                    <div class="vc-mindmap__branch-items">
                        ${itemsHtml}
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="vc-card vc-mindmap">
                <div class="vc-mindmap__center">
                    <div class="vc-mindmap__core">
                        <span>⭐</span>
                        <span>${title}</span>
                    </div>
                </div>
                <div class="vc-mindmap__branches">
                    ${branchesHtml}
                </div>
            </div>
        `;
    }

    /**
     * 创建技术栈卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {string} config.subtitle - 副标题
     * @param {Array} config.items - 技术项数组
     */
    function createTechStackCard(config) {
        const { 
            title = '技术栈', 
            subtitle = '推荐技术组合',
            items = [
                { name: 'React', category: '前端', icon: 'frontend' },
                { name: 'Node.js', category: '后端', icon: 'backend' },
                { name: 'MySQL', category: '数据库', icon: 'database' },
                { name: 'Redis', category: '缓存', icon: 'cache' }
            ]
        } = config;
        
        const itemsHtml = items.map(item => {
            const iconData = IconMap[item.icon] || IconMap.server;
            return `
                <div class="vc-techstack__item">
                    <div class="vc-techstack__icon" style="color: ${iconData.color}">
                        ${iconData.emoji}
                    </div>
                    <div class="vc-techstack__name">${item.name}</div>
                    <div class="vc-techstack__category">${item.category}</div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="vc-card vc-techstack">
                <div class="vc-techstack__header">
                    <div class="vc-techstack__title">${title}</div>
                    <div class="vc-techstack__subtitle">${subtitle}</div>
                </div>
                <div class="vc-techstack__grid">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }

    /**
     * 创建对比卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {string} config.leftLabel - 左侧标签
     * @param {string} config.rightLabel - 右侧标签
     * @param {Array} config.leftFeatures - 左侧特性
     * @param {Array} config.rightFeatures - 右侧特性
     */
    function createComparisonCard(config) {
        const { 
            title = '技术对比', 
            leftLabel = '方案A',
            rightLabel = '方案B',
            leftFeatures = ['特性1', '特性2', '特性3'],
            rightFeatures = ['特性A', '特性B', '特性C']
        } = config;
        
        const leftHtml = leftFeatures.map(f => `
            <div class="vc-compare__feature">${f}</div>
        `).join('');
        
        const rightHtml = rightFeatures.map(f => `
            <div class="vc-compare__feature">${f}</div>
        `).join('');
        
        return `
            <div class="vc-card vc-compare">
                <div class="vc-compare__header">
                    <div class="vc-compare__title">${title}</div>
                    <div class="vc-compare__vs">VS</div>
                </div>
                <div class="vc-compare__content">
                    <div class="vc-compare__side">
                        <div class="vc-compare__label vc-compare__label--left">${leftLabel}</div>
                        <div class="vc-compare__features">
                            ${leftHtml}
                        </div>
                    </div>
                    <div class="vc-compare__divider">VS</div>
                    <div class="vc-compare__side">
                        <div class="vc-compare__label vc-compare__label--right">${rightLabel}</div>
                        <div class="vc-compare__features">
                            ${rightHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * 创建HTTP结构卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {Array} config.requestFields - 请求字段
     * @param {Array} config.responseFields - 响应字段
     */
    function createHttpStructureCard(config) {
        const { 
            title = 'HTTP 报文结构', 
            subtitle = '请求与响应格式',
            requestFields = [
                { name: 'Method', value: 'GET/POST/PUT/DELETE' },
                { name: 'URL', value: '/api/users/123' },
                { name: 'Headers', value: 'Content-Type: application/json' }
            ],
            responseFields = [
                { name: 'Status', value: '200 OK' },
                { name: 'Headers', value: 'Content-Type: application/json' },
                { name: 'Body', value: '{"id": 123, "name": "张三"}' }
            ]
        } = config;
        
        const requestHtml = requestFields.map(f => `
            <div class="vc-http__field">
                <span class="vc-http__field-name">${f.name}</span>
                <span class="vc-http__field-value">${f.value}</span>
            </div>
        `).join('');
        
        const responseHtml = responseFields.map(f => `
            <div class="vc-http__field">
                <span class="vc-http__field-name">${f.name}</span>
                <span class="vc-http__field-value">${f.value}</span>
            </div>
        `).join('');
        
        return `
            <div class="vc-card vc-http">
                <div class="vc-http__header">
                    <div class="vc-http__title">${title}</div>
                    <div class="vc-http__subtitle">${subtitle}</div>
                </div>
                <div class="vc-http__structure">
                    <div class="vc-http__section">
                        <div class="vc-http__section-header vc-http__section-header--request">
                            <span>📤</span>
                            <span>Request 请求</span>
                        </div>
                        <div class="vc-http__section-content">
                            ${requestHtml}
                        </div>
                    </div>
                    <div class="vc-http__section">
                        <div class="vc-http__section-header vc-http__section-header--response">
                            <span>📥</span>
                            <span>Response 响应</span>
                        </div>
                        <div class="vc-http__section-content">
                            ${responseHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * 创建信息提示卡片
     * @param {Object} config - 配置对象
     * @param {string} config.type - 类型: tip/warning/note/example
     * @param {string} config.title - 标题
     * @param {string} config.text - 内容
     */
    function createInfoCard(config) {
        const { 
            type = 'tip',
            title = '提示',
            text = '这里是提示内容'
        } = config;
        
        const iconData = IconMap[type] || IconMap.tip;
        
        return `
            <div class="vc-card vc-info">
                <div class="vc-info__icon vc-info__icon--${type}" style="background: ${iconData.color}20; color: ${iconData.color}">
                    ${iconData.emoji}
                </div>
                <div class="vc-info__content">
                    <div class="vc-info__title">${title}</div>
                    <div class="vc-info__text">${text}</div>
                </div>
            </div>
        `;
    }

    /**
     * 创建Bento布局容器
     * @param {string} layout - 布局类型: 2col/3col/4col/mixed
     * @param {string} content - 卡片内容HTML
     */
    function createBentoContainer(layout, content) {
        return `
            <div class="vc-bento vc-bento--${layout}">
                ${content}
            </div>
        `;
    }

    /**
     * 根据Mermaid图表类型创建对应的卡片
     * @param {string} type - 图表类型
     * @param {string} content - Mermaid内容
     */
    function createFromMermaid(type, content) {
        switch(type) {
            case 'flowchart':
            case 'flow':
                return createFlowCard({
                    title: '流程图',
                    steps: [
                        { title: '开始', desc: '流程起点' },
                        { title: '处理', desc: '执行业务逻辑' },
                        { title: '结束', desc: '流程终点' }
                    ]
                });
            
            case 'mindmap':
                return createMindmapCard({
                    title: '思维导图',
                    branches: [
                        { type: 'concept', title: '概念', items: ['定义', '特点'] },
                        { type: 'feature', title: '特性', items: ['优点', '缺点'] }
                    ]
                });
            
            case 'architecture':
                return createArchitectureCard({
                    title: '系统架构',
                    layers: [
                        { type: 'client', name: '客户端', desc: '用户界面', icon: 'client' },
                        { type: 'server', name: '服务端', desc: '业务逻辑', icon: 'server' },
                        { type: 'database', name: '数据库', desc: '数据存储', icon: 'database' }
                    ]
                });
            
            default:
                return createInfoCard({
                    type: 'note',
                    title: '图表',
                    text: '自定义图表内容'
                });
        }
    }

    // 公开API
    return {
        createArchitectureCard,
        createFlowCard,
        createMindmapCard,
        createTechStackCard,
        createComparisonCard,
        createHttpStructureCard,
        createInfoCard,
        createBentoContainer,
        createFromMermaid,
        IconMap
    };

})();

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisualCards;
}
