# OCCOVID
A free, mobile-first COVID-19 dashboard for Orange County, CA — built and maintained solo from April 2020 through the pandemic.

**[[occovid.com](https://occovid.com)](https://occovid.vercel.app/)** | Built with Next.js, React, Tailwind CSS

## Why I Built This
  
At the beginning of the pandemic, Orange County did not provide a comprehensive or mobile-friendly dashboard. The county posted daily numbers but no aggregate view showing how the pandemic was evolving. I started manually tracking the numbers in a spreadsheet and publishing static dashboards in Google Slides, sharing them on Reddit and Twitter with local communities.
  
Within a week, the dashboards were getting consistent daily traffic — including visits from county officials. It became clear that Google Slides wouldn't scale as the data grew, and the experience on mobile was poor. So I built a real site.

## Achievements
- **800,000+ total page views** with ~50,000 returning users at peak
- Featured on local radio stations and school interviews
- Received multiple unsolicited offers to place ads on the site, which I declined to keep it free for the community
  

## Key Features
- Time-based visualizations for each key COVID metric tracked by the county
- Map-based views displaying case rates, deaths, and vaccination data by city and zip code
- Push notification system allowing users to subscribe to alerts when new daily numbers were published
- Fully responsive, mobile-first design
- Archived data ensuring the dashboard remains accessible after live data sources went offline  

## How It Was Built
I launched the first version within two weeks of starting the project, beginning with only HTML and CSS and picking up JavaScript along the way. As the site grew in complexity and user base, I rebuilt it from the ground up in React in under a week after self-teaching the framework. It was later refactored to Next.js and Tailwind CSS as I adopted those technologies.

During the site's active lifecycle, I integrated a third-party API to pull live county data daily and built a pipeline to archive that data over time.


## Community Engagement
Throughout the project I used Twitter and Reddit to keep local residents informed about new data and site features. That same community became an active feedback loop — filing bug reports, suggesting new data sources, and requesting specific visualizations. The push notification system came directly from user requests as the daily audience grew.

  

## Tech Stack
  Next.js, React, Tailwind CSS, JavaScript, Leaflet.js, Chart.JS, REST API integration
