import { Box, Button, Typography } from "@mui/material";

type ResultScreenProps = {
  wpm: number;
  errors: number;
  onRestart: () => void;
};

export const Result: React.FC<ResultScreenProps> = ({
  wpm,
  errors,
  onRestart,
}) => {
  return (
    <Box textAlign="center">
      <Typography variant="h4">Результаты</Typography>
      <Typography variant="h6">Скорость печати: {wpm} WPM</Typography>
      <Typography variant="h6">Ошибок: {errors}</Typography>
      <Button variant="contained" color="primary" onClick={onRestart}>
        Начать заново
      </Button>
    </Box>
  );
};
