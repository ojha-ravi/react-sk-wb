import * as React from "react";
import * as ReactDOM from "react-dom";
import { HOC } from "./hoc"

const App = () => {
	return <div>
		<Button>Button</Button>
		<hr />
		<LabelHOC>Label</LabelHOC>
	</div>;
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>);
class Label extends React.Component {
	componentWillMount() {
		console.log("Label Will Mount");
	}
	render() {
		return <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>;
	}
}

const LabelHOC = HOC(Label);

ReactDOM.render(<App />, document.querySelector(".container"));
