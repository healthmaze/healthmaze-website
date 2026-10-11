# HealthMaze website

Everything the site needs is in this folder. It has no build step and costs $0 to host.

## Files you'll edit

- **data.js** has every clinic and food site. Each one is a block of text with a name, address, phone, hours, and a note in English (`note`) and Spanish (`note_es`). Change a line, save, and upload again. `"verify": true` adds a "please call first" warning to that listing.
- **app.js** has the weekly schedule (search for `SCHEDULE`), the team and bios (search for `TEAM`), the stroke checklist, the vaccine clinics, and the prescription programs.
- **index.html** has the page text. Every sentence appears twice, once with `data-l="en"` and once with `data-l="es"`. Edit both when you change something.
- **img/** has the photos. Keep the same file names when you replace one, or update the name in index.html and app.js.

## Launch on Cloudflare Pages (free)

1. Make a free account at dash.cloudflare.com using the HealthMaze Gmail, so the account doesn't belong to one officer.
2. Go to Workers & Pages, then Create, then Pages, then "Upload assets". Name the project `healthmaze` and drag in this whole folder.
3. You'll get a preview link like `healthmaze.pages.dev`. Send it to the team and test it on a phone.
4. Turn on analytics: in the project, open Metrics and enable Web Analytics. It's free and doesn't use cookies, so you don't need a cookie banner.
5. Test the contact form once. The first message sends a confirmation email to healthmaze23@gmail.com from FormSubmit. Click the link in it, and after that every message goes straight to the inbox.

## Move the domain (health-maze.org)

1. In Squarespace, open Domains and check where health-maze.org is registered and when it renews.
2. In the Cloudflare Pages project, open Custom domains and add `health-maze.org` and `www.health-maze.org`. Cloudflare shows the DNS records to add.
3. Easiest path: transfer the domain to Cloudflare Registrar, which charges the at-cost renewal price with no markup. Or keep it at Squarespace and only change the DNS records it shows you.
4. Wait until health-maze.org opens the new site (usually within a few hours), then cancel the Squarespace website plan. Cancel only the website plan, not the domain, unless you already transferred it.

Old links like health-maze.org/findaclinic keep working, because `_redirects` sends them to the new pages.

## Before launch, confirm

- The Thursday 6:30am event on the calendar (its full name was cut off, so it isn't listed yet).
- The weekly schedule in app.js (search SCHEDULE). It comes from your Google Calendar, where names were cut off ("Socks for the S...", "Sunrise Home..."). I filled them in as Socks for the Sole and Sunrise Homeless Navigation Center, so check both.
- Eliana's title. The old site said both "President" and "Volunteer Director".
- Listings marked `"verify": true` in data.js.
- The Spanish text, especially clinic notes and program names.


## Updating clinics and food sites (Google Sheet)

The clinic directory and food finder read the Google Sheet **HealthMaze Website Directory** (in Jenna's Drive) every time someone opens the site.
Edit the sheet and the site updates within about 5 minutes. The "How to edit" tab explains each column.

- The sheet must stay shared as "Anyone with the link: Viewer". Only people you add as editors can change it.
- If the sheet can't be reached, the site uses the backup list in `data.js`, so it never goes blank.
- The sheet's ID is set at the top of the "live directory" section in `app.js` (`SHEET_ID`). Change it there if you ever make a new sheet.
- New clinic photos go in `img/clinics/`; put the file name in the sheet's Photo column.
