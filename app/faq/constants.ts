export const faqs: { question: string; answer: string, link?: string }[] = [
  {
    question: "Where does this data come from?",
    answer:
      "This data comes entirely from official reports by the Orange County Health Care Agency (OCHCA). It was originally retrieved from their official dashboards (some of which are no longer available). You can find the source data tables here:",
      link: "https://services2.arcgis.com/LORzk2hk9xzHouw9/ArcGIS/rest/services",
  },
  {
    question: "How often is the data updated?",
    answer:
      "This website is currently an archive of the data reported by OCHCA and no longer fetches new data. Initially, during the COVID-19 outbreak, OCHCA updated their dashboards daily. As the pandemic progressed, reporting frequency decreased for some metrics, going from daily to weekly. Eventually, some metrics were no longer reported at all. This explains why some data sets have varying end dates. In December 2023, the OCHCA discontinued reporting all the key metrics used by this website."
  },
  {
    question: "Can you add more detailed breakdowns of 'X'?",
    answer:
      "Unfortunately, I can't provide more detailed breakdowns of data unless that information exists in the official reports from OCHCA. My goal is to ensure all data presented here comes directly from official county sources.",
  },
  {
    question: "Are you affiliated with any Orange County agency?",
    answer: "No, I am not. I'm a resident who developed this website as a personal project.",
  },

  {
    question: "Can I share/post this on Facebook/Reddit/etc.?",
    answer: "Absolutely! I encourage you to share this website.",
  },
  {
    question: "What language/framework is used to build the site?",
    answer: "This website is built using Next.js, which leverages TypeScript and Tailwind CSS components. The data visualizations rely on Chart.js, Leaflet, and AG Grid React. For more technical details, you can visit the project on Github.",
    link: "https://github.com/anthony-df-nguyen/occovid-next",
  },
];
