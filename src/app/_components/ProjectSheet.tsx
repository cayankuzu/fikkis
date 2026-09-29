"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { copyText, useIsLimitedDevice } from "../_lib/browser";
import {
  categoryLabels,
  getProjectActions,
  getStatus,
} from "../_lib/project-meta";
import type { ProjectAction } from "../_lib/project-meta";
import type { Project } from "../projects";
import {
  IconApple,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconClose,
  IconDoc,
  IconDownload,
  IconFigma,
  IconGlobe,
  IconGooglePlay,
  IconHeart,
  IconLink,
  IconMonitor,
  IconVideo,
} from "./icons";
import { MediaViewer } from "./MediaViewer";

type ProjectSheetProps = {
  project: Project | null;
  list: Project[];
  onClose: (scrollTarget?: string) => void;
  onNavigate: (project: Project) => void;
};

const actionIcons: Record<ProjectAction["icon"], ReactNode> = {
  arrow: <IconArrowUpRight size={16} />,
  apple: <IconApple size={16} />,
  play: <IconGooglePlay size={16} />,
  figma: <IconFigma size={16} />,
  globe: <IconGlobe size={16} />,
  doc: <IconDoc size={16} />,
  download: <IconDownload size={16} />,
  video: <IconVideo size={16} />,
};

