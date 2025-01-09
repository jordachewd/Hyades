export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <h2 className="h2-normal text-darkblue-400">{title}</h2>
      {subtitle && <p className="p-16-regular">{subtitle}</p>}
    </>
  );
}
