import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = name => {
    const request = axios.post(baseUrl, name)
    return request.then(response => response.data)
  }

const del = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
    .then(response => response.data)
    .catch(error => {
      alert(`${error} was already deleted from the server`)
    })
}

const put = (id,phone) => {
  const request = axios.put(`${baseUrl}/${id}`, phone)
  return request
    .then(response => response.data)
}

export default {getAll, create, del, put}
