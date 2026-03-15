/**
 * Visual Cards System - 可视化卡片组件系统
 * 版本: 2.0.0
 * 用于替代 Mermaid.js 的自定义 HTML/CSS 卡片组件
 */

const VisualCards = (function() {
    
    // SVG 图标库
    const Icons = {
        frontend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M8 16h8M8 8h4"/></svg>`,
        network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        backend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h4M6 17h4"/></svg>`,
        database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`,
        cache: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
        arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
        star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
        check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
        code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
        server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
        user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
        branch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`
    };
    
    // 预定义的架构层配置
    const LayerConfigs = {
        frontend: {
            type: 'frontend',
            icon: Icons.frontend,
            name: '前端层',
            nameEn: 'Frontend',
            desc: '用户界面展示',
            tech: 'HTML, CSS, JavaScript, React, Vue.js'
        },
        network: {
            type: 'network',
            icon: Icons.network,
            name: '网络层',
            nameEn: 'Network',
            desc: '数据传输',
            tech: 'TCP/IP, HTTP, CDN'
        },
        backend: {
            type: 'backend',
            icon: Icons.backend,
            name: '服务层',
            nameEn: 'Backend',
            desc: '业务逻辑处理',
            tech: 'Java, Node.js, Python, Go'
        },
        database: {
            type: 'database',
            icon: Icons.database,
            name: '数据存储层',
            nameEn: 'Database',
            desc: '数据持久化存储',
            tech: 'MySQL, PostgreSQL, Redis, MongoDB'
        },
        cache: {
            type: 'cache',
            icon: Icons.cache,
            name: '缓存层',
            nameEn: 'Cache',
            desc: '高速数据缓存',
            tech: 'Redis, Memcached'
        }
    };
    
    /**
     * 创建架构图卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {Array} config.layers - 层级数组 ['frontend', 'backend', 'database']
     * @param {Object} config.caseStudy - 案例研究（可选）
     */
    function createArchitectureCard(config) {
        const { title = '互联网产品技术架构', layers = ['frontend', 'network', 'backend', 'database'], caseStudy } = config;
        
        let layersHtml = layers.map((layerKey, index) => {
            const layer = LayerConfigs[layerKey] || LayerConfigs.frontend;
            return `
                <div class="vc-arch-layer ${layer.type} vc-animate-slide-in" style="animation-delay: ${index * 100}ms">
                    <div class="vc-arch-layer-icon">${layer.icon}</div>
                    <div class="vc-arch-layer-content">
                        <div class="vc-arch-layer-name">${layer.name}</div>
                        <div class="vc-arch-layer-name-en">${layer.nameEn}</div>
                    </div>
                    <div class="vc-arch-layer-desc">
                        <div class="vc-arch-layer-desc-title">${layer.desc}</div>
                        <div class="vc-arch-layer-desc-tech">${layer.tech}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        let caseStudyHtml = '';
        if (caseStudy) {
            caseStudyHtml = `
                <div class="vc-case-study">
                    <div class="vc-case-study-title">${caseStudy.title}</div>
                    <div class="vc-case-study-desc">${caseStudy.description}</div>
                    <div class="vc-case-layers">
                        ${caseStudy.layers.map(layer => `
                            <div class="vc-case-layer-item">
                                <div class="vc-case-layer-name">${layer.name}</div>
                                <div class="vc-case-layer-desc">${layer.description}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="vc-card vc-architecture">
                <div class="vc-arch-title">${title}</div>
                <div class="vc-card-body">
                    <div class="vc-arch-layers">
                        ${layersHtml}
                    </div>
                    ${caseStudyHtml}
                </div>
            </div>
        `;
    }
    
    /**
     * 创建流程图卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {Array} config.nodes - 节点数组
     * @param {Array} config.steps - 步骤数组（可选）
     */
    function createFlowCard(config) {
        const { title = '请求响应流程', nodes = [], steps } = config;
        
        const defaultNodes = [
            { type: 'client', label: '客户端', sublabel: 'Client', icon: Icons.user },
            { type: 'server', label: '服务器', sublabel: 'Server', icon: Icons.server },
            { type: 'client', label: '客户端', sublabel: 'Client', icon: Icons.user }
        ];
        
        const flowNodes = nodes.length > 0 ? nodes : defaultNodes;
        
        let nodesHtml = '';
        flowNodes.forEach((node, index) => {
            nodesHtml += `
                <div class="vc-flow-node">
                    <div class="vc-flow-node-icon ${node.type}">${node.icon}</div>
                    <div class="vc-flow-node-label">${node.label}</div>
                    ${node.sublabel ? `<div class="vc-flow-node-sublabel">${node.sublabel}</div>` : ''}
                </div>
            `;
            
            if (index < flowNodes.length - 1) {
                nodesHtml += `
                    <div class="vc-flow-arrow">
                        ${Icons.arrow}
                        <div class="vc-flow-arrow-label">${node.arrowLabel || '请求'}</div>
                    </div>
                `;
            }
        });
        
        let stepsHtml = '';
        if (steps && steps.length > 0) {
            stepsHtml = `
                <div class="vc-flow-steps">
                    ${steps.map((step, index) => `
                        <div class="vc-flow-step">
                            <div class="vc-flow-step-number">${index + 1}</div>
                            <div class="vc-flow-step-title">${step.title}</div>
                            <div class="vc-flow-step-desc">${step.description}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        return `
            <div class="vc-card vc-flow">
                <div class="vc-card-header">
                    <div class="vc-card-icon" style="background: linear-gradient(135deg, #3b82f6, #60a5fa)">${Icons.globe}</div>
                    <div>
                        <div class="vc-card-title">${title}</div>
                    </div>
                </div>
                <div class="vc-card-body">
                    <div class="vc-flow-diagram">
                        ${nodesHtml}
                    </div>
                    ${stepsHtml}
                </div>
            </div>
        `;
    }
    
    /**
     * 创建时序图卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {Array} config.participants - 参与者数组
     * @param {Array} config.messages - 消息数组
     */
    function createSequenceCard(config) {
        const { title = '时序图', participants = [], messages = [] } = config;
        
        const defaultParticipants = [
            { id: 'client', label: '客户端', type: 'client' },
            { id: 'server', label: '服务器', type: 'server' }
        ];
        
        const defaultMessages = [
            { from: 'client', to: 'server', label: '发送请求', dashed: false },
            { from: 'server', to: 'client', label: '返回响应', dashed: true }
        ];
        
        const parts = participants.length > 0 ? participants : defaultParticipants;
        const msgs = messages.length > 0 ? messages : defaultMessages;
        
        let participantsHtml = parts.map(p => `
            <div class="vc-sequence-participant">
                <div class="vc-sequence-participant-box ${p.type}">${p.label}</div>
                <div class="vc-sequence-participant-line"></div>
            </div>
        `).join('');
        
        let messagesHtml = msgs.map(msg => `
            <div class="vc-sequence-message">
                <div class="vc-sequence-message-line ${msg.dashed ? 'dashed' : ''}"></div>
                <div class="vc-sequence-message-label">${msg.label}</div>
            </div>
        `).join('');
        
        return `
            <div class="vc-card vc-sequence">
                <div class="vc-card-header">
                    <div class="vc-card-icon" style="background: linear-gradient(135deg, #8b5cf6, #a78bfa)">${Icons.layers}</div>
                    <div>
                        <div class="vc-card-title">${title}</div>
                    </div>
                </div>
                <div class="vc-card-body">
                    <div class="vc-sequence-diagram">
                        <div class="vc-sequence-participants">
                            ${participantsHtml}
                        </div>
                        <div class="vc-sequence-messages">
                            ${messagesHtml}
                        </div>
                    </div>
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
        const { title = '核心概念', branches = [] } = config;
        
        const defaultBranches = [
            {
                title: '分支一',
                color: '#3b82f6',
                items: ['项目1', '项目2', '项目3']
            },
            {
                title: '分支二',
                color: '#10b981',
                items: ['项目A', '项目B', '项目C']
            }
        ];
        
        const branchList = branches.length > 0 ? branches : defaultBranches;
        
        let branchesHtml = branchList.map((branch, index) => `
            <div class="vc-mindmap-branch vc-animate-fade-in" style="animation-delay: ${index * 100}ms">
                <div class="vc-mindmap-branch-header" style="border-bottom-color: ${branch.color}">
                    <div class="vc-mindmap-branch-icon" style="background: ${branch.color}">${Icons.branch}</div>
                    <div class="vc-mindmap-branch-title">${branch.title}</div>
                </div>
                <ul class="vc-mindmap-items">
                    ${branch.items.map(item => `<li class="vc-mindmap-item">${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
        
        return `
            <div class="vc-card vc-mindmap">
                <div class="vc-card-body">
                    <div class="vc-mindmap-center">
                        <div class="vc-mindmap-root">${title}</div>
                    </div>
                    <div class="vc-mindmap-branches">
                        ${branchesHtml}
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * 创建技术栈卡片
     * @param {Object} config - 配置对象
     * @param {Object} config.frontend - 前端技术栈
     * @param {Object} config.backend - 后端技术栈
     */
    function createTechStackCard(config) {
        const { frontend, backend } = config;
        
        const defaultFrontend = {
            title: '前端技术栈',
            subtitle: '2026年最新',
            items: [
                { name: '基础技术', desc: 'HTML、CSS、JavaScript', rating: 5 },
                { name: '编程语言', desc: 'TypeScript', rating: 5 },
                { name: '主流框架', desc: 'React（或Next.js）', rating: 5 },
                { name: '现代CSS', desc: 'Tailwind CSS + UnoCSS', rating: 4 }
            ]
        };
        
        const defaultBackend = {
            title: '服务端技术栈',
            subtitle: '',
            description: '服务层的主要目标是降低系统间相互关联的复杂度。2026年，行业已形成Java生态与Go生态并驾齐驱的格局。',
            items: [
                { name: 'Java生态', desc: 'Spring Boot、Spring Cloud', color: '#f97316' },
                { name: 'Go语言', desc: 'Gin、Echo', color: '#06b6d4' },
                { name: 'Node.js', desc: 'Express、NestJS', color: '#84cc16' },
                { name: '微服务架构', desc: 'Nacos、Gateway', color: '#8b5cf6' }
            ]
        };
        
        const fe = frontend || defaultFrontend;
        const be = backend || defaultBackend;
        
        let frontendItemsHtml = fe.items.map(item => `
            <div class="vc-techstack-item">
                <div class="vc-techstack-item-icon blue">${Icons.code}</div>
                <div class="vc-techstack-item-content">
                    <div class="vc-techstack-item-name">${item.name}</div>
                    <div class="vc-techstack-item-desc">${item.desc}</div>
                </div>
                <div class="vc-techstack-rating">
                    ${Array(5).fill(0).map((_, i) => `
                        <span class="vc-techstack-star ${i < item.rating ? '' : 'empty'}">${Icons.star}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        let backendItemsHtml = be.items.map(item => `
            <div class="vc-techstack-item">
                <div class="vc-techstack-item-icon" style="background: ${item.color}20; color: ${item.color}">${Icons.server}</div>
                <div class="vc-techstack-item-content">
                    <div class="vc-techstack-item-name">${item.name}</div>
                    <div class="vc-techstack-item-desc">${item.desc}</div>
                </div>
            </div>
        `).join('');
        
        return `
            <div class="vc-techstack">
                <div class="vc-techstack-grid">
                    <div class="vc-techstack-section">
                        <div class="vc-techstack-section-title">
                            <div class="vc-techstack-section-icon frontend">${Icons.frontend}</div>
                            <div>
                                <div class="vc-techstack-section-name">${fe.title}</div>
                                ${fe.subtitle ? `<div class="vc-techstack-section-subtitle">${fe.subtitle}</div>` : ''}
                            </div>
                        </div>
                        ${frontendItemsHtml}
                    </div>
                    
                    <div class="vc-techstack-section">
                        <div class="vc-techstack-section-title">
                            <div class="vc-techstack-section-icon backend">${Icons.backend}</div>
                            <div>
                                <div class="vc-techstack-section-name">${be.title}</div>
                            </div>
                        </div>
                        ${be.description ? `<p style="font-size: 0.875rem; color: var(--vc-text-secondary); margin-bottom: 16px; line-height: 1.6;">${be.description}</p>` : ''}
                        ${backendItemsHtml}
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * 创建对比卡片
     * @param {Object} config - 配置对象
     * @param {string} config.title - 标题
     * @param {Object} config.itemA - 对比项A
     * @param {Object} config.itemB - 对比项B
     */
    function createComparisonCard(config) {
        const { title = '对比分析', itemA, itemB } = config;
        
        const defaultItemA = {
            title: '方案 A',
            items: ['特点一', '特点二', '特点三']
        };
        
        const defaultItemB = {
            title: '方案 B',
            items: ['特点一', '特点二', '特点三']
        };
        
        const a = itemA || defaultItemA;
        const b = itemB || defaultItemB;
        
        return `
            <div class="vc-card vc-comparison">
                <div class="vc-card-header">
                    <div class="vc-card-icon" style="background: linear-gradient(135deg, #6366f1, #818cf8)">${Icons.layers}</div>
                    <div>
                        <div class="vc-card-title">${title}</div>
                    </div>
                </div>
                <div class="vc-card-body">
                    <div class="vc-comparison-grid">
                        <div class="vc-comparison-item">
                            <div class="vc-comparison-item-header">
                                <div class="vc-comparison-item-icon a">${Icons.check}</div>
                                <div class="vc-comparison-item-title">${a.title}</div>
                            </div>
                            <ul class="vc-comparison-item-list">
                                ${a.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="vc-comparison-item">
                            <div class="vc-comparison-item-header">
                                <div class="vc-comparison-item-icon b">${Icons.check}</div>
                                <div class="vc-comparison-item-title">${b.title}</div>
                            </div>
                            <ul class="vc-comparison-item-list">
                                ${b.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
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
     * @param {Array} config.parts - 结构部分数组
     */
    function createHTTPCard(config) {
        const { title = 'HTTP请求结构', parts } = config;
        
        const defaultParts = [
            { label: '请求行', content: 'GET /index.html HTTP/1.1', optional: false },
            { label: '请求头', content: 'User-Agent: Chrome/112.0', optional: false },
            { label: '请求体', content: 'username=admin&password=123', optional: true }
        ];
        
        const partsList = parts || defaultParts;
        
        return `
            <div class="vc-http">
                <div class="vc-http-structure">
                    <div class="vc-http-structure-title">${title}</div>
                    ${partsList.map(part => `
                        <div class="vc-http-part">
                            <div class="vc-http-part-label">${part.label}</div>
                            <div class="vc-http-part-content ${part.optional ? 'optional' : ''}">${part.content}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // 公开API
    return {
        createArchitectureCard,
        createFlowCard,
        createSequenceCard,
        createMindmapCard,
        createTechStackCard,
        createComparisonCard,
        createHTTPCard,
        Icons,
        LayerConfigs
    };
})();

// 如果在 Node.js 环境，导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisualCards;
}
