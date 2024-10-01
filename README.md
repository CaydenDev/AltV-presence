# Übersicht/Oversight
- [English](#English)
- [German](#Deutsch)


# English

This project implements Discord Rich Presence in an Alt:V client to display the status of players in a game. This documentation explains the basic functions and usage of the script.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Types](#types)

## Installation

1. **Set up the project**
   - Ensure you have Node.js and npm installed.
   - Create a new Alt:V project or navigate to your existing project directory.

2. **Install dependencies**
   ```bash
   npm install discord-rich-presence
   ```

3. **Add the script**
   - Create a file named `discordRichPresence.ts` (or another desired name) in the `client` directory of your Alt:V project and add the Rich Presence code.

4. **Discord Client ID** 
   - Replace `YOUR_CLIENT_ID` in the script with your actual Discord application client ID.

5. **Add the script to server.cfg**
   ```plaintext
   start discordRichPresence
   ```

## Usage

The script automatically updates the Rich Presence status based on the player's status. It is attached to various player events:

- Player connects and disconnects
- Game start and end

## Functions

- **updatePresence()**: Updates the Rich Presence status based on the current player status.
- **playerConnect**: Reacts to a player connecting, updates the status and player count.
- **playerDisconnect**: Reacts to a player disconnecting and updates the status accordingly.
- **gameStart**: Sets the status when a game starts.
- **gameEnd**: Sets the status when a game ends.

## Types

The script defines an interface for player states:

```typescript
interface PlayerState {
    isPlaying: boolean;       // Indicates whether the player is currently playing.
    currentGame: string;      // The name of the current game.
    partySize: number;        // The number of active players in the group.
    maxPartySize: number;     // The maximum number of players in the group.
    startTime: number | null; // The timestamp when the game started (null if not playing).
}
```

## License

This script is intended for use in Alt:V projects. Be sure to follow Discord's guidelines for Rich Presence API usage.
This script is Licensed under the MIT License.



# Deutsch

Dieses Projekt implementiert Discord Rich Presence in einem Alt:V-Client, um den Status der Spieler in einem Spiel anzuzeigen. Diese Dokumentation beschreibt die grundlegenden Funktionen und die Nutzung des Skripts.

## Inhaltsverzeichnis

- [Installation](#installation)
- [Verwendung](#verwendung)
- [Funktionen](#funktionen)
- [Typen](#typen)

## Installation

1. **Projekt einrichten**
   - Stelle sicher, dass du Node.js und npm installiert hast.
   - Erstelle ein neues Alt:V-Projekt oder gehe zu deinem bestehenden Projektverzeichnis.

2. **Abhängigkeiten installieren**
   ```bash
   npm install discord-rich-presence
   ```

3. **Skript hinzufügen**
   - Erstelle eine Datei namens `discordRichPresence.ts` (oder einen anderen gewünschten Namen) im `client`-Verzeichnis deines Alt:V-Projekts und füge den Rich Presence Code ein.

4. **Discord Client ID** 
   - Ersetze `YOUR_CLIENT_ID` im Skript mit deiner tatsächlichen Discord-Anwendungs-Client-ID.

5. **Skript in server.cfg einfügen**
   ```plaintext
   start discordRichPresence
   ```

## Verwendung

Das Skript aktualisiert automatisch den Rich Presence-Status basierend auf dem Status des Spielers. Es wird an verschiedenen Spielerereignissen angehängt:

- Spieler verbinden und trennen
- Spielstart und Spielende

## Funktionen

- **updatePresence()**: Aktualisiert den Rich Presence-Status basierend auf dem aktuellen Status des Spielers.
- **playerConnect**: Reagiert auf die Verbindung eines Spielers, aktualisiert den Status und die Spieleranzahl.
- **playerDisconnect**: Reagiert auf das Trennen eines Spielers und aktualisiert den Status entsprechend.
- **gameStart**: Setzt den Status, wenn ein Spiel begonnen wird.
- **gameEnd**: Setzt den Status, wenn ein Spiel beendet wird.

## Typen

Das Skript definiert eine Schnittstelle für die Spielerzustände:

```typescript
interface PlayerState {
    isPlaying: boolean;       // Gibt an, ob der Spieler gerade spielt.
    currentGame: string;      // Der Name des aktuellen Spiels.
    partySize: number;        // Die Anzahl der aktiven Spieler in der Gruppe.
    maxPartySize: number;     // Die maximale Anzahl der Spieler in der Gruppe.
    startTime: number | null; // Der Zeitstempel, wann das Spiel begonnen hat (null, wenn nicht spielend).
}
```

## Lizenz

Dieses Skript ist für die Verwendung in Alt:V-Projekten gedacht. Achte darauf, die Discord-Richtlinien für die Rich Presence API einzuhalten.
Das Skript ist unter der MIT License Lizensiert.
