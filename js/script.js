
function toggleMode() {
    document.getElementById('suggestionList').innerHTML = "<p>🔄 Generating full build suggestions...</p>";
}

function toggleUpgrade() {
    document.getElementById('suggestionList').innerHTML = "<p>🔧 Suggesting upgrade paths for your current build...</p>";
}

function applyFilters() {
    const budget = document.getElementById("budget").value;
    const usage = document.getElementById("usage").value;

    let suggestions = `<p>Based on your budget (€${budget}) and usage (${usage}), we recommend:</p><ul>`;

    if (usage === "gaming") {
        suggestions += "<li>CPU: AMD Ryzen 5 7600</li><li>GPU: RTX 4060 Ti</li><li>RAM: 16GB DDR5</li>";
    } else if (usage === "editing") {
        suggestions += "<li>CPU: Intel i7-12700K</li><li>GPU: RTX 4070</li><li>RAM: 32GB DDR4</li>";
    } else if (usage === "browsing") {
        suggestions += "<li>CPU: Ryzen 3 3200G</li><li>RAM: 8GB DDR4</li>";
    } else if (usage === "ai") {
        suggestions += "<li>CPU: AMD Ryzen 9 7900</li><li>GPU: RTX 4080</li><li>RAM: 64GB DDR5</li>";
    }

    suggestions += "</ul>";
    document.getElementById("suggestionList").innerHTML = suggestions;
}
