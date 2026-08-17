import posthog from 'posthog-js';
import type { ComponentChildren } from 'preact';

type EmailTrackProps = {
    email: string;
    children?: ComponentChildren;
};

export function EmailTrack({ children, email }: EmailTrackProps) {
    const handleCopy = () => {
        posthog.capture('email_copied', {
            email,
            page_url: window.location.href,
        });
    };

    return <span onCopy={handleCopy}>{children}</span>;
}
