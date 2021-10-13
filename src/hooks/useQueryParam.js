import { useState } from 'react'
import queryString from 'query-string'

const useQueryParam = (name, defaultValue) => {
  // Is there a param?
  const params = queryString.parse(window.location.search)
  const hasParam = !!params[name]
  defaultValue = hasParam ? params[name] : defaultValue

  // use state  
  const [value, setValue] = useState(defaultValue)

  // wrap set value with query string write operation
  const setValueWithQuery = (value) => {
    const params = queryString.parse(window.location.search)
    const newUrl = queryString.stringifyUrl({query: {...params, [name]: value}, url: window.location.href})
    window.history.replaceState(null, '', newUrl)
    return setValue(value)
  }

  return [value, setValueWithQuery]
}

export default useQueryParam
