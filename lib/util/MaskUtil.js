/**
 * Utility to mask sensitive strings.
 *
 * @param {string} str - String to mask.
 * @param {string} [maskChar='*'] - Mask character.
 * @param {number} [visibleChars=4] - Number of characters at end to remain visible.
 *
 * @return {string} Masked string.
 */
export function maskString(str, maskChar = '*', visibleChars = 4) {
  if (typeof str !== 'string') {
    return str;
  }

  const length = str.length;

  if (length <= visibleChars) {
    return maskChar.repeat(length);
  }

  const visible = str.slice(-visibleChars);
  const masked = maskChar.repeat(length - visibleChars);

  return masked + visible;
}

export default {
  maskString
};
