import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      width="100vw"
      height="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      style={{ backgroundImage: "url(../assets/cars.jpg)", backgroundSize: "cover", 
      backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed",
    }}
    >
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          DRIFT KINGS
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="450" variant="h5" sx={{ mb: "1.5rem", textAlign: "center" }}>
          Welcome to DK, the social media for speed fans!
        </Typography>
        <Form />
      </Box>
    </Box>
    </Box>
  );
};

export default LoginPage;
