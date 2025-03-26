import React, { useState, useRef, useEffect } from "react";
import PropsModal from "../PropsModal/PropsModal";
import { Component } from "../Canva/Canva";

interface DropZoneProps {
  id: string;
  initialContent: string;
  componentName: string;
  setComponentName: (name: string) => void;
  componentVariant: string;
  setComponentVariant: (variant: string) => void;
  textColor?: string;
  sendComponent: (component: Component) => void;
}

const DropZone: React.FC<DropZoneProps> = ({
  id,
  initialContent,
  componentName,
  setComponentName,
  componentVariant,
  setComponentVariant,
  textColor,
  sendComponent,
}) => {
  const [content, setContent] = useState(initialContent);
  const [propsModalOpen, setPropsModalOpen] = useState(false);
  const [pendingHTML, setPendingHTML] = useState<string | null>(null);
  const dropTargetRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Forzar re-renderizado cuando cambia content
    if (contentRef.current) {
      contentRef.current.innerHTML = content;
    }
  }, [content]);

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
    e.currentTarget.style.border = "1px solid red";
    e.currentTarget.style.backgroundColor = "transparent";
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "1px solid red";
    e.currentTarget.style.backgroundColor = "transparent";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropTargetRef.current = e.currentTarget;

    const draggedComponent = e.dataTransfer.getData("Component");
    const draggedVariant = e.dataTransfer.getData("Variant");
    setComponentName(draggedComponent);
    setComponentVariant(draggedVariant);

    if (
      (draggedComponent === "Headers" &&
        draggedVariant === "Reservation Code") ||
      draggedComponent !== "Headers"
    ) {
      setPropsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setPropsModalOpen(false);
    setPendingHTML(null);
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
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DropZone;
