import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Banner: React.FC = () => {
    const navigation = useNavigate();
    return(
        <Box
        sx={{
          backgroundImage:
            "url('https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
          width: "100%",
          height: "250px",
        }}
        onClick={() => navigation("/bannerCont")}
      ></Box>
    )
}