import React, { Component } from 'react';
import './reset.css';
import './App.css';
import data from './assets/data/data';
import Header from './components/Header';
import Card from './components/Card';
import Navbar from './components/Navbar';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			cardNum: 1,
			data: data.slice(0),
			totalCards: data.length
		};
		this.getData = this.getData.bind(this);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.del = this.del.bind(this);
	}
	getData(id) {
		return this.state.data[id];
	}
	next() {
		let { cardNum, totalCards } = this.state;
		if (cardNum === totalCards) {
			this.setState({ cardNum: 1 });
		} else {
			this.setState({ cardNum: ++cardNum });
		}
	}
	prev() {
		let { cardNum, totalCards } = this.state;
		if (cardNum === 1) {
			this.setState({ cardNum: totalCards });
		} else {
			this.setState({ cardNum: --cardNum });
		}
  }
  componentDidUpdate() {
    
  }
	del() {
		let { data, cardNum } = this.state;
		data.splice(cardNum, 1);
	}
	render() {
		return (
			<div className='App flex col center mid'>
				<Header />
				<Card
					getData={this.getData}
					cardNum={this.state.cardNum}
					total={this.state.totalCards}
				/>
				<Navbar next={this.next} prev={this.prev} del={this.del} />
			</div>
		);
	}
}
