import type { ReactNode } from "react";
import {
  IconArrowUpRight,
  IconGithub,
  IconInstagram,
  IconKaggle,
  IconMail,
} from "./icons";

export const contactEmail = "memodee333@gmail.com";

export const contactLinks: {
  label: string;
  handle: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "Instagram",
    handle: "@memode333",
    href: "https://www.instagram.com/memode333?igsh=aWZkZDM3dXR1azBk",
    icon: <IconInstagram size={18} />,
  },
  {
    label: "GitHub",
    handle: "@cayankuzu",
    href: "https://github.com/cayankuzu",
    icon: <IconGithub size={18} />,
  },
  {
    label: "Kaggle",
    handle: "@ayankuzu",
    href: "https://www.kaggle.com/ayankuzu",
    icon: <IconKaggle size={18} />,
  },
  {
    label: "E-posta",
    handle: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: <IconMail size={18} />,
  },
];

export function ContactLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {contactLinks.map((link) => {
        const isMail = link.href.startsWith("mailto:");

        return (
          <li key={link.label}>
            <a
              href={link.href}
              {...(isMail ? {} : { target: "_blank", rel: "noreferrer" })}
            >
              <span className="contactIcon">{link.icon}</span>
              <span className="contactLabel">{link.label}</span>
              <span className="contactHandle">{link.handle}</span>
              <IconArrowUpRight size={16} className="contactArrow" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
