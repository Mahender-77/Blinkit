import { Box } from "@mui/material";

import "./index.css";
import { Cards } from "../Cards";
import { Snacks } from "../Snacks";
import { Banner } from "../Banner";
import { ScrollBar } from "../ScrollBar";
export const Body = () => {
 

  return (
    <Box >
       <Banner/>
      <Cards/>

     <Snacks/>
    <ScrollBar/>
    </Box>
  );
};
