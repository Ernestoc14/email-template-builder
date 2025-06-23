import DropZone from "@/app/components/DropZone/DropZone";
import { RenderComponent } from "@/app/components/RenderComponent/RenderComponent";
import { useCanvasModeContext } from "@/app/context/CanvasModeContext";
import { Component, masterJSONType, SectionComponent } from "@/app/context/MasterJSONContext";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import style from "./style";
export interface MasterContainerProps {
  masterJSON: masterJSONType;
  sendComponent: (sectionID: string, component: Component, sectionComponentId?: string) => void;
  onEdit: ( section: string, componentId: string, data: Component | SectionComponent, sectionComponentId?: string) => void;
  onDelete: (section: string, componentId: string, sectionComponentId?: string) => void;
}

const MasterContainer = ({
  masterJSON,
  sendComponent,
  onEdit,
  onDelete
}: MasterContainerProps) => {
  const { mode } = useCanvasModeContext();
  const [responsiveView, setResponsiveView] = useState<boolean>(false);
  const [isFullWidth, setIsFullWidth] = useState<boolean>(true)

  useEffect(() => {
    const isImage = masterJSON.boxAzul.components.find(
      (component) => component.componentId.includes("Images") && component.componentName === "Images"
    );
    if (isImage?.componentId.includes("Images")) {
      setIsFullWidth(true);
    }
    else {
      setIsFullWidth(false);
    } 
  }, [masterJSON.boxAzul.components]);

  const [styles, setStyle] = useState(style(false, isFullWidth));

  useEffect(() => {
    setStyle(style(responsiveView, isFullWidth))
  }, [responsiveView, isFullWidth])

  const handleComponent = (component: Component, sectionID: string, sectionComponentId?: string) => {
    sendComponent(sectionID, component, sectionComponentId);
  };

  const handleDelete = (section: string, componentId: string, sectionComponentId?: string) => {
    onDelete(section, componentId, sectionComponentId)
  }

  const handleEdit = (section: string, componentId: string, data: Component | SectionComponent, sectionComponentId?: string) =>{
    onEdit(section, componentId, data, sectionComponentId )
  }

  const handleToggleResponsive = ( event: React.MouseEvent<HTMLElement>, isResponsiveView: boolean) => {
    setResponsiveView(isResponsiveView);
  };

  return (
    <Box sx={styles.container} id="master-container">
      <Box sx={{marginTop: '32px', width: '100%', display: 'flex', justifyContent: 'center'}}>
        <ToggleButtonGroup color="primary" exclusive value={responsiveView} onChange={handleToggleResponsive} className="breakpoints">
          <ToggleButton value={false}><PersonalVideoIcon /></ToggleButton>
          <ToggleButton value={true}><PhoneIphoneIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <table className="email-wrapper" align="center" border={0} cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td>
              <table border={0} cellPadding={0} cellSpacing={0} className="top-blue-container">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} className="header-table">
                        <tbody>
                          <tr>
                            <td className="header-section-mobile-padding">
                              {masterJSON.header.length === 0 ? 
                                (mode && (
                                  <DropZone
                                    id="dropzone-header"
                                    sendComponent={handleComponent}
                                    text="Drag a Header"
                                    isHeader
                                  />
                                )
                              ) : (
                                <RenderComponent
                                  id="dropzone-header"
                                  data={masterJSON.header[0]}
                                  onDelete={handleDelete}
                                  onEdit={handleEdit}
                                  isResponsiveView={responsiveView}
                                />
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} className="box-azul-table">
                        <tbody>
                          <tr>
                            <td className="blue-box-mobile-padding">
                              {
                                masterJSON.boxAzul.components[0]?.componentId.includes("Images") ? (
                                  <RenderComponent
                                    id="dropzone-bluebox"
                                    data={masterJSON.boxAzul.components[0]}
                                    onDelete={handleDelete}
                                    onEdit={handleEdit}
                                    isResponsiveView={responsiveView}
                                    />
                                ) : (
                                  <>
                                {masterJSON.boxAzul.components.map(
                                  (component, index) => (
                                    <RenderComponent
                                      id='dropzone-bluebox'
                                      key={component.componentId + index}
                                      data={component}
                                      onDelete={handleDelete}
                                      onEdit={handleEdit}
                                      isResponsiveView={responsiveView}
                                    />
                                  )
                                )}
                              {
                                mode && (
                                  <DropZone
                                  id="dropzone-bluebox"
                                  sendComponent={ handleComponent } 
                                  text="Drag a Component" 
                                  isBoxAzul
                                  />
                                )} 
                                </>
                                )
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} className="body-table">
                <tbody>
                  <tr>
                    <td className="body-section-mobile-padding"  style={{ backgroundColor: '#FFFFFF' }}>
                      {masterJSON.body.sectionComponents.map(
                        (section, index) => (
                          <div key={index}>
                            <RenderComponent
                              id="dropzone-body"
                              key={ section.sectionComponentsInfo.componentId + index }
                              data={section}
                              isSectionComponent                              
                              sendComponent={ handleComponent }
                              onDelete={handleDelete}
                              onEdit={handleEdit}
                              isResponsiveView={responsiveView}
                            />
                          </div>
                        )
                      )}
                      { mode && (
                        <div style={{padding: responsiveView ? '0px 16px' : '0px 72px'}}>
                          <DropZone
                            id="dropzone-body"
                            sendComponent={ handleComponent }
                            textColor="black"
                            isBody
                            text="Drag a SectionComponent"
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} className="footer-table">
                <tbody>
                  <tr>
                    <td className="footer-section-mobile-padding">
                      {masterJSON.footer.length === 0 ? 
                        (mode && (
                          <DropZone
                            id="dropzone-footer"
                            sendComponent={handleComponent}
                            textColor="black"
                            isFooter
                            text="Drag a Footer"
                          />
                        )) : (
                        <RenderComponent
                          id="dropzone-footer"
                          data={masterJSON.footer[0]}
                          onDelete={handleDelete}
                          onEdit={handleEdit}
                          isResponsiveView={responsiveView}
                        />
                      )}
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
