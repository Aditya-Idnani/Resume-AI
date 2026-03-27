export async function analyzeResume(
  file: File,
  jobDescription?: string | null
) {
  const formData = new FormData();
  formData.append("resume", file);

  if (jobDescription) {
    formData.append("jobDescription", jobDescription);
  }

  const res = await fetch("http://localhost:5050/api/analyze", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Backend error:", text);
    throw new Error("Analysis failed");
  }

  return res.json();
}