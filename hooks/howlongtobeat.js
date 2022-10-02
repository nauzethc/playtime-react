/* global fetch */
import { useReducer } from 'react'

function reducer(state, { type, payload, error }) {
  switch (type) {
    case 'request':
      return { ...state, ...payload, pending: true }
    case 'success':
      return { ...state, ...payload, pending: false, error: null }
    case 'error':
      return { ...state, ...payload, pending: false, error }
    default:
      return state
  }
}

export function useGame(id, initialState = {}) {
  const [state, dispatch] = useReducer(reducer, Object.assign({
    pending: false,
    error: null,
    data: null
  }, initialState))

  function refresh() {
    dispatch({ type: 'request' })
    fetch(`/api/${id}`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'success', payload: { data } }))
      .catch(error => dispatch({ type: 'error', error }))
  }
  return [state, refresh]
}

export function useSearch() {
  const [state, dispatch] = useReducer(reducer, {
    query: null,
    pending: false,
    error: null,
    count: 0,
    data: []
  })

  function search(query) {
    dispatch({ type: 'request', payload: { query } })
    fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(payload =>
        dispatch({
          type: 'success',
          payload:
            payload.pageCurrent && payload.pageCurrent > 1
              ? { ...payload, data: [...state.data, ...payload.data] }
              : payload
        })
      )
      .catch(error => dispatch({ type: 'error', error }))
  }
  return [state, search]
}
