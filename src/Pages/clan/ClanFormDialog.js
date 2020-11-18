import { Dialog, DialogContent } from "@material-ui/core";
import React from "react";
import { ClanForm } from "./ClanForm";

export const ClanFormDialog = ({ open, onClose, ...rest }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <ClanForm isEdit {...rest} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};
