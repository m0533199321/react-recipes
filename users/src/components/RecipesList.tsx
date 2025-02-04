import { useEffect, useState } from 'react';
import { Box, Typography, MenuList, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreType } from './Redux/Store';
import DisplayRecipe from './DisplayRecipe';
import { fetchRecipes } from './Redux/RecipesSlice';
import { Recipe } from '../models/Recipes';

const RecipesList = () => {
    const recipes = useSelector((state: StoreType) => state.recipes.list);
    const dispatch = useDispatch<AppDispatch>();
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe>({id:0, title: '', description: '', authorId: 0, ingredients: [], instructions: '', likes: 0});

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    return (
        <Box display="flex" p={0} height={'80vh'} bgcolor="white" top={0}>
            <Box width="50%" p={0} bgcolor='white'>
                <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                        fontWeight: 'bold', 
                        color: 'black', 
                        top: '20vh', 
                        left: 0, 
                        marginBottom: 0 
                    }} 
                >
                    Recipes
                </Typography>
                <MenuList>
                    {recipes.map((recipe) => (
                        <MenuItem
                            key={recipe.id}
                            onClick={() => setSelectedRecipe(recipe)}
                            sx={{
                                width: '90%',
                                marginBottom: 1,
                                display: 'flex',
                                justifyContent: 'flex-start',
                                left:0,
                                backgroundColor: selectedRecipe?.id === recipe.id ? 'grey.400' : 'transparent'
                            }}
                        >
                            {recipe.title}
                        </MenuItem>
                    ))}
                </MenuList>
            </Box>
            <Box width="60%" p={2}>
                {selectedRecipe && (
                    <DisplayRecipe recipe={selectedRecipe} />
                )}
            </Box>
        </Box>
    );
};

export default RecipesList;













