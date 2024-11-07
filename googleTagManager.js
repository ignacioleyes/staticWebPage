export function loadGoogleTagManager(containerId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = import.meta.env.VITE_CD_TAG_MANAGER_SOURCE;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", containerId);
}