import React from 'react';
import LocationCard, { LocationProps } from './LocationCard';

interface LocationListProps {
	locationList: Array<LocationProps>; // location, time, tempInfo, explain이 들어있는 배열
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
