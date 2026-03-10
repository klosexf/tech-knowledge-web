/**
 * UI界面构建演示组件
 * 展示APP界面是如何用代码"画"出来的
 * 
 * 自动显示在 front-2 知识点详情页
 */

(function() {
    'use strict';

    const demoState = {
        activeTab: 'button',
        button: {
            text: '立即登录',
            bgColor: '#3B82F6',
            textColor: '#FFFFFF',
            borderRadius: 8,
            fontSize: 16,
            padding: 16
        },
        input: {
            placeholder: '请输入手机号',
            borderColor: '#E2E8F0',
            focusColor: '#3B82F6',
            borderRadius: 8,
            hasIcon: true
        },
        card: {
            title: '商品标题',
            subtitle: '商品描述信息',
            price: '¥99.00',
            imageUrl: '📦',
            shadow: true
        },
        layout: {
            direction: 'vertical',
            gap: 12,
            alignment: 'center',
            padding: 20
        },
        isInitialized: false
    };

    let elements = {};

    function init() {
        const demoArea = document.getElementById('uiBuilderDemoArea');
        if (!demoArea) {
            return;
        }

        if (demoState.isInitialized) {
            return;
        }

        demoArea.innerHTML = createComponentHTML();
        addComponentStyles();
        cacheElements();
        bindEvents();
        render();
        demoState.isInitialized = true;
    }

    function createComponentHTML() {
        return `
            <div class="ui-builder-demo" id="uiBuilderDemo">
                <div class="demo-header">
                    <h2 class="demo-title">🎨 界面是怎么画出来的？</h2>
                </div>
                
                <p class="demo-intro">
                    APP界面就像搭积木一样，用代码把各种组件组合起来。选择组件类型，调整属性，看看代码如何变化！
                </p>
                
                <div class="component-tabs">
                    <button class="comp-tab ${demoState.activeTab === 'button' ? 'active' : ''}" data-tab="button">
                        <span class="tab-icon">🔘</span>
                        <span>按钮</span>
                    </button>
                    <button class="comp-tab ${demoState.activeTab === 'input' ? 'active' : ''}" data-tab="input">
                        <span class="tab-icon">📝</span>
                        <span>输入框</span>
                    </button>
                    <button class="comp-tab ${demoState.activeTab === 'card' ? 'active' : ''}" data-tab="card">
                        <span class="tab-icon">🃏</span>
                        <span>卡片</span>
                    </button>
                    <button class="comp-tab ${demoState.activeTab === 'layout' ? 'active' : ''}" data-tab="layout">
                        <span class="tab-icon">📐</span>
                        <span>布局</span>
                    </button>
                </div>
                
                <div class="demo-workspace">
                    <div class="controls-section">
                        <h4 class="section-title">⚙️ 调整属性</h4>
                        <div class="controls-panel" id="controlsPanel">
                            ${getControlsHTML()}
                        </div>
                    </div>
                    
                    <div class="preview-section">
                        <h4 class="section-title">👁️ 实时预览</h4>
                        <div class="preview-area" id="previewArea">
                            ${getPreviewHTML()}
                        </div>
                    </div>
                </div>
                
                <div class="code-section">
                    <h4 class="section-title">💻 生成的代码</h4>
                    <div class="code-display">
                        <div class="code-header">
                            <span class="code-lang">React Native / CSS</span>
                            <button class="copy-btn" id="copyBtn">📋 复制</button>
                        </div>
                        <pre class="code-content" id="codeContent"><code>${getCodeHTML()}</code></pre>
                    </div>
                </div>
                
                <div class="tips-section">
                    <h4 class="section-title">💡 产品经理提示</h4>
                    <div class="tips-content" id="tipsContent">
                        ${getTipsHTML()}
                    </div>
                </div>
            </div>
        `;
    }

    function getControlsHTML() {
        if (demoState.activeTab === 'button') {
            return `
                <div class="control-group">
                    <label>按钮文字</label>
                    <input type="text" id="btnText" value="${demoState.button.text}" placeholder="输入按钮文字">
                </div>
                <div class="control-group">
                    <label>背景颜色</label>
                    <div class="color-picker">
                        <input type="color" id="btnBgColor" value="${demoState.button.bgColor}">
                        <span class="color-value">${demoState.button.bgColor}</span>
                    </div>
                </div>
                <div class="control-group">
                    <label>文字颜色</label>
                    <div class="color-picker">
                        <input type="color" id="btnTextColor" value="${demoState.button.textColor}">
                        <span class="color-value">${demoState.button.textColor}</span>
                    </div>
                </div>
                <div class="control-group">
                    <label>圆角大小: <span id="radiusValue">${demoState.button.borderRadius}px</span></label>
                    <input type="range" id="btnRadius" min="0" max="30" value="${demoState.button.borderRadius}">
                </div>
                <div class="control-group">
                    <label>字体大小: <span id="fontSizeValue">${demoState.button.fontSize}px</span></label>
                    <input type="range" id="btnFontSize" min="12" max="24" value="${demoState.button.fontSize}">
                </div>
            `;
        } else if (demoState.activeTab === 'input') {
            return `
                <div class="control-group">
                    <label>占位提示</label>
                    <input type="text" id="inputPlaceholder" value="${demoState.input.placeholder}" placeholder="输入提示文字">
                </div>
                <div class="control-group">
                    <label>边框颜色</label>
                    <div class="color-picker">
                        <input type="color" id="inputBorderColor" value="${demoState.input.borderColor}">
                        <span class="color-value">${demoState.input.borderColor}</span>
                    </div>
                </div>
                <div class="control-group">
                    <label>聚焦颜色</label>
                    <div class="color-picker">
                        <input type="color" id="inputFocusColor" value="${demoState.input.focusColor}">
                        <span class="color-value">${demoState.input.focusColor}</span>
                    </div>
                </div>
                <div class="control-group">
                    <label>圆角大小: <span id="inputRadiusValue">${demoState.input.borderRadius}px</span></label>
                    <input type="range" id="inputRadius" min="0" max="20" value="${demoState.input.borderRadius}">
                </div>
                <div class="control-group checkbox">
                    <label class="checkbox-label">
                        <input type="checkbox" id="inputHasIcon" ${demoState.input.hasIcon ? 'checked' : ''}>
                        <span>显示图标</span>
                    </label>
                </div>
            `;
        } else if (demoState.activeTab === 'card') {
            return `
                <div class="control-group">
                    <label>卡片标题</label>
                    <input type="text" id="cardTitle" value="${demoState.card.title}" placeholder="输入标题">
                </div>
                <div class="control-group">
                    <label>描述文字</label>
                    <input type="text" id="cardSubtitle" value="${demoState.card.subtitle}" placeholder="输入描述">
                </div>
                <div class="control-group">
                    <label>价格</label>
                    <input type="text" id="cardPrice" value="${demoState.card.price}" placeholder="输入价格">
                </div>
                <div class="control-group">
                    <label>图片</label>
                    <select id="cardImage">
                        <option value="📦" ${demoState.card.imageUrl === '📦' ? 'selected' : ''}>📦 包裹</option>
                        <option value="👕" ${demoState.card.imageUrl === '👕' ? 'selected' : ''}>👕 衣服</option>
                        <option value="📱" ${demoState.card.imageUrl === '📱' ? 'selected' : ''}>📱 手机</option>
                        <option value="💻" ${demoState.card.imageUrl === '💻' ? 'selected' : ''}>💻 电脑</option>
                    </select>
                </div>
                <div class="control-group checkbox">
                    <label class="checkbox-label">
                        <input type="checkbox" id="cardShadow" ${demoState.card.shadow ? 'checked' : ''}>
                        <span>显示阴影</span>
                    </label>
                </div>
            `;
        } else if (demoState.activeTab === 'layout') {
            return `
                <div class="control-group">
                    <label>排列方向</label>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="layoutDir" value="vertical" ${demoState.layout.direction === 'vertical' ? 'checked' : ''}>
                            <span>⬇️ 垂直</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="layoutDir" value="horizontal" ${demoState.layout.direction === 'horizontal' ? 'checked' : ''}>
                            <span>➡️ 水平</span>
                        </label>
                    </div>
                </div>
                <div class="control-group">
                    <label>间距: <span id="gapValue">${demoState.layout.gap}px</span></label>
                    <input type="range" id="layoutGap" min="0" max="40" value="${demoState.layout.gap}">
                </div>
                <div class="control-group">
                    <label>对齐方式</label>
                    <select id="layoutAlign">
                        <option value="flex-start" ${demoState.layout.alignment === 'flex-start' ? 'selected' : ''}>⬅️ 左对齐</option>
                        <option value="center" ${demoState.layout.alignment === 'center' ? 'selected' : ''}>⬆️ 居中</option>
                        <option value="flex-end" ${demoState.layout.alignment === 'flex-end' ? 'selected' : ''}>➡️ 右对齐</option>
                    </select>
                </div>
                <div class="control-group">
                    <label>内边距: <span id="paddingValue">${demoState.layout.padding}px</span></label>
                    <input type="range" id="layoutPadding" min="0" max="40" value="${demoState.layout.padding}">
                </div>
            `;
        }
    }

    function getPreviewHTML() {
        if (demoState.activeTab === 'button') {
            const btn = demoState.button;
            return `
                <button class="preview-button" style="
                    background-color: ${btn.bgColor};
                    color: ${btn.textColor};
                    border-radius: ${btn.borderRadius}px;
                    font-size: ${btn.fontSize}px;
                    padding: ${btn.padding}px 32px;
                ">
                    ${btn.text}
                </button>
            `;
        } else if (demoState.activeTab === 'input') {
            const input = demoState.input;
            return `
                <div class="preview-input-wrapper" style="
                    border: 2px solid ${input.borderColor};
                    border-radius: ${input.borderRadius}px;
                " data-focus-color="${input.focusColor}">
                    ${input.hasIcon ? '<span class="input-icon">📱</span>' : ''}
                    <input type="text" class="preview-input" placeholder="${input.placeholder}" readonly>
                </div>
            `;
        } else if (demoState.activeTab === 'card') {
            const card = demoState.card;
            return `
                <div class="preview-card" style="${card.shadow ? 'box-shadow: 0 4px 12px rgba(0,0,0,0.1);' : ''}">
                    <div class="card-image">${card.imageUrl}</div>
                    <div class="card-content">
                        <div class="card-title">${card.title}</div>
                        <div class="card-subtitle">${card.subtitle}</div>
                        <div class="card-price">${card.price}</div>
                    </div>
                </div>
            `;
        } else if (demoState.activeTab === 'layout') {
            const layout = demoState.layout;
            const flexDirection = layout.direction === 'vertical' ? 'column' : 'row';
            return `
                <div class="preview-layout" style="
                    flex-direction: ${flexDirection};
                    gap: ${layout.gap}px;
                    align-items: ${layout.alignment};
                    padding: ${layout.padding}px;
                ">
                    <div class="layout-item" style="background: #3B82F6;">1</div>
                    <div class="layout-item" style="background: #10B981;">2</div>
                    <div class="layout-item" style="background: #F59E0B;">3</div>
                </div>
            `;
        }
    }

    function getCodeHTML() {
        if (demoState.activeTab === 'button') {
            const btn = demoState.button;
            return `// React Native 按钮组件
<TouchableOpacity
  style={{
    backgroundColor: '${btn.bgColor}',
    borderRadius: ${btn.borderRadius},
    paddingVertical: ${btn.padding},
    paddingHorizontal: 32,
  }}
  onPress={() => console.log('按钮被点击')}
>
  <Text style={{
    color: '${btn.textColor}',
    fontSize: ${btn.fontSize},
    fontWeight: '600',
    textAlign: 'center',
  }}>
    ${btn.text}
  </Text>
</TouchableOpacity>`;
        } else if (demoState.activeTab === 'input') {
            const input = demoState.input;
            return `// React Native 输入框组件
<View style={{
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: '${input.borderColor}',
  borderRadius: ${input.borderRadius},
  paddingHorizontal: 12,
  paddingVertical: 10,
}}>
  ${input.hasIcon ? `<Text style={{marginRight: 8}}>📱</Text>` : ''}
  <TextInput
    placeholder="${input.placeholder}"
    style={{flex: 1, fontSize: 16}}
    onFocus={() => {
      // 边框变为聚焦色
      borderColor = '${input.focusColor}'
    }}
  />
</View>`;
        } else if (demoState.activeTab === 'card') {
            const card = demoState.card;
            return `// React Native 卡片组件
<View style={{
  backgroundColor: 'white',
  borderRadius: 12,
  ${card.shadow ? `shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,` : ''}
  overflow: 'hidden',
}}>
  <View style={{
    width: '100%',
    height: 120,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 48,
  }}>
    <Text style={{fontSize: 48}}>${card.imageUrl}</Text>
  </View>
  <View style={{padding: 16}}>
    <Text style={{
      fontSize: 16,
      fontWeight: '600',
      color: '#1F2937',
    }}>${card.title}</Text>
    <Text style={{
      fontSize: 14,
      color: '#6B7280',
      marginTop: 4,
    }}>${card.subtitle}</Text>
    <Text style={{
      fontSize: 18,
      fontWeight: '700',
      color: '#EF4444',
      marginTop: 8,
    }}>${card.price}</Text>
  </View>
</View>`;
        } else if (demoState.activeTab === 'layout') {
            const layout = demoState.layout;
            return `// React Native 布局
<View style={{
  flexDirection: '${layout.direction === 'vertical' ? 'column' : 'row'}',
  gap: ${layout.gap},
  alignItems: '${layout.alignment}',
  padding: ${layout.padding},
  backgroundColor: '#F9FAFB',
  borderRadius: 8,
}}>
  <View style={{
    width: 60,
    height: 60,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
  }} />
  <View style={{
    width: 60,
    height: 60,
    backgroundColor: '#10B981',
    borderRadius: 8,
  }} />
  <View style={{
    width: 60,
    height: 60,
    backgroundColor: '#F59E0B',
    borderRadius: 8,
  }} />
</View>`;
        }
    }

    function getTipsHTML() {
        if (demoState.activeTab === 'button') {
            return `
                <ul class="tips-list">
                    <li>按钮是APP中最常用的交互元素</li>
                    <li>圆角大小影响视觉风格：大圆角更现代，小圆角更正式</li>
                    <li>颜色对比度要足够，确保文字清晰可读</li>
                    <li>按钮高度一般不小于44px，方便手指点击</li>
                </ul>
            `;
        } else if (demoState.activeTab === 'input') {
            return `
                <ul class="tips-list">
                    <li>输入框要有清晰的占位提示（placeholder）</li>
                    <li>聚焦状态要给用户明确的视觉反馈</li>
                    <li>手机号、密码等输入框可以添加图标提示</li>
                    <li>输入框高度一般不小于48px</li>
                </ul>
            `;
        } else if (demoState.activeTab === 'card') {
            return `
                <ul class="tips-list">
                    <li>卡片用于组织相关信息，如商品、文章、用户等</li>
                    <li>阴影可以增加层次感，但不要过度使用</li>
                    <li>卡片内信息要有清晰的层次：标题 > 描述 > 价格</li>
                    <li>图片区域要保持统一的比例</li>
                </ul>
            `;
        } else if (demoState.activeTab === 'layout') {
            return `
                <ul class="tips-list">
                    <li>布局决定元素的排列方式</li>
                    <li>垂直布局适合表单、列表；水平布局适合导航、工具栏</li>
                    <li>适当的间距（gap）让界面更透气</li>
                    <li>内边距（padding）防止内容贴边</li>
                </ul>
            `;
        }
    }

    function cacheElements() {
        elements = {
            container: document.getElementById('uiBuilderDemo'),
            compTabs: document.querySelectorAll('.ui-builder-demo .comp-tab'),
            controlsPanel: document.getElementById('controlsPanel'),
            previewArea: document.getElementById('previewArea'),
            codeContent: document.getElementById('codeContent'),
            tipsContent: document.getElementById('tipsContent'),
            copyBtn: document.getElementById('copyBtn')
        };
    }

    function bindEvents() {
        elements.compTabs.forEach(tab => {
            tab.addEventListener('click', () => switchTab(tab.dataset.tab));
        });
        
        elements.copyBtn.addEventListener('click', copyCode);
        
        // 使用事件委托处理动态生成的控件
        elements.controlsPanel.addEventListener('input', handleControlChange);
        elements.controlsPanel.addEventListener('change', handleControlChange);
    }

    function handleControlChange(e) {
        const target = e.target;
        
        if (demoState.activeTab === 'button') {
            if (target.id === 'btnText') demoState.button.text = target.value;
            if (target.id === 'btnBgColor') demoState.button.bgColor = target.value;
            if (target.id === 'btnTextColor') demoState.button.textColor = target.value;
            if (target.id === 'btnRadius') {
                demoState.button.borderRadius = parseInt(target.value);
                document.getElementById('radiusValue').textContent = target.value + 'px';
            }
            if (target.id === 'btnFontSize') {
                demoState.button.fontSize = parseInt(target.value);
                document.getElementById('fontSizeValue').textContent = target.value + 'px';
            }
        } else if (demoState.activeTab === 'input') {
            if (target.id === 'inputPlaceholder') demoState.input.placeholder = target.value;
            if (target.id === 'inputBorderColor') demoState.input.borderColor = target.value;
            if (target.id === 'inputFocusColor') demoState.input.focusColor = target.value;
            if (target.id === 'inputRadius') {
                demoState.input.borderRadius = parseInt(target.value);
                document.getElementById('inputRadiusValue').textContent = target.value + 'px';
            }
            if (target.id === 'inputHasIcon') demoState.input.hasIcon = target.checked;
        } else if (demoState.activeTab === 'card') {
            if (target.id === 'cardTitle') demoState.card.title = target.value;
            if (target.id === 'cardSubtitle') demoState.card.subtitle = target.value;
            if (target.id === 'cardPrice') demoState.card.price = target.value;
            if (target.id === 'cardImage') demoState.card.imageUrl = target.value;
            if (target.id === 'cardShadow') demoState.card.shadow = target.checked;
        } else if (demoState.activeTab === 'layout') {
            if (target.name === 'layoutDir') demoState.layout.direction = target.value;
            if (target.id === 'layoutGap') {
                demoState.layout.gap = parseInt(target.value);
                document.getElementById('gapValue').textContent = target.value + 'px';
            }
            if (target.id === 'layoutAlign') demoState.layout.alignment = target.value;
            if (target.id === 'layoutPadding') {
                demoState.layout.padding = parseInt(target.value);
                document.getElementById('paddingValue').textContent = target.value + 'px';
            }
        }
        
        render();
    }

    function switchTab(tab) {
        demoState.activeTab = tab;
        
        elements.compTabs.forEach(t => {
            t.classList.toggle('active', t.dataset.tab === tab);
        });
        
        // 重新渲染控件和预览
        elements.controlsPanel.innerHTML = getControlsHTML();
        render();
    }

    function render() {
        elements.previewArea.innerHTML = getPreviewHTML();
        elements.codeContent.innerHTML = `<code>${escapeHtml(getCodeHTML())}</code>`;
        elements.tipsContent.innerHTML = getTipsHTML();
    }

    function copyCode() {
        const code = getCodeHTML();
        navigator.clipboard.writeText(code).then(() => {
            showFeedback('代码已复制！', 'success');
        }).catch(() => {
            showFeedback('复制失败', 'error');
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function showFeedback(message, type) {
        const feedback = document.createElement('div');
        feedback.className = `demo-feedback ${type}`;
        feedback.textContent = message;
        
        elements.container.appendChild(feedback);
        
        requestAnimationFrame(() => {
            feedback.classList.add('show');
        });
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => feedback.remove(), 300);
        }, 2000);
    }

    function addComponentStyles() {
        if (document.getElementById('ui-builder-demo-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'ui-builder-demo-styles';
        style.textContent = `
            .ui-builder-demo {
                background: #ffffff;
                border-radius: 16px;
                padding: 32px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                border: 1px solid #e2e8f0;
            }
            
            .demo-header {
                margin-bottom: 16px;
            }
            
            .demo-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #1e293b;
                margin: 0;
            }
            
            .demo-intro {
                color: #64748b;
                margin-bottom: 24px;
                line-height: 1.6;
            }
            
            .component-tabs {
                display: flex;
                gap: 8px;
                margin-bottom: 24px;
                flex-wrap: wrap;
            }
            
            .comp-tab {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 10px 16px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 0.875rem;
                font-weight: 500;
                color: #64748b;
            }
            
            .comp-tab:hover {
                background: #f1f5f9;
            }
            
            .comp-tab.active {
                background: #0d9488;
                border-color: #0d9488;
                color: white;
            }
            
            .demo-workspace {
                display: grid;
                grid-template-columns: 280px 1fr;
                gap: 24px;
                margin-bottom: 24px;
            }
            
            @media (max-width: 768px) {
                .demo-workspace {
                    grid-template-columns: 1fr;
                }
            }
            
            .section-title {
                font-size: 0.875rem;
                font-weight: 600;
                color: #64748b;
                margin-bottom: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .controls-section {
                background: #f8fafc;
                border-radius: 12px;
                padding: 20px;
            }
            
            .controls-panel {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            
            .control-group {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            
            .control-group label {
                font-size: 0.8125rem;
                font-weight: 500;
                color: #475569;
            }
            
            .control-group input[type="text"],
            .control-group select {
                padding: 8px 12px;
                border: 1px solid #e2e8f0;
                border-radius: 6px;
                font-size: 0.875rem;
                background: white;
            }
            
            .control-group input[type="text"]:focus,
            .control-group select:focus {
                outline: none;
                border-color: #0d9488;
            }
            
            .color-picker {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .color-picker input[type="color"] {
                width: 40px;
                height: 32px;
                border: 1px solid #e2e8f0;
                border-radius: 6px;
                cursor: pointer;
            }
            
            .color-value {
                font-size: 0.75rem;
                color: #64748b;
                font-family: monospace;
            }
            
            .control-group input[type="range"] {
                width: 100%;
                cursor: pointer;
            }
            
            .checkbox-label,
            .radio-label {
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                font-size: 0.875rem;
                color: #475569;
            }
            
            .radio-group {
                display: flex;
                gap: 16px;
            }
            
            .preview-section {
                background: #f8fafc;
                border-radius: 12px;
                padding: 20px;
            }
            
            .preview-area {
                min-height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                border-radius: 8px;
                border: 1px dashed #cbd5e1;
                padding: 24px;
            }
            
            .preview-button {
                border: none;
                cursor: pointer;
                font-weight: 600;
                transition: transform 0.2s ease, opacity 0.2s ease;
            }
            
            .preview-button:hover {
                opacity: 0.9;
                transform: scale(1.02);
            }
            
            .preview-input-wrapper {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 12px;
                background: white;
                width: 100%;
                max-width: 280px;
                transition: border-color 0.2s ease;
            }
            
            .preview-input-wrapper:focus-within {
                border-color: var(--focus-color, #3B82F6) !important;
            }
            
            .input-icon {
                font-size: 1.125rem;
            }
            
            .preview-input {
                flex: 1;
                border: none;
                outline: none;
                font-size: 1rem;
                background: transparent;
            }
            
            .preview-card {
                background: white;
                border-radius: 12px;
                overflow: hidden;
                width: 100%;
                max-width: 240px;
                border: 1px solid #e2e8f0;
            }
            
            .card-image {
                width: 100%;
                height: 120px;
                background: #f1f5f9;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
            }
            
            .card-content {
                padding: 16px;
            }
            
            .card-title {
                font-size: 1rem;
                font-weight: 600;
                color: #1e293b;
                margin-bottom: 4px;
            }
            
            .card-subtitle {
                font-size: 0.875rem;
                color: #64748b;
                margin-bottom: 8px;
            }
            
            .card-price {
                font-size: 1.125rem;
                font-weight: 700;
                color: #ef4444;
            }
            
            .preview-layout {
                display: flex;
                background: white;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
                width: 100%;
                min-height: 200px;
            }
            
            .layout-item {
                width: 60px;
                height: 60px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 600;
                font-size: 1.25rem;
            }
            
            .code-section {
                margin-bottom: 24px;
            }
            
            .code-display {
                background: #f8fafc;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #e2e8f0;
            }
            
            .code-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #e2e8f0;
                padding: 10px 16px;
                border-bottom: 1px solid #cbd5e1;
            }
            
            .code-lang {
                font-size: 0.75rem;
                font-weight: 600;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .copy-btn {
                padding: 6px 12px;
                background: white;
                border: 1px solid #cbd5e1;
                border-radius: 6px;
                font-size: 0.75rem;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .copy-btn:hover {
                background: #f1f5f9;
            }
            
            .code-content {
                padding: 16px;
                margin: 0;
                font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
                font-size: 0.8125rem;
                line-height: 1.7;
                color: #1e293b;
                overflow-x: auto;
                max-height: 300px;
                overflow-y: auto;
            }
            
            .code-content code {
                font-family: inherit;
            }
            
            .tips-section {
                background: #f0fdf4;
                border-radius: 12px;
                padding: 20px;
                border-left: 4px solid #10b981;
            }
            
            .tips-list {
                margin: 0;
                padding-left: 20px;
                color: #166534;
                font-size: 0.9375rem;
                line-height: 1.8;
            }
            
            .tips-list li {
                margin-bottom: 8px;
            }
            
            .demo-feedback {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 20px;
                border-radius: 8px;
                font-size: 0.875rem;
                font-weight: 500;
                color: white;
                transform: translateX(120%);
                transition: transform 0.3s ease;
                z-index: 10000;
            }
            
            .demo-feedback.show {
                transform: translateX(0);
            }
            
            .demo-feedback.success {
                background: #10b981;
            }
            
            .demo-feedback.error {
                background: #ef4444;
            }
            
            @media (max-width: 640px) {
                .ui-builder-demo {
                    padding: 20px;
                }
                
                .demo-title {
                    font-size: 1.25rem;
                }
                
                .component-tabs {
                    justify-content: center;
                }
                
                .comp-tab {
                    padding: 8px 12px;
                    font-size: 0.8125rem;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    window.startUiBuilderDemo = init;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    setTimeout(init, 100);

})();
