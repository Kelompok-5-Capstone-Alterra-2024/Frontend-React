//membuat variable URL API : BASE_URL
const BASE_URL = "https://capstone-alterra-424313.as.r.appspot.com";
//membuat variable endpoints (object)
const ENDPOINTS = {
    LOGIN : `${BASE_URL}/api/v1/login`,
    VOLUNTEER : `${BASE_URL}/api/admin/volunteer`,
    NEWS : `${BASE_URL}/api/v1/news`,
    ARTICLE : (id) => `${BASE_URL}/api/v1/articles/${id}`,
};

export default ENDPOINTS;