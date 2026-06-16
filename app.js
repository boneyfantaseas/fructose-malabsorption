// Internationalization
const i18n = {
    de: {
        title: "Fructosegehalt von Lebensmitteln",
        subtitle: "Vergleich verschiedener Quellen zum Fructosegehalt",
        selectAll: "Alle auswählen",
        deselectAll: "Auswahl aufheben",
        exportPdf: "PDF exportieren",
        infoTitle: "Hinweise",
        info1: "Die Werte in dieser Tabelle stammen aus verschiedenen Quellen und können sich unterscheiden. Unterschiede entstehen durch verschiedene Messmethoden, Reifegrade und Sorten der Lebensmittel.",
        info2: 'Einträge mit abweichenden Werten zwischen den Quellen sind <span class="conflict-marker">gelb markiert</span>.',
        info3: "Alle Angaben in Gramm pro 100g Lebensmittel, sofern nicht anders angegeben.",
        filterTitle: "Filter",
        allCategories: "Alle Kategorien",
        catObst: "Obst",
        catGemuese: "Gemüse",
        catBeeren: "Beeren",
        catTrocken: "Trockenfrüchte",
        catGetraenke: "Getränke",
        catSonstiges: "Sonstiges",
        conflictsOnly: "Nur abweichende Werte anzeigen",
        searchPlaceholder: "Suche...",
        thFood: "Lebensmittel",
        thCategory: "Kategorie",
        thFructose: "Fructose (g/100g)",
        thGlucose: "Glucose (g/100g)",
        thRatio: "F/G Verhältnis",
        thSources: "Quellen",
        thConflict: "Abweichung",
        sourcesTitle: "Quellen",
        conflictsTitle: "Abweichungen zwischen Quellen",
        footer: "Die Angaben dienen nur zur Information und ersetzen keine medizinische Beratung. Bei Fructoseintoleranz wenden Sie sich an eine qualifizierte Ernährungsberatung.",
        pdfTitle: "Fructosegehalt von Lebensmitteln",
        pdfGenerated: "Erstellt am",
        yes: "Ja",
        no: "Nein",
        categories: { obst: "Obst", gemuese: "Gemüse", beeren: "Beeren", trockenfruechte: "Trockenfrüchte", getraenke: "Getränke", sonstiges: "Sonstiges" }
    },
    en: {
        title: "Fructose Content of Foods",
        subtitle: "Comparison of multiple sources on fructose content",
        selectAll: "Select all",
        deselectAll: "Deselect all",
        exportPdf: "Export PDF",
        infoTitle: "Notes",
        info1: "Values in this table come from different sources and may vary. Differences arise from measurement methods, ripeness, and variety of foods.",
        info2: 'Entries with differing values between sources are <span class="conflict-marker">highlighted in yellow</span>.',
        info3: "All values in grams per 100g of food, unless otherwise noted.",
        filterTitle: "Filter",
        allCategories: "All categories",
        catObst: "Fruit",
        catGemuese: "Vegetables",
        catBeeren: "Berries",
        catTrocken: "Dried fruits",
        catGetraenke: "Beverages",
        catSonstiges: "Other",
        conflictsOnly: "Show only conflicting values",
        searchPlaceholder: "Search...",
        thFood: "Food",
        thCategory: "Category",
        thFructose: "Fructose (g/100g)",
        thGlucose: "Glucose (g/100g)",
        thRatio: "F/G Ratio",
        thSources: "Sources",
        thConflict: "Conflict",
        sourcesTitle: "Sources",
        conflictsTitle: "Conflicts between sources",
        footer: "This information is for reference only and does not replace medical advice. For fructose intolerance, consult a qualified nutritionist.",
        pdfTitle: "Fructose Content of Foods",
        pdfGenerated: "Generated on",
        yes: "Yes",
        no: "No",
        categories: { obst: "Fruit", gemuese: "Vegetables", beeren: "Berries", trockenfruechte: "Dried fruits", getraenke: "Beverages", sonstiges: "Other" }
    }
};

let currentLang = "de";

function setLang(lang) {
    currentLang = lang;
    document.getElementById("btn-de").classList.toggle("active", lang === "de");
    document.getElementById("btn-en").classList.toggle("active", lang === "en");
    document.documentElement.lang = lang;
    updateUI();
    renderTable();
    renderConflicts();
}

function t(key) {
    return i18n[currentLang][key] || key;
}

