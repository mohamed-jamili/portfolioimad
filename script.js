 document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress');
            
            progressBars.forEach(bar => {
                const value = bar.getAttribute('data-value');
                setTimeout(() => {
                    bar.style.width = value + '%';
                }, 500);
            });

            // Navigation mobile
            const navToggle = document.getElementById('navToggle');
            const mainNav = document.getElementById('mainNav');
            
            navToggle.addEventListener('click', () => {
                const links = mainNav.querySelectorAll('a');
                links.forEach(link => {
                    link.style.display = link.style.display === 'block' ? 'none' : 'block';
                });
            });

            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Form submission
            const contactForm = document.getElementById('contactForm');
            const formMsg = document.getElementById('formMsg');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                formMsg.textContent = 'Message envoyé avec succès!';
                formMsg.style.color = 'var(--success)';
                contactForm.reset();
                
                setTimeout(() => {
                    formMsg.textContent = '';
                }, 3000);
            });
        });