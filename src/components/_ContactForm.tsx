import { Form, Input, Select, Textarea, useFormContext } from "./Form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail, User, Phone as PhoneIcon, MessageSquare, Home } from "lucide-react";
import type { FormValidator } from "simple:form";

export const contactFormValidator = z.object({
	name: z
		.string()
		.min(3, "El nombre es requerido y debe tener al menos 3 caracteres.")
		.regex(
			/^[a-zA-Z\s]+$/,
			"El nombre solo debe contener letras y espacios. "
		),

	email: z
		.string()
		.email("El email no es válido")
		.min(1, "El email es requerido."),

	phone: z
		.string()
		.min(5, "El teléfono es requerido.")
		.regex(
			/^[\d+()-\s]+$/,
			"El teléfono solo debe contener números y caracteres válidos."
		),

	projects: z
		.string()
		.min(1, "El proyecto es requerido.")
		.regex(
			/^(?!Seleccione).*$/,
			"Por favor, selecciona un proyecto válido."
		),

	message: z
		.string()
		.min(10, "El mensaje debe tener al menos 10 caracteres.")
		.max(500, "El mensaje no puede exceder los 500 caracteres."),
});

export function ContactForm() {
	return (
		<>
			<Form validator={contactFormValidator as unknown as FormValidator}>
				<FormContent />
			</Form>
		</>
	);
}
const FormContent = () => {
	const { value: _formState } = useFormContext();
	return (
		<div className="space-y-8 max-w-2xl mx-auto">
			<div className="text-center mb-10">
				<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
					Solicita tu cotización
				</h3>
				<p className="text-lg text-gray-600">
					Completa el formulario y te contactaremos pronto
				</p>
			</div>
			<div className="space-y-6">
				<div className="relative">
					<label
						htmlFor="name"
						className="block text-sm font-semibold text-gray-700 mb-2"
					>
						Nombre completo
					</label>
					<div className="relative">
						<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
							<User className="w-5 h-5" />
						</div>
						<Input
							id="name"
							name="name"
							className="w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base"
							placeholder="Juan Pérez"
						/>
					</div>
				</div>

				<div className="relative">
					<label
						htmlFor="email"
						className="block text-sm font-semibold text-gray-700 mb-2"
					>
						Correo electrónico
					</label>
					<div className="relative">
						<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
							<Mail className="w-5 h-5" />
						</div>
						<Input
							id="email"
							type="email"
							name="email"
							className="w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base"
							placeholder="correo@ejemplo.com"
						/>
					</div>
				</div>

				<div className="relative">
					<label
						htmlFor="phone"
						className="block text-sm font-semibold text-gray-700 mb-2"
					>
						Teléfono
					</label>
					<div className="relative">
						<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
							<PhoneIcon className="w-5 h-5" />
						</div>
						<Input
							id="phone"
							name="phone"
							className="w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base"
							placeholder="+57 300 123 4567"
						/>
					</div>
				</div>

				<div className="relative">
					<label
						htmlFor="projects"
						className="block text-sm font-semibold text-gray-700 mb-2"
					>
						Tipo de proyecto
					</label>
					<div className="relative">
						<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
							<Home className="w-5 h-5" />
						</div>
						<Select
							id="projects"
							name="projects"
							options={[
								{ value: "casa", label: "Casa Modular" },
								{ value: "chalet", label: "Chalet" },
								{ value: "cubiculo", label: "Cubículo" }
							]}
							className="w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base appearance-none cursor-pointer"
						/>
					</div>
				</div>

				<div className="relative">
					<label
						htmlFor="message"
						className="block text-sm font-semibold text-gray-700 mb-2"
					>
						Mensaje
					</label>
					<div className="relative">
						<div className="absolute left-4 top-4 text-gray-400">
							<MessageSquare className="w-5 h-5" />
						</div>
						<Textarea
							id="message"
							name="message"
							className="w-full min-h-35 pl-12 pr-4 pt-4 pb-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base resize-none"
							placeholder="Cuéntanos sobre tu proyecto..."
						/>
					</div>
				</div>

				<Button className="w-full h-14 bg-[#E89B33] hover:bg-[#d68a24] text-white font-semibold text-base rounded-xl transition-all">
					Enviar solicitud
				</Button>

				<p className="text-sm text-gray-500 text-center">
					Al enviar este formulario, aceptas que te contactemos sobre tu proyecto.
				</p>
			</div>
		</div>
	);
};
