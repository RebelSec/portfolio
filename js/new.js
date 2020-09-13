// Membuat animasi ke semua Link yang di klik
$("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 800, 'easeInOutExpo', function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
        });
    } // End if
});



// Ini untuk menyimpan parallax


$(window).scroll(function () {

    var scroll = $(this).scrollTop();

    // untuk jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + scroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + scroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + scroll / 1.2 + '%)'
    });

    // untuk gambar about
    if (scroll > $('.jumbotron').offset().top + 100) {
        $('.pKiri').addClass('muncul');
        $('.pKanan').addClass('muncul');

    }


    // untuk gambar portfolio
    if (scroll > $('.portfolio').offset().top - 250) {

        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {

                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');

            }, 300 * (i + 1));
        });
    }

    if (scroll > $('.contact').offset().top - 300) {
        $('.contact').addClass('muncul');

    }

});