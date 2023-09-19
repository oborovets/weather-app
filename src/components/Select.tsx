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
  value: string | number;
  handleChange: (event: SelectChangeEvent<string | number>) => void;
}

export default function Select({ label, options, value, handleChange }: Props) {
  return (
    <Box sx={{ maxWidth: 210, minWidth: 210, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <MUISelect label={label} value={value} onChange={handleChange}>
          {options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    </Box>
  );
}
