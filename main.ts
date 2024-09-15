document.addEventListener("DOMContentLoaded", () => {
    // Retrieve form and necessary elements
    const generateResumeButton = document.getElementById("generateResumeButton") as HTMLButtonElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
  
    // Function to generate and display the resume
    function generateResume(): void {
      // Retrieve values from input fields
      const name = (document.getElementById("name") as HTMLInputElement).value.trim();
      const email = (document.getElementById("email") as HTMLInputElement).value.trim();
      const number = (document.getElementById("number") as HTMLInputElement).value.trim();
      const address = (document.getElementById("address") as HTMLInputElement).value.trim();
      const degree = (document.getElementById("degree") as HTMLInputElement).value.trim();
      const school = (document.getElementById("school") as HTMLInputElement).value.trim();
      const year = (document.getElementById("year") as HTMLInputElement).value.trim();
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.trim();
  
      // Validate all fields are filled
      if (!name || !email || !number || !address || !degree || !school || !year || !skills) {
        alert("Please fill in all fields.");
        return; // Stop execution if validation fails
      }
  
      // Create a formatted resume using editable input fields
      const resumeHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> <input type="text" value="${name}" /></p>
        <p><strong>Email:</strong> <input type="email" value="${email}" /></p>
        <p><strong>Phone Number:</strong> <input type="tel" value="${number}" /></p>
        <p><strong>Address:</strong> <input type="text" value="${address}" /></p>
        <h3>Education</h3>
        <p><strong>Degree:</strong> <input type="text" value="${degree}" /></p>
        <p><strong>School/University:</strong> <input type="text" value="${school}" /></p>
        <p><strong>Year:</strong> <input type="text" value="${year}" /></p>
        <h3>Skills</h3>
        <p><textarea rows="3">${skills}</textarea></p>
      `;
  
      // Display the formatted resume
      resumeOutput.innerHTML = resumeHTML;
    }
  
    // Attach the function to the button click event
    generateResumeButton.addEventListener("click", generateResume);
  });