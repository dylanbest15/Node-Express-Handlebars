// document ready
$(function () {

  // create burger click event
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      burger_name: $("burger-name").val().trim()
    }

    // create burger post request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      location.reload();
    })
  })

  // devour burger click event
  $(".change-devoured").on("click", function (event) {
    const id = $(this).data("id");
    const newDevoured = $(this).data("newdevoured");
    const newDevouredState = {
      devoured: newDevoured
    }

    // update burger put request
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevouredState
    }).then(function () {
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
      location.reload();
    })
  })
})