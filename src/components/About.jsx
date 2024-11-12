import { forwardRef } from 'react';
import './About.css';

const About = forwardRef(function About(props, ref) {
	return (
		<section ref={ref} className="section about" id="about">
			<div className="content">
				<h2>About</h2>
			</div>
		</section>
	);
});

// About.displayName = 'About';

export default About;
