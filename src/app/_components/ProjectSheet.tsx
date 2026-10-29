"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { copyText, useIsLimitedDevice } from "../_lib/browser";
import { useI18n } from "../_lib/i18n";
import { getLocalizedProject } from "../_lib/projects-en";
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
  IconBag,
  IconCheck,
  IconClose,
  IconDoc,
  IconDownload,
  IconFigma,
  IconGlobe,
  IconGooglePlay,
  IconLink,
  IconMonitor,
  IconVideo,
} from "./icons";
import { MediaViewer } from "./MediaViewer";
import { SourceLink } from "./SourceLink";
import { ComingSoonStore, isStoreAction } from "./StoreSoon";

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
  bag: <IconBag size={16} />,
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

  const { locale, t } = useI18n();
  const index = shown ? list.findIndex((item) => item.id === shown.id) : -1;
  const previous = index > 0 ? list[index - 1] : null;
  const next = index >= 0 && index < list.length - 1 ? list[index + 1] : null;

  const localizedShown = shown ? getLocalizedProject(shown, locale) : null;
  const status = localizedShown ? getStatus(localizedShown, locale) : null;
  const actions = localizedShown ? getProjectActions(localizedShown, locale) : [];
  const isGated = Boolean(localizedShown?.desktopOnly && isLimitedDevice);
  const primaryHref = actions.find((action) => action.variant === "primary")?.href;
  // Satın alma telefondan da yapılabilir; oyun sonra bilgisayara indirilir.
  const gatePurchases = actions.filter(
    (action) => action.purchase && action.variant === "secondary",
  );

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
      {localizedShown && status ? (
        <div className="sheetPanel">
          <header className="sheetBar">
            <p className="sheetBarLabel">
              <span>{t.projectsSection.categories[localizedShown.category] ?? categoryLabels[localizedShown.category]}</span>
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
                onClick={() => copy("page", projectUrl(localizedShown))}
                aria-label={t.sheet.copyProjectLink}
                title={t.sheet.copyLink}
              >
                {copied === "page" ? <IconCheck size={18} /> : <IconLink size={18} />}
              </button>
              <button
                type="button"
                className="iconButton"
                disabled={!previous}
                onClick={() => previous && onNavigate(previous)}
                aria-label={previous ? `${t.sheet.prevProject}: ${previous.title}` : t.sheet.prevProject}
              >
                <IconArrowLeft size={18} />
              </button>
              <button
                type="button"
                className="iconButton"
                disabled={!next}
                onClick={() => next && onNavigate(next)}
                aria-label={next ? `${t.sheet.nextProject}: ${next.title}` : t.sheet.nextProject}
              >
                <IconArrowRight size={18} />
              </button>
              <button
                type="button"
                className="iconButton iconButton-close"
                onClick={() => onClose()}
                aria-label={t.sheet.close}
              >
                <IconClose size={18} />
              </button>
            </div>
          </header>

          <div className="sheetScroll" ref={scrollRef}>
            <MediaViewer key={localizedShown.id} project={localizedShown} />

            <div className="sheetIntro">
              <p className="sheetEyebrow">
                <span className={`status status-${status.tone}`}>{status.label}</span>
                {localizedShown.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                {localizedShown.desktopOnly ? (
                  <span>
                    <IconMonitor size={13} /> {t.sheet.desktopOnly}
                  </span>
                ) : null}
              </p>
              <h2 id="sheet-title">{localizedShown.title}</h2>
              <p className="sheetHook">{localizedShown.hook}</p>

              {isGated ? (
                <div className="gate">
                  <IconMonitor size={22} />
                  <div>
                    <strong>{t.sheet.gateTitle}</strong>
                    <p>{t.sheet.gateText}</p>
                    <div className="actions">
                      {primaryHref ? (
                        <>
                          <button
                            type="button"
                            className="button button-primary"
                            onClick={() => copy("gate", primaryHref)}
                          >
                            {copied === "gate" ? <IconCheck size={16} /> : <IconLink size={16} />}
                            {copied === "gate" ? t.sheet.copied : t.sheet.copyLink}
                          </button>
                          {gatePurchases.map((action) => (
                            <ActionLink key={action.href} action={action} />
                          ))}
                          <a
                            className="button button-ghost"
                            href={primaryHref}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t.sheet.openAnyway}
                          </a>
                        </>
                      ) : null}
                      <SourceLink href={localizedShown.sourceUrl} />
                    </div>
                  </div>
                </div>
              ) : actions.length || localizedShown.sourceUrl || localizedShown.upcomingStores?.length ? (
                <div className="actions">
                  {actions.filter(isStoreAction).map((action) => (
                    <ActionLink key={action.href + action.label} action={action} />
                  ))}
                  {localizedShown.upcomingStores?.map((store) => (
                    <ComingSoonStore key={store} store={store} />
                  ))}
                  {actions
                    .filter((action) => !isStoreAction(action))
                    .map((action) => (
                      <ActionLink key={action.href + action.label} action={action} />
                    ))}
                  <SourceLink href={localizedShown.sourceUrl} />
                </div>
              ) : null}

              {localizedShown.downloadStatus && !localizedShown.storeLinks?.length ? (
                <p className="sheetNote">{localizedShown.downloadStatus}</p>
              ) : null}
            </div>

            <div className="sheetGrid">
              <div className="sheetMain">
                <section>
                  <h3 className="sheetHeading">{t.sheet.aboutHeading}</h3>
                  <p className="sheetText">{localizedShown.description}</p>
                </section>
                <section>
                  <h3 className="sheetHeading">{t.sheet.highlightsHeading}</h3>
                  <ul className="sheetHighlights">
                    {localizedShown.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <dl className="facts">
                <div>
                  <dt>{t.sheet.roleLabel}</dt>
                  <dd>
                    <ul className="factList">
                      {localizedShown.role.split(" · ").map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>{t.sheet.platformLabel}</dt>
                  <dd>{localizedShown.platform}</dd>
                </div>
                <div>
                  <dt>{t.sheet.toolsLabel}</dt>
                  <dd>
                    <ul className="chips">
                      {localizedShown.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>

            {previous || next ? (
              <nav className="pager" aria-label={locale === "en" ? "Other projects" : "Diğer projeler"}>
                {previous ? (
                  <button
                    type="button"
                    className="pagerItem"
                    onClick={() => onNavigate(previous)}
                  >
                    <span className="pagerLabel">
                      <IconArrowLeft size={14} /> {t.sheet.prevProject}
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
                      {t.sheet.nextProject} <IconArrowRight size={14} />
                    </span>
                    <strong>{next.title}</strong>
                  </button>
                ) : null}
              </nav>
            ) : null}

            <div className="sheetContactHint">
              <p>
                {t.sheet.contactHint}{" "}
                <a href="mailto:cayankuzu.0@gmail.com">{t.sheet.writeMe}</a>.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
