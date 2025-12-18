import { z } from 'zod';
import { c as contactFormValidator } from '../../chunks/_ContactForm_B6ty0RVV.mjs';
import { Resend } from 'resend';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Html, Head, Body, Preview, Container, Section, Row, Text, Hr } from '@react-email/components';
import { render } from '@react-email/render';
export { renderers } from '../../renderers.mjs';

const logo = new Proxy({"src":"/_astro/ekomod-logo.ffq-VXzT.png","width":930,"height":812,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/julio/workspace/Ekomod/src/assets/ekomod-logo.png";
							}
							
							return target[name];
						}
					});

const ContactEmail = ({
  authorName,
  authorEmail,
  authorPhone,
  projectSelected,
  messageText
}) => {
  const previewText = `Read ${authorName}'s review`;
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsxs(Body, { style: main, children: [
      /* @__PURE__ */ jsx(Preview, { children: previewText }),
      /* @__PURE__ */ jsxs(Container, { style: container, children: [
        /* @__PURE__ */ jsx(Section, { style: { paddingBottom: "20px" }, children: /* @__PURE__ */ jsxs(Row, { children: [
          /* @__PURE__ */ jsxs(Text, { style: heading, children: [
            "Mensaje de",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: "green" }, children: authorName }),
            " ",
            "enviado desde la pagina de ekomod"
          ] }),
          /* @__PURE__ */ jsxs(Text, { style: review, children: [
            /* @__PURE__ */ jsx("span", { style: paragraphItem, children: "Nombre:" }),
            " ",
            authorName,
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { style: paragraphItem, children: "Email:" }),
            " ",
            authorEmail,
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { style: paragraphItem, children: "Telefono:" }),
            " ",
            authorPhone,
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { style: paragraphItem, children: "Proyecto:" }),
            " ",
            projectSelected,
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { style: paragraphItem, children: "Mensaje:" }),
            " ",
            messageText
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Hr, { style: hr }),
        /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Text, { style: footer, children: "Ekomod 2025" }) }) })
      ] })
    ] })
  ] });
};
ContactEmail.PreviewProps = {
  authorName: "Juan",
  authorImage: `${logo.src}`,
  messageText: `“Mensaje de prueba”`
};
const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%"
};
const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848"
};
const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848"
};
const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px"
};
const hr = {
  borderColor: "#cccccc",
  margin: "20px 0"
};
const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px"
};
const paragraphItem = {
  fontWeight: 700
};

async function POST(context) {
  const formData = await context.request.formData();
  const formDataObject = Object.fromEntries(formData);
  const schema = z.object(contactFormValidator.validator);
  const parsed = schema.safeParse(formDataObject);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ errors: parsed.error.flatten().fieldErrors }),
      { status: 400 }
    );
  }
  console.log("MAIL ENVIADO!");
  const resend = new Resend("re_Tg4qxrnn_FSkkWVSuMxihLMPpBvR4A6WC");
  const emailContent = ContactEmail({
    authorName: parsed.data.name,
    authorEmail: parsed.data.email,
    authorPhone: parsed.data.phone,
    projectSelected: parsed.data.projects,
    messageText: parsed.data.message
  });
  const html = await render(emailContent);
  const text = await render(emailContent, {
    plainText: true
  });
  const { data, error } = await resend.emails.send({
    from: "Web Ekomod <contacto@ekomod.com.co>",
    to: ["Konstruct.soluciones@gmail.com"],
    subject: parsed.data.name + " - " + parsed.data.projects,
    html,
    text
  });
  if (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error al mandar el mensaje"
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  return new Response(
    JSON.stringify({
      success: true,
      message: "Recibimos su mensaje"
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
