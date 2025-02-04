import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { EmojiPeople, Restaurant, Kitchen } from "@mui/icons-material";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 2, borderRadius: 3, height: '77vh', overflow: 'hidden' }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom color="primary.main">
        About Our Recipe Community
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Join us to explore, share, and enjoy delicious recipes with fellow cooking enthusiasts! 🍽️
      </Typography>
     
      <Grid container spacing={2} justifyContent="center" mt={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, boxShadow: 4, backgroundColor: `#F0F0F0`, borderRadius: 2 }}>
            <CardContent>
              <EmojiPeople sx={{ fontSize: 30, color: "#1E88E5" }} />
              <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
                Our Users
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A diverse community of home cooks and professional chefs ready to share their culinary creations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
       
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, boxShadow: 4, backgroundColor: `#F0F0F0`, borderRadius: 2 }}>
            <CardContent>
              <Restaurant sx={{ fontSize: 30, color: "#1E88E5" }} />
              <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
                Delicious Recipes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover a wide variety of recipes, from appetizers to desserts, crafted by our talented users.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
       
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, boxShadow: 4, backgroundColor: `#F0F0F0`, borderRadius: 2 }}>
            <CardContent>
              <Kitchen sx={{ fontSize: 30, color: "#1E88E5" }} />
              <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
                Share Your Creations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join us and share your favorite recipes with the community, and inspire others to cook!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
     
      <Box mt={3}>
        <Typography variant="h5" fontWeight="bold" color="primary.main">
          🍳 Join the Fun and Start Cooking!
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Be part of our vibrant community and let’s create amazing dishes together!
        </Typography>
      </Box>
    </Container>
  );
}

