"use client";

import React, { useState, useRef, useEffect } from "react";

const FAQ_SECTIONS = [
  {
    title: "General",
    faqs: [
      { question: "What services do you offer?", answer: "We offer AI integration, branding, web development, and workflow automation services." },
      { question: "Where are you located?", answer: "We are a remote-first company with team members worldwide." },
      { question: "What is your pricing model?", answer: "Our pricing is customized based on your project needs. Contact us for a quote!" },
      { question: "Do you offer support after project delivery?", answer: "Yes, we offer ongoing support and maintenance packages." },
    ],
  },
  {
    title: "Contact & Communication",
    faqs: [
      { question: "How can I contact you?", answer: "You can contact us via our website's contact form or email us at info@neuralflow.com." },
      { question: "What is your response time?", answer: "We typically respond within 24 hours on business days." },
      { question: "Can I schedule a call?", answer: "Absolutely! Use our contact form to request a call and we’ll arrange a suitable time." },
      { question: "Do you offer consultations?", answer: "Yes, we offer free initial consultations to discuss your project needs." },
    ],
  },
  {
    title: "Project Process",
    faqs: [
      { question: "How does your project process work?", answer: "We start with a consultation, then move to planning, design, development, and delivery, with regular updates throughout." },
      { question: "Can I request changes during the project?", answer: "Yes, we encourage feedback and can accommodate changes during the project lifecycle." },
      { question: "How do you ensure quality?", answer: "We follow best practices, thorough testing, and regular reviews to ensure top quality." },
      { question: "What if I need urgent help?", answer: "Contact us directly and we’ll prioritize urgent requests as best as we can." },
    ],
  },
  {
    title: "Payment & Security",
    faqs: [
      { question: "What payment methods do you accept?", answer: "We accept bank transfers, credit cards, and PayPal." },
      { question: "Is my data secure?", answer: "Yes, we follow strict security protocols to keep your data safe and confidential." },
      { question: "Do you require an upfront payment?", answer: "For most projects, we require a deposit to begin work." },
      { question: "Can I get a refund?", answer: "Refunds are handled on a case-by-case basis. Please contact us for details." },
    ],
  },
  {
    title: "Aftercare & Support",
    faqs: [
      { question: "What support do you offer after launch?", answer: "We offer maintenance packages and ongoing support tailored to your needs." },
      { question: "Can you update my website after delivery?", answer: "Yes, we can provide updates and new features as your business grows." },
      { question: "How do I report a bug?", answer: "Contact us via email or our support form and we’ll address it promptly." },
      { question: "Do you offer training?", answer: "Yes, we can provide training sessions for your team on using your new solution." },
    ],
  },
];

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your assistant. Select a section to get started." },
  ]);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSectionClick = (idx: number) => {
    setActiveSection(idx);
  };

  const handleQuestionClick = (question: string, answer: string) => {
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: question },
      { from: "bot", text: answer },
    ]);
  };

  const handleBack = () => {
    setActiveSection(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Button */}
      {!open && (
        <button
          className="bg-gradient-to-br from-[#2D3047] to-[#1e3a8a] text-white rounded-full shadow-xl p-4 hover:scale-105 transition-transform duration-200 focus:outline-none border border-white/20 backdrop-blur-md"
          onClick={() => setOpen(true)}
          aria-label="Open chatbot"
          style={{ boxShadow: "0 4px 24px 0 rgba(30,58,138,0.18)" }}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.03 2 11c0 2.39 1.05 4.55 2.82 6.19L4 22l4.13-1.09C9.41 21.63 10.68 22 12 22c5.52 0 10-4.03 10-9s-4.48-9-10-9Zm0 16c-1.1 0-2.17-.18-3.17-.52l-.23-.08-.24.06-2.44.65.66-2.36.07-.25-.18-.19C4.21 14.01 3.25 12.57 3.25 11c0-3.87 3.86-7 8.75-7s8.75 3.13 8.75 7-3.86 7-8.75 7Z"/></svg>
        </button>
      )}
      {/* Chat Window */}
      {open && (
        <div className="w-80 max-w-sm rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden animate-fade-in"
          style={{
            background: "rgba(45, 48, 71, 0.85)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px 0 rgba(30,58,138,0.18)",
            maxHeight: '80vh',
          }}
        >
          <div className="flex items-center justify-between px-3 py-2" style={{
            background: "linear-gradient(90deg, #2D3047 60%, #1e3a8a 100%)",
            color: "#fff"
          }}>
            <span className="font-semibold tracking-wide text-sm">Chatbot</span>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot" className="hover:text-gray-200">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4Z"/></svg>
            </button>
          </div>
          <div className="flex-1 px-3 py-2 space-y-2 overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(80vh - 160px)', background: "rgba(255,255,255,0.04)" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-3 py-2 rounded-xl text-xs max-w-[80%] shadow ${msg.from === "user" ? "bg-gradient-to-br from-[#1e3a8a]/90 to-[#2D3047]/90 text-white" : "bg-white/80 text-[#2D3047] border border-gray-200"}`}
                  style={msg.from === "user" ? { fontWeight: 500 } : {}}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Section or Question List */}
          <div className="px-3 py-3 bg-white/10 backdrop-blur-sm border-t border-white/10">
            {!activeSection && activeSection !== 0 && (
              <div className="space-y-2">
                {FAQ_SECTIONS.map((section, idx) => (
                  <button
                    key={section.title}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gradient-to-br from-[#F7F7F7]/80 to-[#EBF4FF]/80 text-[#2D3047] font-semibold shadow-sm border border-[#1e3a8a]/10 hover:bg-[#EBF4FF] hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] flex items-center gap-2 text-xs"
                    onClick={() => handleSectionClick(idx)}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-[#1e3a8a] opacity-70"></span>
                    {section.title}
                  </button>
                ))}
              </div>
            )}
            {(activeSection || activeSection === 0) && (
              <div className="space-y-2">
                <button
                  className="mb-2 text-xs text-white font-semibold flex items-center gap-1 hover:underline focus:outline-none"
                  onClick={handleBack}
                >
                                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="#1e3a8a" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                  Back to sections
                </button>
                {FAQ_SECTIONS[activeSection].faqs.map((faq) => (
                  <button
                    key={faq.question}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gradient-to-br from-[#F7F7F7]/80 to-[#EBF4FF]/80 text-[#2D3047] font-medium shadow-sm border border-[#1e3a8a]/10 hover:bg-[#EBF4FF] hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] text-xs"
                    onClick={() => handleQuestionClick(faq.question, faq.answer)}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.25s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #1e3a8a rgba(45,48,71,0.12);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: rgba(45,48,71,0.08);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #419D78 40%, #2D3047 100%);
          border-radius: 8px;
          min-height: 24px;
          border: 2px solid rgba(65,157,120,0.15);
          backdrop-filter: blur(2px);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2D3047 60%, #419D78 100%);
          border: 2px solid rgba(45,48,71,0.18);
        }
      `}</style>
    </div>
  );
};

export default Chatbot; 