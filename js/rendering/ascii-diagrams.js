var AppAsciiDiagrams = (function() {
    'use strict';
    
    function convertAsciiDiagrams() {
        var elements = AppState.getElements();
        var detailContent = elements.detailContent;
        if (!detailContent) return;
        
        var codeBlocks = detailContent.querySelectorAll('pre code, pre');
        var convertedBlocks = new Set();
        
        codeBlocks.forEach(function(block) {
            if (convertedBlocks.has(block)) return;
            
            var content = block.textContent || block.innerText;
            if (!content || content.trim().length < 20) return;
            
            var trimmedContent = content.trim();
            
            if (trimmedContent.startsWith('flowchart') || 
                trimmedContent.startsWith('sequenceDiagram') || 
                trimmedContent.startsWith('mindmap') ||
                trimmedContent.startsWith('graph') ||
                trimmedContent.startsWith('classDiagram') ||
                trimmedContent.startsWith('erDiagram') ||
                trimmedContent.startsWith('gantt') ||
                trimmedContent.startsWith('pie') ||
                trimmedContent.startsWith('subgraph')) {
                return;
            }
            
            var converted = false;
            
            if (typeof AppDiagramDetection !== 'undefined') {
                if (AppDiagramDetection.isArchitectureDiagram(content)) {
                    var visualDiagram = createArchitectureVisualization(content);
                    if (visualDiagram) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'arch-diagram';
                        wrapper.innerHTML = visualDiagram;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isKnowledgeGraph(content)) {
                    var visualGraph = createKnowledgeGraphVisualization(content);
                    if (visualGraph) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'arch-knowledge-graph';
                        wrapper.innerHTML = visualGraph;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isEvolutionTimeline(content)) {
                    var visualTimeline = createEvolutionVisualization(content);
                    if (visualTimeline) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'arch-evolution';
                        wrapper.innerHTML = visualTimeline;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isCategoryTree(content)) {
                    var visualTree = createCategoryTreeVisualization(content);
                    if (visualTree) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'tree-diagram';
                        wrapper.innerHTML = visualTree;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isDecisionFlow(content)) {
                    var visualFlow = createDecisionFlowVisualization(content);
                    if (visualFlow) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'flow-diagram';
                        wrapper.innerHTML = visualFlow;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isProcessTimeline(content)) {
                    var visualProcess = createProcessTimelineVisualization(content);
                    if (visualProcess) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'process-timeline';
                        wrapper.innerHTML = visualProcess;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isComparisonDiagram(content)) {
                    var visualComparison = createComparisonVisualization(content);
                    if (visualComparison) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'comparison-diagram';
                        wrapper.innerHTML = visualComparison;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isChecklistDiagram(content)) {
                    var visualChecklist = createChecklistVisualization(content);
                    if (visualChecklist) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'checklist-diagram';
                        wrapper.innerHTML = visualChecklist;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isTechThinkingFlow(content)) {
                    var visualTechFlow = createTechThinkingFlowVisualization(content);
                    if (visualTechFlow) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'tech-flow-diagram';
                        wrapper.innerHTML = visualTechFlow;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isSolutionComparison(content)) {
                    var visualSolution = createSolutionComparisonVisualization(content);
                    if (visualSolution) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'solution-comparison';
                        wrapper.innerHTML = visualSolution;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
                else if (AppDiagramDetection.isSpecificationDiagram(content)) {
                    var visualSpec = createSpecificationVisualization(content);
                    if (visualSpec) {
                        var wrapper = document.createElement('div');
                        wrapper.className = 'spec-diagram';
                        wrapper.innerHTML = visualSpec;
                        block.parentNode.replaceChild(wrapper, block);
                        convertedBlocks.add(block);
                        converted = true;
                    }
                }
            }
        });
    }
    
    function createArchitectureVisualization(content) {
        var layers = [];
        
        if (content.includes('前端层') || content.includes('表现层') || content.includes('Presentation Layer') || content.includes('用户界面')) {
            layers.push({
                type: 'frontend',
                icon: '🎨',
                title: '表现层 Presentation Layer',
                subtitle: '前端/客户端 Client',
                features: ['运行在用户设备上的应用程序', '负责用户界面展示和用户交互', 'Web浏览器、移动APP、桌面应用、小程序']
            });
        }
        
        if (content.includes('业务逻辑层') || content.includes('Business Logic Layer') || content.includes('服务端/后端')) {
            layers.push({
                type: 'backend',
                icon: '⚙️',
                title: '业务逻辑层 Business Logic Layer',
                subtitle: '服务端/后端 Server',
                features: ['运行在服务器上的程序', '业务逻辑处理、数据计算', '安全验证等核心功能']
            });
        }
        
        if (content.includes('数据层') || content.includes('Data Layer') || content.includes('数据库')) {
            layers.push({
                type: 'database',
                icon: '🗄️',
                title: '数据层 Data Layer',
                subtitle: '数据库 Database',
                features: ['持久化存储数据的系统', '支持数据的增删改查操作', '数据备份与恢复机制']
            });
        }
        
        if (layers.length === 0) return null;
        
        var html = '<div class="arch-diagram-container">';
        
        layers.forEach(function(layer, index) {
            if (index > 0) {
                var connectionLabel = layer.type === 'backend' ? 'API 调用' : '数据访问';
                html += 
                    '<div class="arch-connection">' +
                        '<div class="arch-connection-line"></div>' +
                        '<span class="arch-connection-label">' + connectionLabel + '</span>' +
                    '</div>';
            }
            
            html += 
                '<div class="arch-layer ' + layer.type + '">' +
                    '<div class="arch-layer-header">' +
                        '<div class="arch-layer-icon">' + layer.icon + '</div>' +
                        '<div>' +
                            '<div class="arch-layer-title">' + layer.title + '</div>' +
                            '<div class="arch-layer-subtitle">' + layer.subtitle + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="arch-layer-content">' +
                        layer.features.map(function(f) {
                            return '<div class="arch-feature">' +
                                '<span class="arch-feature-dot"></span>' +
                                '<span>' + f + '</span>' +
                            '</div>';
                        }).join('') +
                    '</div>' +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    function createKnowledgeGraphVisualization(content) {
        var nodes = [];
        
        if (content.includes('前端') || content.includes('客户端')) {
            nodes.push({
                type: 'frontend-node',
                icon: '🖥️',
                title: '前端（客户端）',
                tags: ['用户看到的界面', '用户交互的入口', '数据展示']
            });
        }
        
        if (content.includes('服务端') || content.includes('后端')) {
            nodes.push({
                type: 'backend-node',
                icon: '🔧',
                title: '服务端（后端）',
                tags: ['业务逻辑处理', '数据验证', '安全控制']
            });
        }
        
        if (content.includes('数据库')) {
            nodes.push({
                type: 'database-node',
                icon: '💾',
                title: '数据库',
                tags: ['数据持久化存储', '数据查询', '数据关系管理']
            });
        }
        
        if (nodes.length === 0) return null;
        
        var html = 
            '<div class="arch-knowledge-title">📊 基础技术架构知识图谱</div>' +
            '<div class="arch-graph-container">';
        
        nodes.forEach(function(node, index) {
            if (index > 0) {
                var label = node.type === 'backend-node' ? '网络（数据传输）' : '数据访问';
                html += 
                    '<div class="arch-graph-connection">' +
                        '<div class="arch-graph-line"></div>' +
                        '<span class="arch-graph-label">' + label + '</span>' +
                        '<div class="arch-graph-line"></div>' +
                    '</div>';
            }
            
            html += 
                '<div class="arch-graph-node ' + node.type + '">' +
                    '<div class="arch-graph-icon">' + node.icon + '</div>' +
                    '<div class="arch-graph-content">' +
                        '<div class="arch-graph-title">' + node.title + '</div>' +
                        '<div class="arch-graph-tags">' +
                            node.tags.map(function(tag) {
                                return '<span class="arch-graph-tag">' + tag + '</span>';
                            }).join('') +
                        '</div>' +
                    '</div>' +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    function createEvolutionVisualization(content) {
        var items = [];
        
        if (content.includes('单体架构')) {
            items.push({ icon: '🏢', name: '单体架构' });
        }
        if (content.includes('微服务架构')) {
            items.push({ icon: '🧩', name: '微服务架构' });
        }
        if (content.includes('云原生架构')) {
            items.push({ icon: '☁️', name: '云原生架构' });
        }
        
        if (items.length === 0) return null;
        
        var html = 
            '<div class="arch-evolution-title">🚀 现代架构演进</div>' +
            '<div class="arch-evolution-timeline">';
        
        items.forEach(function(item, index) {
            if (index > 0) {
                html += '<span class="arch-evolution-arrow">→</span>';
            }
            html += 
                '<div class="arch-evolution-item">' +
                    '<span class="arch-evolution-icon">' + item.icon + '</span>' +
                    '<span class="arch-evolution-name">' + item.name + '</span>' +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    function createCategoryTreeVisualization(content) {
        var sections = [];
        var lines = content.split('\n');
        var currentSection = null;
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            if (trimmed.match(/^\d+\.\s+.+/)) {
                if (currentSection) sections.push(currentSection);
                currentSection = {
                    title: trimmed.replace(/^\d+\.\s+/, ''),
                    children: []
                };
            }
            else if (trimmed.startsWith('├──') || trimmed.startsWith('└──') || trimmed.startsWith('│  ├──') || trimmed.startsWith('│  └──')) {
                var text = trimmed.replace(/^[│├└─\s]+/, '').trim();
                if (currentSection && text) {
                    currentSection.children.push(text);
                }
            }
        });
        
        if (currentSection) sections.push(currentSection);
        
        if (sections.length === 0) return null;
        
        var title = '分类体系';
        if (content.includes('能力边界分类体系')) title = '能力边界分类体系';
        else if (content.includes('技术边界分类')) title = '技术边界分类';
        
        var icons = ['🔧', '💻', '🤖', '📊', '⚖️', '📱', '🌐', '🔒'];
        
        var html = 
            '<div class="tree-diagram-title">📋 ' + title + '</div>' +
            '<div class="tree-container">';
        
        sections.forEach(function(section, index) {
            var icon = icons[index % icons.length];
            html += 
                '<div class="tree-node">' +
                    '<div class="tree-node-header">' +
                        '<div class="tree-node-icon">' + icon + '</div>' +
                        '<span class="tree-node-title">' + section.title + '</span>' +
                    '</div>' +
                    (section.children.length > 0 ? 
                        '<div class="tree-children">' +
                            section.children.map(function(child) {
                                return '<div class="tree-child">' +
                                    '<span class="tree-child-dot"></span>' +
                                    '<span class="tree-child-text">' + child + '</span>' +
                                '</div>';
                            }).join('') +
                        '</div>' : '') +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    function createDecisionFlowVisualization(content) {
        var steps = [];
        var lines = content.split('\n');
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            if (trimmed.includes('├──') || trimmed.includes('└──')) {
                var text = trimmed.replace(/^[│├└─\s]+/, '').trim();
                
                if (text.includes('──>')) {
                    var parts = text.split('──>').map(function(p) { return p.trim(); });
                    if (parts.length >= 2) {
                        steps.push({
                            type: 'decision',
                            condition: parts[0],
                            result: parts[1]
                        });
                    }
                }
            }
            else if (trimmed.includes('──>') && !trimmed.includes('├') && !trimmed.includes('└')) {
                var parts = trimmed.split('──>').map(function(p) { return p.trim(); });
                if (parts.length >= 2) {
                    steps.push({
                        type: 'flow',
                        from: parts[0],
                        to: parts[1]
                    });
                }
            }
        });
        
        if (steps.length === 0) return null;
        
        var html = 
            '<div class="flow-diagram-title">🔄 流程决策图</div>' +
            '<div class="flow-container">';
        
        steps.forEach(function(step) {
            if (step.type === 'decision') {
                var iconType = step.result.includes('成功') || step.result.includes('继续') ? 'success' : 
                                 step.result.includes('失败') || step.result.includes('提示') ? 'error' : 'action';
                html += 
                    '<div class="flow-step">' +
                        '<div class="flow-step-icon ' + iconType + '">' + (iconType === 'success' ? '✓' : iconType === 'error' ? '✗' : '→') + '</div>' +
                        '<div class="flow-step-content">' +
                            '<div class="flow-step-title">' + step.condition + '</div>' +
                            '<div class="flow-step-desc">' + step.result + '</div>' +
                        '</div>' +
                    '</div>';
            } else {
                html += 
                    '<div class="flow-step">' +
                        '<div class="flow-step-icon action">→</div>' +
                        '<div class="flow-step-content">' +
                            '<div class="flow-step-title">' + step.from + '</div>' +
                            '<div class="flow-step-desc">' + step.to + '</div>' +
                        '</div>' +
                    '</div>';
            }
        });
        
        html += '</div>';
        return html;
    }
    
    function createProcessTimelineVisualization(content) {
        var items = [];
        var lines = content.split('\n');
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            var match = trimmed.match(/^(\d+)\.\s+(.+)/);
            if (match) {
                items.push({
                    number: match[1],
                    text: match[2]
                });
            }
        });
        
        if (items.length < 2) return null;
        
        var html = 
            '<div class="process-timeline-title">📝 执行步骤</div>' +
            '<div class="timeline-container">';
        
        items.forEach(function(item, index) {
            html += 
                '<div class="timeline-item">' +
                    '<div class="timeline-marker">' +
                        '<div class="timeline-dot">' + item.number + '</div>' +
                        (index < items.length - 1 ? '<div class="timeline-line"></div>' : '') +
                    '</div>' +
                    '<div class="timeline-content">' +
                        '<div class="timeline-content-title">' + item.text + '</div>' +
                    '</div>' +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    function createComparisonVisualization(content) {
        var columns = [];
        var lines = content.split('\n');
        var inTable = false;
        var headers = [];
        var rows = [];
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
                var cells = trimmed.split('|').filter(function(c) { return c.trim(); });
                
                if (cells.every(function(c) { return c.trim().match(/^-+$/); })) {
                    inTable = true;
                    return;
                }
                
                if (!inTable && cells.length > 0) {
                    headers = cells.map(function(c) { return c.trim(); });
                } else if (inTable && cells.length > 0) {
                    rows.push(cells.map(function(c) { return c.trim(); }));
                }
            }
        });
        
        if (headers.length < 2 || rows.length === 0) return null;
        
        var html = 
            '<div class="comparison-diagram-title">📊 对比分析</div>' +
            '<div class="comparison-container">';
        
        headers.forEach(function(header, index) {
            html += 
                '<div class="comparison-column">' +
                    '<div class="comparison-header">' +
                        '<div class="comparison-icon type-' + (index === 0 ? 'a' : 'b') + '">' + (index === 0 ? 'A' : 'B') + '</div>' +
                        '<span class="comparison-title">' + header + '</span>' +
                    '</div>' +
                    '<div class="comparison-items">' +
                        rows.map(function(row) {
                            return '<div class="comparison-item">' +
                                '<span class="comparison-item-icon">•</span>' +
                                '<span class="comparison-item-text">' + (row[index] || '') + '</span>' +
                            '</div>';
                        }).join('') +
                    '</div>' +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    function createChecklistVisualization(content) {
        var sections = [];
        var lines = content.split('\n');
        var currentSection = null;
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            if (trimmed.startsWith('【') && trimmed.endsWith('】')) {
                if (currentSection) sections.push(currentSection);
                currentSection = {
                    title: trimmed.replace(/【|】/g, ''),
                    items: []
                };
            }
            else if (trimmed.startsWith('□') || trimmed.includes('□')) {
                var text = trimmed.replace(/□/g, '').trim();
                if (currentSection && text) {
                    currentSection.items.push(text);
                }
            }
        });
        
        if (currentSection) sections.push(currentSection);
        
        if (sections.length === 0) return null;
        
        var html = 
            '<div class="checklist-diagram-title">✅ 自检清单</div>' +
            '<div class="checklist-container">';
        
        sections.forEach(function(section) {
            html += 
                '<div class="checklist-section">' +
                    '<div class="checklist-section-title">' +
                        '<span>📋</span>' +
                        '<span>' + section.title + '</span>' +
                    '</div>' +
                    '<div class="checklist-items">' +
                        section.items.map(function(item) {
                            return '<div class="checklist-item">' +
                                '<div class="checklist-checkbox"></div>' +
                                '<span>' + item + '</span>' +
                            '</div>';
                        }).join('') +
                    '</div>' +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    function createTechThinkingFlowVisualization(content) {
        var title = '技术思维流程图';
        if (content.includes('优惠券使用')) title = '🎫 优惠券使用技术思维拆解';
        else if (content.includes('秒杀活动')) title = '⚡ 秒杀活动技术思维拆解';
        else if (content.includes('用户注册')) title = '👤 用户注册技术思维拆解';
        else if (content.includes('发布动态')) title = '📝 发布动态完整流程图';
        
        var steps = [];
        var lines = content.split('\n');
        var currentStep = null;
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            var stepMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
            if (stepMatch) {
                if (currentStep) steps.push(currentStep);
                currentStep = {
                    number: parseInt(stepMatch[1]),
                    title: stepMatch[2],
                    branches: []
                };
            }
            else if (trimmed.includes('──>') && currentStep) {
                var parts = trimmed.split('──>').map(function(p) { return p.trim().replace(/^[│├└─\s]+/, ''); });
                if (parts.length >= 2 && parts[0] && parts[1]) {
                    currentStep.branches.push({
                        condition: parts[0],
                        result: parts[1]
                    });
                }
            }
        });
        
        if (currentStep) steps.push(currentStep);
        
        if (steps.length === 0) return null;
        
        var html = 
            '<div class="tech-flow-diagram-title">' + title + '</div>' +
            '<div class="tech-flow-container">';
        
        if (content.includes('【产品思维】') && content.includes('【技术思维】')) {
            html += 
                '<div class="thinking-comparison">' +
                    '<div class="thinking-card product">' +
                        '<div class="thinking-card-header">' +
                            '<span class="thinking-icon">💡</span>' +
                            '<span class="thinking-title">产品思维</span>' +
                        '</div>' +
                        '<div class="thinking-card-content">' +
                            '<p>用户视角，关注"是什么"</p>' +
                        '</div>' +
                    '</div>' +
                    '<div class="thinking-arrow">VS</div>' +
                    '<div class="thinking-card tech">' +
                        '<div class="thinking-card-header">' +
                            '<span class="thinking-icon">⚙️</span>' +
                            '<span class="thinking-title">技术思维</span>' +
                        '</div>' +
                        '<div class="thinking-card-content">' +
                            '<p>实现视角，关注"怎么做"</p>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        }
        
        steps.forEach(function(step, index) {
            html += 
                '<div class="tech-flow-step">' +
                    '<div class="tech-flow-step-header">' +
                        '<div class="tech-flow-step-number">' + step.number + '</div>' +
                        '<div class="tech-flow-step-title">' + step.title + '</div>' +
                    '</div>' +
                    (step.branches.length > 0 ? 
                        '<div class="tech-flow-branches">' +
                            step.branches.map(function(branch) {
                                return '<div class="tech-flow-branch">' +
                                    '<div class="branch-condition">' +
                                        '<span class="branch-icon">◇</span>' +
                                        '<span>' + branch.condition + '</span>' +
                                    '</div>' +
                                    '<div class="branch-arrow">→</div>' +
                                    '<div class="branch-result">' + branch.result + '</div>' +
                                '</div>';
                            }).join('') +
                        '</div>' : '') +
                '</div>';
            
            if (index < steps.length - 1) {
                html += '<div class="tech-flow-connector"></div>';
            }
        });
        
        html += '</div>';
        return html;
    }
    
    function createSolutionComparisonVisualization(content) {
        var solutions = [];
        var lines = content.split('\n');
        var currentSolution = null;
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            if (trimmed.match(/^方案\d[：:]/) || trimmed.match(/^方案\s*\d/)) {
                if (currentSolution) solutions.push(currentSolution);
                currentSolution = {
                    title: trimmed,
                    flow: '',
                    pros: [],
                    cons: []
                };
            }
            else if (trimmed.includes('流程：') && currentSolution) {
                currentSolution.flow = trimmed.replace('流程：', '').trim();
            }
            else if ((trimmed.includes('优点') || trimmed.startsWith('•')) && currentSolution) {
                var text = trimmed.replace(/^[•优点：:\s]+/, '').trim();
                if (text) currentSolution.pros.push(text);
            }
            else if ((trimmed.includes('缺点') || trimmed.includes('•')) && currentSolution) {
                var text = trimmed.replace(/^[•缺点：:\s]+/, '').trim();
                if (text && !currentSolution.pros.includes(text)) {
                    currentSolution.cons.push(text);
                }
            }
        });
        
        if (currentSolution) solutions.push(currentSolution);
        
        if (solutions.length === 0) return null;
        
        var html = 
            '<div class="solution-comparison-title">📊 库存扣减时机方案对比</div>' +
            '<div class="solution-container">';
        
        var colors = ['blue', 'orange', 'green'];
        
        solutions.forEach(function(solution, index) {
            var color = colors[index % colors.length];
            
            html += 
                '<div class="solution-card ' + color + '">' +
                    '<div class="solution-header">' +
                        '<span class="solution-badge">' + (index + 1) + '</span>' +
                        '<span class="solution-title">' + solution.title + '</span>' +
                    '</div>' +
                    (solution.flow ? 
                        '<div class="solution-flow">' +
                            '<span class="flow-label">流程：</span>' +
                            '<span class="flow-content">' + solution.flow + '</span>' +
                        '</div>' : '') +
                    '<div class="solution-pros-cons">' +
                        '<div class="solution-section pros">' +
                            '<div class="section-title">✅ 优点</div>' +
                            '<ul>' +
                                solution.pros.map(function(pro) { return '<li>' + pro + '</li>'; }).join('') +
                            '</ul>' +
                        '</div>' +
                        '<div class="solution-section cons">' +
                            '<div class="section-title">❌ 缺点</div>' +
                            '<ul>' +
                                solution.cons.map(function(con) { return '<li>' + con + '</li>'; }).join('') +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    function createSpecificationVisualization(content) {
        var title = '规范说明';
        if (content.includes('流程图绘制规范')) title = '📐 流程图绘制规范';
        else if (content.includes('异常处理设计模板')) title = '⚠️ 异常处理设计模板';
        
        var sections = [];
        var lines = content.split('\n');
        var currentSection = null;
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            if (trimmed.match(/^[a-zA-Z\u4e00-\u9fa5]+[：:]/) && trimmed.length < 20) {
                if (currentSection) sections.push(currentSection);
                currentSection = {
                    title: trimmed.replace(/[：:]/, ''),
                    items: []
                };
            }
            else if (trimmed.match(/^\d+\.\s+/) && currentSection) {
                currentSection.items.push(trimmed);
            }
            else if (trimmed.includes('椭圆') || trimmed.includes('矩形') || trimmed.includes('判断') || trimmed.includes('流程线')) {
                if (!currentSection) {
                    currentSection = { title: '基本符号', items: [] };
                }
                currentSection.items.push(trimmed);
            }
        });
        
        if (currentSection) sections.push(currentSection);
        
        var html = 
            '<div class="spec-diagram-title">' + title + '</div>' +
            '<div class="spec-container">';
        
        sections.forEach(function(section) {
            html += 
                '<div class="spec-section">' +
                    '<div class="spec-section-title">' + section.title + '</div>' +
                    '<div class="spec-items">' +
                        section.items.map(function(item) {
                            return '<div class="spec-item">' + item + '</div>';
                        }).join('') +
                    '</div>' +
                '</div>';
        });
        
        html += '</div>';
        return html;
    }
    
    return {
        convertAsciiDiagrams: convertAsciiDiagrams,
        createArchitectureVisualization: createArchitectureVisualization,
        createKnowledgeGraphVisualization: createKnowledgeGraphVisualization,
        createEvolutionVisualization: createEvolutionVisualization,
        createCategoryTreeVisualization: createCategoryTreeVisualization,
        createDecisionFlowVisualization: createDecisionFlowVisualization,
        createProcessTimelineVisualization: createProcessTimelineVisualization,
        createComparisonVisualization: createComparisonVisualization,
        createChecklistVisualization: createChecklistVisualization,
        createTechThinkingFlowVisualization: createTechThinkingFlowVisualization,
        createSolutionComparisonVisualization: createSolutionComparisonVisualization,
        createSpecificationVisualization: createSpecificationVisualization
    };
})();

if (typeof window !== 'undefined') {
    window.AppAsciiDiagrams = AppAsciiDiagrams;
}
