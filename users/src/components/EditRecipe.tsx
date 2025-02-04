import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './Redux/Store';
import { editRecipe } from './Redux/RecipesSlice';
import RecipeForm from './RecipeForm';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipe, RecipeWithOutId } from '../models/Recipes';

interface RecipeFormContainerProps {
    children: ReactNode;
}

const RecipeFormContainer: React.FC<RecipeFormContainerProps> = ({ children }) => {
    return (
        <Box
            sx={{
                maxWidth: '80vw',
                maxHeight: 600,
                overflowY: 'auto',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: 'white',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
        >
            {children}
        </Box>
    );
}

const EditRecipe = ({ recipe }: { recipe: Recipe }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const r: RecipeWithOutId = { title: recipe.title, description: recipe.description, authorId: recipe.authorId, ingredients: recipe.ingredients, instructions: recipe.instructions,likes: recipe.likes };

    const handleSubmit = (data: RecipeWithOutId) => {
        dispatch(editRecipe({ ...data, id: recipe.id, likes: recipe.likes }));
        document.body.style.backgroundColor = '';
        navigate(-1);
    }

    return (
        <RecipeFormContainer>
            <Typography
                variant="h5"
                sx={{
                    color: 'primary.main',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '24px',
                    width: '100%',
                }}
            >
                Edit Recipe
            </Typography>
            <RecipeForm AddSubmit={handleSubmit} recipe={r} />
        </RecipeFormContainer>
    );
}

export default EditRecipe;