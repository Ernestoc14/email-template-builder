const style = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "95vw", sm: "85vw", md: "70vw", lg: "60vw", xl: "50vw" },
        maxWidth: "900px",
        maxHeight: "90vh",
        height: "80vh",
        bgcolor: "background.paper",
        borderRadius: "16px",
        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",

        ".sub-container": {
            display: "flex",
            flexDirection: "column",
            height: "100%",

            ".header-section": {
                background: "linear-gradient(135deg, #0032a0 0%, #00227b 50%, #e0e7ff 100%)",
                color: "white",
                position: "relative",
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",

                ".title": {
                    fontWeight: 600,
                    textAlign: "center",
                },

                ".subtitle": {
                    fontSize: "0.875rem",
                    opacity: 0.9,
                    margin: 0,
                    fontWeight: 400,
                },

                ".header-icon": {
                    fontSize: "28px",
                    opacity: 0.9,
                }
            },

            ".back-icon": {
                position: "absolute",
                top: "50%",
                left: "20px",
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                width: "44px",
                height: "44px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

                "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    transform: "translateY(-50%) scale(1.05)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                },

                "&:active": {
                    transform: "translateY(-50%) scale(0.95)",
                }
            },

            ".search-section": {
                padding: "20px 24px",
                borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                backgroundColor: "rgba(248, 250, 252, 0.8)",

                ".search-field": {
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        border: "2px solid transparent",

                        "&:hover": {
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                        },

                        "&.Mui-focused": {
                            borderColor: "#667eea",
                            boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
                        }
                    },

                    "& .MuiInputAdornment-root": {
                        color: "#94a3b8",
                    }
                }
            },

            ".content-section": {
                flex: 1,
                overflowY: "auto",
                padding: "8px",

                "&::-webkit-scrollbar": {
                    width: "6px",
                },

                "&::-webkit-scrollbar-track": {
                    background: "rgba(0, 0, 0, 0.05)",
                    borderRadius: "3px",
                },

                "&::-webkit-scrollbar-thumb": {
                    background: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "3px",

                    "&:hover": {
                        background: "rgba(0, 0, 0, 0.3)",
                    }
                }
            },

            ".templates-list": {
                width: "100%",
                padding: "16px",

                ".template-card": {
                    backgroundColor: "white",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    borderRadius: "16px",
                    marginBottom: "16px",
                    overflow: "hidden",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #0032a0, #e0e7ff)",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.3s ease",
                    },

                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
                        borderColor: "#667eea",

                        "&::before": {
                            transform: "scaleX(1)",
                        }
                    }
                },

                ".template-item": {
                    padding: "24px",

                    ".template-box": {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        width: "100%",
                        gap: "20px",

                        ".template-content": {
                            flex: 1,

                            ".template-name": {
                                fontSize: "1.125rem",
                                fontWeight: 600,
                                color: "#1e293b",
                                marginBottom: "12px",
                                lineHeight: 1.2,
                            },

                            ".template-dates": {
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",

                                ".date-row": {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontSize: "12px",
                                    color: "#333333",

                                    ".date-icon": {
                                        fontSize: "16px",
                                        opacity: 0.7,
                                    }
                                }
                            },

                            ".time-chip": {
                                marginTop: "12px",

                                ".MuiChip-root": {
                                    backgroundColor: "rgba(75, 107, 246, 0.2)",
                                    color: "#333333",
                                    fontSize: "0.75rem",
                                    height: "24px",
                                    borderRadius: "12px",
                                    fontWeight: 500,
                                }
                            }
                        },

                        ".button-container": {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            minWidth: "140px",
                            height: "125px",
                        },

                        ".button": {
                            background: "#0032a0",
                            color: "white",
                            borderRadius: "12px",
                            padding: "12px 24px",
                            fontWeight: 600,
                            textTransform: "none",
                            fontSize: "16px",
                            minWidth: "120px",
                            boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

                            "&:hover": {
                                boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
                                background: "#00227b",
                            },

                            "&:active": {
                                transform: "translateY(0)",
                            },

                            "&.loading": {
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                opacity: 0.8,
                                cursor: "not-allowed",

                                ".loading-spinner": {
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    border: "2px solid rgba(255, 255, 255, 0.3)",
                                    borderTop: "2px solid white",
                                    borderRadius: "50%",
                                    marginRight: "8px",
                                    animation: "spin 1s linear infinite",

                                    "@keyframes spin": {
                                        "0%": { transform: "rotate(0deg)" },
                                        "100%": { transform: "rotate(360deg)" }
                                    }
                                }
                            }
                        }
                    }
                }
            },

            ".empty-state": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px 24px",
                color: "#64748b",
                textAlign: "center",

                ".empty-icon": {
                    fontSize: "64px",
                    opacity: 0.3,
                    marginBottom: "20px",
                },

                ".empty-title": {
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "#374151",
                },

                ".empty-description": {
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    maxWidth: "300px",
                }
            },

            ".loading-skeleton": {
                padding: "16px",

                ".skeleton-card": {
                    backgroundColor: "white",
                    borderRadius: "16px",
                    padding: "24px",
                    marginBottom: "16px",
                    border: "1px solid rgba(0, 0, 0, 0.08)",

                    ".skeleton-header": {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "16px",
                    },

                    ".skeleton-content": {
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }
                }
            }
        }
    }
};

export default style;
