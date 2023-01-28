import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<Nav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections Just A Bit Longer</NavLink>
					<NavButton>
						<Icon id="shopping-bag" color="var(--color-gray-900)" />
					</NavButton>
					<NavButton>
						<Icon id="search" color="var(--color-gray-900)" />
					</NavButton>
					<NavButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu" color="var(--color-gray-900)" />
					</NavButton>
				</Nav>
				<Side />
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: center;
	padding: 18px 32px;
	padding-right: 0;
	height: 72px;
	border-bottom: 1px solid var(--color-gray-300);
	overflow: auto hidden;

	@media ${QUERIES.tabletAndDown} {
		padding: 18px 16px;
	}
`;

const Nav = styled.nav`
	display: flex;
	gap: 48px;
	gap: 5rem;
	gap: clamp(1rem, 14vw - 7.25rem, 5rem);
	margin-left: 48px;

	@media ${QUERIES.tabletAndDown} {
		gap: 20px;
		margin: unset;
		flex: 1 1 100%;
		justify-content: flex-end;
	}
`;

const Side = styled.div`
	flex: 1;
	flex-shrink: 999;
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};
	white-space: nowrap;

	&:first-of-type {
		color: var(--color-secondary);
	}

	@media ${QUERIES.tabletAndDown} {
		display: none;
	}
`;

const NavButton = styled.button`
	display: none;
	border: 0;
	background-color: transparent;
	padding: 0;

	@media ${QUERIES.tabletAndDown} {
		display: block;
	}
`;

export default Header;
