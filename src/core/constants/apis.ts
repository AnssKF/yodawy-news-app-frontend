
export const K_BASE_URL = 'http://localhost:8080';

export const K_AUTH_API = {
    LOGIN: () => `${K_BASE_URL}/api/login/`,
    SIGNUP: () => `${K_BASE_URL}/api/register/`
}

export const K_HEADLINES_API = {
    FETCH: () => `${K_BASE_URL}/api/news/`,
    FAV: () => `${K_BASE_URL}/api/favorites/`,
    FAV_DELETE: () => `${K_BASE_URL}/api/favorites/delete/`,
}