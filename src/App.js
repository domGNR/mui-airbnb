import { CssBaseline,Box } from "@mui/material";
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
        // border:'1px solid red'
      }}>
        <Box>
          <Header />
          <OptionsTab/>
        </Box>
      </Box>
    </>
  );
}

export default App;
