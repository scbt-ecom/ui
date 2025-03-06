export const routes = {
  base: {
    home: '/',
    verify: '/verify'
  },
  fallbacks: {
    success: '/success',
    repeated: '/repeated',
    reject: '/reject',
    technical: '/technical'
  }
} as const
