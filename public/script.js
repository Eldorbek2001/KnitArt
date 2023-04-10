// Define thread properties
const threadColor = "red";
const threadWidth = 2;



function draw(){
    console.log("drawing");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = 400;
    canvas.height = 400;

    // Define nail properties
    const nailRadius = 3;
    const nailCount = 100;
    const nailSpacing = (2 * Math.PI) / nailCount;

    // Draw nails on the edge of the canvas
    for (let i = 0; i < nailCount; i++) {
        const x = Math.cos(i * nailSpacing) * (canvas.width / 2 - nailRadius) + canvas.width / 2;
        const y = Math.sin(i * nailSpacing) * (canvas.height / 2 - nailRadius) + canvas.height / 2;

        ctx.beginPath();
        ctx.arc(x, y, nailRadius, 0, 2 * Math.PI);
        ctx.fill();
    }
}


function drawThread(nailOne, nailTwo) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    var nailSpacing = (2 * Math.PI) / 100;
    const nailRadius = 3;
    const nailCount = 100;
    const x1 = Math.cos(nailOne * nailSpacing) * (canvas.width / 2 - nailRadius) + canvas.width / 2;
    const y1 = Math.sin(nailOne * nailSpacing) * (canvas.height / 2 - nailRadius) + canvas.height / 2;

    const x2 = Math.cos(nailTwo * nailSpacing) * (canvas.width / 2 - nailRadius) + canvas.width / 2;
    const y2 = Math.sin(nailTwo * nailSpacing) * (canvas.height / 2 - nailRadius) + canvas.height / 2;

    ctx.beginPath();
    ctx.strokeStyle = threadColor;
    ctx.lineWidth = threadWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}