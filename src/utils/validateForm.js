const validateForm = (formData) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let newErrors = {};

  if (formData.name.length < 2) {
    console.log("inside name");
    newErrors.name = "Name must be at least 2 characters long.";
  }
  if (!emailPattern.test(formData.email)) {
    console.log("inside email");
    newErrors.email = "Invalid Email Format.";
  }
  if (formData.phone.length !== 10) {
    console.log("inside phone");
    newErrors.phone = "Phone number must be 10 characters long.";
  }

  const hasNoErrors = Object.keys(newErrors).length === 0;

  return { newErrors, hasNoErrors };
};

export default validateForm;
