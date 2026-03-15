/**
 * Visual Cards System v5.0
 * Professional Tech Knowledge Cards
 * Aurora UI + Claymorphism + Glassmorphism Hybrid Design
 */

const VisualCards = (function() {
    
    // SVG Icons Library - Professional icons instead of emojis
    const Icons = {
        // Architecture/Server icons
        client: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
        server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
        database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
        network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg>`,
        security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        cache: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
        cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
        
        // Tech stack icons
        frontend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
        backend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
        api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
        mobile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
        web: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
        
        // Info icons
        tip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,
        warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
        note: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
        example: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
        
        // Flow/Process icons
        arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
        check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
        layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
        gitBranch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
        
        // HTTP/Request icons
        send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
        receive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
        
        // Comparison icons
        scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
        
        // Architecture header
        cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
        
        // Mindmap center
        target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
        
        // Tech stack
        package: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
        
        // Flow
        activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
        
        // HTTP
        globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
        
        // Default
        box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`
    };

    // Icon color mapping
    const IconColors = {
        client: '#6366f1',
        server: '#10b981',
        database: '#ec4899',
        network: '#06b6d4',
        security: '#8b5cf6',
        cache: '#f59e0b',
        frontend: '#6366f1',
        backend: '#10b981',
        cloud: '#60a5fa',
        api: '#f97316',
        mobile: '#8b5cf6',
        web: '#6366f1',
        tip: '#3b82f6',
        warning: '#f59e0b',
        note: '#8b5cf6',
        example: '#10b981'
    };

    /**
     * Get icon by name
     */
    function getIcon(name) {
        return Icons[name] || Icons.box;
    }

    /**
     * Get icon color by name
     */
    function getIconColor(name) {
        return IconColors[name] || '#6366f1';
    }

    /**
     * Create architecture card
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
            const iconSvg = getIcon(layer.icon);
            const iconColor = getIconColor(layer.icon);
            return `
                <div class="vc-architecture__layer vc-architecture__layer--${layer.type}" style="animation-delay: ${index * 0.1}s">
                    <div class="vc-architecture__layer-icon" style="color: ${iconColor}">
                        ${iconSvg}
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
                    <div class="vc-architecture__icon">
                        ${Icons.cpu}
                    </div>
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
     * Create flow card
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
     * Create mindmap card
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
                        ${Icons.target}
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
     * Create tech stack card
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
            const iconSvg = getIcon(item.icon);
            const iconColor = getIconColor(item.icon);
            return `
                <div class="vc-techstack__item">
                    <div class="vc-techstack__icon" style="color: ${iconColor}">
                        ${iconSvg}
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
     * Create comparison card
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
     * Create HTTP structure card
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
                            ${Icons.send}
                            <span>Request 请求</span>
                        </div>
                        <div class="vc-http__section-content">
                            ${requestHtml}
                        </div>
                    </div>
                    <div class="vc-http__section">
                        <div class="vc-http__section-header vc-http__section-header--response">
                            ${Icons.receive}
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
     * Create info card
     */
    function createInfoCard(config) {
        const { 
            type = 'tip',
            title = '提示',
            text = '这里是提示内容'
        } = config;
        
        const iconSvg = getIcon(type);
        
        return `
            <div class="vc-card vc-info">
                <div class="vc-info__icon vc-info__icon--${type}">
                    ${iconSvg}
                </div>
                <div class="vc-info__content">
                    <div class="vc-info__title">${title}</div>
                    <div class="vc-info__text">${text}</div>
                </div>
            </div>
        `;
    }

    /**
     * Create bento container
     */
    function createBentoContainer(layout, content) {
        return `
            <div class="vc-bento vc-bento--${layout}">
                ${content}
            </div>
        `;
    }

    /**
     * Create card from Mermaid type
     */
    function createFromMermaid(type, content) {
        switch(type) {
            case 'flowchart':
            case 'flow':
                return createFlowCard({
                    title: '流程图',
                    badge: '流程',
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

    /**
     * Create data type card - 数据类型类比卡片
     */
    function createDataTypeCard(config) {
        const {
            title = '数据类型类比',
            subtitle = '用生活场景理解编程概念',
            types = [
                {
                    name: '整型 int',
                    icon: 'hash',
                    color: '#6366f1',
                    examples: [
                        { label: '数量', value: '苹果 × 3' },
                        { label: '计数', value: '库存 100 件' }
                    ]
                },
                {
                    name: '字符型 String',
                    icon: 'text',
                    color: '#10b981',
                    examples: [
                        { label: '品名', value: '红富士苹果' },
                        { label: '描述', value: '新鲜水果' }
                    ]
                },
                {
                    name: '浮点型 float',
                    icon: 'decimal',
                    color: '#f59e0b',
                    examples: [
                        { label: '价格', value: '5.50 元' },
                        { label: '重量', value: '1.5 kg' }
                    ]
                },
                {
                    name: '布尔型 boolean',
                    icon: 'toggle',
                    color: '#ec4899',
                    examples: [
                        { label: '已买', value: 'true' },
                        { label: '会员', value: 'false' }
                    ]
                }
            ]
        } = config;

        const typesHtml = types.map((type, index) => {
            const examplesHtml = type.examples.map(ex => `
                <div class="vc-datatype__example">
                    <span class="vc-datatype__example-label">${ex.label}</span>
                    <span class="vc-datatype__example-value">${ex.value}</span>
                </div>
            `).join('');

            return `
                <div class="vc-datatype__type" style="--type-color: ${type.color}; animation-delay: ${index * 0.1}s">
                    <div class="vc-datatype__type-header">
                        <div class="vc-datatype__type-icon" style="background: ${type.color}20; color: ${type.color}">
                            ${getTypeIcon(type.icon)}
                        </div>
                        <div class="vc-datatype__type-name">${type.name}</div>
                    </div>
                    <div class="vc-datatype__examples">
                        ${examplesHtml}
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="vc-card vc-datatype">
                <div class="vc-datatype__header">
                    <div class="vc-datatype__icon">
                        ${Icons.database}
                    </div>
                    <div>
                        <div class="vc-datatype__title">${title}</div>
                        <div class="vc-datatype__subtitle">${subtitle}</div>
                    </div>
                </div>
                <div class="vc-datatype__grid">
                    ${typesHtml}
                </div>
            </div>
        `;
    }

    /**
     * Get data type icon
     */
    function getTypeIcon(type) {
        const icons = {
            hash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>`,
            text: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>`,
            decimal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
            toggle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle></svg>`
        };
        return icons[type] || icons.hash;
    }

    // Public API
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
        createDataTypeCard,
        Icons,
        IconColors,
        getIcon,
        getIconColor
    };

})();

// Export module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisualCards;
}
