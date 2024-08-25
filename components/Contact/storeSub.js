"use server";

const fs = require("fs");

export async function storeSub(name, email, message) {
  fs.appendFileSync(
    ".logs/newsLetterSub.txt",
    `name - ${name}, email - ${email}\n`
  );
}
