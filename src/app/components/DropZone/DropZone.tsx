import React, { useState, useRef, useEffect } from 'react';
import PropsModal from '../PropsModal/PropsModal';
import { ObjectComponents } from '@/app/types/Components';

interface DropZoneProps {
  id: string;
  initialContent: string;
  componentName: string;
  setComponentName: (name: string) => void;
  componentVariant: string;
  setComponentVariant: (variant: string) => void;
  textColor?: string;
  language: string;
}

const DropZone: React.FC<DropZoneProps> = ({
  id,
  initialContent,
  componentName,
  setComponentName,
  componentVariant,
  setComponentVariant,
  textColor,
  language,
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
    e.currentTarget.style.border = '2px dashed yellow';
    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = '2px dashed blue';
    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = '1px solid red';
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = '1px solid red';
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropTargetRef.current = e.currentTarget;

    const draggedComponent = e.dataTransfer.getData('Component');
    const draggedVariant = e.dataTransfer.getData('Variant');
    setComponentName(draggedComponent);
    setComponentVariant(draggedVariant);

    const componentHTML = ObjectComponents.Components[draggedComponent as keyof typeof ObjectComponents.Components]?.renderHTML;
    
    if (componentHTML) {
      setPendingHTML(componentHTML); // Se guarda temporalmente el HTML pendiente
      if ( 
        (draggedComponent === "Headers" && draggedVariant === "Reservation Code") ||
        draggedComponent !== "Headers"
      ) {
        console.log(draggedComponent, draggedVariant);
        setPropsModalOpen(true); // Se abre el PropsModal
      } else {
        console.log(draggedComponent, draggedVariant);
        console.log(componentHTML)
        handleInsertComponent(componentHTML);
        console.log("Desde DZ")
      }
    }
  };

  const handleCloseModal = () => {
    setPropsModalOpen(false);
    setPendingHTML(null);
  };

  const handleInsertComponent = (updatedHTML: string) => {
    const htmlPendiente = updatedHTML || pendingHTML;
    if (htmlPendiente) {
      const placeholderRegex = /Agregar /;
      const currentContent = placeholderRegex.test(content) ? "" : content;
      const newContent = currentContent + htmlPendiente;
      setContent(newContent);

      if (dropTargetRef.current) {
        dropTargetRef.current.style.border = 'none';
        dropTargetRef.current.style.padding = "0";
        dropTargetRef.current.style.minHeight = "0";
        dropTargetRef.current.style.backgroundColor = 'transparent';
      }
    }
    handleCloseModal();
  };

  return (
    <div
      id={id}
      draggable={true}
      style={{
        border: '1px dashed #d1d1d1',
        minHeight: '100px',
        color: textColor || 'white',
        padding: '8px'
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
        onInsert={handleInsertComponent}  
        componentName={componentName}
        componentVariant={componentVariant}
        language={language}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DropZone;
