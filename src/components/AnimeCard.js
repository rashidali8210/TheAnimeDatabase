import React, { useState, useEffect } from 'react';

 
function AnimeCard({anime}) {

	const [state,setState]=useState([]);
	const [state2,setState2]=useState([]);
	const shoot=(a,b)=>{
		setState(a);
		setState2(b);
		// alert( {b} );	
		alert ("added in watchlist " + b + "and their image " + a + "!") 
		
	}

	useEffect(() => {
		localStorage.setItem('state', JSON.stringify(state));
	  }, [state]);
	  useEffect(() => {
		localStorage.setItem('state2', JSON.stringify(state2));
	  }, [state2]);
	

	return (
<>
		<article className="anime-card" >
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.images.jpg.image_url} 
						alt="Anime Image" />
				</figure>
				<h3>{ anime.title }</h3>
			</a>
			
			<button onClick={() => shoot(anime.images.jpg.image_url,anime.title)}>Add to watchlist</button>
		</article>
		</>
	)
}

export default AnimeCard
