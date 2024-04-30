"use-client";
const COOKIE_LAST_TRY_EXPIRE = "last-try-expire";
export function saveLastTryExpireInCookie(timeInMs: number) {
  // expire date is now + 1 minute
  const expireDate = new Date(Date.now() + timeInMs);
  document.cookie = `${COOKIE_LAST_TRY_EXPIRE}=${expireDate.getTime()}; expires=${expireDate.toUTCString()}; path=/`;
}

export function getLastTryTimeExpireInCookie() {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.includes(COOKIE_LAST_TRY_EXPIRE));
  if (!cookie) {
    console.log("no cookie found");
    return null;
  }
  const expireDate = cookie.split("=")[1];
  if (!expireDate) {
    console.log("no expire date found");
    return null;
  }
  console.log("expireDate", expireDate);
  return Number.parseInt(expireDate);
}

export function getRemainingTimeInLastTryCookie() {
  const expieDateUTC = getLastTryTimeExpireInCookie();
  if (!expieDateUTC) {
    return -1;
  }
  return expieDateUTC - Date.now();
}
