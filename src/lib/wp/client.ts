const WP_BASE = "https://lbcoding.com/wp-json/wp/v2";

type FetchJsonOptions = RequestInit & {
    next?: {
        revalidate?: number;
        tags?: string[];
    };
};

export async function fetchJson<T>(path: string, options: FetchJsonOptions = {}): Promise<T> {
    const url = `${WP_BASE}${path}`;

    const res = await fetch(url, {
        ...options,
        headers: {
            "Accept": "application/json",
            ...(options.headers || {}),
        },
    });

    if(!res.ok) {
        const text = await res.text().catch(() => "Unable to read response body");
        throw new Error(`WP fetch failed  ${res.status} ${res.statusText} for ${url}\n${text}`);
    }

    return res.json() as Promise<T>;
}