"use client";

export default function Navbar() {
    const sectionMapping = {
        HOME: "home",
        "ABOUT ME": "aboutme",
        PROJECTS: "proyectos",
        CONTACT: "contactame"
    };

    const handleNavClick = (e) => {
        e.preventDefault();
        const navItem = e.currentTarget.textContent.trim().toUpperCase();
        const sectionId = sectionMapping[navItem];
        if (sectionId) {
            const sectionElement = document.getElementById(sectionId);
            sectionElement?.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    };

    return (
        <nav className="hidden md:block me-5">
            <ul className="flex space-x-8">
                {Object.keys(sectionMapping).map((label) => (
                    <li key={label}>
                        <a
                            onClick={handleNavClick}
                            className="text-gray-500 hover:text-[#6AD68B] transition-colors font-medium cursor-pointer"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
