/*
 * @desc index page controllers
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @createTime 2015-08-28
 */

var index = function(req, res) {
    res.render('index/index', {
        title: '首页'
    });
};

exports.index = index;
