import {Container, Paper, Box, makeStyles} from "@mui/material"
import GoogleButton from "react-google-button";
import {blue} from "@mui/material/colors";


const Home = () => {

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper sx={{p: 5, backgroundColor: 'lightblue'}}>
                    <GoogleButton onClick={() => {
                        window.open("http://localhost:5000/auth/google", "_self");
                    }}>
                    </GoogleButton>
                </Paper>
            </Box>
        </Container>
    )
}
export default Home
