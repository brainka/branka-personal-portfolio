import './Contact.css';
import { forwardRef, useState, useRef, useEffect } from 'react';

const Contact = forwardRef(function Contact(props, ref) {
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [textArea, setTextArea] = useState('');

	function handleNameInput(e) {
		console.log(e.target.value);
		setName(e.target.value);
	}

	function handleEmailInput(e) {
		console.log(e.target.value);
		setEmail(e.target.value);
	}

	function handleTextareaInput(e) {
		console.log(e.target.value);
		setTextArea(e.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className="section contact" id="contact" ref={ref}>
			<h2>Send me a message</h2>
			<form id="contact-form" onSubmit={handleFormSubmit}>
				<div className="form-group top">
					<div className="form-group">
						<input
							type="text"
							id="name"
							name="name"
							onChange={handleNameInput}
							value={name}
							ref={nameRef}
						/>
						<label htmlFor="name" className={name ? 'valid' : ''}>
							Name
						</label>
					</div>
					<div className="form-group">
						<input
							type="text"
							id="email"
							name="email"
							onChange={handleEmailInput}
							ref={emailRef}
						/>
						<label htmlFor="email" className={email ? 'valid' : ''}>
							Email
						</label>
					</div>
				</div>
				<div className="form-group">
					<textarea
						type="text"
						id="message"
						name="message"
						onChange={handleTextareaInput}
						ref={messageRef}
						maxLength={190}
					/>
					<label htmlFor="message" className={textArea ? 'valid' : ''}>
						Message
					</label>
				</div>
				<div className="submit-button-wrapper">
					<button className="cta-button ">Send Message</button>
				</div>
			</form>
		</section>
	);
});

export default Contact;
