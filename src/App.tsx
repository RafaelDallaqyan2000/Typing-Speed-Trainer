import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextDisplay, TextInput } from "./components";
import { calculateErrors, calculateWPM } from "./helpers/utils";
import { Result } from "./pages";
import { handleChange } from "./store";

const sampleText =
  "You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.";

const App: React.FC = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  const dispatch = useDispatch();

  //Берем значение input из Redux
  const userInput = useSelector((store: any) => store.reducer.textInput);

  useEffect(() => {
    if (userInput.length === 1) {
      // При первом вводе символа, ставим время начала и показываем результаты
      setStartTime(Date.now());
    }
    if (userInput.length === sampleText.length) {
      // При достижении длины текста совпадающего с образцом, ставим время конца и показываем результаты
      setEndTime(Date.now());
      setShowResults(true);
    }
  }, [userInput]);

  const handleRestart = () => {
    // Очищаем input, ставим время начала и конца на null, скрываем результаты
    dispatch(handleChange("textInput", ""));
    setStartTime(null);
    setEndTime(null);
    setShowResults(false);
  };

  // Рассчитываем скорость печати и количество ошибок
  const wpm =
    startTime && endTime ? calculateWPM(startTime, endTime, sampleText) : 0;
  const errors = calculateErrors(sampleText, userInput);

  return (
    <Container>
      <Box mt={4}>
        {showResults ? (
          <Result wpm={wpm} errors={errors} onRestart={handleRestart} />
        ) : (
          <>
            <Button variant="contained" color="primary" onClick={handleRestart}>
              Начать заново
            </Button>
            <Box sx={{ mt: 10 }}>
              <TextInput id="textInput" placeholder="Начните печатать..." />
              <TextDisplay text={sampleText} userInput={userInput} />
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default App;
