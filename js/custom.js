(function ($) {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    $('section#block-welcomeblock').addClass('well well-md');
    $('ul.menu--services-menu').addClass('nav-pills nav-stacked');
    $('div.carousel-inner > div.item > img').addClass('img-thumbnail');
    $('article.service > div.content > div.field--name-body').addClass('well well-sm');
    $('article.service > div.content > div.field--name-field-service-image').addClass('thumbnail');
    $('section.block-mailchimp-signup').addClass('well well-sm');
    $('div.field.field--name-field-content-left').addClass('col-md-6 well well-sm');
    $('div.field.field--name-field-content-right').addClass('col-md-6 well well-sm');
}(jQuery));