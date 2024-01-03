$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");


$("h1").text("Hi");
$("button").html("<em>Click Me</em>");

$("h1").css("color", "red")

$("img").attr("src")
$("a").attr("href", "https://www.youtube.com")


$("input").keypress(function (event) {
    console.log(event.key);
});

$("button").click(function () {
    $("h1").css("color", "purple")
});



// $("button").on("click", function () {
//     $("h1").hide()
// });

// $("button").on("click", function () {
//     $("h1").show()
// });


// $("button").on("click", function () {
//     $("h1").toggle()
// });

// $("button").on("click", function () {
//     $("h1").fadeToggle()
// });

// $("button").on("click", function () {
//     $("h1").fadeOut()
// });

// $("button").on("click", function () {
//     $("h1").fadeIn()
// });


// $("button").on("click", function () {
//     $("h1").slideUp()
// });


// $("button").on("click", function () {
//     $("h1").slideDown()
// });

// $("button").on("click", function () {
//     $("h1").slideToggle()
// });


// $("button").on("click", function () {
//     $("h1").animate({ opacity: 0.5 })
// });


$("button").on("click", function () {
    $("h1").animate({ margin: "20%" })
});