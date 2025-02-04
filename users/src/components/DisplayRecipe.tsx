import EditRecipe from "./EditRecipe";
import { Recipe } from '../models/Recipes';
import { useContext, useEffect, useState } from "react";
import { Box, Typography, Button, Modal, ListItem, Divider, Grid, IconButton } from "@mui/material";
import { UserContext } from "../models/Context";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useDispatch } from "react-redux";
import { AppDispatch } from "./Redux/Store";
import { editLikes } from './Redux/RecipesSlice';

const DisplayRecipe = ({ recipe }: { recipe: Recipe }) => {
    const [open, setOpen] = useState(false);
    const [likes, setLikes] = useState(recipe.likes);
    const context = useContext(UserContext);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setLikes(recipe.likes);
    }, [recipe]);

    const handleLike = () => {
        setLikes(likes + 1);
        dispatch(editLikes({ ...recipe, likes: likes }));
    };

    const renderIngredients = () => (
        <Grid container spacing={1}>
            {recipe.ingredients.map((ingredient, index) => (
                <Grid item xs={6} key={index}>
                    <ListItem sx={{ bgcolor: `#F0F0F0`, borderRadius: 1, mb: 1 }}>
                        {ingredient}
                    </ListItem>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box display="flex"
            flexDirection="column"
            alignItems="flex-start"
            sx={{ padding: 2, width: '45vw', borderRadius: 2, boxShadow: 1, left: 0, top: 0 }}>
            {recipe.id === 0 ? (
                <Typography variant="body1" color="#1976d2" gutterBottom>
                    Please select a recipe from the list.
                </Typography>
            ) : (
                <>
                    <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>{recipe.title}</Typography>
                    <Typography variant="body1" gutterBottom>{recipe.description}</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" gutterBottom sx={{ color: '#1976d2' }}>Ingredients:</Typography>
                    {renderIngredients()}
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" gutterBottom sx={{ color: '#1976d2' }}>Preparation Instructions:</Typography>
                    <Typography variant="body1" sx={{ bgcolor: `#F0F0F0`, borderRadius: 1, p: 1 }}>{recipe.instructions}</Typography>
                    {context.user.id === recipe.authorId && (
                        <Button variant="contained" color="primary" onClick={() => setOpen(true)} sx={{ marginTop: 2 }}>Edit Recipe</Button>
                    )}
                    <Box display="flex" justifyContent="flex-end" alignItems="center" sx={{ width: '100%', marginTop: 'auto' }}>
                        {context.user.id !== recipe.authorId && (
                            <IconButton onClick={handleLike} sx={{ padding: 0 }}>
                                <ThumbUpIcon sx={{ fontSize: '25px', color: '#1976d2' }} />
                            </IconButton>
                        )}
                        <Typography variant="body2" sx={{ marginLeft: 1, fontWeight: 'bold', color: '#1976d2' }}>
                            {likes} {likes === 1 ? 'Like' : 'Likes'}
                        </Typography>
                    </Box>
                </>
            )}
            <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="edit-recipe-modal" aria-describedby="modal-to-edit-recipe" sx={{ backdropFilter: 'blur(0px)', bgcolor: 'transparent' }}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: 2, p: 4, maxHeight: '80vh', width: '70vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <EditRecipe recipe={recipe} />
                </Box>
            </Modal>
        </Box>
    );
}

export default DisplayRecipe;