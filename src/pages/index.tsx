import React from 'react'
import Seo from '@/components/Seo'

// "[Field Name] cannot be empty"
// "Looks like this is not an email"

function IndexPage() {
  return (
    <main>
      <Seo title="Frontend Mentor: Intro component with sign-up form" />
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
        understanding how developers think is invaluable.
      </p>
      <div>
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </div>
      <form noValidate>
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input type="text" id="firstName" placeholder="First Name" />
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input type="text" id="lastName" placeholder="Last Name" />
        <label htmlFor="emailAddress" className="sr-only">
          Email Address
        </label>
        <input type="email" id="emailAddress" placeholder="Email Address" />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input type="password" id="password" placeholder="Password" />
        <button type="submit">Claim your free trial</button>
        <p>
          By clicking the button, you are agreeing to our{' '}
          <a href="/" target="_blank" rel="noindex nofollow noreferrer">
            Terms and Services
          </a>
        </p>
      </form>
    </main>
  )
}

export default IndexPage
