import React, { useEffect, useState } from 'react';
import { quotes } from '../data/quotes';

export default function QuoteText() {
    const [quote, setQuote] = useState<typeof quotes[0] | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    useEffect(() => {
        if (quote) {
            // Small delay to ensure the placeholder is seen before transition if needed, 
            // or just to trigger the animation frame.
            const timer = setTimeout(() => setIsVisible(true), 50);
            return () => clearTimeout(timer);
        }
    }, [quote]);

    if (!quote) {
        // Placeholder boxes (Skeleton)
        return (
            <div className="flex flex-col gap-4">
                <div className="h-12 md:h-16 w-3/4 bg-coffee-bean/5 animate-pulse" />
                <div className="h-6 md:h-8 w-1/4 bg-coffee-bean/5 animate-pulse delay-75" />
            </div>
        );
    }

    return (
        <div className={`flex flex-col gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h1 className="text-4xl md:text-6xl font-black font-archivo text-coffee-bean tracking-tighter">
                {quote.text}
            </h1>
            <p className="text-md md:text-xl font-bold font-archivo text-coffee-bean/80">
                - {quote.reference}
            </p>
        </div>
    );
}
