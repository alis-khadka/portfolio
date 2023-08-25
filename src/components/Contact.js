import './Contact.scss';
import { useState } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitLabel, setSubmitLabel] = useState('Send Message');

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};


	const sendEmail = (e) => {
		e.preventDefault();
		setSubmitLabel('Sending...');
	
		emailjs.send(
			'service_pqb0xs3',
			'template_12fz985',
			{
				name,
				email,
				message
			},
			'4Ylf1L_L6bL4hiDXc'
			).then((result) => {
				setSubmitLabel('Message Sent');
				console.log(result.text);
			}, (error) => {
				setSubmitLabel('Message Failed');
				console.log(error.text);
			});
	  };

	return (
		<section id='contact-content' className='scroll-item p-5 get-in-touch'>
			<h2 className='section-heading'>
				<span className='hover-underline-animation'>
					Let's talk
				</span>
			</h2>

			<p className='mt-5 contact-text'>To request a quote or want to talk over a coffee, contact me directly or fill out the form and I will get back to you soon.</p>

			<form className='contact-form row' onSubmit={sendEmail}>
				<div className='form-field col-lg-6'>
					<input id='name' className={name ? 'input-text not-empty' : 'input-text'} type='text' value={name} onChange={handleNameChange} required />
					<label className='label' htmlFor='name'>Name</label>
				</div>
				<div className='form-field col-lg-6'>
					<input id='email' className={email ? 'input-text not-empty' : 'input-text'} type='email' value={email} onChange={handleEmailChange} required />
					<label className='label' htmlFor='email'>E-mail</label>
				</div>
				<div className='form-field col-lg-12'>
					<textarea id='message' className={message ? 'input-text not-empty' : 'input-text'} type='text' value={message} onChange={handleMessageChange} required />
					<label className='label' htmlFor='message'>Message</label>
				</div>
				<div className='form-field col-lg-12'>
					<input className='submit-btn px-5 text-uppercase' type='submit' value={submitLabel} />
				</div>
			</form>
		</section>
	);
}

export default Contact;
