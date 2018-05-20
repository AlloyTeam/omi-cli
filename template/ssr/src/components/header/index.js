import { Component } from 'omi';
//scoped css：this path is beging with '_'
//typeof style is string
import style from './_index';


export default class Header extends Component {
	staticStyle() {
		return style
	}

	style() {
		return `h1{
                    cursor:pointer;
                    color: ${Math.random() > 0.5 ? 'red' : 'white'};
                }`
	}

	render() {
		return (
			<header>
				<h1>{this.$store.name}</h1>
			</header>
		);
	}
}
