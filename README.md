# Xenon Search

A modern search engine for developers to get precise and relevant results. Built with Next.js and Bun runtime.

## Features

- 🌓 Dark/Light theme with system preference sync
- 🎯 Multi-source search targeting
- 🚀 Fast and responsive interface
- 🔍 Advanced search settings
- 💻 Developer-focused results

## Tech Stack

- Next.js 15.1.7
- React 19
- Bun Runtime
- TailwindCSS
- TypeScript
- Docker

## Getting Started

### Prerequisites

- Bun >= 1.0.0
- Node.js >= 18.x

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/xenon-search.git
cd xenon-search
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Deployment

### Using Docker Compose (Recommended)

1. Build and start the container:
```bash
docker-compose up -d
```

2. Stop the container:
```bash
docker-compose down
```

### Manual Docker Build

1. Build the image:
```bash
docker build -t xenon-search .
```

2. Run the container:
```bash
docker run -p 3000:3000 xenon-search
```

### Docker Configuration

The project includes three Docker-related files:

- `Dockerfile`: Multi-stage build configuration using Bun runtime
- `docker-compose.yml`: Container orchestration with volume mounts
- `.dockerignore`: Optimizes build context by excluding unnecessary files

#### Environment Variables

- `NODE_ENV`: Set to 'production' by default
- Additional environment variables can be added in docker-compose.yml

#### Volumes

The docker-compose setup includes three volumes:
- Application code: `.:/app`
- Node modules: `/app/node_modules`
- Next.js build: `/app/.next`

## Contributing

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes:
```bash
git commit -m 'feat: add amazing feature'
```

4. Push to the branch:
```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

### Development with Docker

For contributors using Docker:

1. Start development environment:
```bash
docker-compose up
```

2. Make your changes - the volumes are configured for hot reloading

3. Test your changes:
```bash
docker-compose exec app bun test
```

4. Build production image:
```bash
docker-compose -f docker-compose.yml build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the excellent framework
- Vercel for deployment platform inspiration
- All contributors who participate in this project