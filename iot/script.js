// 平滑滾動導航
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

// 當滾動時添加導航欄陰影效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 頁面載入時的動畫效果
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.feature-card, .team-member, .tech-item');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// CSS 動畫定義
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// 回到頂部按鈕
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑ 回到頂部';
    button.id = 'backToTop';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        display: none;
        z-index: 99;
        font-weight: 600;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createBackToTopButton();

// 簡單的表單驗證（如果需要的話）
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// 列印系統信息到控制台
console.log('%c智慧影像監控系統', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%c物聯網應用專題 - 國立雲林科技大學', 'font-size: 14px; color: #2c3e50;');
console.log('%c組員：解皓翔、高睬薇、江亮儀', 'font-size: 12px; color: #7f8c8d;');