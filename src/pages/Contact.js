// React Import
import React from 'react';

// MUI Component Import
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

//Formik and Yup Import
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as emailjs from '@emailjs/browser';

emailjs.init(process.env.EMAIL_USER_ID);

const validationSchema = yup.object().shape({
  firstName: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: yup.string().max(20, 'Must be 20 characters or less').required(),
  email: yup.string().email('Invalid email address').required(),
  message: yup.string().required(),
});

export default function Contact() {
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [successOpen, setSuccessOpen] = React.useState(false);
    
    const handleClose = () => {
        setErrorOpen(false);
        setSuccessOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            try {
                emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, values, process.env.REACT_APP_EMAIL_USER_ID)
                .then(() => {
                    setSuccessOpen(true);
                    formik.setSubmitting(false);
                    formik.resetForm();
                })
            } catch {
                setErrorOpen(true);
                formik.setSubmitting(false);
            }
        },
    });
  
    return (
        <Paper elevation={1} padding={0} sx={{ width: '40vw', textAlign: 'center'}}>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h4">Contact Form</Typography>  
                <Grid container direction="row"  spacing={2} padding={2}>                    
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="column" spacing={2} padding={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        fullWidth
                        multiline
                        rows={5}
                        id="message"
                        name="message"
                        label="Message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" variant="contained"  type="submit">Send Message</Button>
                        <Dialog open={errorOpen} onClose={handleClose}>
                            <Alert severity="error">
                                <AlertTitle>Uh-Oh</AlertTitle>
                                Something went wrong, please try again!
                            </Alert>
                        </Dialog>
                        <Dialog open={successOpen} onClose={handleClose}>
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                Message has been sent!
                            </Alert>
                        </Dialog>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )      
};
