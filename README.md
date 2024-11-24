# Tutoring App

## Description
A tutoring app that allows users to register, log in, offer tutoring in various fields, and book lessons. The app uses PostgreSQL on AWS RDS for the database.

## Tech Stack
- **Backend**: NestJS, TypeORM, JWT, PostgreSQL (AWS RDS)
- **Frontend**: React
- **API Docs**: Swagger

## Goals

- [x] **Setup DB on AWS RDS**: PostgreSQL database is hosted on AWS RDS.
- [x] **Register/Login with TypeORM**: User authentication with JWT.
- [x] **User and Address Storage**: Users and addresses are stored in the database.
- [x] **User Table**: Store user data (username, email, password, role).
- [x] **Address Table**: Store address data linked to users.
- [ ] **Tutoring Offers**: Store tutoring offer data.
- [ ] **Lesson Booking**: Store and manage lesson bookings.
- [ ] **Payment Integration**: Add payment functionality.
- [ ] **Deploy on AWS**: Deploy the full app on AWS.
- [ ] **Create Frontend with React**: Build the frontend using React.

## Setup

1. Clone the repo:  
   `git clone https://github.com/your-repo/tutoring-app.git`
2. Install dependencies:  
   `npm install`
3. Run the app:  
   `npm run start:dev`
4. Access API docs:  
   `http://localhost:3000/api`

## License
MIT License
