import MUICard from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Typography from "./Typography.tsx";
import formatString from "../utils/formatString.ts";

interface Props {
  condition?: string;
  temperature?: string;
  averageTemp?: string;
  chanceToRain?: string;
  date?: string;
}

export default function Card({
  date,
  condition,
  temperature,
  averageTemp,
  chanceToRain,
}: Props) {
  return (
    <MUICard sx={{ minWidth: 250, maxWidth: 350, mr: 1 }}>
      <CardContent>
        <Typography>{formatString("Date:", date || "Today")}</Typography>
        <Typography>{formatString("Condition:", condition)}</Typography>
        <Typography>
          {formatString("Temperature:", temperature || averageTemp, "°C")}
        </Typography>
        <Typography>
          {formatString("Chance to rain:", chanceToRain, "%")}
        </Typography>
      </CardContent>
    </MUICard>
  );
}
