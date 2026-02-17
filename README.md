# 🚀 Coding Culture Oberberg

> **Programmieren als Kulturtechnik verankern.**
> Eine Sammlung aus didaktischen Konzepten, einer interaktiven Web-App und einem begleitenden Fachbuch für den Informatikunterricht der Klassen 5–7.

[![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)]()
[![Tech: Svelte](https://img.shields.io/badge/Web_App-Svelte-orange.svg)]()
[![Tech: LaTeX](https://img.shields.io/badge/Book-LaTeX-blue.svg)]()

---

## 📖 Über das Projekt

**Coding Culture Oberberg** zielt darauf ab, Informatik greifbar, motivierend und inklusiv zu gestalten. Gefördert durch die **Hans Hermann Voss Stiftung**, entwickelt dieses Projekt Materialien, die speziell auf die Anforderungen der Lehrpläne in NRW (Sekundarstufe I) abgestimmt sind.

Dieses Repository ist ein Monorepo und beinhaltet zwei Hauptkomponenten:
1.  **Die Web-App:** Eine Plattform für Lehrkräfte mit Projekt-Datenbank, Vorlagen und didaktischen Mustern.
2.  **Das Buch:** Die theoretische und wissenschaftliche Aufarbeitung, geschrieben in LaTeX.

---

## 📂 Repository Struktur

```text
coding-culture-oberberg/
├── 💻 app/              # Source Code der Web-Anwendung (SvelteKit)
│   ├── src/
│   ├── static/
│   └── package.json
│
├── 📚 booklet/             # LaTeX Source Code des Buchs
│   └── book.tex         # Hauptdatei
│   └── main.pdf         # Kompilierte PDF
│
└── README.md            # Diese Datei
```

---

## 💻 Teil 1: Die Web App

Die Web-App dient als zentraler Hub für Lehrkräfte. Sie bietet gefilterte Projektübersichten, Downloads und didaktische Guides.

### Tech Stack
* **Framework:** [SvelteKit](https://kit.svelte.dev/)
* **Styling:** Tailwind CSS & shadcn/ui
* **Deployment:** GitHub Pages
* **Datenhaltung:** JSON-basiert (Flat File)

### Installation & Entwicklung

Um die App lokal zu starten:

1.  In das App-Verzeichnis wechseln:
    ```bash
    cd app
    ```
2.  Abhängigkeiten installieren:
    ```bash
    npm install
    ```
3.  Development Server starten:
    ```bash
    npm run dev
    ```
    Die App ist nun unter `http://localhost:5173` erreichbar.

---

## 📚 Teil 2: Das Buch

Das Buch dokumentiert die didaktischen Grundlagen, die Ergebnisse der Lehrkräfte-Interviews und die detaillierten Workshop-Konzepte.

### Kompilieren (LaTeX)

Voraussetzung ist eine installierte TeX-Distribution (z.B. TeX Live, MiKTeX).

1.  In das Buch-Verzeichnis wechseln:
    ```bash
    cd book
    ```
2.  PDF generieren:
    ```bash
    pdflatex main.tex
    # Empfohlen: Befehl 2x ausführen, damit Inhaltsverzeichnisse korrekt sind.
    ```

---

## 🤝 Contribution (Mitmachen)

Wir freuen uns über Beiträge! Da dieses Projekt als Open Educational Resource (OER) gedacht ist, lebt es von der Community.

### Neue Projekte hinzufügen
Du hast eine tolle Projektidee für den Unterricht? Füge sie zur App hinzu, ohne Programmieren zu müssen!
1.  Öffne die Datei `app/static/data/template.json`.
2.  Erstelle einen neuen Eintrag basierend auf dem Schema im Ordner `app/src/lib/data/projects/`.
3.  Erstelle einen **Pull Request**.

### Code verbessern: Erstelle Pull Requests für die Web-App.

### Inhalte korrigieren: Findest du Fehler im Buch oder in den Vorlagen? Melde sie über die "Issues".

---

Gefördert durch: Hans Hermann Voss Stiftung
