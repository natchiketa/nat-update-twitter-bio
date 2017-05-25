# update-twitter-bio
Uses [a Twitter REST API client library](https://github.com/desmondmorris/node-twitter) for Node.js to update a Twitter profile's bio (`description`).

I use this via Heroku Scheduler to run it once a day. Thanks to Rafal Spacjer, specifically [this post on their blog](http://www.spacjer.com/blog/2014/02/10/defining-node-dot-js-task-for-heroku-scheduler/) for providing a simple example using Node.js, as the Heroku docs don't include one.