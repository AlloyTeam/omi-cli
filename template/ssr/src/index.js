import './style';
import AppStore from './store/app-store'
import { Component, render } from 'omi';

import Header from './components/header';
//import Home from './components/home';
import Home from 'async!./components/home';

class App extends Component {

	install(){
		this.$store.mixData(this.$store.ssrData)
	}

	showHomeHandler = e => {
		this.showHome = true
		this.update()
	};

	render(props) {
		return (
			<div id="app">
				<button  onClick={this.showHomeHandler}>Click Me to load the Home component async!</button>
				<Header />
				{
					this.showHome && <Home />
				}
			</div>
		);
	}
}

const app = new App()
const store = new AppStore({}, {
	onRename: () => {
		app.update()
	}
})


render(app, 'body', {
	store,
	merge:'#app'
})

export { app }