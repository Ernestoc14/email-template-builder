import DropZone from "@/app/components/DropZone/DropZone";
import { RenderComponent } from "@/app/components/RenderComponent/RenderComponent";
import { Component, masterJSONType } from "@/app/context/MasterJSONContext";

export interface MasterContainerProps {
  masterJSON: masterJSONType;
  sendComponent: (component: Component, dropZoneId?: string) => void;
}

const MasterContainer = ({
  masterJSON,
  sendComponent,
}: MasterContainerProps) => {

  const handleComponent = (component: Component, dropZoneId?: string) => {
  console.log("DropZone ID", dropZoneId);
    sendComponent(component, dropZoneId);
  };

  return (
    <div id="master-container">
      <table
        className="email-wrapper"
        align="center"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        style={{ padding: "5px 0 0 0", width: "800px", maxWidth: "800px" }}
      >
        <tbody>
          <tr>
            <td>
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                style={{
                  backgroundColor: "#0032A0",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  width: "100%",
                  minWidth: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        style={{ width: "100%", minWidth: "100%" }}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="header-section-mobile-padding"
                              style={{ padding: "32px 32px 0" }}
                            >
                              {masterJSON.header.length === 0 ? (
                                <DropZone
                                  id="header-section"
                                  initialContent="Agregar Header"
                                  sendComponent={handleComponent}
                                />
                              ) : (
                                <RenderComponent data={masterJSON.header[0]} />
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        style={{ width: "100%", minWidth: "100%" }}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="blue-box-mobile-padding"
                              style={{
                                backgroundColor: "#0032A0",
                                padding: "32px 72px",
                              }}
                            >
                              {masterJSON.boxAzul.components.length === 0 ? (
                                <DropZone
                                  id="blue-box-section"
                                  initialContent="Agregar Header Section"
                                  sendComponent={(component) => handleComponent(component, "blue-box-section")}
                                />
                              ) : (
                                <>
                                  {masterJSON.boxAzul.components.map(
                                    (component, index) => (
                                      <RenderComponent
                                        key={component.componentId + index}
                                        data={component}
                                        sendComponent={handleComponent}
                                      />
                                    )
                                  )}
                                  <DropZone
                                    id="blue-box-section"
                                    initialContent="Agregar Mas Componentes"
                                    sendComponent={(component) => handleComponent(component, "blue-box-section")}
                                  />
                                </>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                style={{ width: "100%", minWidth: "100%" }}
              >
                <tbody>
                  <tr>
                    <td className="body-section-mobile-padding" style={{ padding: "48px 72px", backgroundColor: "#FFFFFF" }}>
                      {masterJSON.body.sectionComponents.length === 0 ? (
                        <DropZone
                          id="body-section"
                          initialContent="Agregar Body Section"
                          sendComponent={(component) => handleComponent(component, "body-section")}
                          textColor="black"
                        />
                      ) : (
                        <>
                          {masterJSON.body.sectionComponents.map(
                            (section, index)=> (
                              <div key={index}>
                              <RenderComponent
                                key={section.sectionComponentsInfo.componentId + index}
                                data={section.sectionComponentsInfo}
                                sendComponent={handleComponent}
                                />
                              {section.components.map((secComponent, secComponentIndex) => (
                                <RenderComponent
                                key={secComponent.componentId + secComponentIndex}
                                data={secComponent}
                                sendComponent={handleComponent}
                                />
                              ))}
                              </div>
                            )
                          )}
                          <DropZone 
                            id="body-section"
                            initialContent="Agregar Mas Componentes"
                            sendComponent={(component) => handleComponent(component, "body-section")}
                            textColor="black"
                          />
                        </>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                style={{ width: "100%", minWidth: "100%" }}
              >
                <tbody>
                  <tr>
                    <td
                      className="footer-section-mobile-padding"
                      style={{
                        padding: "32px 56px",
                        backgroundColor: "#EFEFEE",
                        borderBottomLeftRadius: "8px",
                        borderBottomRightRadius: "8px",
                      }}
                    >
                      {masterJSON.footer.length === 0 ? (
                        <DropZone
                          id="footer-section"
                          initialContent="Agregar Footer"
                          sendComponent={handleComponent}
                          textColor="black"
                        />
                      ) : (
                        <RenderComponent data={masterJSON.footer[0]} />
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
