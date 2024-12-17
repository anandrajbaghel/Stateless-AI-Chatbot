import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 3001;
const API_KEY = process.env.GOOGLE_API_KEY;

// Enable CORS
app.use(cors());
// Parse json body
 app.use(express.json());
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });


app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    console.log("Received message:", message);
     try {
        const result = await model.generateContent(message);
        const response = await result.response;
         const text = response.text();
          console.log("Gemini API Response Text:", text);

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ response: text });
      } catch (error) {
            console.error("Error in api/chat.js:",error);
          res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ error: error.message });
        }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
