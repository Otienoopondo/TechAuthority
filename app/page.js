'use client';

import { useEffect, useRef, useState } from 'react';

const videos = [
  '/assets/hero-video.mp4',
  '/assets/hero-video1.mp4',
  '/assets/hero-video2.mp4',
  '/assets/hero-video3.mp4',
  '/assets/hero-video4.mp4',
];

export default function HomePage() {
  const videoRefA = useRef(null);
  const videoRefB = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAActive, setIsAActive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  useEffect(() => {
    const activeVideo = isAActive ? videoRefA.current : videoRefB.current;
    const inactiveVideo = isAActive ? videoRefB.current : videoRefA.current;

    const handleEnded = () => {
      const nextIndex = (currentIndex + 1) % videos.length;

      inactiveVideo.src = videos[nextIndex];
      inactiveVideo.load();
      inactiveVideo.oncanplay = () => {
        inactiveVideo.style.opacity = 1;
        activeVideo.style.opacity = 0;
        inactiveVideo.play();
        setTimeout(() => {
          setCurrentIndex(nextIndex);
          setIsAActive(!isAActive);
        }, 1000);
      };
    };

    const video = activeVideo;
    video.addEventListener('ended', handleEnded);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentIndex, isAActive]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xqabjvkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true);
        setShowModal(false);
        setFormData({ email: '', phone: '', city: '', message: '' });
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert('Submission failed. Try again.');
      }
    } catch (error) {
      alert('Error submitting the form.');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Videos */}
      <video
        ref={videoRefA}
        src={videos[currentIndex]}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: isAActive ? 1 : 0 }}
      />
      <video
        ref={videoRefB}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: isAActive ? 0 : 1 }}
      />

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center backdrop-blur-sm bg-black/50 px-4 z-10 relative h-full justify-start pt-[20vh] md:pt-[26vh]">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-4"
          style={{
            textShadow: '0 0 0.5px #0ff, 0 0 2px #0ff',
          }}
        >
          TechAuthority
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          We build bold, scalable digital products for a tech-driven future.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="/projects"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full text-sm uppercase"
          >
            Our Projects
          </a>
          <a
            href="/services"
            className="bg-white text-cyan-700 px-6 py-2 rounded-full text-sm uppercase"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Floating Get in Touch Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-full shadow-lg transition"
      >
        Get in Touch
      </button>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white text-black rounded-xl w-full max-w-md p-6 animate-fadeIn relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Contact Us</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="3"
                className="w-full border px-3 py-2 rounded"
              />
              <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded shadow-lg">
          ✅ Submission successful. We'll get to you soon.
        </div>
      )}
    </section>
  );
}
