import './Hero.css';
// import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useRef } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Hero = () => {
	// useEffect(() => {
	// 	const sections = document.querySelectorAll('section');
	// 	const navLinks = document.querySelectorAll('nav ul li a');

	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				if (entry.isIntersecting) {
	// 					navLinks.forEach((link) => {
	// 						link.classList.remove('active');
	// 						if (link.getAttribute('href').substring(2) === entry.target.id) {
	// 							link.classList.add('active');
	// 						}
	// 					});
	// 				}
	// 			});
	// 		},
	// 		{ threshold: 0.7 }
	// 	);

	// 	sections.forEach((section) => {
	// 		observer.observe(section);
	// 	});

	// 	return () => {
	// 		sections.forEach((section) => {
	// 			observer.unobserve(section);
	// 		});
	// 	};
	// }, []);

	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	useEffect(() => {
		const sections = [
			homeRef.current,
			aboutRef.current,
			projectsRef.current,
			contactRef.current,
		];

		const navLinks = document.querySelectorAll('nav ul li a');

		console.log(navLinks.forEach((link) => console.log(link)));
		console.log(aboutRef);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log(entry.target.id);
						console.log(entry.target);

						let currentSectionIntersection = entry.target.id;

						navLinks.forEach((link) => {
							link.classList.remove('active');

							if (
								link.getAttribute('href') === `/#${currentSectionIntersection}`
							) {
								link.classList.add('active');
							}
						});
					}
				});
			},
			{ threshold: 0.75 }
		);

		sections.forEach((section) => {
			if (section) {
				observer.observe(section);
			}
		});

		return () => {
			sections.forEach((section) => {
				if (section) {
					observer.unobserve(section);
				}
			});
		};
	});

	return (
		<div className="home-container">
			<div className="hero" id="hero" ref={homeRef}>
				<h1 className="title">
					Hey, I'm <span>Branka</span>
				</h1>
				<div className="subtitle">
					Front-end dev, a <span>year</span> in the game, and{' '}
					<span>hungry</span> to go
					<span> full-stack</span>. Leveling up from junior level!
				</div>
				<div className="about-me button-wrapper">
					<button className="cta-button">About me</button>
				</div>
			</div>

			<About ref={aboutRef} />
			<Projects ref={projectsRef} />

			<Contact ref={contactRef} />
		</div>
	);
};

export default Hero;
