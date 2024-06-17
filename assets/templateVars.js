const templateVars = {
    linkedin_link: "https://www.linkedin.com/in/oswago-victor-231a9720a/",
    github_link: "https://github.com/victoroswago",
    Your_Name: "Victor Oswago",

    // Page 1
    Portfolio_Heading: "Effective Altruism Facilitator",
    Portfolio_Subheading: "Budapest, Hungary",
    portfolio_link_1: "https://www.eahungary.com/intro-program",
    portfolio_image_1: "../images/effective-ultrism.png",
    portfolio_caption_heading_1: "October 2023-December 2023, Facilitator",
    portfolio_caption_subheading_1: "I facilitated the introductory course on the need to prioritize interventions that can help people (oranimals) the most https://forum.effectivealtruism.org/handbook",
    portfolio_certificate_1: "../images/effective-ultrism-cert.jpg",

    // Page 2
    Portfolio_Heading_2: "Research Assistant (June 2023-September 2023)",
    Portfolio_Subheading_2: "Budapest, Hungary",
    portfolio_link_2: "https://www.eahungary.com/intro-program",
    portfolio_image_2: "../images/3.jpg",
    portfolio_caption_heading_2: "Research Assistant",
    portfolio_caption_subheading_2: "Conducted research on the most effective interventions to help animals. https://forum.effectivealtruism.org/handbook",


    // Page 3
    Portfolio_Heading_3: "Research Assistant (June 2023-September 2023)",
    Portfolio_Subheading_3: "Budapest, Hungary",
    portfolio_link_3: "https://www.eahungary.com/intro-program",
    portfolio_image_3: "../images/3.jpg",
    portfolio_caption_heading_3: "Research Assistant",
    portfolio_caption_subheading_3: "Conducted research on the most effective interventions to help animals. https://forum.effectivealtruism.org/handbook",

    // Page 4
    Portfolio_Heading_4: "Research Assistant (June 2023-September 2023)",
    Portfolio_Subheading_4: "Budapest, Hungary",
    portfolio_link_4: "https://www.eahungary.com/intro-program",
    portfolio_image_4: "../images/3.jpg",
    portfolio_caption_heading_4: "Research Assistant",
    portfolio_caption_subheading_4: "Conducted research on the most effective interventions to help animals. https://forum.effectivealtruism.org/handbook",


};

function replacePlaceholders() {
    const htmlContent = document.body.innerHTML;
    let newHtmlContent = htmlContent;

    for (const key in templateVars) {
        const regex = new RegExp(`{{${key}}}`, "g");
        newHtmlContent = newHtmlContent.replace(regex, templateVars[key]);
    }

    document.body.innerHTML = newHtmlContent;
}

// Replace placeholders on page load
window.addEventListener('DOMContentLoaded', replacePlaceholders);

export { templateVars, replacePlaceholders };
