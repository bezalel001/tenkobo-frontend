import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import conoil from '../../images/fillingStations/conoil001.jpg';
import nnpc from '../../images/fillingStations/nnpc001.jpg';
import total from '../../images/fillingStations/total001.jpg';
import shell from '../../images/fillingStations/shell001.jpg';
import mobil from '../../images/fillingStations/techron001.jpg';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'Conoil',
					imageUrl: conoil,
					id: 1,
				},
				{
					title: 'NNPC',
					imageUrl: nnpc,
					id: 2,
				},
				{
					title: 'Total',
					imageUrl: total,
					id: 3,
				},
				{
					title: 'Shell',
					imageUrl: shell,
					size: 'large',
					id: 4,
				},
				{
					title: 'Mobil',
					imageUrl: mobil,
					size: 'large',
					id: 5,
				},
			],
		};
	}

	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ title, imageUrl, size, id }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
