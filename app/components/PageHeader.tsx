interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section
      className="py-16 px-6 text-center text-white"
      style={{ background: "linear-gradient(135deg, #1a3c6e 0%, #2d5fa8 100%)" }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-white/80 text-lg">{subtitle}</p>}
      {breadcrumb && (
        <p className="text-white/60 text-sm mt-2">
          Home &rsaquo; {breadcrumb}
        </p>
      )}
    </section>
  );
}
