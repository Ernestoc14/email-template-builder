import React, { useState } from "react";
import DropZone from "@/app/components/DropZone/DropZone";
import { RenderComponent } from "@/app/components/RenderComponent/RenderComponent";
import { Component, masterJSONType } from "@/app/components/Canva/Canva";

export interface MasterContainerProps {
  masterJSON: masterJSONType;
  sendComponent: (component: Component) => void;
}

const MasterContainer = ({
  masterJSON,
  sendComponent,
}: MasterContainerProps) => {
  const [componentName, setComponentName] = useState("");
  const [componentVariant, setComponentVariant] = useState("");

  const handleComponent = (component: Component) => {
    sendComponent(component);
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
                              className="logo-header-padding"
                              style={{ padding: "32px 32px 0" }}
                            >
                              {masterJSON.header.length === 0 ? (
                                <DropZone
                                  id="header-logo"
                                  initialContent="Agregar Header"
                                  componentName={componentName}
                                  setComponentName={setComponentName}
                                  componentVariant={componentVariant}
                                  setComponentVariant={setComponentVariant}
                                  sendComponent={handleComponent}
                                />
                              ) : (
                                <RenderComponent
                                  componentName={
                                    masterJSON.header[0].componentName
                                  }
                                  componentVariant={
                                    masterJSON.header[0].variant
                                  }
                                />
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
                              className="mobile-padding"
                              style={{
                                backgroundColor: "#0032A0",
                                padding: "32px 72px",
                              }}
                            >
                              {masterJSON.boxAzul.components.length === 0 ? (
                                <DropZone
                                  id="header-section-bluebg"
                                  initialContent="Agregar Header Section"
                                  componentName={componentName}
                                  setComponentName={setComponentName}
                                  componentVariant={componentVariant}
                                  setComponentVariant={setComponentVariant}
                                  sendComponent={handleComponent}
                                />
                              ) : (
                                <>
                                  {masterJSON.boxAzul.components.map(
                                    (component, index) => (
                                      <RenderComponent
                                        key={index}
                                        componentName={component.componentName}
                                        componentVariant={component.variant}
                                      />
                                    )
                                  )}
                                  <DropZone
                                    id="header-section-bluebg"
                                    initialContent="Agregar Mas Componentes"
                                    componentName={componentName}
                                    setComponentName={setComponentName}
                                    componentVariant={componentVariant}
                                    setComponentVariant={setComponentVariant}
                                    sendComponent={handleComponent}
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
                    <td className="mobile-padding" style={{ padding: "32px" }}>
                      <DropZone
                        id="body-section"
                        initialContent="Agregar Body Section"
                        componentName={componentName}
                        setComponentName={setComponentName}
                        componentVariant={componentVariant}
                        setComponentVariant={setComponentVariant}
                        sendComponent={handleComponent}
                        textColor="black"
                      />
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
                      className="mobile-padding"
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
                          componentName={componentName}
                          setComponentName={setComponentName}
                          componentVariant={componentVariant}
                          setComponentVariant={setComponentVariant}
                          sendComponent={handleComponent}
                          textColor="black"
                        />
                      ) : (
                        <RenderComponent
                          componentName={masterJSON.footer[0].componentName}
                          componentVariant={masterJSON.footer[0].variant}
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
    </div>
  );
};

export default MasterContainer;
