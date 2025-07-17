import { contentfulClient } from "./service";

const express = require('express');
const app = express();

app.get("/api/news", async (req, res) => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "newsArticle",
      limit: 5,
      include: 10,
    });

    const newsArticles = entries.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      excerpt: item.fields.excerpt,
      publishDate: item.fields.publishDate,
      slug: item.fields.slug,
      featuredImageUrl: item.fields.featuredImage && item.fields.featuredImage.fields.file ?
        `https:${item.fields.featuredImage.fields.file.url}` :
        null,
      featuredImageAlt: item.fields.featuredImage ?
        item.fields.featuredImage.fields.description || item.fields.featuredImage.fields.title :
        null,
    }));

    // Send JSON response using Express's res.json()
    res.json(newsArticles);
  } catch (error /*: any */) {
    console.error("Error fetching news from Contentful:", error.message);
    // Send error response with a 500 status code
    res.status(500).json({ error: "Failed to fetch news", details: error.message });
  }
});

app.get("/api/product-showcase", async (req, res) => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "productShowcaseItem",
      include: 10,
    });

    const showcaseItems = entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      showcaseImageUrl: item.fields.showcaseImage && item.fields.showcaseImage.fields.file ?
        `https:${item.fields.showcaseImage.fields.file.url}` :
        null,
      showcaseImageAlt: item.fields.showcaseImage ?
        item.fields.showcaseImage.fields.description || item.fields.showcaseImage.fields.title :
        null,
      hoverImageUrl: item.fields.hoverImage && item.fields.hoverImage.fields.file ?
        `https:${item.fields.hoverImage.fields.file.url}` :
        null,
      hoverImageAlt: item.fields.hoverImage ?
        item.fields.hoverImage.fields.description || item.fields.hoverImage.fields.title :
        null,
      link: item.fields.link || null,
    }));

    res.json(showcaseItems);
  } catch (error /*: any */) {
    console.error("Error fetching product showcase items from Contentful:", error.message);
    res.status(500).json({
      error: "Failed to fetch product showcase items",
      details: error.message,
    });
  }
});

app.get("/api/partners", async (req, res) => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "partner",
      include: 10,
    });

    const partners = entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      logo: item.fields.logo && item.fields.logo.fields.file ?
        `https:${item.fields.logo.fields.file.url}` :
        null,
      websiteUrl: item.fields.websiteUrl || null,
    }));

    res.json(partners);
  } catch (error /*: any */) {
    console.error("Error fetching partners from Contentful:", error.message);
    res.status(500).json({ error: "Failed to fetch partners", details: error.message });
  }
});

// To use this code:
// If you are using it as a serverless function (e.g., on Vercel), you would typically export the app:
module.exports = app;

// If you are running it as a local Express server:
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Express server running on port ${PORT}`);
// });
