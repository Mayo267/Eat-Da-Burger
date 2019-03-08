// $(function () {
//     $(".devour").on("click", function (event) {
//         var id = $(this).data("id");
//         var newDevour = $(this).data("newDevour");

//         var newDevourState = {
//             devoured: newDevour
//         };

//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: newDevourState
//         }).then(
//             function () {
//                 console.log("changed devour to", newDevour);
//                 location.reload();
//             }
//         );
//     });

//     $("#submit").on("click", function (event) {
//         event.preventDefault();

//         var newBurger = {
//             name: $("#ca").val().trim(),
//             devoured: !$("input[type=radio]")[0].hasAttribute("checked")
//         };

//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(
//             function (burgers) {
//                 console.log("created new burger");
//                 console.log(burgers);
//                 // location.reload();
//             }
//         );
//     });
// });
// Import the ORM to create functions that will interact with the database.
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");

        var newEatState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed to", newEatState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});