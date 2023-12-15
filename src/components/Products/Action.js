import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductAction = () => { 
  const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product name is required'),
  });
  const initialValues = {
    productName: '',

  };
  const onSubmit = (values, { resetForm }) => {
    console.log('Form submitted with values:', values);
    resetForm();
  };

  return (
    <div>
      <h1>Create Product</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, setFieldValue  }) => (
          <Form>
            <div>
              <label htmlFor="productName">Product Name:</label>
              <Field type="text" id="productName" name="productName" />
              <ErrorMessage name="productName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <Field as="select" id="category" name="category">
                <option value="">Select Category Type</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </Field>
              <ErrorMessage name="category" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="brand">Brand:</label>
              <Field as="select" id="brand" name="brand">
                <option value="">Select brand</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </Field>
              <ErrorMessage name="brand" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="tags">Tags:</label>
              <Field type="text" id="tags" name="tags" />
              <ErrorMessage name="tags" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field type="number" id="price" name="price" />
              <ErrorMessage name="price" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="discount">Discount:</label>
              <Field type="number" id="discount" name="discount" />
              <ErrorMessage name="discount" component="div" className="error" />
              <Field as="select" id="discount_type" name="discount_type">
                <option value="Option 1">Flat</option>
                <option value="Option 2">Percent</option>
              </Field>
              <ErrorMessage name="discount_type" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="sku">SKU:</label>
              <Field type="text" id="sku" name="sku" />
              <ErrorMessage name="sku" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="productDescription">Product Description:</label>
              <Field
                as="textarea"
                id="productDescription"
                name="productDescription"
                rows="4"
                cols="50"
              />
              <ErrorMessage name="productDescription" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="estimate_shipping_time">Estimate Shipping Time:</label>
              <Field type="text" id="estimate_shipping_time" name="estimate_shipping_time" />
              <ErrorMessage name="estimate_shipping_time" component="div" className="error" />
            </div>
            <div>
              {/* Toggle button */}
              <label htmlFor="cash_on_delivery">Cash on Delivery:</label>
              <Field as="select" id="cash_on_delivery" name="cash_on_delivery">
                <option value="Option 1">Yes</option>
                <option value="Option 2">No</option>
              </Field>
              <ErrorMessage name="cash_on_delivery" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="total_available_stock">Total Available Stock:</label>
              <Field as="select" id="total_available_stock" name="total_available_stock">
                <option value="Option 1">Yes</option>
                <option value="Option 2">No</option>
              </Field>
              <ErrorMessage name="total_available_stock" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="tax">Tax:</label>
              <Field as="select" id="tax" name="tax">
                <option value="Option 1">Yes</option>
                <option value="Option 2">No</option>
              </Field>
              <ErrorMessage name="tax" component="div" className="error" />
            </div>
            <div>
              {/* Toggle button */}
              <label htmlFor="featured">Featured:</label>
              <Field as="select" id="featured" name="featured">
                <option value="Option 1">Yes</option>
                <option value="Option 2">No</option>
              </Field>
              <ErrorMessage name="featured" component="div" className="error" />
            </div>
            <div>
              {/* Toggle button */}
              <label htmlFor="flash_deal">Flash Deal:</label>
              <Field as="select" id="flash_deal" name="flash_deal">
                <option value="Option 1">Yes</option>
                <option value="Option 2">No</option>
              </Field>
              <ErrorMessage name="flash_deal" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="productFeaturedImage">Product Featured Image:</label>
              <Field
                type="file"
                id="productFeaturedImage"
                name="productFeaturedImage"
                onChange={(event) => {
                  setFieldValue('productFeaturedImage', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="productFeaturedImage" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="productImage">Product Image:</label>
              <Field
                type="file"
                id="productImage"
                name="productImage"
                onChange={(event) => {
                  setFieldValue('productImage', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="productImage" component="div" className="error" />
            </div>
            {/* Needs to add variations */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductAction;
