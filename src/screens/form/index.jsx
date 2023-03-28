import {Box,Button,TextField} from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'


const phoneRegExp = /^(0|91)?[6-9][0-9]{9}$/;
const initialValues={
    firstName:'',
    lastName:'',
    email:'',
    contact:'',
    address:'',
}
const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email("Invalid Email").required('required'),
    contact: yup.string().matches(phoneRegExp,"Enter valid Phone Number").required('required'),
    address: yup.string().required('required'),
})
const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)')

    const handleFormSubmit = (values) => {
        console.log(values)
    };
  return (
    <Box m="20px">
     <Header title="CREATE USER" subtitle="Create a new user"/>
     <br />
     <br />
     <Formik
     onSubmit={handleFormSubmit}
     initialValues={initialValues}
     validationSchema={userSchema}
     >
        {
            ({values,errors,touched,handleChange,handleBlur,handleSubmit}) => (
            <form onSubmit={handleSubmit}>
            <Box display="grid" gap="60px" gridTemplateColumns="repeat(4,minmax(0,1fr))" 
            sx= {{
                "& > div" : {
                   gridColumn : isNonMobile ? undefined : "span 4"
                }
            }}
            >
            <TextField
            fullWidth
            variant='filled'
            type="text"
            label="First Name"
            onBlur={handleBlur}
            onChange={handleChange}
            name="firstName"
            value={values.firstName}
            error={!!touched.firstName && !!errors.firstName}
            helperText={touched.firstName && errors.firstName}
            sx={{gridColumn:"span 2"}}
            />
            <TextField
            fullWidth
            variant='filled'
            type="text"
            label="Last Name"
            onBlur={handleBlur}
            onChange={handleChange}
            name="lastName"
            value={values.lastName}
            error={!!touched.lastName && !!errors.lastName}
            helperText={touched.lastName && errors.lastName}
            sx={{gridColumn:"span 2"}}
            />
            <TextField
            fullWidth
            variant='filled'
            type="text"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            name="email"
            value={values.email}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            sx={{gridColumn:"span 4"}}
            />
            <TextField
            fullWidth
            variant='filled'
            type="text"
            label="Phone Number"
            onBlur={handleBlur}
            onChange={handleChange}
            name="contact"
            value={values.contact}
            error={!!touched.contact && !!errors.contact}
            helperText={touched.contact && errors.contact}
            sx={{gridColumn:"span 4"}}
            />
            <TextField
            fullWidth
            variant='filled'
            type="text"
            label="Address"
            onBlur={handleBlur}
            onChange={handleChange}
            name="address"
            value={values.address}
            error={!!touched.address && !!errors.address}
            helperText={touched.address && errors.address}
            sx={{gridColumn:"span 4"}}
            />
            </Box>
            <Box display="flex" justifyContent='end' mt="20px">
            <Button type="submit" color="secondary" variant="contained">
                Create User
            </Button>
            </Box>
            </form>
            )
        }
     </Formik>
    </Box>
  )
}

export default Form