const { google } = require("googleapis");
const token = require("../token.json");
const credentials = require("../credentials.json");

const documentLocation = "https://docs.google.com/document/d/1IPkoPmCbjlzf3KW1niEC-zKl0IufyL6ZoD8TxMWhIkg/edit";

function authorize() {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}

async function logInto() {
    const auth = await authorize();
    const docs = google.docs({
      version: "v1",
      auth
    });
    await docs.documents.batchUpdate({
      auth,
      documentId: documentLocation,
      requestBody: {
        requests: [
          {
            insertText: {
              location: {
                index: 1
              },
              text: "hello!\n"
            }
          }
        ]
      }
    });
}
