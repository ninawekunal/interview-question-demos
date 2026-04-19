import { Close } from "@mui/icons-material";
import { Button, IconButton, Snackbar } from "@mui/material";
import { Fragment, useState } from "react";

export default function SimpleSnackbar() {
  const [open, setOpen] = useState(false);

  const handleClose = (event: React.SyntheticEvent | Event) => {
    setOpen(false);
  };

  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      action={action}
    />
  );
}
