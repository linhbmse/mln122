import React, { useEffect, useRef } from 'react';

/**
 * Component to render the vintage book cover design to a canvas
 * This creates the cover texture that will be used on the 3D book
 */
export const createCoverTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1376; // 3:4 aspect ratio to match page ratio

  const ctx = canvas.getContext('2d');

  // Paper background - vintage amber
  ctx.fillStyle = '#FEF3C7';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Paper texture - subtle grid
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.02)';
  ctx.lineWidth = 1;
  for (let i = 0; i < canvas.width; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }
  for (let i = 0; i < canvas.height; i += 20) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  // Outer border
  ctx.strokeStyle = '#7F1D1D';
  ctx.lineWidth = 12;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Inner border
  ctx.strokeStyle = '#991B1B';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

  // Corner decorations
  const cornerSize = 60;
  const corners = [
    { x: 50, y: 50 }, // top-left
    { x: canvas.width - 50 - cornerSize, y: 50 }, // top-right
    { x: 50, y: canvas.height - 50 - cornerSize }, // bottom-left
    { x: canvas.width - 50 - cornerSize, y: canvas.height - 50 - cornerSize }, // bottom-right
  ];

  ctx.strokeStyle = '#7F1D1D';
  ctx.lineWidth = 3;
  corners.forEach((corner, idx) => {
    ctx.beginPath();
    if (idx === 0) {
      // top-left
      ctx.moveTo(corner.x, corner.y + cornerSize);
      ctx.lineTo(corner.x, corner.y);
      ctx.lineTo(corner.x + cornerSize, corner.y);
    } else if (idx === 1) {
      // top-right
      ctx.moveTo(corner.x + cornerSize, corner.y);
      ctx.lineTo(corner.x, corner.y);
      ctx.lineTo(corner.x, corner.y + cornerSize);
    } else if (idx === 2) {
      // bottom-left
      ctx.moveTo(corner.x, corner.y);
      ctx.lineTo(corner.x, corner.y + cornerSize);
      ctx.lineTo(corner.x + cornerSize, corner.y + cornerSize);
    } else {
      // bottom-right
      ctx.moveTo(corner.x + cornerSize, corner.y + cornerSize);
      ctx.lineTo(corner.x, corner.y + cornerSize);
      ctx.lineTo(corner.x, corner.y);
    }
    ctx.stroke();
  });

  // Star icon at top
  const starX = canvas.width / 2;
  const starY = 150;
  drawStar(ctx, starX, starY, 5, 40, 20);

  // Decorative line
  ctx.strokeStyle = '#7F1D1D';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 100, starY + 80);
  ctx.lineTo(canvas.width / 2 + 100, starY + 80);
  ctx.stroke();

  // Main title
  ctx.fillStyle = '#7F1D1D';
  ctx.font = 'bold 80px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('KINH TẾ', canvas.width / 2, starY + 180);
  ctx.fillText('CHÍNH TRỊ', canvas.width / 2, starY + 280);

  // Subtitle
  ctx.fillStyle = '#991B1B';
  ctx.font = 'bold 70px Georgia, serif';
  ctx.fillText('MARX - LENIN', canvas.width / 2, starY + 420);

  // Quote
  ctx.fillStyle = '#1F2937';
  ctx.font = 'italic 32px Georgia, serif';
  ctx.fillText('"Nền tảng tư tưởng của', canvas.width / 2, starY + 520);
  ctx.fillText('chủ nghĩa xã hội khoa học"', canvas.width / 2, starY + 570);

  // Communist symbol in center
  ctx.fillStyle = '#7F1D1D';
  ctx.font = 'bold 120px Arial';
  ctx.fillText('☭', canvas.width / 2, canvas.height - 200);

  return canvas.toDataURL();
};

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
    rot += step;

    ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = '#991B1B';
  ctx.fill();
  ctx.strokeStyle = '#7F1D1D';
  ctx.lineWidth = 2;
  ctx.stroke();
}
