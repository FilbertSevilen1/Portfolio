import projectsJson from "./projects.json";
import * as icons from "@mdi/js";

export const projectsData = projectsJson.map((p) => ({
  title: p.title,
  description: p.description,
  year: p.year,
  tags: p.tags,
  images: p.images,
  link: p.link,
  icon: (icons as any)[p.iconKey] || icons.mdiWeb,
  color: p.color,
}));
