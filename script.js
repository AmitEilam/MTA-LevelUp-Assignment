const input = document.querySelector(".user-input");
const btn = document.querySelector(".btn");
const url = `https://www.googleapis.com/books/v1/volumes?q=`;
const txt = document.querySelector(".text");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const user_input = input.value;
  if (input.value.length < 3) {
    alert("error!");
    return 0;
  }
  const search = `${url}${user_input}`;

  fetch(search)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      var bookNameArr = [];
      var bookInfoArr = [];
      for (let i = 0; i < json.items.length; i++) {
        console.log(json.items[i].volumeInfo.title);
        bookNameArr[i] = json.items[i].volumeInfo.title;
        bookInfoArr[i] = json.items[i].volumeInfo.infoLink;
      }

      txt.classList.remove("hidden");
      txt.innerHTML = `
      <p><br>${bookNameArr[0]}</p>
      <a href="${bookInfoArr[0]}">Link <br></a>
      <p><br>${bookNameArr[1]}</p>
      <a href="${bookInfoArr[1]}">Link <br></a>
      <p><br>${bookNameArr[2]}</p>
      <a href="${bookInfoArr[2]}">Link <br></a>
      <p><br>${bookNameArr[3]}</p>
      <a href="${bookInfoArr[3]}">Link <br></a>
      <p><br>${bookNameArr[4]}</p>
      <a href="${bookInfoArr[4]}">Link <br></a>
      <p><br>${bookNameArr[5]}</p>
      <a href="${bookInfoArr[5]}">Link <br></a>
      <p><br>${bookNameArr[6]}</p>
      <a href="${bookInfoArr[6]}">Link <br></a>
      <p><br>${bookNameArr[7]}</p>
      <a href="${bookInfoArr[7]}">Link <br></a>
      <p><br>${bookNameArr[8]}</p>
      <a href="${bookInfoArr[8]}">Link <br></a>
      <p><br>${bookNameArr[9]}</p>
      <a href="${bookInfoArr[9]}">Link <br></a>
      `;
    });
});
