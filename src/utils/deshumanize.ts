const deshumanize = (word: string = "") =>
  word
    .replace(/([á])|([â])|([ã])|([à])/gi, "a")
    .replace(/([é])|([ê])/gi, "e")
    .replace(/[í]/gi, "i")
    .replace(/([ó])|([ô])|([õ])/gi, "o")
    .replace(/[ú]/gi, "u")
    .replace(/[\s]/gi, "_")
    .replace(/[ç]/gi, "c");

export default deshumanize;
