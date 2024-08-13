import React, { useEffect, useState } from "react";
import "./styles/app.css";
import { Navbar } from "./components/Navbar/Navbar";
// import { Counter } from "./components/Counter/Counter";
import { Article } from "./components/Article/Article";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function App() {
	const [news, setNews] = useState({ results: [] });

	useEffect(() => {
		async function loadNews() {
			const response = await axios.get(
				"https://api.spaceflightnewsapi.net/v4/articles"
			);
			const newsData = response.data;

			console.log(newsData);
			setNews(newsData);
		}

		loadNews();
	}, []);

	return (
		<>
			<Navbar />

			<section id="articles">
				{news.length === 0 ? (
					<div
						style={{
							height: "25rem",
							width: "100%s",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<h1>Loading...</h1>
						<ThreeDots
							height="80"
							width="80"
							radius="9"
							color="white"
							ariaLabel="loading"
							wrapperStyle
							wrapperClass
						/>
					</div>
				) : (
					news.results.map((article) => (
						<Article
							title={article.title}
							provider={article.news_site}
							description={article.summary}
							thumbnail={article.image_url}
							sourceLink={article.url}
							key={article.id}
						/>
					))
				)}
			</section>
			{/* <Counter /> */}
		</>
	);
}
