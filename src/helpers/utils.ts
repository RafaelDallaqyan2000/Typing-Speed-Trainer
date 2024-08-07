export const calculateWPM = (
  startTime: number,
  endTime: number,
  text: string
): number => {
  const minutes = (endTime - startTime) / 60000;
  const words = text.split(" ").length;
  return Math.round(words / minutes);
};

export const calculateErrors = (text: string, userInput: string): number => {
  let errors = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== text[i]) {
      errors++;
    }
  }
  return errors;
};
