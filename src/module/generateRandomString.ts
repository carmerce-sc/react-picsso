export default function generateRandomString(): string {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += characters[Math.floor(Math.random() * 36)];
  }
  return result;
}
