// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Preloader
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('fade-out');
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // Watch collection data
    const watches = [
        {
            id: 1,
            name: 'Chronograph Classic',
            price: 2499,
            image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            specs: [
                { icon: 'fa-clock', text: 'Automatic Movement' },
                { icon: 'fa-tint', text: '50m Water Resistant' },
                { icon: 'fa-gem', text: 'Sapphire Crystal' }
            ]
        },
        {
            id: 2,
            name: 'Diver Pro',
            price: 3199,
            image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            specs: [
                { icon: 'fa-clock', text: 'Automatic Movement' },
                { icon: 'fa-tint', text: '300m Water Resistant' },
                { icon: 'fa-gem', text: 'Ceramic Bezel' }
            ]
        },
        {
            id: 3,
            name: 'Pilot Heritage',
            price: 2899,
            image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            specs: [
                { icon: 'fa-clock', text: 'Automatic Movement' },
                { icon: 'fa-tint', text: '100m Water Resistant' },
                { icon: 'fa-gem', text: 'Leather Strap' }
            ]
        },
        {
            id: 4,
            name: 'Minimalist',
            price: 1999,
            image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            specs: [
                { icon: 'fa-clock', text: 'Quartz Movement' },
                { icon: 'fa-tint', text: '30m Water Resistant' },
                { icon: 'fa-gem', text: 'Minimal Design' }
            ]
        },
        {
            id: 5,
            name: 'Avenger',
            price: 3499,
            image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            specs: [
                { icon: 'fa-clock', text: 'Automatic Chronograph' },
                { icon: 'fa-tint', text: '200m Water Resistant' },
                { icon: 'fa-gem', text: 'Titanium Case' }
            ]
        },
        {
            id: 6,
            name: 'Moon Phase',
            price: 3999,
            image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            specs: [
                { icon: 'fa-clock', text: 'Automatic Movement' },
                { icon: 'fa-moon', text: 'Moon Phase Complication' },
                { icon: 'fa-gem', text: '18K Gold Case' }
            ]
        },
        {
            id: 7,
            name: 'GMT Master II',
            price: 4299,
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            specs: [
                { icon: 'fa-clock', text: 'Automatic GMT Movement' },
                { icon: 'fa-globe', text: 'Dual Time Zone' },
                { icon: 'fa-tint', text: '100m Water Resistant' },
                { icon: 'fa-gem', text: 'Ceramic Bezel' }
            ]
        },
        {
            id: 8,
            name: 'Royal Oak',
            price: 4999,
            image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            specs: [
                { icon: 'fa-clock', text: 'Automatic Movement' },
                { icon: 'fa-shield-alt', text: 'Shock Resistant' },
                { icon: 'fa-tint', text: '50m Water Resistant' },
                { icon: 'fa-gem', text: 'Stainless Steel Case' }
            ]
        }
    ];

    // Populate watch grid
    const watchGrid = document.querySelector('.watch-grid');
    if (watchGrid) {
        watches.forEach(watch => {
            const watchCard = document.createElement('div');
            watchCard.className = 'watch-card';
            watchCard.setAttribute('data-aos', 'fade-up');
            
            // Create specs HTML
            const specsHtml = watch.specs.map(spec => 
                `<span><i class="fas ${spec.icon}"></i> ${spec.text}</span>`
            ).join('');
            
            watchCard.innerHTML = `
                <div class="watch-image">
                    <img src="${watch.image}" alt="${watch.name}">
                    <div class="watch-overlay">
                        <button class="cta-button">View Details</button>
                    </div>
                </div>
                <div class="watch-details">
                    <h3>${watch.name}</h3>
                    <span class="watch-price">$${watch.price.toLocaleString()}</span>
                    <div class="watch-specs">
                        ${specsHtml}
                    </div>
                    <button class="cta-button add-to-cart" data-id="${watch.id}">Add to Cart</button>
                </div>
            `;
            
            watchGrid.appendChild(watchCard);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                // Here you would typically send the email to your server
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const watchId = e.target.getAttribute('data-id');
            const watch = watches.find(w => w.id === parseInt(watchId));
            if (watch) {
                // Here you would typically add the item to a shopping cart
                const button = e.target;
                const originalText = button.textContent;
                button.textContent = 'Added to Cart!';
                button.style.backgroundColor = '#4CAF50';
                
                // Reset button after animation
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                }, 2000);
                
                // Show notification
                showNotification(`${watch.name} added to cart!`);
            }
        }
    });

    // Show notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Add show class to trigger animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove notification after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background-color: #4CAF50;
            color: white;
            padding: 15px 30px;
            border-radius: 5px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero section
    const heroWatch = document.querySelector('.hero-watch');
    if (heroWatch) {
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            heroWatch.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});