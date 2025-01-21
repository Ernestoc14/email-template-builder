"use client";
import styles from "./page.module.css";
import PaxCards from "./htmlComponents/pax-card/PaxCards";
import TitleBoxs from "./htmlComponents/title-box/TItleBoxs";
import { Box, Button, List, Typography } from "@mui/material";
import { ListItemComponent } from "./components/ListItemComponent/ListItemComponent";
import { MultiButton } from "./components/MultiButton/MultiButton";
import Image from "next/image";

export default function Home() {
  // Call Components File to render
  const PaxCard =
    PaxCards({
      variant: "simple",
    }) || "<div>NO VARIANT</div>";

  // Variants: "simple" | "wci"

  const TitleBox = TitleBoxs({
    variant: "titleBox",
    title: "Disfruta nuestra con COPA",
    subtitle: "Conoce la comida y mejor aerolínea de América Latina",
  });

  const Components = [
    "Headers",
    "Title Box",
    "Section Container",
    "Buttons",
    "Infobar",
    "Alerts",
    "Banners",
    "Itinerary Cards",
    "Pax Cards",
    "Footer",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box component="header" sx={{backgroundColor: "#0032a0", width:"100%", display:"flex", gap: "10px", justifyContent: "space-between", paddingX:"50px", paddingY:"30px"}}>
        <Image src="https://www.copaair.com/webassets/images/copa-logo-white.png" alt="Copa Logo" width={200} height={40} />
        <Typography variant="h4" color="white" sx={{textAlign:"center", flex: 1}}>
          Welcome to Notification Template Builder!!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "20px 80px",
        }}
        component="section"
      >
        <Box sx={{ width: "20%" }}>
          <Typography variant="h6" sx={{ paddingBottom: "20px" }}>
            Lista de Componentes
          </Typography>
          <Box className={styles.canva}>
            <List component="menu">
              {Components.map((component, index) => (
                <ListItemComponent key={index} primary={component} />
              ))}
            </List>
          </Box>
        </Box>
        <Box sx={{ width: "75%" }}>
          <Box
            component="nav"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "20px",
            }}
          >
            <Typography variant="h6">Droppable Area</Typography>
            <Box sx={{ display: "flex", gap: "60px" }}>
              <MultiButton buttons={["ES", "EN", "PT", "FR"]} />
              <MultiButton buttons={["Desktop", "Mobile"]} />
            </Box>
            <Button variant="contained" color="success">
              Generate HTML
            </Button>
          </Box>
          <Box className={styles.canva} sx={{}}>
            <Box className={styles.components}>Master Comtainer Area</Box>
            <Box className={styles.components}>Drop a Component Here!</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
