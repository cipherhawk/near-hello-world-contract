A Hello World Smart Contract on NEAR
===

This repository contains a smart contract that returns a Hello World message when deployed onto NEAR.

This smart contract is created from part of the "Building Voting App on Near Protocol" tutorial by Questbook as part of their "Learn Web3" series of tutorials.

Follow along and build your own contract here: [Building Voting App on Near Protocol](https://questb.uk/quest/building-voting-app-on-near-protocol-33d9)

## Prerequisites:

- [Node.js](https://nodejs.org/) version >=v14.0.0

- near-cli installed:

```bash
npm install -g near-cli
```

Check if you have near-cli installed correctly:

```bash
near --version
```

## 1. Deploying the Smart Contract onto the Blockchain

Execute the following command:

```bash
near dev-deploy --wasmFile build/release/near-hello-world.wasm
```

Upon deploying the smart contract, dev-deploy also creates a development account ID (accountId) for you which will be used as contractName. 

The accountID that dev-deploy has created is stored locally in neardev/dev-account.

As an example, the accountId that dev-deploy creates looks like: dev-1629962254439-29142908593037

## 2. Calling the Smart Contract

The command below is used to call the hello_world function in the smart contract:

```bash
near call hello_world --accountId
```

To actually execute this command to call the hello world function, we will need to enter contractName and accountId.

Since accountId is also used as contractName, if we use the example accountId from above, the command to call the hello_world function will look like this:

```bash
near call dev-1629962254439-29142908593037 hello_world --accountId dev-1629962254439-29142908593037
```

Note that the contractName will change if the contract is deployed with another account since each account can have only one smart contract attached to it. 

If you try to deploy a new contract on an account that has a previous contract deployed, the old contract will be replaced by the new one.

## Learn more

If you want a more detailed walkthrough or learn how to build this from scratch, check out: [Building Voting App on Near Protocol](https://questb.uk/quest/building-voting-app-on-near-protocol-33d9)

For more tutorials on developing on Near Protocol: [Building on NEAR](https://questbook.notion.site/Building-on-NEAR-fb99916a051a4b67bef30c7a8aaec80f)

Have fun coding!
