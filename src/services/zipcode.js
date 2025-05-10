import axios from 'axios';

const getZipcodes = (callback = null) => {
    const userId = localStorage.getItem('user_id');
    try {
        axios.get(`${process.env.VITE_API_URL}/zipcode/${userId}`).then((response) => {
            if (response.status === 200) {
                if(callback) {
                    callback(response.data);
                }
            }
        });
    } catch (error) {
        console.error(error);
    }
};

export default getZipcodes;
