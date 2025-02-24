import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useState } from "react";
import { styled } from "@mui/material";
const CustomBackdrop = styled(Backdrop)({
  position: "absolute",
  background: "transparent",
});
export default function Loading() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <CustomBackdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </CustomBackdrop>
    </div>
  );
}
