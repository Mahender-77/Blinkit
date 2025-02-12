import { Box, Button, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { products } from "../../utlis/constants";
export const BannerRightsideScrollBar: React.FC = () => {
  return (
    <Box
      sx={{
        border: "0.5px solid #eee ",
        width: "80%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          border: "0.5px solid #eee",
          width: "100%",
          height: "60px",
          display: "flex",
          //   padding:"10px",
          justifyContent: "space-between",
          alignItems: "center",
          //   paddingLeft:"10px",
          //   paddingRight:"10px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginLeft: "10px" }}>
          Buy Rolling Paper Online
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            paddingRight: "10px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#666666" }}>
            Sort By
          </Typography>
          <input type="text" />
        </Box>
      </Box>
      <Box
        sx={{
          width: "98%",
          height: "900px",
          backgroundColor: "#F4F6FB",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
          padding: "10px",
          overflowY:"auto",
          overflowX:"hidden",
          "&::-webkit-scrollbar": {
    display: "none",
  },
        }}
      >
        {products?.map((item) => (
          <Box
            component="div"
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "230px",
              height: "290px",
              boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
              border: "0.5px solid rgb(232, 232, 232)",
              gap: "0.125rem",
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius:"10px"
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "220px", objectFit: "contain" }}
                src={item.image1}
              />
            </Box>

            <Box
              component="div"
              sx={{
                fontSize: "9px",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                gap: "0.125rem",
                width: "44px",
                marginLeft: "5px",
                padding: "3px",
              }}
            >
              <img style={{ width: "10px" }} src={item.image2} alt="" />
              {item.deliveryTime}
            </Box>
            <Typography
              sx={{
                margin: "4px",
                fontSize: "13px",
                fontWeight: 600,
                height: "36px",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
            >
              {item.description}
            </Typography>
            <Box
              component="div"
              sx={{
                paddingRight: "6px",
                paddingLeft: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  placeItems: "center",
                }}
              >
                <CurrencyRupeeIcon sx={{ fontSize: "12px", fontWeight: 600 }} />
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  {item.price}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                sx={{
                  border: "0.5px solid green",
                  color: "green",
                  backgroundColor: "rgb(236, 255, 236)",
                }}
              >
                ADD
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
