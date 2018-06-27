### Note
The official repo has been moved to Debian Infrastructure: https://salsa.debian.org/reproducible-builds/reproducible-styleguide
For comments, issues, Pull/Merge Requests please head over there.

# About

Reproducible builds are a set of software development practices that create an independently-verifiable path from source code to the binary code used by computers.
This guide aims to provide standards, principles and components to design consistent views related to the Reproducible Builds project. These pages are a living document and we welcome contributions, feedback and suggestions.


# Getting started

The Reproducible Builds styleguide is based on Bootstrap, an open-source toolkit for developing with HTML, CSS, and JS. We are currently on v4.1.0.

To use the Reproducible Builds styleguide, you can download our scss style (components.scss) and import it in your project with bootstrap included. SASS is a CSS extension language.

If you want to use SASS you can download the complete archive for the styleguide. The scss folder under assets contains all the sass files. Since we use bootstrap, we only add a few styles without modifying bootstrap core or defining new elements whenever possible.

Bootstrap contains a few JavaScript libraries for extra interaction with the DOM. We use these libraries but do not add extra JavaScript, so that only few elements are affected if you disable JavaScript.

This styleguide has been built using Jekyll. Jekyll is a simple, blog-aware, static site generator. You can build this yourself by installing Jekyll.
