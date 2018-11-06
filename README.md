# About

SecureDrop is an open source whistleblower submission system that media organizations can install to securely accept documents from anonymous sources.

This guide aims to provide standards, principles and components to design consistent views related to the SecureDrop project and associated websites and documents.

This style guide showcases a potential future state for SecureDrop, not the current state. It is a work in progress and subject to discussion within the SecureDrop community. It was originally created by [URA Design](https://ura.design/) with input from the SecureDrop community during mid-to-late 2018. See the [related forum thread](https://forum.securedrop.org/t/securedrop-ux-style-guide/855/36) for more background.

# Getting started

The SecureDrop style guide is based on Bootstrap, an open-source toolkit for developing with HTML, CSS, and JS. We are currently on v4.1.0.

To use the SecureDrop style guide, you can download our scss style (components.scss) and import it in your project with bootstrap included. SASS is a CSS extension language.

If you want to use SASS you can download the complete archive for the style guide. The scss folder under assets contains all the sass files. Since we use bootstrap, we only add a few styles without modifying bootstrap core or defining new elements whenever possible.

Bootstrap contains a few JavaScript libraries for extra interaction with the DOM. We use these libraries but do not add extra JavaScript, so that only few elements are affected if you disable JavaScript.

This style guide has been built using Jekyll. Jekyll is a simple, blog-aware, static site generator. You can build this yourself by installing Jekyll.

# Building

Before you can modify the contents, you need to have Ruby and Jekyll installed.
You can do that by running the following command.

`gem install bundler jekyll`

After you install Jekyll, you need to clone the repo on your system.
You can do that by running the command.

`git clone $REPO`

After you have cloned the repo on your system, start by installing the bundle using the following command.

`bundle install`

Afterwards, execute the following command to build the project and to be able to browse it locally on your browser.

`bundle exec jekyll serve`


That's it! Now you can begin to modify the files and they will be automatically built and displayed on your localhost upon a page refresh.

When you're done with the changes, press Ctrl+C to stop the localhost process.
