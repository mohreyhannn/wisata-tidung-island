import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

export default function ScrollTools() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollPercent);
      setShowTop(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
        <div
          className="h-full bg-sky-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating Back To Top */}
      {showTop && (
        <Link
          to="home"
          smooth
          duration={600}
          className="fixed bottom-6 right-6 z-[9999] flex h-13 w-13 cursor-pointer items-center justify-center rounded-full bg-sky-600 text-white shadow-2xl transition hover:-translate-y-1 hover:bg-sky-700"
        >
          <ArrowUp size={24} />
        </Link>
      )}
    </>
  );
}