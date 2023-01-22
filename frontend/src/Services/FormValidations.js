
  export const isCreateUserFormValid = (formInputs) => {

    const isValidEmail =(email)=> {
        return /\S+@\S+\.\S+/.test(email);
      }
    

    console.log("Form inputs", formInputs);
    let formErrors = [];
    if (!formInputs.user) {
      formErrors.push("You need to fill the user field ");
    }
    if (!formInputs.password) {
      formErrors.push("You need to fill the password field ");
    }
    if (!formInputs.passwordCheck) {
      formErrors.push("You need to fill the password check field ");
    }
    if (!formInputs.email) {
      formErrors.push("You need to fill the email field ");
    }

    if (!isValidEmail(formInputs.email)) {
      formErrors.push("Invalid email format");
    }

    if (
      formInputs.password &&
      formInputs.passwordCheck &&
      formInputs.password !== formInputs.passwordCheck
    ) {
      formErrors.push("Password check must be equals to Password ");
    }

    if (formErrors.length === 0) {
      return({ isFormValid: true, errorArray: [] });
    }
    return({ isFormValid: false, errorArray: formErrors });
  };
