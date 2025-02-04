import { useDispatch } from 'react-redux';
import { AppDispatch } from './Redux/Store';
import { addRecipe } from './Redux/RecipesSlice';
import { RecipeWithOutId } from '../models/Recipes';
import RecipeForm from './RecipeForm';
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1);
    }
    const handleSubmit = (data: RecipeWithOutId) => {
        data.authorId = Number(data.authorId);
        dispatch(addRecipe(data));
        navigateBack();
    }
    const r: RecipeWithOutId = { title: '', description: '', authorId: 0, ingredients: [], instructions: '',likes: 0 };

    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    p: 4,
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    width: '50vw',
                    backgroundColor: 'transparent'
                }}
            >
                <Typography variant="h5" align="center">Add your details</Typography>
                <RecipeForm AddSubmit={handleSubmit} recipe={r} />
            </Box>
        </>
    )
}
export default AddRecipe;



