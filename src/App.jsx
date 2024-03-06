import BgChangerApp from "./components/BgChangerApp";
import CounterApp from "./components/CounterApp";
function App() {
	return (
		<div>
			<h1 className="my-4 text-center text-2xl font-mono uppercase font-bold">
				Counter App
			</h1>
			<div className="min-h-screen bg-pink-100 py-20 overflow">
				<CounterApp />
			</div>

			<h1 className="my-4 text-center text-2xl font-mono uppercase font-bold">
				background Changer
			</h1>
			<div className="h-screen bg-pink-100">
				<BgChangerApp />
			</div>
		</div>
	);
}

export default App;
