import { IconGithub, IconInstagram, IconKaggle, IconMail } from "./icons";

const instagramUrl =
  "https://www.instagram.com/memode333?igsh=aWZkZDM3dXR1azBk";
const githubUrl = "https://github.com/cayankuzu";
const kaggleUrl = "https://www.kaggle.com/ayankuzu";
const contactEmail = "memodee333@gmail.com";

export function ContactLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a href={instagramUrl} target="_blank" rel="noreferrer">
        <span className="contactLinkLabel">
          <IconInstagram />
          Instagram
        </span>
        <small>@memode333</small>
      </a>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <span className="contactLinkLabel">
          <IconGithub />
          GitHub
        </span>
        <small>@cayankuzu</small>
      </a>
      <a href={kaggleUrl} target="_blank" rel="noreferrer">
        <span className="contactLinkLabel">
          <IconKaggle />
          Kaggle
        </span>
        <small>@ayankuzu</small>
      </a>
      <a href={`mailto:${contactEmail}`}>
        <span className="contactLinkLabel">
          <IconMail />
          E-posta
        </span>
        <small>{contactEmail}</small>
      </a>
    </div>
  );
}
