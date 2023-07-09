import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'computers';
  const apiKey = 'BvG/LGD0YdY36McY1M44Pw==InxnNam2IBLLF7Cc';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'x-api-key': apiKey,
              'Content-Type': 'application/json',
            },
          },
        );

        if (!response.ok) {
          throw new Error('API request failed');
        }
        const data = await response.json();
        // Check the structure of the data object
        if (data && data[0] && data[0].quote) {
          setQuote(data);
        } else {
          throw new Error('Invalid response data');
        }
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote">
      {quote.map((q) => {
        const { quote, author } = q;
        return (
          <div key={q.id}>
            <p>{quote}</p>
            <h4>{author}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Quote;
