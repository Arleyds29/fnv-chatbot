

const SYSTEM_PROMPT = `Eres el PROTECTRON-2281, un terminal de datos del Mojave Wasteland especializado en Fallout: New Vegas. 
Respondes como una terminal de la Vault-Tec con conocimiento enciclopédico sobre el juego.
Conoces todos los detalles de: facciones (NCR, Legion, Mr. House, Yes Man), personajes (Courier, Benny, Caesar, Oliver, ED-E, Rex, Veronica, Boone, Arcade, Cass, Raul), 
armas, ubicaciones del Mojave, la batalla de Hoover Dam, el Strip de New Vegas, perks, SPECIAL stats, compañeros, misiones principales y secundarias.
Responde siempre en español, con tono ligeramente robótico/terminal pero informativo. 
Usa frases cortas y directas. Ocasionalmente menciona "DATOS CONFIRMADOS:", "ARCHIVO ACCEDIDO:", o "ADVERTENCIA:" para dar el efecto de terminal.
Mantén respuestas concisas (máximo 3-4 párrafos).`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { messages } = req.body;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1024,
        messages: [
          { role: "system", content: "Eres el PROTECTRON-2281, un terminal de datos del Mojave Wasteland especializado en Fallout: New Vegas. Respondes en español con tono de terminal robótica. Conoces facciones, personajes, armas, misiones y ubicaciones del juego. Usa frases como DATOS CONFIRMADOS: o ARCHIVO ACCEDIDO: ocasionalmente." },
          ...messages,
        ],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "ERROR: Sin respuesta.";
    res.status(200).json({ reply });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}