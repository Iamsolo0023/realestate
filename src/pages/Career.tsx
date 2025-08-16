import { Button } from "@/components/ui/button";
import { Briefcase, Users, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const CareerPage = () => {
  const jobs = [
    {
      title: "Senior Architect",
      location: "Ahmedabad, India",
      type: "Full-time",
      description: "Lead design projects from concept to execution, ensuring high-quality architectural outcomes."
    },
    {
      title: "Site Engineer",
      location: "Surat, India",
      type: "Full-time",
      description: "Oversee daily construction activities, manage on-site teams, and maintain safety compliance."
    },
    {
      title: "Sales Executive",
      location: "Vadodara, India",
      type: "Full-time",
      description: "Engage potential buyers, present project portfolios, and close real estate deals."
    }
  ];

  const benefits = [
    { icon: Users, title: "Collaborative Culture", description: "Work with talented, passionate people." },
    { icon: Briefcase, title: "Career Growth", description: "Opportunities to learn and advance." },
    { icon: HeartHandshake, title: "Employee Wellbeing", description: "We care for you inside and outside of work." }
  ];

  return (
    <section className="bg-black text-white min-h-screen font-times">
      {/* Hero Section */}
      <div className="relative text-center py-24 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Join Our Team</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          At Shridhar Developers, we don't just build homes — we build careers. 
          Be part of something meaningful.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {benefits.map((b, i) => (
          <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
            <b.icon className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-white/70">{b.description}</p>
          </div>
        ))}
      </div>

      {/* Open Positions */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-white/60 mb-4">
                {job.location} • {job.type}
              </p>
              <p className="mb-6 text-white/80">{job.description}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/80">
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <h2 className="text-3xl font-bold mb-4">Your Next Chapter Starts Here</h2>
        <p className="text-white/70 mb-8">Take the first step toward a rewarding career.</p>
        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
          Submit Your Resume
        </Button>
      </div>
    </section>
  );
};

export default CareerPage;
