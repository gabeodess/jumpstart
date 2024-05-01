# README

This is a base application that includes tooling for user authentication.

## TODO
 - [x] Update database names in `config/database.yml`
 - Update `.env`/`initializers/credentials.yml.enc` with appropriate values (Rollbar/SendGrid/etc.)
 - [x] Rename the application

## Getting Started

### System
 - Install RVM: https://rvm.io/rvm/install
 - Install the appropriate version of ruby specified in `.ruby-version` using RVM
 - Install postgres `brew install postgresql`
 - `gem install bundler`
 - `brew install node`
 - `brew install yarn`

### The app
 - Copy the [master key](https://drive.google.com/drive/u/1/folders/1l2smnyWCik8UxDwvLBjSsT7PkMZ2b5nt) into `/config/master.key`
 - `cd` into project directory
 - `bundle install`
 - `yarn install`
 - `rails db:setup`
 - `bin/dev`
 - `open http://localhost:3000`