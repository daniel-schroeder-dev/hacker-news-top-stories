import React, { useState, useEffect } from 'react';

import LoadingIcon from './components/LoadingIcon/LoadingIcon';
import Card from './components/Card/Card';

import './App.css';

function App() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {

    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const itemBaseUrl = 'https://hacker-news.firebaseio.com/v0/item/';

    const topStoriesResponse = await fetch(url);
    let topStoriesData = await topStoriesResponse.json();
    topStoriesData = topStoriesData.slice(0, 20).map(storyID => fetch(`${itemBaseUrl}${storyID}.json?print=pretty`));

    const responses = await Promise.all(topStoriesData)
    const data = await Promise.all(responses.map(response => response.json()));

    return data;
  };

  useEffect(() => {
    fetchData()
      .then(articles => {
        setTimeout(() => {
          setArticles(articles);
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <main className="app">
      { isLoading && <LoadingIcon /> }
      <div className="app__articles-container" style={{
        opacity: isLoading ? 0 : 1,
      }} >
      <h1>Top 20 Articles from Hacker News</h1>
      {articles.length ? articles.map((article, i) => (<Card key={article.id} by={article.by} title={article.title} number={i + 1} url={article.url} />)) : null}
      </div>
    </main>
  );
}

export default App;
