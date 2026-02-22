"use client";

import { motion } from "framer-motion";
import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
  mdiMapMarker,
  mdiEarth,
  mdiPhone,
  mdiInstagram,
  mdiGamepadVariant,
} from "@mdi/js";

export default function Contact() {
  const contacts = [
    {
      type: "Email",
      icon: mdiEmail,
      href: "mailto:sevilenfilbert@gmail.com",
    },
    {
      type: "Phone",
      icon: mdiPhone,
      href: "tel:+6282122848688",
    },
    {
      type: "GitHub",
      icon: mdiGithub,
      href: "https://github.com/FilbertSevilen1",
      external: true,
    },
    {
      type: "LinkedIn",
      icon: mdiLinkedin,
      href: "https://www.linkedin.com/in/ignatius-filbert-sevilen-894467231/",
      external: true,
    },
    {
      type: "Instagram",
      icon: mdiInstagram,
      href: "https://instagram.com/filbert.sevilen",
      external: true,
    },
    {
      type: "Discord",
      icon: mdiGamepadVariant,
      href: "https://discord.com/users/kazeden1",
      external: true,
      text: "kazeden1",
    },
    {
      type: "GitHub",
      icon: mdiGithub,
      href: "https://github.com/FilbertSevilen1",
      external: true,
    },
    {
      type: "Location",
      icon: mdiMapMarker,
      text: "Jakarta, Indonesia",
    },
    {
      type: "Nationality",
      icon: mdiEarth,
      text: "Indonesian",
    },
  ];

  return (
    <section id="contact" className="py-12">
      <div className="relative mb-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute -top-4 left-0 w-24 h-1 bg-green-500 origin-left"
        />
        <h2
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
        >
          Contact
        </h2>
      </div>

      <motion.p
        className="mb-12 text-lg md:text-xl text-gray-400 font-mono"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        Reach out for collaborations or project inquiries.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {contact.href ? (
              <a
                href={contact.href}
                target={contact.external ? "_blank" : "_self"}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-6 bg-gray-900/40 backdrop-blur-xl border border-white/5 hover:bg-green-500/[0.05] hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/5 border border-white/10 group-hover:border-green-500/50 transition-colors">
                    <Icon path={contact.icon} size={1} className="text-white group-hover:text-green-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-green-500/40 uppercase group-hover:text-green-500/60">{contact.type}</span>
                    <span className="text-sm md:text-base font-bold text-gray-300 group-hover:text-white transition-colors">{contact.text || contact.type}</span>
                  </div>
                </div>
                <span className="text-green-500/20 group-hover:text-green-500 group-hover:translate-x-1 transition-all">→</span>
              </a>
            ) : (
              <div className="flex items-center gap-4 p-6 bg-gray-900/40 border border-white/5">
                <div className="p-2 bg-white/5 border border-white/10">
                  <Icon path={contact.icon} size={1} className="text-white" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-green-500/40 uppercase">{contact.type}</span>
                  <span className="text-sm md:text-base font-bold text-gray-300">{contact.text || contact.type}</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
