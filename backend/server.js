import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

// replace with your actual bot token and chat id
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const text = `
📩 *New Message from Portfolio Website*

👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}

💬 Message:
${message}
  `;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: "Markdown",
                }),
            }
        );

        if (!response.ok) throw new Error("Failed to send message to Telegram");

        return res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send message" });
    }
});

app.listen(3000, () => {
    console.log("Backend service running on port 3000");
});
