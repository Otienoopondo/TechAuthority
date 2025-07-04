export default function TestimonialsPage() {
  const testimonials = [
    { name: 'Joy N.', message: 'TechAuthority helped us launch our MVP in record time!' },
    { name: 'Daniel O.', message: 'Reliable and professional — the best in software delivery.' },
    { name: 'Aisha M.', message: 'Their UI designs are stunning. Would recommend again!' },
  ];

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-cyan-400">Testimonials</h2>
      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
            <p className="text-lg italic text-gray-200">“{t.message}”</p>
            <p className="mt-2 text-right text-cyan-300 font-semibold">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
