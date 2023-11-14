API_LINK = "http://127.0.0.1:8000/drinks/1/";

function drinksAPI(API_LINK) {
  fetch(API_LINK)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

drinksAPI(API_LINK);
