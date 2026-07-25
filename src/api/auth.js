export const signIn = async (email, password) => {
  // Mock API authentication call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password.length >= 6) {
        resolve('mock_jwt_token_123456')
      } else {
        reject(new Error('Invalid email or password (min 6 characters for password)'))
      }
    }, 800)
  })
}