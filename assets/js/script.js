$(document).ready(() => {
    $(".accordion").click(function () {
        $(this).toggleClass("active")
    })
    $(".dropdown").click(function (e) {
        e.stopPropagation()
        $(this).toggleClass("active")
    })

    $(document).click(function (e) {
        if (!$(e.target).closest('.dropdown, .dropdownMenu').length) {
            $(".dropdown").removeClass("active");
        }
    });
})