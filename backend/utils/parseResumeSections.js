export const parseResumeSections = (text) => {

  const sections = {
    skills: "",
    experience: "",
    projects: "",
    education: ""
  };

  const lowerText = text.toLowerCase();

  const skillsIndex = lowerText.indexOf("skills");
  const experienceIndex = lowerText.indexOf("experience");
  const projectsIndex = lowerText.indexOf("projects");
  const educationIndex = lowerText.indexOf("education");

  if (skillsIndex !== -1) {
    sections.skills = text.substring(
      skillsIndex,
      experienceIndex !== -1 ? experienceIndex : text.length
    );
  }

  if (experienceIndex !== -1) {
    sections.experience = text.substring(
      experienceIndex,
      projectsIndex !== -1 ? projectsIndex : text.length
    );
  }

  if (projectsIndex !== -1) {
    sections.projects = text.substring(
      projectsIndex,
      educationIndex !== -1 ? educationIndex : text.length
    );
  }

  if (educationIndex !== -1) {
    sections.education = text.substring(educationIndex);
  }

  return sections;
};