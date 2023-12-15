import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CategoryAction = () => {
  const validationSchema = Yup.object().shape({
    categoryName: Yup.string().required('Category name is required'),
  });
  const initialValues = {
    categoryName: '',

  };
  const onSubmit = (values, { resetForm }) => {
    console.log('Form submitted with values:', values);
    resetForm();
  };
  return (
    <div>
      <h1>Create Category</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="categoryName">Category Name:</label>
              <Field type="text" id="categoryName" name="categoryName" />
              <ErrorMessage name="categoryName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="parentCategory">Parent Category:</label>
              <Field as="select" id="parentCategory" name="parentCategory">
                <option value="">Select Category Type</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                {/* Add more options as needed */}
              </Field>
              <ErrorMessage name="parentCategory" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="orderLevel">Ordering Level:</label>
              <Field type="text" id="orderLevel" name="orderLevel" />
              <ErrorMessage name="orderLevel" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="bannerImage">Banner Image:</label>
              <Field
                type="file"
                id="bannerImage"
                name="bannerImage"
                onChange={(event) => {
                  setFieldValue('bannerImage', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="bannerImage" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="iconImage">Icon Image:</label>
              <Field
                type="file"
                id="iconImage"
                name="iconImage"
                onChange={(event) => {
                  setFieldValue('iconImage', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="iconImage" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="coverImage">Cover Image:</label>
              <Field
                type="file"
                id="coverImage"
                name="coverImage"
                onChange={(event) => {
                  setFieldValue('coverImage', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="coverImage" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="metaTitle">Meta Title:</label>
              <Field type="text" id="metaTitle" name="metaTitle" />
              <ErrorMessage name="metaTitle" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="metaDescription">Meta Description:</label>
              <Field
                as="textarea"
                id="metaDescription"
                name="metaDescription"
                rows="4"
                cols="50"
              />
              <ErrorMessage name="metaDescription" component="div" className="error" />
            </div>
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CategoryAction;
