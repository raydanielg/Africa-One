import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <Navbar onCountryChange={() => {}} />
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-primary">About African One</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg text-white/80">African One is a platform that provides access to a variety of radio stations streaming over the internet. The Platform allows you to browse, search, and listen to radio broadcasts from different genres and locations. The Platform is intended for personal, non-commercial use only.</p>
          <p className="text-lg text-white/80"><b>Developer:</b> Ray Daniel</p>
          <p className="text-lg text-white/80"><b>Purpose:</b> To provide a free and accessible platform for listening to African radio stations.</p>
          <p className="text-lg text-white/80"><b>Contact:</b></p>
          <ul className="list-disc pl-6 text-white/80">
            <li><b>Phone:</b> <a href="tel:+255613976254" className="text-blue-500 hover:text-blue-700">+255613976254</a></li>
            <li><b>Email:</b> <a href="mailto:airezra2@gmail.com" className="text-blue-500 hover:text-blue-700">airezra2@gmail.com</a></li>
          </ul>
          <p className="text-lg text-white/80"><b>Source Code:</b> <a href="/redirecting" className="text-blue-500 hover:text-blue-700">GitHub Repository</a></p>
          <p className="text-lg text-white/80">This platform was developed as part of a Computer Science project at Arusha Technical College.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;