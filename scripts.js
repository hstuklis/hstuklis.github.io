document.addEventListener('DOMContentLoaded', function() {
    fetchRSSFeed('https://news.ycombinator.com/rss')
    fetchRSSFeed('')
});

function fetchRSSFeed(url) {
    const rssFeedColumn = document.getElementById('rss-feed-column');
    const boxItem = document.createElement('div');
    boxItem.classList.add('box');
    const title = document.createElement('h5');
    title.textContent = `${url}`;
    boxItem.appendChild(title);
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const rssItem = document.createElement('div');
                rssItem.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`
                boxItem.appendChild(rssItem)
            });
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
    rssFeedColumn.appendChild(boxItem);
}