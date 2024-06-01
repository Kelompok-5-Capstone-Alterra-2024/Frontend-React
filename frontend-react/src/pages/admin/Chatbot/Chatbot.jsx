import { useEffect, useState } from 'react';
import admin from "../../../assets/images/admin.png";
import bot from "../../../assets/images/avatar-chatbot.png";

function Chatbot() {
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {    
  }, []);

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pesan awal yang akan dikirimkan ke CineBot
    const promptAwal = 'kamu adalah bot peduli pintar';

    // Struktur body request untuk mengirim pertanyaan ke OpenAI API
    const APIBody = {
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: `${promptAwal} 
          + berikan rekomendasi artikel sesuai pertanyaan dari user 
          + pertanyaan dari user${prompt}`
        }
      ]
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + API_KEY
        },
        body: JSON.stringify(APIBody) // Mengirim data dalam format JSON
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json(); // Mengambil data JSON dari respons
      console.log(data);

      const userMessage = { role: 'user', content: prompt };
      const botMessage = { role: 'bot', content: data.choices[0].message.content };

      setChatHistory([...chatHistory, userMessage, botMessage]);
      setPrompt(''); // Reset the input field
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen flex flex-col">
      <div className="flex-1 overflow-auto p-4">
        {chatHistory.map((message, index) => (
          <div key={index} className={`flex items-start mb-4 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <img
              src={message.role === 'user' ? admin : bot}
              alt={`${message.role} icon`}
              className="w-10 h-10 rounded-full"
            />
            <div className={`ml-2 p-4 rounded-lg ${message.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex p-4 bg-white">
        <input
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border border-gray-300 rounded-md p-2 flex-grow outline-none focus:border-blue-500 bg-white placeholder-gray-300 py-3 text-black"
          placeholder='Type here'
        />
        <button
          type="submit"
          className="bg-primary-main text-white py-3 px-6 rounded hover:bg-blue-500 transition duration-200 ml-2"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
