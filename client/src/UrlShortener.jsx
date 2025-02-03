import React, { useState } from "react";
import axios from "axios";

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [expiresAt, setExpiresAt] = useState(null);
  const [error, setError] = useState("");
    const baseUrl = "https://shortened-url.onrender.com"
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/shorten`, {
        longUrl,
      });
      setShortUrl(`${baseUrl}/api/${response.data.shortUrl}`);
      setExpiresAt(new Date(response.data.expiresAt)); // Convert to Date object
      setError("");
    } catch (err) {
      setError("Failed to shorten the URL. Please try again.");
      console.error(err);
    }
  };

  // Format the expiration date as DD/MM/YYYY
  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <main className="grid min-h-screen w-full place-items-center bg-gray-900">
        <div className="absolute left-1/2 top-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-400"></div>

        <div className="absolute m-4 left-1/2 top-1/2 h-fit w-80 -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300">
          <div className="flex justify-end">
            <div className="h-4 w-4 rounded-full bg-gray-900"></div>
          </div>

          <header className="text-center text-xl font-extrabold text-gray-600">
            {expiresAt && (
              <p>Link expires on: {formatDate(expiresAt)}</p>
            )}
          </header>

          <div>
            <p className="text-center text-5xl font-extrabold text-gray-900">
              Shorten a long link
            </p>
            <p className="text-center text-2xl font-extrabold text-[#FE5401]">
              No credit card required.
            </p>
          </div>

          <footer className="mb-10 flex justify-center items-center flex-col">
            <form onSubmit={handleSubmit}>
              <input
                className="input-link w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FE5401] mb-4"
                type="text"
                placeholder="Enter long URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
              />
              {error && (
                <p className="text-red-500 text-sm text-center mb-4">{error}</p>
              )}
              <button
                className="flex items-baseline rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308] hover:cursor-pointer"
                type="submit"
              >
                <span>Get your link</span>
              </button>
            </form>

            {shortUrl && (
              <div className="my-2 text-center">
                <p className="font-bold">Shortened URL:</p>
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {shortUrl}
                </a>
              </div>
            )}
          </footer>
        </div>
      </main>
    </>
  );
};

export default UrlShortener;