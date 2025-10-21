import { MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Entre em Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-blue-100">
                    Rua das Flores, 123 - Centro<br />
                    São Paulo, SP - CEP: 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefones</h4>
                  <p className="text-blue-100">
                    (11) 3333-4444<br />
                    Plantão 24h: (11) 9999-8888
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                  <p className="text-blue-100">
                    Segunda a Sexta: 7h às 22h<br />
                    Sábados: 8h às 20h<br />
                    Domingos: 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Seu telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800"
                />
              </div>
              
              <div>
                <textarea
                  name="mensagem"
                  placeholder="Sua mensagem (máximo 500 caracteres)"
                  rows={4}
                  maxLength={500}
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800 resize-none"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.mensagem.length}/500 caracteres
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
