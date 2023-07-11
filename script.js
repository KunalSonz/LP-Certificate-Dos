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

  window.lpTag = window.lpTag || {};
  lpTag._tagCounters = lpTag._tagCounters || {};
  lpTag._tagCounters['SITE_ID'] = lpTag._tagCounters['SITE_ID'] || {};
  lpTag._tagCounters['SITE_ID'].tagletCounter = lpTag._tagCounters['SITE_ID'].tagletCounter || 1;

  lpTag.agentSDKAsyncInit = function () {
    lpTag.agentSDK.command('sendMessage', { 
    kind: 'line',
    convId: 'd1094c5b-4a54-476e-98e1-30a9262a8006',
    content: 'Hello, this is a test message!' });
  };

  // (function () {
  //   var s = document.createElement('script');
  //   s.type = 'text/javascript';
  //   s.async = true;
  //   s.src = 'https://YOUR_DOMAIN.lpsnmedia.net/adapter/adapter.js';
  //   var x = document.getElementsByTagName('script')[0];
  //   x.parentNode.insertBefore(s, x);
  // })();
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