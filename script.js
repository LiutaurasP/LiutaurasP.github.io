
let partsByBudget = {
    1000: {
        cpu: ["Ryzen 5 5600", "https://example.com/ryzen5600"],
        gpu: ["RX 6700 XT", "https://example.com/rx6700xt"],
        ram: ["16GB DDR4", "https://example.com/16gbddr4"],
        storage: ["1TB SSD", "https://example.com/1tbssd"]
    },
    2000: {
        cpu: ["Ryzen 7 7700X", "https://example.com/ryzen7700x"],
        gpu: ["RX 7900 XT", "https://example.com/rx7900xt"],
        ram: ["32GB DDR5", "https://example.com/32gbddr5"],
        storage: ["2TB NVMe SSD", "https://example.com/2tbssd"]
    },
    4000: {
        cpu: ["Threadripper 7980X", "https://example.com/threadripper"],
        gpu: ["RTX 4090", "https://example.com/rtx4090"],
        ram: ["64GB DDR5 RGB", "https://example.com/64gbddr5"],
        storage: ["4TB Gen5 SSD", "https://example.com/4tbssd"]
    }
};

function setMode(mode) {
    document.getElementById("build-section").style.display = mode === 'build' ? 'block' : 'none';
    document.getElementById("upgrade-section").style.display = mode === 'upgrade' ? 'block' : 'none';
}

function updateBudgetLabel(value) {
    document.getElementById("budgetLabel").textContent = `€${value}`;
    document.getElementById("richText").textContent = value >= 4000 ? "💸 Oh so u rich huh?" : "";
}

function generateBuild() {
    let budget = parseInt(document.getElementById("budgetSlider").value);
    let key = budget >= 4000 ? 4000 : budget >= 2000 ? 2000 : 1000;
    let parts = partsByBudget[key];

    let resultHtml = `<ul>`;
    for (let [type, [label, link]] of Object.entries(parts)) {
        resultHtml += `<li>${type.toUpperCase()}: <a href="${link}" target="_blank">${label}</a></li>`;
    }
    resultHtml += `</ul>`;
    document.getElementById("buildResult").innerHTML = resultHtml;
}

function suggestUpgrade() {
    let selected = document.getElementById("partSelect").value;
    let upgrade = {
        cpu: ["Ryzen 9 7950X", "https://example.com/ryzen7950x"],
        gpu: ["RX 7900 XTX", "https://example.com/rx7900xtx"],
        ram: ["32GB DDR5", "https://example.com/32gbddr5"],
        storage: ["2TB NVMe", "https://example.com/2tbssd"]
    }[selected];
    document.getElementById("upgradeResult").innerHTML = `Recommended: <a href="${upgrade[1]}" target="_blank">${upgrade[0]}</a>`;
}
