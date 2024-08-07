import React from "react";
import { Box, Typography } from "@mui/material";

type TextDisplayProps = {
  text: string;
  userInput: string;
};

export const TextDisplay: React.FC<TextDisplayProps> = ({
  text,
  userInput,
}) => {
  return (
    <Box>
      {text.split("").map((char, index) => {
        let color;
        let backgroundColor;
        if (index < userInput.length) {
          // Изменияем цвет символа в зависимости от его правильного написания
          color = char === userInput[index] ? "#3ec632" : "#ff3131";
          backgroundColor = char === userInput[index] ? "lightgray" : "black";
        } else {
          color = "#a1a1a1";
          backgroundColor = "transparent";
        }
        return (
          <Typography
            key={index}
            component="span"
            style={{
              color,
              backgroundColor,
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            {char}
          </Typography>
        );
      })}
    </Box>
  );
};
