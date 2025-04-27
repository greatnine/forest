document.addEventListener('DOMContentLoaded', () => {
    const articlesData = [
        {
            //id: 1,
            date: "2024年2月3日",
            title: "迷失在森林",
            summary: "这个故事发生在一个神秘的森林中，主角是一名年轻的探险者。故事围绕着主角在森林中的冒险经历展开，玩家需要通过选择不同的对话和行动来推动故事的发展。在这个过程中，主角遇到了各种各样的挑战和谜题，需要运用智慧和勇气来克服困难。",
            link: "source/迷失在森林/index.html"
        },
        {
            //id: 1,
            date: "2024年11月10日",
            title: "谍报惊险互动小说——截获（英文）",
            summary: "这个故事发生在二战时期英国布莱切利公园。主角是一位参与破解德军密码机Bombe的天才数学家。故事以主角被怀疑为叛徒、被隔离审讯为开端，围绕失踪密码机关键部件展开。<br>在审讯过程中，主角通过与审讯官的对话，逐渐揭开了一个更大的阴谋……",
            link: "source/TheIntercept/index.html"
        },
        {
            //id: 2,
            date: "2024年11月10日",
            title: "骗术是如何奏效的——假马脱缎",
            summary: "中国古代经典骗经书里的故事。这个故事讲述了一个关于假马和脱缎的故事，揭示了人性中的贪婪和愚蠢。主角通过一系列的巧妙手段，成功地骗取了他人的信任和财富。",
            link: "source/假马脱缎/index.html"
        },
        {
            //id: 3,
            date: "2025年1月10日",
            title: "反贪腐互动小说——提神贪官",
            summary: "这个互动故事发生在二十一世纪初法制不健全的社会。主角是一名年轻的反贪腐调查员。故事围绕着一名贪官的调查展开，玩家需要通过选择不同的对话和行动来推动故事的发展。在调查过程中，主角发现了一个更大的阴谋，并需要做出艰难的选择来揭露真相。",
            link: "source/提神贪官/index.html"
        }
    ];

    const articlesContainer = document.getElementById('articles-container');
    
    // 动态生成文章卡片
    articlesData.forEach(article => {
        const articleCard = document.createElement('article');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <h3><a href="${article.link}">${article.title}</a></h3>
            <p class="preview">${article.summary}</p>            
            <p class="date">${article.date}</p>
            <p><a href="${article.link}" target="_blank">开始互动体验 → 《${article.title}》</a></p>  
        `;
        articlesContainer.appendChild(articleCard);
    });

    // 添加入场动画
    setTimeout(() => {
        document.querySelectorAll('.article-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.3}s`;
            card.classList.add('fade-in');
        });
    }, 500);
});