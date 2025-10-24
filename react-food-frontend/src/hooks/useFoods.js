import { useState, useEffect, useCallback } from 'react';
import * as foodApi from '../api/foodApi';

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFoods = useCallback(async () => {
        try {
            setLoading(true);
            const data = await foodApi.fetchFoods();
            setFoods(data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFoods();
    }, [fetchFoods]);

    const addFood = async (food) => {
        try {
            const newFood = await foodApi.createFood(food);
            setFoods((prevFoods) => [...prevFoods, newFood]);
        } catch (err) {
            setError(err);
        }
    };

    const updateFood = async (id, updatedFood) => {
        try {
            const food = await foodApi.updateFood(id, updatedFood);
            setFoods((prevFoods) => 
                prevFoods.map((f) => (f._id === id ? food : f))
            );
        } catch (err) {
            setError(err);
        }
    };

    const deleteFood = async (id) => {
        try {
            await foodApi.deleteFood(id);
            setFoods((prevFoods) => prevFoods.filter((f) => f._id !== id));
        } catch (err) {
            setError(err);
        }
    };

    return { foods, loading, error, fetchFoods, addFood, updateFood, deleteFood };
};

export default useFoods;