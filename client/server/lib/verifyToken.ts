export async function verifyToken(encryptedToken: string, value: string): Promise<boolean> {
  // todo: using the secret key verify token and match with value
  return true;
}
export async function encryptToken(value: string): Promise<string> {
  // todo: encrypt
  return '0x343';
}

export async function decryptToken(encryptedToken: string): Promise<string> {
  // todo:decrypt
  return '0x9202';
}
