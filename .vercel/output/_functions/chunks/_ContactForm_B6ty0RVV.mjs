import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { createContext, useState, useContext } from 'react';
import { f as formNameInputProps, v as validateForm, g as getInitialFormState, t as toTrackAstroSubmitStatus, a as toValidateField, b as toSetValidationErrors } from './module_CP3BRzEX.mjs';
import { z } from 'zod';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { User, Mail, Phone, Home, MessageSquare } from 'lucide-react';

const success = new Proxy({"src":"/_astro/success.Dtdn2D6-.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/julio/workspace/Ekomod/src/assets/success.png";
							}
							
							return target[name];
						}
					});

function useCreateFormContext(validator, fieldErrors) {
  const initial = getInitialFormState({ validator, fieldErrors });
  const [formState, setFormState] = useState(initial);
  return {
    value: formState,
    set: setFormState,
    setValidationErrors: toSetValidationErrors(setFormState),
    validateField: toValidateField(setFormState),
    trackAstroSubmitStatus: toTrackAstroSubmitStatus(setFormState)
  };
}
function useFormContext() {
  const formContext = useContext(FormContext);
  if (!formContext) {
    throw new Error(
      "Form context not found. `useFormContext()` should only be called from children of a <Form> component."
    );
  }
  return formContext;
}
const FormContext = createContext(void 0);
function Form({
  children,
  validator,
  context,
  fieldErrors,
  name,
  ...formProps
}) {
  const formContext = context ?? useCreateFormContext(validator, fieldErrors);
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  return /* @__PURE__ */ jsx(Fragment, { children: sentSuccessfully ? /* @__PURE__ */ jsx(MessageSucceeded, {}) : /* @__PURE__ */ jsx(FormContext.Provider, { value: formContext, children: /* @__PURE__ */ jsxs(
    "form",
    {
      ...formProps,
      method: "POST",
      action: "/",
      id: "contact-form",
      onSubmit: async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData(e.currentTarget);
        formContext.set((formState) => ({
          ...formState,
          isSubmitPending: true,
          submitStatus: "validating"
        }));
        const parsed = await validateForm({
          formData,
          validator
        });
        if (parsed.data) {
          const response = await fetch("/api/contact", {
            method: "POST",
            body: formData
          });
          if (response.ok) {
            const json = await response.json();
            if (json.success) {
              setSentSuccessfully(json.success);
              e.currentTarget.reset();
            }
          } else {
            console.log(response);
          }
          return;
        }
        formContext.set((formState) => ({
          ...formState,
          isSubmitPending: false,
          submitStatus: "idle"
        }));
        formContext.setValidationErrors(parsed.fieldErrors);
      },
      children: [
        name ? /* @__PURE__ */ jsx("input", { ...formNameInputProps, value: name }) : null,
        children
      ]
    }
  ) }) });
}
function Input(inputProps) {
  const formContext = useFormContext();
  const fieldState = formContext.value.fields[inputProps.name];
  if (!fieldState) {
    return /* @__PURE__ */ jsx("input", { ...inputProps });
  }
  const { hasErroredOnce, validationErrors, validator } = fieldState;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        onBlur: async (e) => {
          const value = e.currentTarget.value;
          if (value === "") return;
          formContext.validateField(inputProps.name, value, validator);
        },
        onInput: async (e) => {
          if (!hasErroredOnce) return;
          const value = e.currentTarget.value;
          formContext.validateField(inputProps.name, value, validator);
        },
        ...inputProps
      }
    ),
    validationErrors?.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: validationErrors?.at(0) === "Required" ? "Requerido" : validationErrors?.at(0) })
  ] });
}
function Select({
  name,
  options = [],
  ...inputProps
}) {
  const formContext = useFormContext();
  const fieldState = formContext.value.fields[name];
  if (!fieldState) {
    return /* @__PURE__ */ jsxs("select", { ...inputProps, name, defaultValue: "seleccione", children: [
      /* @__PURE__ */ jsx("option", { value: "seleccione", disabled: true, children: "Seleccione" }),
      options?.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
    ] });
  }
  const { hasErroredOnce, validationErrors, validator } = fieldState;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "select",
      {
        ...inputProps,
        name,
        defaultValue: "seleccione",
        onBlur: async (e) => {
          const value = e.currentTarget.value;
          if (value === "") return;
          formContext.validateField(name, value, validator);
        },
        onInput: async (e) => {
          if (!hasErroredOnce) return;
          const value = e.currentTarget.value;
          formContext.validateField(name, value, validator);
        },
        children: [
          /* @__PURE__ */ jsx("option", { value: "seleccione", disabled: true, children: "Seleccione" }),
          options?.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
        ]
      }
    ),
    validationErrors?.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: validationErrors?.at(0) === "Required" ? "Requerido" : validationErrors?.at(0) })
  ] });
}
function Textarea({
  name,
  ...inputProps
}) {
  const formContext = useFormContext();
  const fieldState = formContext.value.fields[name];
  if (!fieldState) {
    return /* @__PURE__ */ jsx("textarea", { ...inputProps, name });
  }
  const { hasErroredOnce, validationErrors, validator } = fieldState;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "textarea",
      {
        ...inputProps,
        name,
        onBlur: async (e) => {
          const value = e.currentTarget.value;
          if (value === "") return;
          formContext.validateField(name, value, validator);
        },
        onInput: async (e) => {
          if (!hasErroredOnce) return;
          const value = e.currentTarget.value;
          formContext.validateField(name, value, validator);
        }
      }
    ),
    validationErrors?.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: validationErrors?.at(0) === "Required" ? "Requerido" : validationErrors?.at(0) })
  ] });
}
const MessageSucceeded = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "m-auto lg:flex gap-4 text-center justify-items-center lg:gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "content-center pb-14 lg:order-2 lg:pb-0", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-4xl pb-10 lg:pb-4 lg:text-5xl", children: "Muchas gracias" }),
      /* @__PURE__ */ jsx("p", { className: "lg:text-xl lg:font-bold", children: "Recibimos su mensaje" }),
      /* @__PURE__ */ jsx("p", { className: "text-md lg:text-xl", children: "Nos pondremos en contacto a la brevedad" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-52 h-52 lg:order-1", children: /* @__PURE__ */ jsxs("picture", { children: [
      /* @__PURE__ */ jsx("source", { type: "image/avif" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: success.src,
          alt: "ekomod-logo",
          width: 208,
          height: 208,
          loading: "lazy",
          decoding: "async"
        }
      )
    ] }) })
  ] }) });
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const contactFormValidator = z.object({
  name: z.string().min(3, "El nombre es requerido y debe tener al menos 3 caracteres.").regex(
    /^[a-zA-Z\s]+$/,
    "El nombre solo debe contener letras y espacios. "
  ),
  email: z.string().email("El email no es válido").min(1, "El email es requerido."),
  phone: z.string().min(5, "El teléfono es requerido.").regex(
    /^[\d\+\(\)\-\s]+$/,
    "El teléfono solo debe contener números y caracteres válidos."
  ),
  projects: z.string().min(1, "El proyecto es requerido.").regex(
    /^(?!Seleccione).*$/,
    "Por favor, selecciona un proyecto válido."
  ),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres.").max(500, "El mensaje no puede exceder los 500 caracteres.")
});
function ContactForm() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Form, { validator: contactFormValidator, children: /* @__PURE__ */ jsx(FormContent, {}) }) });
}
const FormContent = () => {
  const { value: formState } = useFormContext();
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-3", children: "Solicita tu cotización" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Completa el formulario y te contactaremos pronto" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "name",
            className: "block text-sm font-semibold text-gray-700 mb-2",
            children: "Nombre completo"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400", children: /* @__PURE__ */ jsx(User, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              name: "name",
              className: "w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base",
              placeholder: "Juan Pérez"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-semibold text-gray-700 mb-2",
            children: "Correo electrónico"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400", children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              type: "email",
              name: "email",
              className: "w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base",
              placeholder: "correo@ejemplo.com"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "phone",
            className: "block text-sm font-semibold text-gray-700 mb-2",
            children: "Teléfono"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400", children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "phone",
              name: "phone",
              className: "w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base",
              placeholder: "+57 300 123 4567"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "projects",
            className: "block text-sm font-semibold text-gray-700 mb-2",
            children: "Tipo de proyecto"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10", children: /* @__PURE__ */ jsx(Home, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx(
            Select,
            {
              id: "projects",
              name: "projects",
              options: [
                { value: "casa", label: "Casa Modular" },
                { value: "chalet", label: "Chalet" },
                { value: "cubiculo", label: "Cubículo" }
              ],
              className: "w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base appearance-none cursor-pointer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "message",
            className: "block text-sm font-semibold text-gray-700 mb-2",
            children: "Mensaje"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-4 text-gray-400", children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "message",
              name: "message",
              className: "w-full min-h-35 pl-12 pr-4 pt-4 pb-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#E89B33] focus:bg-white transition-all text-base resize-none",
              placeholder: "Cuéntanos sobre tu proyecto..."
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { className: "w-full h-14 bg-[#E89B33] hover:bg-[#d68a24] text-white font-semibold text-base rounded-xl transition-all", children: "Enviar solicitud" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 text-center", children: "Al enviar este formulario, aceptas que te contactemos sobre tu proyecto." })
    ] })
  ] });
};

export { Button as B, ContactForm as C, cn as a, contactFormValidator as c };
