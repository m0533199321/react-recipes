import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { Kitchen, People, AccessAlarm } from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center", py: 2, borderRadius: 3, height: '77vh', overflow: 'hidden' }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom color="primary.main">
          Welcome to Our Recipe Sharing Platform!
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Discover, share, and enjoy delicious recipes from our community! 🍽️
        </Typography>
        
        <Grid container spacing={2} justifyContent="center" mt={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, boxShadow: 4, backgroundColor: `#F0F0F0`, borderRadius: 2 }}>
              <CardContent>
                <Kitchen sx={{ fontSize: 30, color: "#1E88E5" }} />
                <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
                  Explore Recipes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse through a variety of recipes shared by our talented users.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, boxShadow: 4, backgroundColor: `#F0F0F0`, borderRadius: 2 }}>
              <CardContent>
                <People sx={{ fontSize: 30, color: "#1E88E5" }} />
                <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
                  Join Our Community
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Connect with fellow cooking enthusiasts and share your culinary creations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, boxShadow: 4, backgroundColor: `#F0F0F0`, borderRadius: 2 }}>
              <CardContent>
                <AccessAlarm sx={{ fontSize: 30, color: "#1E88E5" }} />
                <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
                  Cooking Tips
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover helpful tips and tricks to enhance your cooking skills.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box mt={3}>
          <Typography variant="h5" fontWeight="bold" color="primary.main">
            🍳 Let's Start Cooking!
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Dive into a world of flavors and creativity. Your next favorite recipe awaits! 🌟
          </Typography>
        </Box>
      </Container>
    </>
  );
}
