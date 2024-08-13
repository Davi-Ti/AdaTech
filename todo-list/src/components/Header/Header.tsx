import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/statsCard";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
	const { tasks } = useContext(TasksContext);
	const totalTasks = tasks.length;
	const totalPeddingTasks = tasks.reduce((total, task) => {
		if (!task.done) return total + 1;
		return total;
	}, 0);
	const totalDone = totalTasks - totalPeddingTasks;

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div>
					<h1>MyTodo</h1>
					<span>Bem-Vindo, Davi!</span>
				</div>

				<div>
					<StatsCard title="Tarefas Concluidas" value={totalTasks} />
					<StatsCard title="Tarefas Pendentes" value={totalPeddingTasks} />
					<StatsCard title="Tarefas Total" value={totalDone} />
				</div>
			</div>
		</header>
	);
};
