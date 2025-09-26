import posthog from 'posthog-js';

export function EmailTrack({ children, ...props }) {
    const handleCopy = () => {
        posthog.capture('email_copied', {
            email: children.props.value,
            page_url: window.location.href,
        });
    };

    return (
        <span onCopy={handleCopy} {...props}>
            {children}
        </span>
    );
}
