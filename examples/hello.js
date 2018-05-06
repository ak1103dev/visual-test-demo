module.exports = function (inputColor) {
	return {
		contentType: 'text/html',
		content: `<html><body>
		 <div style="color: ${inputColor.color}; font-size: 200%;">
			สวัสดี
		 </div>
		</body></html>`
	};
};

