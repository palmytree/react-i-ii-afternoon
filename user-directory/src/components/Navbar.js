import React from 'react';

const Navbar = props => {
	return (
		<div className='Navbar flex'>
			<button className='nav-btn left' onClick={props.prev}>
				{'< '}Previous
			</button>
			<div className='edit-btn-container'>
				<button className='blue-btn'>Edit</button>
				<button className='blue-btn cancel' onClick={props.del}>Delete</button>
				<button className='blue-btn' onClick={props.addFormToggle}>New</button>
			</div>
			<button className='nav-btn right' onClick={props.next}>
				Next{' >'}
			</button>
		</div>
	);
};

export default Navbar;
