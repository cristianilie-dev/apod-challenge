
type ListProps = {
  children: React.ReactNode;
};

export default function PictureList({ children }: ListProps) {
  return (
    <div className="mx-2 sm:mx-auto sm:max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">Title</h1>
      <p className="mb-4 text-sm opacity-70">Description</p>

      <ul className="bg-base-100 rounded-box shadow-md border-0 sm:border sm:border-base-300">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Subtitle
        </li>

        {children}
      </ul>
    </div>
  );
}
