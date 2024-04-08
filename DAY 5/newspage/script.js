function callAPI() {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=8a28078505b14beba1722cf0cd87d2bb"
  )
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      renderUI(data);
    });
}

//callAPI();

function renderUI(data) {
  const articles = data.articles;
  const ar = articles[0];
  const root = document.getElementById("root");

  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const img=document.createElement("img");
  const p=document.createElement("p");
  img.src=ar.urlToImage;

  h3.innerText = ar.title;
  p.innerText=ar.content;


  div.appendChild(h3);
  div.appendChild(img);
  div.appendChild(p);
  root.appendChild(div);
}

callAPI();
