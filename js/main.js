function display() {
  let httpUrl = new XMLHttpRequest();
  httpUrl.open("GET", "https://reqres.in/api/users?page=2");
  httpUrl.send();
  let emailData = [];

  httpUrl.addEventListener("readystatechange", function () {
    if (httpUrl.readyState == 4 && httpUrl.status == 200) {
      container = "";

      emailData = JSON.parse(httpUrl.response).data;
      console.log(emailData);
      for (let i = 0; i < JSON.parse(httpUrl.response).per_page; i++) {
        container += ` <tr>
      <th scope="row">${i + 1}</th>
      <td><img src="${emailData[i].avatar}" alt=""></td>
      <td>${emailData[i].first_name} ${emailData[i].last_name}</td>
      <td><a href = "mailto:${emailData[i].email}">${emailData[i].email}</a></td>
    </tr>`;
        console.log(container);
      }
      document.getElementById("data").innerHTML = container;
    }
  });
}
display();
