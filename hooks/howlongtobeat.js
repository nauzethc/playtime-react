/* global fetch */

import { useEffect, useReducer } from 'react'

function reducer (state, { type, payload, error }) {
  switch (type) {
    case 'request':
      return { ...state, pending: true }
    case 'success':
      return { pending: false, error: null, ...payload }
    case 'error':
      return { ...state, pending: false, error }
    default:
      return state
  }
}

export function useGame (id) {
  const [state, dispatch] = useReducer(reducer, {
    pending: false,
    error: null,
    data: null
  })

  function refresh () {
    dispatch({ type: 'pending' })
    fetch(`/api/${id}`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'success', payload: { data } }))
      .catch(error => dispatch({ type: 'error', error }))
  }

  useEffect(() => refresh(), [id])
  return [state, refresh]
}

export function useSearch () {
  const [state, dispatch] = useReducer(reducer, {
    pending: false,
    error: null,
    total: 0,
    data: []
  })

  function request (query) {
    dispatch({ type: 'pending' })
    fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(payload => dispatch({ type: 'success', payload }))
      .catch(error => dispatch({ type: 'error', error }))
  }
  return [state, request]
}
