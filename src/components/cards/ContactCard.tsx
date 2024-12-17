import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactCard() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "support@padiku.com",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812-3456-7890",
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jl. Prof. Dr. Sumantri Brojonegoro No. 1 Bandar Lampung",
    },
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        Kontak Kami
      </h3>
      <div className="space-y-6">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/30">
              <contact.icon className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="font-medium text-gray-800 dark:text-white">
                {contact.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {contact.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
