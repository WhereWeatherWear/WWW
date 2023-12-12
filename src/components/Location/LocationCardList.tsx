import React from 'react';
import LocationCard, { LocationProps } from './LocationCard';
import { useNavigate } from 'react-router-dom';

interface LocationListProps {
	locationList: Array<LocationProps>;
}

function deletePage(): void {}

export default function LocationCardList({ locationList }: LocationListProps) {
	const navigate = useNavigate();
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
