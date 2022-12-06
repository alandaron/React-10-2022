import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

function SendEmail(props) {
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const sendEmail = () => {
		console.log(props.sum);
		const products =
			"<ol>" +
			props.cart
				.map(
					(element) =>
						`<li><img width="100" src="${element.product.images[0]?.src}" /> ${element.product.name}</li>`
				)
				.join("<br />") +
			"</ol>";

		const params = {
			from_name: nameRef.current.value,
			client_email: emailRef.current.value,
			message: messageRef.current.value,
			products_html: products,
			cart_sum: props.sum,
		};

		emailjs
			.send("service_ta6m2jm", "template_6lyipoh", params, "UlgAUKrcUibqNfAnn")
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
		<>
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
			<button onClick={sendEmail}>Esita tellimus</button>
		</>
	);
}

export default SendEmail;
