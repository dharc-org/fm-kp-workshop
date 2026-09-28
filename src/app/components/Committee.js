// src/app/components/Committee.js
// The organizing-committee member grid. Rendered inside the collapsible
// "Organizing Committee" accordion in SeminarContent.js. Reads footer.committee
// from seminarData (kept there so all footer-area copy lives in one place).
import React from "react";
import { seminarData } from '../data/seminarData';

const Committee = ({ language = 'en' }) => {
  const content = seminarData[language] || seminarData['en'];
  const committeeMembers = content.footer.committee || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  );
};

export default Committee;
