// src/hooks/useMetaConversion.ts
export const sendMetaEvent = async (eventName: string, email: string, value: number) => {
  try {
    const eventData = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      user_data: {
        em: email, // Se puede hashear en el backend
      },
      custom_data: {
        currency: "USD",        value,
      },
    };

    const response = await fetch("http://localhost:3001/meta-conversion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();
    console.log("Meta Event Sent:", result);
  } catch (error) {
    console.error("Error sending event to Meta:", error);
  }
};