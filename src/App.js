import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"

class App extends React.Component {
	render = () => {
		return (
			<div className="App">
				<WarningSign text="Error"> </WarningSign>
        <MyBadge text="idk" color="primary"></MyBadge>
			</div>
		)
	}
}

export default App
