import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
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
					<NavLink href="/collections">Collections</NavLink>
					<NavButton>
						<Icon id="shopping-bag" color={COLORS.gray[900]} />
					</NavButton>
					<NavButton>
						<Icon id="search" color={COLORS.gray[900]} />
					</NavButton>
					<NavButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu" color={COLORS.gray[900]} />
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
	height: 72px;
	border-bottom: 1px solid ${COLORS.gray[300]};

	@media ${QUERIES.phoneAndDown} {
		padding: 18px 16px;
	}
`;

const Nav = styled.nav`
	display: flex;
	gap: 48px;
	margin: 0px 48px;

	@media ${QUERIES.phoneAndDown} {
		gap: 20px;
		margin: unset;
		flex: 1 1 100%;
		justify-content: flex-end;
	}
`;

const Side = styled.div`
	flex: 1;
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: ${COLORS.gray[900]};
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: ${COLORS.secondary};
	}

	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`;

const NavButton = styled.button`
	display: none;
	border: 0;
	background-color: transparent;
	padding: 0;

	@media ${QUERIES.phoneAndDown} {
		display: block;
	}
`;

export default Header;
