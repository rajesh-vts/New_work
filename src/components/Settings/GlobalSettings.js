import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const GlobalSettings = () =>{
    const validationSchema = Yup.object().shape({
        site_logo: Yup.string().required('Site Logo is required'),
        fav_logo: Yup.string().required('Fav icon is required'),
    });
    const initialValues = {
        site_logo: '',
        fav_icon: '',
    };
    const onSubmit = (values, { resetForm }) => {
        console.log('Form submitted with values:', values);
        resetForm();
    };

    return (
       <div>
        <h1>Global Settings</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
     
            {({ errors, touched, setFieldValue  }) => (
                <Form>
                    <div>
                    <label htmlFor="site_logo">Site Logo:</label>
                    <Field
                        type="file"
                        id="site_logo"
                        name="site_logo"
                        onChange={(event) => {
                        setFieldValue('site_logo', event.currentTarget.files[0]);
                        }}
                    />
                    <ErrorMessage name="site_logo" component="div" className="error" />
                    </div>
                    <div>
                    <label htmlFor="fav_icon">Fav Icon:</label>
                    <Field
                        type="file"
                        id="fav_icon"
                        name="fav_icon"
                        onChange={(event) => {
                        setFieldValue('fav_icon', event.currentTarget.files[0]);
                        }}
                    />
                    <ErrorMessage name="fav_icon" component="div" className="error" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
      
        
      </Formik>
        </div> 
    );

};

export default GlobalSettings;