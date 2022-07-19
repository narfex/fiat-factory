## ***`Narfex` Fiats Factory***

Factory for creating fiat tokens for internal use in the Narfex exchange.
Factory owner and router have access to user funds management.

```solidity
function fiats(string tokenSymbol) returns (address)
```
Will returns token address by specified token symbol

```solidity
function fiatsList(uint256 index) returns (address)
```
Will returns token address by fiat index (from 0 to fiats quantity - 1)

```solidity
function getFiatsQuantity() returns (uint256)
```
Will returns fiats quantity

### Owner methods

```solidity
function createFiat(string tokenName, string tokenSymbol)
```
Will create a new token with specified symbol and a description in tokenName param

```solidity
function setRouter(address router)
```
Sets control rights to an additional contract

## ***`Narfex` Fiat***

NarfexFiat is a BEP20 token that the factory has full access to. It can mint new tokens to users and burn them.

### Owner methods

```solidity
function mintTo(address account, uint256 amount)
```
Will mint amount of tokens to a specified address

```solidity
function burnFrom(address account, uint256 amount)
```
Will burn amount of tokens in a specified address

## Install Dependencies

`npm i`

## Compile

`npm run compile`

## Prepare account before deploy

Create a file names 'accounts.js' with the following contents
to the one level above the project directory

`
module.exports = {
	bsc: {
		address: 'your_wallet_address',
		privateKey: 'your_wallet_private_key'
	},
	bscscan: 'your_bscscan_api_key',
};
`

## Deploy to BSC

`npm run deployBSC`

## Verify

`npx hardhat verify --network bsc --constructor-args arguments.js "your_contract_address"`
