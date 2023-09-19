import MUIAppBar from '@mui/material/AppBar';
import {Box, Container, Toolbar} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import Typography from "./Typography.tsx";
import Button from "./Button.tsx";


export default function AppBar() {
    return (
        <MUIAppBar position="static">
            <Container>
                <Toolbar>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography variant="h6" text="Weather App"/>
                    <Box>
                        <Button text="Main" variant="text"/>
                    </Box>
                </Toolbar>
            </Container>
        </MUIAppBar>
    )
}