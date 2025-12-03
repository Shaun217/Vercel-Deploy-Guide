document.addEventListener('DOMContentLoaded', () => {
    console.log('Vercel Demo: JavaScript 已加载');

    const btn = document.getElementById('clickMeBtn');
    const msg = document.getElementById('message');

    btn.addEventListener('click', () => {
        msg.classList.add('visible');
        btn.textContent = "测试成功！";
        btn.style.backgroundColor = "#48bb78";
        
        // 简单的控制台彩蛋
        console.log('%c 完美运行！ ', 'background: #222; color: #bada55; padding: 5px; border-radius: 3px;');
    });
});