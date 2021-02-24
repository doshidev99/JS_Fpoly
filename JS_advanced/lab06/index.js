const datas = require("./data.json");

const target = document.getElementById("target");

let elHtml = datas.map((data) => {
  let result = "";
	result = `
		<td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.image}</td>
    <td>${data.cate_id}</td>
    <td>${data.price}</td>
	`;
  return result;
});


target.innerHtml = elHtml;
