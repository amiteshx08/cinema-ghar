export const checkValidData = (email: string, password: string) => {
  // Regex for email and password
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password,
  );

  // custom error messages
  if (!validEmail || !validPass) return "Email Id or Password is not valid!";
  
  return null;
};
