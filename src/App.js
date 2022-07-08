import { CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
import LocationCards from "./components/LocationCards";
function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          // border:'1px solid red'
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <LocationCards/>
      </Box>
    </>
  );
}

export default App;
