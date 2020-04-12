import {CITIES, TripDescriptions, typeRoutePointMap} from "../constants";
import {getRandomArrayItem, getRandomInteger, getRandomDate} from "../../utils";

const tripOffers = [{
  title: `Upgrade to a business class`,
  price: 150
}, {
  title: `Choose the radio station`,
  price: 50
}, {
  title: `Choose temperature`,
  price: 120
}, {
  title: `Drive quickly, I'm in a hurry`,
  price: 130
}, {
  title: `Drive slowly`,
  price: 70
}, {
  title: `Add luggage`,
  price: 30
}, {
  title: `Switch to comfort class`,
  price: 100
}, {
  title: `Choose seats`,
  price: 130
}, {
  title: `Add excursion`,
  price: 130
}];

const descriptionsCount = {
  MIN: 1,
  MAX: 3,
};

const picturesCount = {
  MIN: 1,
  MAX: 4,
};

const priceSize = {
  MIN: 100,
  MAX: 1000,
};

const offersCount = {
  MIN: 0,
  MAX: 5,
};

export const getRandomTripType = () => getRandomArrayItem(Object.keys(typeRoutePointMap));

// Генерирует случайное описание фото

const shuffledDescriptions = TripDescriptions.sort(() => 0.5 - Math.random());

let selectedDescriptions = shuffledDescriptions.slice(0, getRandomInteger(descriptionsCount.MIN, descriptionsCount.MAX)).join(` `);

const getRandomPictures = () => {
  const photosArray = [];
  const count = getRandomInteger(picturesCount.MIN, picturesCount.MAX);

  for (let i = 0; i < count; i++) {
    photosArray.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return photosArray;
};

const getRandomOffers = () => {
  const offersArray = [];
  const count = getRandomInteger(offersCount.MIN, offersCount.MAX);
  for (let i = 0; i < count; i++) {
    offersArray.push(getRandomArrayItem(tripOffers));
  }
  return offersArray;
};

const getTripPoint = () => {
  return {
    type: getRandomTripType(),
    dateFrom: getRandomDate(),
    dateTo: getRandomDate(),
    destination: {
      name: getRandomArrayItem(CITIES),
      description: selectedDescriptions,
      pictures: getRandomPictures(),
    },
    basePrice: getRandomInteger(priceSize.MIN, priceSize.MAX),
    isFavorite: Math.random() > 0.5,
    offers: getRandomOffers(),
  };
};

export const generateTripPoints = (count) => {
  return new Array(count)
    .fill(``)
    .map(getTripPoint);
};
