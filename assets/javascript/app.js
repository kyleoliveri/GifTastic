//QueryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=ub8pfRFK7FEpqEb9MOgQhO8hJmCmqlUz";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });