import CounterApp from "./components/Counter";
function App() {
	return (
		<div>
			<h1 className="my-4 text-center text-2xl font-mono uppercase font-bold">
				Counter App
			</h1>
			<div className="h-screen bg-pink-100 py-20">
				<CounterApp />
			</div>
		</div>
	);
}

export default App;
