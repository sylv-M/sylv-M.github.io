const recommendations = [
    {
        title: "The Elegy",
        description: "Please don't make me love you...",
        coverImage: "https://picsum.photos/id/104/400/300",
        link: "The-Elegy/"
    },
    {
        title: "Coming Soon",
        description: "✨ Stay tuned",
        coverImage: "https://picsum.photos/id/20/400/300",
        link: "#"
    },
    {
        title: "Coming Soon",
        description: "✨ Stay tuned",
        coverImage: "https://picsum.photos/id/26/400/300",
        link: "#"
    }
];
function loadRecommendations() {
    const container = document.getElementById('featuredScroll');
    if (!container) return;
    
    let html = '';
    for (let item of recommendations) {
        const isPlaceholder = item.link === '#' ? 'placeholder-card' : '';
        html += `
            <div class="featured-card ${isPlaceholder}" onclick="location.href='${item.link}'">
                <div class="card-cover-wrapper">
                    <img src="${item.coverImage}" alt="${item.title}封面" class="card-cover">
                    <div class="card-title-overlay">
                        <h3>${item.title}</h3>
                    </div>
                </div>
                <div class="card-info">
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}
