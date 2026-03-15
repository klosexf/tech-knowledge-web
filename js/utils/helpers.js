var AppHelpers = (function() {
    'use strict';
    
    function debounce(func, wait) {
        var timeout;
        return function executedFunction() {
            var context = this;
            var args = arguments;
            var later = function() {
                clearTimeout(timeout);
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    function throttle(func, limit) {
        var inThrottle;
        return function() {
            var args = arguments;
            var context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() {
                    inThrottle = false;
                }, limit);
            }
        };
    }
    
    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    function unescapeHtml(text) {
        var div = document.createElement('div');
        div.innerHTML = text;
        return div.textContent || div.innerText || '';
    }
    
    function formatDate(date) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = String(d.getMonth() + 1).padStart(2, '0');
        var day = String(d.getDate()).padStart(2, '0');
        return year + '-' + month + '-' + day;
    }
    
    function formatTime(date) {
        var d = new Date(date);
        var hours = String(d.getHours()).padStart(2, '0');
        var minutes = String(d.getMinutes()).padStart(2, '0');
        var seconds = String(d.getSeconds()).padStart(2, '0');
        return hours + ':' + minutes + ':' + seconds;
    }
    
    function formatDateTime(date) {
        return formatDate(date) + ' ' + formatTime(date);
    }
    
    function generateId() {
        return 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }
    
    function deepClone(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        
        if (Array.isArray(obj)) {
            return obj.map(function(item) {
                return deepClone(item);
            });
        }
        
        var cloned = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
    
    function mergeObjects(target, source) {
        var result = deepClone(target);
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                    result[key] = mergeObjects(result[key] || {}, source[key]);
                } else {
                    result[key] = source[key];
                }
            }
        }
        return result;
    }
    
    function getUrlParams() {
        var params = {};
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.forEach(function(value, key) {
            params[key] = value;
        });
        return params;
    }
    
    function setUrlParam(key, value) {
        var url = new URL(window.location.href);
        url.searchParams.set(key, value);
        window.history.pushState({}, '', url);
    }
    
    function removeUrlParam(key) {
        var url = new URL(window.location.href);
        url.searchParams.delete(key);
        window.history.pushState({}, '', url);
    }
    
    function scrollToElement(element, offset) {
        offset = offset || 0;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    
    function copyToClipboard(text) {
        return new Promise(function(resolve, reject) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(function() {
                    resolve(true);
                }).catch(function(err) {
                    reject(err);
                });
            } else {
                var textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    resolve(true);
                } catch (err) {
                    reject(err);
                }
                
                document.body.removeChild(textArea);
            }
        });
    }
    
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    function isTablet() {
        return window.innerWidth > 768 && window.innerWidth <= 1024;
    }
    
    function isDesktop() {
        return window.innerWidth > 1024;
    }
    
    function getDeviceType() {
        if (isMobile()) return 'mobile';
        if (isTablet()) return 'tablet';
        return 'desktop';
    }
    
    function addClass(element, className) {
        if (element.classList) {
            element.classList.add(className);
        } else {
            var classes = element.className.split(' ');
            if (classes.indexOf(className) === -1) {
                element.className += ' ' + className;
            }
        }
    }
    
    function removeClass(element, className) {
        if (element.classList) {
            element.classList.remove(className);
        } else {
            var classes = element.className.split(' ');
            var index = classes.indexOf(className);
            if (index !== -1) {
                classes.splice(index, 1);
                element.className = classes.join(' ');
            }
        }
    }
    
    function hasClass(element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') !== -1;
    }
    
    function toggleClass(element, className) {
        if (hasClass(element, className)) {
            removeClass(element, className);
        } else {
            addClass(element, className);
        }
    }
    
    return {
        debounce: debounce,
        throttle: throttle,
        escapeHtml: escapeHtml,
        unescapeHtml: unescapeHtml,
        formatDate: formatDate,
        formatTime: formatTime,
        formatDateTime: formatDateTime,
        generateId: generateId,
        deepClone: deepClone,
        mergeObjects: mergeObjects,
        getUrlParams: getUrlParams,
        setUrlParam: setUrlParam,
        removeUrlParam: removeUrlParam,
        scrollToElement: scrollToElement,
        copyToClipboard: copyToClipboard,
        isMobile: isMobile,
        isTablet: isTablet,
        isDesktop: isDesktop,
        getDeviceType: getDeviceType,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass
    };
})();

if (typeof window !== 'undefined') {
    window.AppHelpers = AppHelpers;
}
