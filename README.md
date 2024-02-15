# AI Search Engine Project

![Project Image](path_to_project_image)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Components](#components)
- [Dependencies](#dependencies)
- [Contribution](#contribution)
- [License](#license)

## Features

- Custom search engine integration using Google API
- Summary of search results presentation
- Full page view of search results

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version  14 or later)
- npm (version  6 or later)

### Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/username/ai-search-engine.git
cd ai-search-engine
```

2. Install the dependencies.

```bash
npm install
```

3. Create a `.env.local` file in the root directory of the project and add the following environment variables.

```bash
GOOGLE_API=<your_google_api_key>
ENGINE_ID=<your_engine_id>
HF_ACCESS_TOKEN=<your_hf_access_token>
```

Replace `<your_google_api_key>`, `<your_engine_id>` and `<your_hf_access_token>` with your actual credentials.

4. Run the development server.

```bash
npm run dev
```

5. Open your web browser and navigate to `http://localhost:3000`.

## Components

The project is composed of several key components:

- **SearchBar**: Renders a search bar and handles user input submission.
- **ResultsPage**: Displays search results and provides navigation to full pages.
- **LoadingOverlay**: Shows a loading indicator while search results are being retrieved.

## Dependencies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [React](https://reactjs.org/)

## Contribution

Contributions are welcome! Please feel free to open issues or submit pull requests for any improvements or bug fixes.