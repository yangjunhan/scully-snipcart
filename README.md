# ScullySnipcart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

This is replicated step-by-step through the blog 
"[Scully Tutorial: A Static Site Generator for Angular Websites](https://snipcart.com/blog/angular-static-site-generator-scully)". 
The original GitHub repo is [here](https://github.com/snipcart/scully-snipcart-store).
 
 ## Steps to reproduce static site
 
 Install dependencies: `npm install`.
 
 Build the application in order to generate the distribution files: `ng build`.
 
 Build Scully and turn your Angular app into a pre-rendered static site: `npm run scully
  -- --scanRoutes`. It's important to pass the flag `--scanRoutes` so it will discover all routes to generate.
  
  Finally, go check folder under `dist/static`. Each static page is already completely rendered.
  
  ## Credits
  
  Credits go to the author of the blog, [Charles Ouellet](https://twitter.com/couellet), [Snipcart
  ](https://snipcart.com/) and
   [Scully.io](https://scully.io/) which is beyond SSG. 
