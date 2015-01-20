# Ember-cordova-test

This is a practice project that experiments with the ember-cli addon [Ember-Cli-Cordova](https://github.com/poetic/ember-cli-cordova).

Setting up the project was pretty easy initially with ember cli.  Then the work done by the contributors at [poetic](https://github.com/poetic), especially, [@jakecraige](https://twitter.com/jakecraige), made the process go much more smoothly to utilize the cordova utilities for extending an existing page to mobile.

## Background

I was initially experimenting with [Appgyver Steroids](http://www.appgyver.com/steroids) + Ember.js.  They have a great flow using what they call the Scanner.  A means of deploying Hybrid mobile apps to either Android or IPhone devices.  Things worked great with the my ember.js SPA app on the Android platform.  Unfortunately, when I went to iOS, I quickly ran into many issues.  There is something in their Scanner wrapper app that broke the ability to do anything useful with the ember framework.  For example, the input text box stop working quickly and did not allow the ember hooks to observe the data submitted in forms, which rendered the entire code useless on iOS devices.  Then, I heard about ember-cli-cordova and [@jakecraige](https://twitter.com/jakecraige) successful addon and had to try it.  This project proved to be very useful and I just wanted to share the starting point with others.

## Installation

* `git clone https://github.com/cmosguy/ember-cordova-test` this repository
* change into the new directory
* `npm install`
* `bower install`


## Running / Development

* If you want to get the live-reloading to work for *iOS* you have to do the following: 
  * `ember cordova:build --platform=ios`
  * `ember server`
  * You should see the iOS Simulator with your app
* For *Android*: 
  * `ember cordova:build --platform=android`
  * `ember server`
  * Make sure you go through the steps to install a device in the AVD.  You should see the app live-reload in the emulator for Android.

