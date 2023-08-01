// 当页面和外部资源都加载完成后
window.addEventListener('load', function () {
    // 获取加载动画元素
    const loading = document.querySelector('.loading') as HTMLElement;
    // 使用style属性设置元素的display属性为'none'来隐藏加载动画
    loading.style.display = 'none';
});

// 页面DOM结构加载完成后
document.addEventListener('DOMContentLoaded', function () {
    // 获取窗口宽度
    const whei = window.innerWidth;
    // 设置html元素的fontSize属性
    document.documentElement.style.fontSize = whei / 20 + 'px';

    // 监听窗口大小变化事件
    window.addEventListener('resize', function () {
        // 获取窗口宽度
        const whei = window.innerWidth;
        // 设置html元素的fontSize属性
        document.documentElement.style.fontSize = whei / 20 + 'px';
    });
});
