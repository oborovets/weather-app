import { Card } from "@mui/material";
import Typography from "./Typography";
import formatString from "../utils/formatString.ts";

interface Props {
  place: string;
  timezone: string;
  localtime: string;
}

export default function LocationCard({ place, timezone, localtime }: Props) {
  return (
    <Card variant="outlined">
      <div style={{ margin: "0 auto", maxWidth: "350px" }}>
        <Typography variant="h6">{formatString("Location:", place)}</Typography>
        <Typography variant="h6">
          {formatString("Timezone:", timezone)}
        </Typography>
        <Typography variant="h6">
          {formatString("Localtime:", localtime)}
        </Typography>
      </div>
    </Card>
  );
}
