type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 text-center bg-white"
    >
      <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
      <div className="max-w-xl text-gray-700">{children}</div>
    </section>
  );
}
