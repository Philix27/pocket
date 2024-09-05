# Pocket Ramp

![banner](./assets/landing.jpg)


## Short Description
An off Ramping platform
## Project Description

Rampage is a platform that aims to simplify the process of off-ramping by providing a simple way to pay for bills and send gift cards which can be used to pay for bills using the cUSD token on Minipay. 


#### Problems
- Challenges of paying bills and buying digital assets using cryptocurrencies.

#### Solution
- Provide aa easy way to purchase airtime and data plans for friends and family
- Pay for utility such as light, GoTv, MyTv subscription using cUSD.


### Challenges faced while building
- Having access to the necessary third party api needed for the utility payments.

## Methodology

This project was built using Next.js on the frontend and Hono.js on the backend. Once a user buys a gift card he is debited and the value of cUSD. On claiming the gift card the specified phone number will be credited the equivalent amount.


### Tools & Frameworks used
- Next.js, React, Wagmi, Solidity, Remix, Typescript
- Wagmi, Ethers, Viem, WalletConnect
- Remix


### Project Structure
This is a turbo repo that consist of three main apps.
- `mini`: This is a mini app designed to be very lightweight and compatible with MiniPay Telegram Mini App.
- `server`: The backend server running on Hono.js
- `web`: This is the marketing web app. For Contact Us, Blogs, About Us, Landing page and others
### Languages

- Typescript, Javascript, Solidity

## How it was made

This project was built using Next.js on the frontend and Hono.js on the backend. When a user creates a gift card of a certain amount for a friend, this friend will be notified and can claim the amount specified on the gift card as airtime. The backend service call mobile vtu platform which then credits the specified phone number provided by the user.


#### Run locally
- Clone the repository from github
- cd in the folder
- Run `pnpm install` to install all packages
- Run `pnpm run dev:mini` to start the Next.js server
- Run `pnpm run dev:server` to start the Hono.js server


#### Live link
- Visit [App link](https://rampage-mini.vercel.app/)
- Open the link in your Opera-mini Minipay site testing playground



## Links

- [Hackathon link](https://build-with-celo-7.hackerearth.com/)
- [Github link](https://github.com/Philix27/rampage)
- [Vercel link](https://rampage-mini.vercel.app/)
- [Video link](https://youtu.be/oDCC7BvNqdI)


