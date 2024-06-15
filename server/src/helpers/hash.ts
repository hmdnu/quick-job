export async function handleHash(password: string) {
  return await Bun.password.hash(password);
}

export async function handleVerify(password: string, hashedPassword: string | undefined) {
  if (hashedPassword) {
    return await Bun.password.verify(password, hashedPassword);
  }
}
