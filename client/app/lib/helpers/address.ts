import { ethers } from 'ethers';

/**
 * Shorten a wallet address.
 * @param {string} address - The full wallet address to shorten.
 * @param {number} [chars=4] - The number of characters to show at the start and end.
 * @returns {string} The shortened address.
 */

export function formatBalance(balance: BigInt, decimals = 18) {
  return ethers.formatUnits(balance.toString(), decimals);
}

// import { getAddress, isAddress } from './address'
import { logger } from '@/utils';
import { getAddress, isAddress, parseEther } from 'viem';

export function isValidAddress(address: string) {
  // Need to catch because ethers' isAddress throws in some cases (bad checksum)
  try {
    const isValid = address && isAddress(address);
    return !!isValid;
  } catch (error) {
    logger.warn('Invalid address', error, address);
    return false;
  }
}

export function validateAddress(address: string, context: string) {
  if (!address || !isAddress(address)) {
    const errorMsg = `Invalid addresses for ${context}: ${address}`;
    logger.error(errorMsg);
    // throw new Error(errorMsg);
  }
}

export function normalizeAddress(address: string) {
  validateAddress(address, 'normalize');
  return address;
  // return getAddress(address);
}

export function shortenAddress(address: string, capitalize = true, startCount = 6, endCount = 4) {
  validateAddress(address, 'shorten');
  const normalizedAddress = normalizeAddress(address);

  const start = normalizedAddress.substring(0, startCount);
  const end = normalizedAddress.substring(address.length - endCount);

  const shortened = `${start}...${end}`;
  return capitalize ? capitalizeAddress(shortened) : shortened;
}

export function capitalizeAddress(address: string) {
  return '0x' + address.substring(2).toUpperCase();
}

export function areAddressesEqual(a1: string, a2: string) {
  validateAddress(a1, 'compare');
  validateAddress(a2, 'compare');
  return getAddress(a1) === getAddress(a2);
}

export function trimLeading0x(input: string) {
  return input.startsWith('0x') ? input.substring(2) : input;
}

export function ensureLeading0x(input: string) {
  return input.startsWith('0x') ? input : `0x${input}`;
}

export const shortValue = (value: bigint): string => {
  return Number(parseEther(Number(value).toString()))
    .toString()
    .trimEnd();
};
