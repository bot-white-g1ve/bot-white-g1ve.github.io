// 调整异想体等级颜色
document.querySelectorAll('span.等级').forEach(function(span) {
    // 根据内容设置颜色
    if (span.textContent === "ALEPH") {
        span.style.color = 'red'; // ALEPH为红色
    } else if (span.textContent === "WAW") {
        span.style.color = 'purple'; // WAW为紫色
    } else if (span.textContent === "HE") {
        span.style.color = 'yellow';
    } else if (span.textContent === "TETH") {
        span.style.color = 'blue';
    } else if (span.textContent === "ZAYIN") {
        span.style.color = 'green';
    } else {
        span.style.color = 'black'; // 其他为黑色
    }
});

// 处理word section
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section.words');
    sections.forEach(function(section) {
        const lines = section.textContent.trim().split(/\s+/); // 通过空白字符分割词汇
        section.innerHTML = ''; // 清空原内容

        lines.forEach(word => {
            const span = document.createElement('span');
            span.className = 'word-tag'; // 应用定义好的样式类
            span.textContent = word;
            section.appendChild(span); // 将每个词作为一个tag添加到section中
        });
    })
});

// 新标签<span class="index" docu="文档文">快速生成目录链接
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.index');
    links.forEach(function(link) {
        var keyword = link.getAttribute('docu');
        var newLink = document.createElement('a');
        newLink.href = `网页计划/${keyword}.html`;
        newLink.textContent = keyword;
        link.replaceWith(newLink);
    });
});

// 新标签<span class="link" docu="文档文">快速生成内部链接
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.link');
    links.forEach(function(link) {
        var keyword = link.getAttribute('docu');
        var newLink = document.createElement('a');
        newLink.href = `${keyword}.html`;
        newLink.textContent = keyword;
        link.replaceWith(newLink);
    });
});

// hide story功能
document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById('hideStory');
    var storySection = document.querySelector('.story');
    
    toggleButton.addEventListener('click', function() {
        storySection.classList.toggle('hidden'); // 切换'hidden'类
    });
});
