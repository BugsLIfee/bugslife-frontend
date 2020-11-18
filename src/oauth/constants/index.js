//server ip
export const LOCAL_URL='http://localhost:'
export const DEV_SERVER_URL = 'http://210.107.78.153:';
export const AWS_URL = '';
export const API_BASE_URL=LOCAL_URL;
//port
export const AUTH_API_PORT = '8088';
export const BUGBOARD_API_PORT = '8081';
export const EDUCATION_API_PORT = '8082';
export const FREEBOARD_API_PORT = '8083';
export const ADMIN_API_PORT = '8084';
export const CHAT_API_PORT = '8085';
//url
export const AUTH_API_URL = API_BASE_URL+AUTH_API_PORT;
export const BUGBOARD_API_URL = API_BASE_URL+'8088';
// export const BUGBOARD_API_URL = API_BASE_URL+BUGBOARD_API_PORT;
export const EDUCATION_API_URL = API_BASE_URL+EDUCATION_API_PORT;
export const FREEBOARD_API_URL = API_BASE_URL+FREEBOARD_API_PORT;
export const ADMIN_API_URL = API_BASE_URL+ADMIN_API_PORT;
export const CHAT_API_URL = API_BASE_URL+CHAT_API_PORT;



export const ACCESS_TOKEN = 'accessToken';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
