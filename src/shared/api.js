import axios from 'axios'

// ******** Axios 인스턴스 생성 ******** //

const api = axios.create({
  baseURL: 'http://13.209.4.79:5000/',
})

// ******** Interceptor를 통한 Header 설정 ******** //

api.interceptors.request.use(async (config) => {
  const accessToken = document.cookie.split('=')[1]
  config.headers['Content-type'] = 'application/json; charset=utf-8'
  config.headers['Accept'] = '*/*'
  config.headers['Authorization'] = `bearer ${accessToken}`
  return config
})

// ******** Export api ******** //

export const apis = {
  // **** post **** //
  addPost: (post) => api.post('/api/posts', post),
  editPost: (postId, newPost) => api.put(`/api/posts/${postId}`, newPost),
  deletePost: (postId) => api.delete(`/api/posts/${postId}`),
  // get posts에서 한 postId의 comment 데이터까지 한 번에 가져오도록 수정할 건지 백 확인 필요
  posts: () => api.get('/api/posts'),

  // **** image upload **** //
  uploadImage: (fileObj) => api.post('/api/posts/upload', fileObj),

  // **** comment **** //
  addComment: (postId, comment) => api.post(`/api/posts/${postId}/comments`, comment),
  editComment: (postId, commentId, newComment) => api.put(`/api/posts/${postId}/comments/${commentId}`, newComment),
  deleteComment: (postId, commentId) => api.delete(`/api/posts/${postId}/comments/${commentId}`),
  comments: (postId) => api.get(`/api/posts/${postId}/comments`),

  // **** user **** //
  login: (email, password) => api.post('/api/auth/login', { email: email.email, password: password }),
  register: (email, nickname, password, passwordCheck) => api.post('/api/auth/register', { email: email, nickname: nickname, password: password, passwordCheck: passwordCheck }),
  users: () => api.get('/api/auth'),
}
