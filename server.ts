import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API Routes ---
  
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", environment: process.env.NODE_ENV || "development" });
  });

  // Mock chat endpoint
  app.post("/api/chat", (req, res) => {
    const { message } = req.body;
    
    // Simulate AI thinking and response
    setTimeout(() => {
      res.json({
        id: Date.now().toString(),
        sender: 'ai',
        text: `I received your message: "${message}". The backend is successfully connected and processing requests! How can I assist you further with building or optimizing your outreach?`
      });
    }, 1000);
  });
  
  // Mock data import endpoint
  app.post("/api/data-import", (req, res) => {
    // In a real app we'd parse multiparty form data here
    setTimeout(() => {
      res.json({
        success: true,
        message: "Data successfully imported and processed by the backend engine."
      });
    }, 1500);
  });

  // --- Vite Middleware ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
