import { Component, useMasterJSON } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";
import DropZone from "@/app/components/DropZone/DropZone";
import { RenderComponent } from "@/app/components/RenderComponent/RenderComponent";
import Image from "next/image";



const SectionContainers = ({sendComponent, data}: { sendComponent: (component: Component, dropZoneId?: string) => void , data:Component}) => {
  const { language} =useLanguage()
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as 'es' |'en' | 'pt' | "fr"
  }Props`;
  const { masterJSON } = useMasterJSON();

    const handleComponent = (component: Component, dropZoneId?: string) => {
      console.log("DropZone ID SECTIONCM", dropZoneId);
      sendComponent(component, dropZoneId);
    };

  switch (data.variant) {
    case "Center Section":
      return (<table
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        border={0}
        style={{
          margin: 0,
          width: "100%",
          backgroundColor: "#fcfcfc",
          borderCollapse: "collapse",
          borderRadius: "8px",
        }}
      >
        {/* Start */}
        <tbody>
        <tr>
          <td align="center" style={{ fontSize: 14, padding: "16px 48px" }} className="mobile-padding">
            {/* Start Section Title */}
            <table align="center" cellPadding={0} cellSpacing={0} border={0} style={{ width: "auto" }}>
              <tbody>
                <tr style={{ height: "100%" }} className="title-info-reorder">
                  <td style={{ width: 48 }}>
                    <Image
                      src={
                        // @ts-expect-error does not exist
                        data[langProp].imageURL
                      }
                      style={{
                        width: 48,
                        height: "auto",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        outline: "none",
                        textDecoration: "none",
                        display: "block",
                      }}
                      className="card-logo remove-title-image"
                      alt="card logo"
                      width={48}
                      height={48}
                    />
                  </td>
                  <td>
                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                      <tbody>
                        <tr>
                        <td
                          align="center"
                          style={{
                            color: "#0032a0",
                            padding: "0 8px",
                            verticalAlign: "middle",
                            fontSize: 20,
                            fontWeight: 700,
                            margin: 0,
                            fontFamily: "Gilroy, Arial, Helvetica, sans-serif",
                            whiteSpace: "nowrap",
                          }}
                          className="title-info-reorder title-mobile-padding"
                        >
                          {
                            // @ts-expect-error does not exist
                            data[langProp].title
                          }
                        </td>
                        <td
                          style={{ alignItems: "center", color: "#666666", verticalAlign: "middle", whiteSpace: "nowrap" }}
                          className="title-info-reorder"
                        >
                          <span className="remove-span-info">·</span>
                          <span style={{ padding: "0 8px", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif" }}>
                            {
                              // @ts-expect-error does not exist
                              data[langProp].infoLeft
                            }</span>
                          <span>·</span>
                          <span style={{ paddingLeft: 8, fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif" }}>
                            {
                              // @ts-expect-error does not exist
                              data[langProp].infoRight
                            }</span>
                        </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* End Section Title */}
          </td>
        </tr>
        </tbody>
        {/* Start Divider */}
        <tbody>
        <tr>
          <td className="divider-mobile-spacing"
            style={{ borderBottom: "1px solid #cccccb", width: "100%", maxHeight: 1, height: 1, lineHeight: 0 }}
          >
            &nbsp;
          </td>
        </tr>
        </tbody>
        {/* End Divider */}
        <tbody>
        <tr>
          <td>
            {/* Start Content Area Cmp */}
            <table
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              border={0}
              style={{
                margin: 0,
                width: "100%",
                backgroundColor: "#fcfcfc",
                borderCollapse: "collapse",
                borderBottomLeftRadius: "9px",
                borderBottomRightRadius: "9px",
              }}
            >
              <tbody>
              <tr>
                <td style={{ padding: 32 }} className="content-area-mobile-padding">
                  <table cellSpacing={0} cellPadding={0} style={{ margin: "auto", width: "100%" }}>
                    <tbody>
                    <tr>
                    <td align="center" style={{ color: '#0032a0', border: '1px solid #cccccb', borderRadius: '6px' }}>
            {masterJSON.body.sectionComponents[0].components.length === 0 ? (
              <DropZone 
                id="section-container-dropzone"
                initialContent="Agregar DropZone de Section Container"
                sendComponent={handleComponent}
                textColor="red"
                />
            ) : (
              <>
              <h1>
                { // @ts-expect-error does not exist
                data[langProp].title}
              </h1>
                {masterJSON.body.sectionComponents[0].components.map((component, index) => (
                  <RenderComponent
                    key={ index}
                    data={component}
                    sendComponent={handleComponent}
                  />
                ))}
                <DropZone
                  id="section-container-dropzone"
                  initialContent="Agregar DropZone de Section Container"
                  sendComponent={handleComponent}
                  textColor="red"
                />
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
            {/* End Content Area Cmp */}
          </td>
        </tr>
        </tbody>
      </table>)
    case "Center Title Section":
      return  (
        <table
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      border={0}
      style={{
        margin: 0,
        width: "100%",
        backgroundColor: "#fcfcfc",
        borderCollapse: "collapse",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <tbody>
      <tr>
        <td align="center" style={{ fontSize: 14, padding: "16px" }} className="section-title-mobile-padding">
          {/* Start Title Cmp */}
          <table align="center" cellPadding={0} cellSpacing={0} border={0} style={{ width: "auto" }}>
            <tbody>
              <tr style={{ height: "100%" }} className="title-info-reorder">
                <td style={{ width: 48 }}>
                  <Image
                    src={
                      // @ts-expect-error does not exist
                      data[langProp].imageURL}
                    style={{
                      width: 48,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      height: "auto",
                      outline: "none",
                      textDecoration: "none",
                      display: "block",
                    }}
                    className="card-logo remove-title-image"
                    alt="card logo"
                    width={48}
                    height={48}
                  />
                </td>
                <td>
                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                    <tbody>
                    <tr>
                      <td
                        align="center"
                        style={{
                          color: "#0032a0",
                          padding: "0 8px",
                          verticalAlign: "middle",
                          fontSize: 20,
                          fontWeight: 700,
                          margin: 0,
                          fontFamily: "Gilroy, Arial, Helvetica, sans-serif",
                          whiteSpace: "nowrap",
                        }}
                        className="title-info-reorder title-mobile-padding"
                      >
                        {
                          // @ts-expect-error does not exist
                          data[langProp].title
                      }
                      </td>
                      <td
                        style={{ alignItems: "center", color: "#666666", verticalAlign: "middle", whiteSpace: "nowrap" }}
                        className="title-info-reorder"
                      >
                        <span className="remove-span-info">·</span>
                        <span style={{ padding: "0 8px", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif" }}>
                          { // @ts-expect-error does not exist
                          data[langProp].infoLeft}
                          </span>
                        <span>·</span>
                        <span style={{ paddingLeft: 8, fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif" }}>
                          { // @ts-expect-error does not exist
                          data[langProp].infoRight
                          }
                        </span>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* End Title Cmp */}
        </td>
      </tr>
      </tbody>
      {/* Start Divider */}
      <tbody>
      <tr>
        <td
          className="divider-mobile-spacing"
          style={{ borderBottom: "1px solid #cccccb", width: "100%", maxHeight: 1, height: 1, lineHeight: 0 }}
        >
          &nbsp;
        </td>
      </tr>
      </tbody>
    </table>
      )
    case "Content Section":
      return(
        <table cellSpacing={0} cellPadding={0} style={{ margin: 'auto', width: '100%' }}>
      <tbody>
        <tr>
          <td align="center" style={{ color: '#0032a0', border: '1px solid #cccccb', borderRadius: '6px' }}>
            {masterJSON.body.sectionComponents[0].components.length === 0 ? (
              <DropZone 
                id="body-section"
                initialContent="Agregar DropZone de Section Container"
                sendComponent={(component) =>handleComponent(component)}
                textColor="red"
                dropZoneId="body-section"
                />
            ) : (
              <>
              <h1>
                { // @ts-expect-error does not exist
                data[langProp].title}
              </h1>
                {masterJSON.body.sectionComponents[0].components.map((component, index) => (
                  <RenderComponent
                    key={ index}
                    data={component}
                    sendComponent={handleComponent}
                    
                  />
                ))}
                <DropZone
                  id="body-section"
                  initialContent="Agregar DropZone de Section Container"
                  sendComponent={(component) =>handleComponent(component)}
                  textColor="red"
                  dropZoneId="body-section"
                />
              </>
            )
            }
          </td>
        </tr>
      </tbody>
    </table>
      );
    case "Left Section":
        return (
          <table
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      border={0}
      style={{
        margin: 0,
        width: "100%",
        backgroundColor: "#fcfcfc",
        borderCollapse: "collapse",
        borderRadius: "8px",
      }}
    >
      <tbody>
      <tr>
        <td style={{ fontSize: 14, padding: "16px 48px" }} className="mobile-padding">
          {/* Start Section Title */}
          <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "auto" }}>
            <tbody>
              <tr style={{ height: "100%" }} className="title-info-reorder">
                <td style={{ width: 48 }}>
                  <img
                    src={
                      // @ts-expect-error does not exist
                      data[langProp].imageURL}
                    style={{
                      width: 48,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      height: "auto",
                      outline: "none",
                      textDecoration: "none",
                      display: "block",
                    }}
                    className="card-logo remove-title-image"
                    alt="card logo"
                    width={48}
                  />
                </td>
                <td>
                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                    <tbody>
                    <tr>
                      <td
                        align="center"
                        style={{
                          color: "#0032a0",
                          padding: "0 8px",
                          verticalAlign: "middle",
                          fontSize: 20,
                          fontWeight: 700,
                          margin: 0,
                          fontFamily: "Gilroy, Arial, Helvetica, sans-serif",
                          whiteSpace: "nowrap",
                        }}
                        className="title-info-reorder title-mobile-padding"
                      >
                        {
                        // @ts-expect-error does not exist
                        data[langProp].title}
                      </td>
                      <td
                        style={{ alignItems: "center", color: "#666666", verticalAlign: "middle", whiteSpace: "nowrap" }}
                        className="title-info-reorder"
                      >
                        <span className="remove-span-info">·</span>
                        <span style={{ padding: "0 8px", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif" }}>
                          {// @ts-expect-error does not exist
                          data[langProp].infoLeft
                          }
                          </span>
                        <span>·</span>
                        <span style={{ paddingLeft: 8, fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif" }}>
                          { // @ts-expect-error does not exist
                          data[langProp].infoRight}
                          </span>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* End Section Title */}
        </td>
      </tr>
      </tbody>
      {/* Start Divider */}
      <tbody>
      <tr>
        <td
          className="divider-mobile-spacing"
          style={{ borderBottom: "1px solid #cccccb", width: "100%", maxHeight: 1, height: 1, lineHeight: 0 }}
        >
          &nbsp;
        </td>
      </tr>
      </tbody>
      {/* End Divider */}
      <tbody>
      <tr>
        <td>
          {/* Start Content Area Cmp */}
          <table
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={{
              margin: 0,
              width: "100%",
              backgroundColor: "#fcfcfc",
              borderCollapse: "collapse",
              borderBottomLeftRadius: "9px",
              borderBottomRightRadius: "9px",
            }}
          >
            <tbody>
            <tr>
              <td style={{ padding: "32px" }} className="content-area-mobile-padding">
                <table cellSpacing={0} cellPadding={0} style={{ margin: "auto", width: "100%", minHeight: "500px" }}>
                  <tbody>
                  <tr>
                  <td align="center" style={{ color: '#0032a0', border: '1px solid #cccccb', borderRadius: '6px' }}>
            {masterJSON.body.sectionComponents[0].components.length === 0 ? (
              <DropZone 
                id="section-container-dropzone"
                initialContent="Agregar DropZone de Section Container"
                sendComponent={handleComponent}
                textColor="red"
                />
            ) : (
              <>
              <h1>
                { // @ts-expect-error does not exist
                data[langProp].title}
              </h1>
                {masterJSON.body.sectionComponents[0].components.map((component, index) => (
                  <RenderComponent
                    key={ index}
                    data={component}
                    sendComponent={handleComponent}
                  />
                ))}
                <DropZone
                  id="section-container-dropzone"
                  initialContent="Agregar DropZone de Section Container"
                  sendComponent={handleComponent}
                  textColor="red"
                />
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
          {/* End Content Area Cmp */}
        </td>
      </tr>
      </tbody>
    </table>
        )
    case "Left Title Section":
      return (
        <table
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      border={0}
      style={{
        margin: 0,
        width: "100%",
        backgroundColor: "#fcfcfc",
        borderCollapse: "collapse",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <tbody>
      <tr>
        <td style={{ fontSize: 14, padding: "16px" }} className="section-title-mobile-padding">
          {/* Start Title Cmp */}
          <table align="center" cellPadding={0} cellSpacing={0} border={0} style={{ width: "auto" }}>
            <tbody>
              <tr style={{ height: "100%" }} className="title-info-reorder">
                <td style={{ width: 48 }}>
                  <img
                    src={
                      // @ts-expect-error does not exist
                      data[langProp].imageURL}
                    style={{
                      width: 48,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      height: "auto",
                      outline: "none",
                      textDecoration: "none",
                      display: "block",
                    }}
                    className="card-logo remove-title-image"
                    alt="card logo"
                    width={48}
                  />
                </td>
                <td>
                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                    <tbody>
                    <tr>
                      <td
                        align="center"
                        style={{
                          color: "#0032a0",
                          padding: "0 8px",
                          verticalAlign: "middle",
                          fontSize: 20,
                          fontWeight: 700,
                          margin: 0,
                          fontFamily: "Gilroy, Arial, Helvetica, sans-serif",
                          whiteSpace: "nowrap",
                        }}
                        className="title-info-reorder title-mobile-padding"
                      >
                        {
                        // @ts-expect-error does not exist
                        data[langProp].title}
                      </td>
                      <td
                        style={{ alignItems: "center", color: "#666666", verticalAlign: "middle", whiteSpace: "nowrap" }}
                        className="title-info-reorder"
                      >
                        <span className="remove-span-info">·</span>
                        <span style={{ padding: "0 8px", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif" }}>
                          {
                            // @ts-expect-error does not exist
                          data[langProp].infoLeft}
                          </span>
                        <span>·</span>
                        <span style={{ paddingLeft: 8, fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif" }}>
                          {
                          // @ts-expect-error does not exist
                          data[langProp].infoRight}
                        </span>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* End Title Cmp */}
        </td>
      </tr>
      </tbody>
      {/* Start Divider */}
      <tbody>
      <tr>
        <td
          className="divider-mobile-spacing"
          style={{ borderBottom: "1px solid #cccccb", width: "100%", maxHeight: 1, height: 1, lineHeight: 0 }}
        >
          &nbsp;
        </td>
      </tr>
      </tbody>
    </table>
      )
    }
}

export default SectionContainers;