import React from 'react'

export default function Spinner ({ children, className = '', isLoading }) {
  return (
    <>
      {isLoading
        ? (
          <div className={`spinner lds-roller ${className}`}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          )
        : (
            children
          )}
    </>
  )
}
