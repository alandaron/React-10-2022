import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../config/api";
function PaymentCompleted() {
	const [message, setMessage] = useState("");
	const [searchParams] = useSearchParams();
	const paymentReference = searchParams.get("payment_reference");
	// const orderReference = searchParams.get("order_reference");

	useEffect(() => {
		fetch(
			"https://igw-demo.every-pay.com/api/v4/payments/" +
				paymentReference +
				"?api_username=92ddcfab96e34a5f",
			{
				headers: {
					Authorization:
						"Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
				},
			}
		)
			.then((res) => res.json())
			.then((json) => {
				if (json.payment_state === "settled") {
					console.log(json);

					const data = {
						payment_method: json.payment_method,
						status: "processing",
						set_paid: true,
					};

					api
						.put("orders/" + json.order_reference, data)
						.then((response) => {
							setMessage("Makse sooritatud!");
						})
						.catch((error) => {
							console.log(error.response);
						});
				} else if (json.payment_state === "failed") {
					const data = {
						payment_method: json.payment_method,
						status: "failed",
						set_paid: false,
					};

					api
						.put("orders/" + json.order_reference, data)
						.then((response) => {
							setMessage("Makse ebaõnnestus!");
						})
						.catch((error) => {
							console.log(error.response);
						});
				} else {
					setMessage("Makse ebaõnnestus, juhtus ootamatu viga!");
				}
			});
	}, [paymentReference]);
	return <div>{message !== "" && <div>{message}</div>}</div>;
}

export default PaymentCompleted;
