const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJhZDVlNDUwY2JlNjAwMTU1ZTE2ZjYiLCJpYXQiOjE2NzYyNzc4MTMsImV4cCI6MTY3NzQ4NzQxM30.IDC4zX667jBnuQaeKb2l3bfZNdZY01wkbuhr7kP-PJc"
  }
};

async function loadHorror() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/horror",
    options
  );
  const horrorMovies = await response.json();
  console.log(horrorMovies);

  const containerRow = document.querySelector(
    "body > div.container-fluid > div:nth-child(2) > div > div > div.carousel-item.active > div > div"
  );
  //   const containerRow2 = document.querySelector("#horrormovie2");
  horrorMovies.forEach((movie) => {
    const poster = document.createElement("div");
    poster.className = "col-md-2";
    poster.innerHTML = `<img class="movie-cover" src=${movie.imageUrl}>`;
    containerRow.appendChild(poster);
    // containerRow2.appendChild(poster);
  });
}
window.onload = () => {
  loadHorror();
};
/* <div class="col-md-2">
<img class="movie-cover" src="./assets/media/media0.jpg">
</div> */

async function loadComedy() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/comedy",
    options
  );
  const comedyMovies = await response.json();
  console.log(comedyMovies);

  const containerRow = document.querySelector(
    "body > div.container-fluid > div:nth-child(3) > div > div > div.carousel-item.active > div > div"
  );
  //   const containerRow2 = document.querySelector("#horrormovie2");
  comedyMovies.forEach((movie) => {
    const poster = document.createElement("div");
    poster.className = "col-md-2";
    poster.innerHTML = `<img class="movie-cover" src=${movie.imageUrl}>`;
    containerRow.appendChild(poster);
    // containerRow2.appendChild(poster);
  });
}
