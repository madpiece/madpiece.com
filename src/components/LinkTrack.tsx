import posthog from 'posthog-js';
import type { ComponentChildren } from 'preact';

type LinkTrackProps = {
    href: string;
    captureEvent: string;
    class?: string;
    children?: ComponentChildren;
};

export function LinkTrack({
    children,
    href,
    captureEvent,
    class: className,
}: LinkTrackProps) {
    const handleClick = () => {
        posthog.capture(captureEvent, {
            link: href,
            page_url: window.location.href,
        });
    };

    return (
        <a
            href={href}
            class={className}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
