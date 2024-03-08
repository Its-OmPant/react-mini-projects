import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="w-screen min-h-screen overflow-hidden">
			<Outlet />
		</div>
	);
}

export default App;
