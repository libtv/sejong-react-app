const Crypto = require("crypto");

var aes_config = {
    AES_MODE: "AES-128-ECB",
    ORIGIN_MODE: "UTF-8",
    PADDING_MODE: "BASE64",
};

export function enCrypt(plainText, key) {
    let cipher = Crypto.createCipheriv(aes_config.AES_MODE, key, "");
    let encrypted = cipher.update(plainText, aes_config.ORIGIN_MODE, aes_config.PADDING_MODE);
    encrypted += cipher.final(aes_config.PADDING_MODE);
    return encrypted;
}
