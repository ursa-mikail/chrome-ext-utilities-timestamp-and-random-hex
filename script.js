document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generateTimestampBtn').addEventListener('click', generateTimestamp);
    document.getElementById('generateRandomHexBtn').addEventListener('click', generateRandomHex);
    document.getElementById('generate50BytesHexBtn').addEventListener('click', generate50BytesHex);
});

function generateTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timestamp = `${year}-${month}.${day}_${hours}${minutes}_${seconds}`;
    document.getElementById('timestampOutput').innerText = timestamp;
}

function generateRandomHex() {
    const numBytes = document.getElementById('bytes').value;
    if (numBytes < 1) {
        alert('Please enter a valid number of bytes.');
        return;
    }

    const randomBytes = new Uint8Array(numBytes);
    crypto.getRandomValues(randomBytes);
    const hexString = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
    document.getElementById('hexOutput').innerText = hexString;
}

function generate50BytesHex() {
    const numBytes = 50;
    const randomBytes = new Uint8Array(numBytes);
    crypto.getRandomValues(randomBytes);
    const hexString = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
    document.getElementById('output').innerText = hexString;
}
