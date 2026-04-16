export function extractKeywords(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 3);
}

export function compareKeywords(resumeText: string, jobDesc: string) {
  const resumeWords = new Set(extractKeywords(resumeText));
  const jobWords = new Set(extractKeywords(jobDesc));

  const matched: string[] = [];
  const missing: string[] = [];

  jobWords.forEach((word) => {
    if (resumeWords.has(word)) matched.push(word);
    else missing.push(word);
  });

  const matchPercentage =
    jobWords.size === 0
      ? 0
      : Math.round((matched.length / jobWords.size) * 100);

  return {
    matched,
    missing,
    matchPercentage,
  };
}