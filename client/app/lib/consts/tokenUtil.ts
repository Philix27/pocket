import { AddressFn } from '../helpers';
import { ChainId } from './chains';
import { MentoExchanges } from './exchanges';
import { Tokens, NativeStableTokenIds, TokenId, TokenAddresses, Token, TokenList } from './tokens';
// TokenFn.addresses
export class TokenFn {
  static addresses = TokenAddresses;
  static tokenList: Token[] = TokenList;

  static isNativeToken(tokenId: string) {
    return Object.keys(Tokens).includes(tokenId);
  }

  static isNativeStableToken(tokenId: string) {
    return NativeStableTokenIds.includes(tokenId as TokenId);
  }

  static isSwappable(token_1: string, token_2: string, chainId: number) {
    const exchanges = MentoExchanges[chainId as ChainId];

    if (!exchanges) return false;

    if (token_1 === token_2) return false;

    return exchanges.some(
      (obj) =>
        obj.assets.includes(TokenFn.getTokenAddress(token_1 as TokenId, chainId)) &&
        obj.assets.includes(TokenFn.getTokenAddress(token_2 as TokenId, chainId))
    );
  }

  static getSwappableTokenOptions(token: string, chainId: ChainId) {
    return TokenFn.getTokenOptionsByChainId(chainId)
      .filter((tkn) => TokenFn.isSwappable(tkn, token, chainId))
      .filter((tkn) => token !== tkn);
  }

  static getTokenOptionsByChainId(chainId: ChainId): TokenId[] {
    const tokensForChain = TokenAddresses[chainId];

    return tokensForChain
      ? Object.entries(tokensForChain)
          .filter(([, tokenAddress]) => tokenAddress !== '') // Allows incomplete 'TokenAddresses' list i.e When tokens are not on all chains
          .map(([tokenId]) => tokenId as TokenId)
      : [];
  }

  static getTokenById(id: string): Token | null {
    return Tokens[id as TokenId] || null;
  }

  static getTokenAddress(id: TokenId, chainId: ChainId): Address {
    const addr = TokenAddresses[chainId][id];
    if (!addr) throw new Error(`No address found for token ${id} on chain ${chainId}`);
    return addr;
  }

  static getTokenByAddress(address: Address): Token {
    const idAddressTuples = Object.values(TokenAddresses)
      .map((idToAddress) => Object.entries(idToAddress))
      .flat();
    // This assumes no clashes btwn different tokens on diff chains
    for (const [id, tokenAddr] of idAddressTuples) {
      if (AddressFn.areAddressesEqual(address, tokenAddr)) {
        return Tokens[id as TokenId];
      }
    }
    throw new Error(`No token found for address ${address}`);
  }
}
