import { address, datatype } from 'faker';
import { Location } from '../types/offer';
import { CITIES } from '../const';

const getMockLocation = (zoom: number): Location => ({
  latitude: Number(address.latitude()),
  longitude: Number(address.longitude()),
  zoom: zoom,
});

const getMockCityName = (): string => {
  const cities = Object.values(CITIES).map((city) => (city.name));
  return cities[datatype.number(cities.length - 1)];
};

const getMockGoods = (): string[] => {
  const goods = ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'];
  return goods.slice(0, datatype.number(goods.length));
};

const getMockImages = (): string[] => {
  const images = ['./img/apartment-01.jpg', './img/apartment-02.jpg', './img/apartment-02.jpg'];
  return images.slice(0, datatype.number(images.length));
};

const getMockPreviewImage = (): string => {
  const previewImages = ['./img/apartment-small-03.jpg', './img/apartment-small-04.jpg'];
  return previewImages[datatype.number(previewImages.length - 1)];
};

const getMockType = (): string => {
  const types = ['apartment', 'room', 'house', 'hotel'];
  return types[datatype.number(types.length - 1)];
};

export {
  getMockLocation,
  getMockCityName,
  getMockGoods,
  getMockImages,
  getMockPreviewImage,
  getMockType
};
