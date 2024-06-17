const templateVars = {
    linkedin_link: "https://www.linkedin.com/in/oswago-victor-231a9720a/",
    github_link: "https://github.com/victoroswago",
    Your_Name: "Victor Oswago",

    // Page 1
    Portfolio_Heading: "Effective Altruism Facilitator",
    Portfolio_Subheading: "Budapest, Hungary",
    portfolio_link_1: "https://www.eahungary.com/intro-program",
    portfolio_image_1: "images/effective-ultrism.png",
    // portfolio_image_1: "https://sums-data-public.sums.su/YU/groups/thumbnails/61/1569850472.png",
    portfolio_caption_heading_1: "October 2023-December 2023, Facilitator",
    portfolio_caption_subheading_1: "I facilitated the introductory course on the need to prioritize interventions that can help people (oranimals) the most https://forum.effectivealtruism.org/handbook",
    portfolio_certificate_1: "images/effective-ultrism-cert.jpg",

    // Page 2
    Portfolio_Heading_2: "Research Assistant (June 2023-September 2023)",
    Portfolio_Subheading_2: "Budapest, Hungary",
    portfolio_link_2: "https://www.eahungary.com/intro-program",
    portfolio_image_2: "images/Mentor1.jpg",
    portfolio_image_2_1: "images/Mentor2.jpg",
    portfolio_image_2_2: "images/Mentor3.jpg",
    portfolio_caption_heading_2: "Mentor",
    portfolio_caption_subheading_2: "Assisting international students in integrating into academic life throughout the academic year. Organizing collaboration events and student activities and participating in cultural and touristic programme. Participating in community building activities organized for the members of the network",


    // Page 3
    Portfolio_Heading_3: "Research Assistant (June 2023-September 2023)",
    Portfolio_Subheading_3: "Budapest, Hungary",
    portfolio_link_3: "https://www.facebook.com/share/p/GJss6SnNZvFGf88B/",
    portfolio_image_3: "https://scontent.fbud6-4.fna.fbcdn.net/v/t39.30808-6/273724452_4787281691326346_3651077088287620724_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H3umwSHZ60MQ7kNvgHJEDaH&_nc_ht=scontent.fbud6-4.fna&oh=00_AYA27uc2TYMpSildcbdm98GRp-v-JVXnzLp5BpxyuP4zgg&oe=66763BE2",
    portfolio_caption_heading_3: "Student Ambassador",
    portfolio_caption_subheading_3: " Writing papers, opinion pieces, and blogs, contributing to common publications relating to current EST campaigns, conducting interviews, making vlogs. Promoting EST via social media and other channels in Hungary, at my university and building a national network of enthusiastic student contributors and academic advisors. Organizing or participating in events relating to current political issues. Updating the EST International Officers by detailing the activities that I organize and submit monthly reports on this.",

    // Page 5
    Portfolio_Heading_4: "Research Assistant (June 2023-September 2023)",
    Portfolio_Subheading_4: "Budapest, Hungary",
    portfolio_link_5: "https://www.eahungary.com/intro-program",
    portfolio_image_5: "../images/3.jpg",
    portfolio_caption_heading_5: "Research Assistant",
    portfolio_caption_subheading_5: "Conducted research on the most effective interventions to help animals. https://forum.effectivealtruism.org/handbook",

    // Page 4
    Portfolio_Heading_4: "Camp America",
    Portfolio_Subheading_4: "United States",
    portfolio_link_4: "https://www.eahungary.com/intro-program",
    portfolio_image_4: "images/camp.jpg",
    portfolio_image_4_1: "images/camp2.jpg",
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
