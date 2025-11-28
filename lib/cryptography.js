const crypto = require("crypto");

/**
 * Decode a JSON Web Token (JWT) into its header, payload, and signature parts.
 *
 * @param {string} jwt - The JWT string in the format "header.payload.signature".
 * @returns {{ header: object, payload: object, signatureB64: string }}
 */
function decodeJWT(jwt) {
  const [headerB64, payloadB64, signatureB64] = jwt.split(".");

  const header = JSON.parse(Buffer.from(headerB64, "base64").toString("utf-8"));
  const payload = JSON.parse(
    Buffer.from(payloadB64, "base64").toString("utf-8")
  );

  return { header, payload, signatureB64 };
}

/**
 * Encode string to Base64
 * @param {string} str
 * @returns {string}
 */
function btoa(str) {
  return Buffer.from(str, "utf-8").toString("base64");
}

/**
 * Decode Base64 to string
 * @param {string} b64
 * @returns {string}
 */
function atob(b64) {
  return Buffer.from(b64, "base64").toString("utf-8");
}

/**
 * Convert Buffer or string to hex string
 * @param {Buffer|string} data
 * @returns {string}
 */
function toHex(data) {
  return Buffer.from(data).toString("hex");
}

/**
 * Generates a standard Version 4 UUID, optionally using a provided 16-byte array.
 * * @param {Buffer | Uint8Array | undefined} [customRandomBytes] - A 16-byte array
 * of random or masked data to use instead of generating new randomness.
 * @returns {string} The formatted UUID v4 string.
 */
function uuidv4(customRandomBytes) {
  // 1. Determine the source of the 16 bytes (128 bits)
  // If customRandomBytes is provided, use it. Otherwise, generate new random bytes.
  const rnd = customRandomBytes || crypto.randomBytes(16);

  // 2. Set the Version (4) and Variant (10) bits according to RFC 4122
  // Byte 6 (index 6): Set the 4 most significant bits to 0100 (4)
  rnd[6] = (rnd[6] & 0x0f) | 0x40;

  // Byte 8 (index 8): Set the 2 most significant bits to 10 (8)
  rnd[8] = (rnd[8] & 0x3f) | 0x80;

  // 3. Format the 16 bytes into a standard UUID string (e.g., xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
  return [...rnd]
    .map((b, i) =>
      // Insert hyphens at byte indices 4, 6, 8, and 10
      [4, 6, 8, 10].includes(i)
        ? "-" + b.toString(16).padStart(2, "0")
        : b.toString(16).padStart(2, "0")
    )
    .join("");
}

/**
 * Generate UUID v3 (MD5-based)
 * @param {string} name
 * @param {string} namespace - UUID string
 * @returns {string}
 */
function uuidv3(name, namespace) {
  const nsBytes = uuidToBytes(namespace);
  const hash = crypto
    .createHash("md5")
    .update(Buffer.concat([nsBytes, Buffer.from(name)]))
    .digest();
  hash[6] = (hash[6] & 0x0f) | 0x30; // version 3
  hash[8] = (hash[8] & 0x3f) | 0x80; // variant 10
  return bytesToUUID(hash);
}

/**
 * Generate UUID v5 (SHA1-based)
 * @param {string} name
 * @param {string} namespace - UUID string
 * @returns {string}
 */
function uuidv5(name, namespace) {
  const nsBytes = uuidToBytes(namespace);
  const hash = crypto
    .createHash("sha1")
    .update(Buffer.concat([nsBytes, Buffer.from(name)]))
    .digest()
    .slice(0, 16);
  hash[6] = (hash[6] & 0x0f) | 0x50; // version 5
  hash[8] = (hash[8] & 0x3f) | 0x80; // variant 10
  return bytesToUUID(hash);
}

/**
 * Convert UUID string to bytes
 * @param {string} uuid
 * @returns {Buffer}
 */
function uuidToBytes(uuid) {
  return Buffer.from(uuid.replace(/-/g, ""), "hex");
}

/**
 * Convert 16-byte buffer to UUID string
 * @param {Buffer} buf
 * @returns {string}
 */
function bytesToUUID(buf) {
  return [...buf]
    .map((b, i) =>
      [4, 6, 8, 10].includes(i)
        ? "-" + b.toString(16).padStart(2, "0")
        : b.toString(16).padStart(2, "0")
    )
    .join("");
}

module.exports = {
  decodeJWT,
  btoa,
  atob,
  toHex,
  uuidv3,
  uuidv4,
  uuidv5,
};
