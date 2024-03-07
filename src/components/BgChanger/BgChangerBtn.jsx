function BgChangerBtn({ color, onClickHandler }) {
	return (
		<button
			onClick={() => onClickHandler(color)}
			style={{ backgroundColor: color }}
			className={`p-4 rounded-3xl m-2 text-white capitalize`}></button>
	);
}

export default BgChangerBtn;
