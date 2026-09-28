import React from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/getImagePath';

const ResearchCenters = () => {
  return (
    <div className="relative bg-background/90 backdrop-blur-sm py-2 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* FM Section */}
          <a 
            href="https://oscars-project.eu/projects/fair-memories-workflow-preservation-and-reuse-analogue-oral-history-collections" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="flex flex-col items-center space-y-6 p-8 rounded-xl bg-card-background hover:brightness-110 transition-all h-full shadow-md">
              <div className="h-[120px] flex items-center justify-center w-full">
                <Image
                  src={getImagePath('/images/fairmemories_logo.png')}
                  alt="FAIR Memories Logo"
                  width={150}
                  height={150}
                  className="transition-transform group-hover:scale-105 object-contain"
                  style={{ maxHeight: '120px' }}
                />
              </div>
              <div className="text-center mt-auto">
                <h3 className="text-xl font-bold mb-2 tracking-wide text-foreground">FAIR Memories</h3>
                <p className="text-foreground/70">A workflow for analogue oral history collections</p>
              </div>
            </div>
          </a>

          {/* KP Section */}
          <a 
            href="https://kiparla.it/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="flex flex-col items-center space-y-6 p-8 rounded-xl bg-card-background hover:brightness-110 transition-all h-full shadow-md">
              <div className="h-[120px] flex items-center justify-center w-full">
                <Image
                  src={getImagePath('/images/kp_logo.png')}
                  alt="KiParla Logo"
                  width={180}
                  height={70}
                  className="transition-transform group-hover:scale-105 object-contain"
                  style={{ maxHeight: '120px' }}
                />
              </div>
              <div className="text-center mt-auto">
                <h3 className="text-xl font-bold mb-2 tracking-wide text-foreground">KiParla Corpus</h3>
                <p className="text-foreground/70">Spoken Italian and Italian speakers</p>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ResearchCenters;
