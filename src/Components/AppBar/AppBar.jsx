import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";

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
        {[ 
          { path: "/", name: "Home" },
          { path: "/about", name: "About" },
          { path: "/donatenow", name: "Donate" },
          { path: "/projects", name: "Projects" },
          { path: "/joinus", name: "Join Us" },
          { path: "/signin", name: "Sign in" },
        ].map((item, index) => {
          return (
            // <Typography key={index} px="2rem" color='promary.main' fontWeight={600}>
            //     {item}
            // </Typography>
            <Link key={index} to={item.path} style={{textDecoration:'none', margin:'1rem'}}>
              {item.name}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default AppBar;
