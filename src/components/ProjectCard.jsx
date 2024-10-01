import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
  const MAX_DESCRIPTION_LENGTH = 100;

  const handleSeeMore = () => {
    setIsInfoBoxOpen(true);
  };

  const handleCloseInfoBox = () => {
    setIsInfoBoxOpen(false);
  };

  const handleVisitProject = () => {
    window.open(project.projectUrl, "_blank");
  };

  const handleViewCode = () => {
    window.open(project.codeUrl, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          backgroundColor: "#f0f4f8", // Light blue background
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px", // Increased border radius
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          border: "1px solid #e1e8ed", // Light border for definition
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            p: 3,
            backgroundColor: "#ffffff",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 2, color: "#2c3e50" }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{ mb: 2, color: "#34495e" }}
          >
            {project.description.slice(0, MAX_DESCRIPTION_LENGTH)}
            {project.description.length > MAX_DESCRIPTION_LENGTH && "..."}
            <span
            size="small"
            onClick={handleSeeMore}
            sx={{
              alignSelf: "flex-start",
              mb: 2,
              color: "#3498db",
              "&:hover": {
                backgroundColor: "rgba(52, 152, 219, 0.1)",
                color: "#2980b9",
              },
            }}
          >
            See More
          </span>
          </Typography>
          
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleViewCode}
              sx={{
                flex: 1,
                backgroundColor: "#3498db",
                "&:hover": { backgroundColor: "#2980b9" },
              }}
            >
              View Code
            </Button>
            <Button
              variant="outlined"
              onClick={handleVisitProject}
              sx={{
                flex: 1,
                borderColor: "#3498db",
                color: "#3498db",
                "&:hover": {
                  borderColor: "#2980b9",
                  color: "#2980b9",
                  backgroundColor: "rgba(52, 152, 219, 0.1)",
                },
              }}
            >
              Visit Project
            </Button>
          </div>
        </CardContent>
      </Card>

      <AnimatePresence>
        {isInfoBoxOpen && (
          <Dialog
            open={isInfoBoxOpen}
            onClose={handleCloseInfoBox}
            aria-labelledby="project-info-dialog-title"
            aria-describedby="project-info-dialog-description"
            PaperComponent={motion.div}
            PaperProps={{
              initial: { y: -50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: -50, opacity: 0 },
              transition: { type: "spring", stiffness: 300, damping: 30 },
            }}
          >
            <DialogTitle
              id="project-info-dialog-title"
              sx={{ backgroundColor: "#fff", color: "#2c3e50" }}
            >
              {project.title}
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#ffffff" }}>
              <Typography
                id="project-info-dialog-description"
                sx={{ color: "#34495e" }}
              >
                {project.description}
              </Typography>
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "#fff" }}>
              <Button
                onClick={handleCloseInfoBox}
                sx={{
                  backgroundColor: "#3498db",
                  color: "#ffffff",
                  "&:hover": { backgroundColor: "#2980b9" },
                }}
              >
                Got It
              </Button>
              
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
