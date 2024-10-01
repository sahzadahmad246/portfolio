<div className="flex justify-between">
{/* View Project Button */}
<Button
  variant="contained"
  className="mr-2"
  onClick={() => {
    if (project.title === "Soni Painting Services") {
      window.open("https://sonipainting.com/", "_blank");
    } else if (project.title === "Invoicer") {
      window.open(
        "https://invoicer-1c55.onrender.com/",
        "_blank"
      );
    } else if (
      project.title === "Thai Chilli Food Ordering"
    ) {
      window.open(
        "https://resfront.onrender.com/",
        "_blank"
      );
    }
  }}
>
  View Project
</Button>
{/* View Code Button */}
<Button
  variant="outlined"
  onClick={() => {
    if (project.title === "Soni Painting Services") {
      window.open(
        "https://github.com/sahzadahmad246/sonipainting",
        "_blank"
      );
    } else if (project.title === "Invoicer") {
      window.open(
        "https://github.com/sahzadahmad246/invoicer",
        "_blank"
      );
    } else if (
      project.title === "Thai Chilli Food Ordering"
    ) {
      window.open(
        "https://github.com/sahzadahmad246/resturant-frontend",
        "_blank"
      );
    }
  }}
>
  View Code
</Button>
</div>