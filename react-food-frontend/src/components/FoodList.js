import React from 'react';
import useFoods from '../hooks/useFoods';
import FoodItem from './FoodItem';

const FoodList = ({ onEdit }) => {
    const { foods, loading, error, deleteFood } = useFoods();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Food List</h2>
            <ul>
                {foods.map(food => (
                    <FoodItem
                        key={food._id}
                        food={food}
                        onDelete={deleteFood}
                        onEdit={onEdit}
                    />
                ))}
            </ul>
        </div>
    );
};

export default FoodList;