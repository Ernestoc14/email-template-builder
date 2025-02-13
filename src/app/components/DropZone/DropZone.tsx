import React, { useState, useRef } from 'react';
import PropsModal from '../PropsModal/PropsModal';

interface DropZoneProps {
  id: string;
  initialContent: string;
  componentName: string;
  setComponentName: (name: string) => void;
  componentVariant: string;
  setComponentVariant: (variant: string) => void;
  textColor?: string;
}

const DropZone: React.FC<DropZoneProps> = ({
  id,
  initialContent,
  componentName,
  setComponentName,
  componentVariant,
  setComponentVariant,
  textColor,
}) => {
  const [content, setContent] = useState(initialContent);
  const [propsModalOpen, setPropsModalOpen] = useState(false);
  const [pendingHTML, setPendingHTML] = useState<string | null>(null);
  const dropTargetRef = useRef<HTMLDivElement | null>(null);

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
    // Guardo la referencia del DropZone para quitar los estilos 
    dropTargetRef.current = e.currentTarget;

    const componentHTML = e.dataTransfer.getData('HTML');
    setComponentName(e.dataTransfer.getData('Component'));
    setComponentVariant(e.dataTransfer.getData('Variant'));

    if (componentHTML) {
      setPendingHTML(componentHTML); // Se guarda temporalmente el HTML pendiente
      setPropsModalOpen(true); // Se abre el PropsModal
    }
  };

  const handleCloseModal = () => {
    setPropsModalOpen(false);
    setComponentName("");
    setComponentVariant("");
    setPendingHTML(null); // Se limpia el HTML pendiente si se cierra el modal
  };

  // Inserta el componente en el DropZone cuando se hace clic en Insertar Button del PropsModal
  const handleInsertComponent = () => {
    if (pendingHTML) {
      const placeholderRegex = /Agregar /;
      const currentContent = placeholderRegex.test(content) ? "" : content;
      const newContent = currentContent + pendingHTML;
      setContent(newContent);

      if (dropTargetRef.current) {
        // Quita los estilos de DropZone
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
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DropZone;
