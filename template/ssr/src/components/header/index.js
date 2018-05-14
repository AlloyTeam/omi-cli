import { Component } from 'omi';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>{this.$store.name}</h1>
			</header>
		);
	}
}
