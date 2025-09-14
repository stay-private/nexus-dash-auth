export const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="glass-card p-8 rounded-xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-muted-foreground animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
};