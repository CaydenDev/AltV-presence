import * as alt from 'alt-client';
import * as RichPresence from 'discord-rich-presence';

const clientID = ''; // Discord clientID hinzufügen, siehe Dokumentation.
const presence = RichPresence(clientID);

interface PlayerState {
    isPlaying: boolean;
    currentGame: string;
    partySize: number;
    maxPartySize: number;
    startTime: number | null;
}

let playerState: PlayerState = {
    isPlaying: false,
    currentGame: '',
    partySize: 0,
    maxPartySize: 10,
    startTime: null,
};

function updatePresence() {
    presence.update({
        details: playerState.isPlaying ? `Playing ${playerState.currentGame}` : 'Idle',
        state: playerState.isPlaying ? `In a match` : `Looking for a game`,
        startTimestamp: playerState.isPlaying ? playerState.startTime : null,
        largeImageKey: playerState.isPlaying ? 'game_image' : 'idle_image',
        largeImageText: playerState.isPlaying ? `Join the game!` : `Not playing`,
        smallImageKey: 'logo_image',
        smallImageText: 'Game Logo',
        partyId: `party_${alt.Player.local.id}`,
        partySize: playerState.partySize,
        partyMax: playerState.maxPartySize,
    });
}

alt.on('playerConnect', () => {
    playerState.partySize++;
    playerState.startTime = Date.now();
    playerState.isPlaying = true;
    playerState.currentGame = 'Alt:V';
    updatePresence();
});

alt.on('playerDisconnect', () => {
    playerState.partySize--;
    if (playerState.partySize <= 0) {
        playerState.isPlaying = false;
        presence.destroy();
    } else {
        updatePresence();
    }
});

alt.on('gameStart', () => {
    playerState.isPlaying = true;
    playerState.startTime = Date.now();
    playerState.currentGame = 'Team Deathmatch';
    updatePresence();
});

alt.on('gameEnd', () => {
    playerState.isPlaying = false;
    updatePresence();
});

setInterval(updatePresence, 15000);
