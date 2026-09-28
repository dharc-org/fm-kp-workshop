# DH Seminars - Next.js Page Deployment Guide

This repository contains a Next.js application with Tailwind CSS. Follow these instructions to deploy it successfully. 

## Prerequisites

- Node.js (version 18.x or higher recommended)
- npm 
- A GitHub account

## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/laurentfintoni/fm-kp-workshop.git
   cd fm-kp-workshop
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server to double check the application:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions. The workflow file is already set up in `.github/workflows/nextjs.yml`. 
To set up GitHub Pages, follow these steps:

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions** => select the **Next.js ** suggested workflow
   - Click on **Save**

3. The first push to the `main` branch will automatically trigger the deployment workflow. 

## Important Configuration Files

- **next.config.js**: Contains Next.js-specific configurations
- **tailwind.config.js**: Contains Tailwind CSS configurations
- **postcss.config.js**: Contains PostCSS configurations for Tailwind
- **jsconfig.json**: Contains path aliases configuration
- **package.json**: Contains dependencies and scripts

## License

This project is maintained by **/DH.arc – Digital Humanities Advanced Research
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
  font is **Roboto Mono** (Apache License 2.0), both loaded via `next/font/google`
  (self-hosted at build time). *(This project previously bundled the Satoshi font under
  the ITF Free Font License; it was removed in favour of an OFL font to avoid
  self-hosting/redistribution restrictions.)*
- **Logos and marks** in `public/images/` (FAIR Memories, KP, OSCARS, University of
  Bologna, DHARC, etc.) are the property of their respective owners and are used for
  attribution/identification only.
- Third-party npm dependencies (Next.js, React, Tailwind CSS, etc.) retain their own
  licenses (MIT/BSD/Apache).