
var topics = ["Michael Scott", "Dwight Schrute", "Stanley Hudson", "Jim Halpern", "Pam Beesly", "Kevin Malone", "Toby Flenderson", "Andy Bernard", "Angela Martin", "Creed Bratton", "Meredith Palmer"];

$("#submit").on("click", function(event) {
  event.preventDefault();
    var gif = $("#addGif").val().trim();
      topics.push(gif);
        createButtons();
});

function createButtons() {
  $("#gifButtons").empty();

  for (var i = 0; i < topics.length; i++) {
    var b = $("<button type='button' class='btn btn-dark'>");
      b.addClass("gif");
        b.attr("data-name", topics[i]);
          b.text(topics[i]);
            $("#gifButtons").append(b);
  }
}

createButtons();

$(".gif").on("click", function(event) {
  event.preventDefault();
    //QueryURL for Giphy API
    var gifs = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=ub8pfRFK7FEpqEb9MOgQhO8hJmCmqlUz";

    $("#gifDisplay").empty();

      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='imgDiv'>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var gifImage = $("<img data-state='still' data-still data-animate class='img'>");
          gifImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.append(p);
          gifDiv.append(gifImage);
          $("#gifDisplay").prepend(gifDiv);
        }
        
      });
});

$(".img").on("click", function() {
  var state = $(this).attr("data-state");
  
  alert("click");
  
  if (state === "still") {
    $(this).attr("src", $(results[i].images.fixed_height.url).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(results[i].images.fixed_height.url).attr("data-still"));
    $(this).attr("data-state", "still");
  }

});