var isLicenseValid = null;
function validateLicense() {
  try {
    var e = config.licenseKey,
      c = CryptoJS.AES.decrypt(e, "und09lusia0$0EF%");
    (c = new Date(c.toString(CryptoJS.enc.Utf8))), 0 == (isLicenseValid = checkValid(c)) ? onInvalidLicense() : console.log("License validated");
  } catch (n) {
    console.error(n);
  }
}
function checkValid(e) {
  var c = new Date().toISOString().slice(0, 10);
  return e - (c = new Date(c)) > 0 ? 1 : 0;
}
function decryptValue(e) {
  try {
    return CryptoJS.AES.decrypt(e, "und09lusia0$0EF%").toString(CryptoJS.enc.Utf8);
  } catch (c) {
    console.error(c);
  }
}
