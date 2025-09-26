import { useEffect } from 'preact/hooks';
import posthog from 'posthog-js';

export function PosthogProvider() {
    const isProd = process.env.NODE_ENV === 'production';

    useEffect(() => {
        posthog.init(import.meta.env.PUBLIC_POSTHOG_KEY, {
            api_host: import.meta.env.PUBLIC_POSTHOG_HOST,
            autocapture: isProd,
            capture_pageview: isProd,
            capture_pageleave: false,
        });
    }, []);

    return null;
}
