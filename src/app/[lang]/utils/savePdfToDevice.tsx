// Utility function to save a file to the user's device
const saveFile = (blob: Blob, fileName: string) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to fetch and save the PDF file
export const savePdfToUser = async () => {
  try {
    // Use the correct path relative to the public folder
    const response = await fetch("/assets/resume/CV_Dmytro_Dzharty.pdf");

    if (!response.ok) {
      throw new Error("Failed to fetch the PDF file");
    }

    const blob = await response.blob();

    // Replace 'downloaded-file-name.pdf' with the desired name for the downloaded file
    saveFile(blob, "CV_Dmytro_Dzharty.pdf");
  } catch (error) {
    console.error("Error saving PDF:", error);
  }
};
