/**
 * 网页、小程序、APP 三种形态对比演示组件
 * 展示不同前端形态的特点和代码差异
 * 
 * 自动显示在 front-3 知识点详情页
 */

(function() {
    'use strict';

    const demoState = {
        activeType: 'web',
        feature: 'camera',
        isInitialized: false
    };

    const typeData = {
        web: {
            name: '网页 (H5)',
            icon: '🌐',
            color: '#3B82F6',
            desc: '在浏览器中运行，无需安装',
            pros: ['开发成本低', '分享方便（链接）', '跨平台', '更新即时'],
            cons: ['功能受限', '体验一般', '无法离线使用', '无推送通知'],
            tech: 'HTML + CSS + JavaScript',
            framework: 'Vue / React / 原生',
            access: ['相机 ❌', '定位 ✅', '通知 ❌', '蓝牙 ❌', '存储 ⚠️']
        },
        miniapp: {
            name: '小程序',
            icon: '💚',
            color: '#10B981',
            desc: '在微信/支付宝等超级APP内运行',
            pros: ['无需安装', '开发成本适中', '可调用平台能力', '分享方便'],
            cons: ['依赖平台', '功能受限', '审核严格', '用户留存低'],
            tech: '小程序专用语法',
            framework: '微信小程序 / uni-app / Taro',
            access: ['相机 ✅', '定位 ✅', '通知 ⚠️', '蓝牙 ✅', '存储 ✅']
        },
        native: {
            name: '原生APP',
            icon: '📱',
            color: '#8B5CF6',
            desc: '独立安装的应用程序',
            pros: ['体验最好', '功能最全', '性能最优', '用户粘性高'],
            cons: ['开发成本高', '需要下载', '审核周期长', '维护成本高'],
            tech: 'Swift/Kotlin 或 跨平台框架',
            framework: '原生 / Flutter / React Native',
            access: ['相机 ✅', '定位 ✅', '通知 ✅', '蓝牙 ✅', '存储 ✅']
        }
    };

    const featureData = {
        camera: {
            name: '调用相机',
            web: { supported: false, code: '// H5 无法直接调用相机\n// 只能使用 input 选择照片\n<input type="file" accept="image/*">', note: '只能让用户选择照片，无法直接打开相机' },
            miniapp: { supported: true, code: '// 微信小程序调用相机\nwx.chooseMedia({\n  count: 1,\n  mediaType: [\'image\'],\n  sourceType: [\'camera\'],\n  success: (res) => {\n    console.log(res.tempFiles[0].tempFilePath)\n  }\n})', note: '可以调用相机拍照或录像' },
            native: { supported: true, code: '// React Native 调用相机\nimport { launchCamera } from \'react-native-image-picker\';\n\nconst options = {\n  mediaType: \'photo\',\n  cameraType: \'back\'\n};\n\nlaunchCamera(options, (response) => {\n  if (response.assets) {\n    console.log(response.assets[0].uri)\n  }\n});', note: '完全控制相机，支持各种高级功能' }
        },
        location: {
            name: '获取定位',
            web: { supported: true, code: '// H5 获取定位\nnavigator.geolocation.getCurrentPosition(\n  (position) => {\n    const { latitude, longitude } = position.coords;\n    console.log(\`纬度: ${latitude}, 经度: ${longitude}\`);\n  },\n  (error) => {\n    console.error(\'定位失败:\', error)\n  }\n)', note: '需要用户授权，精度一般' },
            miniapp: { supported: true, code: '// 微信小程序获取定位\nwx.getLocation({\n  type: \'gcj02\',\n  success: (res) => {\n    console.log(\`纬度: ${res.latitude}\`)\n    console.log(\`经度: ${res.longitude}\`)\n    console.log(\`速度: ${res.speed}\`)\n    console.log(\`精度: ${res.accuracy}\`)\n  }\n})', note: '精度较高，支持多种坐标系' },
            native: { supported: true, code: '// React Native 获取定位\nimport Geolocation from \'@react-native-community/geolocation\';\n\nGeolocation.getCurrentPosition(\n  (position) => {\n    const { latitude, longitude } = position.coords;\n    console.log(\`位置: ${latitude}, ${longitude}\`);\n  },\n  (error) => console.error(error),\n  { enableHighAccuracy: true, timeout: 20000 }\n)', note: '支持高精度定位，后台定位等' }
        },
        storage: {
            name: '本地存储',
            web: { supported: 'limited', code: '// H5 本地存储\n// 只能存字符串，容量约 5MB\nlocalStorage.setItem(\'user\', JSON.stringify(user));\nconst user = JSON.parse(localStorage.getItem(\'user\'));\n\n// 或使用 IndexedDB（更复杂）', note: '容量小，只能存字符串，敏感数据不安全' },
            miniapp: { supported: true, code: '// 微信小程序本地存储\n// 单个 key 允许存储最大 1MB\nwx.setStorage({\n  key: \'userInfo\',\n  data: { name: \'张三\', age: 25 }\n});\n\nwx.getStorage({\n  key: \'userInfo\',\n  success: (res) => {\n    console.log(res.data)\n  }\n})', note: '可存对象，总容量 10MB 左右' },
            native: { supported: true, code: '// React Native 本地存储\nimport AsyncStorage from \'@react-native-async-storage/async-storage\';\n\n// 存储数据\nconst storeData = async (key, value) => {\n  try {\n    await AsyncStorage.setItem(key, JSON.stringify(value))\n  } catch (e) {\n    console.error(e)\n  }\n}\n\n// 读取数据\nconst getData = async (key) => {\n  try {\n    const value = await AsyncStorage.getItem(key)\n    return value != null ? JSON.parse(value) : null\n  } catch(e) {\n    console.error(e)\n  }\n}', note: '容量大（通常几十MB），支持加密存储' }
        },
        notification: {
            name: '推送通知',
            web: { supported: false, code: '// H5 推送通知受限\n// 需要用户授权且浏览器支持\nif (\'Notification\' in window) {\n  Notification.requestPermission().then(perm => {\n    if (perm === \'granted\') {\n      new Notification(\'标题\', { body: \'内容\' })\n    }\n  })\n}\n// iOS Safari 不支持', note: 'iOS Safari 不支持，Android 部分支持' },
            miniapp: { supported: 'limited', code: '// 微信小程序订阅消息\n// 需要用户主动订阅\nwx.requestSubscribeMessage({\n  tmplIds: [\'模板ID1\', \'模板ID2\'],\n  success: (res) => {\n    if (res[\'模板ID1\'] === \'accept\') {\n      console.log(\'用户同意订阅\')\n    }\n  }\n})\n\n// 服务端调用接口发送通知', note: '需要用户主动订阅，有次数限制' },
            native: { supported: true, code: '// React Native 推送通知\nimport PushNotification from \'react-native-push-notification\';\n\n// 本地通知\nPushNotification.localNotification({\n  title: \'新消息\',\n  message: \'您有一条新消息\',\n  playSound: true,\n  soundName: \'default\'\n});\n\n// 远程推送需要配置 APNs/FCM', note: '支持本地和远程推送，效果最佳' }
        }
    };

    let elements = {};

    function init() {
        const demoArea = document.getElementById('appTypesDemoArea');
        if (!demoArea) {
            return;
        }

        if (demoState.isInitialized && demoArea.innerHTML.trim() !== '') {
            return;
        }

        demoState.isInitialized = false;
        demoArea.innerHTML = createComponentHTML();
        addComponentStyles();
        cacheElements();
        bindEvents();
        render();
        demoState.isInitialized = true;
    }

    function createComponentHTML() {
        return `
            <div class="app-types-demo" id="appTypesDemo">
                <div class="demo-header">
                    <h2 class="demo-title">🌐 网页、小程序、APP 对比</h2>
                </div>
                
                <p class="demo-intro">
                    三种不同的产品形态，各有优缺点。选择一种形态，查看它的特性和代码实现！
                </p>
                
                <div class="type-selector">
                    ${Object.entries(typeData).map(([key, data]) => `
                        <button class="type-btn ${demoState.activeType === key ? 'active' : ''}" data-type="${key}" style="--type-color: ${data.color}">
                            <span class="type-icon">${data.icon}</span>
                            <div class="type-info">
                                <span class="type-name">${data.name}</span>
                                <span class="type-desc">${data.desc}</span>
                            </div>
                        </button>
                    `).join('')}
                </div>
                
                <div class="demo-content">
                    <div class="feature-selector">
                        <h4 class="section-title">选择功能对比</h4>
                        <div class="feature-tabs">
                            ${Object.entries(featureData).map(([key, data]) => `
                                <button class="feature-tab ${demoState.feature === key ? 'active' : ''}" data-feature="${key}">
                                    ${data.name}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="comparison-view">
                        <div class="code-comparison">
                            ${['web', 'miniapp', 'native'].map(type => {
                                const feature = featureData[demoState.feature];
                                const typeInfo = typeData[type];
                                const data = feature[type];
                                const isActive = demoState.activeType === type;
                                
                                return `
                                    <div class="code-panel ${isActive ? 'active' : 'dimmed'}" data-type="${type}">
                                        <div class="panel-header" style="--type-color: ${typeInfo.color}">
                                            <span class="panel-icon">${typeInfo.icon}</span>
                                            <span class="panel-name">${typeInfo.name}</span>
                                            <span class="support-badge ${data.supported === true ? 'supported' : data.supported === 'limited' ? 'limited' : 'unsupported'}">
                                                ${data.supported === true ? '✅ 支持' : data.supported === 'limited' ? '⚠️ 有限' : '❌ 不支持'}
                                            </span>
                                        </div>
                                        <div class="panel-body">
                                            <pre class="code-block"><code>${escapeHtml(data.code)}</code></pre>
                                            <p class="code-note">${data.note}</p>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        
                        <div class="type-details">
                            ${getTypeDetailsHTML()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function getTypeDetailsHTML() {
        const type = demoState.activeType;
        const data = typeData[type];
        
        return `
            <div class="details-card" style="--type-color: ${data.color}">
                <div class="details-header">
                    <span class="details-icon">${data.icon}</span>
                    <div>
                        <h4>${data.name}</h4>
                        <p>${data.desc}</p>
                    </div>
                </div>
                
                <div class="details-section">
                    <h5>技术栈</h5>
                    <div class="tech-tags">
                        <span class="tech-tag">${data.tech}</span>
                        <span class="tech-tag">${data.framework}</span>
                    </div>
                </div>
                
                <div class="details-grid">
                    <div class="details-col pros">
                        <h5>✅ 优点</h5>
                        <ul>
                            ${data.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="details-col cons">
                        <h5>❌ 缺点</h5>
                        <ul>
                            ${data.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="details-section">
                    <h5>系统能力访问</h5>
                    <div class="access-grid">
                        ${data.access.map(item => `
                            <div class="access-item">${item}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    function cacheElements() {
        elements = {
            container: document.getElementById('appTypesDemo'),
            typeBtns: document.querySelectorAll('.app-types-demo .type-btn'),
            featureTabs: document.querySelectorAll('.app-types-demo .feature-tab'),
            codePanels: document.querySelectorAll('.app-types-demo .code-panel'),
            typeDetails: document.querySelector('.app-types-demo .type-details')
        };
    }

    function bindEvents() {
        elements.typeBtns.forEach(btn => {
            btn.addEventListener('click', () => switchType(btn.dataset.type));
        });
        
        elements.featureTabs.forEach(tab => {
            tab.addEventListener('click', () => switchFeature(tab.dataset.feature));
        });
    }

    function switchType(type) {
        demoState.activeType = type;
        
        elements.typeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === type);
        });
        
        elements.codePanels.forEach(panel => {
            panel.classList.toggle('active', panel.dataset.type === type);
            panel.classList.toggle('dimmed', panel.dataset.type !== type);
        });
        
        elements.typeDetails.innerHTML = getTypeDetailsHTML();
    }

    function switchFeature(feature) {
        demoState.feature = feature;
        
        elements.featureTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.feature === feature);
        });
        
        render();
    }

    function render() {
        // 重新渲染代码对比区域
        const comparisonView = elements.container.querySelector('.code-comparison');
        comparisonView.innerHTML = ['web', 'miniapp', 'native'].map(type => {
            const feature = featureData[demoState.feature];
            const typeInfo = typeData[type];
            const data = feature[type];
            const isActive = demoState.activeType === type;
            
            return `
                <div class="code-panel ${isActive ? 'active' : 'dimmed'}" data-type="${type}">
                    <div class="panel-header" style="--type-color: ${typeInfo.color}">
                        <span class="panel-icon">${typeInfo.icon}</span>
                        <span class="panel-name">${typeInfo.name}</span>
                        <span class="support-badge ${data.supported === true ? 'supported' : data.supported === 'limited' ? 'limited' : 'unsupported'}">
                            ${data.supported === true ? '✅ 支持' : data.supported === 'limited' ? '⚠️ 有限' : '❌ 不支持'}
                        </span>
                    </div>
                    <div class="panel-body">
                        <pre class="code-block"><code>${escapeHtml(data.code)}</code></pre>
                        <p class="code-note">${data.note}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function addComponentStyles() {
        if (document.getElementById('app-types-demo-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'app-types-demo-styles';
        style.textContent = `
            .app-types-demo {
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
            
            .type-selector {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                margin-bottom: 24px;
            }
            
            @media (max-width: 768px) {
                .type-selector {
                    grid-template-columns: 1fr;
                }
            }
            
            .type-btn {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 16px;
                background: #f8fafc;
                border: 2px solid #e2e8f0;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: left;
            }
            
            .type-btn:hover {
                background: #f1f5f9;
                transform: translateY(-2px);
            }
            
            .type-btn.active {
                border-color: var(--type-color);
                background: white;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .type-icon {
                font-size: 2rem;
            }
            
            .type-info {
                display: flex;
                flex-direction: column;
            }
            
            .type-name {
                font-weight: 600;
                color: #1e293b;
                font-size: 1rem;
            }
            
            .type-desc {
                font-size: 0.75rem;
                color: #64748b;
                margin-top: 2px;
            }
            
            .demo-content {
                display: grid;
                grid-template-columns: 200px 1fr;
                gap: 24px;
            }
            
            @media (max-width: 768px) {
                .demo-content {
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
            
            .feature-tabs {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .feature-tab {
                padding: 12px 16px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 0.875rem;
                font-weight: 500;
                color: #64748b;
                text-align: left;
            }
            
            .feature-tab:hover {
                background: #f1f5f9;
            }
            
            .feature-tab.active {
                background: #0d9488;
                border-color: #0d9488;
                color: white;
            }
            
            .comparison-view {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            
            .code-comparison {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
            }
            
            @media (max-width: 1024px) {
                .code-comparison {
                    grid-template-columns: 1fr;
                }
            }
            
            .code-panel {
                background: #f8fafc;
                border-radius: 12px;
                overflow: hidden;
                border: 2px solid #e2e8f0;
                transition: all 0.3s ease;
            }
            
            .code-panel.active {
                border-color: var(--type-color);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                transform: scale(1.02);
            }
            
            .code-panel.dimmed {
                opacity: 0.6;
            }
            
            .panel-header {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 12px 16px;
                background: var(--type-color);
                color: white;
            }
            
            .panel-icon {
                font-size: 1.25rem;
            }
            
            .panel-name {
                flex: 1;
                font-weight: 600;
                font-size: 0.9375rem;
            }
            
            .support-badge {
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 0.75rem;
                font-weight: 500;
            }
            
            .support-badge.supported {
                background: rgba(255, 255, 255, 0.3);
            }
            
            .support-badge.limited {
                background: rgba(251, 191, 36, 0.3);
                color: #fbbf24;
            }
            
            .support-badge.unsupported {
                background: rgba(239, 68, 68, 0.3);
                color: #fca5a5;
            }
            
            .panel-body {
                padding: 16px;
            }
            
            .code-block {
                background: #1e293b;
                border-radius: 8px;
                padding: 12px;
                margin: 0 0 12px;
                font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
                font-size: 0.75rem;
                line-height: 1.6;
                color: #e2e8f0;
                overflow-x: auto;
                max-height: 200px;
                overflow-y: auto;
            }
            
            .code-block code {
                font-family: inherit;
            }
            
            .code-note {
                font-size: 0.8125rem;
                color: #64748b;
                margin: 0;
                padding: 8px;
                background: #f1f5f9;
                border-radius: 6px;
            }
            
            .type-details {
                margin-top: 8px;
            }
            
            .details-card {
                background: #f8fafc;
                border-radius: 12px;
                padding: 24px;
                border-left: 4px solid var(--type-color);
            }
            
            .details-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 20px;
            }
            
            .details-icon {
                font-size: 2.5rem;
            }
            
            .details-header h4 {
                font-size: 1.25rem;
                font-weight: 700;
                color: #1e293b;
                margin: 0;
            }
            
            .details-header p {
                color: #64748b;
                margin: 4px 0 0;
                font-size: 0.9375rem;
            }
            
            .details-section {
                margin-bottom: 20px;
            }
            
            .details-section h5 {
                font-size: 0.875rem;
                font-weight: 600;
                color: #475569;
                margin-bottom: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .tech-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            
            .tech-tag {
                padding: 6px 12px;
                background: white;
                border: 1px solid #e2e8f0;
                border-radius: 6px;
                font-size: 0.8125rem;
                color: #64748b;
            }
            
            .details-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 20px;
            }
            
            @media (max-width: 640px) {
                .details-grid {
                    grid-template-columns: 1fr;
                }
            }
            
            .details-col h5 {
                font-size: 0.875rem;
                font-weight: 600;
                margin-bottom: 12px;
            }
            
            .details-col.pros h5 {
                color: #10b981;
            }
            
            .details-col.cons h5 {
                color: #ef4444;
            }
            
            .details-col ul {
                margin: 0;
                padding-left: 18px;
                font-size: 0.875rem;
                color: #475569;
                line-height: 1.8;
            }
            
            .details-col li {
                margin-bottom: 4px;
            }
            
            .access-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 8px;
            }
            
            .access-item {
                padding: 8px 12px;
                background: white;
                border-radius: 6px;
                font-size: 0.8125rem;
                color: #64748b;
                text-align: center;
                border: 1px solid #e2e8f0;
            }
            
            @media (max-width: 640px) {
                .app-types-demo {
                    padding: 20px;
                }
                
                .demo-title {
                    font-size: 1.25rem;
                }
                
                .feature-tabs {
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                
                .feature-tab {
                    flex: 1;
                    min-width: 100px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    window.startAppTypesDemo = init;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    setTimeout(init, 100);

})();
