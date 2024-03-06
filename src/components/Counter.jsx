import { useState } from "react";
function CounterApp() {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};
	const decrement = () => {
		if (counter >= 1) {
			setCounter(counter - 1);
		} else {
			alert("Reached Minimum Value Cannot decrement further");
		}
	};
	const reset = () => {
		setCounter(0);
	};

	return (
		<div className="bg-teal-200 w-[80%] m-auto p-8 py-16 rounded-2xl text-center shadow-md sm:w-1/2  md:w-1/3 ">
			<h3 className="text-xl my-2">Counter App</h3>
			<h1 className="text-3xl my-6 text-teal-950 font-bold sm:text-4xl lg:text-5xl">
				Counter : {counter}
			</h1>
			<div className="">
				<button
					className="bg-teal-700 text-white rounded-xl p-2 m-2 w-32 text-lg"
					onClick={decrement}>
					Decrement
				</button>
				<button
					className="bg-teal-700 text-white rounded-xl p-2 m-2 w-32 text-lg"
					onClick={reset}>
					Reset
				</button>
				<button
					className="bg-teal-700 text-white rounded-xl p-2 m-2 w-32 text-lg"
					onClick={increment}>
					Increment
				</button>
			</div>
		</div>
	);
}

export default CounterApp;
