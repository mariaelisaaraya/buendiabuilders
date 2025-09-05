'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/language-provider';
import {
  Github, Twitter, Linkedin, Mail, Calendar, Code, Users, Heart, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const communityLinks = [
    { label: 'Enviar mensaje', href: 'mailto:hola@buendiabuilders.com', description: 'Contáctanos por correo', status: 'active' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/buendiabuilders', description: 'Conecta con nuestra red profesional', status: 'online' },
    { label: 'Telegram', href: '#', description: 'Participa en nuestras conversaciones', status: 'active' },
    { label: 'Discord', href: '#', description: 'Únete a nuestros canales de discusión', status: 'online' },
  ];

  const resourceLinks = [
    { label: 'Kit de Herramientas para Builders', href: '#', isNew: true },
    { label: 'Calendario de Eventos', href: '#' },
    { label: 'Ruta de Aprendizaje', href: '#' },
  ];

  const aboutLinks = [
    { label: 'Nuestra Historia', href: '#' },
    { label: 'Equipo', href: '#' },
    { label: 'Kit de Prensa', href: '#' },
  ];

  const connectLinks = [
    { label: 'Formulario de Aplicación', href: '#', highlight: true },
    { label: 'Información para Patrocinadoras', href: '#' },
    { label: 'Contacto', href: '#' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/buendiabuilders', label: 'X (Twitter)', description: 'Síguenos en X' },
    { icon: Github, href: 'https://github.com/buendiabuilders', label: 'GitHub', description: 'Explora nuestros proyectos' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border text-foreground">
      {/* Newsletter Section */}
      <div className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            {t('footer.newsletter')}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Recibe las últimas novedades del ecosistema Web3 en LATAM
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-5 md:grid-cols-2 gap-8">
        {/* Comunidad */}
        <div>
          <h3 className="text-lg font-black mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />
            Comunidad
          </h3>
          <div className="space-y-4">
            {communityLinks.map((link, index) => (
              <div key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between group hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="font-medium">{link.label}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 ml-2 mt-1" />
                </a>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${link.status === 'active' ? 'bg-green-500' :
                      link.status === 'online' ? 'bg-blue-500 animate-pulse' :
                        link.status === 'recent' ? 'bg-yellow-500' :
                          'bg-gray-400 dark:bg-gray-600'
                    }`} />
                  {link.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos */}
        <div>
          <h3 className="text-lg font-black mb-6 flex items-center">
            <Code className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" />
            Recursos
          </h3>
          <div className="space-y-4">
            {resourceLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group hover:text-green-500 dark:hover:text-green-400 transition-colors"
              >
                <span className="font-medium">{link.label}</span>
                {link.isNew && (
                  <span className="ml-2 px-2 py-0.5 bg-green-500 text-gray-900 dark:text-gray-100 rounded-full text-xs font-bold">
                    Próximamente
                  </span>
                )}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 ml-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Nosotras */}
        <div>
          <h3 className="text-lg font-black mb-6 flex items-center">
            <Heart className="w-5 h-5 mr-2 text-red-500 dark:text-red-400" />
            Nosotras
          </h3>
          <div className="space-y-4">
            {aboutLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-medium hover:text-red-500 dark:hover:text-red-400 group"
              >
                <span className="flex items-center">
                  {link.label}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 ml-2" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Conecta */}
        <div>
          <h3 className="text-lg font-black mb-6 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
            Conecta
          </h3>
          <div className="space-y-4">
            {connectLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block font-medium group ${link.highlight ? 'text-purple-500 hover:text-purple-400' : 'hover:text-purple-500 dark:hover:text-purple-400'
                  }`}
              >
                <span className="flex items-center">
                  {link.label}
                  {link.highlight && (
                    <span className="ml-2 px-2 py-0.5 bg-purple-500 text-gray-900 dark:text-gray-100 rounded-full text-xs font-bold">
                      ¡HOT!
                    </span>
                  )}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 ml-2" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-black mb-6 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-cyan-500 dark:text-cyan-400" />
            Social
          </h3>
          <div className="space-y-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm group-hover:text-blue-500 dark:group-hover:text-blue-400">{social.label}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{social.description}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <Link href="/" className="flex items-center space-x-4">
            <Image src="/LogoBDB.png" alt="Buen Día Builders" width={70} height={70} className="rounded-lg" />
            <div>
              <div className="font-bold text-lg dark:text-white">Buen Día Builders</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 italic">donde las ideas despiertan</div>
            </div>
          </Link>

          <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white">Términos</Link>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">Privacidad</Link>
          </div>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 dark:text-red-400 mx-1 animate-pulse" />
            <span>en LATAM</span>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Buen Día Builders. Construyendo el futuro de Web3 en Latinoamérica.
        </div>
      </div>
    </footer>
  );
}
