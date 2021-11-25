import { renderHook } from '@testing-library/react-hooks';
import useMap from './use-map';
import { getMockLocation } from '../mocks/utils';

describe('Hook: useMap', () => {
  const mockLocation = getMockLocation(10);

  it('should return map', () => {
    const mapRef = {
      current: document.createElement('section'),
    };
    const { result }  = renderHook(() => useMap(mapRef, mockLocation));

    expect(result.current).not.toBe(null);
  });
});
