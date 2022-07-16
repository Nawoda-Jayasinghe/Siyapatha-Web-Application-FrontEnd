import { Box } from "@mui/material";
import Image from "../../Images/Background.png";

const Home = () => {
  return (
    <Box display="block">
      <img
        src={Image}
        alt=""
        width="100%"
        height="570px"
        style={{ overflow: "hidden", objectFit: "cover" }}
      />
    </Box>
  );
};

export default Home;
