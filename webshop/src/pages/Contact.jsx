import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

function Contact() {
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const sendEmail = () => {
		const params = {
			from_name: nameRef.current.value,
			reply_to: emailRef.current.value,
			message: messageRef.current.value,
		};

		emailjs
			.send("service_ta6m2jm", "template_mux3ouj", params, "UlgAUKrcUibqNfAnn")
			.then(
				() => {
					toast.success("Sõnum edukalt saadetud!", {
						position: "bottom-right",
						theme: "light",
					});
					nameRef.current.value = "";
					emailRef.current.value = "";
					messageRef.current.value = "";
				},
				(error) => {
					toast.error(error.text, {
						position: "bottom-right",
						theme: "light",
					});
				}
			);
	};

	return (
		<div>
			<ToastContainer />
			<label>Nimi</label>
			<br />
			<input type="text" ref={nameRef} />
			<br />
			<label>Email</label>
			<br />
			<input type="email" ref={emailRef} />
			<br />
			<label>Sõnum</label>
			<br />
			<textarea ref={messageRef} />
			<br />
			<button onClick={sendEmail}>Saada e-mail</button>
		</div>
	);
}

export default Contact;
