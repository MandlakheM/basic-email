# Email Sending Project

This project consists of a React frontend and an Express backend that together create a simple email sending application.

## Features

- Send emails using a web interface
- React-based frontend for user interaction
- Express backend using Nodemailer for email sending
- Environment variable configuration for secure credential management

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.x or higher recommended)
- npm (usually comes with Node.js)
- A Gmail account (for sending emails)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/email-sending-project.git
   cd email-server
   ```

2. Install dependencies :
   ```
   # Install dependencies
   cd email-server
   npm install

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   EMAIL_USER=your_gmail_address@gmail.com
   EMAIL_PASS=your_gmail_password_or_app_password
   PORT=3030
   ```

   Note: If you're using 2-factor authentication, you'll need to use an "App Password" instead of your regular Gmail password.

## Usage

1. Start the backend server:
   ```
   node server.cjs
   ```

2. In a new terminal, start the frontend development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Configuration

- Backend port can be configured by changing the `PORT` environment variable in the `.env` file.
- For production, make sure to update the axios base URL in the frontend to point to your production server.

## Contributing

Contributions to this project are welcome. Please fork the repository and create a pull request with your changes.
