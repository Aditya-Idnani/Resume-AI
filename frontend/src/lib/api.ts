const RAW_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

function getAnalyzeEndpoint() {
  const normalizedBase = RAW_BASE_URL.replace(/\/+$/, "");
  const withApiPrefix = normalizedBase.endsWith("/api")
    ? normalizedBase
    : `${normalizedBase}/api`;

  return `${withApiPrefix}/analyze`;
}

export async function analyzeResume(
  file: File,
  jobDescription?: string | null
) {
  const formData = new FormData();
  formData.append("resume", file);

  if (jobDescription) {
    formData.append("jobDescription", jobDescription);
  }

  const res = await fetch(getAnalyzeEndpoint(), {
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