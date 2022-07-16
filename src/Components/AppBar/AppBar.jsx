import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Logo from "../../Images/Logo.png";

const AppBar = () => {

  return (
    
    <Box
      width="100vw"
      height="12vh"
      boxSizing="border-box"
      px="5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <img src={Logo} alt="" width="125px" />
      <Box display="flex" alignItems="center">
        {
            ["Home", "About", "Donate", "Projects", "Join Us", "Sign-In"].map(
                (item, index)=>{
                    return(
                        <Typography key={index} px="2rem" color='promary.main' fontWeight={600}>
                            {item}
                        </Typography>
                    )
                }
            )
        }

      </Box>
    </Box>
  );
};

export default AppBar;
