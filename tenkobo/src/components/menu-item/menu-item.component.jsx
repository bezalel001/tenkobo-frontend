import React from 'react';

import './menu-item.styles.scss';
import conoil from '../../images/fillingStations/conoil001.jpg';

const MenuItem = ({ title, imageUrl, size }) => {
	console.log('image---url', imageUrl);

	return (
		<div className={`${size} menu-item`}>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>shop now</span>
			</div>
		</div>
	);
};

export default MenuItem;
