# README

This is a base application that includes tooling for user authentication.

## TODO
 - [x] Update database names in `config/database.yml`
 - Update `.env`/`initializers/credentials.yml.enc` with appropriate values (Rollbar/SendGrid/etc.)
 - [x] Rename the application

## Getting Started

### System
 - Install RVM: https://rvm.io/rvm/install
 - Install the appropriate version of ruby using RVM (`rvm install 3.2.2`)
 - `gem install bundler`

### The app
 - `bundle install`
 - `rails db:setup`
 - `bin/dev`
 - `open http://localhost:3000`