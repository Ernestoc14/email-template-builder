import React, { useState } from 'react';
import DropZone from '@/app/components/DropZone/DropZone';
import JSONMain from '@/app/components/json.json';
import { RenderComponent } from '@/app/components/RenderComponent/RenderComponent';

interface MasterContainerProps {
  language: string;
}

const MasterContainer = ({ language }: MasterContainerProps) => {
  const [componentName, setComponentName] = useState("");
  const [componentVariant, setComponentVariant] = useState("");

  return (
    <div id='master-container'>
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
                              {JSONMain.header.length === 0 ? (
                                <DropZone
                                  id="header-logo"
                                  initialContent="Agregar Header"
                                  componentName={componentName}
                                  setComponentName={setComponentName}
                                  componentVariant={componentVariant}
                                  setComponentVariant={setComponentVariant}
                                  language={language}
                                />
                              ) : (
                                  // <div dangerouslySetInnerHTML={{ __html: JSONMain.header[0].renderHTML}} />
                                  // Renderizar rendercmp desde dz, controlar HTML por props de DZ
                                  // 
                                  <RenderComponent componentName={componentName} componentVariant={componentVariant} language={language} />
                                  // <Render componentName={componentName} componentVariant={componentVariant} language={language} /> 
                                  //  <Canva language={language} /> 
                              )}
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
                                componentName={componentName}
                                setComponentName={setComponentName}
                                componentVariant={componentVariant}
                                setComponentVariant={setComponentVariant}
                                language={language}
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
                        componentName={componentName}
                        setComponentName={setComponentName}
                        componentVariant={componentVariant}
                        setComponentVariant={setComponentVariant}
                        textColor='black'
                        language={language}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                <tbody>
                  <tr>
                    <td className="mobile-padding" style={{ padding: '32px 56px', backgroundColor: '#EFEFEE', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
                      {JSONMain.footer.length === 0 ? (
                                <DropZone
                                id="footer-section"
                                initialContent="Agregar Footer"
                                componentName={componentName}
                                setComponentName={setComponentName}
                                componentVariant={componentVariant}
                                setComponentVariant={setComponentVariant}
                                textColor="black"
                                language={language}
                              />
                              ) : (
                                  // <div dangerouslySetInnerHTML={{ __html: JSONMain.footer[0].renderHTML}} />
                                    <RenderComponent componentName={componentName} componentVariant={componentVariant} language={language} />
                                  // <Render componentName={componentName} componentVariant={componentVariant} language={language} /> 
                                  //  <Canva language={language} /> 
                              )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MasterContainer;
