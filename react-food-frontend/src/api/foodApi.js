import axios from 'axios';

const API_URL = '/food';

export const fetchFoods = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createFood = async (foodData) => {
    const response = await axios.post(API_URL, foodData);
    return response.data;
};

export const updateFood = async (id, foodData) => {
    const response = await axios.patch(`${API_URL}/${id}`, foodData);
    return response.data;
};

export const deleteFood = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};