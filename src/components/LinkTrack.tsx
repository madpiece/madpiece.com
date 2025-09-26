import posthog from 'posthog-js';

export function LinkTrack({ children, ...props }) {
    const handleClick = (captureEvent) => {
        posthog.capture(captureEvent, {
            link: props.href,
            page_url: window.location.href,
        });
    };

    return (
        <a
            href={props.href}
            class={props.class}
            onClick={() => handleClick(props.captureEvent)}
            target="_blank"
        >
            {children.props.value}
        </a>
    );
}
