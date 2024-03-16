"use server";
import NodeRSA from "node-rsa";

export async function encCreds(text) {
  const encrypter = new NodeRSA(process.env.PUBKEY);
  const enc = encrypter.encrypt(text, "base64");
  return enc;
}
