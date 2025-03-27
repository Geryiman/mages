import React from "react"; // Importa React
import Dialog from "@mui/material/Dialog"; // Componente de modal de MUI
import DialogContent from "@mui/material/DialogContent"; // Contenedor para el contenido del modal
import IconButton from "@mui/material/IconButton"; // Botón para cerrar el modal
import CloseIcon from "@mui/icons-material/Close"; // Icono para cerrar
import Box from "@mui/material/Box"; // Contenedor para la imagen

// Componente ImageModal que recibe como props la imagen y la función onClose
const ImageModal = ({ image, onClose }) => {
  if (!image) return null; // Si no hay imagen seleccionada, no se renderiza nada

  return (
    <Dialog open={Boolean(image)} onClose={onClose} maxWidth="lg">
      {/* Botón para cerrar el modal */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Box
          component="img"
          src={`${image.variants[2]}?w=750&h=750&fit=crop`}
          alt="Imagen ampliada"
          sx={{
            width: "100%", // La imagen ocupará todo el ancho del contenedor
            height: "auto", // La altura se ajusta manteniendo la proporción
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;