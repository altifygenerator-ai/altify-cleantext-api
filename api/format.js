export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

   const body = req.body || {};
const text = body.text;
const format = body.format;
const mode = body.mode;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    let instruction = "";

    // 🔵 NEW LINKEDIN MODE
    if (mode === "linkedin") {
      instruction = `
Rewrite this into a high-performing LinkedIn post.

- Start with a strong hook (first line)
- Use short lines
- Add spacing between ideas
- Make it sound natural and human
- Avoid robotic phrasing
- End with a simple call to action

Text:
${text}
`;
    }

    // 🟢 EXISTING MODES (UNCHANGED)
    else if (format === "Blog") {
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
        input: [
          {
            role: "user",
            content: `${instruction}\n\nText:\n${text}`
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "API error");
    }

    const output =
      data.output?.[0]?.content?.[0]?.text || "No response.";

    res.status(200).json({ output });

  } catch (err) {
  console.error("FRONTEND ERROR:", err);
  outputBox.innerText = "Error: " + err.message;
}
  }
}
