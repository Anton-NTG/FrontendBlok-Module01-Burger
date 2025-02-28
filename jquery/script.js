$(".btn").click(() => {
    $(".box").fadeToggle();
});

$(".box").after("<p>Этот пример сделан на JQuery</p>");
$(".btn").html('Сделай клик');