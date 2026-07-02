import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);
const SALT_LEN = 16;
const KEY_LEN = 64;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(SALT_LEN).toString("hex");
  const key = (await scryptAsync(password, salt, KEY_LEN)) as Buffer;
  return `${salt}:${key.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  const [salt, hex] = stored.split(":");
  if (!salt || !hex) return false;
  const key = (await scryptAsync(password, salt, KEY_LEN)) as Buffer;
  const storedKey = Buffer.from(hex, "hex");
  if (key.length !== storedKey.length) return false;
  return timingSafeEqual(key, storedKey);
}
