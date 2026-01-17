import { Percent, Users, BookOpen, School } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: Percent,
      title: "Select Your Percentage",
      description: "Choose your Class 10 percentage range from the dropdown. We use 5% intervals for accurate matching.",
    },
    {
      number: 2,
      icon: Users,
      title: "Choose Your Category",
      description: "Select your caste category (Open, OBC, SC, ST, VJ/NT, EWS) to see category-specific cut-offs.",
    },
    {
      number: 3,
      icon: BookOpen,
      title: "Pick Your Subject",
      description: "Filter by preferred stream – Science, Commerce, Arts, or specialized bifocal subjects.",
    },
    {
      number: 4,
      icon: School,
      title: "View Matching Colleges",
      description: "Get a list of colleges you're eligible for, with fees, cut-offs, and available subjects.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to find colleges that match your eligibility and preferences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line (hidden on mobile and after last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="step-number mb-4 relative z-10">
                  {step.number}
                </div>
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
