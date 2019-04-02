$(function() {
    var kw = localStorage.getItem('arrKey') ? JSON.parse(localStorage.getItem('arrKey')) : [];
    $('#searchBtn').on('click', function() {
        var keywold = $('#searchText').val();
        console.log(keywold);
        if (keywold.trim() == "") {
            mui.alert('请输入有效的内容');
            return;
        }
        if ($.inArray(keywold, kw) == -1) {
            kw.push(keywold);
            localStorage.setItem("arrKey", JSON.stringify(kw));
            location.href = 'search-res.html?words=' + keywold;
        } else {
            location.href = 'search-res.html?words=' + keywold;
            return;
        }
    })
    $('#searchRemove').click(function() {
        localStorage.removeItem('arrKey');
        $('#itemList').html("");
    })
    $('#itemList').on('click', 'li', function() {
        var wk = $(this).data('wk');
        $('#searchText').val(wk);
    })
    var html = template('template1', { 'list': kw });
    $('#itemList').html(html);

})