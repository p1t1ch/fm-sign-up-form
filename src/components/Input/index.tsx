import React, { useState } from 'react'
import { ReactComponent as ErrorIcon } from '@/icons/error.svg'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
}

function Input({ label, id, className = '', type, ...props }: InputProps) {
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim()
    const validEmailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (!value) {
      setError(`${label} cannot be empty`)
    } else if (type === 'email' && !validEmailReg.test(value)) {
      setError('Looks like this is not an email')
    } else {
      setError(null)
    }
  }

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          placeholder={label}
          type={type}
          onChange={handleChange}
          className={`w-full text-input font-semibold h-14 pl-8 pr-14 ${
            error ? 'text-red' : 'text-neutral'
          } placeholder:text-opacity-75 border border-gray rounded-small focus:border-purple caret ${className}`}
          {...props}
        />
        {error && <ErrorIcon className="absolute right-4 top-1/2 transform -translate-y-1/2" />}
      </div>
      {error && (
        <div role="alert" className="text-red italic text-right text-note mt-1">
          {error}
        </div>
      )}
    </div>
  )
}

export default Input
