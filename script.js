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

  var notifyWhenDone = function(err) {
      if (err) {
          // Do something with the error
          console.log(err + "Some Error");
      }
      // called when the command is completed successfully,
      // or when the action terminated with an error.
  };

  var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
  var data = {text: "Some text"};

  lpTag.agentSDK.init({notificationCallback: notifyWhenDone});

  lpTag.agentSDK.command(cmdName, data, notifyWhenDone); 
}

// const lpAgentWidget = () => {
//   {
//       var notifyWhenDone = function(err) {
//           if (err) {
//               // Do something with the error
//               console.log(err + "Some Error");
//           }
//           // called when the command is completed successfully,
//           // or when the action terminated with an error.
//       };

//       var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
//       var data = {text: "Some text"};

//       lpTag.agentSDK.command(cmdName, data, notifyWhenDone); 
//   }
// };

searchForm.addEventListener('submit' , (e) => {
  e.preventDefault();
  mName = searchForm.term.value.trim();
  //console.log(mName);
  renderMovie(mName);

})


window.addEventListener('DOMContentLoaded', () => {
  renderMovie();

});