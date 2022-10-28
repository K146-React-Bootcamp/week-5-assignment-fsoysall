import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { title: "App title", show: true, color: 0xaaaaaa }
		console.log("App.cTor");
	}

	shouldComponentUpdate() { return true }

	static getDerivedStateFromProps(props) { console.log("APP:: get:DSFP", props); return "APP:: get:DSFP" /* {} */ }

	componentDidMount() { console.log("<APP> render edildi -  comp:Mounted "); this.setState({ title: this.title + " : 2" }) }

	// ChangeColor() { this.setState({ color: "blue" }) }
	ChangeColor = () => { this.setState({ color: this.state.color + 0x303030, show: !this.state.show }); console.log(this.state.color); }

	render() {
		console.log("APP:Render");
		return (
			<>
				<div style={{ backgroundColor: "#" + this.state.color.toString() }}>
					<h1>Hello React</h1>
					<br /><br /><button onClick={this.ChangeColor}>RENGİ DEĞİŞ</button><br /><br />
					{this.state.show && (<Link title="..." href="http://google.com?q=selam" show={this.state.show} />)}
				</div>
			</>
		)
	}
}



class Link extends React.Component {
	constructor(props) {
		super(props)
		this.state = { title: "Reacting Hah Ha", color: "Red", show: this.props.show }
		console.log("	Link: ctor: ok", this.state.title);
	}


	static getDerivedStateFromProps(props) { console.log("	Link: get:DSFP", props);		/* return { title: props.title } */ 		return {} }

	componentDidMount() { console.log("	<Link> render edildi - comp.DidMount "); this.setState({ title: this.state.title + " : 2" }) }

	sayHello = () => { alert("hellouwww") }
	ClickHandler = () => { alert("edit clicked ") }

	ChangeColor = () => { this.setState({ color: "Blue", show: !this.state.show }); }


	render() {
		console.log("	Link : Render", this.state);
		return (
			<>
				<div style={{ backgroundColor: this.state.color, color: "white" }} > renk: {this.state.color}</div>
				<a href={this.props.href} target="_blank" rel="noreferrer" ><span style={{ fontSize: "18pt" }}>Title Props:</span> {this.props.title}</a><br />
				<a href={this.props.href} target="_blank" rel="noreferrer" ><span style={{ fontSize: "18pt" }}>Title State:</span>  {this.state.title}</a>

				<Info onClick={this.ClickHandler} /><br /><br />
				<button onClick={this.sayHello}>SAY HELLOUW</button>

				<br /><br /><button onClick={this.ChangeColor}>RENGİ DEĞİŞ</button>
			</>
		)
	}

	shouldComponentUpdate() { return !false }
	getSnapshotBeforeUpdate(pProps, pStates) { console.log(pProps, pStates); return {} }
	componentDidUpdate() { console.log("	<Link>: c:DU"); return null; }

	componentWillUnmount() { console.log("	<Link>: bai bai"); alert("<Link> Bai Bai"); }


}



const Info = (what) => {
	return (
		<>
			<p> for edit <code> finger App.js </code> </p>
			<button onClick={what.onClick}>Edit</button>
		</>
	)
}

export default App 
