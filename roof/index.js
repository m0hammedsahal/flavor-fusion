document.addEventListener('DOMContentLoaded', function () {
    // Dropdown functionality (similar to your existing code)
    // ...

    // Menu icon functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDrop = document.getElementById('mobile-drop');
    let isMenuOpen = false;

    mobileMenu.addEventListener('click', function () {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        mobileDrop.classList.remove('hidden');
    } else {
        console.log('Closing menu');
        mobileDrop.classList.add('hidden');
    }
    });

    
});