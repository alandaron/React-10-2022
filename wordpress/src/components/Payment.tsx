import React from "react";
import api from "../config/api";

function Payment(props: {sum: number}) {
	const order = () => {
		const data = {
			line_items: JSON.parse(sessionStorage.getItem("cart") || "[]"),
		};

		api
			.post("orders", data)
			.then((response) => {
				pay(response);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const pay = (orderId) => {
		const paymentData = {
			api_username: "92ddcfab96e34a5f",
			account_name: "EUR3D1",
			amount: props.sum,
			order_reference: orderId,
			nonce: "a9b7f7e" + Math.random() * 9999 + new Date(),
			timestamp: new Date(),
			customer_url: "http://react-aron-db.web.app/cart",
		};

		const headersData = {
			Authorization:
				"Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
			"Content-Type": "application/json",
		};

		fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff", {
			method: "POST",
			body: JSON.stringify(paymentData),
			headers: headersData,
		})
			.then((res) => res.json())
			.then((json) => (window.location.href = json.payment_link));
	};

	return (
		<>
			<label>Name:</label>
			<input type="text" />
			<br />
			<br />
			<button onClick={order}>Maksma</button>
		</>
	);
}

export default Payment;
