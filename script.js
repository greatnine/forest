// 模拟文章数据
const articles = [
    {
        //id: 1,
        title: "互动小说——迷失在森林",
        summary: "这个故事发生在一个神秘的森林中，主角是一名年轻的探险者。故事围绕着主角在森林中的冒险经历展开，玩家需要通过选择不同的对话和行动来推动故事的发展。在这个过程中，主角遇到了各种各样的挑战和谜题，需要运用智慧和勇气来克服困难。",
        link: "source/迷失在森林/index.html"
    },
    {
        //id: 1,
        title: "谍报惊险互动小说——截获（英文）",
        summary: "这个故事发生在二战时期英国布莱切利公园。主角是一位参与破解德军密码机Bombe的天才数学家。故事以主角被怀疑为叛徒、被隔离审讯为开端，围绕失踪密码机关键部件展开。<br>在审讯过程中，主角通过与审讯官的对话，逐渐揭开了一个更大的阴谋……",
        link: "source/TheIntercept/index.html"
    },
    {
        //id: 2,
        title: "骗术是如何奏效的——假马脱缎",
        summary: "中国古代经典骗经书里的故事。这个故事讲述了一个关于假马和脱缎的故事，揭示了人性中的贪婪和愚蠢。主角通过一系列的巧妙手段，成功地骗取了他人的信任和财富。",
        link: "source/假马脱缎/index.html"
    },
    {
        //id: 3,
        title: "反贪腐互动小说——提神贪官",
        summary: "这个互动故事发生在二十一世纪初法制不健全的社会。主角是一名年轻的反贪腐调查员。故事围绕着一名贪官的调查展开，玩家需要通过选择不同的对话和行动来推动故事的发展。在调查过程中，主角发现了一个更大的阴谋，并需要做出艰难的选择来揭露真相。",
        link: "source/提神贪官/index.html"
    }
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const articleList = document.getElementById('article-list');
    const articlePreview = document.getElementById('article-preview');
    
    // 生成文章列表
    articles.forEach(article => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = article.link;
        a.textContent = article.title;
        a.addEventListener('click', function(e) {
            e.preventDefault();
            showArticlePreview(article);
            // 在实际应用中，这里应该跳转到文章页面
            // window.location.href = article.link;
        });
        li.appendChild(a);
        articleList.appendChild(li);
    });
    
    // 默认显示第一篇文章预览
    if (articles.length > 0) {
        showArticlePreview(articles[0]);
    }
    
    // 显示文章预览
    function showArticlePreview(article) {
        articlePreview.innerHTML = `                     
            <h2><a href="${article.link}" target="_blank">${article.title}</a></h2>         
            <p>${article.summary}<br></p>
            <p><a href="${article.link}" target="_blank">开始阅读 → 《${article.title}》</a></p>   
        `;
    }
});