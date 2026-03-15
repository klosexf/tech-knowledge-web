var AppCodeEditor = (function() {
    'use strict';
    
    function updateLineNumbers() {
        var elements = AppState.getElements();
        var lines = elements.codeInput.value.split('\n').length;
        elements.lineNumbers.innerHTML = Array.from({ length: lines }, function(_, i) {
            return i + 1;
        }).join('<br>');
    }
    
    function syncScroll() {
        var elements = AppState.getElements();
        elements.lineNumbers.scrollTop = elements.codeInput.scrollTop;
    }
    
    function executeCode() {
        var elements = AppState.getElements();
        var code = elements.codeInput.value;
        
        try {
            var output = '';
            var originalLog = console.log;
            console.log = function() {
                var args = Array.prototype.slice.call(arguments);
                output += args.map(function(arg) {
                    return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
                }).join(' ') + '\n';
            };
            
            eval(code);
            
            console.log = originalLog;
            elements.codeOutput.textContent = output || '代码执行成功，无输出';
            elements.codeOutput.classList.remove('error');
        } catch (error) {
            elements.codeOutput.textContent = '错误: ' + error.message;
            elements.codeOutput.classList.add('error');
        }
    }
    
    function clearCode() {
        var elements = AppState.getElements();
        elements.codeInput.value = '';
        elements.codeOutput.textContent = '';
        elements.codeOutput.classList.remove('error');
        updateLineNumbers();
    }
    
    return {
        updateLineNumbers: updateLineNumbers,
        syncScroll: syncScroll,
        executeCode: executeCode,
        clearCode: clearCode
    };
})();

if (typeof window !== 'undefined') {
    window.AppCodeEditor = AppCodeEditor;
}
