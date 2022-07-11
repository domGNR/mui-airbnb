import { CssBaseline, Box, Container } from "@mui/material";
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
import LocationCards from "./components/LocationCards";
import Footer from "./components/Footer";
import { displayOnDesktop } from "./themes/CommonStyles";
import FooterMenu from "./components/FooterMenu";
function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            zIndex: 1000,
            backgroundColor: "white",
            top: 0,
          }}
        >
          <Header />
          <OptionsTab />
        </Box>

        <Box
          sx={{
            mx: 8,
            mt: 2,
          }}
        >
          <LocationCards />
        </Box>
          
          <Box sx={displayOnDesktop}>
            <Footer />
          </Box>
          <Box sx={{ display:{xs:'block',md:'none'}}}>
            <FooterMenu />
          </Box>
      </Box>
    </>
  );
}

export default App;
