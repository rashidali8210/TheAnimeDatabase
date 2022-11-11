import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


function App() {
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v4/anime`)
			.then(res => res.json());

		SetTopAnime(temp.data);
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		SetTopAnime(temp.data);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);
	
	return (
		<div className="App">
		
			<img src={process.env.PUBLIC_URL + "/images/images.png"} style={{position:"fixed", width:"100px"}}/>
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={topAnime} />
			</div>
		</div>
	);
}

export default App;
