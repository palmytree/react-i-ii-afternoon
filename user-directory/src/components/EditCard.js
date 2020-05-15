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
	}
	generateObj() {
		
	}
	render() {
		const { getData, cardNum, total, vis } = this.props;
		const i = cardNum - 1;
		return (
			<div className={'Card Edit fixed ' + vis}>
				<span className='card-count abs'>
					{cardNum}/{total}
				</span>
				<div className='card-text-container flex col rel'>
					<div className='card-title-container flex'>
						<h2>
							<input
								type='text'
								className='Edit-field Edit-name'
								value={ getData( i ).name.first }
								onChange={e => this.updateField(e)}
							/>
							<input
								type='text'
								className='Edit-field Edit-name'
								value={getData(i).name.last}
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
										type='text'
										className='Edit-field'
										value={getData(i).city}
										onChange={e => this.updateField(e)}
									/>
									<span className='card-data-result'>{', '}</span>
									<input
										type='text'
										className='Edit-field'
										value={getData(i).country}
										onChange={e => this.updateField(e)}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<h3>Job Title: </h3>
									<input
										type='text'
										className='Edit-field'
										value={getData(i).title}
										onChange={e => this.updateField(e)}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<h3>Employer: </h3>
									<input
										type='text'
										className='Edit-field'
										value={getData(i).employer}
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
												type='text'
												className='Edit-field'
												value={getData(i).favoriteMovies[0]}
												onChange={e => this.updateField(e)}
											/>
										</li>
										<li>
											<input
												type='text'
												className='Edit-field'
												value={getData(i).favoriteMovies[1]}
												onChange={e => this.updateField(e)}
											/>
										</li>
										<li>
											<input
												type='text'
												className='Edit-field'
												value={getData(i).favoriteMovies[2]}
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
						<button
							className='blue-btn add'
						>Submit</button>
					</div>
				</div>
			</div>
		);
	}
}
