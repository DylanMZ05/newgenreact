export const sendMetaEvent = async ({
  eventName,
  eventId,
  emails,
  phones,
  firstName,
  lastName,
  country,
  city,
  zipCode,
  products,
  value,
  currency = "USD",
}: {
  eventName: string;
  eventId?: string;
  emails?: string[];
  phones?: string[];
  firstName?: string;
  lastName?: string;
  country?: string;
  city?: string;
  zipCode?: string;
  products?: { sku: string; quantity: number }[];
  value?: number;
  currency?: string;
}) => {
  try {
    const response = await fetch("/api/meta-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId,
        emails,
        phones,
        firstName,
        lastName,
        country,
        city,
        zipCode,
        products,
        value,
        currency,
      }),
    });

    const data = await response.json();
    console.log(`Evento ${eventName} enviado a Meta`, data);
  } catch (error) {
    console.error("Error enviando evento a Meta:", error);
  }
};