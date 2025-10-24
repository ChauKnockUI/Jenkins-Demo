import React, { useState } from 'react';
import FoodList from '../components/FoodList';
import FoodForm from '../components/FoodForm';
import useFoods from '../hooks/useFoods';

const Home = () => {
    const { fetchFoods } = useFoods();
    const [editingFood, setEditingFood] = useState(null);

    const handleSubmit = () => {
        setEditingFood(null);
        fetchFoods();
    };
     const handleEdit = (food) => {
        console.log("Editing food:", food);
        setEditingFood(food);
    };
    return (
        <div>
            <h1>Food Management</h1>
            <FoodForm 
                food={editingFood} 
                onSubmit={handleSubmit}
                
            />
            <FoodList onEdit={handleEdit} />
        </div>
    );
};

export default Home;