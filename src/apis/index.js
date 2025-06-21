import authorizedAxiosInstance from '~/utils/authorizeAxios'
import { API_ROOT } from '~/utils/constants'
import { toast } from 'react-toastify'

/**
 * Lưu ý: Đối với việc sử dụng axios
 * Tất cả các function bên dưới các bạn sẽ thấy mình chỉ request và lấy data từ response luôn, mà không có try catch hay then catch gì để bắt lỗi.
 * Lý do là vì ở phía Front-end chúng ta không cần thiết làm như vậy đối với mọi request bởi nó sẽ gây ra việc dư thừa code catch lỗi quá nhiều.
 * Giải pháp Clean Code gọn gàng đó là chúng ta sẽ catch lỗi tập trung tại một nơi bằng cách tận dụng một thứ cực kỳ mạnh mẽ trong axios đó là Interceptors
 * Hiểu đơn giản Interceptors là cách mà chúng ta sẽ đánh chặn vào giữa request hoặc response để xử lý logic mà chúng ta muốn.
*/

/** Boards */
// Moved to redux
// export const fetchBoardDetailsAPI = async (boardId) => {
//   const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
//   // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
//   return response.data
// }

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/boards/${boardId}`, updateData)
  return response.data
}

export const moveCardToDifferentColumnAPI = async (updateData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/boards/supports/moving_card`, updateData)
  return response.data
}

/** Columns */
export const createNewColumnAPI = async (newColumnData) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/columns`, newColumnData)
  return response.data
}

export const updateColumnDetailsAPI = async (columnId, updateData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/columns/${columnId}`, updateData)
  return response.data
}

export const deleteColumnDetailsAPI = async (columnId) => {
  const response = await authorizedAxiosInstance.delete(`${API_ROOT}/v1/columns/${columnId}`)
  return response.data
}

/** Cards */
export const createNewCardAPI = async (newCardData) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/cards`, newCardData)
  return response.data
}

/** Users */
export const registerUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/register`, data)
  toast.success('Account created successfully! Please check and verify your account before logging in!', { theme: 'colored' })
  return response.data
}

export const verifyUserAPI = async (data) => {
  // method PUT vì mình cập nhật trường verify thành `true`
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/users/verify`, data)
  toast.success('Account verified successfully! Now you can login to enjoy our services! Have a good day!', { theme: 'colored' })
  return response.data
}

export const refreshTokenAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/users/refresh_token`)
  return response.data
}