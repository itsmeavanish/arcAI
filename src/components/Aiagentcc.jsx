'use client';
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    MessageCircle,
    Send,
    MoreVertical,
    Mic,
    MicOff,
    Play,
    Pause,
    DivideSquare as SquareDivide,
    Languages,
    Microscope,
    Computer
} from 'lucide-react';

function AIAGENTCC() {
    const videoRef = useRef(null);
    const chatContainerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'agent', text: 'Hi! Welcome to AI Customer Care, How can I help you?' }
    ]);
    const [inputText, setInputText] = useState('');
    const recognitionRef = useRef(null);
    const mediaRecorderRef = useRef(null);

    // Setup speech recognition on mount.
    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            recognitionRef.current = new window.webkitSpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                // Use our new voice flow for processing voice queries.
                handleVoiceQuery(transcript);
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setIsRecording(false);
            };

            recognitionRef.current.onend = () => {
                setIsRecording(false);
            };
        }
    }, []);

    // Auto-scroll chat container to bottom whenever messages update.
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Toggle video play/pause.
    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            setIsRecording(true);
            if (recognitionRef.current) {
                recognitionRef.current.start();
            }
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const stopRecording = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        setIsRecording(false);
    };

    // For text input (typed messages).
    const handleTextApiCall = async (text) => {
        setMessages(prev => [...prev, { type: 'agent', text: 'Thinking...', loading: true }]);

        try {
            const response = await fetch('http://127.0.0.1:8000/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: text, customer_id: "anurag818" })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const replyText = data.response || "Sorry, I didn't understand that.";

            setTimeout(() => {
                setMessages(prev => [
                    ...prev.filter(msg => !msg.loading),
                    { type: 'agent', text: replyText }
                ]);
            }, 1000);

            return replyText;

        } catch (error) {
            console.error('API call failed:', error);
            setMessages(prev => [
                ...prev.filter(msg => !msg.loading),
                { type: 'agent', text: 'Sorry, I encountered an error. Please try again.' }
            ]);
        }
    };


    // For voice input: process transcript via Gemini then convert text to audio.
    const handleVoiceQuery = async (transcript) => {
        // Display user's voice input.
        setMessages(prev => [...prev, { type: 'user', text: transcript }]);
        // Show a loading message.
        setMessages(prev => [...prev, { type: 'agent', text: 'Thinking (voice command)...', loading: true }]);
        try {
            // Call Gemini API.
            //   const { GoogleGenerativeAI } = require("@google/generative-ai");
            //   const api = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
            var resultText = "";
            try {
                const response = await fetch('http://127.0.0.1:8000/query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ query: transcript, customer_id: "anurag818" })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const replyText = data.response || "Sorry, I didn't understand that.";

                setTimeout(() => {
                    setMessages(prev => [
                        ...prev.filter(msg => !msg.loading),
                        { type: 'agent', text: replyText }
                    ]);
                }, 1000);

                resultText = replyText;

            } catch (error) {
                // resultText = "";
                console.error('API call failed:', error);
                setMessages(prev => [
                    ...prev.filter(msg => !msg.loading),
                    { type: 'agent', text: 'Sorry, I encountered an error. Please try again.' }
                ]);
            }


            // Remove the loading message.
            setMessages(prev => prev.filter(msg => !msg.loading));

            // Now call the text-to-speech endpoint with the Gemini text.
            const ttsResponse = await fetch('http://127.0.0.1:8000/texttovoice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: resultText })
            });
            if (!ttsResponse.ok) {
                throw new Error('TTS response not ok');
            }
            const audioBlob = await ttsResponse.blob();
            console.log("Audio blob size (voice query):", audioBlob.size);
            if (audioBlob.size === 0) {
                console.error("Empty audio blob. Check backend response or CORS.");
            }
            const audioUrl = URL.createObjectURL(audioBlob);
            // Display the audio with improved UI.
            setMessages(prev => [...prev, { type: 'agent-voice', audioUrl }]);
            return audioUrl;
        } catch (error) {
            console.error('Voice query failed:', error);
            setMessages(prev => [
                ...prev.filter(msg => !msg.loading),
                { type: 'agent', text: 'Sorry, I encountered an error with voice input. Please try again.' }
            ]);
        }
    };

    const handleSendMessage = () => {
        if (!inputText.trim()) return;
        setMessages(prev => [...prev, { type: 'user', text: inputText }]);
        handleTextApiCall(inputText);
        setInputText('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center my-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Try the Customer Care Agent now!!
                </h2>
                <h4 className="text-xl md:text-xl font-bold mb-6">
                    Here is the demo for arcAI customer support
                </h4>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Experience seemless support with our AI Agent - your personal agent in the palm of your hand!
                </p>
            </motion.div>
            {/* Header */}
            <nav className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center justify-between py-4 text-sm md:text-base gap-4 overflow-x-auto">
                        <li className="cursor-pointer hover:text-gray-400 whitespace-nowrap">
                            <SquareDivide className="w-8 h-8 mr-2 inline" stroke="#6453b6" /> Healthcare
                        </li>
                        <li className="cursor-pointer hover:text-gray-400 whitespace-nowrap">
                            <Languages className="w-8 h-8 mr-2 inline" stroke="#7453b6" /> E-commerce
                        </li>
                        <li className="cursor-pointer hover:text-gray-400 whitespace-nowrap">
                            <Microscope className="w-8 h-8 mr-2 inline" stroke="#7453b6" /> Quick Commerce
                        </li>
                        <li className="cursor-pointer hover:text-gray-400 whitespace-nowrap">
                            <Computer className="w-8 h-8 mr-2 inline" stroke="#7453b6" /> Technology
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 z-10 relative bg-[#121212]/10">
                {/* Video Section */}
                <div className="relative w-full md:w-2/3 bg-[#121212] rounded-xl overflow-hidden shadow-md flex">
                    {/* <video
            ref={videoRef}
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="https://framerusercontent.com/assets/WGdMSI7rMnyC5wedujwMKYP9iPU.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
                    {/* 
          <button
            onClick={handlePlayPause}
            className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-2 rounded-full hover:bg-opacity-90 transition"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-white" />
            ) : (
              <Play className="h-5 w-5 text-white" />
            )}
          </button> */}
                    <img src="https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg?t=st=1744282982~exp=1744286582~hmac=aea5b89545ad5d3459a1cf510b7f182ed410be5dd11f8ab7b668ac2720a2605d&w=1380" alt="Video" className="w-full h-auto object-cover" />

                    <div className="absolute top-4 left-4 bg-black bg-opacity-70 px-3 py-2 rounded-md">
                        <p className="font-semibold text-sm">AI Agents</p>
                        <p className="text-xs text-gray-300">Interactive Customer Support</p>
                    </div>
                </div>

                {/* Chat Section */}
                <div className="w-full md:w-1/3 bg-[#1a1a1a] rounded-xl shadow-md flex flex-col h-[600px]">
                    <div className="border-b border-gray-800 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-5 h-5 text-blue-500" />
                            <h2 className="font-semibold text-sm md:text-base">Ask Your Questions</h2>
                        </div>
                        <button className="p-1 hover:bg-[#2a2a2a] rounded transition">
                            <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                    </div>

                    <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex items-start space-x-2 ${message.type === 'user' ? 'justify-end' : ''}`}>
                                {message.type !== 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-yellow-600 flex-shrink-0" />
                                )}
                                <div className={`px-3 py-2 rounded-lg max-w-[80%] ${message.type === 'user' ? 'bg-[#333333]' : 'bg-[#2a2a2a]'}`}>
                                    {message.type === 'agent-voice' ? (
                                        <audio autoPlay controls src={message.audioUrl}></audio>
                                    ) : (
                                        <p className="text-sm leading-relaxed">{message.text}</p>
                                    )}
                                </div>
                                {message.type === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-800 p-4 z-10 bg-[#121212]">
                        <div className="flex items-center space-x-2">
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your question..."
                                className="flex-1 bg-[#2a2a2a] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                                rows={1}
                            />
                            <button
                                onClick={() => isRecording ? stopRecording() : startRecording()}
                                className={`p-2 rounded-full transition ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-[#2a2a2a] hover:bg-[#333333]'}`}
                            >
                                {isRecording ? (
                                    <MicOff className="w-5 h-5" />
                                ) : (
                                    <Mic className="w-5 h-5" />
                                )}
                            </button>
                            <button
                                onClick={handleSendMessage}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1"
                            >
                                <Send className="w-4 h-4" />
                                <span>Send</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AIAGENTCC;
