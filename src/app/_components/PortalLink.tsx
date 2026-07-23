type PortalLinkProps = {
  href: string;
};

export function PortalLink({ href }: PortalLinkProps) {
  return (
    <a className="portalLink" href={href} aria-label="MeMoDe resmî sitesine geç">
      <span className="portalVisual" aria-hidden="true">
        <span className="portalRing portalRingOuter" />
        <span className="portalRing portalRingInner" />
        <span className="portalCore">M</span>
        <span className="portalSpark portalSparkOne" />
        <span className="portalSpark portalSparkTwo" />
        <span className="portalSpark portalSparkThree" />
      </span>
      <span className="portalCopy">
        <small>Diğer tarafa geç</small>
        <strong>MeMoDe</strong>
      </span>
      <span className="portalArrow" aria-hidden="true">↗</span>
    </a>
  );
}