function updateUI() {
    document.getElementById("title").textContent = t("title");
    document.getElementById("subtitle").textContent = t("subtitle");
    document.getElementById("btn-select-all").textContent = t("selectAll");
    document.getElementById("btn-deselect-all").textContent = t("deselectAll");
    document.getElementById("btn-export").textContent = t("exportPdf");
    document.getElementById("info-title").textContent = t("infoTitle");
    document.getElementById("info-text-1").textContent = t("info1");
    document.getElementById("info-text-2").innerHTML = t("info2");
    document.getElementById("info-text-3").textContent = t("info3");
    document.getElementById("filter-title").textContent = t("filterTitle");
    document.getElementById("opt-all").textContent = t("allCategories");
    document.getElementById("opt-obst").textContent = t("catObst");
    document.getElementById("opt-gemuese").textContent = t("catGemuese");
    document.getElementById("opt-beeren").textContent = t("catBeeren");
    document.getElementById("opt-trocken").textContent = t("catTrocken");
    document.getElementById("opt-getraenke").textContent = t("catGetraenke");
    document.getElementById("opt-sonstiges").textContent = t("catSonstiges");
    document.getElementById("label-conflicts").textContent = t("conflictsOnly");
    document.getElementById("search-input").placeholder = t("searchPlaceholder");
    document.getElementById("th-food").textContent = t("thFood");
    document.getElementById("th-category").textContent = t("thCategory");
    document.getElementById("th-fructose").textContent = t("thFructose");
    document.getElementById("th-glucose").textContent = t("thGlucose");
    document.getElementById("th-ratio").textContent = t("thRatio");
    document.getElementById("th-sources").textContent = t("thSources");
    document.getElementById("th-conflict").textContent = t("thConflict");
    document.getElementById("sources-title").textContent = t("sourcesTitle");
    document.getElementById("conflicts-title").textContent = t("conflictsTitle");
    document.getElementById("footer-text").textContent = t("footer");
}

function hasConflict(item) {
    const fValues = Object.values(item.values).map(v => v.f).filter(v => v !== null && v !== undefined);
    if (fValues.length < 2) return false;
    const min = Math.min(...fValues);
    const max = Math.max(...fValues);
    return (max - min) > 1.0;
}

function getBestValue(item) {
    const sources = Object.keys(item.values).map(Number);
    let bestSource = sources[0];
    let bestYear = SOURCES[sources[0]].year || 0;
    for (const s of sources) {
        const year = SOURCES[s].year || 0;
        if (year > bestYear) {
            bestYear = year;
            bestSource = s;
        }
    }
    return { source: bestSource, ...item.values[bestSource] };
}

function getFructoseRange(item) {
    const fValues = Object.values(item.values).map(v => v.f).filter(v => v !== null && v !== undefined);
    if (fValues.length === 0) return "-";
    const min = Math.min(...fValues);
    const max = Math.max(...fValues);
    if (min === max || (max - min) < 0.1) return min.toFixed(1);
    return min.toFixed(1) + " – " + max.toFixed(1);
}

function getGlucoseRange(item) {
    const gValues = Object.values(item.values).map(v => v.g).filter(v => v !== null && v !== undefined);
    if (gValues.length === 0) return "-";
    const min = Math.min(...gValues);
    const max = Math.max(...gValues);
    if (min === max || (max - min) < 0.1) return min.toFixed(1);
    return min.toFixed(1) + " – " + max.toFixed(1);
}

function getRatioRange(item) {
    const rValues = Object.values(item.values).map(v => v.r).filter(v => v !== null && v !== undefined);
    if (rValues.length === 0) return "-";
    const min = Math.min(...rValues);
    const max = Math.max(...rValues);
    if (min === max || (max - min) < 0.05) return min.toFixed(2);
    return min.toFixed(2) + " – " + max.toFixed(2);
}

