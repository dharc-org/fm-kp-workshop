# FAIR Memories x KiParla Workshop

This repository contains the code for the event website for the FAIR Memories x KiParla workshop, composed of a Next.js application with Tailwind CSS. This code is adapted from a [previous website template for the DHLandscapes event in 2025](https://github.com/dharc-org/dharc-x-dhlab-seminars). 

## License

This project is maintained by Laurent Fintoni for the **/DH.arc – Digital Humanities Advanced Research
Centre, University of Bologna**.

- **Source code** (everything except the content and third-party assets below) is
  released under the **MIT License**.
- **Site content** (the text/copy in `src/app/data/seminarData.js` and the components)
  is released under **[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)**.

### MIT License (code)

```
MIT License

Copyright (c) 2025–2026 /DH.arc – Digital Humanities Advanced Research Centre,
University of Bologna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Third-party assets (not covered by the above)

The following bundled or referenced assets retain their own licenses and are **not**
covered by the MIT / CC BY 4.0 licenses:

- **Fonts:** the display/body font is **Manrope** (SIL Open Font License) and the mono
  font is **Roboto Mono** (Apache License 2.0)
- **Logos and marks** in `public/images/` (FAIR Memories, KiParla, OSCARS, University of
  Bologna, DHARC, etc.) are the property of their respective owners and are used for
  attribution/identification only.
- Third-party npm dependencies (Next.js, React, Tailwind CSS, etc.) retain their own
  licenses (MIT/BSD/Apache).

## GenAI disclosure

Claude Code is used to automate repo updates and for updates to the underlying JavaScript that drives the website,
including refactoring how some of the content and menu responds to language switching, footer display, and switching the fonts.