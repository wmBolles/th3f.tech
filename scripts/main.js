document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const navItems = document.querySelectorAll('.nav-item');
    const navSections = document.querySelectorAll('.nav-section');
    const attackLinks = document.querySelectorAll('[data-attack]');
    const homeContent = document.getElementById('home-content');
    const attackContent = document.getElementById('attack-content');
    const modal = document.getElementById('comingSoonModal');
    const closeModalBtn = document.querySelector('.close');
    const closeModalButton = document.getElementById('closeModal');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        localStorage.setItem('darkMode', isDark);
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    }

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            const section = this.getAttribute('data-section');
            
            if (section === 'home') {
                showHomeContent();
            } else {
                const parentSection = this.closest('.nav-section');
                if (parentSection) {
                    navSections.forEach(sec => sec.classList.remove('active'));
                    parentSection.classList.add('active');
                }
            }
        });
    });

    attackLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const attackType = this.getAttribute('data-attack');
            showAttackContent(attackType);
        });
    });

    function showHomeContent() {
        homeContent.classList.add('active');
        attackContent.classList.remove('active');
    }

    function showAttackContent(attackType) {
        homeContent.classList.remove('active');
        attackContent.classList.add('active');
        
        const attackDetails = document.querySelector('.attack-details');
        attackDetails.innerHTML = getAttackContent(attackType);
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeModalBtn.addEventListener('click', closeModal);
    closeModalButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    setTimeout(() => {
        modal.style.display = 'block';
    }, 1000);
});
