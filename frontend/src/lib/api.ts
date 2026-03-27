const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function analyzeResume(
  file: File,
  jobDescription?: string | null
) {
  const formData = new FormData();
  formData.append("resume", file);

  if (jobDescription) {
    formData.append("jobDescription", jobDescription);
  }

  const res = await fetch(`${BASE_URL}/api/analyze`, {
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