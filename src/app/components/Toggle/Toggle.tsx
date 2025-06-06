import { FormControlLabel, FormGroup } from "@mui/material"
import { MaterialUISwitch } from "./style"
import { useCanvasModeContext } from "@/app/context/CanvasModeContext"
import { SyntheticEvent } from "react"

const Toggle = () =>{
    const {mode, setMode} = useCanvasModeContext()

    const handleChange = (_event: SyntheticEvent<Element, Event>, checked: boolean) => {
        setMode(checked)
    }
    
    return (
        <FormGroup>
            <FormControlLabel
                onChange={handleChange}
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label={mode ? 'Edit Mode' : 'Preview Mode'}
                slotProps={{typography:{
                    fontFamily: "SuisseIntl, Arial, Helvetica, sans-serif",
                    fontWeight: "600",
                    color: "#0032A0"
                }}}
            />
        </FormGroup>
    )
}

export default Toggle