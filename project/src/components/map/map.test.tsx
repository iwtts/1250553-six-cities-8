import {render, screen} from '@testing-library/react';
import Map from './map';
import { getMockOffers } from '../../mocks/offers';
import { MapType } from '../../const';
import { getMockLocation } from '../../mocks/utils';

const mockOffers = getMockOffers();
const mockLocation = getMockLocation(10);

const mockPoints =  mockOffers.map((item) => ({
  latitude: item.location.latitude,
  longitude: item.location.longitude,
  id: item.id,
}));

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Map
        type={MapType.Main}
        location={mockLocation}
        points={mockPoints}
        currentPoint={null}
      />);

    expect(screen.getByTitle(/A JS library for interactive maps/i)).toHaveTextContent(/Leaflet/i);
  });
});
