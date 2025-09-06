# YouTube Comment Analyzer Backend

A clean and efficient backend API for analyzing YouTube video comments using AI categorization and keyword analysis.

## 🚀 Recent Improvements

- **Cleaned Structure**: Removed duplicate files (`backend-only.ts`, duplicate services)
- **Main Entry Point**: Centralized entry point in `src/index.ts`
- **Better Error Handling**: Comprehensive error middleware with graceful shutdown
- **Health Check**: Added `/health` endpoint for monitoring
- **Type Safety**: Fixed all TypeScript compilation errors
- **Simplified Scripts**: Streamlined npm scripts for easier development

## Features

- **YouTube Data Extraction**: Fetches video metadata and comments using YouTube Data API v3
- **AI-Powered Analysis**: Categorizes comments into questions, jokes, discussions, positive/negative feedback, etc.
- **Sentiment Analysis**: Determines positive, negative, or neutral sentiment for each comment
- **Fast Search**: Implements Trie data structure for efficient comment searching
- **Real-time Statistics**: Provides comprehensive analytics and insights
- **RESTful API**: Well-structured endpoints for frontend integration

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- YouTube Data API v3 key
- OpenRouter API key (optional, for enhanced AI analysis)

## Setup

1. **Clone and navigate to the project**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your API keys:
   ```env
   PORT=8000
   YOUTUBE_API_KEY=your_youtube_api_key_here
   OPENROUTER_API_KEY=your_openrouter_api_key_here  # Optional
   NODE_ENV=development
   ```

4. **Get YouTube API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable YouTube Data API v3
   - Create credentials (API Key)
   - Add the key to your `.env` file

5. **Get OpenRouter API Key** (Optional):
   - Visit [OpenRouter](https://openrouter.ai/)
   - Sign up and get your API key
   - Add to `.env` for enhanced AI analysis

## Development

### Start the development server:
```bash
npm run dev
```

### Start backend-only (without frontend):
```bash
npm run dev:backend-only
```

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

## API Endpoints

### Analyze Video
```http
POST /api/analyze
Content-Type: application/json

{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

### Search Comments
```http
POST /api/search
Content-Type: application/json

{
  "videoId": "VIDEO_ID",
  "query": "search term",
  "category": "question|joke|discussion|positive|negative|neutral|spam",
  "sortBy": "newest|oldest|likes|replies|confidence",
  "page": 1,
  "limit": 10
}
```

### Get Video Analysis
```http
GET /api/video/{videoId}/analysis
```

### Get Questions Only
```http
GET /api/video/{videoId}/questions?page=1&limit=10&sortBy=newest
```

## Comment Categories

The system automatically categorizes comments into:

- **Question**: Requests for information or help
- **Joke**: Humorous content, memes, sarcasm
- **Discussion**: Thoughtful commentary or analysis
- **Positive**: Praise, appreciation, positive feedback
- **Negative**: Criticism, complaints, negative feedback
- **Neutral**: Factual statements, neutral observations
- **Spam**: Promotional or irrelevant content

## Architecture

- **Express.js**: Web framework
- **TypeScript**: Type-safe development
- **Zod**: Runtime type validation
- **Drizzle ORM**: Database schema and validation
- **In-Memory Storage**: Fast data access (easily replaceable with database)
- **Trie Data Structure**: Efficient text searching
- **AI Integration**: OpenRouter for advanced analysis

## Error Handling

The application includes comprehensive error handling for:
- Invalid YouTube URLs
- API rate limits
- Network failures
- Missing or invalid API keys
- Comment fetch failures

## Performance Features

- **Efficient Comment Fetching**: Handles pagination and rate limiting
- **Trie-based Search**: O(m) search complexity where m is query length
- **Batch Processing**: AI analysis in batches to optimize API usage
- **Caching**: In-memory storage for fast repeated access

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
