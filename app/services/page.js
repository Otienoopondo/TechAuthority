export default function ServicesPage() {
  const services = [
    'Full-Stack Web Development',
    'Responsive Website Design & SEO',
    'Progressive Web Apps (PWAs)',
    'Mobile App Development (Android/iOS)',
    'UI/UX Design & Prototyping',
    'M-Pesa Payments Integration',
    'Website Hosting & Domain Setup',
    'Cloud Infrastructure (AWS, GCP, CI/CD)',
    'DevOps & Containerization (Docker, K8s)',
    'Cybersecurity Consulting',
    'WiFi Captive Portals (Session + Packages)',
    'Custom Dashboards & Admin Panels',
    'API Design & Integrations',
    'IoT Projects & Embedded Systems',
    'AI/ML Model Deployment',
    'Blockchain & Smart Contracts',
    'Tech Training & Bootcamps',
    'System Architecture & Tech Consulting',
  ];

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-cyan-400">Services We Offer</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, idx) => (
          <div key={idx} className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-400/20 transition">
            <h3 className="text-lg font-semibold text-cyan-300">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
