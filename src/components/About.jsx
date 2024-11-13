import { forwardRef } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = forwardRef(function About(props, ref) {
	return (
		<section ref={ref} className="section about" id="about">
			<div className="content">
				<h2>About</h2>
				{/* <Link
					to={'/Branka Rausevic - Resume.pdf'}
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</Link> */}
				<div className="about-content">
					<p>
						👋 <strong>Hi there!</strong>
					</p>
					<p>
						My career journey has been a colorful one, filled with learning and
						growth.
					</p>

					<div className="about-step">
						<p>
							<strong>Started as a Certified Public Accountant</strong>
						</p>
						<p>
							I realized this field wasn't my passion. The grey areas and
							predictable yearly work didn’t excite me. So, I made the bold
							decision to resign and pursue my interest in Mathematics.
						</p>
					</div>

					<div className="about-step">
						<p>
							<strong>Discovered Programming</strong>
						</p>
						<p>
							During my studies, I encountered MATLAB and was amazed at its
							capabilities. This ignited my curiosity about programming.
						</p>
					</div>

					<div className="about-step">
						<p>
							<strong>Jumped into Automation</strong>
						</p>
						<p>
							A chance encounter with a former colleague led me to a role as an
							Automation Support Lead in a Robotic Process Automation team using
							UiPath.
						</p>
						<p>
							Through determination, I transitioned into an Automation Developer
							role, where I took on projects, resolved issues, and developed
							automation solutions.
						</p>
					</div>

					<div className="about-step">
						<p>
							<strong>Upskilled in Frontend Development</strong>
						</p>
						<p>
							Despite the challenges in my automation role, I was eager to grow.
							I took a career break to upskill in JavaScript, HTML, CSS, and
							React. Upon returning, I joined a frontend team, although the work
							involved maintaining legacy projects with limited opportunities
							for learning.
						</p>
					</div>

					<div className="about-step">
						<p>
							<strong>Pivoting to Grow</strong>
						</p>
						<p>
							Realizing I needed more to achieve my goals, I decided to resign
							and focus on personal projects and further upskilling. This
							decision was difficult, but I am driven by my passion for
							technology and my ability to adapt and persevere.
						</p>
					</div>

					<div className="about-closing">
						<p>
							I thrive in this field because of my detail-oriented mindset.
							Debugging issues, learning new concepts, and tackling challenges
							head-on is where I excel.
						</p>
						<p>
							I'm now looking for the right opportunity to gain the foundational
							knowledge and experience needed to turn my passion for technology
							into a long-term, fulfilling career.
						</p>
						<p className="closing-thank-you">
							Thank you for taking the time to learn about my journey. I’m
							excited about what’s ahead!
						</p>
					</div>
				</div>
			</div>
			{/* <div className="skills">
				<div>HTML</div>
				<div>CSS</div>
				<div>JavaScript</div>
				<div>React</div>
				<div>GIT</div>
			</div> */}
			{/* <button>PROJECTS</button> */}
		</section>
	);
});

// About.displayName = 'About';

export default About;
