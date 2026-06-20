import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Github from './Github/Github.jsx'
import Home from "./Home/Home.jsx";
import User from './User/User.jsx';

async function getGithubInfo() {
    const response = await fetch("https://api.github.com/users/Dwivedy2");
    return response.json();
}

export {
    About,
    Contact,
    Github,
    Home,
    User,
    getGithubInfo
}

