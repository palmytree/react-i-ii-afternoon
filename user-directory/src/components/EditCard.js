import React, { Component } from 'react';

export default class EditCard extends Component {
	constructor () {
		super()
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
		}
	}
	generateFavMovies(index) {
		const output = this.props.getData(index).favoriteMovies.map((e, i) => {
			return <li key={i}>{e}</li>;
		});
		return output;
	}
	render() {
		const { getData, cardNum, total, vis } = this.props;
		const i = cardNum - 1;
		return (
			<div className={'Card Edit fixed ' + vis}>
                <span className='card-count abs'>{ cardNum }/{ total }</span>
				<div className='card-text-container flex col'>
					<div className='card-title-container flex'>
						<h2>
							{getData(i).name.first + ' '}
							{getData(i).name.last}
						</h2>
					</div>
					<table className='card-data'>
						<tbody>
							<tr>
								<td>
									<h3>From: </h3>
									<span className='card-data-result'>
										{getData(i).city + ', ' + getData(i).country}
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<h3>Job Title: </h3>
									<span className='card-data-result'>{getData(i).title}</span>
								</td>
							</tr>
							<tr>
								<td>
									<h3>Employer: </h3>
									<span className='card-data-result'>
										{getData(i).employer}
									</span>
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
									<ol>{this.generateFavMovies(i)}</ol>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
