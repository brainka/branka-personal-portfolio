import './Projects.css';
import { forwardRef } from 'react';

const Projects = forwardRef(function Projects(props, ref) {
	return (
		<section className="section projects" id="projects" ref={ref}>
			<div className="content">
				<h2>Projects</h2>
				<div className="project-wrapper">
					<div className="project">
						{/* <div className="image-wrapper">SOME IMAGE</div> */}
						<div className="project-data">
							<h3 className="title">Personal Trainer Website Prototype</h3>
							<div className="short-description">
								<p>
									I developed a <strong>static prototype website</strong> for my
									personal trainer to help promote his services. He initially
									struggled with Squarespace, so I offered to create a simple,
									custom web page for him.
								</p>
								<p>
									The project focuses on applying fundamental skills, using
									<strong> React </strong>
									for the structure, <strong> pure CSS </strong> for styling,
									and hosting the site on
									<strong> Netlify</strong>.
								</p>
								<p>
									Currently, the website is in its early stages, with minimal
									functionality as we finalize the format and content. Once
									approved, I plan to add more features and interactivity.
								</p>
								<p className="note">
									This project has been a rewarding challenge, allowing me to
									practice my skills while supporting someone else’s goals.
								</p>
							</div>

							<a
								href="https://v-app-brainka.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Live Link
							</a>
						</div>
					</div>
					<div className="project">
						{/* <div className="image-wrapper">SOME IMAGE</div> */}
						<div className="project-data">
							<h3 className="title">Crossfit Companion</h3>
							<div className="short-description">
								<p>
									I’m building a personal dashboard app to enhance my home
									workouts by displaying CrossFit-style "Workouts of the Day"
									(WODs) that I can complete in my gym.
								</p>
								<p>
									Currently, I’m focused on developing the backend, using
									<strong> MongoDB </strong>to store workout data. I’m
									leveraging an <strong>external API</strong> to capture and
									save the workout data into the database.
								</p>
								<p>
									{' '}
									The next phase involves creating a frontend with{' '}
									<strong> React </strong> and designing{' '}
									<strong> custom APIs </strong> to fetch and display the
									workouts on a user-friendly dashboard. Planned features
									include:
								</p>
								<p>
									- Tracking progress for each workout.<br></br>- Generating a
									random workout of the day from the stored data.
								</p>
								<p>
									This project combines my passion for fitness with my interest
									in software development, offering both a functional and
									personal challenge.
								</p>
							</div>
							<div className="links">
								<a
									href="https://github.com/brainka/concept-wods"
									target="_blank"
									rel="noopener noreferrer"
									className="link"
								>
									WODCAT workout - View on Github
								</a>
								<a
									href="https://github.com/brainka/wodcat-workouts"
									target="_blank"
									rel="noopener noreferrer"
									className="link"
								>
									Concept workout - View on Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

export default Projects;
