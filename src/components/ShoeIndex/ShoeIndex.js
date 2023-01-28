import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS, QUERIES } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
	return (
		<Wrapper>
			<MainColumn>
				<Header>
					<Title>Running</Title>
					<SortSelect
						label="Sort"
						value={sortId}
						onChange={(ev) => setSortId(ev.target.value)}
					>
						<option value="newest">Newest Releases</option>
						<option value="price">Price</option>
					</SortSelect>
				</Header>
				<Spacer size={32} />
				<ShoeGrid />
			</MainColumn>
			<LeftColumn>
				<Breadcrumbs>
					<Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
				</Breadcrumbs>
				<Spacer size={42} className="only-tablet-and-down" />
				<ShoeSidebar />
			</LeftColumn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: baseline;
	gap: 32px;
	@media ${QUERIES.tabletAndDown} {
		flex-wrap: wrap-reverse;
		justify-content: flex-end;
		gap: 0;
	}
`;

const LeftColumn = styled.div`
	flex-basis: 248px;
`;

const MainColumn = styled.div`
	flex: 1 0 ${BREAKPOINTS.laptopMin};
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: var(--weight-medium);
`;

const SortSelect = styled(Select)`
	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`;

export default ShoeIndex;
