// React Import
import React from 'react';

// MUI Component Import
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//Formik and Yup Import
import { useFormik } from 'formik';
import * as yup from 'yup';



const validationSchema = yup.object().shape({
  firstName: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: yup.string().max(20, 'Must be 20 characters or less').required(),
  email: yup.string().email('Invalid email address').required(),
  message: yup.string().required(),
});

export default function Contact() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 4))
        },
    });
  
    return (
        <Box mt={10} display="flex" alignItems="center" justifyContent="center">
            <Paper elevation={1} padding={10} sx={{ width: '80vw', textAlign: 'center'}}>
                <form onSubmit={formik.handleSubmit}>
                    <Typography variant="h2">Contact Form</Typography>  
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
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    )      
};
