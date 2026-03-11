# 🤖 PROTECTRON-2281 — Chatbot Fallout: New Vegas

Chatbot temático de Fallout: New Vegas usando **Groq API + LLaMA 3.3 70B** desplegado en **Vercel**.

---

## 📁 Estructura del proyecto

```
fnv-chatbot/
├── api/
│   └── chat.js        ← Serverless function (backend con Groq)
├── public/
│   └── index.html     ← Frontend (terminal estilo Fallout)
├── vercel.json        ← Configuración de Vercel
├── package.json
└── README.md
```

---

## 🚀 Pasos para desplegar

### PASO 1 — Obtener API Key de Groq (GRATIS)
1. Ve a https://console.groq.com
2. Crea una cuenta gratuita
3. En "API Keys" → genera una nueva clave
4. Guárdala, la necesitarás en el Paso 4

### PASO 2 — Instalar Vercel CLI
```bash
npm install -g vercel
```

### PASO 3 — Subir el proyecto
```bash
cd fnv-chatbot
vercel deploy
```
- Sigue las instrucciones (nombre del proyecto, etc.)
- Cuando pregunte si es el directorio raíz: **sí**

### PASO 4 — Agregar la API Key
1. Ve a https://vercel.com → tu proyecto
2. **Settings → Environment Variables**
3. Agrega:
   - **Name:** `GROQ_API_KEY`
   - **Value:** `tu_api_key_de_groq`
   - **Environments:** Production, Preview, Development ✓

### PASO 5 — Deploy final con la variable
```bash
vercel --prod
```

¡Listo! Tu chatbot estará en `https://tu-proyecto.vercel.app`

---

## 🔧 Personalizar el bot

En `api/chat.js`, cambia el `SYSTEM_PROMPT` para adaptar la personalidad.

Por ejemplo, para que sea experto solo en una facción:
```js
const SYSTEM_PROMPT = `Eres un emisario de la Legión de César...`;
```

---

## 💡 Diferencia con tu notebook de Colab

| Colab (tu notebook)        | Este proyecto (Vercel)     |
|---------------------------|---------------------------|
| Groq + LangChain           | Groq API directa (fetch)   |
| Corre en Google Colab      | Corre en la web (Vercel)   |
| LLaMA 3.3-70b-versatile    | LLaMA 3.3-70b-versatile    |
| RAG con .txt               | System prompt integrado    |
| Solo tú lo usas            | Cualquiera puede acceder   |
