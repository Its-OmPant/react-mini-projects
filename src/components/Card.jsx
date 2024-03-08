import { FaAngleRight } from "react-icons/fa6";

import { NavLink } from "react-router-dom";

function Card({ projectName, path }) {
	return (
		<div
			id="card"
			className="w-1/4 bg-purple-200 p-2 flex items-center flex-col rounded-lg shadow-md">
			<div
				id="img"
				className="h-48 w-[95%] bg-yellow-200 rounded-md mt-4 "></div>
			<div className="w-full my-2 py-2 px-4 flex gap-4 justify-between items-center">
				<h3 className="text-xl  font-medium ">{projectName}</h3>

				<NavLink to={path} className="bg-purple-900 p-2 rounded-full">
					<FaAngleRight color="white" />
				</NavLink>
			</div>
		</div>
	);
}

export default Card;
