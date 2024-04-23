export async function sendContactFormEmail(formData: FormData) {
  const response = await fetch("api/send", {
    method: "POST",
    body: formData,
  });

  return response;
}
