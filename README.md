# Dashboard

# How to Run - Dev

1\. Install Docker

- https://docs.docker.com/engine/install/

2\. Install Dependencies

  ```
  > pnpm install
  ```

3\. Execute Script with Package Manager

  ```
  > pnpm run compose
  ```

4\. Open http://localhost:5173/

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
