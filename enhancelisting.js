function geoBtnClicked() {
    const addrRows = Array.from(document.querySelectorAll(".c-details-tab__row.public-dealer")).map(elem => elem.querySelector(".c-details-tab__value")?.innerText?.trim());
    window.open("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(addrRows.join(", ")), "_blank");
}

;(function () {
    const descElem = document.querySelector(".c-details-tab__description");
    descElem.parentElement.removeChild(descElem);
    
    const newTabContentElem = document.createElement("div");
    newTabContentElem.classList.value = "data item content";
    newTabContentElem.style.display = "none";
    newTabContentElem.innerHTML = /*html*/`
        <div class="extra-details-tab-content">
            <div id="extra-details-desc-wrapper">
            </div>
        </div>
    `;

    const descWrapper = newTabContentElem.querySelector("#extra-details-desc-wrapper");
    descWrapper.innerText = descElem.textContent;

    const newTabElem = document.createElement("div");    
    newTabElem.classList.value = "data item title"; // active
    newTabElem.innerHTML = /*html*/`
    <style>
        button.button.secondary.open-maps-btn {
            cursor: pointer;
            position: relative;
            display: flex;
            padding: 0.5rem 1rem;
            align-items: center;
            justify-content: center;
            width: 25%;
        }
    </style>
    <a class="data switch" tabindex="-1" style="cursor: pointer">
        Extra informatie
    </a>`;

    const tabList = document.querySelector(".product.data.items");

    tabList.querySelectorAll(".data.item.title").forEach(elem => {
        elem.addEventListener("click", function() {
            const wasActive = newTabContentElem.style.display === "block";
            if (!wasActive) return;

            if(elem.hasAttribute("wasactive")) {
                tabList.querySelectorAll(".data.item.title").forEach(elem => {
                    elem.removeAttribute("wasactive");
                });
                elem.click();
            } else {
                tabList.querySelectorAll(".data.item.title").forEach(elem => {
                    elem.removeAttribute("wasactive");
                });
            }

            newTabElem.classList.remove("active");
            newTabContentElem.style.display = "none";
        });
    });

    newTabElem.addEventListener("click", function() {
        const wasActive = newTabContentElem.style.display === "block";
        if (wasActive) return;

        tabList.querySelectorAll(".data.item.title").forEach(elem => {
            if (elem.classList.contains("active")) {
                elem.setAttribute("wasactive", "wasactive");
            }
            elem.classList.remove("active");
            elem.setAttribute("aria-selected", "false");
            elem.setAttribute("aria-expanded", "false");
        });

        tabList.querySelectorAll(".data.item.content").forEach(elem => {
            elem.style.display = "none";
            elem.setAttribute("aria-hidden", "true");
        });

        newTabElem.classList.add("active");
        newTabContentElem.style.display =  "block";
    });

    tabList.appendChild(newTabElem);
    tabList.appendChild(newTabContentElem);

    const geoBtn = document.createElement("button");
    geoBtn.classList.value = "button secondary open-maps-btn";
    geoBtn.addEventListener("click", geoBtnClicked);
    geoBtn.style.boxSizing = "content-box";
    geoBtn.innerHTML = /*html*/`
        <img src="https://i.imgur.com/fYCjX7H.png" style="height: 2.5rem;">
        <span>Bekijk op kaart</span>`;

    const dealerInfoRows = document.querySelectorAll(".c-details-tab__row.public-dealer");
    dealerInfoRows[dealerInfoRows.length - 1].insertAdjacentElement("afterend", geoBtn);
})();
