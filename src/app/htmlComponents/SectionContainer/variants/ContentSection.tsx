import DropZone from "@/app/components/DropZone/DropZone"
import { RenderComponent } from "@/app/components/RenderComponent/RenderComponent"
import { useCanvasModeContext } from "@/app/context/CanvasModeContext";
import { Component, SectionComponent } from "@/app/context/MasterJSONContext"
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

    const getStyles = (isResponsive: boolean | undefined) => {
        return {
            container: {
                ".content-section-table":{
                    margin: 'auto',
                    width: '100%',
                },
                ".section-container-padding":{
                    color: '#0032a0',
                    borderRadius: '6px',
                    padding: isResponsive ? "0px 16px 24px" :  "0px 60px 24px",
                }
            }
        }
    }

const ContentSection = ({data, isResponsiveView, sendComponent, sectionContainerOnDelete, onEdit} : {data: SectionComponent, isResponsiveView?:boolean, sendComponent: (component: Component, sectionID: string, sectionContainerId: string) => void ,sectionContainerOnDelete: (section: string, sectionComponentId: string,  componentId: string) => void, onEdit: ( section: string, componentId: string, sectionComponentId?: string) => void}) => {
    const { mode } = useCanvasModeContext();
    const [styles, setStyle] = useState(getStyles(isResponsiveView))
    
    const handleComponent = (component: Component, sectionID: string) => {
        sendComponent(component, sectionID, data.sectionComponentId);
    };
    
    const handleDelete = (section: string, componentId: string) => {
        sectionContainerOnDelete(section, componentId, data.sectionComponentId)
    }
    
    const handleEdit = (section: string, componentId: string, ) =>{
        onEdit(section, componentId, data.sectionComponentId )
    }

    useEffect(() => {
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])

    return (
        <Box sx={styles.container}>
            <table cellSpacing={0} cellPadding={0} className="content-section-table">
                <tbody>
                    <tr>
                        <td className="section-container-padding" align="center">
                            { data.components.map((component, index)=>(
                                <RenderComponent id="dropzone-section-container" key={component.componentId + index} data={component} onDelete={handleDelete} onEdit={handleEdit} isResponsiveView={isResponsiveView}/>
                            ))}
                            {mode && (
                                <DropZone id="dropzone-section-container" sendComponent={handleComponent} textColor="green" text="Drag a Component" isSectionContainer/>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}

export default ContentSection