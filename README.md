# Getany

![getany-storefront](https://socialify.git.ci/hridaya423/getany-storefront/image?font=Inter&language=1&logo=https%3A%2F%2Fmedusajs.com%2Fimages%2Fmedusa-logo-black.svg&name=1&owner=1&pattern=Signal&stargazers=1&theme=Light)

## About

### Participants
Hridya - @hridaya423

### Description
An open-source ecommerce application built using Medusa & Next.js. It includes products screen, cart, checkout, search, live chat, discord notifications, storage with Minio, Matomo Analytics

## Setup Server

### Prerequisites

Before you start make sure you have:
* [Node.js](https://nodejs.org/en/)
* [Redis](https://redis.io/docs/getting-started/installation/install-redis-on-windows/)
* [Meilisearch](https://docs.meilisearch.com/learn/getting_started/quick_start.html#setup-and-installation)
* [Minio](https://min.io/docs/minio/windows/index.html)
* [Rocket Chat Account](https://www.rocket.chat/)
* [Matomo Account](https://matomo.org/)

### Install Server
* Clone the repository:
`git clone https://github.com/hridaya423/getany-server`
* Change directory and install dependencies:
```bash
cd getany-server
npm install
```
* Put your Meilisearch Master Key in .env
* Create a discord webhook in a server and put it's url in the .env
* [Minio Setup](https://docs.medusajs.com/add-plugins/minio)
* Start the server

`medusa develop`

## Resources
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Admin Panel](https://github.com/medusajs/admin)
- [Medusa Documentation](https://docs.medusajs.com/)
