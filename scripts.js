document.addEventListener('DOMContentLoaded', function() {
    const rssFeedColumn = document.getElementById('rss-feed-column');

    const titleItem = document.createElement('h4');
    titleItem.textContent = 'RSS Feeds';
    rssFeedColumn.appendChild(titleItem);

    fetchRSSFeed('https://news.ycombinator.com/rss')

});

function fetchRSSFeed(url) {
    const rssFeedColumn = document.getElementById('rss-feed-column');
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const rssItem = document.createElement('div');
                rssItem.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`
                rssFeedColumn.appendChild(rssItem)
            });
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
}