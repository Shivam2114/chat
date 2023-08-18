import { Button, Drawer, Box, Typography } from '@mui/material'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { CloseSharp, Email, Lock, Person } from '@mui/icons-material';
import { db } from '../Firebase';
import { addDoc, collection } from 'firebase/firestore';

const AddUser = ({ open, handleClose }) => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    const handleClosee = () => {
        handleClose()

    }
    const handleSubmit = async (values, resetForm) => {
        // Handle form submission here

        // try {
        //     const userCredential = await createUserWithEmailAndPassword(
        //         auth,
        //         email,
        //         password
        //     );
        //     const update = await updateProfile(auth.currentUser, {
        //         displayName: username,
        //     });

        //     const user = userCredential.user;

        //     setDoc(doc(db, "users", user.uid), {
        //         username: values.name,
        //         email: values.email,
        //         userId: user.uid,
        //         timestamp: new Date(),
        //     });


        // } catch (error) {
        //     alert(error.message);
        // }
    };
    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={handleClose}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <Box sx={{ p: 3 }}>
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h6'> <b> ADD USER</b></Typography>
                    <IconButton onClick={handleClose}>
                        <CloseSharp />
                    </IconButton>

                </Box>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ handleSubmit, handleChange, resetForm }) => (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <TextField

                                    name="name"
                                    type="text"
                                    label="Name"
                                    sx={{ mb: 2 }}
                                    onChange={handleChange}
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="email"
                                    type="email"
                                    label="Email"
                                    onChange={handleChange}
                                    sx={{ mb: 2 }}
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    sx={{ mb: 2 }}
                                    name="password"
                                    type="password"
                                    label="Password"
                                    onChange={handleChange}
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div>
                                <Button variant='contained' type="submit" color='warning'>Submit</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Box>

        </Drawer>
    )
}

export default AddUser