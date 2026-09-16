"use client";

import { useState } from "react";
import { ContactLinks } from "./ContactLinks";
import { IconHeart } from "./icons";

const shopierUrl = "https://www.shopier.com/atkafasifanzin";
const gumroadUrl = "https://atkafasifanzin.gumroad.com/";

export function TopUtilityBar() {
  const [isSupportOpen, setIsSupportOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(true);

  return (
    <>
      <section
        className={`utilityPanel utilityPanelSupport${isSupportOpen ? "" : " is-collapsed"}`}
        aria-labelledby="utility-support-title"
      >
        <div className="utilityPanelHeader">
          <span id="utility-support-title">
            <IconHeart />
            Bana destek ol
          </span>
          <button
            type="button"
            className="utilityToggle"
            aria-expanded={isSupportOpen}
            aria-label={
              isSupportOpen
                ? "Destek panelini küçült"
                : "Destek panelini genişlet"
            }
            onClick={() => setIsSupportOpen((current) => !current)}
          >
            {isSupportOpen ? "−" : "+"}
          </button>
        </div>
        {isSupportOpen ? (
          <div className="utilityPanelBody">
            <strong>
              AtKafası fanzinini istediğin platformdan satın alabilirsin.
            </strong>
            <span>
              Shopier daha az komisyon keser; Gumroad alternatif satın alma
              ve yorum alanıdır. Aldıktan sonra yorumunu bırakmayı unutma.
            </span>
            <div className="utilityButtons">
              <a href={shopierUrl} target="_blank" rel="noreferrer">
                Shopier&apos;den al
              </a>
              <a href={gumroadUrl} target="_blank" rel="noreferrer">
                Gumroad
              </a>
            </div>
          </div>
        ) : null}
      </section>

      <nav
        className={`utilityPanel utilityPanelContact${isContactOpen ? "" : " is-collapsed"}`}
        aria-label="İletişim"
      >
        <div className="utilityPanelHeader">
          <span>İletişim</span>
          <button
            type="button"
            className="utilityToggle"
            aria-expanded={isContactOpen}
            aria-label={
              isContactOpen
                ? "İletişim panelini küçült"
                : "İletişim panelini genişlet"
            }
            onClick={() => setIsContactOpen((current) => !current)}
          >
            {isContactOpen ? "−" : "+"}
          </button>
        </div>
        {isContactOpen ? (
          <ContactLinks className="utilityPanelBody utilityContactList" />
        ) : null}
      </nav>
    </>
  );
}
