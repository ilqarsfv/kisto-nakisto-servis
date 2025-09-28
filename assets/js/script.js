$(document).ready(() => {
    $(".accordion").click(function () {
        $(this).toggleClass("active")
    })
    $(".dropdown").click(function (e) {
        e.stopPropagation()
        $(this).toggleClass("active")
    })
    $("#main-button").click(function () {
        $(this).toggleClass("open")
        $(".closeChat").toggleClass("hidden");
        $(".openChat").toggleClass("hidden");

    })
    $("#modalContentTop svg, .getModal").click(() => {
        $("#myModal").toggleClass("hidden")
    })
    $('#myModal').on('click', function (e) {
        if (!$(e.target).closest('.modalContent').length) {
            $(this).addClass('hidden');
        }
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.dropdown, .dropdownMenu').length) {
            $(".dropdown").removeClass("active");
        }
    });

    const banner = new Swiper(".heroSwiper", {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".bn-swiper-button-next",
            prevEl: ".bn-swiper-button-prev",
        },
    });

    Fancybox.bind('[data-fancybox="gallery"]', {});
})