import axios from 'axios';

const api = axios.create({
	baseURL: 'https://challange.goomer.com.br/'
});

export const getRestaurants = () => api.get('/restaurants');

export const getRestaurantById = id => api.get(`/restaurants/${id}`);

export const getMenuByRestaurantId = id => api.get(`/restaurants/${id}/menu`);
