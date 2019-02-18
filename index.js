$(document).ready(function () {


  $.get("http://localhost:3000/projects", function (data) {
    console.log(data);
    var li = "";

    data.forEach(function (elem, index) {
      li += `
      <li style="border-top: 1px solid black;border-bottom: 1px solid black;">
        <p>ID : ${elem.id}</p>
        <p>Name : ${elem.name}</p>
        <p>Date : ${elem.date}</p>
        <p>Image : <img src="${elem.image}" /></p>
      </li>`
    });
    
    $('ul').html(li);
  })


});