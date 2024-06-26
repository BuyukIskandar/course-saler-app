import axios from 'axios'

const API_REGISTER = 'https://pycourse.pythonanywhere.com/v1';
const API_DATA = 'https://pycourse.pythonanywhere.com/v2';
const API_LESSON = 'https://pycourse.pythonanywhere.com/v3';


export const Login = async (username, password) => {
    const credentials = `${username}:${password}`;
    const base64Credentials = btoa(credentials);
    const headers = {
        'Authorization': `Basic ${base64Credentials}`
    };
    try {
        const response = await axios.post(`${API_REGISTER}/signin/`, {}, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export const getUsers =  () => {
    const headers = {
        "Authorization": `Token ${localStorage.getItem('token')}`
    };
    // console.log(headers)
    try {
        console.log(headers);
        const response =  axios.get(`${API_REGISTER}/getusers/`, {}, { headers });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const SignUp = async (first_name, username, password) => {
    const data = {
        "first_name": first_name,
        "username": username,
        "password": password
    };
    try {
        const response = await axios.post(`${API_REGISTER}/signup/`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const AddCourse = async (url, name, file) => {
    console.log(url, name, file);
    try {
        const token = localStorage.getItem('token'); // LocalStorage dan tokenni olish
        const formData = new FormData();
        formData.append('url', url);
        formData.append('name', name);
        formData.append('file', file);

        const response = await axios.post(
            `${API_DATA}/create_lesson/`,
            formData,
            {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Authorization': `Token ${token}`
                }
            }
        );
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export const GetLessonsList = async () => {
    const headers = {
        "Authorization": `Token ${localStorage.getItem('token')}`
    };
    try {
        const response = await axios.post(`${API_DATA}/get_lessons/`, {}, { headers });
      //  console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
    
}

export const addComplate = async (lessonId) => {
    console.log(lessonId);
    const headers = {
        "Authorization": `Token ${localStorage.getItem('token')}`
    };

    try {
        const response = await axios.post(`${API_LESSON}/addcompleted/`, { "lesson": lessonId }, { headers });
        // console.log(response.data);
        return response.data.status == true ? true:false ;
    } catch (error) {
        console.error(error);
        throw error; // Re-throwing the error to handle it outside the function if needed
    }
};