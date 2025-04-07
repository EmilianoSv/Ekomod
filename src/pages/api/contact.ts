import { z } from "zod";
import { contactFormValidator } from "../../components/_ContactForm";

export async function POST(context: { request: { formData: () => any } }) {
	const formData = await context.request.formData();

	// Convert formData to an object
	const formDataObject = Object.fromEntries(formData);

	const schema = z.object(contactFormValidator.validator);

	// Validate using Zod's safeParse method
	const parsed = schema.safeParse(formDataObject);
	if (!parsed.success) {
		return new Response(
			JSON.stringify({ errors: parsed.error.flatten().fieldErrors }),
			{ status: 400 }
		);
	}

	//sent email via resend here

	// Redirect
	return new Response(null, {
		status: 303,
		headers: {
			Location: "/message-sent",
		},
	});
}
