import * as React from 'react';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={ 6 } ref={ ref } variant="filled" { ...props } />;
});

const Snack = (props) => {
    const { open, onClose, type, message } = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        onClose();
    };

    return (
        <Snackbar open={ open } autoHideDuration={ 6000 } onClose={ handleClose }>
            <Alert onClose={ handleClose } severity={ type } sx={ { width: '100%' } }>
                { message }
            </Alert>
        </Snackbar>
    );
}

export default Snack;
