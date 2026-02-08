# 📊 Stocrates 2.0

> **Learn Markets Through Historical Patterns**

An educational AI-powered financial literacy platform that teaches beginners how markets react to real-world events using historical examples. Built with Next.js, Groq AI, and real-time market data.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

### 💬 AI Chat Interface
- **Conversational AI** powered by Groq (llama-3.1-70b)
- Ask questions about stocks, markets, and financial concepts
- Get educational responses with historical context

### 📈 Live Stock Data
- **Real-time stock prices** and charts
- **Interactive visualizations** with historical data
- **Company financials** and key metrics
- **Stock screeners** for discovery

### 📰 Multi-Source News Integration
- **NewsAPI** - 100+ news sources (Bloomberg, Reuters, WSJ, etc.)
- **Finnhub** - Financial news and earnings reports
- **Reddit Sentiment** - r/wallstreetbets and r/investing analysis
- **Automatic fallback** system for uninterrupted service
- **2-month date filtering** to ensure recent, relevant news

### 🎮 Educational Game Mode
- **Paper trading** with virtual "Stocrates Points"
- **Historical time travel** - Learn from past market events
- **Portfolio tracking** and performance analysis
- **Risk-free learning** environment

### 🔍 Reddit Sentiment Analysis
- **Automated scraping** from multiple subreddits
- **AI-powered analysis** using GPT-4 via Groq
- **Batch processing** for large datasets
- **Stock mention tracking** and sentiment scoring
- **Trend detection** and theme analysis

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **pnpm** 8+
- **Python** 3.8+ (for Reddit scraping with comments)
- **API Keys** (all free):
  - **Groq API Key** - Get it at [console.groq.com](https://console.groq.com)
  - **NewsAPI Key** - Get it at [newsapi.org](https://newsapi.org)
  - **Finnhub API Key** - Get it at [finnhub.io](https://finnhub.io)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/makhskham/Stocrates-2.0.git
   cd Stocrates-2.0
   ```

2. **Install dependencies**
   ```bash
   # Install Node dependencies
   pnpm install
   
   # If you encounter peer dependency issues, use:
   npm install @ai-sdk/groq@^1.0.4 --legacy-peer-deps
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Required - AI Chat (Get from: https://console.groq.com)
   GROQ_API_KEY=your_groq_api_key_here
   
   # Required - News Sources
   NEWS_API_KEY=your_newsapi_key_here      # Get from: https://newsapi.org
   FINNHUB_API_KEY=your_finnhub_api_key_here  # Get from: https://finnhub.io
   ```
   
   **Where to get API keys:**
   - **Groq**: Sign up at [console.groq.com](https://console.groq.com) → Create API Key
   - **NewsAPI**: Sign up at [newsapi.org](https://newsapi.org) → Get API Key (100 requests/day free)
   - **Finnhub**: Sign up at [finnhub.io](https://finnhub.io) → Dashboard → API Key (60 requests/minute free)

4. **Clean build (if needed)**
   ```bash
   # On Windows PowerShell
   Remove-Item -Recurse -Force .next
   
   # On Mac/Linux
   rm -rf .next
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage Guide

### Basic Chat Interaction

Simply type questions like:
- "What is the price of AAPL?"
- "Show me NVIDIA's stock chart"
- "Tell me about Tesla's recent news"
- "What are the top tech stocks?"

### Reddit Sentiment Analysis

#### Step 1: Scrape Reddit Data
```bash
# Option 1: Python scraper (RECOMMENDED - includes comments)
python scripts/scrape-reddit-with-comments.py

# Option 2: TypeScript scraper (faster, posts only)
pnpm run scrape:reddit
```

#### Step 2: Analyze with AI
```bash
pnpm run analyze:reddit
```

#### Step 3: View Results
```bash
pnpm run view:analysis
```

The analysis results are saved to `data/reddit-analysis.json` and automatically integrate with stock queries in the chat.

---

## ⚙️ Available Scripts

### Development
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

### Reddit Analysis
- `pnpm run scrape:reddit` - Scrape Reddit posts (TypeScript)
- `pnpm run scrape:reddit:comments` - Scrape with comments (Python)
- `pnpm run analyze:reddit` - Analyze scraped data with AI
- `pnpm run view:analysis` - View analysis results

### Testing
- `pnpm run test:reddit` - Test Reddit scraper
- `pnpm run test:news` - Test news APIs
- `pnpm run test:integration` - Test full integration
- `pnpm run test:fallback` - Test API fallback system

---

## 📁 Project Structure

```
stocrates-nextjs/
├── app/                      # Next.js app directory
│   ├── (chat)/              # Chat interface pages
│   ├── actions.ts           # Server actions
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── stocks/             # Stock-related components
│   ├── ui/                 # UI components (shadcn/ui)
│   └── chat.tsx            # Main chat component
├── lib/                     # Core library code
│   ├── chat/               # Chat AI logic
│   ├── game/               # Game mode logic
│   ├── news/               # News fetching & Reddit scraping
│   └── reddit/             # Reddit analysis tools
├── scripts/                 # Utility scripts
│   ├── scrape-reddit-multi.ts
│   ├── analyze-reddit-batches.ts
│   └── scrape-reddit-with-comments.py
├── data/                    # Data storage
│   ├── reddit-raw.json     # Scraped Reddit data
│   └── reddit-analysis.json # AI analysis results
└── public/                  # Static assets
```

---

## 🎯 Core Principles

### Educational First
- **Goal**: Teach concepts, not provide trading advice
- **Approach**: Every interaction is a learning opportunity
- **Outcome**: Users develop their own analytical skills

### Historical Pattern Analysis
- Analyze similar past events to show how markets reacted
- Transparent similarity scoring
- Learn from history without making predictions

### No Predictions or Recommendations
- ❌ Never make buy/sell recommendations
- ❌ Never predict future prices
- ✅ Show historical patterns and multiple outcomes
- ✅ Include disclaimers and encourage independent research

---

## 🔧 Configuration

### News API Fallback System

The app includes an intelligent fallback system:
1. **Primary**: NewsAPI (100 requests/day free tier)
2. **Secondary**: Finnhub (60 requests/minute free tier)
3. **Tertiary**: Reddit sentiment data
4. **Fallback**: Mock data (never fails completely)

### Reddit Scraping Options

**Option 1: TypeScript Scraper** (Fast, no auth)
```bash
pnpm run scrape:reddit
```
- Uses Reddit's public JSON API
- No authentication required
- Scrapes posts only (no comments)

**Option 2: Python Scraper** (Comprehensive, recommended)
```bash
python scripts/scrape-reddit-with-comments.py
```
- Scrapes posts AND all comments
- Better stock mention detection
- More accurate sentiment analysis

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Groq** - Lightning-fast AI inference
- **NewsAPI** - Comprehensive news aggregation
- **Finnhub** - Financial data and news
- **shadcn/ui** - Beautiful UI components
- **Vercel** - Deployment platform

---

## 💬 Support

For issues, questions, or suggestions:
- Open an issue on [GitHub](https://github.com/makhskham/Stocrates-2.0/issues)
- Check the documentation files in the repository

---

## ⚠️ Disclaimer

**Stocrates is an educational tool only.** It does not provide financial advice, investment recommendations, or trading signals. All information is for educational purposes. Always do your own research and consult with a qualified financial advisor before making investment decisions.

---

Made with ❤️ for financial education
