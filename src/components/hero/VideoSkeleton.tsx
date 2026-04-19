export function VideoSkeleton() {
  return (
    <div className="absolute inset-0 bg-void">
      <div className="absolute inset-0 shimmer-skeleton opacity-40" />
      <div className="absolute left-[12%] top-[42%] space-y-4">
        <div className="h-16 w-80 bg-text-dim/10 rounded shimmer-skeleton" />
        <div className="h-4 w-40 bg-text-dim/10 rounded shimmer-skeleton" />
      </div>
    </div>
  );
}