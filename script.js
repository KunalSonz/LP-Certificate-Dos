const searchForm = document.querySelector('.form');
const container = document.querySelector('.movieDisca');

const renderMovie = async (mName) => {
  let uri = 'https://www.omdbapi.com/?apikey=cf60bf6d&t=';

  if(mName){
    uri += mName;
  }

  const res = await fetch(uri);
  const movies = await res.json();
  
  console.log(res.url);
  console.log(movies);

  let template = `
  <div class="movieDiscb">
  <p>Title : </p><p>${movies.Title}</p>
  </div>
  <div class="movieDiscb">
    <p>Year : </p><p>${movies.Year}</p>
  </div>
  <div class="movieDiscb">
    <p>Director : </p><p>${movies.Director}</p>
  </div>
  <div class="movieDiscb">
    <p>imdbRating :</p><p>${movies.imdbRating}</p>
  </div>
  `
  container.innerHTML = template;
}


searchForm.addEventListener('submit' , (e) => {
  e.preventDefault();
  mName = searchForm.term.value.trim();
  //console.log(mName);
  renderMovie(mName);

})


window.addEventListener('DOMContentLoaded', () => {
  renderMovie();

});