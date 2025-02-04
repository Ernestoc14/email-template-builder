import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { PropsModalProps } from "./types";

const PropsModal = ({
  isOpen,
  onClose,
  componentName,
  componentVariant,
}: PropsModalProps) => (
  <Modal open={isOpen} onClose={() => onClose}>
    <Box
      sx={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        gap: 2,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        bgcolor: "background.paper",
        borderRadius: 1,
        boxShadow: 24,
        padding: 2,
      }}
    >
      <Typography variant="h6" component="h2">
        Entrada de Props para {componentVariant} de {componentName}
      </Typography>
        {/* {Object.keys(props).map((prop, index) => (
          <TextField
            key={index}
            id={prop}
            label={prop}
            value={props[prop]}
            onChange={(e) => onChange(e, prop)}
          />
        ))} */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ mt: 2 }}
        />
        </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, alignSelf: "flex-end" }}
        onClick={() => onClose}
      >
        Cerrar
      </Button>
    </Box>
  </Modal>
);

export default PropsModal;
