$(function() {
    let footerPhone = $('.footer__phone').text().trim().replaceAll(' ','').replaceAll('(','').replaceAll(')','').replaceAll('-','');
    let headerPhone = $('.header__phone').text().trim().replaceAll(' ','').replaceAll('(','').replaceAll(')','').replaceAll('-','');
    let popup1Phone = $('.popup1__phone').text().trim().replaceAll(' ','').replaceAll('(','').replaceAll(')','').replaceAll('-','');
    let popup2Phone = $('.popup2__phone').text().trim().replaceAll(' ','').replaceAll('(','').replaceAll(')','').replaceAll('-','');
    $('.footer__phone').attr('href','tel:'+footerPhone);
    $('.header__phone').attr('href','tel:'+headerPhone);
    $('.popup1__phone').attr('href','tel:'+popup1Phone);
    $('.popup2__phone').attr('href','tel:'+popup2Phone);
    let footerEmail = $('.footer__email').text().trim();
    let popupEmail = $('.popup__email').text().trim();
    $('.footer__email').attr('href','mailto:'+footerEmail);
    $('.popup__email').attr('href','mailto:'+popupEmail);
});