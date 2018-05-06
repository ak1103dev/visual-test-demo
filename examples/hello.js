module.exports = function (inputColor) {
	return {
		contentType: 'text/html',
		content: `<html><body>
		 <div style="color: ${inputColor.color}">
			สวัสดี
		 </div>
		</body></html>`
	};
};

