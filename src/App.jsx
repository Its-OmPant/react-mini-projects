import BgChangerApp from "./components/BgChanger/BgChangerApp";
import Counter from "./components/Counter/Counter";
import PasswordGenerator from "./components/passwordGenerator/PasswordGenerator";

function App() {
	return (
		<div>
			<h1 className="my-4 text-center text-2xl font-mono uppercase font-bold">
				Counter App
			</h1>
			<div className="min-h-screen bg-pink-100 py-20 overflow">
				<Counter />
			</div>

			<h1 className="my-4 text-center text-2xl font-mono uppercase font-bold">
				background Changer
			</h1>
			<div className="h-screen bg-pink-100">
				<BgChangerApp />
			</div>

			<h1 className="my-4 text-center text-2xl font-mono uppercase font-bold">
				Password Generator App
			</h1>
			<div className="h-screen bg-pink-100">
				<PasswordGenerator />
			</div>
		</div>
	);
}

export default App;
