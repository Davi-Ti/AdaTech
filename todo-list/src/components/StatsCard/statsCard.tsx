import styles from "./styles.module.scss";

interface statsCardProps {
	title: string;
	value: number;
}

export const StatsCard: React.FC<statsCardProps> = ({ title, value }) => {
	return (
		<article className={styles.stats_card}>
			<h2>{title}</h2>
			<span>{value}</span>
		</article>
	);
};
