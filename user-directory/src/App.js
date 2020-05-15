import React, { Component } from 'react';
import './reset.css';
import './App.css';
import data from './assets/data/data';
import Header from './components/Header';
import Card from './components/Card';
import Navbar from './components/Navbar';
import NewCard from './components/NewCard';
import EditCard from './components/EditCard';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			cardNum: 1,
			data: data.slice(0),
			totalCards: data.length,
			addFormVis: 'hide',
			editFormVis: 'hide'
		};
		this.getData = this.getData.bind(this);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.del = this.del.bind(this);
		this.add = this.add.bind(this);
		this.addFormToggle = this.addFormToggle.bind(this);
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
	del() {
		let { data, cardNum, totalCards } = this.state;
		data.splice(cardNum - 1, 1);
		if (cardNum === totalCards) this.setState({ cardNum: --cardNum });
		this.setState({
			totalCards: --totalCards
		});
	}
	add(person) {
		let { data, totalCards } = this.state;
		this.setState({
			data: [...data, person],
			totalCards: ++totalCards,
			cardNum: totalCards
		});
  }
  editFormToggle() {
    let { editFormVis } = this.state
    if ( editFormVis === 'show' ) {
      this.setState({editFormVis: 'hide'})
    } else {
      this.
    }
  }
	addFormToggle() {
		let { addFormVis } = this.state;
		if (addFormVis === 'show') {
			this.setState({ addFormVis: 'hide' });
		} else {
			this.setState({ addFormVis: 'show' });
		}
	}
	render() {
		return (
			<div className='App flex col center mid rel'>
				<NewCard
					add={this.add}
					totalCards={this.state.totalCards}
					vis={this.state.addFormVis}
					toggleVis={this.addFormToggle}
				/>
				<Header />
				<Card
					getData={this.getData}
					cardNum={this.state.cardNum}
					total={this.state.totalCards}
				/>
				<EditCard
					getData={this.getData}
					cardNum={this.state.cardNum}
          total={ this.state.totalCards }
          vis={this.state.editFormVis}
				/>
				<Navbar
					next={this.next}
					prev={this.prev}
					del={this.del}
					addFormToggle={this.addFormToggle}
				/>
			</div>
		);
	}
}
