import type { ReactNode } from "react";
import {
  IconArrowUpRight,
  IconGithub,
  IconInstagram,
  IconKaggle,
  IconLinkedIn,
  IconMail,
} from "./icons";

export const contactEmail = "cayankuzu.0@gmail.com";
export const linkedInUrl = "https://www.linkedin.com/in/%C3%A7ayan-kuzu-b774532a9/";

export const contactLinks: {
  label: string;
  handle: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "LinkedIn",
    handle: "Çayan Kuzu",
    href: linkedInUrl,
    icon: <IconLinkedIn size={18} />,
  },
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
