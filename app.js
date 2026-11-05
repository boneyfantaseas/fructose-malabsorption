// === INTERNATIONALIZATION ===
const i18n = {
    de: {
        title: "Fructosegehalt von Lebensmitteln",
        subtitle: "Vergleich verschiedener Quellen zum Fructosegehalt",
        selectAll: "Alle auswählen",
        deselectAll: "Auswahl aufheben",
        exportPdf: "PDF exportieren",
        infoTitle: "Hinweise",
        info1: "Die Werte in dieser Tabelle stammen aus verschiedenen Quellen und können sich unterscheiden. Unterschiede entstehen durch verschiedene Messmethoden, Reifegrade und Sorten.",
        info2: 'Einträge mit abweichenden Werten zwischen den Quellen sind <span class="conflict-marker">gelb markiert</span>.',
        info3: "Alle Angaben in Gramm pro 100g Lebensmittel, sofern nicht anders angegeben.",
        info4: 'G/F Verhältnis = Glucose geteilt durch Fructose. Je höher, desto besser verträglich; Werte <span class="ratio-good">über 1</span> sind grün markiert.',
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
        thRatio: "G/F Verhältnis",
        thSorbit: "Sorbit (g/100g)",
        thSources: "Quellen",
        thConflict: "Abweichung",
        sourcesTitle: "Quellen",
        conflictsTitle: "Abweichungen zwischen Quellen",
        conflictsMethodNote: "Methodik: Als relevante Abweichung gilt eine Differenz von mehr als 1g Fructose pro 100g zwischen den Quellen. Ein Eintrag wird nur als abweichend markiert, wenn weniger als 75% der Quellen übereinstimmen (d.h. bei 4 Quellen müssen mindestens 2 deutlich abweichen). Einzelne Ausreißer unter den Quellen werden somit nicht als Abweichung gewertet, da sie auf Messungenauigkeiten oder andere Sorten zurückzuführen sein können. Neuere Quellen werden bei der Darstellung bevorzugt.",
        footer: "Die Angaben dienen nur zur Information und ersetzen keine medizinische Beratung.",
        pdfTitle: "Fructosegehalt von Lebensmitteln",
        pdfGenerated: "Erstellt am",
        yes: "Ja",
        no: "Nein",
        exportDialogTitle: "PDF-Export Optionen",
        exportColumns: "Spalten auswählen:",
        colFood: "Lebensmittel",
        colCategory: "Kategorie",
        colFructose: "Fructose",
        colGlucose: "Glucose",
        colRatio: "G/F Verhältnis",
        colSorbit: "Sorbit",
        colSources: "Quellen",
        colConflict: "Abweichung",
        exportBtn: "PDF erzeugen",
        cancelBtn: "Abbrechen",
        sortLabel: "Sortierung:",
        sortNone: "Keine (nach Kategorie)",
        sortAsc: "Aufsteigend",
        sortDesc: "Absteigend",
        categories: { obst:"Obst", gemuese:"Gemüse", beeren:"Beeren", trockenfruechte:"Trockenfrüchte", getraenke:"Getränke", sonstiges:"Sonstiges" }
    },
    en: {
        title: "Fructose Content of Foods",
        subtitle: "Comparison of multiple sources on fructose content",
        selectAll: "Select all",
        deselectAll: "Deselect all",
        exportPdf: "Export PDF",
        infoTitle: "Notes",
        info1: "Values in this table come from different sources and may vary due to measurement methods, ripeness, and variety of foods.",
        info2: 'Entries with differing values between sources are <span class="conflict-marker">highlighted in yellow</span>.',
        info3: "All values in grams per 100g of food, unless otherwise noted.",
        info4: 'G/F ratio = glucose divided by fructose. Higher is better tolerated; values <span class="ratio-good">above 1</span> are marked green.',
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
        thRatio: "G/F Ratio",
        thSorbit: "Sorbitol (g/100g)",
        thSources: "Sources",
        thConflict: "Conflict",
        sourcesTitle: "Sources",
        conflictsTitle: "Conflicts between sources",
        conflictsMethodNote: "Methodology: A relevant conflict is defined as a difference of more than 1g fructose per 100g between sources. An entry is only flagged as conflicting if less than 75% of sources agree (i.e., with 4 sources, at least 2 must significantly differ). Single outliers among sources are not flagged, as they may be due to measurement inaccuracies or different cultivars. Newer sources are preferred in the presentation.",
        footer: "This information is for reference only and does not replace medical advice.",
        pdfTitle: "Fructose Content of Foods",
        pdfGenerated: "Generated on",
        yes: "Yes",
        no: "No",
        exportDialogTitle: "PDF Export Options",
        exportColumns: "Select columns:",
        colFood: "Food",
        colCategory: "Category",
        colFructose: "Fructose",
        colGlucose: "Glucose",
        colRatio: "G/F Ratio",
        colSorbit: "Sorbitol",
        colSources: "Sources",
        colConflict: "Conflict",
        exportBtn: "Generate PDF",
        cancelBtn: "Cancel",
        sortLabel: "Sort by:",
        sortNone: "None (by category)",
        sortAsc: "Ascending",
        sortDesc: "Descending",
        categories: { obst:"Fruit", gemuese:"Vegetables", beeren:"Berries", trockenfruechte:"Dried fruits", getraenke:"Beverages", sonstiges:"Other" }
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

function t(key) { return i18n[currentLang][key] || key; }

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
    document.getElementById("info-text-4").innerHTML = t("info4");
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
    document.getElementById("th-sorbit").textContent = t("thSorbit");
    document.getElementById("th-sources").textContent = t("thSources");
    document.getElementById("th-conflict").textContent = t("thConflict");
    document.getElementById("sources-title").textContent = t("sourcesTitle");
    document.getElementById("conflicts-title").textContent = t("conflictsTitle");
    document.getElementById("conflicts-method").textContent = t("conflictsMethodNote");
    document.getElementById("footer-text").textContent = t("footer");
}

// === CONFLICT DETECTION ===
// A conflict exists when fructose values differ by >1g AND less than 75% of sources agree
function hasConflict(item) {
    const fValues = Object.values(item.values).map(v => v.f).filter(v => v !== null && v !== undefined);
    if (fValues.length < 2) return false;
    const min = Math.min(...fValues);
    const max = Math.max(...fValues);
    if ((max - min) <= 1.0) return false;
    // Check 75% rule: count how many values are within 1g of the median
    const sorted = [...fValues].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    const agreeCount = fValues.filter(v => Math.abs(v - median) <= 1.0).length;
    const agreePercent = agreeCount / fValues.length;
    // Only flag as conflict if LESS than 75% agree
    return agreePercent < 0.75;
}

function getSorbitRange(item) {
    const sValues = Object.values(item.values).map(v => v.s).filter(v => v !== null && v !== undefined);
    if (sValues.length === 0) return "-";
    const min = Math.min(...sValues);
    const max = Math.max(...sValues);
    if (min === max || (max - min) < 0.1) return min.toFixed(1);
    return min.toFixed(1) + " – " + max.toFixed(1);
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

// G/F ratio per source, calculated only from the glucose and fructose values the
// source itself provides (no source publishes G/F; the published F/G is not reused)
function getGfValues(item) {
    return Object.values(item.values).map(v => {
        if (v.f !== null && v.f !== undefined && v.f > 0 && v.g !== null && v.g !== undefined) return v.g / v.f;
        return null;
    }).filter(v => v !== null);
}

function getRatioBounds(item) {
    const gfValues = getGfValues(item);
    if (gfValues.length === 0) return null;
    const min = Math.min(...gfValues);
    const max = Math.max(...gfValues);
    if (min === max || (max - min) < 0.05) return [min];
    return [min, max];
}

function getRatioRange(item) {
    const bounds = getRatioBounds(item);
    if (!bounds) return "-";
    return bounds.map(v => v.toFixed(2)).join(" – ");
}

function getRatioRangeHtml(item) {
    const bounds = getRatioBounds(item);
    if (!bounds) return "-";
    return bounds.map(v => {
        const text = v.toFixed(2);
        return parseFloat(text) > 1 ? `<span class="ratio-good">${text}</span>` : text;
    }).join(" – ");
}

// === TABLE RENDERING ===
const CATEGORY_ORDER = ["obst", "beeren", "trockenfruechte", "gemuese", "getraenke", "sonstiges"];

// Table sort state
let tableSortField = null; // null = default category grouping
let tableSortDir = "asc";

function sortTable(field) {
    if (tableSortField === field) {
        // Toggle direction, or reset on third click
        if (tableSortDir === "asc") {
            tableSortDir = "desc";
        } else {
            tableSortField = null;
            tableSortDir = "asc";
        }
    } else {
        tableSortField = field;
        tableSortDir = "asc";
    }
    updateSortIcons();
    renderTable();
}

function updateSortIcons() {
    const fields = ["food", "category", "fructose", "glucose", "ratio", "sorbit"];
    fields.forEach(f => {
        const icon = document.getElementById("sort-icon-" + f);
        if (icon) {
            if (tableSortField === f) {
                icon.textContent = tableSortDir === "asc" ? "▲" : "▼";
            } else {
                icon.textContent = "";
            }
        }
    });
}

// Items without a value (-Infinity) always go to the end, regardless of direction
function compareSortValues(valA, valB, dir) {
    if (typeof valA === "string" && typeof valB === "string") {
        const cmp = valA.localeCompare(valB, currentLang);
        return dir === "desc" ? -cmp : cmp;
    }
    if (valA === -Infinity && valB === -Infinity) return 0;
    if (valA === -Infinity) return 1;
    if (valB === -Infinity) return -1;
    return dir === "desc" ? valB - valA : valA - valB;
}

function getSortedData() {
    const indexed = FOOD_DATA.map((item, idx) => ({ item, idx }));

    if (tableSortField) {
        // Sort by selected column
        indexed.sort((a, b) => {
            const valA = getSortValue(a.item, tableSortField);
            const valB = getSortValue(b.item, tableSortField);
            return compareSortValues(valA, valB, tableSortDir);
        });
    } else {
        // Default: sort by category order then alphabetically
        indexed.sort((a, b) => {
            const catA = CATEGORY_ORDER.indexOf(a.item.category);
            const catB = CATEGORY_ORDER.indexOf(b.item.category);
            if (catA !== catB) return catA - catB;
            const nameA = (a.item.name[currentLang] || a.item.name.de).toLowerCase();
            const nameB = (b.item.name[currentLang] || b.item.name.de).toLowerCase();
            return nameA.localeCompare(nameB, currentLang);
        });
    }
    return indexed;
}

function renderTable() {
    const tbody = document.getElementById("table-body");
    const categoryFilter = document.getElementById("category-filter").value;
    const conflictOnly = document.getElementById("conflict-only").checked;
    const search = document.getElementById("search-input").value.toLowerCase();
    tbody.innerHTML = "";

    const sorted = getSortedData();
    let lastCategory = null;

    sorted.forEach(({ item, idx }) => {
        const name = item.name[currentLang] || item.name.de;
        const conflict = hasConflict(item);
        if (categoryFilter !== "all" && item.category !== categoryFilter) return;
        if (conflictOnly && !conflict) return;
        if (search && !name.toLowerCase().includes(search) && !item.name.de.toLowerCase().includes(search)) return;

        // Category group header (only when using default sort)
        if (!tableSortField && item.category !== lastCategory) {
            lastCategory = item.category;
            const catLabel = t("categories")[item.category] || item.category;
            const headerTr = document.createElement("tr");
            headerTr.classList.add("category-header");
            headerTr.innerHTML = `<td colspan="9" class="category-header-cell">${catLabel}</td>`;
            tbody.appendChild(headerTr);
        }

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
            <td>${getGlucoseRange(item)}</td>
            <td>${getFructoseRange(item)}</td>
            <td>${getSorbitRange(item)}</td>
            <td>${getRatioRangeHtml(item)}</td>
            <td><span class="source-badges">${sourceBadges}</span></td>
            <td>${conflict ? '<span class="conflict-icon">⚠️</span>' : '✓'}</td>
        `;
        tbody.appendChild(tr);
    });
}

// === CONFLICTS SECTION ===
function renderConflicts() {
    const container = document.getElementById("conflicts-detail");
    const conflicts = FOOD_DATA.filter(hasConflict);

    if (conflicts.length === 0) {
        container.innerHTML = `<p>${currentLang === "de" ? "Keine relevanten Abweichungen nach der 75%-Regel gefunden." : "No relevant conflicts found after applying the 75% rule."}</p>`;
        return;
    }

    container.innerHTML = conflicts.map(item => {
        const name = item.name[currentLang] || item.name.de;
        const valuesHtml = Object.entries(item.values)
            .filter(([, v]) => v.f !== null && v.f !== undefined)
            .sort((a, b) => (SOURCES[b[0]].year || 0) - (SOURCES[a[0]].year || 0))
            .map(([srcId, v]) => {
                const yearTag = SOURCES[srcId].year ? ` (${SOURCES[srcId].year})` : "";
                return `<div class="conflict-value"><span class="source-name">[${srcId}] ${SOURCES[srcId].name}${yearTag}:</span> F: ${v.f}g${v.g !== null && v.g !== undefined ? ", G: " + v.g + "g" : ""}${v.s !== null && v.s !== undefined ? ", S: " + v.s + "g" : ""}</div>`;
            }).join("");
        return `<div class="conflict-item"><h3>${name}</h3><div class="conflict-values">${valuesHtml}</div></div>`;
    }).join("");
}

function filterTable() { renderTable(); }

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

// === PDF EXPORT WITH COLUMN SELECTION AND SORTING ===

// Helper: get numeric sort value for an item by field
// For fructose, glucose, sorbit: use MAX value (Oberwert)
// For G/F ratio: use MIN value (Unterwert)
function getSortValue(item, field) {
    const values = Object.values(item.values);
    if (field === "fructose") {
        const nums = values.map(v => v.f).filter(v => v !== null && v !== undefined);
        return nums.length > 0 ? Math.max(...nums) : -Infinity;
    } else if (field === "glucose") {
        const nums = values.map(v => v.g).filter(v => v !== null && v !== undefined);
        return nums.length > 0 ? Math.max(...nums) : -Infinity;
    } else if (field === "sorbit") {
        const nums = values.map(v => v.s).filter(v => v !== null && v !== undefined);
        return nums.length > 0 ? Math.max(...nums) : -Infinity;
    } else if (field === "ratio") {
        const nums = getGfValues(item);
        return nums.length > 0 ? Math.min(...nums) : -Infinity;
    } else if (field === "food") {
        return (item.name[currentLang] || item.name.de).toLowerCase();
    } else if (field === "category") {
        return item.category;
    }
    return 0;
}

function exportPDF() {
    const modal = document.getElementById("export-modal");
    modal.style.display = "flex";
    document.getElementById("modal-title").textContent = t("exportDialogTitle");
    document.getElementById("modal-col-label").textContent = t("exportColumns");
    document.getElementById("modal-sort-label").textContent = t("sortLabel");
    document.getElementById("modal-export-btn").textContent = t("exportBtn");
    document.getElementById("modal-cancel-btn").textContent = t("cancelBtn");
    document.getElementById("lbl-col-food").textContent = t("colFood");
    document.getElementById("lbl-col-category").textContent = t("colCategory");
    document.getElementById("lbl-col-fructose").textContent = t("colFructose");
    document.getElementById("lbl-col-glucose").textContent = t("colGlucose");
    document.getElementById("lbl-col-ratio").textContent = t("colRatio");
    document.getElementById("lbl-col-sorbit").textContent = t("colSorbit");
    document.getElementById("lbl-col-sources").textContent = t("colSources");
    document.getElementById("lbl-col-conflict").textContent = t("colConflict");
    // Update sort dropdown options
    const sortSelect = document.getElementById("sort-field");
    sortSelect.innerHTML = `
        <option value="none">${t("sortNone")}</option>
        <option value="food">${t("colFood")}</option>
        <option value="category">${t("colCategory")}</option>
        <option value="glucose">${t("colGlucose")}</option>
        <option value="fructose">${t("colFructose")}</option>
        <option value="sorbit">${t("colSorbit")}</option>
        <option value="ratio">${t("colRatio")}</option>
    `;
    document.getElementById("lbl-sort-asc").textContent = t("sortAsc");
    document.getElementById("lbl-sort-desc").textContent = t("sortDesc");
}

function cancelExport() {
    document.getElementById("export-modal").style.display = "none";
}

function doExport() {
    const modal = document.getElementById("export-modal");
    modal.style.display = "none";

    const cols = {
        food: document.getElementById("col-food").checked,
        category: document.getElementById("col-category").checked,
        fructose: document.getElementById("col-fructose").checked,
        glucose: document.getElementById("col-glucose").checked,
        ratio: document.getElementById("col-ratio").checked,
        sorbit: document.getElementById("col-sorbit").checked,
        sources: document.getElementById("col-sources").checked,
        conflict: document.getElementById("col-conflict").checked
    };

    const sortField = document.getElementById("sort-field").value;
    const sortDir = document.querySelector('input[name="sort-dir"]:checked').value;

    const selectedIndices = [];
    document.querySelectorAll(".row-cb:checked").forEach(cb => {
        selectedIndices.push(parseInt(cb.dataset.idx));
    });
    let dataToExport = selectedIndices.length > 0
        ? selectedIndices.map(i => FOOD_DATA[i])
        : [...FOOD_DATA];

    // Apply sorting
    if (sortField !== "none") {
        dataToExport = [...dataToExport].sort((a, b) => {
            const valA = getSortValue(a, sortField);
            const valB = getSortValue(b, sortField);
            return compareSortValues(valA, valB, sortDir);
        });
    }

    // Filter out entries that have no numeric values for any selected numeric column
    const numericColsSelected = [
        cols.fructose && "fructose",
        cols.glucose && "glucose",
        cols.ratio && "ratio",
        cols.sorbit && "sorbit"
    ].filter(Boolean);

    if (numericColsSelected.length > 0) {
        dataToExport = dataToExport.filter(item => {
            // Keep item if it has at least one numeric value in any selected numeric column
            return numericColsSelected.some(col => {
                const values = Object.values(item.values);
                if (col === "fructose") return values.some(v => v.f !== null && v.f !== undefined);
                if (col === "glucose") return values.some(v => v.g !== null && v.g !== undefined);
                if (col === "ratio") return getGfValues(item).length > 0;
                if (col === "sorbit") return values.some(v => v.s !== null && v.s !== undefined);
                return false;
            });
        });
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

    doc.setFontSize(16);
    doc.text(t("pdfTitle"), 14, 15);
    doc.setFontSize(9);
    doc.text(t("pdfGenerated") + ": " + new Date().toLocaleDateString(currentLang === "de" ? "de-DE" : "en-US"), 14, 22);

    const headers = [];
    if (cols.food) headers.push(t("colFood"));
    if (cols.category) headers.push(t("colCategory"));
    if (cols.glucose) headers.push(t("colGlucose"));
    if (cols.fructose) headers.push(t("colFructose"));
    if (cols.sorbit) headers.push(t("colSorbit"));
    if (cols.ratio) headers.push(t("colRatio"));
    if (cols.sources) headers.push(t("colSources"));
    if (cols.conflict) headers.push(t("colConflict"));

    const rows = dataToExport.map(item => {
        const row = [];
        const name = item.name[currentLang] || item.name.de;
        const catLabel = t("categories")[item.category] || item.category;
        const sourceIds = Object.keys(item.values).map(Number).join(", ");
        const conflict = hasConflict(item) ? t("yes") : t("no");
        if (cols.food) row.push(name);
        if (cols.category) row.push(catLabel);
        if (cols.glucose) row.push(getGlucoseRange(item));
        if (cols.fructose) row.push(getFructoseRange(item));
        if (cols.sorbit) row.push(getSorbitRange(item));
        if (cols.ratio) row.push(getRatioRange(item));
        if (cols.sources) row.push(sourceIds);
        if (cols.conflict) row.push(conflict);
        return row;
    });

    doc.autoTable({
        head: [headers],
        body: rows,
        startY: 27,
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [44, 122, 63] },
        alternateRowStyles: { fillColor: [245, 250, 245] },
        didParseCell: function(data) {
            if (cols.ratio && data.section === "body") {
                const ratioColIdx = headers.indexOf(t("colRatio"));
                if (data.column.index === ratioColIdx && parseFloat(data.cell.raw) > 1) {
                    data.cell.styles.fillColor = [200, 240, 200];
                }
            }
            if (cols.conflict && data.section === "body") {
                const conflictColIdx = headers.indexOf(t("colConflict"));
                if (data.column.index === conflictColIdx && data.cell.raw === t("yes")) {
                    data.cell.styles.fillColor = [255, 243, 205];
                    data.cell.styles.textColor = [230, 81, 0];
                }
            }
        }
    });

    // Sources page
    doc.addPage();
    doc.setFontSize(14);
    doc.text(t("sourcesTitle"), 14, 15);
    doc.setFontSize(9);
    let y = 25;
    Object.entries(SOURCES).forEach(([id, src]) => {
        doc.text("[" + id + "] " + src.name + (src.year ? " (" + src.year + ")" : ""), 14, y);
        doc.setTextColor(0, 100, 0);
        doc.text("    " + src.url, 14, y + 4);
        doc.setTextColor(0, 0, 0);
        y += 10;
    });

    doc.save("fructosegehalt-lebensmittel.pdf");
}

function renderSources() {
    document.getElementById("sources-list").innerHTML = Object.values(SOURCES).map(src =>
        `<li><a href="${src.url}" target="_blank" rel="noopener">${src.name}</a>${src.type === "pdf" ? " (PDF)" : ""}</li>`
    ).join("");
}

// === INIT ===
document.addEventListener("DOMContentLoaded", function() {
    renderSources();
    renderTable();
    renderConflicts();
});
