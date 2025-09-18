import posthog from 'posthog-js';

export function EmailSpan({ children, ...props }) {
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
