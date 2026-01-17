import { Target, Users, MapPin } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Simplify Admissions",
      description: "No more juggling multiple portals and PDFs. Get all college eligibility info in one place.",
    },
    {
      icon: Users,
      title: "For Students & Parents",
      description: "Designed for Class 10 students and parents navigating FYJC admissions for the first time.",
    },
    {
      icon: MapPin,
      title: "Mumbai Focus",
      description: "Currently supporting Ghatkopar, Vidyavihar, and Kurla areas with accurate, updated data.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            About CollegeFinder
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the confusion students face after Class 10. CollegeFinder is built to make junior college discovery simple, transparent, and stress-free.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
