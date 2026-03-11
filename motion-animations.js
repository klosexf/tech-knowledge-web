/**
 * Motion 动画系统配置文件
 * 基于 Motion 动画库的最佳实践
 * 提供流畅、高性能的动画效果
 */

// ============================================
// Motion 动画配置
// ============================================
const MotionConfig = {
    // 默认缓动曲线
    easing: {
        // 标准缓动 - 适用于大多数动画
        standard: [0.4, 0, 0.2, 1],
        // 进入缓动 - 元素进入时使用
        enter: [0, 0, 0.2, 1],
        // 退出缓动 - 元素退出时使用
        exit: [0.4, 0, 1, 1],
        // 强调缓动 - 需要吸引注意力时使用
        emphasize: [0.4, 0, 0.6, 1],
        // 弹性缓动 - 用于活泼的效果
        bounce: [0.68, -0.55, 0.265, 1.55],
        // 平滑缓动 - 用于连续动画
        smooth: [0.25, 0.1, 0.25, 1]
    },
    
    // 持续时间配置 (毫秒)
    duration: {
        fast: 150,      // 快速反馈
        normal: 300,    // 标准过渡
        slow: 500,      // 慢速强调
        slower: 800     // 特殊效果
    },
    
    // 延迟配置
    delay: {
        none: 0,
        short: 50,
        normal: 100,
        long: 200
    },
    
    // 性能优化配置
    performance: {
        // 使用 will-change 的属性
        willChange: ['transform', 'opacity'],
        // 启用 GPU 加速
        useGPU: true,
        // 减少动画的媒体查询
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
    }
};

// ============================================
// Motion 动画工具类
// ============================================
class MotionAnimator {
    constructor() {
        this.isReducedMotion = MotionConfig.performance.reducedMotion.matches;
        this.animations = new Map();
        this.init();
    }
    
    init() {
        // 监听系统动画偏好设置变化
        MotionConfig.performance.reducedMotion.addEventListener('change', (e) => {
            this.isReducedMotion = e.matches;
        });
    }
    
    /**
     * 检查是否应该播放动画
     */
    shouldAnimate() {
        return !this.isReducedMotion;
    }
    
    /**
     * 获取动画配置
     */
    getConfig(options = {}) {
        return {
            duration: options.duration || MotionConfig.duration.normal,
            easing: options.easing || MotionConfig.easing.standard,
            delay: options.delay || MotionConfig.delay.none,
            ...options
        };
    }
    
    /**
     * 应用 will-change 优化
     */
    optimize(element) {
        if (!element) return;
        element.style.willChange = MotionConfig.performance.willChange.join(', ');
    }
    
    /**
     * 清除 will-change
     */
    cleanup(element) {
        if (!element) return;
        element.style.willChange = 'auto';
    }
    
    // ============================================
    // 基础动画方法
    // ============================================
    
