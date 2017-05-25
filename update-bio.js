require('dotenv').config();
const Twitter = require('twitter');

const MILLISECONDS_PER_DAY = (1000 * 60 * 60 * 24);

const CONSUMER_KEY = process.env.CONSUMER_KEY
const CONSUMER_SECRET = process.env.CONSUMER_SECRET
const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

const client = new Twitter({
  consumer_key: CONSUMER_KEY, 
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN_KEY,
  access_token_secret: ACCESS_TOKEN_SECRET,
});

function daysSince(date) {
  let today = new Date();
  let since = new Date(date);

  let timeSince = (today - since);

  let daysSince = Math.round(timeSince / MILLISECONDS_PER_DAY) - 1;

  return daysSince.toLocaleString();
}

const description = `Day ${daysSince('07/1/2010')}: The Millennials have accepted me as one of their own. They still do not know I'm a Gen Xer.`;

console.log(description);

client.post(
  'account/update_profile',
  {
    description: description
  }
);