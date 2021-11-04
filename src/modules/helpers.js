export default function calculateShipPosition(
  originalCoord,
  shipLength,
  shipOrientation
) {
  const position = [];
  position[0] = originalCoord;
  if (shipOrientation === 'vertical') {
    for (let i = 1; i < shipLength; i += 1) {
      position[i] = position[i - 1] + 10;
    }
  } else {
    for (let j = 1; j < shipLength; j += 1) {
      position[j] = position[j - 1] + 1;
    }
  }
  return position;
}
