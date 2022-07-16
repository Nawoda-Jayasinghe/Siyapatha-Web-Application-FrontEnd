import { Box, Button, Typography } from "@mui/material";
import { color } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Image from "../../Images/Background.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      // justifyContent='center'
      alignItems="center"
      width="100%"
      height="85vh"
      px="8rem"
      boxSizing="border-box"
      sx={{ backgroundImage: `url(${Image})` }}
    >
      <Box color="white" fontSize="3rem">
        <Typography> Get started today...</Typography>
        Fundraising For <br /> The Human.
        <Typography
          sx={{
            borderLeft: "4px solid #F694D9",
            paddingLeft: "0.8rem",
            mt: "5px",
          }}
        >
          {" "}
          Siyapatha is a youth non profit organization. We mainly focused on{" "}
          <br />
          local volunteering projects which makes an impact on society.
        </Typography>
        <Button
          onClick={() => {
            navigate("/donatenow");
          }}
          sx={{ bgcolor: "#F694D9", "&:hover": { bgcolor: "#B31AA2" } }}
          variant="contained"
        >
          Donate Now
        </Button>
        <Button
          onClick={() => {
            navigate("/joinus");
          }}
          variant="outlined"
          sx={{
            borderColor: "#F694D9",
            color: "white",
            ml: "1rem",
            "&:hover": { bgcolor: "#B31AA2" },
          }}
        >
          Join Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
