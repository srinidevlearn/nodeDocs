import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function DocImages({ url }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1250,
    bgcolor: "background.paper",
    border: "1px solid #fff",
    boxShadow: 14,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Import result is the URL of your image
  return (
    <>
      <img style={{cursor:'pointer'}} src={useBaseUrl(url)} alt="images" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img src={useBaseUrl(url)} alt="images"/>
        </Box>
      </Modal>
    </>
  );
}

export default DocImages;
