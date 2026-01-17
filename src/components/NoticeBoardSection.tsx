import { ExternalLink, Bell, Calendar, FileText, AlertCircle } from "lucide-react";

const NoticeBoardSection = () => {
  const notices = [
    {
      icon: ExternalLink,
      title: "FYJC Admission Portal",
      description: "Official Mumbai 11th admission registration and login portal",
      link: "https://mumbai.11thadmission.org.in/",
      type: "portal",
    },
    {
      icon: Calendar,
      title: "Admission Timeline 2025-26",
      description: "Check important dates for registration, rounds, and document verification",
      link: "https://mumbai.11thadmission.org.in/",
      type: "timeline",
    },
    {
      icon: FileText,
      title: "Merit List Announcements",
      description: "View category-wise merit lists and allotment results",
      link: "https://mumbai.11thadmission.org.in/",
      type: "merit",
    },
    {
      icon: AlertCircle,
      title: "Document Verification",
      description: "List of required documents and verification centers",
      link: "https://mumbai.11thadmission.org.in/",
      type: "docs",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-notice/10 px-4 py-2 text-sm font-medium text-notice mb-4">
            <Bell className="h-4 w-4" />
            <span>Important Updates</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Notice Board
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with official admission links and important announcements.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {notices.map((notice, index) => (
            <a
              key={notice.title}
              href={notice.link}
              target="_blank"
              rel="noopener noreferrer"
              className="notice-board rounded-lg p-5 hover:shadow-md transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-notice/20 flex items-center justify-center text-notice group-hover:bg-notice group-hover:text-notice-foreground transition-colors">
                  <notice.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                    {notice.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {notice.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeBoardSection;
