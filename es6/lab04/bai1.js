let promise = new Promise((res, rej) => {
  res(1);
  setTimeout(() => res(2), 1000);
});

promise.then(alert);
// Kết quả bằng 1
