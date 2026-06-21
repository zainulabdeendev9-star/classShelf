# ClassShelf

ClassShelf is a centralized platform for students to discover, view, and download academic notes, books, and study materials. The platform is designed to make educational resources easily accessible through a clean, organized, and user-friendly interface.

## Features

* Browse notes by subject
* View note details and information
* Download study notes and educational resources
* Subject-based organization
* Search and filter notes
* Responsive design for desktop and mobile devices
* Secure file storage and management with Appwrite
* Admin management for notes and resources

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Redux Toolkit
* Tailwind CSS

### Backend & Services

* Appwrite Database
* Appwrite Storage
* Appwrite Authentication

## Project Structure

```text
src/
├── app/
│   └── store.js
├── components/
├── features/
│   ├── notes/
│   ├── subjects/
│   └── auth/
├── pages/
├── routes/
├── services/
│   └── appwrite/
├── hooks/
├── utils/
└── assets/
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/ClassShelf.git
```

Navigate to the project directory:

```bash
cd ClassShelf
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_ENDPOINT=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_NOTES_COLLECTION_ID=
VITE_APPWRITE_SUBJECTS_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

Start the development server:

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment

This project can be deployed on Vercel.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add all environment variables in Vercel Project Settings.
4. Deploy the application.

## Usage

1. Browse available subjects.
2. Open a subject to view available notes.
3. View note details.
4. Download notes and study resources.
5. Use search and filters to quickly find content.

## Future Improvements

* Advanced search
* User accounts
* Bookmark favorite notes
* Recently added notes section
* Note ratings and reviews
* Download analytics
* Resource recommendations
* Dark mode

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Commit your changes.

```bash
git commit -m "Add your feature"
```

4. Push to the branch.

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Author

Developed by Muhammad Zain Ul Abdeen

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

## Acknowledgements

* React
* Vite
* Redux Toolkit
* Tailwind CSS
* Appwrite
* Vercel
