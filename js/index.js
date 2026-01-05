// index.html - Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#137fec",
                "primary-hover": "#0f66bd",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "Noto Sans Thai", "sans-serif"],
                "body": ["Plus Jakarta Sans", "Noto Sans Thai", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
        },
    },
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('header button');
    const desktopMenu = document.querySelector('header .hidden.lg\\:flex');
    
    if (mobileMenuButton && desktopMenu) {
        // สร้าง Mobile Menu
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'hidden lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#101922] border-b border-gray-200 dark:border-gray-700 shadow-lg';
        mobileMenu.id = 'mobile-menu';
        mobileMenu.innerHTML = `
            <nav class="flex flex-col px-4 py-3">
                <a class="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-700" href="index.html">หน้าหลัก</a>
                <a class="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-700" href="Searchcar.html">รถเช่า</a>
                <a class="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-700" href="#promotions">โปรโมชั่น</a>
                <a class="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-700" href="contact.html">ติดต่อเรา</a>
                <div class="flex flex-col gap-2 pt-4">
                    <a href="login.html" class="w-full py-2.5 text-center bg-primary text-white text-sm font-bold rounded-lg">เข้าสู่ระบบ</a>
                    <a href="register.html" class="w-full py-2.5 text-center bg-gray-100 dark:bg-gray-700 text-[#111418] dark:text-white text-sm font-bold rounded-lg">ลงทะเบียน</a>
                </div>
            </nav>
        `;
        
        mobileMenuButton.parentElement.parentElement.appendChild(mobileMenu);
        
        // Toggle Menu
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuButton.querySelector('.material-symbols-outlined');
            icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
        });
    }
});
