import React from "react";
import LogoCloud from './LogoCloud';
import { seminarData } from '../data/seminarData';

const Footer = ({ language = 'en' }) => {
  const content = seminarData[language] || seminarData['en'];
  const footer = content.footer;
  const committeeMembers = footer.committee || [];

  return (
    // CAMBIATO: Sfondo ora usa bg-background. Rimosso text-gray-300 perché ereditato da body.
    <footer className="bg-background py-2 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* == COMMITTEE ==================================================== */}
        <div className="border-b border-border pb-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md bg-card-background border ${
                  member.isProfessor ? "border-primary" : "border-border"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-1 ${
                    member.isProfessor ? "text-primary" : "text-foreground"
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {member.affiliation}
                </p>
                <p
                  className={`text-xs mt-2 ${
                    member.isProfessor ? "text-foreground/80" : "text-primary"
                  }`}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* == CONTACT + VENUE ============================================= */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {footer.contact.title}
            </h3>
            <p className="mb-2">
              {footer.contact.emailLabel}{" "}
              <a
                href={`mailto:${footer.contact.email}`}
                className="text-primary hover:underline"
              >
                {footer.contact.email}
              </a>
            </p>
            <p className="mb-2">
              {footer.contact.infoText}{" "}
              <a
                href={footer.contact.infoLinkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {footer.contact.infoLinkText}
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {footer.venue.title}
            </h3>
            {footer.venue.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* == FUNDING ATTRIBUTION ========================================= */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-foreground font-semibold">
              {footer.funding.map((chunk, i) => {
                const cls = (chunk.styles || []).join(" ");
                return chunk.href ? (
                  <a
                    key={i}
                    href={chunk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cls} text-primary hover:underline font-bold`}
                  >
                    {chunk.text}
                  </a>
                ) : (
                  <span key={i} className={cls}>
                    {chunk.text}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        {/* == LOGOS ======================================================= */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <LogoCloud />
        </div>

        {/* == COPYRIGHT =================================================== */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>
            © {new Date().getFullYear()} {footer.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
