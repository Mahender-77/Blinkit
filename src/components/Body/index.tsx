import { Box, Button, Typography } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./index.css";
export const Body = () => {
  const items = [
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {
      photo:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
  ];

  return (
    <Box sx={{ width: "82%", margin: "auto" }}>
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
      ></Box>
      <Box sx={{ display: "flex", gap: "20px", marginLeft: "12px" }}>
        <Box
          sx={{
            width: "335.4px",
            height: "195px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            width: "335.4px",
            height: "195px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            width: "335.4px",
            height: "195px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          marginTop: "20px",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", gap: "20px", marginTop: "20px" }}
          >
            <Box
              sx={{
                width: "128px",
                height: "188px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item.photo}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
      <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
        Rolling paper & tobacco
      </Typography>
      <Box
      sx={{
        width: "100%",
        overflowY: "auto hidden",
         scrollbarWidth: "none",
          display: "flex",
          flexDirection: "row",
          WebkitBoxAlign: "center",
          alignItems: "center",
          columnGap:"20px",
          marginLeft: "12px",
          marginRight: "12px",
          overflowX: "scroll",
        
        // scrollSnapType:"x mandatory",
      }}
      >
      
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "12rem",
            height: "290px",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            // border: "0.5px solid rgb(232, 232, 232)",
            border:"2px solid black",
            gap: "0.125rem",
            backgroundColor: "rgb(255, 255, 255)",
            
            // paddingBottom: " 0.75rem",
          }}
        >
          <Box sx={{ textAlign: "center",border:"1px solid red" }}>
            {" "}
            <img
              style={{ width: "150px",objectFit:"contain" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
              alt=""
            />
          </Box>

          <Box
            className="min"
            sx={{
              fontSize: "9px",
              display: "flex",
              alignItems: "center",

              gap: "0.125rem",
              width: "44px",
              marginLeft: "10px",
              padding: "3px",
            }}
          >
            <img
              style={{ width: "10px" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
              alt=""
            />
            30 MIN
          </Box>
          <Typography
            sx={{
              margin: "4px",
              fontSize: "13px",
              fontWeight: 600,
              height: "36px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            Brown Ripper Rolling Paper 32 Leaves mahnder jerry sjdh
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
          >
            1 pack (64 pieces)
          </Typography>
          <Box
            sx={{
              paddingRight:"6px",
              paddingLeft:"6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",placeItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"12px",fontWeight:600}}/><Typography sx={{fontSize:"12px",fontWeight:600}}>10</Typography></Box>
            
            <Button variant="outlined" sx={{border:"0.5px solid green",color:"green",backgroundColor:"rgb(236, 255, 236)"}}>ADD</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "290px",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            // border: "0.5px solid rgb(232, 232, 232)",
            border:"2px solid black",
            gap: "0.125rem",
            backgroundColor: "rgb(255, 255, 255)",
            
            // paddingBottom: " 0.75rem",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <img
              style={{ width: "140px",objectFit:"cover" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
              alt=""
            />
          </Box>

          <Box
            className="min"
            sx={{
              fontSize: "9px",
              display: "flex",
              alignItems: "center",

              gap: "0.125rem",
              width: "44px",
              marginLeft: "10px",
              padding: "3px",
            }}
          >
            <img
              style={{ width: "10px" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
              alt=""
            />
            30 MIN
          </Box>
          <Typography
            sx={{
              margin: "4px",
              fontSize: "13px",
              fontWeight: 600,
              height: "36px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            Brown Ripper Rolling Paper 32 Leaves mahnder jerry sjdh
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
          >
            1 pack (64 pieces)
          </Typography>
          <Box
            sx={{
              paddingRight:"6px",
              paddingLeft:"6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",placeItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"12px",fontWeight:600}}/><Typography sx={{fontSize:"12px",fontWeight:600}}>10</Typography></Box>
            
            <Button variant="outlined" sx={{border:"0.5px solid green",color:"green",backgroundColor:"rgb(236, 255, 236)"}}>ADD</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "290px",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            // border: "0.5px solid rgb(232, 232, 232)",
            border:"2px solid black",
            gap: "0.125rem",
            backgroundColor: "rgb(255, 255, 255)",
            
            // paddingBottom: " 0.75rem",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <img
              style={{ width: "140px",objectFit:"cover" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
              alt=""
            />
          </Box>

          <Box
            className="min"
            sx={{
              fontSize: "9px",
              display: "flex",
              alignItems: "center",

              gap: "0.125rem",
              width: "44px",
              marginLeft: "10px",
              padding: "3px",
            }}
          >
            <img
              style={{ width: "10px" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
              alt=""
            />
            30 MIN
          </Box>
          <Typography
            sx={{
              margin: "4px",
              fontSize: "13px",
              fontWeight: 600,
              height: "36px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            Brown Ripper Rolling Paper 32 Leaves mahnder jerry sjdh
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
          >
            1 pack (64 pieces)
          </Typography>
          <Box
            sx={{
              paddingRight:"6px",
              paddingLeft:"6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",placeItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"12px",fontWeight:600}}/><Typography sx={{fontSize:"12px",fontWeight:600}}>10</Typography></Box>
            
            <Button variant="outlined" sx={{border:"0.5px solid green",color:"green",backgroundColor:"rgb(236, 255, 236)"}}>ADD</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "290px",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            // border: "0.5px solid rgb(232, 232, 232)",
            border:"2px solid black",
            gap: "0.125rem",
            backgroundColor: "rgb(255, 255, 255)",
            
            // paddingBottom: " 0.75rem",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <img
              style={{ width: "140px",objectFit:"cover" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
              alt=""
            />
          </Box>

          <Box
            className="min"
            sx={{
              fontSize: "9px",
              display: "flex",
              alignItems: "center",

              gap: "0.125rem",
              width: "44px",
              marginLeft: "10px",
              padding: "3px",
            }}
          >
            <img
              style={{ width: "10px" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
              alt=""
            />
            30 MIN
          </Box>
          <Typography
            sx={{
              margin: "4px",
              fontSize: "13px",
              fontWeight: 600,
              height: "36px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            Brown Ripper Rolling Paper 32 Leaves mahnder jerry sjdh
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
          >
            1 pack (64 pieces)
          </Typography>
          <Box
            sx={{
              paddingRight:"6px",
              paddingLeft:"6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",placeItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"12px",fontWeight:600}}/><Typography sx={{fontSize:"12px",fontWeight:600}}>10</Typography></Box>
            
            <Button variant="outlined" sx={{border:"0.5px solid green",color:"green",backgroundColor:"rgb(236, 255, 236)"}}>ADD</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "290px",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            // border: "0.5px solid rgb(232, 232, 232)",
            border:"2px solid black",
            gap: "0.125rem",
            backgroundColor: "rgb(255, 255, 255)",
            
            // paddingBottom: " 0.75rem",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <img
              style={{ width: "140px",objectFit:"cover" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
              alt=""
            />
          </Box>

          <Box
            className="min"
            sx={{
              fontSize: "9px",
              display: "flex",
              alignItems: "center",

              gap: "0.125rem",
              width: "44px",
              marginLeft: "10px",
              padding: "3px",
            }}
          >
            <img
              style={{ width: "10px" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
              alt=""
            />
            30 MIN
          </Box>
          <Typography
            sx={{
              margin: "4px",
              fontSize: "13px",
              fontWeight: 600,
              height: "36px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            Brown Ripper Rolling Paper 32 Leaves mahnder jerry sjdh
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
          >
            1 pack (64 pieces)
          </Typography>
          <Box
            sx={{
              paddingRight:"6px",
              paddingLeft:"6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",placeItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"12px",fontWeight:600}}/><Typography sx={{fontSize:"12px",fontWeight:600}}>10</Typography></Box>
            
            <Button variant="outlined" sx={{border:"0.5px solid green",color:"green",backgroundColor:"rgb(236, 255, 236)"}}>ADD</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "290px",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            // border: "0.5px solid rgb(232, 232, 232)",
            border:"2px solid black",
            gap: "0.125rem",
            backgroundColor: "rgb(255, 255, 255)",
            
            // paddingBottom: " 0.75rem",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <img
              style={{ width: "140px",objectFit:"cover" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
              alt=""
            />
          </Box>

          <Box
            className="min"
            sx={{
              fontSize: "9px",
              display: "flex",
              alignItems: "center",

              gap: "0.125rem",
              width: "44px",
              marginLeft: "10px",
              padding: "3px",
            }}
          >
            <img
              style={{ width: "10px" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
              alt=""
            />
            30 MIN
          </Box>
          <Typography
            sx={{
              margin: "4px",
              fontSize: "13px",
              fontWeight: 600,
              height: "36px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            Brown Ripper Rolling Paper 32 Leaves mahnder jerry sjdh
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
          >
            1 pack (64 pieces)
          </Typography>
          <Box
            sx={{
              paddingRight:"6px",
              paddingLeft:"6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",placeItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"12px",fontWeight:600}}/><Typography sx={{fontSize:"12px",fontWeight:600}}>10</Typography></Box>
            
            <Button variant="outlined" sx={{border:"0.5px solid green",color:"green",backgroundColor:"rgb(236, 255, 236)"}}>ADD</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "290px",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            // border: "0.5px solid rgb(232, 232, 232)",
            border:"2px solid black",
            gap: "0.125rem",
            backgroundColor: "rgb(255, 255, 255)",
            
            // paddingBottom: " 0.75rem",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <img
              style={{ width: "140px",objectFit:"cover" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
              alt=""
            />
          </Box>

          <Box
            className="min"
            sx={{
              fontSize: "9px",
              display: "flex",
              alignItems: "center",

              gap: "0.125rem",
              width: "44px",
              marginLeft: "10px",
              padding: "3px",
            }}
          >
            <img
              style={{ width: "10px" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
              alt=""
            />
            30 MIN
          </Box>
          <Typography
            sx={{
              margin: "4px",
              fontSize: "13px",
              fontWeight: 600,
              height: "36px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            Brown Ripper Rolling Paper 32 Leaves mahnder jerry sjdh
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
          >
            1 pack (64 pieces)
          </Typography>
          <Box
            sx={{
              paddingRight:"6px",
              paddingLeft:"6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",placeItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"12px",fontWeight:600}}/><Typography sx={{fontSize:"12px",fontWeight:600}}>10</Typography></Box>
            
            <Button variant="outlined" sx={{border:"0.5px solid green",color:"green",backgroundColor:"rgb(236, 255, 236)"}}>ADD</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "290px",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            // border: "0.5px solid rgb(232, 232, 232)",
            border:"2px solid black",
            gap: "0.125rem",
            backgroundColor: "rgb(255, 255, 255)",
            
            // paddingBottom: " 0.75rem",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <img
              style={{ width: "140px",objectFit:"cover" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
              alt=""
            />
          </Box>

          <Box
            className="min"
            sx={{
              fontSize: "9px",
              display: "flex",
              alignItems: "center",

              gap: "0.125rem",
              width: "44px",
              marginLeft: "10px",
              padding: "3px",
            }}
          >
            <img
              style={{ width: "10px" }}
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
              alt=""
            />
            30 MIN
          </Box>
          <Typography
            sx={{
              margin: "4px",
              fontSize: "13px",
              fontWeight: 600,
              height: "36px",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            Brown Ripper Rolling Paper 32 Leaves mahnder jerry sjdh
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
          >
            1 pack (64 pieces)
          </Typography>
          <Box
            sx={{
              paddingRight:"6px",
              paddingLeft:"6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",placeItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"12px",fontWeight:600}}/><Typography sx={{fontSize:"12px",fontWeight:600}}>10</Typography></Box>
            
            <Button variant="outlined" sx={{border:"0.5px solid green",color:"green",backgroundColor:"rgb(236, 255, 236)"}}>ADD</Button>
          </Box>
        </Box>
       
      
       
        

      </Box>
    </Box>
  );
};
