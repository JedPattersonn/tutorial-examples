export default function SuccessPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Successfully Logged In
        </h1>
        <p className="mt-4 text-muted-foreground">
          Welcome back! You have been successfully logged in.
        </p>
      </div>
    </div>
  );
}
