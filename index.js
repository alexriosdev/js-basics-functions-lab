const hq = 42;
const feet = 264;

function distanceFromHqInBlocks(value) {
  return Math.abs(hq - value);
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * feet;
}

function distanceTravelledInFeet(value1, value2) {
  return Math.abs(value1 - value2) * feet;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance === feet) {
    return 0;
  }
  else if (400 <= distance && distance <= 2000) {
    return (distance - 400) * 0.02;
  }
  else if (2000 <= distance && distance <= 2500) {
    return 25;
  }
  else if (2500 < distance) {
    return 'cannot travel that far';
  }
}