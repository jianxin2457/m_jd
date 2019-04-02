$(function() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    $.ajax({
        url: "/category/queryTopCategory",
        type: "get",
        dataType: "json",
        success: function(res) {

            var html = template('template1', res);
            $('#oneList').html(html)

            $('#oneList').find('li').eq(0).addClass('active');
            var id = res.rows[0].id;
            getList(id);
        }

    })


    //通过事件委托给li添加事件
    $('#oneList').on('click', 'li', function() {
        var id = $(this).data('id');
        $(this).addClass('active').siblings().removeClass('active');
        getList(id);
    })

    function getList(id) {
        $.ajax({
            type: "get",
            url: "/category/querySecondCategory",
            data: {
                'id': id,
            },
            success: function(res) {
                var html = template('template2', res);
                console.log(html);
                $('#twoList').html(html);
            }
        })
    }
})