const gtmSource =
    import.meta.env.VITE_GOOGLE_TAG_MANAGER_SOURCE +
    import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID;
const iframe = document.createElement("iframe");
iframe.src = gtmSource;
iframe.height = 0;
iframe.width = 0;
iframe.style.display = "none";
iframe.style.visibility = "hidden";
document.body.appendChild(iframe);
