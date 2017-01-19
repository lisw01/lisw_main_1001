$(function () {
    // 展示图
    (function () {
        $('#etalage').etalage({
            thumb_image_width: 350,
            thumb_image_height: 450,
        });
    })();
    //去掉 a 标签的下划线
    (function () {
        var as = document.getElementsByTagName('a');
        for (var i = 0; i < as.length; i++) {
            as[i].style.textDecoration = 'none';
        }
    })();
    //电话
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

});