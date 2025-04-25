type ErrorProps = {
  title?: string;
  message?: string;
};

export default function Error({ title = 'Something went wrong', message = 'Please try again later.' }: ErrorProps) {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          {title}
        </h1>
        <p className="mb-4 text-xs sm:text-sm opacity-70">
          {message}
        </p>
      </div>
    </div>
  );
}