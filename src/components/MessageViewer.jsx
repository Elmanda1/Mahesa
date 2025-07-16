import React from 'react';
import { Download } from 'lucide-react';

const MessageViewer = ({ isOpen, onClose, messages }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Kenangan Tersimpan</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl hover:rotate-90 transition-all duration-300"
          >
            ×
          </button>
        </div>

        {/* Messages Content */}
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 text-pink-400/50 animate-bounce">✉️</div>
            <p className="text-gray-500">Belum ada pesan yang tersimpan</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-pink-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span>{msg.timelineData?.icon}</span>
                  <h4 className="font-semibold">{msg.timelineData?.title}</h4>
                  <span className="text-sm text-gray-500">
                    ({new Date(msg.timestamp).toLocaleString('id-ID')})
                  </span>
                </div>
                <p className="text-gray-700">{msg.content}</p>
                <div className="mt-2 text-sm text-gray-500">
                  Dari: {msg.sender || 'Anonymous'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageViewer;