import React from "react";
import { useState } from "react";
import { Cycles } from "./cycles";

const Home = () => {
	const [selectColor, setSelectColor] = useState("red");
	const [isCycling, setIsCycling] = useState(false);
	const [colors, setColors] = useState(["red", "yellow", "green"]);

	const addPurple = () => {
		if (!colors.includes("purple")) {
			setColors([...colors, "purple"]);
		}
	}
	const reset = () => {
		return window.location.reload();
	}

	return (
		<div className="contenedor">
			<div className="caja">
				<div
					onClick={() => { setSelectColor("red") }}
					className={"luz rojo " + (selectColor === "red" ? "red" : "")}></div>
				<div
					onClick={() => { setSelectColor("yellow") }}
					className={"luz amarillo " + (selectColor === "yellow" ? "yellow" : "")}></div>
				<div
					onClick={() => { setSelectColor("green") }}
					className={"luz verde " + (selectColor === "green" ? "green" : "")}></div>
				{colors.includes("purple") && (
					<div
						onClick={() => { setSelectColor("purple") }}
						className={"luz violeta " + (selectColor === "purple" ? "purple" : "")}></div>
				)}
			</div>
			<button
				onClick={() => setIsCycling(!isCycling)}
				className="cyclesBtn btn btn-success" type="button">
				Start/Stop Cycle
			</button>
			<button onClick={addPurple}
				className="newLightBtn btn " type="button">New Light</button>
				<button onClick={reset} className="m-auto mt-3 btn btn-warning" type="reset">Reset</button>
			{isCycling && <Cycles setSelectColor={setSelectColor} colors={colors} />}
		</div>
	);
}

export default Home;
