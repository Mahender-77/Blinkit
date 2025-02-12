import { Box, Typography } from "@mui/material";
import { Items } from "../../utlis/constants";
export const BannerLeftsideScrollBar: React.FC = () => {
  return (
    <Box
      sx={{
          display: "flex",
          justifyContent: "left",
        //   border: "1px solid red",
          height:"800px",
          width: "22%",
          overflowY:"auto",
          overflowX:"hidden",
          "&::-webkit-scrollbar": {
    display: "none",
  },

  /* Hide scrollbar for Firefox */
//   scrollbarWidth: "none",

  /* Hide scrollbar for IE and Edge */
//   "-ms-overflow-style": "none",
      }}
    >
      <Box sx={{ display: "grid" }}>
        {Items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              gap: "20px",
              padding: "15px",
              justifyContent: "left",
              alignItems: "center",
            //   border: "1px solid red",
            borderBottom: "1px solid #eee",
              flexWrap: "wrap",
              width: "138%",
              
            }}
          >
            <Box
              sx={{
                width: "60px",
                height: "50px",
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                borderRadius: "10px",
                backgroundColor: "rgb(248, 248, 248)",
              }}
            >
              <img
                width="60px"
                style={{
                  paddingTop: "70px",
                  paddingLeft: "10px",
                  paddingRight: "8px",
                }}
                src={item.img}
                alt={item.title}
              />
            </Box>
            <Typography>{item.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
