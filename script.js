document.getElementById("numberSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("numberInput").value;
  if (value === "")
    return;
    console.log(value);

    var myurl = "https://cors-anywhere.herokuapp.com";
    const url =  (myurl + "/dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=" + value);
    fetch(url, {mode: 'cors'})
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let facts = "";
        facts += "<h2>" + "Check out these "+ json.length + " doggy facts -" + "</h2> <ul>";
          for (let i=0; i < json.length; i++) {
              facts += "<li> <p>" + json[i].fact + "</p></li>";
              //forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'

}

document.getElementById("factResults").innerHTML = facts;

      });
});
