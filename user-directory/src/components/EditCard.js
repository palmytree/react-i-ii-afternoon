import React, { Component } from 'react';

export default class EditCard extends Component {
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
		this.initializeState = this.initializeState.bind(this);
	}
	updateField( e ) {
		this.setState( { [ e.target.name ]: e.target.value } );
	}
	initializeState() {
		const { getData, cardNum } = this.props;
		const data = getData(cardNum - 1);
		this.setState({
			first: data.name.first,
			last: data.name.last,
			city: data.city,
			country: data.country,
			employer: data.employer,
			title: data.title,
			favMov1: data.favoriteMovies[0],
			favMov2: data.favoriteMovies[1],
			favMov3: data.favoriteMovies[2]
		});
	}
	componentDidUpdate(prevProps) {
		if (prevProps.vis === 'hide' && this.props.vis !== 'hide') {
			this.initializeState();
		}
	}
	render() {
		const { cardNum, total, vis, changeData } = this.props;
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
			name: { first, last },
			city,
			country,
			employer,
			title,
			favoriteMovies: [favMov1, favMov2, favMov3]
		};
		return (
			<div className={'Card Edit fixed ' + vis}>
				<span className='card-count abs'>
					{cardNum}/{total}
				</span>
				<div className='card-text-container flex col rel'>
					<div className='card-title-container flex'>
						<h2>
							<input
								name='first'
								type='text'
								className='Edit-field Edit-name'
								value={first}
								onChange={e => this.updateField(e)}
							/>
							<input
								name='last'
								type='text'
								className='Edit-field Edit-name'
								value={last}
								onChange={e => this.updateField(e)}
							/>
						</h2>
					</div>
					<table className='card-data'>
						<tbody>
							<tr>
								<td>
									<h3>From: </h3>
									<input
										name='city'
										type='text'
										className='Edit-field'
										value={city}
										onChange={e => this.updateField(e)}
									/>
									<span className='card-data-result'>{', '}</span>
									<input
										name='country'
										type='text'
										className='Edit-field'
										value={country}
										onChange={e => this.updateField(e)}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<h3>Job Title: </h3>
									<input
										name='title'
										type='text'
										className='Edit-field'
										value={title}
										onChange={e => this.updateField(e)}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<h3>Employer: </h3>
									<input
										name='employer'
										type='text'
										className='Edit-field'
										value={employer}
										onChange={e => this.updateField(e)}
									/>
								</td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td>
									<h3>Favorite Movies:</h3>
								</td>
							</tr>
							<tr>
								<td>
									<ol>
										<li>
											<input
												name='favMov1'
												type='text'
												className='Edit-field'
												value={favMov1}
												onChange={e => this.updateField(e)}
											/>
										</li>
										<li>
											<input
												name='favMov2'
												type='text'
												className='Edit-field'
												value={favMov2}
												onChange={e => this.updateField(e)}
											/>
										</li>
										<li>
											<input
												name='favMov3'
												type='text'
												className='Edit-field'
												value={favMov3}
												onChange={e => this.updateField(e)}
											/>
										</li>
									</ol>
								</td>
							</tr>
						</tbody>
					</table>
					<div className='Edit-btn-container flex abs'>
						<button className='blue-btn cancel' onClick={this.props.toggleVis}>
							Cancel
						</button>
						<button className='blue-btn add' onClick={()=>changeData(cardNum,output)}>Submit</button>
					</div>
				</div>
			</div>
		);
	}
}
