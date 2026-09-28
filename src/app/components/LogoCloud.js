// components/LogoCloud.js
import Image from 'next/image';
import styles from './LogoCloud.module.css';
import { getImagePath } from '../utils/getImagePath';

// I dati dei loghi rimangono qui per comodità
const logos = [
  { src: getImagePath('/images/fairmemories_logo.png'), alt: 'FAIR Memories' },
  { src: getImagePath('/images/kp_logo.png'), alt: 'KiParla' },
  { src: getImagePath('/images/oscars_square.png'), alt: 'OSCARS' },
  { src: getImagePath('/images/logo-unibo.png'), alt: 'Alma Mater Studiorum Università di Bologna' },
  { src: getImagePath('/images/dharc-logo.svg'), alt: 'Digital Humanities Advanced Research Centre' },
];

const LogoCloud = () => {
  return (
    // Restituiamo direttamente la griglia, senza contenitori esterni o titoli
    <div className={styles.logoGrid}>
      {logos.map((logo, index) => (
        <div key={index} className={styles.logoWrapper}>
          <Image
            src={logo.src}
            alt={logo.alt}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoCloud;