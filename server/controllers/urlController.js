import shortid from 'shortid';
import Url from '../models/urlModel.js';
import { isUri } from 'valid-url';

// Shorten URL
export const shortenUrl =  async (req, res) => {
  const { longUrl } = req.body;

  if (!isUri(longUrl)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  try {
    let url = await Url.findOne({ longUrl });

    if (url) {
      return res.json(url);
    }

    const shortUrl = shortid.generate();
    url = new Url({ longUrl, shortUrl });
    await url.save();

    res.json(url);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

// Redirect to original URL
export const redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortened_id });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json({ error: 'URL not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}