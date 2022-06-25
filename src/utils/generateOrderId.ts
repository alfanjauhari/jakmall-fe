export default function generateOrderID() {
  let result = '';
  const acceptedCharacters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  for (let i = 0; i < 5; i += 1) {
    result += acceptedCharacters.charAt(
      Math.floor(Math.random() * acceptedCharacters.length),
    );
  }

  return result;
}
