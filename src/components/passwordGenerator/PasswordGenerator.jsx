import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa6";

function PasswordGenerator() {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState(8);
	const [useUppercase, setUseUppercase] = useState(false);
	const [useNumber, setUseNumber] = useState(false);
	const [useSpecialChars, setUseSpecialChars] = useState(false);

	const passwordRef = useRef(null);

	const generatePassword = () => {
		let password = "";
		let str = "abcdefghijklmnopqrstuvwxyz";

		if (useNumber) str += "0123456789";

		if (useUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		if (useSpecialChars) str += "~!@#$%^&*(){}[]+=/";

		for (let i = 1; i <= length; i++) {
			let index = Math.floor(Math.random() * str.length);

			password += str.charAt(index);
		}
		console.log(password);
		setPassword(password);
	};

	const onGenerate = () => {
		generatePassword();
	};

	const copyPassword = () => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 30);

		navigator.clipboard.writeText(password);
	};

	return (
		<div className="w-screen min-h-screen bg-slate-200">
			<nav className="bg-gray-900 text-white p-4 text-2xl text-center">
				<h1>Password Generator</h1>
			</nav>

			<div className="bg-white w-1/3  mx-auto my-6 rounded-lg overflow-hidden flex justify-center shadow-md">
				<input
					className="outline-none w-[90%] px-4 py-3 text-lg font-semibold tracking-wide text-slate-800 selection:bg-teal-300 "
					type="text"
					placeholder="Click Generate to generate Password"
					value={password}
					ref={passwordRef}
					readOnly
				/>
				<button
					onClick={copyPassword}
					className="bg-gray-700 text-white w-[10%]">
					<FaCopy className="mx-auto" />
				</button>
			</div>

			<div className="bg-white w-1/3  mx-auto my-6 rounded-lg overflow-hidden shadow-md">
				<div className=" w-full my-2 px-6 py-2 text-center">
					<h3>Password Length: {length}</h3>
					<input
						className="w-4/5 h-4	"
						type="range"
						min={8}
						max={30}
						value={length}
						onChange={(e) => setLength(e.target.value)}
						id="range"
					/>
				</div>

				<div className=" w-full my-2 px-6 py-2 text-center flex justify-between ">
					<h3 className="text-lg px-4">Use Numbers</h3>
					<input
						className="w-6"
						type="checkbox"
						defaultChecked={useNumber}
						onChange={() => {
							setUseNumber((prev) => !prev);
						}}
					/>
				</div>
				<div className=" w-full my-2 px-6 py-2 text-center flex justify-between ">
					<h3 className="text-lg px-4">Use UpperCase Characters</h3>
					<input
						className="w-6"
						type="checkbox"
						defaultChecked={useUppercase}
						onChange={() => {
							setUseUppercase((prev) => !prev);
						}}
					/>
				</div>
				<div className=" w-full my-2 px-6 py-2 text-center flex justify-between ">
					<h3 className="text-lg px-4">Use Special Characters</h3>
					<input
						className="w-6"
						type="checkbox"
						defaultChecked={useSpecialChars}
						onChange={() => {
							setUseSpecialChars((prev) => !prev);
						}}
					/>
				</div>
				<div className=" w-full text-center">
					<button
						onClick={onGenerate}
						className="bg-gray-700 px-4 py-2 text-lg text-white w-full">
						Generate
					</button>
				</div>
			</div>
		</div>
	);
}

export default PasswordGenerator;
