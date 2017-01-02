[![Build Status](https://travis-ci.org/chesshacker/chesshacker-website.svg?branch=master)](https://travis-ci.org/chesshacker/chesshacker-website)

# Chess Hacker website

Playing around with some possible configurations. Nothing substantial up yet, but the
frontend is built with React, and served by Google App Engine using the Go standard
environment. Go also provides a hello API, proof of concept.

Deployment is automated with travis-ci.

## One-time setup

Note, the service account credentials are stored here, the same as I did in
[chesshacker-infrastructure](https://github.com/chesshacker/chesshacker-infrastructure).
So you need to setup the secure_password environment variable.

```
travis encrypt secure_password=XXX --add
```

You also must enable [Google App Engine Admin API](https://console.developers.google.com/apis/api/appengine/overview)
