import { useCallback, useMemo, useState } from "react";
import styles from "./styles.module.scss";

interface MemoizationProps {
	financialData: {
		incomes: number[];
		outcomes: number[];
	};
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
	const [showValues, setShowValues] = useState(true);

	const totalIncomes = useMemo(() => {
		return financialData.incomes.reduce((total, income) => {
			console.log("Calculando o total de receitas");
			return (total += income);
		}, 0);
	}, [financialData.incomes]);

	const totalOutcomes = useMemo(() => {
		return financialData.outcomes.reduce((total, outcome) => {
			console.log("Calculando o total de despesas");
			return (total += outcome);
		}, 0);
	}, [financialData.outcomes]);

	const aplicarDesconto = useCallback(
		(desconto: number) => {
			return totalOutcomes * (1 - desconto);
		},
		[totalOutcomes]
	);

	aplicarDesconto(0.1);

	return (
		<div className={styles.container}>
			<h1>Memoization</h1>
			<h2>useMemo</h2>

			<p>{`Total de Receitas: ${showValues ? totalIncomes : "---"}`}</p>
			<br />
			<p>{`Total de Despesas: ${showValues ? totalOutcomes : "---"}`}</p>
			<br />
			<br />
			<button onClick={() => setShowValues(!showValues)}>
				{showValues ? "Ocultar Valores" : "Mostrar Valores"}
			</button>
		</div>
	);
};
