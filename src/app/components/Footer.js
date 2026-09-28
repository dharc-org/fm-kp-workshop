import React from "react";
import LogoCloud from './LogoCloud';
import { seminarData } from '../data/seminarData';

const Footer = ({ language = 'en' }) => {
  const content = seminarData[language] || seminarData['en'];
  const footer = content.footer;

  return (
    // Always-visible site footer (contact / venue / funding / logos / copyright).
    // The organizing-committee grid lives in Committee.js and is rendered separately
    // inside its collapsible accordion — this footer shows regardless of that state.
    <footer className="bg-background py-2 md:py-4 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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
