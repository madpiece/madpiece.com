import { useEffect } from 'preact/hooks';
import posthog from 'posthog-js';

export function PosthogProvider() {
    useEffect(() => {
        posthog.init(import.meta.env.PUBLIC_POSTHOG_KEY, {
            api_host: import.meta.env.PUBLIC_POSTHOG_HOST,
            autocapture: false,
            capture_pageview: false,
            capture_pageleave: false,
        });
    }, []);

    return null;
}
