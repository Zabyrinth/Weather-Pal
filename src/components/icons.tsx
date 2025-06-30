import { cn } from "@/lib/utils"

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

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path fill="#FFC857" d="M6 2h4v1h1v1h1v4h-1v1h-1v1H6v-1H5V8H4V4h1V3h1V2zm1 4h2v2H7V6z" />
    <path fill="#FFC857" d="M7 1h2v1H7V1zM2 6h2v4H2V6zm12 0h2v4h-2V6zM7 14h2v1H7v-1z" />
  </Icon>
)

export const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path fill="#d1d5db" d="M3 7h1v1h1v1h1v1h5V9h1V8h1V7h1V6H3v1z" />
    <path fill="#e5e7eb" d="M4 6h10v1H4V6zm-1 1H2v1h1v1h1v1h1v1h6V9h1V8h1V7h-1v1H4V7z" />
  </Icon>
)

export const RainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path fill="#d1d5db" d="M3 6h1v1h1v1h1v1h5V8h1V7h1V6h1V5H3v1z" />
    <path fill="#e5e7eb" d="M4 5h10v1H4V5zm-1 1H2v1h1v1h1v1h1v1h6V9h1V8h1V7h-1v1H4V6z" />
    <path fill="#89BBEF" d="M5 11h1v2H5v-2zm3 1h1v2H8v-2zm3-1h1v2h-1v-2z" />
  </Icon>
)

export const SnowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path fill="#d1d5db" d="M3 6h1v1h1v1h1v1h5V8h1V7h1V6h1V5H3v1z" />
    <path fill="#e5e7eb" d="M4 5h10v1H4V5zm-1 1H2v1h1v1h1v1h1v1h6V9h1V8h1V7h-1v1H4V6z" />
    <path fill="#fff" stroke="#d1d5db" d="M5 11h1v1H5v-1zm1 1h1v1H6v-1zM4 12h1v1H4v-1zm2-2h1v1H6v-1zm3 1h1v1H9v-1zm1 1h1v1h-1v-1zm-1-2h1v1H9v-1zm-3 3h1v1H6v-1zm3 1h1v1H9v-1zm1-2h1v1h-1v-1z" />
  </Icon>
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
      return SunIcon;
    case 'Clouds':
      return CloudIcon;
    case 'Rain':
    case 'Drizzle':
    case 'Thunderstorm':
      return RainIcon;
    case 'Snow':
      return SnowIcon;
    default:
      return CloudIcon;
  }
}
