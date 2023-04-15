function onLoadHandler(iframe) {
	if(iframe) {
		iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
	}
}
