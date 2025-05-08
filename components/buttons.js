"use client";

import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Buttons() {
    return (
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <InteractiveHoverButton>Contactame</InteractiveHoverButton>

            <AnimatedSubscribeButton>
                <span>Descargar CV</span>
                <span>Descargado</span>
            </AnimatedSubscribeButton>
        </div>

    )
}
