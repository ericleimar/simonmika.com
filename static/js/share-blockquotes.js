var quotes = document.getElementsByTagName("blockquote")
for (var i = 0; i < quotes.length; i++){
	var destinations = {
//		googleplus: "https://plus.google.com/share?url=" + encodeURIComponent(document.URL),
		facebook: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(document.URL),
		linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(document.URL) + "&title=" + encodeURIComponent(quotes[i].textContent.trim()) + "&summary=" + encodeURIComponent(document.title) + "&source=Simon says",
		twitter: "https://twitter.com/intent/tweet?source=webclient&text=" + encodeURIComponent(quotes[i].textContent.trim() + " " + document.URL + " via @simonjmika")
	}
	for (destination in destinations) {
		var link = document.createElement("a")
		link.href = destinations[destination]
		link.target = "_blank"
		link.className = "share " + destination
		quotes[i].insertBefore(link, quotes[i].firstChild)
	}
}