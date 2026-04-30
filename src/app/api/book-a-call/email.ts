// Dark mode hex equivalents of OKLCH design tokens
const c = {
  bg: "#13151a",
  surface: "#1c1f26",
  border: "#2a3028",
  primary: "#9bf25a",
  foreground: "#e8ede5",
  muted: "#8a9190",
};

interface BookACallEmailProps {
  name: string;
  email: string;
  company?: string;
  challenge?: string;
}

function field(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 16px 24px; border-bottom: 1px solid ${c.border};">
        <p style="margin: 0 0 4px; font-family: monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: ${c.muted};">${label}</p>
        <p style="margin: 0; font-family: system-ui, sans-serif; font-size: 14px; color: ${c.foreground}; line-height: 1.5;">${value}</p>
      </td>
    </tr>
  `;
}

export function bookACallEmailHtml({ name, email, company, challenge }: BookACallEmailProps) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Discovery call request from ${name}</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${c.bg}; font-family: system-ui, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${c.bg}; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px;">

          <!-- Logo -->
          <tr>
            <td style="padding: 0 0 24px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width: 8px; height: 8px; background-color: ${c.primary}; vertical-align: middle;"></td>
                  <td style="padding-left: 8px; font-family: monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: ${c.foreground}; vertical-align: middle;">SurgentAI</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color: ${c.surface}; border: 1px solid ${c.border}; border-radius: 4px; overflow: hidden;">

              <!-- Power rail -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height: 2px; background-color: ${c.primary};"></td>
                </tr>
              </table>

              <!-- Heading -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 24px 24px 20px; border-bottom: 1px solid ${c.border};">
                    <p style="margin: 0 0 4px; font-family: monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: ${c.muted};">Inbound</p>
                    <h1 style="margin: 0; font-family: system-ui, sans-serif; font-size: 18px; font-weight: 700; letter-spacing: -0.02em; color: ${c.foreground};">Discovery call request</h1>
                  </td>
                </tr>
              </table>

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0">
                ${field("Name", name)}
                ${field("Email", email)}
                ${company ? field("Company", company) : ""}
                ${challenge ? field("Challenge", challenge) : ""}
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 0 0; text-align: right;">
              <p style="margin: 0; font-family: monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: ${c.muted};">getsurgent.ai</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
