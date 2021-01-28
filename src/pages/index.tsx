import React from 'react'
import Seo from '@/components/Seo'
import Input from '@/components/Input'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

interface FormValues {
  firstName: string
  lastName: string
  emailAddress: string
  password: string
}

function IndexPage() {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  }

  return (
    <main className="min-h-screen grid md:grid-cols-container items-center place-content-center gap-11 py-22 px-6 bg-mobile md:bg-desktop bg-no-repeat bg-cover">
      <Seo title="Frontend Mentor: Intro component with sign-up form" />
      <section className="text-center md:text-left">
        <h1 className="text-heading-mobile md:text-heading-desktop font-bold mb-6 md:mb-10">
          Learn to code by watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
          understanding how developers think is invaluable.
        </p>
      </section>
      <section>
        <div className="bg-purple shadow rounded mb-6 font-normal text-cta p-4 text-center">
          <span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required('First Name cannot be empty'),
            lastName: Yup.string().required('Last Name cannot be empty'),
            emailAddress: Yup.string()
              .email('Looks like this is not an email')
              .required('Email Address cannot be empty'),
            password: Yup.string().required('Password cannot be empty'),
          })}
          onSubmit={(values, helpers) => {
            const { firstName, lastName, emailAddress } = values
            alert(
              `${firstName} ${lastName}, thank you for the subscription! Check ${emailAddress} inbox to activate your 7-day free trial`
            )
            helpers.resetForm()
          }}
        >
          <Form noValidate className="grid gap-4 md:gap-5 p-6 md:p-10 bg-white shadow rounded">
            <Input name="firstName" label="First Name" required />
            <Input name="lastName" label="Last Name" required />
            <Input name="emailAddress" label="Email Address" type="email" required />
            <Input name="password" label="Password" type="password" required />
            <div>
              <button
                type="submit"
                className="mb-2 h-14 px-8 text-center shadow-inset rounded-small bg-green font-semibold uppercase text-cta w-full hover:bg-green-light focus-visible:bg-green-light transition-colors"
              >
                Claim your free trial
              </button>
              <p className="text-light text-note text-center">
                By clicking the button, you are agreeing to our{' '}
                <a href="/" target="_blank" rel="noindex nofollow noreferrer" className="font-bold text-red">
                  Terms and Services
                </a>
              </p>
            </div>
          </Form>
        </Formik>
      </section>
    </main>
  )
}

export default IndexPage
