import { documents } from "../documents";
import type { Project, ProjectCategory } from "../projects";

export const categoryOrder: ProjectCategory[] = [
  "web",
  "mobile",
  "game",
  "science",
  "design",
  "content",
];

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobil",
  game: "Oyun",
  science: "Bilim",
  design: "Tasarım",
  content: "Yayın",
};

export const categoryPluralLabels: Record<ProjectCategory, string> = {
  web: "Web ürünleri",
  mobile: "Mobil uygulamalar",
  game: "Oyunlar",
  science: "Bilim çalışmaları",
  design: "Tasarım işleri",
  content: "Bağımsız yayın",
};

export type StatusTone = "live" | "progress" | "done";

export function getStatus(project: Project): { tone: StatusTone; label: string } {
  const status = project.status;

  if (project.storeLinks?.length) return { tone: "live", label: "Mağazada" };
  if (/satışta/i.test(status)) return { tone: "live", label: "Satışta" };
  if (/canlı/i.test(status)) return { tone: "live", label: "Canlı" };
  if (/geliştiriliyor|hazırlanıyor/i.test(status)) {
    return { tone: "progress", label: "Geliştiriliyor" };
  }

  return { tone: "done", label: status.split(" · ")[0] };
}

export type ProjectAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon: "arrow" | "apple" | "play" | "figma" | "globe" | "doc" | "download" | "video";
  external: boolean;
  download?: string;
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function defaultCtaLabel(project: Project) {
  if (project.href?.startsWith("/dokuman/")) return "Dokümanı oku";
  if (project.href?.includes("canva.")) return "Canva'da incele";

  switch (project.category) {
    case "game":
      return "Oyunu oyna";
    case "mobile":
      return "Figma prototipini aç";
    default:
      return "Siteyi aç";
  }
}

/** Detay panelindeki buton dizisini proje verisinden üretir. */
export function getProjectActions(project: Project): ProjectAction[] {
  const actions: ProjectAction[] = [];

  if (project.category === "mobile") {
    project.storeLinks?.forEach((store, index) => {
      actions.push({
        label: store.label,
        href: store.href,
        variant: index === 0 ? "primary" : "secondary",
        icon: /apple|app store/i.test(store.label) ? "apple" : "play",
        external: true,
      });
    });

    if (project.href) {
      actions.push({
        label: project.storeLinks?.length ? "Figma prototipi" : defaultCtaLabel(project),
        href: project.href,
        variant: project.storeLinks?.length ? "secondary" : "primary",
        icon: "figma",
        external: true,
      });
    }

    if (project.websiteUrl) {
      actions.push({
        label: "Tanıtım sitesi",
        href: project.websiteUrl,
        variant: "secondary",
        icon: "globe",
        external: true,
      });
    }

    return actions;
  }

  if (project.href) {
    const isDocument = project.href.startsWith("/dokuman/");
    actions.push({
      label: project.ctaLabel ?? defaultCtaLabel(project),
      href: project.href,
      variant: "primary",
      icon: isDocument ? "doc" : "arrow",
      external: isExternal(project.href),
    });

    if (isDocument) {
      const document = documents.find(
        (item) => `/dokuman/${item.slug}` === project.href,
      );

      if (document) {
        actions.push({
          label: `İndir (${document.kind === "pdf" ? "PDF" : document.file.split(".").pop()?.toUpperCase()})`,
          href: document.file,
          variant: "secondary",
          icon: "download",
          external: false,
          download: document.downloadName,
        });
      }
    }
  }

  if (project.secondaryHref) {
    actions.push({
      label: project.secondaryLabel ?? "İncele",
      href: project.secondaryHref,
      variant: "secondary",
      icon: "arrow",
      external: isExternal(project.secondaryHref),
    });
  }

  if (project.fullVideo) {
    actions.push({
      label: "Videoyu yeni sekmede aç",
      href: project.fullVideo,
      variant: actions.length ? "secondary" : "primary",
      icon: "video",
      external: true,
    });
  }

  return actions;
}

/** Karttaki hızlı bağlantı: yalnızca doğrudan açılabilir dış bağlantılar. */
export function getQuickLink(project: Project) {
  const primary = getProjectActions(project).find(
    (action) => action.variant === "primary",
  );

  if (!primary || !primary.external || primary.icon === "video") return null;
  return primary;
}

export function getArchiveStats(projects: Project[]) {
  const categoryCounts = projects.reduce(
    (counts, project) => {
      counts[project.category] += 1;
      return counts;
    },
    { web: 0, mobile: 0, game: 0, science: 0, design: 0, content: 0 } as Record<
      ProjectCategory,
      number
    >,
  );

  return {
    total: projects.length,
    live: projects.filter((project) => getStatus(project).tone === "live").length,
    storeApps: projects.filter((project) => project.storeLinks?.length).length,
    categoryCounts,
  };
}

const toolAliases: [RegExp, string][] = [
  [/^Next\.js/, "Next.js"],
  [/^React 19$/, "React"],
  [/^React Three Fiber/, "React Three Fiber"],
  [/^Three\.js/, "Three.js"],
  [/^Figma/, "Figma"],
  [/^Vercel/, "Vercel"],
];

/** Projelerde en sık kullanılan araçlar (sürüm ekleri birleştirilmiş). */
export function getTopTools(projects: Project[], limit = 20) {
  const counts = new Map<string, number>();

  for (const project of projects) {
    const seen = new Set<string>();

    for (const tool of project.tools) {
      const name =
        toolAliases.find(([pattern]) => pattern.test(tool))?.[1] ?? tool;
      if (seen.has(name)) continue;
      seen.add(name);
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "tr"))
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}
