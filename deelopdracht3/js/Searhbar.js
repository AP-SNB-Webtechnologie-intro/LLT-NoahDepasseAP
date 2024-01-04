// JS code voor een functionerende zoekbalk functie doormiddel van het doorzoeken van alle HTML pagina's die aanwezig zijn
document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("searchInput");
            const searchResults = document.getElementById("searchResults");

            searchInput.addEventListener("input", function () {
                const searchTerm = searchInput.value.toLowerCase();
                searchResults.innerHTML = "";

                if (searchTerm.length > 0) {
                    // Lijst van HTML pagina's
                    const pages = ['index.html', 'overzicht.html', 'top-restos.html', 'provincie_toppers.html', 'anders-dan-anders.html', 'weetjes.html', 'contact.html'];
                    // Zoeken doorheen de HTML pagina's
                    pages.forEach(page => {
                        $.ajax({
                            url: page,
                            type: 'GET',
                            dataType: 'html',
                            success: function (data) {
                                const documentContent = $('<div />').html(data);
                                const headings = documentContent.find('h1, h2');

                                headings.each(function (index) {
                                    const textContent = $(this).text().toLowerCase();
                                    if (textContent.includes(searchTerm)) {
                                        createSearchResult(textContent, page + '#heading' + index);
                                    }
                                });
                            }
                        });
                    });

                    // Zoekresultaten weergeven
                    searchResults.style.display = "block";
                } else {
                    // Indien er geen resultaten zijn --> geen weergave
                    searchResults.style.display = "none";
                }
            });
            // Dit stuk zorgt ervoor dat op basis van wat er ingetypt zal worden, een zoekresultaat zal worden aangemaakt indien deze terug te vinden is in bepaalde delen van de pagina's
            function createSearchResult(textContent, href) {
                const li = document.createElement("li");
                li.textContent = textContent;
                li.addEventListener("click", function () {
                    if (typeof href === 'number') {
                        // scrollen naar juiste section (werkt momenteel niet)
                        const targetSection = document.querySelectorAll('h1, h2')[href];
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    } else if (typeof href === 'string') {
                        // Navigeer naar andere pagina
                        window.location.href = href;
                    }
                });
                // Plaatst de resultaten in de resultaten balk
                searchResults.appendChild(li);
            }
        });

       