function renderTable() {
    const tbody = document.getElementById("table-body");
    const categoryFilter = document.getElementById("category-filter").value;
    const conflictOnly = document.getElementById("conflict-only").checked;
    const search = document.getElementById("search-input").value.toLowerCase();

    tbody.innerHTML = "";

    FOOD_DATA.forEach((item, idx) => {
        const name = item.name[currentLang] || item.name.de;
        const conflict = hasConflict(item);

        if (categoryFilter !== "all" && item.category !== categoryFilter) return;
        if (conflictOnly && !conflict) return;
        if (search && !name.toLowerCase().includes(search) && !item.name.de.toLowerCase().includes(search)) return;

        const sourceIds = Object.keys(item.values).map(Number);
        const sourceBadges = sourceIds.map(id =>
            '<span class="source-badge" title="' + SOURCES[id].name + '">[' + id + ']</span>'
        ).join("");

        const catLabel = t("categories")[item.category] || item.category;

        const tr = document.createElement("tr");
        if (conflict) tr.classList.add("conflict");
        tr.innerHTML = `
            <td><input type="checkbox" class="row-cb" data-idx="${idx}"></td>
            <td>${name}</td>
            <td>${catLabel}</td>
            <td>${getFructoseRange(item)}</td>
            <td>${getGlucoseRange(item)}</td>
            <td>${getRatioRange(item)}</td>
            <td><span class="source-badges">${sourceBadges}</span></td>
            <td>${conflict ? '<span class="conflict-icon">⚠️</span>' : '✓'}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderConflicts() {
    const container = document.getElementById("conflicts-detail");
    const conflicts = FOOD_DATA.filter(hasConflict);

    if (conflicts.length === 0) {
        container.innerHTML = `<p>${currentLang === "de" ? "Keine wesentlichen Abweichungen gefunden." : "No significant conflicts found."}</p>`;
        return;
    }

    container.innerHTML = conflicts.map(item => {
        const name = item.name[currentLang] || item.name.de;
        const valuesHtml = Object.entries(item.values).map(([srcId, v]) => {
            return `<div class="conflict-value"><span class="source-name">[${srcId}] ${SOURCES[srcId].name}:</span> Fructose: ${v.f !== null ? v.f + "g" : "–"}${v.g !== null ? ", Glucose: " + v.g + "g" : ""}${v.r !== null ? ", F/G: " + v.r : ""}</div>`;
        }).join("");
        return `<div class="conflict-item"><h3>${name}</h3><div class="conflict-values">${valuesHtml}</div></div>`;
    }).join("");
}

function filterTable() {
    renderTable();
}

function selectAll() {
    document.querySelectorAll(".row-cb").forEach(cb => cb.checked = true);
    document.getElementById("select-all-cb").checked = true;
}

function deselectAll() {
    document.querySelectorAll(".row-cb").forEach(cb => cb.checked = false);
    document.getElementById("select-all-cb").checked = false;
}

function toggleAll(masterCb) {
    document.querySelectorAll(".row-cb").forEach(cb => cb.checked = masterCb.checked);
}

function exportPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

    const selectedIndices = [];
    document.querySelectorAll(".row-cb:checked").forEach(cb => {
        selectedIndices.push(parseInt(cb.dataset.idx));
    });

    const dataToExport = selectedIndices.length > 0
        ? selectedIndices.map(i => FOOD_DATA[i])
        : FOOD_DATA;

    doc.setFontSize(16);
    doc.text(t("pdfTitle"), 14, 15);
    doc.setFontSize(9);
    doc.text(t("pdfGenerated") + ": " + new Date().toLocaleDateString(currentLang === "de" ? "de-DE" : "en-US"), 14, 22);

    const headers = [[t("thFood"), t("thCategory"), t("thFructose"), t("thGlucose"), t("thRatio"), t("thSources"), t("thConflict")]];
    const rows = dataToExport.map(item => {
        const name = item.name[currentLang] || item.name.de;
        const catLabel = t("categories")[item.category] || item.category;
        const sourceIds = Object.keys(item.values).map(Number).join(", ");
        const conflict = hasConflict(item) ? t("yes") : t("no");
        return [name, catLabel, getFructoseRange(item), getGlucoseRange(item), getRatioRange(item), sourceIds, conflict];
    });

    doc.autoTable({
        head: headers,
        body: rows,
        startY: 27,
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [44, 122, 63] },
        alternateRowStyles: { fillColor: [245, 250, 245] },
        didParseCell: function(data) {
            if (data.section === "body" && data.column.index === 6 && data.cell.raw === t("yes")) {
                data.cell.styles.fillColor = [255, 243, 205];
                data.cell.styles.textColor = [230, 81, 0];
            }
        }
    });

    // Add sources page
    doc.addPage();
    doc.setFontSize(14);
    doc.text(t("sourcesTitle"), 14, 15);
    doc.setFontSize(9);
    let y = 25;
    Object.entries(SOURCES).forEach(([id, src]) => {
        doc.text("[" + id + "] " + src.name + " - " + src.url, 14, y);
        y += 6;
    });

    doc.save("fructosegehalt-lebensmittel.pdf");
}

// Initialize
document.addEventListener("DOMContentLoaded", function() {
    renderTable();
    renderConflicts();
});
