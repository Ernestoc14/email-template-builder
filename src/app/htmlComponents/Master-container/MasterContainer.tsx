import PropsModal from "@/app/components/PropsModal/PropsModal";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const MasterContainer = () => {
  const [componentName, setComponentName] = useState("Headers");
  const [componentVariant, setComponentVariant] = useState("");
  const [propsModalOpen, setPropsModalOpen] = useState(false);
  const [renderMCHTML, setRenderMCHTML] = useState(`
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
  `);

  useEffect(() => {
    const dropZones = document.querySelectorAll<HTMLElement>(
      "#header-logo, #header-section-bluebg, #body-section, #footer-section"
    );

    const handleDragOver = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      dropZone.style.border = "2px dashed yellow";
      dropZone.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
      // console.log("dragging somtn OVER " + (dropZone as HTMLElement)?.id);
    };

    const handleDragEnter = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      dropZone.style.border = "2px dashed blue";
      dropZone.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
      console.log("dragging somtn ENTER " + (dropZone as HTMLElement)?.id);
    };

    const handleDragEnd = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      dropZone.style.border = "1px solid red";
      dropZone.style.backgroundColor = "transparent";
      console.log("Drag has ENDED in " + (dropZone as HTMLElement)?.id);
    };

    const handleDragLeave = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      dropZone.style.border = "1px solid red";
      dropZone.style.backgroundColor = "transparent";
      console.log("LEAVING " + (dropZone as HTMLElement)?.id);
    };

    const handleDrop = (e: Event) => {
      const dragEvent = e as DragEvent;
      dragEvent.preventDefault();
      const dropZone = dragEvent.currentTarget as HTMLElement;
      const componentHTML = dragEvent.dataTransfer?.getData("HTML");
      const componentName = dragEvent.dataTransfer?.getData("Component");
      const componentVariant = dragEvent.dataTransfer?.getData("Variant");

      setComponentName(componentName || "");
      setComponentVariant(componentVariant || "");
      if (componentHTML !== null && componentHTML !== undefined) {
        try {
          const escapeRegex = (text: string) =>
            text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          const escapedId = escapeRegex(dropZone.id);
          const regex = new RegExp(
            `(<div[^>]*id=["']${escapedId}["'][^>]*>)([\\s\\S]*?)(</div>)`,
            "i"
          );
          const match = renderMCHTML.match(regex);
          console.log("Regex Match: ", match);
          if (match) {
            const updatedHTML = renderMCHTML.replace(
              regex,
              (match, p1, p2, p3) => {
                return `${p1}${componentHTML}${p3}`;
              }
            );
            console.log("Updated HTML: ", updatedHTML);
            setRenderMCHTML(updatedHTML);
            setPropsModalOpen(true);
          }
        } catch (error) {
          console.error("Error parsing component", error);
        }
      }
      dropZone.style.border = "1px solid red";
      dropZone.style.backgroundColor = "transparent";
    };

    // Agregamos los event con los tipos correctos
    dropZones.forEach((zone) => {
      zone.addEventListener("dragover", handleDragOver as EventListener);
      zone.addEventListener("dragenter", handleDragEnter as EventListener);
      zone.addEventListener("dragleave", handleDragLeave as EventListener);
      zone.addEventListener("drop", handleDrop as EventListener);
      zone.addEventListener("dragend", handleDragEnd as EventListener);
    });

    // Limpieza con los tipos correctos
    return () => {
      dropZones.forEach((zone) => {
        zone.removeEventListener("dragover", handleDragOver as EventListener);
        zone.removeEventListener("dragenter", handleDragEnter as EventListener);
        zone.removeEventListener("dragleave", handleDragLeave as EventListener);
        zone.removeEventListener("drop", handleDrop as EventListener);
        zone.removeEventListener("dragend", handleDragEnd as EventListener);
      });
    };
  }, [renderMCHTML]);

  return (
    <Box>
      <PropsModal
        isOpen={propsModalOpen}
        onClose={() => setPropsModalOpen(false)}
        componentName={componentName}
        componentVariant={componentVariant}
      />
      <div dangerouslySetInnerHTML={{ __html: renderMCHTML }} />
    </Box>
  );
};

export default MasterContainer;
