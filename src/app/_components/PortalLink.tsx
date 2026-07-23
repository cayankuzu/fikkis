import Image from "next/image";

type PortalLinkProps = {
  href: string;
};

export function PortalLink({ href }: PortalLinkProps) {
  return (
    <a className="portalLink" href={href} aria-label="MeMoDe resmî sitesine portal aç">
      <span className="portalFrame" aria-hidden="true">
        <span className="portalRim portalRimBack" />
        <span className="portalRim portalRimFront" />
        <span className="portalWindow">
          <Image
            className="portalPreview"
            src="/portal-memode.png"
            alt=""
            fill
            priority
            sizes="112px"
          />
          <span className="portalGlass" />
        </span>
        <i className="portalParticle portalParticleOne" />
        <i className="portalParticle portalParticleTwo" />
        <i className="portalParticle portalParticleThree" />
      </span>
      <span className="portalCopy">
        <small>Portal / resmî taraf</small>
        <strong>MeMoDe</strong>
      </span>
      <span className="portalArrow" aria-hidden="true">↗</span>
    </a>
  );
}
