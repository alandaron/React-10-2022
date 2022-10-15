function Avaleht() {
	return (
		<div>
			<div className="heading">Loon Sinu jaoks toimiva veebirakenduse.</div>
			<hr />
			<div className="profile">
				<img src="/me.png" width={200} height={200} alt="Aron Aland" />
				<div className="profile-info">
					<div>Aron Aland</div>
					<div>Front-end arendaja</div>
					<span className="profile-contact">
						<a href="mailto:aron@aland.ee">
							<img src="/mail_outline.svg" alt="Mail" />
							<span>aron@aland.ee</span>
						</a>
					</span>
					<span className="profile-contact">
						<a href="tel:+37256111692">
							<img src="/call.svg" alt="Mail" />
							<span>+372 5611 1692</span>
						</a>
					</span>
					<span className="profile-contact">
						<a href="https://www.linkedin.com/in/aron-aland">
							<img src="/linkedin.svg" alt="Mail" />
							<span>LinkedIn</span>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Avaleht;
