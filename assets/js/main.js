$('#searchForm').on('submit', (e) => {
	let searchText = $('#searchText').val();
	getMovies(searchText);
	e.preventDefault();
});

function getMovies(searchText){
	$.ajax({
	  type: 'POST',
	  dataType: 'json',
	  url: 'https://www.omdbapi.com/?s=' + searchText + '&apikey=d9ce5696',
	  success: function(data) {
	  	console.log(data)
	  	let movies = data.Search;
	  	let output = '';
	  	$.each(movies, (index, movie) => {
	  		output += `
	  		<div class="col-md-4 movie-col">
	  		 	<div class="text-center">
		  		 	<img class="img-responsive" src="${movie.Poster}">
			  		 	<div class="movie-title">
			  		 		<h2>${movie.Title}</h2>
			  		 		<p>(${movie.Year})</p>
			  		 	</div>
		  		 	<a class="imdb" href="https://www.imdb.com/title/${movie.imdbID}" target="_blank"></a>
		  		 	<a href="https://www.google.com/search?q=${movie.Title}&source=lnms&tbm=vid" target="_blank" class="btn" href="#">Search on Google</a>
	  		 	</div>
	  		</div>
	  		`;
	  	});

	  	$('.movies').html(output);
	  }
	});
}

