export const jwtData = async (token) => {
  if (token) {
    const payload = token.split(".")[1];
    //decode with base64
    //to json object
    const decodedValue = await JSON.parse(window.atob(payload));
    return decodedValue;
  } else {
    return false;
  }
};
