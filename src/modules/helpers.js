export default function determinePosition(originalCoord, length, orientation) {
  const finalPosition = [];
  finalPosition[0] = originalCoord;
  if (orientation === 'vertical') {
    for (let i = 1; i < length; i += 1) {
      finalPosition[i] = finalPosition[i - 1] + 10;
    }
  } else {
    for (let i = 1; i < length; i += 1) {
      finalPosition[i] = finalPosition[i - 1] + 1;
    }
  }
  return finalPosition;
}
