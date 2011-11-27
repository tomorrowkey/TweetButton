function saveOption(key, value) {
	localStorage[key] = value;
}

function getOption(key, defaultValue) {
	var value = localStorage[key];
	if( typeof value === "undefined") {
		return defaultValue;
	} else if(value == null) {
		return defaultValue;
	} else {
		return value;
	}
}

function saveTweetFormat(tweet_format) {
	saveOption('tweet_format', tweet_format);
}

function getTweetFormat() {
	return getOption('tweet_format', '{title} {url}');
}

function restoreTweetFormat(){
	saveTweetFormat('{title} {url}');
}

/**
 * JavaScript で文字列フォーマットを実装してみた(sprintf もどき) | TM Life
 * http://tmlife.net/programming/javascript/javascript-string-format.html
 */
if(String.prototype.format == undefined) {
	/**
	 * フォーマット関数
	 */
	String.prototype.format = function(arg) {
		// 置換ファンク
		var rep_fn = undefined;

		// オブジェクトの場合
		if( typeof arg == "object") {
			rep_fn = function(m, k) {
				return arg[k];
			}
		}
		// 複数引数だった場合
		else {
			var args = arguments;
			rep_fn = function(m, k) {
				return args[ parseInt(k)];
			}
		}

		return this.replace(/\{(\w+)\}/g, rep_fn);
	}
}