import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">CollegeFinder</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping Class 10 students discover the right junior college based on their eligibility, preferences, and budget.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/discover" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Find Colleges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Useful Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mumbai.11thadmission.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  FYJC Admission Portal
                </a>
              </li>
              <li>
                <a
                  href="https://mahahsscboard.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Maharashtra Board
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CollegeFinder. Built to simplify junior college admissions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
