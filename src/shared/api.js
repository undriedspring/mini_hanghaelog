import axios from 'axios'

// ******** Axios 인스턴스 생성 ******** //

const api = axios.create({
  baseURL: 'https://api.example.com',
})

// ******** Interceptor를 통한 Header 설정 ******** //

api.interceptors.request.use(async (config) => {
  config.headers['Content-type'] = 'application/json; charset=utf-8'
  config.headers['Accept'] = '*/*'
  // await 뒤에 `bearer + ${document.cookie에서 파싱한 token value}`
  // config.headers['Authorization'] = await
  return config
})

// ******** Interceptor로 Response (token) 설정하기 추가해야 함 ******** //

api.interceptors.response.use(
  async (response) => {
    if (response.data.msg === '로그인에 성공하셨습니다.') {
      const { config } = response
      const originalRequest = config

      return axios(originalRequest)
    }

    return response
  },
  async (error) => {
    return Promise.reject(error)
  }
)

// ******** Export api ******** //

export const apis = {
  // **** post **** //
  addPost: (post) => api.post('/api/posts', post),
  editPost: (postId, post) => api.put(`/api/posts/${postId}`, post),
  deletePost: (postId) => api.delete(`/api/posts/${postId}`),
  // get posts에서 한 postId의 comment 데이터까지 한 번에 가져오도록 수정할 건지 백 확인 필요
  posts: () => api.get('/api/posts'),

  // **** comment **** //
  addComment: (postId, comment) => api.post(`/api/posts/${postId}/comments`, comment),
  editComment: (postId, commentsId, comment) => api.put(`/api/posts/${postId}/comments/${commentsId}`, comment),
  deleteComment: (postId, commentsId) => api.delete(`/api/posts/${postId}/comments/${commentsId}`),
  comments: (postId) => api.get(`/api/posts/${postId}/comments`),

  // **** user **** //
  login: (email, password) => api.post('/api/auth/login', { email: email, password: password }),
  register: (email, nickname, password, passwordCheck) => api.post('/api/auth/register', { email: email, nickname: nickname, password: password, passwordCheck: passwordCheck }),
}
