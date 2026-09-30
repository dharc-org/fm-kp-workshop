import { getImagePath } from "../utils/getImagePath";

/**
 * Site-wide background: fixed, full-viewport image + gradient veil, sitting
 * behind all content (-z-10). The gradient keeps text legible; tune its stops
 * (from/via/to-background + the /NN opacity) to taste. Nav (z-50) stays above.
 * object-top keeps the top band of the portrait image on wide/landscape viewports
 * (where object-cover crops vertically); switch to object-center/-bottom if needed.
 */
const SiteBackground = () => (
  <div className="fixed inset-0 -z-10" aria-hidden="true">
    <img
      src={getImagePath("/images/background.png")}
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
  </div>
);

export default SiteBackground;