    /**
     * 淡入动画
     */
    fadeIn(element, options = {}) {
        if (!element || !this.shouldAnimate()) {
            if (element) element.style.opacity = '1';
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig(options);
        
        return Motion.animate(element, 
            { opacity: [0, 1] },
            { 
                duration: config.duration / 1000,
                easing: config.easing,
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    /**
     * 淡出动画
     */
    fadeOut(element, options = {}) {
        if (!element || !this.shouldAnimate()) {
            if (element) element.style.opacity = '0';
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig(options);
        
        return Motion.animate(element,
            { opacity: [1, 0] },
            {
                duration: config.duration / 1000,
                easing: config.easing,
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    /**
     * 滑入动画
     */
    slideIn(element, direction = 'up', options = {}) {
        if (!element || !this.shouldAnimate()) {
            if (element) {
                element.style.opacity = '1';
                element.style.transform = 'none';
            }
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig(options);
        
        const transforms = {
            up: { y: [30, 0] },
            down: { y: [-30, 0] },
            left: { x: [30, 0] },
            right: { x: [-30, 0] }
        };
        
        const transform = transforms[direction] || transforms.up;
        
        return Motion.animate(element,
            { 
                opacity: [0, 1],
                ...transform
            },
            {
                duration: config.duration / 1000,
                easing: config.easing,
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    /**
     * 滑出动画
     */
    slideOut(element, direction = 'down', options = {}) {
        if (!element || !this.shouldAnimate()) {
            if (element) {
                element.style.opacity = '0';
            }
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig(options);
        
        const transforms = {
            up: { y: [0, -30] },
            down: { y: [0, 30] },
            left: { x: [0, -30] },
            right: { x: [0, 30] }
        };
        
        const transform = transforms[direction] || transforms.down;
        
        return Motion.animate(element,
            {
                opacity: [1, 0],
                ...transform
            },
            {
                duration: config.duration / 1000,
                easing: config.easing,
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    /**
     * 缩放动画
     */
    scale(element, from = 0.8, to = 1, options = {}) {
        if (!element || !this.shouldAnimate()) {
            if (element) element.style.transform = `scale(${to})`;
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig(options);
        
        return Motion.animate(element,
            { scale: [from, to] },
            {
                duration: config.duration / 1000,
                easing: config.easing,
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    /**
     * 弹性缩放动画
     */
    bounceScale(element, options = {}) {
        if (!element || !this.shouldAnimate()) {
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig({
            ...options,
            easing: MotionConfig.easing.bounce
        });
        
        return Motion.animate(element,
            { scale: [0.5, 1] },
            {
                duration: config.duration / 1000,
                easing: config.easing,
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    /**
     * 摇晃动画 - 用于错误提示
     */
    shake(element, options = {}) {
        if (!element || !this.shouldAnimate()) {
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig(options);
        
        return Motion.animate(element,
            { x: [0, -10, 10, -10, 10, 0] },
            {
                duration: config.duration / 1000,
                easing: 'linear',
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    /**
     * 脉冲动画
     */
    pulse(element, options = {}) {
        if (!element || !this.shouldAnimate()) {
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig(options);
        
        return Motion.animate(element,
            { scale: [1, 1.05, 1] },
            {
                duration: config.duration / 1000,
                easing: config.easing,
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    // ============================================
    // 高级动画效果
    // ============================================
    
    /**
     * 卡片翻转动画
     */
    flip(element, options = {}) {
        if (!element || !this.shouldAnimate()) {
            return Promise.resolve();
        }
        
        this.optimize(element);
        const config = this.getConfig({
            duration: MotionConfig.duration.slow,
            ...options
        });
        
        return Motion.animate(element,
            { rotateY: [0, 180] },
            {
                duration: config.duration / 1000,
                easing: config.easing,
                delay: config.delay / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    /**
     * 3D 卡片悬停效果
     */
    cardHover3D(element, intensity = 10) {
        if (!element || !this.shouldAnimate()) return;
        
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -intensity;
            const rotateY = (x - centerX) / centerX * intensity;
            
            Motion.animate(element,
                {
                    rotateX,
                    rotateY,
                    transformPerspective: 1000
                },
                { duration: 0.3, easing: MotionConfig.easing.smooth }
            );
        });
        
        element.addEventListener('mouseleave', () => {
            Motion.animate(element,
                { rotateX: 0, rotateY: 0 },
                { duration: 0.5, easing: MotionConfig.easing.bounce }
            );
        });
    }
    
    /**
     * 交错动画 - 用于列表项
     */
    stagger(elements, animationFn, options = {}) {
        if (!elements || elements.length === 0) return Promise.resolve();
        
        const config = this.getConfig(options);
        const staggerDelay = options.staggerDelay || 50;
        
        const promises = Array.from(elements).map((el, index) => {
            return animationFn(el, {
                ...config,
                delay: config.delay + (index * staggerDelay)
            });
        });
        
        return Promise.all(promises);
    }
    
    /**
     * 弹簧动画 - 物理效果
     */
    spring(element, properties, options = {}) {
        if (!element || !this.shouldAnimate()) {
            return Promise.resolve();
        }
        
        this.optimize(element);
        
        return Motion.animate(element,
            properties,
            {
                type: 'spring',
                stiffness: options.stiffness || 100,
                damping: options.damping || 10,
                mass: options.mass || 1,
                delay: (options.delay || 0) / 1000
            }
        ).finished.then(() => {
            this.cleanup(element);
        });
    }
    
    // ============================================
    // 手势动画
    // ============================================
    
    /**
     * 拖拽动画
     */
    draggable(element, options = {}) {
        if (!element) return;
        
        let isDragging = false;
        let startX, startY;
        
        element.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            element.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            Motion.animate(element,
                { x: deltaX, y: deltaY },
                { duration: 0, easing: 'linear' }
            );
        });
        
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            element.style.cursor = 'grab';
            
            // 弹性回弹
            if (options.snapBack !== false) {
                this.spring(element, { x: 0, y: 0 }, {
                    stiffness: 300,
                    damping: 20
                });
            }
        });
    }
    
    // ============================================
    // 滚动触发动画
    // ============================================
    
    /**
     * 滚动视差效果
     */
    parallax(element, speed = 0.5) {
        if (!element || !this.shouldAnimate()) return;
        
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const yPos = scrolled * speed;
            
            Motion.animate(element,
                { y: yPos },
                { duration: 0, easing: 'linear' }
            );
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    /**
     * 滚动显示动画
     */
    scrollReveal(elements, options = {}) {
        if (!elements || !this.shouldAnimate()) return;
        
        const config = this.getConfig({
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const delay = config.delay + (index * (options.staggerDelay || 100));
                    
                    Motion.animate(entry.target,
                        {
                            opacity: [0, 1],
                            y: [30, 0]
                        },
                        {
                            duration: config.duration / 1000,
                            easing: config.easing,
                            delay: delay / 1000
                        }
                    );
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: config.threshold,
            rootMargin: config.rootMargin
        });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
}

// ============================================
// 页面特定动画效果
// ============================================
class PageAnimations {
    constructor(animator) {
        this.animator = animator;
        this.init();
    }
    
    init() {
        this.initNavbarAnimation();
        this.initCardAnimations();
        this.initModalAnimations();
        this.initButtonAnimations();
        this.initScrollAnimations();
        this.initPageTransitions();
    }
    
    /**
     * 导航栏动画
     */
    initNavbarAnimation() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        // 初始进入动画
        this.animator.slideIn(navbar, 'down', {
            duration: MotionConfig.duration.normal,
            easing: MotionConfig.easing.enter
        });
        
        // 滚动时阴影动画
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50 && lastScroll <= 50) {
                Motion.animate(navbar,
                    { boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 4px 20px rgba(0,0,0,0.1)'] },
                    { duration: 0.3 }
                );
            } else if (currentScroll <= 50 && lastScroll > 50) {
                Motion.animate(navbar,
                    { boxShadow: ['0 4px 20px rgba(0,0,0,0.1)', '0 0 0 rgba(0,0,0,0)'] },
                    { duration: 0.3 }
                );
            }
            
            lastScroll = currentScroll;
        }, { passive: true });
    }
    
    /**
     * 卡片动画
     */
    initCardAnimations() {
        // 分类卡片
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            // 悬停效果
            card.addEventListener('mouseenter', () => {
                Motion.animate(card,
                    { 
                        y: -8,
                        scale: 1.02,
                        boxShadow: ['0 4px 6px rgba(0,0,0,0.1)', '0 20px 40px rgba(0,0,0,0.15)']
                    },
                    { duration: 0.3, easing: MotionConfig.easing.smooth }
                );
            });
            
            card.addEventListener('mouseleave', () => {
                Motion.animate(card,
                    { 
                        y: 0,
                        scale: 1,
                        boxShadow: ['0 20px 40px rgba(0,0,0,0.15)', '0 4px 6px rgba(0,0,0,0.1)']
                    },
                    { duration: 0.3, easing: MotionConfig.easing.smooth }
                );
            });
            
            // 点击效果
            card.addEventListener('mousedown', () => {
                Motion.animate(card,
                    { scale: 0.98 },
                    { duration: 0.1 }
                );
            });
            
            card.addEventListener('mouseup', () => {
                Motion.animate(card,
                    { scale: 1.02 },
                    { duration: 0.2, easing: MotionConfig.easing.bounce }
                );
            });
        });
        
        // 知识卡片
        const knowledgeCards = document.querySelectorAll('.knowledge-card');
        knowledgeCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                Motion.animate(card,
                    { 
                        y: -4,
                        borderColor: ['#e2e8f0', '#0d9488']
                    },
                    { duration: 0.25 }
                );
            });
            
            card.addEventListener('mouseleave', () => {
                Motion.animate(card,
                    { 
                        y: 0,
                        borderColor: ['#0d9488', '#e2e8f0']
                    },
                    { duration: 0.25 }
                );
            });
        });
    }
    
    /**
     * 模态框动画
     */
    initModalAnimations() {
        const modal = document.getElementById('completeModal');
        if (!modal) return;
        
        // 覆盖原始的显示/隐藏逻辑
        const originalAddActive = modal.classList.add.bind(modal.classList);
        const originalRemoveActive = modal.classList.remove.bind(modal.classList);
        
        modal.classList.add = function(className) {
            if (className === 'active') {
                modal.style.display = 'flex';
                modal.style.opacity = '0';
                
                // 背景淡入
                Motion.animate(modal,
                    { opacity: [0, 1] },
                    { duration: 0.2 }
                );
                
                // 内容缩放进入
                const content = modal.querySelector('.modal-content');
                if (content) {
                    Motion.animate(content,
                        { 
                            scale: [0.8, 1],
                            opacity: [0, 1],
                            y: [20, 0]
                        },
                        { 
                            duration: 0.4,
                            easing: MotionConfig.easing.bounce,
                            delay: 0.1
                        }
                    );
                }
            }
            originalAddActive(className);
        };
        
        modal.classList.remove = function(className) {
            if (className === 'active') {
                const content = modal.querySelector('.modal-content');
                
                // 内容缩放退出
                if (content) {
                    Motion.animate(content,
                        { 
                            scale: [1, 0.9],
                            opacity: [1, 0],
                            y: [0, -20]
                        },
                        { duration: 0.2 }
                    );
                }
                
                // 背景淡出
                Motion.animate(modal,
                    { opacity: [1, 0] },
                    { duration: 0.2, delay: 0.1 }
                ).finished.then(() => {
                    modal.style.display = 'none';
                });
            }
            originalRemoveActive(className);
        };
    }
    
    /**
     * 按钮动画
     */
    initButtonAnimations() {
        const buttons = document.querySelectorAll('.hero-cta, .action-btn, .quiz-btn.primary, .tab-btn');
        
        buttons.forEach(btn => {
            // 悬停效果
            btn.addEventListener('mouseenter', () => {
                Motion.animate(btn,
                    { y: -2 },
                    { duration: 0.2, easing: MotionConfig.easing.smooth }
                );
            });
            
            btn.addEventListener('mouseleave', () => {
                Motion.animate(btn,
                    { y: 0 },
                    { duration: 0.2, easing: MotionConfig.easing.smooth }
                );
            });
            
            // 点击涟漪效果
            btn.addEventListener('click', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    background: rgba(255,255,255,0.4);
                    border-radius: 50%;
                    pointer-events: none;
                    width: 20px;
                    height: 20px;
                    left: ${x - 10}px;
                    top: ${y - 10}px;
                `;
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.appendChild(ripple);
                
                Motion.animate(ripple,
                    { 
                        scale: [1, 10],
                        opacity: [1, 0]
                    },
                    { duration: 0.6 }
                ).finished.then(() => ripple.remove());
            });
        });
    }
    
    /**
     * 滚动触发动画
     */
    initScrollAnimations() {
        // 统计数字动画
        const statNumbers = document.querySelectorAll('.stat-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent;
                    const numericValue = parseInt(finalValue);
                    
                    if (!isNaN(numericValue)) {
                        // 数字递增动画
                        Motion.animate((progress) => {
                            target.textContent = Math.round(progress * numericValue);
                        },
                        { 
                            duration: 1.5,
                            easing: MotionConfig.easing.smooth
                        });
                    }
                    
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => observer.observe(stat));
        
        // 学习路径时间线动画
        const pathItems = document.querySelectorAll('.path-item');
        this.animator.scrollReveal(pathItems, {
            duration: 600,
            staggerDelay: 150,
            threshold: 0.2
        });
        
        // 特性卡片动画
        const featureItems = document.querySelectorAll('.feature-item');
        this.animator.scrollReveal(featureItems, {
            duration: 500,
            staggerDelay: 100,
            threshold: 0.1
        });
    }
    
    /**
     * 页面过渡动画
     */
    initPageTransitions() {
        // 页面加载完成后的入场动画
        window.addEventListener('load', () => {
            // Hero 区域动画
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            const heroStats = document.querySelector('.hero-stats');
            const heroCta = document.querySelector('.hero-cta');
            
            if (heroTitle) {
                this.animator.slideIn(heroTitle, 'up', { duration: 600, delay: 100 });
            }
            if (heroSubtitle) {
                this.animator.slideIn(heroSubtitle, 'up', { duration: 600, delay: 200 });
            }
            if (heroStats) {
                this.animator.slideIn(heroStats, 'up', { duration: 600, delay: 300 });
            }
            if (heroCta) {
                this.animator.slideIn(heroCta, 'up', { duration: 600, delay: 400 });
            }
            
            // 分类卡片交错入场
            const categoryCards = document.querySelectorAll('.category-card');
            this.animator.stagger(categoryCards, (el, opts) => {
                return this.animator.slideIn(el, 'up', {
                    ...opts,
                    duration: 500
                });
            }, { delay: 500, staggerDelay: 80 });
        });
    }
}

// ============================================
// 初始化
// ============================================
let motionAnimator = null;
let pageAnimations = null;

function initMotionAnimations() {
    // 检查 Motion 库是否加载
    if (typeof Motion === 'undefined') {
        console.warn('Motion library not loaded. Animations will be disabled.');
        return;
    }
    
    motionAnimator = new MotionAnimator();
    pageAnimations = new PageAnimations(motionAnimator);
    
    console.log('Motion animations initialized successfully');
}

// DOM 加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMotionAnimations);
} else {
    initMotionAnimations();
}

// 导出供其他模块使用
window.MotionConfig = MotionConfig;
window.MotionAnimator = MotionAnimator;
window.motionAnimator = motionAnimator;
