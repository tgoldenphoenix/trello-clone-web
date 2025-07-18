let apiRoot = ''
// console.log('import.meta.env: ', import.meta.env)
// console.log('process.env: ', process.env)

// Môi trường Dev sẽ chạy localhost với port 8017
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8017'
}

// Môi trường Production sẽ cần api endpoint chuẩn của các bạn
if (process.env.BUILD_MODE === 'production') {
  // Lưu ý: Đây là domain ví dụ sau khi Deploy Production (xem v75 và v76 để hiểu rõ kiến thức phần này, còn hiện tại mình đã xóa domain này rồi, đừng cố truy cập làm gì =))
  // apiRoot = 'https://trello-api-0gbu.onrender.com'
  apiRoot = 'https://trello-api-mdcl.onrender.com'
}
// console.log('🚀 ~ file: constants.js:7 ~ apiRoot:', apiRoot)
export const API_ROOT = apiRoot

export const DEFAULT_PAGE = 1
export const DEFAULT_ITEMS_PER_PAGE = 12