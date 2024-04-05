import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BgChangerApp from "./components/BgChanger/BgChangerApp.jsx";
import Counter from "./components/Counter/Counter.jsx";
import PasswordGenerator from "./components/passwordGenerator/PasswordGenerator.jsx";
import ProjectContainer from "./components/ProjectContainer.jsx";

import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements,
} from "react-router-dom";

import "./index.css";

const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<ProjectContainer></ProjectContainer>} />
			<Route path="counter_app" element={<Counter />} />
			<Route path="bg_changer_app" element={<BgChangerApp />} />
			<Route path="password_generator_app" element={<PasswordGenerator />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
