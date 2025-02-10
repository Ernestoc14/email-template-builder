import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PropsModal from '@/app/components/PropsModal/PropsModal';
import DropZone from '@/app/components/DropZone/DropZone';

interface MasterContainerProps {
  onDrop?: (component: string, targetId: string) => void;
}

const MasterContainer: React.FC<MasterContainerProps> = () => {
  const [componentName, setComponentName] = useState("Headers");
  const [componentVariant, setComponentVariant] = useState("");
  const [propsModalOpen, setPropsModalOpen] = useState(false);
    // Esta función se dispara cada vez que se hace drop en alguna drop zone

    useEffect(() => {
      if( componentName === "Headers" && componentVariant === "Reservation Code") {
        setPropsModalOpen(true);
      } else {
        setPropsModalOpen(false);
      }
    }, [componentName, componentVariant]);

    const handleDrop = () => {
      setPropsModalOpen(true);
    };
  
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
                                initialContent="Agregar Header"
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
                                initialContent="Agregar Header Section"
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
                        initialContent="Agregar Body Section"
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
                        initialContent="Agregar Footer"
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
