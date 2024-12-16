import React from "react";
import { Leaf } from "lucide-react";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sistem Pakar Diagnosa Penyakit pada Tanaman Padi
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Solusi cerdas untuk mendiagnosa penyakit tanaman padi Anda secara
              cepat dan akurat. Didukung oleh teknologi sistem pakar untuk hasil
              yang terpercaya.
            </p>
            <Button href="#diagnosis" icon={Leaf}>
              Mulai Diagnosa
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
                src="/assets/bg.jpg"
              alt="Rice Field"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
