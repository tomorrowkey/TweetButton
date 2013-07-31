chrome.tabs.getSelected(null, function(tab) {
	var tweet_format = getTweetFormat();
	var args = {
		'title' : tab.title,
		'url' : tab.url
	};

	var url = 'https://twitter.com/intent/tweet?text=' + encodeURI(tweet_format.format(args));
	window.open(url, '_blank');
});
