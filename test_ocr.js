// import Tesseract from 'tesseract.js';

// Tesseract.recognize(
//   'https://image.slidesharecdn.com/thithchnhvnbntingvit-150520151404-lva1-app6892/95/thi-thc-hnh-vn-bn-ting-vit-1-638.jpg?cb=1432134896',
//   'eng',
//   { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//   console.log(text);
// })

const { createWorker } = require('tesseract.js');

const worker = createWorker({
  langPath: 'D:/2019/Tesseract.js/',
  logger: m => console.log(m), // Add logger here
});

(async () => {
  await worker.load();
  await worker.loadLanguage('vie');
  await worker.initialize('vie');
  const { data: { text } } = await worker.recognize('D:/2019/Tesseract.js/Sach-Giao-Khoa-Ngu-Van-Lop-12-Tap-2-Co-Ban-Trang-179.png');
  console.log(text);
  await worker.terminate();
})();