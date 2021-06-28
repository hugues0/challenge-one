async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    let temp = "";
    data.forEach((u) => {
        temp += "<tr>";
        temp += "<td>"+u.name+"</td>";
        temp += "<td>" +u.email + "</td>";
        temp += "<td>" + "<button>Get posts</button>" + "</td></tr>";
    });

    document.getElementById("table-body").innerHTML = temp;
}

getData();