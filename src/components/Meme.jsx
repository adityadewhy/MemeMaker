import React from "react";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		memeImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemes, setAllMemes] = React.useState([]);

	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
	}, []);

	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomNumber].url;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				memeImage: url,
			};
		});
	}

	function handleChange(event) {
		const {name, value} = event.target;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				[name]: value,
			};
		});
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Enter top text"
					className="top-text form-input"
					onChange={handleChange}
					name="topText"
					value={meme.topText}
				/>

				<input
					type="text"
					placeholder="Enter bottom text"
					className="bottom-text form-input"
					onChange={handleChange}
					name="bottomText"
					value={meme.bottomText}
				/>

				<button className="form-btn" onClick={getMemeImage}>
					Get random meme
				</button>
			</div>

			<div className="meme">
				<img src={meme.memeImage} className="meme-img" />
				<h2 className="img-top">{meme.topText}</h2>
				<h2 className="img-bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
