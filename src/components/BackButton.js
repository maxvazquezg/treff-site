import { Box, Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        onClick={() => navigate(-1)}
        color="primary"
        className="pl-2"
        aria-label="add"
        sx={{
          margin: 0,
          top: "auto",
          left: 20,
          bottom: 20,
          // left: "auto",
          position: "fixed",
        }}
      >
        <ArrowBackIosIcon />
      </Fab>
    </Box>
  );
};

export default BackButton;
