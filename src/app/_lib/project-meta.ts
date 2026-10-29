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

export function getStatus(
  project: Project,
  locale: "tr" | "en" = "tr",
): { tone: StatusTone; label: string } {
  const status = project.status;

  if (project.storeLinks?.length)
    return { tone: "live", label: locale === "en" ? "In Store" : "Mağazada" };
  if (/satışta|on sale/i.test(status))
    return { tone: "live", label: locale === "en" ? "On Sale" : "Satışta" };
  if (/canlı|live/i.test(status))
    return { tone: "live", label: locale === "en" ? "Live" : "Canlı" };
  if (/geliştiriliyor|hazırlanıyor|in dev/i.test(status)) {
    return {
      tone: "progress",
      label: locale === "en" ? "In Development" : "Geliştiriliyor",
    };
  }

  return { tone: "done", label: status.split(" · ")[0] };
}

export type ProjectAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon:
    | "arrow"
    | "apple"
    | "play"
    | "figma"
    | "globe"
    | "doc"
    | "download"
    | "video"
    | "bag";
  external: boolean;
  download?: string;
  /** Satın alma bağlantısı; masaüstü uyarısında da gösterilir. */
  purchase?: boolean;
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function defaultCtaLabel(project: Project, locale: "tr" | "en" = "tr") {
  if (project.href?.startsWith("/dokuman/"))
    return locale === "en" ? "Read document" : "Dokümanı oku";
  if (project.href?.includes("canva."))
    return locale === "en" ? "Explore on Canva" : "Canva'da incele";

  switch (project.category) {
    case "game":
      // İndirilebilir sürümü de olan oyunlarda tarayıcı sürümü ayrıca belirtilir.
      return project.purchase
        ? locale === "en"
          ? "Play in browser"
          : "Web'de oyna"
        : locale === "en"
          ? "Play game"
          : "Oyunu oyna";
    case "mobile":
      return locale === "en" ? "Open Figma prototype" : "Figma prototipini aç";
    default:
      return locale === "en" ? "Open site" : "Siteyi aç";
  }
}

function purchaseLabel(
  purchase: NonNullable<Project["purchase"]>,
  locale: "tr" | "en" = "tr",
) {
  return purchase.label ?? (locale === "en" ? "Purchase" : "Satın al");
}

/** Detay panelindeki buton dizisini proje verisinden üretir. */
export function getProjectActions(
  project: Project,
  locale: "tr" | "en" = "tr",
): ProjectAction[] {
  const actions = getLinkActions(project, locale);
  const purchase = project.purchase;
  if (!purchase) return actions;

  // Satın alma, ana bağlantının hemen ardından gelir; ana bağlantı yoksa kendisi ana olur.
  const primaryIndex = actions.findIndex((action) => action.variant === "primary");
  const label = purchaseLabel(purchase, locale);
  actions.splice(primaryIndex + 1, 0, {
    label: purchase.store ? `${label} · ${purchase.store}` : label,
    href: purchase.href,
    variant: primaryIndex === -1 ? "primary" : "secondary",
    icon: "bag",
    external: isExternal(purchase.href),
    purchase: true,
  });

  return actions;
}

function getLinkActions(
  project: Project,
  locale: "tr" | "en" = "tr",
): ProjectAction[] {
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

    // Mağaza sürümü yokken ana yol APK'dır; varsa mağazanın ardından ikincil seçenek olur.
    if (project.apkUrl) {
      actions.push({
        label: locale === "en" ? "Download APK" : "APK indir",
        href: project.apkUrl,
        variant: project.storeLinks?.length ? "secondary" : "primary",
        icon: "download",
        external: true,
      });
    }

    if (project.href) {
      actions.push({
        label: project.storeLinks?.length
          ? locale === "en"
            ? "Figma prototype"
            : "Figma prototipi"
          : defaultCtaLabel(project, locale),
        href: project.href,
        variant: project.storeLinks?.length ? "secondary" : "primary",
        icon: "figma",
        external: true,
      });
    }

    if (project.websiteUrl) {
      actions.push({
        label: locale === "en" ? "Landing page" : "Tanıtım sitesi",
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
      label: project.ctaLabel ?? defaultCtaLabel(project, locale),
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
        const ext =
          document.kind === "pdf"
            ? "PDF"
            : document.file.split(".").pop()?.toUpperCase() ?? "DOC";
        actions.push({
          label: locale === "en" ? `Download (${ext})` : `İndir (${ext})`,
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
  // Satın alınabilen projelerde seçenekler yalnızca detay panelinde sunulur.
  if (project.purchase) return null;

  const primary = getProjectActions(project).find(
    (action) => action.variant === "primary",
  );

  if (!primary || !primary.external || primary.icon === "video") return null;
  return primary;
}

/** Öne çıkan çalışmaların gösterim sırası: önce mağaza ve derin teknoloji ürünleri, sonra etkileşimli 3B deneyimler. */
const featuredOrder = [
  "cayan-kuzu-cv",
  "universe",
  "beatter",
  "sorita",
  "zlip",
  "wmatch",
  "trai",
  "strolly",
  "audioroom",
  "merbut",
  "stresst",
  "desain",
  "etkinlink",
  "mrap",
  "atkafasi",
  "dream-of-the-photo",
  "bibish",
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
    categoryCounts,
  };
}
