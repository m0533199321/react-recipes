import { object, string, array } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../models/Context";
import { TextField, Button, Box } from '@mui/material';
import { RecipeWithOutId } from '../models/Recipes';
import { Fields } from "../models/fieldType";

const schema = object({
    title: string().required("Title is required"),
    description: string().required("Description is required"),
    ingredients: array().of(string().required("Ingredient is required")).required(),
    instructions: string().required("Instructions are required"),
}).required()

const RecipeForm = ({ AddSubmit, recipe }: { AddSubmit: Function, recipe: RecipeWithOutId }) => {
    const context = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<Fields>({
        resolver: yupResolver(schema),
        defaultValues: {
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        }
    });

    const { fields, append, remove } = useFieldArray({ control, name: "ingredients" as never });

    const onsubmit: SubmitHandler<Fields> = async (data) => {
        AddSubmit({ ...data, authorId: context.user.id, likes: 0 });
        reset();
    }

    return (
        <Box component="form" onSubmit={handleSubmit(onsubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', backgroundColor: 'white' }}>
            <TextField
                label="Title"
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <TextField
                label="Description"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TextField
                    label="Ingredient 1"
                    {...register(`ingredients.0`)}
                    error={!!errors.ingredients?.[0]}
                    helperText={errors.ingredients?.[0]?.message}
                    sx={{ flex: 1 }}
                />
                <Button variant="contained" onClick={() => append('')} sx={{ flexShrink: 0 }}>
                    Add
                </Button>
            </Box>
            {fields.slice(1).map((item, index) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TextField
                        label={`Ingredient ${index + 2}`}
                        {...register(`ingredients.${index + 1}`)}
                        error={!!errors.ingredients?.[index + 1]}
                        helperText={errors.ingredients?.[index + 1]?.message}
                        sx={{ flex: 1 }}
                    />
                    <Button variant="outlined" color="error" onClick={() => remove(index + 1)} sx={{ flexShrink: 0 }}>
                        Remove
                    </Button>
                </Box>
            ))}
            <TextField
                label="Instructions"
                {...register("instructions")}
                error={!!errors.instructions}
                helperText={errors.instructions?.message}
            />
            <Button type="submit" variant="contained">Save Recipe</Button>
        </Box>
    )
}

export default RecipeForm;
