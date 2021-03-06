// document ready
$(function () {

  // create burger click event
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#burger-name").val().trim()
    }

    // create burger post request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("Created new burger!");
      location.reload();
    })
  })

  // devour burger click event
  $(".change-devoured").on("click", function (event) {
    const id = $(this).data("id");
    const newDevoured = parseInt($(this).data("devoured"), 10) === 1 ? 0 : 1;
    const newDevouredState = {
      devoured: newDevoured
    }
    console.log(newDevouredState);

    // update burger put request
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevouredState
    }).then(function () {
      console.log("Updated burger!");
      location.reload();
    })
  })

  // delete burger click event
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    // delete burger delete request
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(function() {
      console.log("Deleted burger!");
      location.reload();
    })
  })
})