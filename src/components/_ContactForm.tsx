import { createForm } from "simple:form";
import { Form, Input, Select, Textarea, useFormContext } from "./Form";
import { z } from "zod";

export const contactFormValidator = createForm({
	name: z
		.string()
		.min(3, "El nombre es requerido y debe tener al menos 3 caracteres.")
		.regex(
			/^[a-zA-Z\s]+$/,
			"El nombre solo debe contener letras y espacios. "
		), // Only letters and spaces

	email: z
		.string()
		.email("El email no es válido")
		.min(1, "El email es requerido."), // Ensuring email is not empty

	phone: z
		.string()
		.min(5, "El teléfono es requerido.") // Minimum length validation for phone
		.regex(
			/^[\d\+\(\)\-\s]+$/,
			"El teléfono solo debe contener números y caracteres válidos."
		), // Valid phone characters

	projects: z
		.string()
		.min(1, "El proyecto es requerido.") // Ensuring the user selects a project
		.regex(
			/^(?!Seleccione).*$/,
			"Por favor, selecciona un proyecto válido."
		), // Optional regex if you have a default option like "Seleccionar"

	message: z
		.string()
		.min(10, "El mensaje debe tener al menos 10 caracteres.") // Minimum length for messages
		.max(500, "El mensaje no puede exceder los 500 caracteres."), // Optional: max message length for UX
});

export function ContactForm() {
	return (
		<>
			<Form validator={contactFormValidator.validator}>
				<FormContent />
			</Form>
		</>
	);
}

const FormContent = () => {
	const { value: formState } = useFormContext();
	return (
		<>
			<div className="flex flex-col relative">
				<label
					htmlFor="name"
					className="text-xl md:text-2xl md:py-2 lg:text-2xl"
				>
					Nombre completo:
				</label>
				<Input
					id="name"
					{...contactFormValidator.inputProps.name}
					className="bg-gray-400 w-full h-12 rounded-xl p-4 md:h-12 lg:h-16 md:text-2xl"
				/>
			</div>
			<div className="flex flex-col relative">
				<label htmlFor="email" className="text-xl md:text-2xl md:py-2">
					Email:
				</label>

				<Input
					id="email"
					{...contactFormValidator.inputProps.email}
					className="bg-gray-400 w-full h-12 rounded-xl p-4 md:h-12 lg:h-16 md:text-2xl"
				/>
			</div>
			<div className="flex flex-col relative">
				<label htmlFor="phone" className="text-xl md:text-2xl md:py-2">
					Telefono:
				</label>

				<Input
					id="phone"
					{...contactFormValidator.inputProps.phone}
					className="bg-gray-400 w-full h-12 rounded-xl p-4 md:h-12 lg:h-16 md:text-2xl"
				/>
			</div>
			<div className="flex flex-col relative">
				<label
					htmlFor="projects"
					className="text-xl md:text-2xl md:py-2"
				>
					Proyecto de interés:
				</label>

				<Select
					id="projects"
					{...contactFormValidator.inputProps.projects}
					className="bg-gray-400 w-full h-12 rounded-xl px-4 pt-3 pb-4 md:h-13 md:text-lg appearance-none lg:h-16"
					options={[
						{
							value: "casa",
							label: "Casa",
						},
						{
							value: "chalet",
							label: "Chalet",
						},
						{
							value: "cubiculo",
							label: "Cubiculo",
						},
					]}
				/>
			</div>
			<div className="flex flex-col lg:col-span-2 relative">
				<label
					htmlFor="message"
					className="text-xl md:text-2xl md:py-2 lg:text-2xl"
				>
					Mensaje
				</label>

				<Textarea
					id="message"
					{...contactFormValidator.inputProps.message}
					placeholder="Cuentanos cual es tu presupuesto, zona de construccion, ubicacion y tamaño del lote y cualquier informacion relevante para que podámos darte la cotizacion más precisa posible!"
					className="bg-gray-400 w-full mt-1 rounded-xl p-4 md:text-xl"
					rows={4}
				/>
			</div>
			<button
				type="submit"
				disabled={formState.isSubmitPending}
				className={`bg-[#355070] w-full rounded-xl text-white text-xl h-14 mt-2 md:h-20 md:text-3xl md:font-bold md:mt-4 lg:col-span-2 lg:text-3xl hover:opacity-95 ${
					formState.isSubmitPending
						? "opacity-50 cursor-not-allowed"
						: ""
				}`}
			>
				{formState.isSubmitPending ? "Enviando..." : "ENVIAR"}
			</button>
		</>
	);
};
