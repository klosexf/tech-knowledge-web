var AppVisualCards = (function() {
    'use strict';
    
    function createCustomVisualCard(content, index) {
        var trimmedContent = content.trim();
        
        if (trimmedContent.startsWith('mindmap')) {
            return createMindmapCard(trimmedContent);
        }
        
        if (trimmedContent.startsWith('classDiagram')) {
            return createClassDiagramCard(trimmedContent);
        }
        
        if (trimmedContent.startsWith('erDiagram')) {
            return createERDiagramCard(trimmedContent);
        }
        
        if (trimmedContent.startsWith('gantt')) {
            return createGanttCard(trimmedContent);
        }
        
        if (trimmedContent.startsWith('pie')) {
            return createPieCard(trimmedContent);
        }
        
        if (typeof AppDiagramDetection !== 'undefined' && AppDiagramDetection.isDataTypeDiagram(trimmedContent)) {
            return createDataTypeCardFromAscii(trimmedContent);
        }
        
        if (typeof AppDiagramDetection !== 'undefined' && AppDiagramDetection.isArchitectureDiagram(trimmedContent)) {
            return createArchitectureElement(trimmedContent);
        }
        
        return null;
    }
    
    function createMindmapCard(content) {
        var wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        var lines = content.split('\n');
        var rootTitle = '核心概念';
        var branches = [];
        var currentBranch = null;
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            if (!trimmed || trimmed === 'mindmap') return;
            
            var rootMatch = trimmed.match(/root\(\(([^)]+)\)\)/) || trimmed.match(/root\(([^)]+)\)/);
            if (rootMatch) {
                rootTitle = rootMatch[1].replace(/<br\/>/g, ' ').replace(/<br>/g, ' ');
                return;
            }
            
            var branchMatch = trimmed.match(/^(原则\d+|[\d\.]+)[：:]\s*(.+)/);
            if (branchMatch) {
                if (currentBranch) {
                    branches.push(currentBranch);
                }
                currentBranch = {
                    title: branchMatch[1] + '：' + branchMatch[2],
                    items: []
                };
            } else if (trimmed.startsWith('✅') || trimmed.startsWith('❌')) {
                if (currentBranch) {
                    currentBranch.items.push(trimmed);
                }
            } else if (/^(GET|POST|PUT|DELETE|code|message|data)/.test(trimmed)) {
                if (currentBranch) {
                    currentBranch.items.push(trimmed);
                }
            } else if (/^\d{3}\s/.test(trimmed)) {
                if (currentBranch) {
                    currentBranch.items.push(trimmed);
                }
            }
        });
        
        if (currentBranch) {
            branches.push(currentBranch);
        }
        
        if (typeof VisualCards !== 'undefined') {
            var branchTypes = ['concept', 'feature', 'tech', 'example'];
            var formattedBranches = branches.map(function(branch, index) {
                return {
                    type: branchTypes[index % branchTypes.length],
                    title: branch.title,
                    items: branch.items.slice(0, 6)
                };
            });
            
            wrapper.innerHTML = VisualCards.createMindmapCard({
                title: rootTitle,
                branches: formattedBranches.length > 0 ? formattedBranches : [
                    { type: 'concept', title: '概念1', items: ['子项1', '子项2'] },
                    { type: 'feature', title: '概念2', items: ['子项1', '子项2'] }
                ]
            });
        } else {
            var branchesHtml = branches.map(function(branch) {
                return '<div style="margin: 12px 0; padding: 12px; background: #f8fafc; border-radius: 8px;">' +
                    '<div style="font-weight: 600; color: #1e293b; margin-bottom: 8px;">' + branch.title + '</div>' +
                    '<div style="display: flex; flex-wrap: wrap; gap: 8px;">' +
                        branch.items.map(function(item) {
                            return '<span style="padding: 4px 12px; background: white; border-radius: 16px; font-size: 0.875rem; color: #64748b;">' + item + '</span>';
                        }).join('') +
                    '</div>' +
                '</div>';
            }).join('');
            
            wrapper.innerHTML = 
                '<div class="vc-card vc-mindmap">' +
                    '<div class="vc-mindmap__center">' +
                        '<div class="vc-mindmap__core">' +
                            '<span>' + rootTitle + '</span>' +
                        '</div>' +
                    '</div>' +
                    '<div style="padding: 20px;">' +
                        branchesHtml +
                    '</div>' +
                '</div>';
        }
        
        return wrapper;
    }
    
    function createClassDiagramCard(content) {
        var wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createInfoCard({
                type: 'note',
                title: '类图 Class Diagram',
                text: '面向对象设计中的类关系图，展示类的属性、方法和继承关系。'
            }) + 
            '<div class="vc-card" style="margin-top: 16px; padding: 20px;">' +
                '<pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 12px; font-family: \'JetBrains Mono\', monospace;">' + 
                    content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
                '</pre>' +
            '</div>';
        } else {
            wrapper.innerHTML = 
                '<div class="vc-card" style="padding: 24px;">' +
                    '<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">' +
                        '<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #8b5cf6, #a78bfa); border-radius: 10px; display: flex; align-items: center; justify-content: center;">' +
                            '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20">' +
                                '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
                                '<path d="M8 12h8M8 16h8M8 8h4"/>' +
                            '</svg>' +
                        '</div>' +
                        '<div style="font-size: 1.125rem; font-weight: 700; color: #1e293b;">类图 Class Diagram</div>' +
                    '</div>' +
                    '<pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 8px;">' + 
                        content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
                    '</pre>' +
                '</div>';
        }
        return wrapper;
    }
    
    function createERDiagramCard(content) {
        var wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createInfoCard({
                type: 'tip',
                title: 'ER图 Entity Relationship',
                text: '实体关系图，用于数据库设计，展示实体、属性和它们之间的关系。'
            }) + 
            '<div class="vc-card" style="margin-top: 16px; padding: 20px;">' +
                '<pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 12px; font-family: \'JetBrains Mono\', monospace;">' + 
                    content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
                '</pre>' +
            '</div>';
        } else {
            wrapper.innerHTML = 
                '<div class="vc-card" style="padding: 24px;">' +
                    '<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">' +
                        '<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f59e0b, #fbbf24); border-radius: 10px; display: flex; align-items: center; justify-content: center;">' +
                            '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20">' +
                                '<ellipse cx="12" cy="5" rx="9" ry="3"/>' +
                                '<path d="M3 5v14a9 3 0 0 0 18 0V5"/>' +
                                '<path d="M3 12a9 3 0 0 0 18 0"/>' +
                            '</svg>' +
                        '</div>' +
                        '<div style="font-size: 1.125rem; font-weight: 700; color: #1e293b;">ER图 Entity Relationship</div>' +
                    '</div>' +
                    '<pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 8px;">' + 
                        content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
                    '</pre>' +
                '</div>';
        }
        return wrapper;
    }
    
    function createGanttCard(content) {
        var wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createInfoCard({
                type: 'example',
                title: '甘特图 Gantt Chart',
                text: '项目管理时间线图，展示任务的开始时间、持续时间和完成进度。'
            }) + 
            '<div class="vc-card" style="margin-top: 16px; padding: 20px;">' +
                '<pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 12px; font-family: \'JetBrains Mono\', monospace;">' + 
                    content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
                '</pre>' +
            '</div>';
        } else {
            wrapper.innerHTML = 
                '<div class="vc-card" style="padding: 24px;">' +
                    '<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">' +
                        '<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #10b981, #34d399); border-radius: 10px; display: flex; align-items: center; justify-content: center;">' +
                            '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20">' +
                                '<rect x="3" y="4" width="18" height="18" rx="2"/>' +
                                '<path d="M16 2v4M8 2v4M3 10h18"/>' +
                            '</svg>' +
                        '</div>' +
                        '<div style="font-size: 1.125rem; font-weight: 700; color: #1e293b;">甘特图 Gantt Chart</div>' +
                    '</div>' +
                    '<pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 8px;">' + 
                        content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
                    '</pre>' +
                '</div>';
        }
        return wrapper;
    }
    
    function createPieCard(content) {
        var wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createInfoCard({
                type: 'tip',
                title: '饼图 Pie Chart',
                text: '数据占比可视化图表，直观展示各部分在整体中的比例分布。'
            }) + 
            '<div class="vc-card" style="margin-top: 16px; padding: 20px;">' +
                '<pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 12px; font-family: \'JetBrains Mono\', monospace;">' + 
                    content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
                '</pre>' +
            '</div>';
        } else {
            wrapper.innerHTML = 
                '<div class="vc-card" style="padding: 24px;">' +
                    '<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">' +
                        '<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ec4899, #f472b6); border-radius: 10px; display: flex; align-items: center; justify-content: center;">' +
                            '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20">' +
                                '<circle cx="12" cy="12" r="10"/>' +
                                '<path d="M12 2a10 10 0 0 1 10 10h-10z"/>' +
                            '</svg>' +
                        '</div>' +
                        '<div style="font-size: 1.125rem; font-weight: 700; color: #1e293b;">饼图 Pie Chart</div>' +
                    '</div>' +
                    '<pre style="white-space: pre-wrap; font-size: 0.875rem; color: #64748b; background: #f8fafc; padding: 16px; border-radius: 8px;">' + 
                        content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
                    '</pre>' +
                '</div>';
        }
        return wrapper;
    }
    
    function createHttpStructureVisualCard(content, index) {
        var wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        var isRequest = content.includes('HTTP请求') || content.includes('Request');
        var isResponse = content.includes('HTTP响应') || content.includes('Response');
        
        var lines = content.split('\n');
        var sections = [];
        var currentSection = null;
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            var subgraphMatch = trimmed.match(/subgraph\s+\w+\["([^"]+)"\]/);
            if (subgraphMatch) {
                if (currentSection) {
                    sections.push(currentSection);
                }
                currentSection = {
                    title: subgraphMatch[1],
                    items: []
                };
            }
            
            var nodeMatch = trimmed.match(/^\w+\["([^"]+)"\]/) || trimmed.match(/^\w+\['''([^']+)'''\]/);
            if (nodeMatch && currentSection) {
                currentSection.items.push(nodeMatch[1]);
            }
        });
        
        if (currentSection) {
            sections.push(currentSection);
        }
        
        var title = isRequest ? 'HTTP 请求结构' : isResponse ? 'HTTP 响应结构' : 'HTTP 报文结构';
        
        var sectionsHtml = sections.map(function(section) {
            var isCode = section.content && (section.content.includes('{') || section.content.includes('}'));
            return '<div class="http-section" style="margin-bottom: 16px;">' +
                '<div class="http-section-title" style="font-weight: 600; color: var(--text-primary); margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--border);">' +
                    section.title +
                '</div>' +
                '<div class="http-section-content" style="' + (isCode ? 'background: #f8fafc; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.875rem; color: var(--text-secondary); white-space: pre-wrap;' : 'color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6;') + '">' +
                    (section.content || section.items.join('\n')) +
                '</div>' +
            '</div>';
        }).join('');
        
        wrapper.innerHTML = 
            '<div class="vc-card vc-http-structure" style="background: white; border-radius: 20px; padding: 24px; box-shadow: 8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.8);">' +
                '<div class="vc-http-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid var(--border);">' +
                    '<div class="vc-http-icon" style="width: 48px; height: 48px; background: linear-gradient(135deg, #6366f1, #818cf8); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">' +
                        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">' +
                            '<circle cx="12" cy="12" r="10"/>' +
                            '<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' +
                        '</svg>' +
                    '</div>' +
                    '<div>' +
                        '<div class="vc-http-title" style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary);">' + title + '</div>' +
                        '<div class="vc-http-subtitle" style="font-size: 0.875rem; color: var(--text-secondary);">Request-Response Model</div>' +
                    '</div>' +
                '</div>' +
                '<div class="vc-http-body">' +
                    sectionsHtml +
                '</div>' +
            '</div>';
        
        return wrapper;
    }
    
    function createArchitectureElement(content) {
        var wrapper = document.createElement('div');
        wrapper.className = 'vc-card-wrapper';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        var layerConfigs = [];
        if (content.includes('前端') || content.includes('Frontend') || content.includes('表现层') || content.includes('客户端')) {
            layerConfigs.push({ type: 'client', name: '客户端层', desc: 'Web/App/小程序', icon: 'client' });
        }
        if (content.includes('网络') || content.includes('Network') || content.includes('网关') || content.includes('CDN')) {
            layerConfigs.push({ type: 'network', name: '网络层', desc: '数据传输与路由', icon: 'network' });
        }
        if (content.includes('服务') || content.includes('Backend') || content.includes('业务逻辑') || content.includes('API')) {
            layerConfigs.push({ type: 'server', name: '服务端层', desc: '业务逻辑处理', icon: 'server' });
        }
        if (content.includes('缓存') || content.includes('Cache') || content.includes('Redis')) {
            layerConfigs.push({ type: 'cache', name: '缓存层', desc: '高速数据缓存', icon: 'cache' });
        }
        if (content.includes('数据') || content.includes('Database') || content.includes('存储') || content.includes('MySQL') || content.includes('MongoDB')) {
            layerConfigs.push({ type: 'database', name: '数据存储层', desc: '持久化数据存储', icon: 'database' });
        }
        
        if (typeof VisualCards !== 'undefined') {
            wrapper.innerHTML = VisualCards.createArchitectureCard({
                title: '系统技术架构',
                subtitle: '分层架构设计模式',
                layers: layerConfigs.length > 0 ? layerConfigs : [
                    { type: 'client', name: '客户端层', desc: 'Web/App/小程序', icon: 'client' },
                    { type: 'server', name: '服务端层', desc: '业务逻辑处理', icon: 'server' },
                    { type: 'database', name: '数据存储层', desc: '持久化数据存储', icon: 'database' }
                ]
            });
        } else {
            var layersHtml = layerConfigs.map(function(layer) {
                return '<div class="arch-layer ' + layer.type + '" style="padding: 16px; margin: 8px 0; background: #f8fafc; border-radius: 12px; border-left: 4px solid var(--primary);">' +
                    '<div style="font-weight: 600; color: #1e293b;">' + layer.name + '</div>' +
                    '<div style="color: #64748b; font-size: 0.875rem;">' + layer.desc + '</div>' +
                '</div>';
            }).join('');
            
            wrapper.innerHTML = 
                '<div class="vc-card" style="background: white; border-radius: 20px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">' +
                    '<div style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 20px; text-align: center;">系统技术架构</div>' +
                    layersHtml +
                '</div>';
        }
        
        return wrapper;
    }
    
    function createDataTypeCardFromAscii(content) {
        var wrapper = document.createElement('div');
        wrapper.className = 'mermaid-diagram';
        wrapper.style.cssText = 'margin: 24px 0;';
        
        var types = [];
        var lines = content.split('\n');
        var currentType = null;
        var currentExamples = [];
        
        lines.forEach(function(line) {
            var trimmed = line.trim();
            
            if (trimmed.includes('【整型') || (trimmed.includes('整型') && !currentType)) {
                if (currentType) {
                    types.push(Object.assign({}, currentType, { examples: currentExamples }));
                }
                currentType = { name: '整型 int', category: '整数' };
                currentExamples = [];
            } else if (trimmed.includes('【字符型') || (trimmed.includes('字符型') && !currentType)) {
                if (currentType) {
                    types.push(Object.assign({}, currentType, { examples: currentExamples }));
                }
                currentType = { name: '字符型 String', category: '文本' };
                currentExamples = [];
            } else if (trimmed.includes('【浮点型') || (trimmed.includes('浮点型') && !currentType)) {
                if (currentType) {
                    types.push(Object.assign({}, currentType, { examples: currentExamples }));
                }
                currentType = { name: '浮点型 float', category: '小数' };
                currentExamples = [];
            } else if (trimmed.includes('【布尔型') || (trimmed.includes('布尔型') && !currentType)) {
                if (currentType) {
                    types.push(Object.assign({}, currentType, { examples: currentExamples }));
                }
                currentType = { name: '布尔型 boolean', category: '逻辑' };
                currentExamples = [];
            }
        });
        
        if (currentType) {
            types.push(Object.assign({}, currentType, { examples: currentExamples }));
        }
        
        var typesHtml = types.map(function(type) {
            return '<div style="padding: 12px; margin: 8px 0; background: #f8fafc; border-radius: 8px;">' +
                '<div style="font-weight: 600; color: #1e293b;">' + type.name + '</div>' +
                '<div style="color: #64748b; font-size: 0.875rem;">分类: ' + type.category + '</div>' +
            '</div>';
        }).join('');
        
        wrapper.innerHTML = 
            '<div class="vc-card" style="background: white; border-radius: 20px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">' +
                '<div style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 20px; text-align: center;">数据类型类比</div>' +
                typesHtml +
            '</div>';
        
        return wrapper;
    }
    
    return {
        createCustomVisualCard: createCustomVisualCard,
        createMindmapCard: createMindmapCard,
        createClassDiagramCard: createClassDiagramCard,
        createERDiagramCard: createERDiagramCard,
        createGanttCard: createGanttCard,
        createPieCard: createPieCard,
        createHttpStructureVisualCard: createHttpStructureVisualCard,
        createArchitectureElement: createArchitectureElement,
        createDataTypeCardFromAscii: createDataTypeCardFromAscii
    };
})();

if (typeof window !== 'undefined') {
    window.AppVisualCards = AppVisualCards;
}
