import express from 'express';
import fs from 'fs';
import path from 'path';
import authMiddleware from '../middleware/authMiddleware.js';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

// שליפת כל המתכונים
router.get('/', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.json(db.recipes);
});

// // הוספת מתכון (רק למשתמש מחובר)
router.post('/', authMiddleware, (req, res) => {
    const {
        title,
        description,
        products,
        ingredients,
        instructions,
        likes
    } = req.body;
    const db = JSON.parse(fs.readFileSync(dbPath));

    const newRecipe = {
        id: Date.now(),
        title,
        products,
        description,
        authorId: parseInt(req.header('user-id')),
        ingredients,
        instructions,
        likes
    };

    db.recipes.push(newRecipe);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.status(201).json({ message: "Recipe added", recipe: newRecipe });
});


router.put('/', authMiddleware, (req, res) => {
    const authorId = parseInt(req.header('user-id'));
    const {
        id,
        title,
        description,
        products,
        ingredients,
        instructions,
        likes
    } = req.body;

    const db = JSON.parse(fs.readFileSync(dbPath));
    
    const recipeIndex = db.recipes.findIndex(recipe => recipe.id === id);
    
    if (recipeIndex === -1) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    if(db.recipes[recipeIndex].authorId !== authorId){
        return res.status(403).json({ message: "Unauthorized" });
    }

    const newRecipe={
        id,
        title,
        description,
        authorId,
        products,
        ingredients,
        instructions,
        likes
    }

    db.recipes[recipeIndex] = newRecipe;
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.status(200).json({ message: "Recipe updated", recipe: newRecipe });
});


export default router;
