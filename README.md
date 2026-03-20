# altify-cleantext-api
# Altify CleanText

Altify CleanText is a lightweight SaaS-style web tool that transforms messy AI-generated text into clean, readable, and usable content.

It is designed to help users quickly refine raw AI outputs into structured formats suitable for blogs, summaries, and social media.

---

## 🚀 Features

* ✨ AI-powered text formatting
* 📝 Multiple output modes:

  * Blog
  * Summary
  * Social
  * LinkedIn-style formatting
* 📋 One-click copy to clipboard
* 🔢 Live character counter
* 📊 Usage tracking with free limit (5 uses)
* 🔓 Stripe-powered unlock for unlimited access
* 💡 Clean, responsive UI

---

## 🧠 How It Works

1. User pastes AI-generated text into the input field
2. Selects a formatting mode
3. Frontend sends a request to `/api/format`
4. Backend processes the text using OpenAI
5. Cleaned output is returned and displayed instantly

---

## 🏗️ Tech Stack

**Frontend**

* HTML
* CSS (custom styling)
* Vanilla JavaScript

**Backend**

* Vercel Serverless Functions (`/api/format`)

**AI Processing**

* OpenAI API (`gpt-4o-mini`)

**Payments**

* Stripe (payment link + client-side unlock)

---

## 🔐 Architecture Notes

* API keys are stored securely using environment variables
* All OpenAI requests are handled server-side
* Frontend communicates via same-domain fetch (`/api/format`)
* No sensitive credentials are exposed in the browser

---

## 💳 Monetization Model

* Free tier: 5 formatting uses
* Paid tier: Unlimited usage
* Unlock handled via Stripe redirect (`?paid=true`) and localStorage

> Note: Current implementation uses client-side access control (MVP stage)

---

## ⚠️ Limitations (MVP)

* No backend user authentication
* Paid status stored in localStorage (not fully secure)
* No database or persistent user tracking

---

## 🌐 Deployment

Deployed on Vercel using:

* Static frontend hosting
* Serverless API routes

---

## 🎯 Purpose

This project was built as a simple, fast, and practical tool for improving AI-generated content while exploring:

* SaaS-style product structure
* API integration
* Monetization via Stripe
* Clean UI/UX design

---

## 📌 Future Improvements

* Server-side payment verification (Stripe webhooks)
* User accounts / authentication
* Usage tracking on backend
* Saved history of formatted outputs
* Expanded formatting modes

---

## 🛠️ Status

✅ Functional MVP
🚧 Open for iteration and improvement

---

Built as a focused, minimal SaaS tool to solve a real problem: making AI-generated text actually usable.
