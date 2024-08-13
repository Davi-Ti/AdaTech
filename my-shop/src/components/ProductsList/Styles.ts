import styled from "styled-components";

export const Container = styled.main`
	max-width: 1240px;
	height: 100%;
	margin: 4rem auto;
	padding: 0 2rem;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: stretch;
	gap: 2rem;

	& > article {
		flex: 1 300px;
	}
`;
