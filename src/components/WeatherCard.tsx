import MUICard from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Typography from "./Typography.tsx";
import formatString from "../utils/formatString.ts";

interface Props {
  place: string;
  timezone: string;
  localtime: string;
  condition: string;
  temperature: string;
}

export default function Card({
  place,
  timezone,
  localtime,
  condition,
  temperature,
}: Props) {
  return (
    <MUICard sx={{ maxWidth: 300, mt: 1, ml: 1 }}>
      <CardContent>
        <Typography>
          {formatString("Location:")}
          {place}
        </Typography>
        <Typography>
          {formatString("Timezone:")}
          {timezone}
        </Typography>
        <Typography>
          {formatString("Localtime:")}
          {localtime}
        </Typography>
        <Typography>
          {formatString("Condition:")}
          {condition}
        </Typography>
        <Typography>
          {formatString("Temperature")}
          {temperature}°C
        </Typography>
      </CardContent>
    </MUICard>
  );
}
