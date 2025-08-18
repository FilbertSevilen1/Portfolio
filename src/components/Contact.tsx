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
  mdiGamepadVariant 
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
      <motion.h2
        className="text-3xl font-bold pb-6 text-green-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="mb-6 text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Feel free to reach out for collaborations or just a friendly hello!
      </motion.p>

      <div className="flex items-center flex-wrap md:gap-8">
        {contacts.map((contact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          >
            {contact.href ? (
              <a
                href={contact.href}
                target={contact.external ? "_blank" : "_self"}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 hover:text-green-600 transition"
              >
                <Icon path={contact.icon} size={1} />
                {contact.text || contact.type}
              </a>
            ) : (
              <div className="flex items-center gap-2">
                <Icon path={contact.icon} size={1} />
                {contact.text || contact.type}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
