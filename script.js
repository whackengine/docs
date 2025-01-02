(() =>
{
    const colorModeSelector = document.querySelector("#color-mode-selector");

    colorModeSelector.addEventListener("change", e => {
        updateColorMode(colorModeSelector.value);
    });

    function updateColorMode(type)
    {
        switch (type)
        {
            case "system":
                const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.querySelector("html").setAttribute("data-dark", prefersDark.toString());
                break;
            case "light":
                document.querySelector("html").setAttribute("data-dark", "false");
                break;
            case "dark":
                document.querySelector("html").setAttribute("data-dark", "true");
                break;
        }
        localStorage.setItem("colorMode", type);
        if (colorModeSelector.value != type)
        {
            colorModeSelector.value = type;
        }
    }

    const initialColorMode = localStorage.getItem("colorMode");
    if (initialColorMode)
    {
        updateColorMode(initialColorMode);
    }
    else
    {
        updateColorMode("system");
    }
})();