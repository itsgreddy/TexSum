import contactPage from "../../pages/Contact/Contact.js"
import landingPage from "../../pages/Landing/Landing.js"

const MenuItems = [
    {
        title: "Home",
        url: {landingPage},
        className: "nav-links"
    },
    {
        title: "How Does it Work?",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Contact",
        url: {contactPage},
        className: "nav-links"
    },
    {
        title: "Service",
        url: "#",
        className: "nav-links"
    },

]

export default MenuItems;