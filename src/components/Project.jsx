import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function Project({ name, desc, url, repolink }) {
	const [isOpen, setIsOpen] = useState(false);
	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	const togglePanel = (e) => {
		if (isOpen) {
			e.target.nextElementSibling.classList.add("hidden");
			setIsOpen(false);
		} else {
			e.target.nextElementSibling.classList.remove("hidden");
			setIsOpen(true);
		}
	};
	return (
		<div
			onClick={togglePanel}
			className={` rounded-md ${
				isOpen ? "bg-teal-100 " : "bg-slate-100 "
			} text-black my-3`}>
			<div className="flex justify-between px-4 py-2">
				{name}
				<button className="text-2xl font-bolder"> {isOpen ? "-" : "+"}</button>
			</div>
			<div
				onClick={stopPropagation}
				className="px-4 pb-2 border-black rounded-md text-black hidden">
				<div className="w-full h-[1px] bg-gray-800 mb-2"></div>
				<span className="font-semibold text-red-800">
					Project Description :
				</span>{" "}
				{desc}
				<div className="my-3">
					<NavLink
						to={url}
						className="bg-blue-800 text-sm text-white p-2 rounded-md mr-4 ml-0">
						View Live
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Project;
