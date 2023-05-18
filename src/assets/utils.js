import data from "./data.geojson";
import { colors } from "./options";

const calculate = (data, value) => {
  return (
    data[value.first] * 0.5209 +
    data[value.second] * 0.2708 +
    data[value.third] * 0.1458 +
    data[value.fourth] * 0.0625
  );
};

const getColorByResult = (result) => {
  const index = Math.floor(result);
  return colors[index];
};

const convertCoords = (coords) => {
  return coords.map((coord) => ({ lat: coord[1], lng: coord[0] }));
};

export const getResult = (value) => {
  if (!value) {
    value = {
      first: "Index_All",
      second: "Index_All",
      third: "Index_All",
      fourth: "Index_All",
    };

    return data.features.map((feature, index) => {
      const calculated = calculate(feature.properties, value);
      const getColor = getColorByResult(calculated);

      return {
        id: index,
        color: getColor,
        coords: convertCoords(feature.geometry.coordinates[0]),
      };
    });
  }

  return data.features.map((feature, index) => {
    const calculated = calculate(feature.properties, value);
    const getColor = getColorByResult(calculated);

    return {
      id: index,
      color: getColor,
      coords: convertCoords(feature.geometry.coordinates[0]),
    };
  });
};
