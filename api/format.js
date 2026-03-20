<script>
document.getElementById("submitBtn").onclick = async function (e) {
  e.preventDefault();

  const text = document.getElementById("inputText").value;
  const format = document.getElementById("formatType").value;
  const outputBox = document.getElementById("outputText");

  if (!text) {
    outputBox.innerText = "Please enter some text.";
    return;
  }

  outputBox.innerText = "Formatting...";

  try {
    const res = await fetch("https://altify-cleantext-api.vercel.app/api/format", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text, format })
    });

    const data = await res.json();

    outputBox.innerText = data.output || "No response.";
  } catch (err) {
    outputBox.innerText = "Error processing request.";
  }
};
</script>
  outputBox.innerText = "Error: " + err.message;
}
  }
}
