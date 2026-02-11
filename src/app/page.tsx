import Image from "next/image";
import image1 from "../../public/images/WhatsApp Image 2026-02-10 at 10.48.53 PM.jpeg";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4">
      <Image
        src={image1}
        alt="Coming soon"
        width={400}
        height={500}
        className="mb-6"
      />

      <h1 className="text-5xl font-bold mb-6">Website is coming!!!</h1>

      <div className="flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://threads.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition"
        >
          <FaThreads />
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaTiktok />
        </a>
      </div>
    </section>
  );
}
