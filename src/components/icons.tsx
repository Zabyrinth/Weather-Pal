import { cn } from "@/lib/utils"
import { Sun, Cloud, CloudRain, Snowflake } from "lucide-react";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    className={cn("w-8 h-8", className)}
    {...props}
  >
    {props.children}
  </svg>
)

export const WindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path fill="currentColor" d="M2 5h8v1H2V5zm0 3h10v1H2V8zm0 3h7v1H2v-1z" />
    <path fill="currentColor" opacity="0.7" d="M10 5h1v1h-1V5zm-1 1h1v1h-1V6zm1 1h1v1h-1V7zm-2 2h2v1h-2V9zm-1 1h1v1h-1v-1z" />
  </Icon>
)

export const HumidityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path fill="#89BBEF" d="M8 2a4 4 0 0 0-4 4v3.5a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 12 9.5V6a4 4 0 0 0-4-4zm-1 9.5a1.5 1.5 0 0 1-1.5-1.5V9h3v1a1.5 1.5 0 0 1-1.5 1.5z" />
  </Icon>
)

export const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props} viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="currentColor" d="M9 3h6v2h-6zM3 9h2v6H3zm16 0h2v6h-2zM9 19h6v2h-6z" />
    <path fill="currentColor" d="M5 5h3v2H5zm8 0h3v2h-3zm-5 8h2v3H8zm6 0h2v3h-2z" />
    <path fill="currentColor" d="M9 9h6v6H9z" />
  </Icon>
)

export function getWeatherIcon(condition: string | undefined) {
  switch (condition) {
    case 'Clear':
      return Sun;
    case 'Clouds':
      return Cloud;
    case 'Rain':
    case 'Drizzle':
    case 'Thunderstorm':
      return CloudRain;
    case 'Snow':
      return Snowflake;
    default:
      return Cloud;
  }
}
