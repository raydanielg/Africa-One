import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <Navbar onCountryChange={() => {}} />

      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-primary animate-pulse">404</h1>
          <p className="text-2xl text-white/80 mb-4">Page Not Found</p>
          <Link to="/" className="text-primary hover:text-white">Go Home</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;