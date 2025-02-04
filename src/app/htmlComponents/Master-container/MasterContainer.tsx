import PropsModal from '@/app/components/PropsModal/PropsModal';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';


interface MasterContainerProps {
  onDrop?: (component: string, targetId: string) => void;
  htmlContent?: string;
  // onDragEnter?: () => void;
}

const MasterContainer: React.FC<MasterContainerProps> = ({ onDrop }) => {
  // const [componentName, setComponentName] = useState("");
  // const [componentVariant, setComponentVariant] = useState("");
  // const [propsModalOpen, setPropsModalOpen] = useState(false);


  // const openPropsModal = () => {
  //   setPropsModalOpen(true);
  // }

  // const changeComponent = (componentName: string | undefined, componentVariant: string | undefined) => {
  //   setComponentName(componentName || "");
  //   setComponentVariant(componentVariant || "");
  // }
  let propsModalOpen = false;

  const changeStatusPropsModal = () => {
    console.log(propsModalOpen)
    propsModalOpen = !propsModalOpen;
    console.log(propsModalOpen)
  }
  useEffect(() => {
    const dropZones = document.querySelectorAll<HTMLElement>('#header-logo, #header-section-bluebg, #body-section, #footer-section');
    
    const handleDragOver = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      dropZone.style.border = '2px dashed yellow';
      dropZone.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
     // console.log("dragging somtn OVER " + (dropZone as HTMLElement)?.id);
    };

    const handleDragEnter = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      dropZone.style.border = '2px dashed blue';
      dropZone.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
      console.log("dragging somtn ENTER " + (dropZone as HTMLElement)?.id);
    }

    const handleDragEnd = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      dropZone.style.border = '1px solid red';
      dropZone.style.backgroundColor = 'transparent';
      console.log("Drag has ENDED in " + (dropZone as HTMLElement)?.id);
    }

    const handleDragLeave = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      dropZone.style.border = '1px solid red';
      dropZone.style.backgroundColor = 'transparent';
      console.log("LEAVING " + (dropZone as HTMLElement)?.id);
    };

    const handleDrop = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      const componentHTML = dragEvent.dataTransfer?.getData('HTML');
      const componentName = dragEvent.dataTransfer?.getData('Component');
      const componentVariant = dragEvent.dataTransfer?.getData('Variant');
      // changeComponent(componentName, componentVariant)
      // setComponentName(componentName || "");
      // setComponentVariant(componentVariant || "");
      console.log("Html: ", componentHTML);
      if ( componentHTML ) {
        try {
          // setPropsModalOpen(true);
          changeStatusPropsModal();
          dropZone.innerHTML = componentHTML;
          onDrop?.(componentHTML, dropZone.id);
          console.log("DROPPED " + componentName +"Variant:"+componentVariant+ " INTO " + dropZone.id);
        } catch (error) {
          console.error("Error parsing component", error)
        }
      } 
      // else {
      //   alert("Necesita previsualizar el componente antes de soltarlo en Master Container");
      // }
      dropZone.style.border = '1px solid red';
      dropZone.style.backgroundColor = 'transparent';
    };

    // Agregamos los event con los tipos correctos
    dropZones.forEach(zone => {
      zone.addEventListener('dragover', handleDragOver as EventListener);
      zone.addEventListener('dragenter', handleDragEnter as EventListener);
      zone.addEventListener('dragleave', handleDragLeave as EventListener);
      zone.addEventListener('drop', handleDrop as EventListener);
      zone.addEventListener('dragend', handleDragEnd as EventListener);
    });

    // Limpieza con los tipos correctos
    return () => {
      dropZones.forEach(zone => {
        zone.removeEventListener('dragover', handleDragOver as EventListener);
        zone.removeEventListener('dragenter', handleDragEnter as EventListener);
        zone.removeEventListener('dragleave', handleDragLeave as EventListener);
        zone.removeEventListener('drop', handleDrop as EventListener);
        zone.removeEventListener('dragend', handleDragEnd as EventListener);
      });
    };
  }, [onDrop]); 

  const htmlMasterContainer = `
    <div>&nbsp;</div>
    <table class="email-wrapper" align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 5px 0 0 0;max-width: 800px;">
      <tr>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" style="background-color: #0032A0; border-top-left-radius: 8px; border-top-right-radius: 8px;width: 100%;min-width: 100%;">
            <tr>
              <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                  <tr>
                    <td class="header-logo-padding" style="padding: 32px 32px 0;">
                      <div draggable="true"
                        id="header-logo"
                        style="border: 1px solid red; min-height: 100px; color: white;"
                      >
                        Arrastra aquí el header logo
                      </div>
                    </td>
                  </tr>
                </table>

                <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                  <tr>
                    <td class="mobile-padding" style="background-color: #0032A0; padding: 32px 72px">
                      <div 
                        id="header-section-bluebg"
                        style="border: 1px solid red; min-height: 100px; color: white;"
                      >
                        Arrastra aquí el header section
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
            <tr>
              <td class="mobile-padding" style="padding: 32px;">
                <div 
                  id="body-section"
                  style="border: 1px solid red; min-height: 100px;"
                >
                  Arrastra aquí el body section
                </div>
              </td>
            </tr>
          </table>

          <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
            <tr>
              <td class="mobile-padding" style="padding: 32px 56px;background-color:#EFEFEE; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                <div 
                  id="footer-section"
                  style="border: 1px solid red; min-height: 100px;"
                >
                  Arrastra aquí el footer section
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  return (
    <Box>
      <PropsModal 
        isOpen={propsModalOpen}
        onClose={ changeStatusPropsModal}
        componentName={"componentName"}
        componentVariant={"componentVariant"}
      />
      <div dangerouslySetInnerHTML={{ __html: htmlMasterContainer }} />
    </Box>
  );
};

export default MasterContainer;