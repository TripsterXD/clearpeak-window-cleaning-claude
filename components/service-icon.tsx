import type { ServiceIcon as ServiceIconName } from "@/lib/site";
import { BuildingIcon, GridIcon, HomeIcon, LayersIcon } from "./icons";

const icons = {
  home: HomeIcon,
  building: BuildingIcon,
  layers: LayersIcon,
  grid: GridIcon,
};

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
