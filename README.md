# Learnup
An E-Learning plus Selling platform.

## Description

This is a fully functional e-learning plus selling platform, Learneup. It was primarly focused on the french marketplace. It offers all the core features you would expect from a platform like Fiverr, allowing users to offer and purchase services seamlessly.

## Features
* User authentication (Sign up, Log in, Log out)
* Browse and search for services
* Order services
* Offer services
* Rate and review services
* User profiles
* Messaging system between users
* Secure payment processing using Stripe

## Tech Stack
* **Frontend:** React.js, Tailwind CSS, React Router
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL, Prisma ORM

## Installation
To get a local copy up and running, follow these simple steps:

### Prerequisites
Make sure you have Node.js and PostgreSQL installed on your machine.

### Backend
1. Clone the repository:
```
git clone https://github.com/yourusername/Learnup.git
cd Learnup/backend
```
2. Install NPM packages:
```
npm install
```
3. Set up your environment variables. Create a .env file in the backend directory and add the following:
```
DATABASE_URL=postgresql://user:password@localhost:5432/learnup
JWT_SECRET=your_jwt_secret
```
4. Migrate the database schema:
```
npx prisma migrate dev --name init
```
5. Start the backend server:
```
npm start
```

### Frontend
1. Navigate to the frontend directory.
2. Install NPM packages:
```
npm install
```
3. Start the React development server:
```
npm run dev
```

### Usage
To use the application, navigate to http://localhost:3000 in your web browser. You can sign up for a new account or log in with an existing one to start offering or purchasing services.   
