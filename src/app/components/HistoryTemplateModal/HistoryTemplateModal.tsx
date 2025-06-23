import style from "./style";
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    Modal,
    Typography,
    TextField,
    InputAdornment,
    Chip,
    Fade,
    Skeleton,
} from "@mui/material";
import {
    Search as SearchIcon,
    ArrowBack as ArrowBackIcon,
    CalendarToday as CalendarIcon,
    Edit as EditIcon,
    Description as DescriptionIcon,
} from "@mui/icons-material";
import { HistoryTemplateModalProps, HistoryTemplates } from "./types";
import { useEffect, useState, useMemo } from "react";
import { getAllTemplates } from "@/app/utils/canvasUtils";

export const HistoryTemplateModal = (props: HistoryTemplateModalProps) => {
    const styles = style;
    const [historyTemplates, setHistoryTemplates] = useState<HistoryTemplates[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [loadingTemplate, setLoadingTemplate] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTemplates() {
            if (!props.open) return;

            setIsLoading(true);
            try {
                const templates = (await getAllTemplates()) ?? [];
                templates.sort(
                    (a, b) =>
                        new Date(b.dateModified).getTime() -
                        new Date(a.dateModified).getTime()
                );
                setHistoryTemplates(templates);
            } catch (error) {
                console.error("Error fetching templates:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchTemplates();
    }, [props.open]);

    const filteredTemplates = useMemo(() => {
        return historyTemplates.filter((template) =>
            template.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [historyTemplates, searchTerm]);

    const handleSubmit = async (templateName: string) => {
        setLoadingTemplate(templateName);

        setTimeout(() => {
            props.setNewTemplateName(templateName);
            props.onClose();
            props.sendName();
            setLoadingTemplate(null);
        }, 800);
    };

    const formatDate = (date: Date) => {
        return date.toLocaleString("en-US", {
            timeZone: "America/Panama",
            year: "numeric",
            month: "short",
            day: "2-digit",
        });
    };

    const formatTime = (date: Date) => {
        return date.toLocaleString("en-US", {
            timeZone: "America/Panama",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    const getTimeAgo = (date: Date) => {
        const now = new Date();
        const diffInHours = Math.floor(
            (now.getTime() - date.getTime()) / (1000 * 60 * 60)
        );

        if (diffInHours < 1) return "Hace menos de 1 hora";
        if (diffInHours < 24) return `Hace ${diffInHours} horas`;
        if (diffInHours < 48) return "Ayer";

        const diffInDays = Math.floor(diffInHours / 24);
        return `Hace ${diffInDays} días`;
    };

    const renderLoadingSkeletons = () => (
        <Box className="loading-skeleton">
            {[...Array(3)].map((_, index) => (
                <Box key={index} className="skeleton-card">
                    <Box className="skeleton-header">
                        <Box>
                            <Skeleton variant="text" width={200} height={28} />
                            <Skeleton
                                variant="rectangular"
                                width={100}
                                height={20}
                                sx={{ mt: 1, borderRadius: 1 }}
                            />
                        </Box>
                        <Skeleton
                            variant="rectangular"
                            width={120}
                            height={40}
                            sx={{ borderRadius: 2 }}
                        />
                    </Box>
                    <Box className="skeleton-content">
                        <Skeleton variant="text" width="80%" />
                        <Skeleton variant="text" width="60%" />
                    </Box>
                </Box>
            ))}
        </Box>
    );

    const renderEmptyState = () => (
        <Box className="empty-state">
            <DescriptionIcon className="empty-icon" />
            <Typography className="empty-title">
                {searchTerm
                    ? "No se encontraron plantillas"
                    : "No hay plantillas disponibles"}
            </Typography>
            <Typography className="empty-description">
                {searchTerm
                    ? "Intenta con otros términos de búsqueda"
                    : "Crea tu primera plantilla para verla aquí"}
            </Typography>
        </Box>
    );

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
                                    History Templates
                                </Typography>
                                <Typography className="subtitle">
                                    {historyTemplates.length} plantillas disponibles
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="search-section">
                            <TextField
                                className="search-field"
                                fullWidth
                                placeholder="Buscar plantillas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        <Box className="content-section">
                            {isLoading ? (
                                renderLoadingSkeletons()
                            ) : filteredTemplates.length === 0 ? (
                                renderEmptyState()
                            ) : (
                                <List className="templates-list">
                                    {filteredTemplates.map((template, index) => (
                                        <Fade in key={template.name} timeout={300 + index * 100}>
                                            <Box className="template-card">
                                                <ListItem className="template-item">
                                                    <Box className="template-box">
                                                        <Box className="template-content">
                                                            <Typography className="template-name">
                                                                {template.name}
                                                            </Typography>

                                                            <Box className="template-dates">
                                                                <Box className="date-row">
                                                                    <CalendarIcon className="date-icon" />
                                                                    <Typography component="span" fontWeight={600}>
                                                                        Creado:{" "}
                                                                    </Typography>
                                                                    <Typography component="span">
                                                                        {formatDate(template.dateCreated)}
                                                                    </Typography>
                                                                    <Typography component="span">
                                                                        - {formatTime(template.dateCreated)}
                                                                    </Typography>
                                                                </Box>
                                                                <Box className="date-row">
                                                                    <EditIcon className="date-icon" />
                                                                    <Typography component="span" fontWeight={600}>
                                                                        Modificado:{" "}
                                                                    </Typography>
                                                                    <Typography component="span">
                                                                        {formatDate(template.dateModified)}
                                                                    </Typography>
                                                                    <Typography component="span">
                                                                        - {formatTime(template.dateModified)}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>

                                                            <Box className="time-chip">
                                                                <Chip
                                                                    label={getTimeAgo(template.dateModified)}
                                                                    size="small"
                                                                />
                                                            </Box>
                                                        </Box>

                                                        <Box className="button-container">
                                                            <Button
                                                                variant="contained"
                                                                className={`button ${loadingTemplate === template.name
                                                                        ? "loading"
                                                                        : ""
                                                                    }`}
                                                                onClick={() => handleSubmit(template.name)}
                                                                disabled={loadingTemplate === template.name}
                                                            >
                                                                {loadingTemplate === template.name ? (
                                                                    <>
                                                                        <Box className="loading-spinner" />
                                                                        Cargando...
                                                                    </>
                                                                ) : (
                                                                    "Cargar Template"
                                                                )}
                                                            </Button>
                                                        </Box>
                                                    </Box>
                                                </ListItem>
                                            </Box>
                                        </Fade>
                                    ))}
                                </List>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
