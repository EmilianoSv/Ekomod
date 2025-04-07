import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";

import logo from "../assets/ekomod-logo.png";

interface contactEmailProps {
	authorName?: string;
	authorEmail?: string;
	authorPhone?: string;
	projectSelected?: string;
	messageText?: string;
}

export const ContactEmail = ({
	authorName,
	authorEmail,
	authorPhone,
	projectSelected,
	messageText,
}: contactEmailProps) => {
	const previewText = `Read ${authorName}'s review`;

	return (
		<Html>
			<Head />
			<Body style={main}>
				<Preview>{previewText}</Preview>
				<Container style={container}>
					<Section style={{ paddingBottom: "20px" }}>
						<Row>
							<Text style={heading}>
								Mensaje de{" "}
								<span style={{ color: "green" }}>
									{authorName}
								</span>{" "}
								enviado desde la pagina de ekomod
							</Text>
							<Text style={review}>
								<span style={paragraphItem}>Nombre:</span>{" "}
								{authorName}
								<br />
								<span style={paragraphItem}>Email:</span>{" "}
								{authorEmail}
								<br />
								<span style={paragraphItem}>
									Telefono:
								</span>{" "}
								{authorPhone}
								<br />
								<span style={paragraphItem}>
									Proyecto:
								</span>{" "}
								{projectSelected}
								<br />
								<span style={paragraphItem}>Mensaje:</span>{" "}
								{messageText}
							</Text>
						</Row>
					</Section>

					<Hr style={hr} />

					<Section>
						<Row>
							<Text style={footer}>Ekomod 2025</Text>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

ContactEmail.PreviewProps = {
	authorName: "Juan",
	authorImage: `${logo.src}`,
	messageText: `“Mensaje de prueba”`,
} as contactEmailProps;

export default ContactEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "580px",
	maxWidth: "100%",
};

const userImage = {
	margin: "0 auto",
	marginBottom: "16px",
	borderRadius: "0%",
};

const heading = {
	fontSize: "32px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "18px",
	lineHeight: "1.4",
	color: "#484848",
};

const review = {
	...paragraph,
	padding: "24px",
	backgroundColor: "#f2f3f3",
	borderRadius: "4px",
};

const button = {
	backgroundColor: "#ff5a5f",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "18px",
	padding: "19px 30px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
};

const link = {
	...paragraph,
	color: "#ff5a5f",
	display: "block",
};

const reportLink = {
	fontSize: "14px",
	color: "#9ca299",
	textDecoration: "underline",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#9ca299",
	fontSize: "14px",
	marginBottom: "10px",
};

const paragraphItem = {
	fontWeight: 700,
};
