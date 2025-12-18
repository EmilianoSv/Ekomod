import { contactFormValidator } from "../../components/_ContactForm";
import { Resend } from "resend";
import { ContactEmail } from "../../emails/contactEmail";
import { render } from "@react-email/render";

export async function POST(context: { request: { formData: () => Promise<FormData> } }) {
	try {
		const formData = await context.request.formData();

		// Convert formData to an object
		const formDataObject = Object.fromEntries(formData);

		// Validate using Zod's safeParse method
		const parsed = contactFormValidator.safeParse(formDataObject);
		if (!parsed.success) {
			return new Response(
				JSON.stringify({ errors: parsed.error.flatten().fieldErrors }),
				{ status: 400 }
			);
		}

		// Validate API key is configured
		const apiKey = process.env.RESEND_API_KEY;
		if (!apiKey) {
			console.error("RESEND_API_KEY environment variable is not configured");
			return new Response(
				JSON.stringify({ error: "Server configuration error" }),
				{ status: 500 }
			);
		}

		const resend = new Resend(apiKey);

		const emailContent = ContactEmail({
			authorName: parsed.data.name,
			authorEmail: parsed.data.email,
			authorPhone: parsed.data.phone,
			projectSelected: parsed.data.projects,
			messageText: parsed.data.message,
		});
		const html = await render(emailContent);
		const text = await render(emailContent, {
			plainText: true,
		});

		const { data: _data, error } = await resend.emails.send({
			from: "Web Ekomod <contacto@ekomod.com.co>",
			to: ["Konstruct.soluciones@gmail.com"],
			subject: parsed.data.name + " - " + parsed.data.projects,
			html,
			text,
		});

		if (error) {
			return new Response(
				JSON.stringify({
					success: false,
					message: "Error al mandar el mensaje",
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Redirect
		return new Response(
			JSON.stringify({
				success: true,
				message: "Recibimos su mensaje",
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
		});
	}
}
