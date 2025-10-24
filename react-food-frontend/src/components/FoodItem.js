import React from 'react';

const FoodItem = ({ food, onDelete, onEdit }) => {
    return (
        <div className="food-item">
            <h3>{food.name}</h3>
            <p>Calories: {food.calories}</p>
            <button onClick={() => onEdit(food)}>Edit</button>
            <button onClick={() => onDelete(food._id)}>Delete</button>
        </div>
    );
};

export default FoodItem;