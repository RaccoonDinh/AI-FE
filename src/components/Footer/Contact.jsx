
const Contact = () => {
	return (
		<div className="md:w-1/2 lg:1/4 my-2">
			<h1 className="my-4 font-bold">Liên Hệ</h1>
			<ul>
				<li className="my-4 underline duration-700 underline-offset-4 hover:underline-offset-8 hover:decoration-blue-400">
					<a
						href="https://goo.gl/maps/HuYXZEugnwkHgVMt8"
						title="Tìm VNS qua Google Map"
						rel="noreferrer"
						target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="inline-flex mr-4 w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
						TP Hồ Chí Minh - Việt Nam
					</a>
				</li>
				<li className="my-4 underline duration-700 underline-offset-4 hover:underline-offset-8 hover:decoration-blue-400">
					<a
						href="mailto:info@vietnamstartup.io"
						title="Send email to VNS through info@vietnamstartup.io">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="inline-flex mr-4 w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
							/>
						</svg>
						info@vietnamstartup.io
					</a>
				</li>
				<li className="my-4 underline duration-700 underline-offset-4 hover:underline-offset-8 hover:decoration-blue-400">
					<a href="tel:0961967543" title="Gọi VNS qua 0961 967 543">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="inline-flex mr-4 w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
							/>
						</svg>
						0961 967 543
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Contact;
