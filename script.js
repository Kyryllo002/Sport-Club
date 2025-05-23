// Получаем элементы
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-menu a');

// Открытие/закрытие мобильного меню
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Плавная прокрутка к секциям
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Изменение шапки при прокрутке
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Если прокрутили больше 50px
        header.classList.add('scrolled'); // Добавляем класс scrolled
    } else {
        header.classList.remove('scrolled'); // Убираем класс scrolled
    }
});

// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true,
});




let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100; // Сдвигаем слайдер на 100% для каждого слайда
    document.querySelector('.hero-slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Переход к следующему слайду
    showSlide(currentSlide);
}

// Автопрокрутка слайдера каждые 7 секунд
setInterval(nextSlide, 4000);



AOS.init();



    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
    twq('config','oz46y');








    document.addEventListener('DOMContentLoaded', function() {
        // Фильтрация
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Удаляем active у всех кнопок
                filterBtns.forEach(b => b.classList.remove('active'));
                // Добавляем active текущей
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Lightbox
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const closeBtn = document.querySelector('.close-btn');
        
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                lightboxCaption.textContent = this.alt;
            });
        });
        
        closeBtn.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
        
        // Закрытие по клику вне изображения
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
        
        // Load More (имитация)
        const loadMoreBtn = document.getElementById('loadMore');
        let visibleItems = 8;
        
        loadMoreBtn.addEventListener('click', function() {
            // В реальном проекте здесь будет AJAX-запрос
            const items = Array.from(document.querySelectorAll('.gallery-item'));
            
            for (let i = visibleItems; i < visibleItems + 4 && i < items.length; i++) {
                items[i].style.display = 'block';
            }
            
            visibleItems += 4;
            
            if (visibleItems >= items.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    });




    // Только для index.html - слайдер
if (document.querySelector('.hero-slider')) {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    slides[0].classList.add('active');
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Для всех страниц - затемнение шапки при скролле
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
  });