import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <Navbar onCountryChange={() => {}} />
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg text-white/80">Welcome to African One! These Terms of Service ("Terms") govern your access to and use of the African One website and its services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. Please read them carefully.</p>

          <h3 className="text-2xl font-semibold text-primary">1. Acceptance of Terms</h3>
          <p className="text-lg text-white/80">By accessing or using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you are not authorized to use the Platform.</p>

          <h3 className="text-2xl font-semibold text-primary">2. Description of Service</h3>
          <p className="text-lg text-white/80">African One is an online platform that provides access to a variety of radio stations streaming over the internet. The Platform allows you to browse, search, and listen to radio broadcasts from different genres and locations. The Platform is intended for personal, non-commercial use only.</p>

          <h3 className="text-2xl font-semibold text-primary">3. User Conduct</h3>
          <p className="text-lg text-white/80">You agree to use the Platform in a responsible and lawful manner. You must not:</p>
          <ul className="list-disc pl-6 text-white/80">
            <li>Use the Platform for any illegal or unauthorized purpose.</li>
            <li>Interfere with or disrupt the operation of the Platform or the servers and networks used to make the Platform available.</li>
            <li>Attempt to gain unauthorized access to any portion of the Platform or any other systems or networks.</li>
            <li>Transmit any viruses, malware, or other harmful code.</li>
            <li>Collect or harvest any information about other users.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary">4. Intellectual Property</h3>
          <p className="text-lg text-white/80">All content on the Platform, including radio streams, station logos, and trademarks, is owned by the respective radio stations and is protected by copyright and other intellectual property laws. You are granted a limited, non-exclusive, and non-transferable license to access and use the content for personal, non-commercial purposes only. You may not reproduce, distribute, modify, or create derivative works of any content without the express written consent of the copyright owner.</p>

          <h3 className="text-2xl font-semibold text-primary">5. Disclaimer of Warranties</h3>
          <p className="text-lg text-white/80">THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>

          <h3 className="text-2xl font-semibold text-primary">6. Limitation of Liability</h3>
          <p className="text-lg text-white/80">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE PLATFORM, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, AND PUNITIVE DAMAGES. OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM WILL NOT EXCEED $100.</p>
          
          
          <h3 className="text-2xl font-semibold text-primary">7. Termination</h3>
          <p className="text-lg text-white/80">The developer reserves the right to suspend or terminate your access to African One at any time, without prior notice, if you violate these terms or engage in any harmful activities.</p>
          
          <h3 className="text-2xl font-semibold text-primary">8. Changes to the Terms</h3>
          <p className="text-lg text-white/80">These terms may be updated periodically to reflect changes in the platform or legal requirements. Users are encouraged to review the terms regularly. Continued use of the service constitutes acceptance of any updated terms.</p>
          
          <h3 className="text-2xl font-semibold text-primary">9. Governing Law</h3>
          <p className="text-lg text-white/80">These terms are governed by the laws of Tanzania. Any disputes arising from or relating to the use of African One will be subject to the jurisdiction of the courts in Tanzania.</p>
          
          <h3 className="text-2xl font-semibold text-primary">10. Contact Information</h3>
          <p className="text-lg text-white/80">For questions, feedback, or concerns about these terms, please contact the developer via GitHub or other available channels provided on the website.</p>
          
          <p className="text-lg text-white/80">Thank you for using African One!</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;