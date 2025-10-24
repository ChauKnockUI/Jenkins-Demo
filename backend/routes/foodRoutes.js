const express = require("express");
const foodModel = require("../models/food");
const router = express.Router();

router.get("/food", async (request, response) => {
    try {
        const foods = await foodModel.find({});
        response.send(foods);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/food", async (request, response) => {
    const food = new foodModel(request.body);
    try {
        await food.save();
        response.send(food);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.patch("/food/:id", async (request, response) => {
    try {
        const food = await foodModel.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!food) {
            return response.status(404).send("No item found");
        }
        response.send(food);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.delete("/food/:id", async (request, response) => {
    try {
        const food = await foodModel.findByIdAndDelete(request.params.id);
        if (!food) {
            return response.status(404).send("No item found");
        }
        response.status(200).send();
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router; 
