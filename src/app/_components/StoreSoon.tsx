import type { ProjectAction } from "../_lib/project-meta";
import { IconApple, IconGooglePlay } from "./icons";

export type StoreName = "App Store" | "Google Play";

/** Mağaza bağlantıları ve doğrudan kurulan APK detay panelinde her zaman önce gelir. */
export function isStoreAction(action: ProjectAction) {
  return action.icon === "apple" || action.icon === "play" || action.href.endsWith(".apk");
}

/** Henüz yayımlanmamış mağaza sürümü için tıklanamaz "Çok yakında" rozeti. */
export function ComingSoonStore({ store }: { store: StoreName }) {
  return (
    <span className="button button-secondary buttonSoon">
      {store === "App Store" ? <IconApple size={16} /> : <IconGooglePlay size={16} />}
      {store}
      <em>Çok yakında</em>
    </span>
  );
}
