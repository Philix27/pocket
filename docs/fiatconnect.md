# Fiat connect 

Requires a standalone server to serve as CICO provider


## 2. Lifecycle of a Transfer

### Steps

- Quote: The client requests a quote for a transfer with the user's desired parameters.
- KYC: For regulatory and compliance reasons, the user must provide data used for KYC verification purposes to the provider.
2.1. Monitor KYC: KYC verification is assumed to be asynchronous; the client should be able to monitor its status.
- Fiat Account: The user must be able to provide a source of fiat funds for transfers in, or a destination for transfers out.
- Create Transfer: Once a user has provided KYC information and has an appropriate fiat account on file, the client initiates a transfer.
4.1. Monitor Transfer: Transfers are assumed to be asynchronous; the client should be able to monitor its status.


#### 2.1 Quote
quote generation will depend on the following parameters:

- **fiatType**: The type of fiat currency used for the transfer.
- **cryptoType**: The type of cryptocurrency used for the transfer.
- **fiatAmount/cryptoAmount**: The amount of either fiat or cryptocurrency selected for the quote.
- **region**: The user's geographical region.****