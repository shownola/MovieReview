const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey:  '67fad89f',
      s: searchTerm
    }
  });

  if (response.data.Error){
    return [];
  };
  return response.data.Search;
};

createAutoComplete({
  root: document.querySelector('.autocomplete')
});
createAutoComplete({
  root: document.querySelector('.autocomplete-two')
});
createAutoComplete({
  root: document.querySelector('.autocomplete-three')
});

const onMovieSelect = async movie => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey:  '67fad89f',
      i: movie.imdbID
    }
  });
  console.log(response.data);
  document.querySelector('#summary').innerHTML = movieTemplate(response.data);
};

const movieTemplate = (movieDetail) => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" alt="poster" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre} - ${movieDetail.Year}</h4>
          <h5>${movieDetail.Actors}</h5>
          <p>${movieDetail.imdbRating} /  ${movieDetail.Awards}</p>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary">
      <p class="">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
      <p class="">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article class="notification is-primary">
      <p class="">${movieDetail.imbdRating}</p>
      <p class="subtitle">Rating</p>
    </article>
    <article class="notification is-primary">
      <p class="">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
      <p class="">${movieDetail.imdbVotes}</p>
      <p class="subtitle">Votes</p>
    </article>

  `
}
