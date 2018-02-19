//check off specific todos by clicking
$("ul").on("click", "li", function() { //beacuse ul was created when page loads but not all lis were there when page loaded. hence on click cannot be used directly on li
    $(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("h1").on("click", ".fa-plus", function(){
    $("input[type='text']").fadeToggle();
   });

//inserting todo on pressing enter
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //grabbing new todo from input
        var temp = $(this).val();
        //clearing input area after pressing enter
        $(this).val("");
        //adding new todo to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + temp + "</li>");
    }
});