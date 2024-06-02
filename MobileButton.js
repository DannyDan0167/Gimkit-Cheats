(function() {
    var button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-globe"></i>';
    button.style.position = 'fixed';
    button.style.right = '10px';
    button.style.bottom = '10px';
    button.style.zIndex = '1000';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.padding = '10px';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = 'gray';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.opacity = '0.5';
    button.querySelector('i').style.fontSize = '24px';

    document.body.appendChild(button);

    function simulateBackslashKeyPress() {
        var event = new KeyboardEvent('keydown', {
            key: '\\',
            code: 'Backslash',
            keyCode: 220,
            charCode: 0,
            bubbles: true
        });
        document.dispatchEvent(event);
    }

    button.addEventListener('click', simulateBackslashKeyPress);
})();