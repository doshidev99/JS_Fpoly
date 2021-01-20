const el_category = document.getElementById("category");

const getApi = (url) => {
  const response = fetch(url);
  return response;
};

getApi("http://localhost:3000/categories")
  .then((response) => response.json()) // convert to json
  .then((result) => console.log(result)) //print data to console
  .catch((err) => console.log("Request Failed", err));
