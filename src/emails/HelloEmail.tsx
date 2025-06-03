import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";

export default function HelloEmail() {
  return (
    <Html>
      <Head />
      <Preview>Hello, thanks for your email!</Preview>
      <Body
        style={{
          backgroundColor: "#f6f8fa",
          fontFamily: "Segoe UI, Arial, sans-serif",
          color: "#222",
        }}
      >
        <Container
          style={{
            backgroundColor: "#fff",
            margin: "48px auto",
            padding: "40px 32px",
            borderRadius: "12px",
            maxWidth: "420px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
          }}
        >
          <Section>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "18px",
                color: "#2563eb",
                letterSpacing: "-0.5px",
                textAlign: "center",
              }}
            >
              Hello!
            </Text>
            <Text
              style={{
                fontSize: "16px",
                marginBottom: "24px",
                textAlign: "center",
                color: "#374151",
              }}
            >
              Thank you for your email. I appreciate you reaching out and will
              write you soon.
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: "#6b7280",
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              Best regards,
              <br />
              Dmytro
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
