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

/** Öne çıkan çalışmaların gösterim sırası: önce yayındaki ürünler, sonra etkileşimli işler. */
const featuredOrder = [
  "cayan-kuzu-cv",
  "sorita",
  "universe",
  "audioroom",
  "merbut",
  "stresst",
  "atkafasi",
  "trai",
  "etkinlink",
  "wmatch",
  "bibish",
  "mrap",
  "desain",
];

/** Arşivin başında gelen daha kapsamlı oyun ve deneysel işler. */
const archiveLead = ["asmaca", "son-40-saniye", "remember"];

/** Arşivin kalanında alanların sırası. */
const archiveCategoryOrder: ProjectCategory[] = [
  "science",
  "game",
  "content",
  "design",
  "mobile",
  "web",
];

/** Projeleri "öne çıkanlar" ve "arşiv" olarak ayırır; her grup kendi içinde sıralıdır. */
export function arrangeProjects(projects: Project[]) {
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => rank(featuredOrder, a.id) - rank(featuredOrder, b.id));

  const archive = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => !project.featured)
    .sort((a, b) => {
      const lead = rank(archiveLead, a.project.id) - rank(archiveLead, b.project.id);
      if (lead !== 0) return lead;
      const category =
        archiveCategoryOrder.indexOf(a.project.category) -
        archiveCategoryOrder.indexOf(b.project.category);
      return category || a.index - b.index;
    })
    .map(({ project }) => project);

  return { featured, archive };
}

function rank(order: string[], id: string) {
  const index = order.indexOf(id);
  return index === -1 ? order.length : index;
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
    storeApps: projects.filter((project) => project.storeLinks?.length).length,
    categoryCounts,
  };
}
