import axiosClient from './axiosClient'

const testApi = {
  get: () => {
    const subUrl = 'post'
    return axiosClient.get(subUrl)
  },
}

export default testApi
