type PortalLinkProps = {
  href: string;
};

export function PortalLink({ href }: PortalLinkProps) {
  return (
    <a className="memodePortal" href={href} aria-label="Fikkis deneyim sitesine geç">
      <span className="memodePortalCopy">
        <small>Deneysel tarafa geç</small>
        <strong>fikkis</strong>
      </span>
      <span className="memodePortalVisual" aria-hidden="true">
        <span className="memodePortalHalo memodePortalHaloOne" />
        <span className="memodePortalHalo memodePortalHaloTwo" />
        <span className="memodePortalCenter">f.</span>
        <i className="portalDot portalDotOne" />
        <i className="portalDot portalDotTwo" />
      </span>
    </a>
  );
}
