import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías integrar un envío real a un backend o email service
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navegación superior */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {/* Logo agregado en la navegación para visibilidad constante */}
          <img src="/logo.png" alt="Logo CERCA SP" className="w-16 h-16" />
          <ul className="flex space-x-6">
            <li><Link href="#nosotros" className="hover:text-blue-600">Nosotros</Link></li>
            <li><Link href="#servicios" className="hover:text-blue-600">Servicios</Link></li>
            <li><Link href="#donar" className="hover:text-blue-600">Donar</Link></li>
            <li><Link href="#contacto" className="hover:text-blue-600">Contacto</Link></li>
            <li><Link href="#testimonios" className="hover:text-blue-600">Testimonios</Link></li>
          </ul>
        </div>
      </nav>

      <div className="space-y-10 p-4 max-w-4xl mx-auto">
        {/* Sección: Portada (logo agregado aquí también para impacto inicial) */}
        <section className="text-center space-y-4 py-10 animate-fade-in">
          <img src="/logo.png" alt="Logo CERCA SP" className="mx-auto w-32 h-32" />
          <h1 className="text-5xl font-bold text-blue-800">Centro de Restauración Contra las Adicciones San Pedro</h1>
          <p className="text-xl text-gray-700">Transformando vidas con amor, verdad y restauración.</p>
          <Link href="#donar">
            <Button className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">Donar Ahora <Heart className="ml-2 w-5 h-5" /></Button>
          </Link>
        </section>

        {/* Sección: Nosotros */}
        <section id="nosotros" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">¿Quiénes Somos?</h2>
          <p className="text-gray-600">
            En CERCA SP ofrecemos un espacio de restauración emocional, física y espiritual para hombres en situación de adicción. Desde nuestra fundación en 2024, hemos atendido con amor y disciplina a más de 100 internos, guiándolos paso a paso hacia la recuperación.
          </p>
          {/* Placeholder para imagen */}
          <img src="/placeholder-nosotros.jpg" alt="Equipo de CERCA SP" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </section>

        {/* Sección: Servicios */}
        <section id="servicios" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h3 className="font-bold">Rehabilitación residencial 24/7</h3>
                <p className="text-sm text-gray-500">Atención integral las 24 horas del día.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h3 className="font-bold">Programa basado en los 12 pasos</h3>
                <p className="text-sm text-gray-500">Método probado para la recuperación.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h3 className="font-bold">Asistencia psicológica y espiritual</h3>
                <p className="text-sm text-gray-500">Apoyo holístico para mente y espíritu.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h3 className="font-bold">Integración familiar y juntas de conciencia</h3>
                <p className="text-sm text-gray-500">Reconstruyendo lazos familiares.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección: Donar */}
        <section id="donar" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">Haz un Donativo</h2>
          <p className="text-gray-600">
            Tu apoyo permite seguir restaurando vidas. Aceptamos transferencias y ofrecemos recibos deducibles de impuestos.
          </p>
          <Card className="shadow-lg">
            <CardContent className="p-4 space-y-2">
              <p><strong>Cuenta Bancaria:</strong> [CLABE o número de cuenta aquí]</p>
              <p><strong>Nombre de la A.C.:</strong> Centro de Restauración Contra las Adicciones San Pedro A.C.</p>
              <p><strong>RFC:</strong> [RFC de la A.C.]</p>
              <p><strong>Email para comprobante fiscal:</strong> cercaspac@gmail.com</p>
            </CardContent>
          </Card>
          <form className="space-y-4">
            <Input placeholder="Monto a donar" type="number" />
            <Button className="w-full bg-green-600 hover:bg-green-700">Donar vía Transferencia</Button>
          </form>
        </section>

        {/* Sección: Contacto */}
        <section id="contacto" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">Contacto</h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> Ibrahim: +52 872 108 4263</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> Fernando: +52 872 105 3079</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> cercaspac@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> San Pedro, Nuevo León, México</p>
            <Link href="https://wa.me/528721084263"><Button variant="outline" className="mr-2">WhatsApp Ibrahim</Button></Link>
            <Link href="https://wa.me/528721053079"><Button variant="outline">WhatsApp Fernando</Button></Link>
            <Link href="https://www.facebook.com/61578389904307/posts/1709332106366500/?substory_index=1709332106366500" target="_blank">
              <Button variant="outline" className="mt-2"><Facebook className="mr-2 w-4 h-4" /> Facebook Oficial</Button>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Tu nombre" value={formData.name} onChange={handleInputChange} required />
            <Input name="email" placeholder="Tu email" type="email" value={formData.email} onChange={handleInputChange} required />
            <Textarea name="message" placeholder="Tu mensaje" value={formData.message} onChange={handleInputChange} required />
            <Button type="submit" className="w-full">Enviar Mensaje</Button>
            {submitted && <p className="text-green-600">¡Mensaje enviado con éxito!</p>}
          </form>
        </section>

        {/* Sección: Testimonios */}
        <section id="testimonios" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="shadow-lg">
              <CardContent className="p-4 italic text-gray-600">
                "Gracias a CERCA SP recuperé mi dignidad y mi familia. Hoy soy un hombre nuevo."
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-4 italic text-gray-600">
                "Encontré en este lugar amor, guía y discipline. Aquí comenzó mi nueva vida."
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-4 italic text-gray-600">
                "CERCA SP me dio las herramientas para reconstruir mi futuro. ¡Gracias por creer en mí!"
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center p-4 mt-10">
        <p>© 2025 Centro de Restauración Contra las Adicciones San Pedro. Todos los derechos reservados.</p>
        <Link href="#top" className="text-blue-300 hover:underline">Volver arriba</Link>
      </footer>

      {/* Estilos globales */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
