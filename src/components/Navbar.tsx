import { Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  onCountryChange: (country: string) => void;
}

export const Navbar = ({ onCountryChange }: NavbarProps) => {
  const [selectedCountry, setSelectedCountry] = useState("Tanzania");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    onCountryChange(event.target.value);
  };

  return (
    <div>
      <nav className="bg-card/80 backdrop-blur-sm border-b border-primary/20 animate-fade-in relative">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-wave" />
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-wave" style={{ animationDelay: "0.5s" }} />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <Radio className="w-6 h-6 text-primary transition-transform group-hover:scale-110 animate-float" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Africa One
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <select
                className="bg-card border border-primary/20 rounded-md text-white/80 focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="Tanzania">Tanzania</option>
                <option value="Kenya">Kenya</option>
                <option value="Uganda">Uganda</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Burundi">Burundi</option>
                <option value="South Sudan">South Sudan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-wave" />
        <div className="absolute inset-x-0 bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-wave" style={{ animationDelay: "0.5s" }} />
      </nav>
    </div>
  );
};