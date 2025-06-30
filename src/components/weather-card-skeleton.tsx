import { Skeleton } from "@/components/ui/skeleton";

export const WeatherCardSkeleton = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-card p-6 rounded-lg border-2 border-foreground/20 pixel-shadow animate-pulse">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-16 w-16" />
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-end gap-4">
          <Skeleton className="h-24 w-32" />
          <Skeleton className="h-10 w-10" />
        </div>
        <Skeleton className="w-40 h-28" />
      </div>

      <div className="mt-8 space-y-3">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
      </div>

      <div className="mt-8">
        <Skeleton className="h-6 w-40 mb-4" />
        <div className="flex justify-between items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 flex-1 p-2 rounded-md border border-border">
              <Skeleton className="h-5 w-10" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-6 w-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
