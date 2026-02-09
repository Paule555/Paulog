# Paulog – Workout Tracker

  **`https://paule555.github.io/Paulog/`**

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
