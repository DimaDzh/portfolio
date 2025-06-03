import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";
type EmailProps = {
  email: string;
  username: string;
  message?: string;
};

export default function HelloAdminEmail({
  email = "dimaemail",
  username = "Dmytro",
  message = "Hello, this is a test message from Dmytro.",
}: EmailProps) {
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
              You have a new email!
            </Text>
            <Text
              style={{
                fontSize: "16px",
                marginBottom: "12px",
                textAlign: "center",
                color: "#374151",
              }}
            >
              <b>From:</b> {username} ({email})
            </Text>
            {message && (
              <Text
                style={{
                  fontSize: "15px",
                  marginBottom: "24px",
                  textAlign: "center",
                  color: "#374151",
                  background: "#f3f4f6",
                  borderRadius: "8px",
                  padding: "16px 12px",
                  wordBreak: "break-word",
                }}
              >
                <b>Message:</b> {message}
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
