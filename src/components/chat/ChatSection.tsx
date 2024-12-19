import React from "react";
import { ChatWindow } from "./ChatWindow";
import { MessageSquare } from "lucide-react";

export function ChatSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">TanyaPadiku</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Konsultasikan masalah tanaman padi Anda dengan TanyaPadiku.
              Dapatkan diagnosis cepat dan akurat beserta rekomendasi
              penanganan.
            </p>
          </div>

          <ChatWindow />
        </div>
      </div>
    </section>
  );
}
