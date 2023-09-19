import MUIAppBar from "@mui/material/AppBar";
import { Container, Toolbar } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Typography from "./Typography.tsx";

export default function AppBar() {
  return (
    <MUIAppBar position="static">
      <Container>
        <Toolbar>
          <WbSunnyIcon
            fontSize="large"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography variant="h6">Weather App</Typography>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
}
