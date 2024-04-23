import { Resend } from "resend";
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const RESEND_ERROR_CODES = {
  missing_required_field: 422,
  invalid_access: 422,
  invalid_parameter: 422,
  invalid_region: 422,
  rate_limit_exceeded: 429,
  missing_api_key: 401,
  invalid_api_Key: 403,
  invalid_from_address: 403,
  validation_error: 403,
  not_found: 404,
  method_not_allowed: 405,
  application_error: 500,
  internal_server_error: 500,
} as const;

interface SendEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    // TODO: use zod to validate the form data
    const payload: SendEmailPayload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    } as SendEmailPayload;

    const { data, error } = await resend.emails.send({
      from: "contact@resend.dev",
      to: ["christiankochecheverriswaa@gmail.com"], // TODO: use env variable
      subject: payload.subject,
      react: EmailTemplate(payload) as React.ReactElement,
    });

    if (error) {
      return new Response(error.message, {
        status: RESEND_ERROR_CODES[error.name],
      });
    }

    return Response.json({ ...payload, data }, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
