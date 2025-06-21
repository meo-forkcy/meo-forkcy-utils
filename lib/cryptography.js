/**
 * Decode a JSON Web Token (JWT) into its header, payload, and signature parts.
 *
 * @param {string} jwt - The JWT string in the format "header.payload.signature".
 * @returns {{ header: object, payload: object, signatureB64: string }} - Decoded parts of the JWT.
 * @throws {Error} If the JWT format is invalid or decoding fails.
 *
 * @example
 * const { header, payload } = decodeJWT(token);
 */
function decodeJWT(jwt) {
  const [headerB64, payloadB64, signatureB64] = jwt.split(".");

  const header = JSON.parse(Buffer.from(headerB64, "base64").toString("utf-8"));
  const payload = JSON.parse(
    Buffer.from(payloadB64, "base64").toString("utf-8")
  );

  return { header, payload, signatureB64 };
}

module.exports = { decodeJWT };
