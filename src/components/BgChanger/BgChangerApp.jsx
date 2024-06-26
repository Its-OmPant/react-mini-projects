import { useState } from "react";
import BgChangerBtn from "./BgChangerBtn";
function BgChangerApp() {
	const [bgColor, setBgColor] = useState("black");

	let color = "blue";

	return (
		<div
			className="w-full h-[100vh] relative"
			style={{ backgroundColor: bgColor }}>
			<h1 className=" text-2xl mx-4 py-6 text-black md:text-4xl lg:text-7xl text-center tracking-widest font-outline-2 ">
				Background Color Changer
			</h1>
			<div
				className="bg-slate-300 flex flex-wrap justify-center p-2 
       absolute bottom-12 left-1/2 -translate-x-1/2 rounded-3xl">
				<BgChangerBtn color="hotpink" onClickHandler={setBgColor} />
				<BgChangerBtn color="blue" onClickHandler={setBgColor} />
				<BgChangerBtn color="red" onClickHandler={setBgColor} />
				<BgChangerBtn color="green" onClickHandler={setBgColor} />
				<BgChangerBtn color="yellow" onClickHandler={setBgColor} />
				<BgChangerBtn color="purple" onClickHandler={setBgColor} />
				<BgChangerBtn color="maroon" onClickHandler={setBgColor} />
				<BgChangerBtn color="silver" onClickHandler={setBgColor} />
				<BgChangerBtn color="black" onClickHandler={setBgColor} />
			</div>
		</div>
	);
}

export default BgChangerApp;
