/* eslint-disable */
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "http://localhost:3000/";

const API_URL = "http://localhost:3000/";

const axiosInstance = axios.create({
    baseURL: API_URL,
    // withCredentials: true,
    headers: {
    "Content-Type": "application/json"
    }
});

export default { axiosInstance };
/* eslint-enable */
