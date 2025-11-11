import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Mail, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/bruno.png";

const Home = () => {
  const projects = [
    {
      title: "AI/LLM-based adjusted earnings calculator & predictor",
      description: "AI-based solution that reviews financial statements, extracts relevant information, calculates adjusted earnings over 10 years timeline and projects future earnings",
      link: "/earnings-calculator",
    },
    {
      title: "AI/LLM-based Insurance Underwriting (UWR) risk decision engine",
      description: "AI-based insurance Underwriting (UWR) risk engine that uses user key information, enhanced with internal databases and public information to assess risk",
      link: "/underwriting-risk",
    },
    {
      title: "AI/ML-based Stock's alpha (excess returns) analytics/predictor",
      description: "AI based solution that performs firm analysis and provides concise investment advice, based on public return information determines alpha and beta, reviews SEC 10Ks and strategic/market analysis",
      link: "/alpha-analytics",
    },
    {
      title: "AI/LLM-based solution that extracts data from unstructured email/documents",
      description: "AI-based solution that reads email content/unstructured data from UWRs communications with back office support teams. Reconciles reviewed submission/bind data database data",
      link: "/data-extractor",
    },
  ];

  const academics = [
    {
      title: "Masters in Business Administration (MBA)",
      institution: "University of Chicago Booth School of Business",
      description: "Concentrations in Applied AI, Strategy and Entrepreneurship",
    },
    {
      title: "Masters in Communication Network Engineering",
      institution: "University of Lisbon - Lisbon Tech (IST)",
      description: "Concentrations in Wireless Sensor Networks, with research/work published on SENSORNETS 2014: LA6-Local Aggregation in the IoT",
    },
  ];

  const certifications = [
    { name: "Microsoft Azure", details: "Fundamentals" },
    { name: "Databricks", details: "Fundamentals" },
    { name: "Amazon Web Services", details: "Fundamentals" },
    { name: "Google Cloud", details: "Fundamentals" },
    { name: "PMI, PMP", details: "Project Management Professional" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 pt-6 pb-12 space-y-10">
        {/* Hero Section */}
        <section className="flex items-start justify-between gap-8 flex-wrap">
          <div className="space-y-4 flex-1 min-w-[300px]">
            <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
              Bruno Graca Coelho
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Product Manager / Problem solver · Head of Data · MBA@UChicago Booth
            </p>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={profilePhoto} 
              alt="Bruno Graca Coelho" 
              className="w-24 h-32 object-cover object-top rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-2">
          <h2 className="text-3xl font-light text-foreground">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Problem solver with AI and Machine Learning. Currently Head of Data at a global Insurance group, 
            passionate about AI transformation, product strategy, and development. I am currently completing 
            my MBA at Booth with a concentration on Strategy and Applied AI.
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">AI Product Portfolio & Experiments</h2>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Academics Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Academics</h2>
          <div className="space-y-4">
            {academics.map((academic, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="py-4 px-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {academic.title}
                  </h3>
                  <p className="text-base text-primary mb-2">{academic.institution}</p>
                  <p className="text-sm text-muted-foreground">{academic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Trainings & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="py-4 px-5">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Resources</h2>
          <div className="space-y-4">
            <Card className="bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="py-4 px-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  My Prompt Library
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Curated collection of AI and LLM prompts for data, strategy, and product applications
                </p>
                <a
                  href="/prompts"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <span>Explore Prompts</span>
                  <span>→</span>
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="py-4 px-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  SENSORNETS 2014: LA6-Local Aggregation in the IoT
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Research publication on wireless sensor networks and local aggregation techniques for Internet of Things applications
                </p>
                <a
                  href="https://www.scitepress.org/PublicationsDetail.aspx?ID=hGUOwZL0J3c=&t=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <span>View Publication</span>
                  <span>→</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Contact</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:bgracacoelho@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bgracacoelho/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://github.com/bgcoelho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">GitHub</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 text-center text-sm text-muted-foreground border-t border-border">
          <p>&copy; 2025 Bruno Graca Coelho</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
