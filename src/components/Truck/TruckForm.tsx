import * as React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';

import './skeleton.css';
import './main.css';

import { Formik, Field, Form, FormikActions } from 'formik';
import { ApolloClient } from 'apollo-client'
import {ApolloProvider, withApollo} from "react-apollo";

//https://www.howtographql.com/react-apollo/2-queries-loading-links/
const HELLO_QUERY = gql`
  {
    helloWorld
  }`

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}

//const onSubmit = 

//https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
const TruckForm: React.FC<{}> = (props: any) => (
  <div className="container">
    <h1>Create a Truck</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={(values: Values, { setSubmitting }: FormikActions<Values>) => {
        props.client.query({
            query: HELLO_QUERY}).then((response: { data: { helloWorld: any; }; }) => {
                console.log(response.data)
               
                alert(response.data.helloWorld);
                setSubmitting(false);
           
            })
        //TODO: call graphql client
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 500);
    }}
      render={() => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" type="text" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" type="text" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="john@acme.com" type="email" />

          <button type="submit" style={{ display: 'block' }}>
            Submit
          </button>
        </Form>
      )}
    />
  </div>
);

export default withApollo(TruckForm);
