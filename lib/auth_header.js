
var re = /(\S+)\s+(\S+)/

function parseAuthHeader(hdrValue) { 
    if (!typeof hdrValue === 'string') {
        return null;
    }

    matches = hdrValue.match(re);
    return { scheme: matches[1], value: matches[2] }
}

function getCookies(request){
	var cookies = {};
	request.headers && request.headers.cookie.split(';').forEach(function(cookie) {
		var parts = cookie.match(/(.*?)=(.*)$/)
		cookies[ parts[1].trim() ] = (parts[2] || '').trim();
	});
	return cookies;	
}

module.exports = {
    parse: parseAuthHeader,
    cookies: getCookies
};
