# Vite Project Setup Guide
This guide will walk you through setting up a Vite project with React and Firebase for notes data fetching and storing. Please follow the steps below to get your project up and running locally.

### Prerequisites
Before you begin, ensure you have the following installed on your system:

- Node.js 
- npm 
- Git 

### Setup Steps

1. **Clone the Repository**

Clone the project repository from GitHub to your local machine using the following command:

```
git clone https://github.com/Niranjangkr/Markdown-Editor.git

```

2. **Install Dependencies**

Navigate to the project directory and install the required dependencies using npm:


```
cd your-vite-project
npm install
```

3. **Use React 17.0.2**

It has been observed that the current version of the reactmd dependency is not fully compatible with React 18. As a result, to ensure a smooth development experience, it's recommended to use ** React 17.0.2 ** instead of the latest version.

Don't worry! npm will handle this for you automatically. The dependencies specified in your project's package.json file will ensure that React 17.0.2 is used despite the latest version being installed.

4. **Create .env File**

Create a new file named .env in the root directory of your project. This file will hold your Firebase configuration and other sensitive information. Add the following configuration entries to the .env file:

```
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
```

Replace your_firebase_api_key, your_firebase_auth_domain, and other placeholders with your actual Firebase configuration values. Make sure not to share this file or the values with others, as it contains sensitive information.

5. **Start the Development Server**

Once you have set up the .env file, you can start the development server using the following command:

6. **npm run dev**

This command will start the development server, and your Vite project will be accessible at http://localhost:3000.

## Congratulations!
Your Vite project with React and Firebase is now set up locally. By using React 17.0.2, you can ensure compatibility with the reactmd dependency while still benefitting from other improvements in the latest versions of React.

Remember to keep your .env file secure and avoid sharing it with others, especially in public repositories. If you're collaborating with a team, share the required environment variable details with them separately.

Happy coding! 



# co42b487d95fbd5b5c8f9c4a8

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!