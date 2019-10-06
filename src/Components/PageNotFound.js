import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'react-router-dom';

//Functional Component that displays a material UI alert dialog if the user enter a page that doesnt exist
function PageNotFound() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        window.location = '/'; //Redirect to the login page
    };

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Error 404, Page not Found"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Lo sentimos, la pagina que ingresaste no existe. Verifica que el URL que ingresaste este bien escrita.
                        Se te sera redirigido a la pagina de inicio de sesion.
                        Cualquier duda o consulta, comunicate con PlanMed
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Entendido
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withRouter(PageNotFound);