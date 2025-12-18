import { z } from "zod";
import { contactFormValidator } from "../../components/_ContactForm";
import { Resend } from "resend";
import { ContactEmail } from "../../emails/contactEmail";
import { render } from "@react-email/render";

export async function POST(context: { request: { formData: () => any } }) {
	try {
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

		console.log("MAIL ENVIADO!");

		//sent email via resend here
		const resend = new Resend(import.meta.env.RESEND_API_KEY);

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

		const { data, error } = await resend.emails.send({
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
