import { Box } from "@mui/material"
import { BannerLeftsideScrollBar } from "../BannerLeftsideScrollBar"
import { BannerRightsideScrollBar } from "../BannerRightsideScrollBar"

export const BannerCont: React.FC = () => {
    return(
        <Box sx={{
            width:"80%",
            margin:"auto",
            height:"900px",
            border:"0.5px solid #eee ",
            display:"flex"
        }}>
        <BannerLeftsideScrollBar/>
        <BannerRightsideScrollBar/>
        </Box>
    )
}