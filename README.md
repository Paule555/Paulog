# Paulog – Workout Tracker

Dein persönlicher Push/Pull/Legs Tracker als Progressive Web App.

---

## 🚀 Deployment auf GitHub Pages (Schritt für Schritt)

### 1. GitHub-Account erstellen (falls noch nicht vorhanden)
→ https://github.com/signup

### 2. Neues Repository erstellen
- Gehe zu https://github.com/new
- **Repository name:** `paulog` (oder ein anderer Name)
- **Public** auswählen (muss öffentlich sein für kostenlose GitHub Pages)
- Haken bei **"Add a README file"** NICHT setzen
- Klick auf **"Create repository"**

### 3. Dateien hochladen
- Auf der Repository-Seite klicke auf **"uploading an existing file"**
- Ziehe alle 5 Dateien aus dem `paulog`-Ordner per Drag & Drop hinein:
  - `index.html`
  - `manifest.json`
  - `sw.js`
  - `icon-192.png`
  - `icon-512.png`
- Klick auf **"Commit changes"**

### 4. GitHub Pages aktivieren
- Gehe zu **Settings** → **Pages** (linke Seitenleiste)
- Unter **"Source"** wähle: **Deploy from a branch**
- Branch: **main** / Ordner: **/ (root)**
- Klick auf **Save**

### 5. Fertig! 🎉
- Nach ca. 1-2 Minuten ist deine App live unter:
  **`https://DEIN-USERNAME.github.io/paulog/`**

---

## 📱 App auf dem Handy installieren

### iPhone (Safari)
1. Öffne die URL in Safari
2. Tippe auf das **Teilen-Symbol** (Quadrat mit Pfeil nach oben)
3. Scrolle runter und tippe auf **"Zum Home-Bildschirm"**
4. Tippe auf **"Hinzufügen"**

### Android (Chrome)
1. Öffne die URL in Chrome
2. Tippe auf die **drei Punkte** oben rechts
3. Tippe auf **"App installieren"** oder **"Zum Startbildschirm hinzufügen"**
4. Bestätigen

Die App erscheint als Icon auf deinem Homescreen und startet ohne Browser-Leiste – wie eine richtige App.

---

## 📦 Was ist in den Dateien?

| Datei | Funktion |
|-------|----------|
| `index.html` | Die komplette App (HTML + React + Styles) |
| `manifest.json` | PWA-Konfiguration (Name, Farben, Icons) |
| `sw.js` | Service Worker für Offline-Nutzung |
| `icon-192.png` | App-Icon (192×192) |
| `icon-512.png` | App-Icon (512×512) |

---

## 💾 Datenspeicherung & Backup

Alle Daten werden im **localStorage** deines Browsers gespeichert – sie bleiben auf deinem Gerät und werden nicht an einen Server gesendet.

- ✅ Deine Daten sind privat
- ✅ Funktioniert offline

Die App hat eine eingebaute **Backup & Restore**-Funktion:

- **Export:** Speichert alle Daten als JSON-Datei. Lege die Datei in iCloud, Google Drive o.ä. ab.
- **Import:** Lade eine Backup-Datei, um Daten wiederherzustellen – wahlweise zusammenführen oder ersetzen.
- **Erinnerung:** Die App erinnert dich alle 2 Wochen automatisch an ein Backup.

⚠️ Ohne Backup gehen Daten verloren, wenn du den Browser-Cache löschst oder das Gerät wechselst.

---

## 🔧 Anpassungen

Du kannst den Trainingsplan direkt in der `index.html` anpassen. Suche nach dem `PLAN`-Objekt am Anfang des Scripts und ändere die Übungen nach Bedarf.
