import { improveBullet } from "../services/bulletImprover.js";

export const improveResumeBullet = async (req, res) => {
  try {
    const { bullet } = req.body;

    if (!bullet) {
      return res.status(400).json({ error: "Bullet is required" });
    }

    const improved = await improveBullet(bullet);

    res.json({ improved });
  } catch {
    res.status(500).json({ error: "Failed to improve bullet" });
  }
};