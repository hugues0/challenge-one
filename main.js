async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    let temp = "";
    
    data.forEach((data) => {
        temp += "<tr>";
        temp += "<td>" + data.id + "</td>";
        temp += "<td>"+data.name+"</td>";
        temp += "<td>" +data.email + "</td>";
        temp += "<td>" + "<button class= 'btn-get-posts' onclick='getPosts("+data.id+")'>Get posts</button>" + "</td></tr>";
    });

    document.getElementById("table-body").innerHTML = temp;

}

getData();

async function getPosts(id) {
  
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const data = await response.json();
  console.log(data);
  let temp = "";

  data.forEach((data) => {
      temp += "<li>" +"<h1>"+ data.title +"</h1>"+ "</li>";
      temp += "<li>" + "<h2>" + data.body + "</h2>" + "</li>" + "<br>"; 
  });
    
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("back").style.visibility = "visible";
    document.getElementById("target").style.visibility = "visible";
    document.getElementById("target").innerHTML = temp;

}


