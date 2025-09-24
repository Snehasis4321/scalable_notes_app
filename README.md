# Scalable Notes App

This is a full-stack serverless note-taking application using React.js for the frontend and a Node.js backend powered by AWS services.

## Tech Stack

**Frontend:**

- React.js
- Vite
- Tailwind CSS
- daisyUI
- React Router
- oidc-client-ts

**Backend:**

- Node.js
- Express.js
- AWS SDK (Cognito, DynamoDB)

## Getting Started

### Prerequisites

- Node.js
- pnpm
- An AWS account with configured credentials

### Backend Setup

1.  Navigate to the `notes_app_backend` directory:
    ```bash
    cd notes_app_backend
    ```
2.  Install the dependencies:
    ```bash
    pnpm install
    ```
3.  Start the backend server:
    ```bash
    pnpm start
    ```

### Frontend Setup

1.  Navigate to the `notes_app_react` directory:
    ```bash
    cd notes_app_react
    ```
2.  Install the dependencies:
    ```bash
    pnpm install
    ```
3.  Start the frontend development server:
    ```bash
    pnpm dev
    ```

## Project Structure

```
.
├── notes_app_backend
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── config
│   ├── index.js
│   └── package.json
└── notes_app_react
    ├── public
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```
