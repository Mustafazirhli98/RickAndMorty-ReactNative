import axios from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
});


export const get = async (param) => {
    try {
        const response = await instance.get(param);
        return response.data
    } catch (error) {
        console.error('GET isteği sırasında bir hata oluştu:', error.message);
    }
};

