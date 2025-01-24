import { Box, IconButton, ListItem, ListItemText } from "@mui/material";
import { ListItemComponentProps } from "./types";
import { useState, useEffect } from "react";
import PreviewComponent from "../PreviewComponentList/PreviewComponentList";
import ComponentVariants from "@/app/types/Components";

export const ListItemComponent = (props: ListItemComponentProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [selectedVariants, setSelectedVariants] = useState<keyof typeof ComponentVariants>("")
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const componentName = props.primary.replace(/\s/g, '');

  useEffect(() => {
    if(ComponentVariants.hasOwnProperty(componentName)) {
      setSelectedVariants(componentName as keyof typeof ComponentVariants)
    }
  }, [componentName])
  const handleOpenPreview = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    console.log(props.primary, componentName)  
    setIsPreviewOpen(true);
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
          onClick={(event) => handleOpenPreview(event)}
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
        </ListItem>
      <PreviewComponent
        open={isPreviewOpen}
        anchorEl={anchorEl}
        component={selectedVariants}
        onClose={() => setIsPreviewOpen(false)}
        />
    </Box>
  );
};
