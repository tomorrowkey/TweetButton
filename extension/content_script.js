function windowClose() {
	chrome.extension.sendRequest({
		'url' : document.location.href
	}, function() {
	});
}

setTimeout(windowClose, 3 * 1000);
