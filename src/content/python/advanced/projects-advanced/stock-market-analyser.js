export const stockMarketAnalyserContent = {
  id: 'stock-market-analyser',
  title: 'Building a Stock Market Analyser (Step by Step)',
  duration: '40 min',
  objectives: [
    'Fetch stock data',
    'Calculate indicators',
    'Visualize results',
    'Build a simple analysis tool'
  ],
  sections: [
    {
      type: 'text',
      title: 'Step 1: Install Required Packages',
      content: `You need pandas, matplotlib, and yfinance.\nInstall them with:\n\n    pip install pandas matplotlib yfinance` 
    },
    {
      type: 'code',
      title: 'Step 2: Download Stock Data',
      code: `import yfinance as yf\ndata = yf.download('AAPL', period='1y')\nprint(data.head())`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This downloads one year of Apple stock data. You can change 'AAPL' to any stock symbol.`
    },
    {
      type: 'code',
      title: 'Step 3: Calculate a Moving Average',
      code: `import pandas as pd\ndata['MA_20'] = data['Close'].rolling(window=20).mean()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `A moving average smooths out price data. Here, we use a 20-day moving average.`
    },
    {
      type: 'code',
      title: 'Step 4: Plot the Data',
      code: `import matplotlib.pyplot as plt\nplt.plot(data['Close'], label='Close')\nplt.plot(data['MA_20'], label='MA 20')\nplt.legend()\nplt.show()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This shows a chart of the closing price and the moving average.`
    },
    {
      type: 'code',
      title: 'Step 5: Add More Indicators',
      code: `# Calculate Relative Strength Index (RSI)\ndef calculate_rsi(series, window=14):\n    delta = series.diff()\n    gain = delta.where(delta > 0, 0).rolling(window=window).mean()\n    loss = -delta.where(delta < 0, 0).rolling(window=window).mean()\n    rs = gain / loss\n    return 100 - (100 / (1 + rs))\ndata['RSI'] = calculate_rsi(data['Close'])`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `RSI is a popular indicator for spotting overbought or oversold conditions.`
    },
    {
      type: 'code',
      title: 'Step 6: Show RSI on a Chart',
      code: `plt.figure(figsize=(10,5))\nplt.plot(data['RSI'])\nplt.axhline(70, color='r', linestyle='--')\nplt.axhline(30, color='g', linestyle='--')\nplt.title('RSI')\nplt.show()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This chart shows the RSI. Values above 70 are often considered overbought, below 30 oversold.`
    },
    {
      type: 'text',
      title: 'Step 7: Build a Simple Analysis Function',
      content: `You can wrap your analysis in a function to reuse it for different stocks.`
    },
    {
      type: 'code',
      title: 'Example Analysis Function',
      code: `def analyze_stock(symbol):\n    data = yf.download(symbol, period='1y')\n    data['MA_20'] = data['Close'].rolling(window=20).mean()\n    data['RSI'] = calculate_rsi(data['Close'])\n    print(f"Latest price: \${data['Close'].iloc[-1]:.2f}")\n    print(f"Latest RSI: \${data['RSI'].iloc[-1]:.2f}")\n    plt.plot(data['Close'], label='Close')\n    plt.plot(data['MA_20'], label='MA 20')\n    plt.legend()\n    plt.show()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This function downloads data, calculates indicators, prints results, and shows a chart. Try it with different symbols!`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Always check your data for missing values\n- Use functions to organize your code\n- Add comments to explain your steps\n- Try more indicators as you learn\n- Focus on programming, not trading advice`
    }
  ]
};