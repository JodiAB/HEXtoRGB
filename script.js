function convertHexToRgb() {
    const hexInput = document.getElementById('hexInput').value;
    const rgbOutput = document.getElementById('rgbOutput');

    // Remove the '#'
    const hex = hexInput.replace('#', '');

    // Is hex value is valid?
    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        rgbOutput.textContent = `RGB: (${r}, ${g}, ${b})`;
    } else {
        document.body.style.backgroundColor = '#111'; // bg color
        rgbOutput.textContent = 'Invalid HEX value';
    }
}
