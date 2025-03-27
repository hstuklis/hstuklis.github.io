document.addEventListener('DOMContentLoaded', function() {
    const rssFeedContainer = document.getElementById('rss-feed-container');
    const rssUrls = [
        'https://news.ycombinator.com/rss'
    ];

    rssUrls.forEach(url => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`)
            .then(response => response.json())
            .then(data => {
                data.items.forEach(item => {
                    const rssItem = document.createElement('div');
                    rssItem.classList.add('rss-item');
                    rssItem.innerHTML = `
                        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                        <p>${item.description}</p>
                    `;
                    rssFeedContainer.appendChild(rssItem);
                });
            })
            .catch(error => console.error('Error fetching RSS feed:', error));
    });
});