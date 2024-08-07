import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../store";

type TextInputProps = {
  value?: string;
  id: string;
  placeholder?: string;
};

export const TextInput: React.FC<TextInputProps> = ({ id, placeholder }) => {
  const inputValue = useSelector((store: any) => store.reducer[id]);

  const dispatch: any = useDispatch();

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    // обновлаяем значение input в redux
    dispatch(handleChange(`${id}`, e.target.value));
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      value={inputValue}
      onChange={handleChanges}
      placeholder={placeholder}
    />
  );
};
