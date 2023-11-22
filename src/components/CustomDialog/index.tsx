import { PropsWithChildren } from "react";
import { Dialog, DialogContent, DialogTitle, DialogProps, Button } from "@mui/material";
import React from "react";
import './style.css';

type Props = {
    open: boolean,
    title: string,
    onClose: (event: {}) => void;
} & Partial<DialogProps>;

const CustomDialog = ({
    title,
    children,
    onClose,
    ...otherProps
}: PropsWithChildren<Props>) => {

    return (
        <Dialog {...otherProps} maxWidth={"lg"} className="dialog">
            <DialogTitle>
                <div className="dialog-title">
                    {title}
                </div>
            </DialogTitle>
            <DialogContent>
                <br/>
                {children}
                <br/>
                <Button onClick={onClose}>
                    Close
                </Button>
            </DialogContent>
        </Dialog>
    )
};

export default CustomDialog;