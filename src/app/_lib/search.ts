import type { Project } from "../projects";
import { categoryLabels } from "./project-meta";

/**
 * Büyük/küçük harf ve Türkçe karakter farkını yok sayar: "Kepçe" ile "kepce" eşleşir.
 * Telefon klavyelerinin yazdığı kıvrık kesme işareti de düz kesmeye çevrilir.
 */
export function normalizeForSearch(value: string) {
  return value
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/[’‘ʼ`]/g, "'")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

type Field = { text: string; weight: number };

function fieldsOf(project: Project): Field[] {
  return [
    { text: project.title, weight: 8 },
    { text: (project.tags ?? []).join(" "), weight: 4 },
    { text: categoryLabels[project.category], weight: 4 },
    { text: project.tools.join(" "), weight: 3 },
    { text: project.platform, weight: 2 },
    { text: project.hook, weight: 2 },
    { text: project.role, weight: 1 },
    { text: project.status, weight: 1 },
    { text: project.description, weight: 1 },
    { text: project.highlights.join(" "), weight: 1 },
  ].map((field) => ({ ...field, text: normalizeForSearch(field.text) }));
}

/**
 * Sorgudaki her kelimenin geçtiği projeleri puanıyla döndürür.
 * Başlıkta, özellikle kelime başında geçen eşleşmeler öne çıkar.
 */
export function scoreProjects(projects: Project[], query: string) {
  const tokens = normalizeForSearch(query).split(" ").filter(Boolean);
  const scores = new Map<string, number>();
  if (tokens.length === 0) return scores;

  for (const project of projects) {
    const fields = fieldsOf(project);
    let score = 0;

    for (const token of tokens) {
      let best = 0;
      for (const field of fields) {
        if (!field.text.includes(token)) continue;
        const atWordStart = field.text.startsWith(token) || field.text.includes(` ${token}`);
        best = Math.max(best, field.weight + (atWordStart ? 2 : 0));
      }
      if (best === 0) {
        score = 0;
        break;
      }
      score += best;
    }

    if (score > 0) scores.set(project.id, score);
  }

  return scores;
}
