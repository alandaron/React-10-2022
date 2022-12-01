import { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import AuthContext from "../store/AuthContext";

function Login() {
	const { t } = useTranslation();

	const authContext = useContext(AuthContext);
	const emailRef = useRef();
	const passwordRef = useRef();
	const url =
		"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBosNQM-ilUoq1fTJuZPo9CliGMnZlaQZg";
	const [message, setMessage] = useState("");

	const login = () => {
		const user = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
			returnSecureToken: true,
		};

		fetch(url, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.idToken !== undefined) {
					authContext.login(json.idToken);
				} else if (json.error !== undefined) {
					setMessage(json.error.message);
				}
			});
	};

	return (
		<div>
			{message !== "" && <div>{t("firebase." + message)}</div>}
			<label>E-post</label> <br />
			<input ref={emailRef} type="text" /> <br />
			<label>Parool</label> <br />
			<input ref={passwordRef} type="password" /> <br />
			<button onClick={login}>Logi sisse</button>
		</div>
	);
}

export default Login;
