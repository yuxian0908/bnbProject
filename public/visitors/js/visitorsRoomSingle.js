function showphoto(){
    if($('#albumcontain').css('display')=='none'){
        $("#albumcontain").fadeIn(1000);
        $('#showphoto').text('收起相簿');
    }else{
        $('#showphoto').text('看照片');
        $('#albumcontain').fadeOut(500);
    }
}



$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none'
    });
});

// 當圖片載入後才執行
$(document).ready(function() {
    // 先取得先關區塊及圖片的寬高
    // 並設定每張圖片的邊距、縮放倍數及動畫速度
    var $block = $('#album'), 
        $li = $block.find('li'), 
        $img = $li.find('img'),
        _width = $img.width(), 
        _height = $img.height(), 
        _margin = 10, 
        _ratio = 1.1, 
        _speed = 400;

    // 把每一個 li 橫向排列好
    $li.each(function(i) {
        console.log('1');
        var $this = $(this), 
            _left = i * (_width + _margin);

        // 先把排列後的位置記錄在 .data('position') 中
        $this.css('left', _left).data('position', {
            left: _left,
            top: parseInt($this.css('top'), 10) || 0
        });
    }).hover(function(){	// 當滑鼠移入 $li 時
        var $this = $(this), 
            positionData = $this.data('position');

        // 改變 z-index 以免被遮到, 並移動 left 及 top
        // 同時找到 img 縮放寬高為原來的 _ratio 倍
        $this.css('z-index', 1).stop().animate({
            left: positionData.left - (_width * _ratio - _width) / 2,
            top: positionData.top - (_height * _ratio - _height) / 2
        }, _speed).find('img').stop().animate({
            width: _width * _ratio, 
            height: _height * _ratio
        }, _speed);
    }, function(){	// 當滑鼠移出 $li 時
        var $this = $(this), 
            positionData = $this.data('position');

        // 還原 z-index 並移回原來的 left 及 top
        // 同時找到 img 還原寬高
        $this.css('z-index', 0).stop().animate({
            left: positionData.left,
            top: positionData.top
        }, _speed).find('img').stop().animate({
            width: _width, 
            height: _height
        }, _speed);
    });
});
