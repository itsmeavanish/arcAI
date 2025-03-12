import React from "react";
import { useParams } from "react-router-dom";
import articles from "../Data/articles";

const ArticlePage = ({article}) => {
  console.log(article)


  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-3xl">
        Article not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 pt-12 md:p-12 lg:p-16 xl:p-20">
      {/* Hero Section */}
      <div
        className="mt-10 relative w-full h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">{article.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        {/* Author Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <img
            src={article.doctorImage}
            alt={article.doctor}
            className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
          />
          <div>
            <p className="text-3xl mt-10 font-bold text-gray-900">{article.doctor}</p>
            <p className="text-gray-600 text-lg">{article.date}</p>
          </div>
        </div>

        {/* Article Content */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Content</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">{article.content}</p>

        {/* Related Images Section */}
        {article.extraImages && article.extraImages.length > 0 && (
          <div className="mt-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Related Images</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {article.extraImages.map((img, index) => (
                <img key={index} src={img} alt="Article related" className="rounded-lg shadow-lg" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;