import React from "react";
import Card from "./Card";
function ProjectContainer() {
	return (
		<>
			<div className="w-full min-h-screen text-center">
				<h1 className="m-4 text-4xl font-black font-mono text-teal-800">
					React Mini Projects
				</h1>
				<div
					id="projectContainer"
					className=" p-4 w-4/5 m-auto my-6 flex justify-around">
					<Card projectName="Counter App" path="counter_app" />
					<Card projectName="Bg Changer App" path="bg_changer_app" />
					<Card
						projectName="Password Generator App"
						path="password_generator_app"
					/>
				</div>
			</div>
		</>
	);
}

export default ProjectContainer;
