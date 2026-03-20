export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { text, format } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    let instruction = "";

    if (format === "Blog") {
      instruction = "Format this into a clean blog post with headings.";
    } else if (format === "Summary") {
      instruction = "Summarize this into bullet points.";
    } else if (format === "Social") {
      instruction = "Rewrite as a social media post.";
    } else {
      instruction = "Clean and improve readability.";
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: `${instruction}\n\nText:\n${text}`
      })
    });

    const data = await response.json();

    const output =
      data.output?.[0]?.content?.[0]?.text || "No response.";

    res.status(200).json({ output });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
