export default function ContactPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-cyan-400">Let’s Collaborate</h2>
      <p className="text-lg text-gray-300 mb-4">
        Whether it's a new app idea or improving an existing product — I'm here to help bring your tech vision to life.
      </p>
      <div className="space-y-2">
        <p>📧 <a href="mailto:samwelotwala@gmail.com" className="text-cyan-400 underline">samwelotwala@gmail.com</a></p>
        <p>📞 <a href="tel:+254740597879" className="text-cyan-400 underline">0740 597 879</a></p>
      </div>
    </section>
  );
}
