import type { SVGProps } from "react";

interface PixelAvatarProps {
  weatherCondition?: string;
  className?: string;
}

const BaseAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 48" shapeRendering="crispEdges" {...props}>
    {/* Skin */}
    <path fill="#f2d5b1" d="M12 12h8v8h-8z" />
    <path fill="#e0ac69" d="M12 20h8v1h-8z" />
    {/* Eyes */}
    <path fill="#2c2c2c" d="M14 15h2v2h-2zm4 0h2v2h-2z" />
    {/* Hair */}
    <path fill="#4a3123" d="M11 8h10v4h1v1h-1v-1h-1v-1H12v1H11v1h-1v-1h1V8z" />
  </svg>
)

const SunnyAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 48" shapeRendering="crispEdges" {...props}>
    <BaseAvatar />
    {/* Sunglasses */}
    <path fill="#2c2c2c" d="M13 15h8v2h-8z" />
    <path fill="#4a4a4a" d="M13 16h1v1h-1zm6 0h1v1h-1z" />
    {/* T-shirt */}
    <path fill="#FFC857" d="M10 21h12v10h-1v-2h-1v2h-8v-2h-1v2h-1V21z" />
    <path fill="#eeb74f" d="M10 21h2v1h-2zm10 0h-2v1h2z" />
  </svg>
);

const CloudyAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 48" shapeRendering="crispEdges" {...props}>
    <BaseAvatar />
    {/* Jacket */}
    <path fill="#a0a0a0" d="M10 21h12v12H10z" />
    <path fill="#888888" d="M15 21h2v12h-2z" />
    <path fill="#bebebe" d="M11 21h2v1h-2zm8 0h2v1h-2z"/>
  </svg>
);

const RainyAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 48" shapeRendering="crispEdges" {...props}>
    {/* Umbrella */}
    <path fill="#FFC857" d="M0 12h32v4H0z" />
    <path fill="#eeb74f" d="M0 11h2v1H0zm30 0h2v1h-2z M15 16h2v6h-2z" />
    <BaseAvatar />
    {/* Raincoat */}
    <path fill="#89BBEF" d="M10 21h12v12H10z" />
    <path fill="#7ab0de" d="M15 21h2v12h-2z" />
    <path fill="#a3c9f2" d="M11 21h2v1h-2zm8 0h2v1h-2z"/>
  </svg>
);

const SnowyAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 48" shapeRendering="crispEdges" {...props}>
    <BaseAvatar />
     {/* Scarf */}
     <path fill="#e57373" d="M12 20h8v3h-8z" />
     <path fill="#d32f2f" d="M12 21h8v1h-8z M19 23h2v4h-2z" />
    {/* Winter Coat */}
    <path fill="#607d8b" d="M10 23h12v10H10z" />
    <path fill="#546e7a" d="M15 23h2v10h-2z" />
  </svg>
);


export const PixelAvatar = ({ weatherCondition, className }: PixelAvatarProps) => {
  const getAvatar = () => {
    switch (weatherCondition) {
      case 'Clear':
        return <SunnyAvatar className={className} />;
      case 'Rain':
      case 'Drizzle':
      case 'Thunderstorm':
        return <RainyAvatar className={className} />;
      case 'Snow':
        return <SnowyAvatar className={className} />;
      case 'Clouds':
      default:
        return <CloudyAvatar className={className} />;
    }
  };

  return getAvatar();
};
