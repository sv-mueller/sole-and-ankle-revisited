/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent, Dialog } from "@reach/dialog";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<Overlay>
			<Content isOpen={isOpen} onDismiss={onDismiss}>
				<DismissButton onClick={onDismiss}>
					<VisuallyHidden>Dismiss menu</VisuallyHidden>
					<Icon id="close"></Icon>
				</DismissButton>
				<Nav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</Nav>
				<Footer>
					<FooterLink href="/terms">Terms and Conditions</FooterLink>
					<FooterLink href="/privacy">Privacy Policy</FooterLink>
					<FooterLink href="/contact">Contact Us</FooterLink>
				</Footer>
			</Content>
		</Overlay>
	);
};

const Overlay = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: hsl(0deg 0% 0% / 0.5);
	display: flex;
	justify-content: flex-end;
	align-items: stretch;
`;

const Content = styled(DialogContent)`
	position: relative;
	background: var(--color-white);
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 32px;
`;

const DismissButton = styled.button`
	color: var(--color-gray-900);
	border: unset;
	background-color: transparent;
	align-self: flex-end;
	margin-inline-end: -16px;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const NavLink = styled.a`
	font-size: calc(18 / 16 * 1rem);
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: var(--weight-medium);

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

const FooterLink = styled.a`
	font-size: calc(14 / 16 * 1rem);
	text-decoration: none;
	color: var(--color-gray-700);
	font-weight: var(--weight-normal);
`;

export default MobileMenu;
