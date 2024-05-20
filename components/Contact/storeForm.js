"use server";

const fs = require("fs");

export async function storeForm(name, email, message) {
  fs.appendFileSync(
    ".logs/contactForm.txt",
    `name - ${name}, email - ${email}, message - ${message}\n`
  );
}
