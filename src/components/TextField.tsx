import React from "react";
import MUITextField from "@mui/material/TextField";

interface Props {
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({ label, value, handleChange }: Props) {
  return (
    <MUITextField
      sx={{ m: 1 }}
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
}
