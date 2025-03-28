import React, { useState, useRef } from "react";
import PropsModal from "../PropsModal/PropsModal";
import { Component } from "@/app/context/MasterJSONContext";

interface DropZoneProps {
  id: string;
  initialContent: string;
  textColor?: string;
  sendComponent: (component: Component, sectionID?: string) => void;
}

const DropZone: React.FC<DropZoneProps> = ({
  id,
  initialContent,
  textColor,
  sendComponent,
}) => {
  const [propsModalOpen, setPropsModalOpen] = useState(false);
  const dropTargetRef = useRef<HTMLDivElement | null>(null);

  const [componentName, setComponentName] = useState("");
  const [componentVariant, setComponentVariant] = useState("");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "2px dashed yellow";
    e.currentTarget.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "2px dashed blue";
    e.currentTarget.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
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
    setComponentName(e.dataTransfer.getData("Component") ?? '');
    setComponentVariant(e.dataTransfer.getData("Variant") ?? '');
    dropTargetRef.current = e.currentTarget;

    // const draggedComponent = e.dataTransfer.getData("Component");
    // const draggedVariant = e.dataTransfer.getData("Variant");
    // setComponentName(draggedComponent);
    // setComponentVariant(draggedVariant);

    // if (
    //   (draggedComponent === "Headers" &&
    //     draggedVariant === "Reservation Code") ||
    //   draggedComponent !== "Headers"
    // ) {
    // }
    setPropsModalOpen(true);
  };

  const handleCloseModal = () => {
    setPropsModalOpen(false);
  };

  const handleComponent = (component: Component | null) => {
    if (component) {
      sendComponent(component);
    }
  };

  return (
    <div
      id={id}
      style={{
        border: "1px dashed #d1d1d1",
        minHeight: "100px",
        color: textColor || "white",
        padding: "8px",
      }}
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
      <div dangerouslySetInnerHTML={{ __html: initialContent }} />
    </div>
  );
};

export default DropZone;
