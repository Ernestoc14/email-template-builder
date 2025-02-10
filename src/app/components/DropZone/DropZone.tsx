import React, { useState } from 'react';

interface DropZoneProps {
  id: string;
  initialContent: string;
  onDrop: (id: string, newComponentHTML: string) => void;
  setComponentName: (name: string) => void;
  setComponentVariant: (variant: string) => void;
  textColor?: string;
}

const DropZone: React.FC<DropZoneProps> = ({ id, initialContent, onDrop, setComponentName, setComponentVariant, textColor}) => {
  // Cada drop zone maneja su contenido (se acumula lo que se suelte)
  const [content, setContent] = useState(initialContent);

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
    e.currentTarget.style.border = 'none';
    e.currentTarget.style.padding = "0"
    e.currentTarget.style.minHeight = "0"
    e.currentTarget.style.backgroundColor = 'transparent';

    const componentHTML = e.dataTransfer.getData('HTML');
    setComponentName(e.dataTransfer.getData('Component'));
    setComponentVariant(e.dataTransfer.getData('Variant'));

    if (componentHTML) {
      // Este placeholder controla el Texto que esta dentro del DropZone que va a ser reemplazado por el componente
      const placeholderRegex = /Agregar /;
      const currentContent = placeholderRegex.test(content) ? "" : content;
      const newContent = currentContent + componentHTML;
      setContent(newContent);
      onDrop(id, componentHTML);
    }
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
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DropZone;