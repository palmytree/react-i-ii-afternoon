import React, { Component } from 'react';

export default class NewCard extends Component {
	constructor() {
		super();
		this.state = {
			first: '',
			last: '',
			city: '',
			country: '',
			employer: '',
			title: '',
            favMov1: '',
            favMov2: '',
            favMov3: ''
		};
		this.change = this.change.bind(this);
		this.submit = this.submit.bind(this);
        this.reset = this.reset.bind( this );
	}
	change(event) {
		let val = event.target.value;
		let name = event.target.name;
		this.setState({ [name]: val });
    }
	reset() {
		this.setState({
			first: '',
			last: '',
			city: '',
			country: '',
			employer: '',
			title: '',
            favMov1: '',
            favMov2: '',
            favMov3: ''
		});
		this.props.toggleVis();
	}
	submit(e) {
        e.preventDefault();
        console.log(this.state)
		const {
			first,
			last,
			city,
			country,
			employer,
			title,
            favMov1,
            favMov2,
            favMov3
		} = this.state;
		const output = {
			id: this.props.totalCards + 1,
			name: {
				first,
				last
			},
			city,
			country,
			employer,
			title,
			favoriteMovies: [favMov1, favMov2, favMov3]
		};
		this.props.add(output);
		this.reset();
	}
	render() {
		let {
			first,
			last,
			city,
			country,
			employer,
			title,
            favMov1,
            favMov2,
            favMov3
		} = this.state;
		return (
			<form
				className={this.props.vis + ' New-card-form fixed flex col mid center'}>
				<h2 className='tc p-10'>Add New Person Card</h2>
				<input
					type='text'
					placeholder='First Name'
					name='first'
					value={first}
					onChange={e => this.change(e)}
				/>
				<input
					type='text'
					placeholder='Last Name'
					name='last'
					value={last}
					onChange={e => this.change(e)}
				/>
				<input
					type='text'
					placeholder='City'
					name='city'
					value={city}
					onChange={e => this.change(e)}
				/>
				<input
					type='text'
					placeholder='Country'
					name='country'
					value={country}
					onChange={e => this.change(e)}
				/>
				<input
					type='text'
					placeholder='Employer'
					name='employer'
					value={employer}
					onChange={e => this.change(e)}
				/>
				<input
					type='text'
					placeholder='Job Title'
					name='title'
					value={title}
					onChange={e => this.change(e)}
				/>
				<label>Favorite movies</label>
				<input
					type='text'
					placeholder='Favorite Movie 1'
					name='favMov1'
					value={favMov1}
					onChange={e => this.change(e)}
				/>
				<input
					type='text'
					placeholder='Favorite Movie 2'
					name='favMov2'
					value={favMov2}
					onChange={e => this.change(e)}
				/>
				<input
					type='text'
					placeholder='Favorite Movie 3'
					name='favMov3'
                    value={ favMov3 }
					onChange={e => this.change(e)}
				/>
				<div className='form-btns'>
					<button type='submit' className='blue-btn submit' onClick={this.submit}>
						Submit
					</button>
					<button className='blue-btn cancel' onClick={this.reset}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}
