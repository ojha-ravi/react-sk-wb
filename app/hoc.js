import * as React from "react";

export const HOC = (InnerComponent) => class extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}
	update() {
		this.setState({
			count: this.state.count + 1
		});
	}
	componentWillMount() {
		console.log("Will Mount");
	}
	
	render() {
		return <InnerComponent
			{...this.props}
			{...this.state}
			update={this.update.bind(this)}
		/>;
	}
}
