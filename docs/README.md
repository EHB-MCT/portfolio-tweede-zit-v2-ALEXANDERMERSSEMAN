# Portfolio Alexander Mersseman

This is an API developed for a closed forum where EhB students can ask questions (anonymously or not) and teachers can answer and discuss these questions in the responses. The API is designed with modularity, maintainability, and ease of use in mind.

## Project Structure

- **.github/**
  - **workflows/**
    - `ci.yml`: Configuration for continuous integration.
    - `cd.yml`: Configuration for continuous delivery.

- **docs/**
  - `CODE_OF_CONDUCT.md`: Code of conduct for contributors to the project.
  - `CONTRIBUTING.md`: Guidelines for contributing to the project.
  - `LICENSE`: The license under which the project is distributed.
  - `README.md`: This file with information about the project.

- **public/**
  - **css/**
    - `index.css`: General styling for the index page.
    - `studentForum.css`: Styling for the student forum.
    - `teacherForum.css`: Styling for the teacher forum.
  - **images/**
    - `favicon.ico`: Favicon for the application.
  - **js/**
    - `login.js`: JavaScript for the login page.
    - `studentForum.js`: JavaScript for the student forum.
    - `teacherForum.js`: JavaScript for the teacher forum.
  - `index.html`: Homepage of the application.
  - `studentForum.html`: HTML for the student forum.
  - `teacherForum.html`: HTML for the teacher forum.

- **src/**
  - **controllers/**
    - `allDataController.js`: Manages the logic for all data.
    - `credentialsController.js`: Manages the logic for user credentials.
    - `studentQuestionsController.js`: Manages the logic for student questions.
  - **models/**
    - `credentialsModel.js`: Defines the data model for user credentials.
    - `db.js`: Manages database connections.
    - `studentQuestions.js`: Defines the data model for student questions.
  - **routes/**
    - `allDataRoutes.js`: Manages routes for all data.
    - `credentialsRoutes.js`: Manages routes for user credentials.
    - `studentQuestionsRoutes.js`: Manages routes for student questions.
  - **services/**
    - `credentialsService.js`: Contains business logic for user credentials.
    - `studentQuestionsService.js`: Contains business logic for student questions.

- **tests/**
  - **e2e/**: End-to-end tests for complete user scenarios.
  - **integration/**: Integration tests for testing interactions between different parts of the application.
  - **unit/**: Unit tests for individual functions and modules.

- **.env**: Contains environment variables for the application. This file holds sensitive information like database connections and API keys. Ensure this file is not included in version control.

- **.gitignore**: List of files and directories to be ignored by Git.

- **app.js**: Main application code for starting the server.

- **Dockerfile**: The Docker file for building the application container.

- **docker-compose.yml**: Docker Compose configuration for starting and managing the container(s).

- **package.json**: Contains metadata about the project and its dependencies.

- **package-lock.json**: Contains the exact version of all installed dependencies.

## Acknowledgements

Below are some useful guides and documents that contributed to the development of this project:

- **Github Repository Setup Guide**: (https://chatgpt.com/share/fe3006ee-3477-4ff9-b617-435e7a423ad1)
- **API Route Setup**: (https://chatgpt.com/share/2c6bb32d-7856-4704-b01d-4684c6cbad9b)
- **Docker Setup Guide**: (https://chatgpt.com/share/45479404-3d95-4cd8-9af2-350fe8e28f8c)
- **Docker Setup Review**: (https://chatgpt.com/share/140de096-f7fc-4f5f-837f-14a87e626f87)
- **Access Problem Docker**: (https://chatgpt.com/share/c5dc11f1-693d-4c23-ae61-8084671de1b0)
- **Fixing API Route Issue**: (https://chatgpt.com/share/6a3427fe-26da-447c-bf70-05c4290f0b71).
- **Add Name to Chat**: (https://chatgpt.com/share/5df675f8-2a63-4ec6-b1f0-fe6f24b716de).
- **Evaluation and Feedback Assignment**: (https://chatgpt.com/share/f0861387-f9ef-4b98-a8e5-3f4e4f4efe0f).
- **API Running**: (https://chatgpt.com/share/a0ce679a-6dc2-444b-9f80-04c97c662cc7).
- **API Forum Docker**: (https://chatgpt.com/share/a51108b2-4a49-4307-8efa-c2f9030e59ec).
- **Commit Message .gitignore**: (https://chatgpt.com/share/9d67ccef-5b61-452a-80e1-ae960c102f66).
- **Project Setup Checklist**: (https://chatgpt.com/share/b3667347-cafa-4bd4-8020-55485bb056b8).
- **Login Authentication**: (https://chatgpt.com/share/545ad393-bb6b-4a38-be11-058a7c905e62).
- **Project Structure Overview**: (https://chatgpt.com/share/23829ba6-e36f-4532-95da-f48bcfb46e9c).
- **API Project Setup Guide**: (https://chatgpt.com/share/e3a91e73-1e93-4811-b95c-91418da1cd58).
- **Docker API Setup**: (https://chatgpt.com/share/548abacb-3362-460a-be72-6a718b1add32).


## Installation

Follow the steps below to install and run the project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EHB-MCT/portfolio-tweede-zit-v2-ALEXANDERMERSSEMAN.git
   cd repository
