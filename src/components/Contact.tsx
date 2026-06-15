"use client";

import { motion } from "framer-motion";
import Icon from "@mdi/react";
import * as icons from "@mdi/js";
import profileData from "@/data/profile.json";

export default function Contact() {
  const contacts = [
    {
      type: "Email",
      icon: icons.mdiEmail,
      href: `mailto:${profileData.socials.email}`,
      text: profileData.socials.email,
    },
    {
      type: "Phone",
      icon: icons.mdiPhone,
      href: `tel:${profileData.socials.phone}`,
      text: "+62 821 2284 8688",
    },
    {
      type: "GitHub",
      icon: icons.mdiGithub,
      href: profileData.socials.github,
      external: true,
      text: "FilbertSevilen1",
    },
    {
      type: "LinkedIn",
      icon: icons.mdiLinkedin,
      href: profileData.socials.linkedin,
      external: true,
      text: "Filbert Sevilen",
    },
    {
      type: "Instagram",
      icon: icons.mdiInstagram,
      href: profileData.socials.instagram,
      external: true,
      text: "@filbert.sevilen",
    },
    {
      type: "Discord",
      icon: icons.mdiGamepadVariant,
      href: profileData.socials.discord,
      external: true,
      text: "kazeden1",
    },
    {
      type: "Location",
      icon: icons.mdiMapMarker,
      text: profileData.location,
    },
    {
      type: "Nationality",
      icon: icons.mdiEarth,
      text: "Indonesian",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-32">
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
                    <span className="block text-xs md:text-sm font-mono text-green-400/70 uppercase group-hover:text-green-400">{contact.type}</span>
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
                  <span className="block text-xs md:text-sm font-mono text-green-400/70 uppercase">{contact.type}</span>
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
