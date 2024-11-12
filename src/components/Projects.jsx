import './Projects.css';
import { forwardRef } from 'react';

const Projects = forwardRef(function Projects(props, ref) {
	return (
		<section className="section projects" id="projects" ref={ref}>
			<div className="content">
				<h2>Projects</h2>
				<div className="project-wrapper">
					<div className="project">
						<div className="image-wrapper"></div>
						<div className="project-data">
							<h3 className="title">Pupeteer scraper</h3>
							<div className="short-description"></div>
							<div className="button-wrapper"></div>
						</div>
					</div>
					<div className="project">
						{' '}
						<div className="image-wrapper"></div>
						<div className="project-data">
							<h3 className="title">QR code thingie</h3>
							<div className="short-description"></div>
							<div className="button-wrapper"></div>
						</div>
					</div>
					<div className="project"></div>
				</div>
			</div>
		</section>
	);
});

export default Projects;
