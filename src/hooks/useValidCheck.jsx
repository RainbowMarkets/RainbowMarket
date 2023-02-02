export default function useValidCheck() {
  // 이메일 확인
  function emailValidCheck(input) {
    const emailValidation =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return emailValidation.test(input);
  }

  function passwordValidCheck(input) {}

  return { emailValidCheck, passwordValidCheck };
}
