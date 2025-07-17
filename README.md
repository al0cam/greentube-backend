# Greentube Backend

A backend application for gaming platform operations, built with modern technologies and best practices.

## Overview

This project serves as the backend infrastructure for gaming platform functionality, providing robust APIs and services for game management, user authentication, and platform operations.

## Features

- **RESTful API**: Clean and well-documented REST endpoints
- **Authentication & Authorization**: Secure user authentication system
- **Database Integration**: Efficient data persistence and retrieval
- **Real-time Communication**: WebSocket support for live features
- **Scalable Architecture**: Designed for high-load gaming environments
- **Monitoring & Logging**: Comprehensive logging and health monitoring

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **CMS**: Contentful
- **Hosting**: Vercel
- **Authentication**: JWT / OAuth2
- **Documentation**: OpenAPI/Swagger
- **Testing**: HTTPie for API testing

## Prerequisites

- Node.js 16+
- npm or yarn
- Contentful account and API keys
- Vercel CLI (for deployment)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/al0cam/greentube-backend.git
cd greentube-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration:
# - Contentful Space ID
# - Contentful Access Token
# - Other API keys and configuration
```

4. Start the development server:
```bash
npm run dev
# or
npm start
```

## Configuration

The application uses environment variables for configuration. Key variables include:

- `CONTENTFUL_SPACE_ID`: Your Contentful space ID
- `CONTENTFUL_ACCESS_TOKEN`: Contentful delivery API token

## API Documentation

Once the server is running, you can access the API documentation at:
- Swagger UI: `http://localhost:3000/api-docs`
- OpenAPI spec: `http://localhost:3000/api/spec`

## Testing

Test the API endpoints using HTTPie:

```bash
# Example API tests
http GET localhost:3000/api/health
http GET localhost:3000/api/games
http POST localhost:3000/api/auth/login username=user password=pass
```

For automated testing, you can create HTTPie test scripts:
```bash
# Create test scripts in the tests/ directory
./tests/test-api.sh
```

## Development

### Code Style
- Follow established Node.js coding standards
- Use ESLint for code linting
- Write meaningful commit messages

### Working with Contentful
```bash
# Update content models
# Access Contentful web app to modify content types

# Fetch latest content
# Content is fetched via Contentful API in your routes
```

### Adding New Features
1. Create a new branch from `main`
2. Implement your feature with tests
3. Update documentation if needed
4. Submit a pull request

## Deployment

### Vercel Deployment

The application is configured for seamless deployment on Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Environment Variables on Vercel
Set the following environment variables in your Vercel dashboard:
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_MANAGEMENT_TOKEN`
- `JWT_SECRET`
- `NODE_ENV=production`

### Vercel Configuration
Ensure you have a `vercel.json` file in your project root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```


## License

This project is proprietary and confidential. All rights reserved.

Copyright (c) 2025 Benjamin Filip Šikač - All Rights Reserved
Unauthorized copying of this repository and its contents, via any medium is strictly prohibited.

## Support

For questions or issues, please contact the development team or create an issue in the repository.

---

**Note**: This is a backend service designed for gaming platform operations. Ensure proper security measures are in place when deploying to production environments.
