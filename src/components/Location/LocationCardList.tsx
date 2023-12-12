import React from 'react';
import LocationCard, { LocationProps } from './LocationCard';

interface LocationListProps {
	locationList: Array<LocationProps>;
}

export default function LocationCardList({ locationList }: LocationListProps) {
	return (
		<div className="body-wrapper list-wrapper">
			{locationList.map((location) => (
				<LocationCard
					key={location.location}
					location={location.location}
					time={location.time}
					tempInfo={location.tempInfo}
					explain={location.explain}
				/>
			))}
		</div>
	);
}
