"use client";

import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Buttons() {
    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contactame");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    };

    return (
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <InteractiveHoverButton onClick={handleContactClick}>Contactame</InteractiveHoverButton>

            <AnimatedSubscribeButton>
                <span>Descargar CV</span>
                <span>Descargado</span>
            </AnimatedSubscribeButton>
        </div>

    )
}
