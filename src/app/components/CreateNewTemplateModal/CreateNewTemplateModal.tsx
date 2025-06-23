import {
    Box,
    Fade,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { CreateNewTemplateModalProps } from "./types";
import style from "./style";
import { getAllTemplates } from "@/app/utils/canvasUtils";
import { useState } from "react";

export const CreateNewTemplateModal = (props: CreateNewTemplateModalProps) => {
    const styles = style;
    const [inputError, setInputError] = useState(false);
    const thisTemplateExist = async (name: string) => {
        const templates = (await getAllTemplates()) ?? [];
        return templates.some((template) => template.name === name);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const templateExist = await thisTemplateExist(props.newTemplateName);
        if (!templateExist) {
            setInputError(true);
            props.setNewTemplateName(props.newTemplateName);
            props.onClose();
            props.sendName();
        } else {
            setInputError(true);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setNewTemplateName(e.target.value);
    };

    return (
        <Modal open={props.open} onClose={props.onClose} closeAfterTransition>
            <Fade in={props.open}>
                <Box sx={styles.container}>
                    <Box className="sub-container">
                        <Box className="header-section">
                            <IconButton className="back-icon" onClick={props.goBack}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Box sx={{ paddingLeft: 6 }}>
                                <Typography variant="h5" className="title">
                                    Create a New Template
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="form-section">
                            <form className="form" onSubmit={handleSubmit}>
                                <TextField
                                    id="template-name"
                                    label="Nombre del template"
                                    variant="outlined"
                                    required
                                    error={inputError}
                                    value={props.newTemplateName}
                                    onChange={handleChange}
                                    className="form-field"
                                    fullWidth
                                />
                                {inputError && (
                                    <Typography sx={styles.inputError}>
                                        *Este template ya existe
                                    </Typography>
                                )}
                                <Button type="submit" variant="contained" className="button">
                                    Create
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
