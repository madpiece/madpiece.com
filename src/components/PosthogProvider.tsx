import { useEffect } from 'preact/hooks';
import posthog from 'posthog-js';

export function PosthogProvider() {
    const isProd = process.env.NODE_ENV === 'production';

    useEffect(() => {
        const hasWindow = typeof window !== 'undefined';
        const posthogKey = import.meta.env.PUBLIC_POSTHOG_KEY;
        if (!hasWindow || !posthogKey) {
            return;
        }

        const proxyApiHost = '/ph-events';
        const proxyUiHost = '/ph-static';

        const origin = hasWindow
            ? window.location.origin
            : import.meta.env.SITE;
        const apiHost = `${origin}${proxyApiHost}`;
        const uiHost = `${origin}${proxyUiHost}`;

        posthog.init(posthogKey, {
            api_host: apiHost,
            ui_host: uiHost,
            autocapture: isProd,
            capture_pageview: isProd,
            capture_pageleave: false,
            request_batching: true,
            debug: !isProd,
            // Avoid loading external dependencies/CDN when blocked
            disable_external_dependency_loading: true,
            // Avoid the initial decide/flags request to reduce external calls
            advanced_disable_flags: true,
        });
    }, []);

    return null;
}
