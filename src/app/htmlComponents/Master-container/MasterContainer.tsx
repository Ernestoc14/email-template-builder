import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PropsModal from '@/app/components/PropsModal/PropsModal';
import DropZone from '@/app/components/DropZone/DropZone';
import ReactDOM from 'react-dom';

interface MasterContainerProps {
  onDrop?: (component: string, targetId: string) => void;
}

const MasterContainer: React.FC<MasterContainerProps> = () => {
  const [componentName, setComponentName] = useState("Headers");
  const [componentVariant, setComponentVariant] = useState("");
  const [propsModalOpen, setPropsModalOpen] = useState(false);
    // Esta función se dispara cada vez que se hace drop en alguna drop zone
    const handleDrop = () => {
      setPropsModalOpen(true);
    };
  

  const masterContainerHTML = `<div>&nbsp;</div>
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
              <div id="dropzone-footer"></div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`

    useEffect(() => {
      setTimeout(() => {

        const container = document.getElementById("dropzone-footer")
        if (container && !container.hasChildNodes()){
            ReactDOM.createPortal(  
              <DropZone
              id='footer-section'
              initialContent='Arrastrar Footer'
              onDrop={() => console.log("Elemento dropeado")}
              setComponentName={setComponentName}
              setComponentVariant={setComponentVariant}
              textColor='black'
              />,
              container
            )
          }
        })
    }, [])
  return (
    <Box>
      <PropsModal 
        isOpen={propsModalOpen}
        onClose={() => setPropsModalOpen(false)}
        componentName={componentName}
        componentVariant={componentVariant}
      />
      {/* <Box dangerouslySetInnerHTML={{ __html: masterContainerHTML }} /> */}
      <table className="email-wrapper" align="center" border={0} cellPadding={0} cellSpacing={0} 
      style={{ padding: '5px 0 0 0', width: '800px', maxWidth: '800px' }}>
        <tbody>
          <tr>
            <td>
              <table border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#0032A0', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', width: '100%', minWidth: '100%' }}>
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                        <tbody>
                          <tr>
                            <td className="header-logo-padding" style={{ padding: '32px 32px 0' }}>
                              <DropZone
                                id="header-logo"
                                initialContent="Arrastrar Header"
                                onDrop={handleDrop}
                                setComponentName={setComponentName}
                                setComponentVariant={setComponentVariant}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                        <tbody>
                          <tr>
                            <td className="mobile-padding" style={{ backgroundColor: '#0032A0', padding: '32px 72px' }}>
                              <DropZone
                                id="header-section-bluebg"
                                initialContent="Arrastrar Header Section"
                                onDrop={handleDrop}
                                setComponentName={setComponentName}
                                setComponentVariant={setComponentVariant}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                <tbody>
                  <tr>
                    <td className="mobile-padding" style={{ padding: '32px' }}>
                      <DropZone
                        id="body-section"
                        initialContent="Arrastrar Body Section"
                        onDrop={handleDrop}
                        setComponentName={setComponentName}
                        setComponentVariant={setComponentVariant}
                        textColor='black'
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                <tbody>
                  <tr>
                    <td className="mobile-padding" style={{ padding: '32px 56px', backgroundColor: '#EFEFEE', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
                      <DropZone
                        id="footer-section"
                        initialContent="Arrastra Footer"
                        onDrop={handleDrop}
                        setComponentName={setComponentName}
                        setComponentVariant={setComponentVariant}
                        textColor="black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default MasterContainer;
