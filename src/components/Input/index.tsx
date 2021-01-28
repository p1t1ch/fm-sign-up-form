import React from 'react'
import { ReactComponent as ErrorIcon } from '@/icons/error.svg'
import { useField } from 'formik'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string
  label: string
}

function Input({ name, label, type = 'text', className = '', id, ...props }: InputProps) {
  const [field, meta] = useField(name)
  const isError = meta.touched && meta.error

  return (
    <div>
      <label htmlFor={id || name} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <input
          id={id || name}
          type={type}
          placeholder={label}
          aria-invalid={!!isError}
          aria-describedby={`${name}Error`}
          className={`w-full text-input font-semibold h-14 pl-8 pr-14 border focus:border-purple ${
            isError ? 'text-red border-red' : 'text-neutral border-gray'
          } placeholder:text-opacity-75 rounded-small caret ${className}`}
          {...field}
          {...props}
        />
        {isError && <ErrorIcon className="absolute right-4 top-1/2 transform -translate-y-1/2" />}
      </div>
      {isError && (
        <div id={`${name}Error`} role="alert" className="text-red italic text-right text-note mt-1">
          {meta.error}
        </div>
      )}
    </div>
  )
}

export default Input
