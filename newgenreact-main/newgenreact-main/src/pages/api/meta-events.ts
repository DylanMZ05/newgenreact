import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const eventData = {
      data: [
        {
          event_name: req.body.eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: req.body.eventId || `event-${Date.now()}`,
          user_data: {
            em: req.body.emails || [],
            ph: req.body.phones || [],
            fn: req.body.firstName || "",
            ln: req.body.lastName || "",
            country: req.body.country || "",
            city: req.body.city || "",
            zip: req.body.zipCode || "",
          },
          custom_data: {
            currency: req.body.currency || "USD",
            value: req.body.value || 0,
            contents: req.body.products || [],
          },
        },
      ],
      access_token: ACCESS_TOKEN,
    };

    const response = await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error enviando evento a Meta:", error);
    return res.status(500).json({ error: "Error al enviar el evento" });
  }
}