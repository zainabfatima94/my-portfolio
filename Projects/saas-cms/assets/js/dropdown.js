// Disable default right-click
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            
            // Show custom menu at cursor position
            const menu = document.getElementById('custom-context-menu');
            menu.style.display = 'block';
            menu.style.left = `${e.pageX}px`;
            menu.style.top = `${e.pageY}px`;
        });

        // Close menu when clicking elsewhere
        document.addEventListener('click', () => {
            document.getElementById('custom-context-menu').style.display = 'none';
        });

// Block F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+J, etc.
document.addEventListener('keydown', function(e) {
    // List of restricted key combos
    const blockedCombos = [
        e.key === 'F12',
        e.ctrlKey && e.shiftKey && e.key === 'I',
        e.ctrlKey && e.shiftKey && e.key === 'J',
        e.ctrlKey && e.key === 'U',
        e.metaKey && e.altKey && e.key === 'I' // Mac: Cmd+Opt+I
    ];

    if (blockedCombos.some(combo => combo)) {
        e.preventDefault();
        e.stopPropagation();
        alert("Developer tools are disabled on this page.");
        return false;
    }
});

// Continuously check if page source is accessed (not perfect)
setInterval(() => {
    if (document.documentElement.outerHTML.length < 100) {
        // If HTML is "stripped," assume someone viewed source
        document.body.innerHTML = "Page source viewing is disabled.";
        window.location.reload();
    }
}, 1000);

