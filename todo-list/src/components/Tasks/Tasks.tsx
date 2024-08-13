import React, { FormEvent, useContext } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
	const [taskTitle, setTaskTitle] = React.useState("Tarefa");
	const { tasks, setTasks } = useContext(TasksContext);

	function handleSubmitAddTask(event: FormEvent) {
		event.preventDefault();

		if (taskTitle.length < 3) {
			alert("A tarefa deve conter pelo menos 3 caracteres");
			return;
		}
		const newTasks = [
			...tasks,
			{ id: new Date().getTime(), title: taskTitle, done: false },
		];
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));

		setTaskTitle("");
	}

	function handleToggleTaskStatus(taskId: number) {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, done: !task.done };
			}

			return task;
		});

		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	function handleRemoveTask(taskId: number) {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	return (
		<section className={styles.container}>
			<form onSubmit={handleSubmitAddTask}>
				<div>
					<label htmlFor="task-title">Adicionar Tarefa</label>
					<input
						value={taskTitle}
						onChange={(event) => setTaskTitle(event.target.value)}
						type="text"
						id="task-title"
						placeholder="Titulo da Tarefa"
					/>
				</div>

				<button type="submit">Adicionar</button>
			</form>

			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							<input
								type="checkbox"
								id={`task-${task.id}`}
								onChange={() => handleToggleTaskStatus(task.id)}
								checked={task.done}
							/>
							<label
								className={task.done ? styles.done : ""}
								htmlFor={`task-${task.id}`}
							>
								{task.title}
							</label>

							<button onClick={() => handleRemoveTask(task.id)}>
								Remover
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
