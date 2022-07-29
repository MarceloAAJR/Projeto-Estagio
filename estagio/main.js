$('.relatorios').click(function(){
    $('.menulat ul .itensRelat').toggleClass('mostra');
    $('.menulat ul .seta1').toggleClass('move');
});
$('.estacoes').click(function(){
    $('.menulat ul .itensEstac').toggleClass('mostra');
    $('.menulat ul .seta2').toggleClass('move');
});
$('.administrador').click(function(){
    $('.menulat ul .itensAdmin').toggleClass('mostra');
    $('.menulat ul .seta3').toggleClass('move');
});
$('.btnOpen').click(function(){
    $('.menulat').toggleClass('mostra');
});
$('.btnClose').click(function(){
    $('.menulat').toggleClass('mostra');
});

const $menuLateral = $('.menulat');
$(document).mouseup(e => {
    if(!$menuLateral.is(e.target)
    && $menuLateral.has(e.target).lengh === 0)
    {
        $menuLateral.removeClass('mostra');
    }
})