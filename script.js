  // JavaScript for mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Close mobile menu if clicked outside (optional)
        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target) && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });