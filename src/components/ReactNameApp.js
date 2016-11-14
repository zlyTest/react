'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');

// 获取图片相关的数据
var imageDatas = require('../data/imageData.json');

// 利用自执行函数 把图片名信息转换成图片的固定URL地址
imageDatas = (function getImageURL(imageDataArr) {
	for (var i = 0; i < imageDataArr.length; i++) {
		var singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.filename);
		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
})(imageDatas);

var ReactNameApp = React.createClass({
	render: function() {
		return (
			<section className="stage">
				<section className="img-sec"></section>
				<nav className="controller-nav"></nav>
			</section>
		);
	}
});
React.render(<ReactNameApp />, document.getElementById('content')); // jshint ignore:line
module.exports = ReactNameApp;