# TypeScript Learning Project

This is a modern TypeScript project setup for learning TypeScript from scratch.

## Project Structure

```
.
├── src/           # Source files
├── dist/          # Compiled JavaScript files
├── package.json   # Project configuration and dependencies
├── tsconfig.json  # TypeScript configuration
├── Dockerfile     # Docker configuration
├── docker-compose.yml # Docker Compose configuration
└── README.md      # This file
```

## Getting Started

### Option 1: Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Development:
   ```bash
   npm run dev    # Run in development mode with hot-reload
   ```

3. Build:
   ```bash
   npm run build  # Compile TypeScript to JavaScript
   ```

4. Run:
   ```bash
   npm start      # Run the compiled JavaScript
   ```

### Option 2: Docker Development

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. To run in detached mode:
   ```bash
   docker-compose up -d
   ```

3. To stop the containers:
   ```bash
   docker-compose down
   ```

## Available Scripts

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled JavaScript
- `npm run watch`: Watch for changes and compile
- `npm run clean`: Remove compiled files

## Features

- Modern TypeScript configuration
- Development server with hot-reload
- Source maps for debugging
- Strict type checking
- ES2020 features support
- Docker support for consistent development environments
