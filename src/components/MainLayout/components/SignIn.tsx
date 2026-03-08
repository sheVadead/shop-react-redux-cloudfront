import React, { useEffect } from 'react'
import {Formik, Form, FormikHelpers, Field} from "formik";
import axios from 'axios'
import API_PATHS from '../../../constants/apiPaths'

interface Values {
    login: string;
    password: string;
  }

export default function SignIn({onTokenHandler, token}: any) {

  const onSubmit = async (values: Values) => {
    const {data} = await axios.post<string>(`${API_PATHS.token}`, JSON.stringify(values));
    
    onTokenHandler(data)
    
    localStorage.setItem('authorization_token', data)

  };
    return (
        <div>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <Field id="login" name="login" placeholder="login" />
          <Field id="password" name="password" placeholder="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    )
}