import React, { useState } from "react";
import Project from "./Project";
function ProjectContainer() {
	return (
		<div className="bg-black/95 w-full h-screen text-white flex flex-col items-center py-4">
			<h1 className="text-2xl tracking-wider drop-shadow-[0px_2px_10px_var(--tw-shadow-color)]  shadow-blue-700">
				React Mini Projects
			</h1>
			<div id="projects" className="w-[90%] sm:w-3/5 lg:w-1/3 my-4">
				<Project name="Project 1: Counter App 💣" url="counter_app" />
				<Project name="Project 2: BG Changer App 🔥" url="bg_changer_app" />
				<Project
					name="Project 3: Password Generator App 💻"
					url="password_generator_app"
				/>
			</div>
			<div>made with 💖 by Om Pant</div>
		</div>
	);
}

export default ProjectContainer;
