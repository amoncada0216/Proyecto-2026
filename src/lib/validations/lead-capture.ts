import { z } from "zod";

type ValidationMessages = {
  companyMin: string;
  emailInvalid: string;
};

const leadCaptureShape = {
  company: z.string(),
  email: z.string(),
};

export function createLeadCaptureSchema(messages: ValidationMessages) {
  return z.object({
    company: leadCaptureShape.company.trim().min(2, messages.companyMin).max(80),
    email: leadCaptureShape.email.trim().email(messages.emailInvalid),
  });
}

export type LeadCaptureValues = z.infer<
  ReturnType<typeof createLeadCaptureSchema>
>;

export const defaultLeadCaptureValues: LeadCaptureValues = {
  company: "",
  email: "",
};
