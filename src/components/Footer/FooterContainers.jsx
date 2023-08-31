/* eslint-disable react/prop-types */

const FooterContainers = ({ children }) => {
	return (
		<div className="flex item-center justify-center w-full sm:basis-1/2 flex-col sm:flex-col md:flex-col lg:flex-row">
			{children}
		</div>
	);
};

export default FooterContainers;
