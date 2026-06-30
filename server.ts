import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // MailerLite subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    
    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    
    if (!MAILERLITE_API_KEY) {
      console.warn("MAILERLITE_API_KEY is not set. Simulating successful subscription.");
      // Simulate success if API key is not configured yet
      return res.status(200).json({ message: "Successfully subscribed" });
    }
    
    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${MAILERLITE_API_KEY}`
        },
        body: JSON.stringify({
          email: email
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("MailerLite error:", errorData);
        return res.status(response.status).json({ error: "Failed to subscribe" });
      }
      
      res.status(200).json({ message: "Successfully subscribed" });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