function ActionLink({ action }: { action: ProjectAction }) {
  const className = `button button-${action.variant}`;
  const content = (
    <>
      {actionIcons[action.icon]}
      {action.label}
    </>
  );

  if (action.download) {
    return (
      <a className={className} href={action.href} download={action.download}>
        {content}
      </a>
    );
  }

  if (!action.external) {
    return (
      <Link className={className} href={action.href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={action.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

function useCopyFeedback() {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(null), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async (key: string, text: string) => {
    if (await copyText(text)) setCopied(key);
  };

  return { copied, copy };
}

export function ProjectSheet({
  project,
  list,
  onClose,
  onNavigate,
}: ProjectSheetProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLimitedDevice = useIsLimitedDevice();
  const { copied, copy } = useCopyFeedback();

  // Kapanış animasyonu boyunca son projeyi göstermeye devam et.
  const [shown, setShown] = useState(project);
  if (project && project !== shown) setShown(project);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      const root = document.documentElement;
      const scrollbarWidth = window.innerWidth - root.clientWidth;
      root.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
      dialog.showModal();
      dialog.querySelector<HTMLElement>(".iconButton-close")?.focus();
    }

    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project?.id]);

  const index = shown ? list.findIndex((item) => item.id === shown.id) : -1;
  const previous = index > 0 ? list[index - 1] : null;
  const next = index >= 0 && index < list.length - 1 ? list[index + 1] : null;
  const status = shown ? getStatus(shown) : null;
  const actions = shown ? getProjectActions(shown) : [];
  const isGated = Boolean(shown?.desktopOnly && isLimitedDevice);
  const primaryHref = actions.find((action) => action.variant === "primary")?.href;

  const projectUrl = (item: Project) =>
    `${window.location.origin}${window.location.pathname}#proje-${item.id}`;

  return (
    <dialog
      ref={dialogRef}
      className="sheet"
      aria-labelledby="sheet-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {shown && status ? (
        <div className="sheetPanel">
          <header className="sheetBar">
            <p className="sheetBarLabel">
              <span>{categoryLabels[shown.category]}</span>
              {index >= 0 ? (
                <span className="sheetBarCount">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(list.length).padStart(2, "0")}
                </span>
              ) : null}
            </p>
            <div className="sheetBarActions">
              <button
                type="button"
                className="iconButton"
                onClick={() => copy("page", projectUrl(shown))}
                aria-label="Bu projenin bağlantısını kopyala"
                title="Bağlantıyı kopyala"
              >
                {copied === "page" ? <IconCheck size={18} /> : <IconLink size={18} />}
              </button>
              <button
                type="button"
                className="iconButton"
                disabled={!previous}
                onClick={() => previous && onNavigate(previous)}
                aria-label={previous ? `Önceki proje: ${previous.title}` : "Önceki proje yok"}
              >
                <IconArrowLeft size={18} />
              </button>
              <button
                type="button"
                className="iconButton"
                disabled={!next}
                onClick={() => next && onNavigate(next)}
                aria-label={next ? `Sonraki proje: ${next.title}` : "Sonraki proje yok"}
              >
                <IconArrowRight size={18} />
              </button>
              <button
                type="button"
                className="iconButton iconButton-close"
                onClick={() => onClose()}
                aria-label="Kapat"
              >
                <IconClose size={18} />
              </button>
            </div>
          </header>

          <div className="sheetScroll" ref={scrollRef}>
            <MediaViewer key={shown.id} project={shown} />

            <div className="sheetIntro">
              <p className="sheetEyebrow">
                <span className={`status status-${status.tone}`}>{status.label}</span>
                {shown.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                {shown.desktopOnly ? (
                  <span>
                    <IconMonitor size={13} /> Masaüstü deneyimi
                  </span>
                ) : null}
              </p>
              <h2 id="sheet-title">{shown.title}</h2>
              <p className="sheetHook">{shown.hook}</p>

              {isGated ? (
                <div className="gate">
                  <IconMonitor size={22} />
                  <div>
                    <strong>Bu deneyim bilgisayar için tasarlandı</strong>
                    <p>
                      Klavye, fare ve geniş ekran gerektiriyor. Bağlantıyı
                      kopyalayıp bilgisayarından açman en iyi sonucu verir.
                    </p>
                    <div className="actions">
                      {primaryHref ? (
                        <>
                          <button
                            type="button"
                            className="button button-primary"
                            onClick={() => copy("gate", primaryHref)}
                          >
                            {copied === "gate" ? <IconCheck size={16} /> : <IconLink size={16} />}
                            {copied === "gate" ? "Kopyalandı" : "Bağlantıyı kopyala"}
                          </button>
                          <a
                            className="button button-ghost"
                            href={primaryHref}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Yine de aç
                          </a>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : actions.length ? (
                <div className="actions">
                  {actions.map((action) => (
                    <ActionLink key={action.href + action.label} action={action} />
                  ))}
                </div>
              ) : null}

              {shown.downloadStatus && !shown.storeLinks?.length ? (
                <p className="sheetNote">{shown.downloadStatus}</p>
              ) : null}
            </div>

            <div className="sheetGrid">
              <div className="sheetMain">
                <section>
                  <h3 className="sheetHeading">Proje hakkında</h3>
                  <p className="sheetText">{shown.description}</p>
                </section>
                <section>
                  <h3 className="sheetHeading">Öne çıkanlar</h3>
                  <ul className="sheetHighlights">
                    {shown.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <dl className="facts">
                <div>
                  <dt>Rol</dt>
                  <dd>
                    <ul className="factList">
                      {shown.role.split(" · ").map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>Durum</dt>
                  <dd>{shown.status}</dd>
                </div>
                <div>
                  <dt>Platform</dt>
                  <dd>{shown.platform}</dd>
                </div>
                <div>
                  <dt>Araçlar</dt>
                  <dd>
                    <ul className="chips">
                      {shown.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>

            {previous || next ? (
              <nav className="pager" aria-label="Diğer projeler">
                {previous ? (
                  <button
                    type="button"
                    className="pagerItem"
                    onClick={() => onNavigate(previous)}
                  >
                    <span className="pagerLabel">
                      <IconArrowLeft size={14} /> Önceki
                    </span>
                    <strong>{previous.title}</strong>
                  </button>
                ) : (
                  <span />
                )}
                {next ? (
                  <button
                    type="button"
                    className="pagerItem pagerItem-next"
                    onClick={() => onNavigate(next)}
                  >
                    <span className="pagerLabel">
                      Sonraki <IconArrowRight size={14} />
                    </span>
                    <strong>{next.title}</strong>
                  </button>
                ) : null}
              </nav>
            ) : null}

            <p className="sheetSupport">
              <IconHeart size={15} />
              <span>
                Bu projeleri bağımsız üretiyorum.{" "}
                <a
                  href="#destek"
                  onClick={(event) => {
                    event.preventDefault();
                    onClose("destek");
                  }}
                >
                  AtKafası Fanzin&apos;i alarak destek olabilirsin
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
