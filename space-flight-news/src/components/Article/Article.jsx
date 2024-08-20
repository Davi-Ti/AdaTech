import React from "react";

import "./styles.css";

export function Article({
	title,
	provider,
	description,
	thumbnail,
	sourceLink,
}) {
	return (
		<article id="article">
			<a href={sourceLink} target="_blank" rel="noopener noreferrer">
				<img src={thumbnail} alt={title} href={sourceLink} />
				<div className="article-infos">
					<h2 href={sourceLink}>{title}</h2>
					<h3>{provider}</h3>

					<p>{description}</p>
				</div>
			</a>
		</article>
	);
}
