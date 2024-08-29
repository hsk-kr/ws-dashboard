# Dashboard

# Scripts

- `compose`: Run client, server, and worker using docker compose. server and client will be run on watch mode.
- `client:dev`: Run client dev server.
- `server:dev`: Run server using nodemon.
- `worker:dev`: Run worker using nodemon.
- `test`: Run vitest
- `compose:test` Run test files in docker containers using docker compose.

# Services

- `client`: provide a dash web application.
- `server`: provide data to client from redis.
- `worker`: update redis data from the dashboard API.
