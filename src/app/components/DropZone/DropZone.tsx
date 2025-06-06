import React, { useState, useRef } from "react";
import PropsModal from "../PropsModal/PropsModal";
import { Component } from "@/app/context/MasterJSONContext";
import { Alert, Box } from "@mui/material";
import style from "./style";
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface DropZoneProps {
  id: string;
  textColor?: string;
  text: string;
  isSectionContainer?: boolean
  isHeader?: boolean
  isFooter?: boolean
  isBoxAzul?: boolean
  isBody?: boolean
  sendComponent: (component: Component, sectionID: string) => void;
}

const DropZone: React.FC<DropZoneProps> = ({
  id,
  textColor,
  text,
  isSectionContainer,
  isHeader,
  isFooter,
  isBody,
  isBoxAzul,
  sendComponent,
}) => {
  const [propsModalOpen, setPropsModalOpen] = useState(false);
  const dropTargetRef = useRef<HTMLDivElement | null>(null);

  const [componentName, setComponentName] = useState("");
  const [componentVariant, setComponentVariant] = useState("");
  const [showAlert, setShowAlert] = useState(false)
  const styles = style

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "2px dashed #8b8b8b";
    e.currentTarget.style.backgroundColor = "#bdbdbd36";
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "2px dashed blue";
    e.currentTarget.style.backgroundColor = "#bdbdbd36";
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "1px dashed #d1d1d1";
    e.currentTarget.style.backgroundColor = "transparent";
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "1px dashed #d1d1d1";
    e.currentTarget.style.backgroundColor = "transparent";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const component = e.dataTransfer.getData("Component") ?? '' 
    const variant = e.dataTransfer.getData("Variant") ?? '' 
    setComponentName(component);
    setComponentVariant(variant);

    dropTargetRef.current = e.currentTarget;
    if(component === 'SectionContainers' && isSectionContainer){
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000);
    }else if(component !== "Headers" && isHeader){
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000);
    }else if(component !== "Footers" && isFooter){
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000);
    }else if(component !== "SectionContainers" && isBody){
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000);
    }else if(component === "SectionContainers" && isBoxAzul){
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000);
    }else{
      setPropsModalOpen(true);
    }

    e.currentTarget.style.border = "1px dashed #d1d1d1";
    e.currentTarget.style.backgroundColor = "transparent";
  };

  const handleCloseModal = () => {
    setPropsModalOpen(false);
  };

  const handleComponent = (component: Component | null) => {
    if (component) {
      sendComponent(component, id);
      handleCloseModal()
    }
  };

  return (
    <Box
      id={id}
      sx={styles.container}
      style={{color: textColor || "white"}}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
    >
      <PropsModal
        isOpen={propsModalOpen}
        onClose={handleCloseModal}
        componentName={componentName}
        componentVariant={componentVariant}
        sendComponent={handleComponent}
      />
      <Box sx={styles.iconBox}>
        <AddCircleIcon style={{color: textColor || 'white'}} />
        {text}
      </Box>
      { showAlert && (
        <Box sx={styles.alert}>
            <Alert severity="warning">Incompatible component for this section</Alert>
        </Box>
      )}
    </Box>
  );
};

export default DropZone;
