import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kontak Kami</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">support@padiku.com</p>
          </div>
          <div className="text-center">
            <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Telepon</h3>
            <p className="text-gray-600">+62 812-3456-7890</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Alamat</h3>
            <p className="text-gray-600">
              Jl. Prof. Dr. Sumantri Brojonegoro No. 1 Bandar Lampung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
