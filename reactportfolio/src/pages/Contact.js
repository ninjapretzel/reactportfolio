import React from "react";

class Contact extends React.Component {
	constructor (props) {
		super (props)
	}
	render(){
		return <div>
			<h2>Contact</h2>
			<h4>Cell: 720-318-1553</h4>
			<h4>Email: <a href="mailto:BrandonGart@gmail.com">BrandonGart@gmail.com</a></h4>
			<h4>LinkedIn: <a href = "https://www.linkedin.com/in/brandon-gart-78252436/">https://www.linkedin.com/in/brandon-gart-78252436/</a></h4>
		</div>
	}
}

export default Contact