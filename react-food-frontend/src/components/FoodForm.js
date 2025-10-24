import React, { useState, useEffect } from 'react';
import * as foodApi from '../api/foodApi';

const FoodForm = ({ food, onSubmit }) => {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (food) {
            setName(food.name);
            setCalories(food.calories);
            setIsEditing(true);
        } else {
            setName('');
            setCalories(0);
            setIsEditing(false);
        }
    }, [food]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const foodData = { name, calories };

        if (isEditing) {
            await foodApi.updateFood(food._id, foodData);
        } else {
            await foodApi.createFood(foodData);
        }

        onSubmit();
        setName('');
        setCalories(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Calories:</label>
                <input
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{isEditing ? 'Update Food' : 'Add Food'}</button>
        </form>
    );
};

export default FoodForm;