


$('.dropdown-menu1').on( 'click', 'a', function() {
    var text = $(this).html();
    var htmlText = text + ' <span class="caret"></span>';
    $(this).closest('.dropdown1').find('.dropdown-toggle').html(htmlText);
});