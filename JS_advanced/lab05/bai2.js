const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* doTasks() {
  yield delay(500);
  console.log("b1.Đã ngủ dậy!");
  console.log("b2. Đang đánh răng");
  yield delay(2000);
  console.log("Đã đánh răng xong!");
  console.log("b3. Đang thay quan ao");
  yield delay(700);
  console.log("Đã thay quần áo xong!");
  console.log("b4. Đang di chuyển...");
  yield delay(800);
  console.log("Đã đến trường!");
}

const iterator = doTasks();
while (!iterator.done) {
  iterator.next();
}
