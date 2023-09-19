import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  SelectChangeEvent,
} from "@mui/material";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  options: Option[];
  label: string;
  value: "" | HTMLSelectElement | undefined;
  handleChange: (e: SelectChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ label, options, value, handleChange }: Props) {
  return (
    <Box sx={{ maxWidth: 210, minWidth: 210 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <MUISelect
          label={label}
          value={value}
          onChange={handleChange}
          sx={{ m: 1 }}
        >
          {options.map((opt) => (
            <MenuItem value={opt.value}>{opt.label}</MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    </Box>
  );
}
