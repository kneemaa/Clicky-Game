import React from "react";
import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import "./reset.css"
import characters from "./cards.json"


const App = () => <div>
					<Navbar/>
					<Cards characters={characters} />
				</div>;

export default App;
