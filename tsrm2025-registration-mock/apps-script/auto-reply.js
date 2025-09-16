function sendAutoReply(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("FormResponses");
  const lastRow = sheet.getLastRow();
  const row = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];

  const email = row[1]; // assume column B = email
  const name = row[0];  // assume column A = name
  const qrCodeUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(email)}`;

  const subject = "TSRM2025 Registration Confirmation";
  const body = `Dear ${name},\n\nThank you for registering for TSRM2025.\nPlease find your QR code for check-in below:\n${qrCodeUrl}\n\nSee you at the event!`;

  GmailApp.sendEmail(email, subject, body, { htmlBody: body });
}
