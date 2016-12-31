Chess Hacker website

Playing around with some possible configurations. Nothing substantial up yet, but the
frontend is built with React, and served by Google App Engine using the Go standard
environment. Go also provides a hello API, proof of concept.

To build and deploy is currently manual:

```
(cd frontend && npm run build)
goapp deploy -application chesshacker-primary -version v1 .
```
