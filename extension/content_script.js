function windowClose() {
	chrome.extension.sendRequest({
		'url' : document.location.href
	}, function() {
	});
}

chrome.extension.sendRequest({}, function(response) {
	setTimeout(windowClose, response.auto_close_delay);
})