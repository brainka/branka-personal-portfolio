import './Navigation.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

const Navigation = () => {
	const navigationMenuItems = ['About', 'Projects', 'Contact'];
	const [activeMenu, setActiveMenu] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const nav = document.querySelector('.nav');
			if (window.scrollY > 20) {
				nav.classList.add('visible');
				nav.setAttribute('aria-hidden', false);
			} else {
				nav.classList.remove('visible');
				nav.setAttribute('aria-hidden', true);
				setActiveMenu('');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleSelection(e) {
		console.log(e.currentTarget.innerText);
		setActiveMenu(e.currentTarget.innerText);
	}

	return (
		<nav className="nav">
			<Link smooth to="#hero" className="logo">
				bRANKA
			</Link>
			<ul role="menubar">
				{navigationMenuItems.map((menuItem) => {
					return (
						<li key={menuItem} role="none">
							<Link
								smooth
								to={`#${menuItem.toLowerCase()}`}
								role="menuitem"
								onClick={handleSelection}
								className={menuItem === activeMenu ? 'active' : ''}
							>
								{menuItem}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
