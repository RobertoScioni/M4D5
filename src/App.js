import React from "react"
import "./App.css"
import WarningSign from "./components/WarningSign"

class App extends React.Component {
	render = () => {
		return (
			<div className="App">
				<WarningSign text="Error"> </WarningSign>
			</div>
		)
	}
}

export default App
