
function updateBudgetLabel(value) {
    document.getElementById('budgetLabel').textContent = `€${value}`;
    const richComment = document.getElementById('richComment');
    richComment.textContent = value >= 4000 ? "💸 Oh so u rich huh?" : "";
    generateRecommendations(value);
}

function generateRecommendations(budget) {
    const recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = budget < 700 ? "Entry-level: Ryzen 5 5500, GTX 1650" :
                              budget < 1200 ? "Mid-range: Ryzen 5 7600, RTX 4060" :
                              budget < 2000 ? "High-end: Ryzen 7 7700X, RX 7800 XT" :
                              "Enthusiast: Ryzen 9 7950X3D, RTX 4090";
}

function showCurrentBuild() {
    const currentBuild = document.getElementById('currentBuild');
    currentBuild.innerHTML = `
        <h3>Current PC:</h3>
        <ul>
            <li>CPU: Ryzen 7 7700</li>
            <li>GPU: RX 7800 XT</li>
            <li>RAM: 32GB DDR5</li>
            <li>SSD: 1TB NVMe</li>
            <li>PSU: 650W Gold</li>
        </ul>
    `;
    currentBuild.classList.remove('hidden');
    showUpgradeSuggestions();
}

function showUpgradeSuggestions() {
    const suggestions = document.getElementById('upgradeSuggestions');
    suggestions.innerHTML = `
        <h3>Suggested Upgrades:</h3>
        <ul>
            <li>CPU → Ryzen 9 7950X3D (⚡ +20% Performance)</li>
            <li>GPU → RTX 4090 (🚀 +40% Performance)</li>
            <li>RAM → 64GB DDR5 (🧠 +10% Efficiency)</li>
            <li>SSD → 2TB Gen4 NVMe (📁 +5% Speed)</li>
        </ul>
    `;
    suggestions.classList.remove('hidden');
}
