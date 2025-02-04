import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { ListItemComponentProps } from "./types";
import { useState } from "react";
import { ObjectComponents } from "@/app/types/Components";
import CallComponent from "../CallComponent/CallComponent";
import PreviewComponentList from "../PreviewComponent/PreviewComponent";

export const ListItemComponent = (props: ListItemComponentProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("")
  const [renderHTML, setRenderHTML] = useState("");

  const handleDropDownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handlePreviewClick = (event: React.MouseEvent<HTMLElement>, component: string, variant: string) => {
    CallComponent(component, variant);
    setAnchorEl(event.currentTarget);
    setSelectedVariant(variant)
    setIsPreviewOpen(true);
    setRenderHTML(ObjectComponents.Components[component as keyof typeof ObjectComponents.Components]?.renderHTML)
  }

  return (
    <Box>
      <ListItem
        sx={{
          width: "100%",
          borderBottom: props.isLast ? "none" : "1px solid #e0e0e0",
          position: "relative",
        }}
      >
        <ListItemText primary={props.primary} />
        <IconButton
          // Dropdown Button
          onClick={handleDropDownClick}
          sx={{
            color: "#0032a0",
            "&:hover": { backgroundColor: "#e0e7ff", color: "#00227b" },
          }}
        >
          <svg
            style={{
              width: "16px",
              height: "16px",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </IconButton>
      </ListItem>
      {/* Lista de Variantes, se activa al dar click al Down Arrow */}
      <List
        component="div"
        sx={{ padding: "0", margin: "0", display: isDropdownOpen ? "block" : "none" }}
      >
        {ObjectComponents.Components[props.primary as keyof typeof ObjectComponents.Components].variants.map((variant: string, index: number) => (
          <ListItem 
            draggable 
            key={index} 
            onDragStart={(e) => {
              //Cuando empieza el onDrag de un Componente se pasara
              // HTML para mostrarlo en MC y el Componente y la variante
              e.dataTransfer.setData("HTML",renderHTML); 
              e.dataTransfer.setData("Component", props.primary);
              e.dataTransfer.setData("Variant", variant);
            }} >
            <IconButton
              // onClick={}
              sx={{
                color: "#0032a0",
                "&:hover": { backgroundColor: "#e0e7ff", color: "#00227b", cursor: "grab" },
                "&:active": { backgroundColor: "#e0e7ff", color: "#00227b", cursor: "grabbing" },
              }}
            >
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              style={{
                width: "16px",
                height: "16px",
                transition: "transform 0.2s ease-in-out",
              }}
              className="size-6"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </IconButton>
            <ListItemText primary={variant} />
            <IconButton
              onClick={(event)=>handlePreviewClick(event, props.primary, variant)}
              sx={{
                color: "#0032a0",
                "&:hover": { backgroundColor: "#e0e7ff", color: "#00227b" },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                style={{
                  width: "16px",
                  height: "16px",
                  transition: "transform 0.2s ease-in-out",
                }}
                className="size-6"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </IconButton>
            <PreviewComponentList
              open={isPreviewOpen}
              onClose={() => setIsPreviewOpen(false)}
              component={props.primary}
              variant={selectedVariant}
              anchorEl={anchorEl}
              previewHTML={ObjectComponents.Components[props.primary as keyof typeof ObjectComponents.Components]?.previewHTML}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListItemComponent;
