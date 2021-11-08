import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';

import useMap from '../../hooks/useMap';
import { Location } from '../../types/offer';
import { MapType, currentCustomIcon, defaultCustomIcon } from '../../const';

type Point = {
  latitude: number,
  longitude: number,
  id: number,
}

type MapProps = {
  type: MapType,
  location: Location,
  points: Point[],
  currentPoint: Point | null,
}

const getMapSectionClassName = (type: MapType): string => {
  if (type === MapType.Property) {
    return 'property__map map';
  }
  return 'cities__map map';
};

function Map({type, location, points, currentPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      const markers: Marker[] = [];
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });
        marker.setIcon(defaultCustomIcon).addTo(map);
        markers.push(marker);
      });

      if (currentPoint) {
        const currentMarker = new Marker({
          lat: currentPoint.latitude,
          lng: currentPoint.longitude,
        });
        currentMarker.setIcon(currentCustomIcon).addTo(map);
        markers.push(currentMarker);
      }

      return () => {
        markers.forEach((marker: Marker) => marker.removeFrom(map));
      };
    }
  },[currentPoint, map, points]);

  return (
    <section className={getMapSectionClassName(type)} ref={mapRef} />
  );
}

export default Map;
