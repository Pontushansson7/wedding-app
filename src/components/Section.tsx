type SectionProps = {
  id: string;
  title?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="
        min-h-screen
        flex flex-col justify-center items-center
        p-12 text-center
        bg-primary-100 even:bg-secondary-100
      "
    >
      {/* Titel med script-font för romantisk känsla */}
      {title && (
        <h2 className="text-5xl font-serif mb-6 text-primary-700 tracking-wide leading-tight">
          {title}
        </h2>
      )}

      {/* Allt innehåll i body-font */}
      <div className="max-w-xl font-body text-lg text-gray-800">{children}</div>
    </section>
  );
}
