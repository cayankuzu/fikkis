import { IconGithub } from "./icons";

/** Projenin herkese açık GitHub deposuna giden ikincil buton; depo yoksa hiçbir şey çizmez. */
export function SourceLink({ href }: { href?: string }) {
  if (!href) return null;

  return (
    <a className="button button-secondary" href={href} target="_blank" rel="noreferrer">
      <IconGithub size={16} />
      Kaynak kodu · GitHub
    </a>
  );
}
