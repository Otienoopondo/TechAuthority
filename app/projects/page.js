export default function ProjectsPage() {
  const projects = [
    { title: 'Smart Hotel System', description: 'Hotel service automation with real-time dashboard.' },
    { title: 'Captive Portal System', description: 'Internet packages with M-Pesa payment & session tracking.' },
    { title: 'Tech Blog CMS', description: 'Markdown blog with admin panel and deployment system.' },
  ];

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-cyan-400">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-300">{proj.title}</h3>
            <p className="mt-2 text-gray-300">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
