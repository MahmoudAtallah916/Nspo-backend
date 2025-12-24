export const submitInvestor = async (req, res) => {
  try {
    const fields = req.body || {};
    const files = req.files || {};

    if (!fields.fullName || !fields.email || !fields.phone) {
      return res.status(400).json({
        ok: false,
        error: "Missing required fields: fullName, email, phone",
      });
    }

    const buildHtml = () => {
      const fieldRows = Object.entries(fields)
        .map(
          ([key, value]) => `
        <tr>
          <td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold;">
            ${key}
          </td>
          <td style="padding:10px;border:1px solid #e5e5e5;">
            ${value || ""}
          </td>
        </tr>
      `
        )
        .join("");

      const fileRows = ["identityPhoto", "commercialRegister", "taxCard"]
        .map((key) => {
          const arr = files[key];
          return arr && arr.length
            ? `
          <tr>
            <td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold;">
              ${key}
            </td>
            <td style="padding:10px;border:1px solid #e5e5e5;">
              🗂️ ${arr[0].originalname}
            </td>
          </tr>
        `
            : "";
        })
        .join("");

      return `
      <html dir="rtl" lang="ar">
        <body style="font-family: 'Tahoma', sans-serif; background:#f6f7f9; padding:20px;">
          
          <table width="100%" style="max-width:650px;margin:auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <tr>
              <td style="background:#1d4ed8;color:white;padding:25px;text-align:center;font-size:22px;font-weight:bold;">
                <span style="display:inline-flex;gap:10px;align-items:center;">
                  <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.7L4 7l8-4 8 4-8 2.7zm10 3.3l-10 5-10-5v2l10 5 10-5v-2z"/>
                  </svg>
                  طلب استثمار جديد
                </span>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:20px;">
                <h3 style="margin:0 0 15px;color:#1e293b;font-weight:bold;text-align:right;">
                  تم استلام طلب استثمار جديد، التفاصيل كالتالي:
                </h3>

                <table width="100%" style="border-collapse:collapse;font-size:15px;">
                  ${fieldRows}
                  ${fileRows}
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9;padding:15px;text-align:center;color:#475569;font-size:14px;">
                <div style="margin-bottom:8px;font-weight:bold;">مركز دعم المستثمرين</div>

                <div style="margin-top:5px;">
                  <svg width="16" height="16" fill="#475569" style="vertical-align:middle;margin-left:4px;" viewBox="0 0 24 24">
                    <path d="M21 8V7l-3 2-2-1-3 2 2 1-2 1v1l3-2 2 1 3-2v-1l-3 2-2-1 3-2z"/>
                  </svg>
                  البريد: nspo@nspo.com.eg
                </div>

                <div style="margin-top:5px;">
                  <svg width="16" height="16" fill="#475569" style="vertical-align:middle;margin-left:4px;" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.96-.26 11.36 11.36 0 003.55.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.26.96l-2.2 2.2z"/>
                  </svg>
                  هاتف الدعم: 16128
                </div>
              </td>
            </tr>

          </table>

        </body>
      </html>
      `;
    };

    const html = buildHtml();

    const text = Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const attachments = [];
    for (const key of ["identityPhoto", "commercialRegister", "taxCard"]) {
      const arr = files[key];
      if (arr && arr.length > 0) {
        const f = arr[0];
        attachments.push({
          filename: f.originalname,
          content: f.buffer,
          contentType: f.mimetype,
        });
      }
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return res.status(500).json({
        ok: false,
        error: "Missing RESEND_API_KEY",
      });
    }

    const payload = {
      from: "onboarding@resend.dev",
      
      
      
      to: ["nspo@nspo.com.eg"], 
      subject: `طلب استثمار جديد - ${fields.fullName}`,
      html,
      text,
      attachments: attachments.map((a) => ({
        filename: a.filename,
        content: a.content.toString("base64"), 
        encoding: "base64",
      })),
    };

    console.log("Sending email with from:", payload.from);

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await resp.json().catch(() => null);

    if (!resp.ok) {
      console.error("Resend API Error:", result);
      return res.status(resp.status || 502).json({
        ok: false,
        error: result || "Resend API error",
      });
    }

    return res.json({ ok: true, result });
  } catch (err) {
    console.error("Error in submitInvestor:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};