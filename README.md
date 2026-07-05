# HXP-Site

## HXP Philippines Cebu - Trip Signup Microsite

**Note:** This is a demo form to replicate a trip interest form. It is not an official HXP registration page.

- This is a microsite for scenario #2 of the HXP Tech Application.
- A single trip signup page for prospective Builders with detailed information about the trip. 
- **GitHub:** [https://github.com/tpuls16/hxp-site](https://github.com/tpuls16/hxp-site)
- **Live Site:** Coming Soon
- **Sign-up data:** Google Sheet -> Signups

## What's included

- Trip landing page (hero, trip details, itinerary, and call-to-action)
- Signup form with key Builder information and client-side input validation
- Layout designed for mobile



## Tech Choices

- **HTML/CSS/JS** - One webpage, one submission form, easy to manage
- **Google Sheets backend** - Aligns with how HXP already uses Sheets for forms.



## Planned next (before deployment)

- POST to endpoint
- Confirmation state after submission
- Google sheets database
- Live site deployment (Netlify)



## If I had more time

- Stronger security / encryption for PII in production
- Add stronger input validation and cover more input edge cases
- Separate trip information, itinerary, and sign-up form into individual pages
- Automated testing to replace time-consuming manual tests
- Move Google Script URL to a private hidden variable

**Why Google Sheets?** HXP already shared a response form with me using Google Sheets. It is also simple and fast, although something with more encryption and security would be used in a production site.

## Local Setup

1. Clone the repo:
  ```bash
    git clone https://github.com/tpuls16/hxp-site.git
    cd hxp-site
  ```
2. Open the site:

- **VS Code:** Right-click `index.html` -> Open with Live Server (if installed)
- **Terminal:** `npx serve .` then open the URL it prints

1. Test the form:

- Submit empty form -> error messages should appear
- Fill input fields with invalid data -> error messages should appear
- Fill input fields with valid data -> no error messgaes should be visible



## Form input fields


| Field                   | Required | Notes                                                  |
| ----------------------- | -------- | ------------------------------------------------------ |
| Full name               | Yes      | Must include first and last name                       |
| Phone                   | Yes      | Must be 10 digit phone number, numbers only, no spaces |
| Email                   | Yes      | Must be standard email format                          |
| Emergency contact name  | Yes      | Must include first and last name                       |
| Emergency contact phone | Yes      | Must be 10 digit phone number, numbers only, no spaces |
| Dietary restrictions    | No       | Select all checkboxes that apply                       |
| Builders 'Why'          | Yes      | Why do you want to come? 30 character minimum          |




## Project File Structure

```
hxp-site/
├── index.html
├── css/styles.css
├── js/validation.js
├── js/submit.js
└── README.md
```



## How sign-ups will work

`index.html form -> validation.js -> submit.js -> Google Apps Script -> Google Sheet`