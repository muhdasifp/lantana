# Google Sheets Integration Guide (Frontend-Only)

Since this is a frontend-only environment, we cannot create a dedicated Node.js backend server. Instead, we will use **Google Apps Script** to create a "Serverless" API endpoint. This script will receive the form data from your website and append it to your specific Google Sheet.

## Step 1: Prepare the Google Sheet
1. Open your Google Sheet: [https://docs.google.com/spreadsheets/d/1lxR7zy9hhj7njYaI5NoWNDYtoABtMDJYeqE7fYS9mQI/edit](https://docs.google.com/spreadsheets/d/1lxR7zy9hhj7njYaI5NoWNDYtoABtMDJYeqE7fYS9mQI/edit)
2. Ensure the first row (header row) contains the following exact columns:
   - **Column A**: Submission Date
   - **Column B**: Client Name
   - **Column C**: Email Address
   - **Column D**: Phone Number
   - **Column E**: Message/Details
   - **Column F**: Max Price
   - **Column G**: Min Size
   - **Column H**: Source

## Step 2: Create the App Script
1. In the Google Sheet, go to **Extensions** > **Apps Script**.
2. Delete any code in the `Code.gs` file and paste the following script:

\`\`\`javascript
const SHEET_ID = '1lxR7zy9hhj7njYaI5NoWNDYtoABtMDJYeqE7fYS9mQI'; // Your specific Sheet ID

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    const params = e.parameter;
    
    const timestamp = params.submission_date || new Date().toString();
    const name = params.client_name || '';
    const email = params.email || '';
    const phone = params.phone || '';
    const message = params.message || '';
    const maxPrice = params.max_price || '';
    const minSize = params.min_size || '';
    const source = params.source || 'Website Form';
    
    // Append row
    sheet.appendRow([timestamp, name, email, phone, message, maxPrice, minSize, source]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

## Step 3: Deploy as Web App
1. Click the blue **Deploy** button > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. **Description**: "Website Form Submission"
4. **Execute as**: "Me" (your email address).
5. **Who has access**: **Anyone** (This is CRITICAL - it allows your website to send data without users needing to log in to Google).
6. Click **Deploy**.
7. Authorize the script when prompted (you may see a "Google hasn't verified this app" warning; click "Advanced" > "Go to... (unsafe)" to proceed).

## Step 4: Get the Web App URL
1. Copy the **Web app URL** generated (it ends with \`/exec\`).
2. This is your API Endpoint.

## Step 5: Connect to Your Website
1. Create a file named \`.env\` in the root of your project.
2. Add the URL you just copied:

\`\`\`
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_LONG_SCRIPT_ID_HERE/exec
\`\`\`

3. Restart your development server (\`npm run dev\`).

Your forms (Modal and Enquiry Section) will now automatically submit data to your Google Sheet!