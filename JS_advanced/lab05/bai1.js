const tasks = new Promise((resolve) => setTimeout(resolve, 500));

tasks
  .then(() => {
    console.log("b1.Đã ngủ dậy!");
  })
  .then(() => {
    console.log("b2. Đang đánh răng");

    return new Promise((resolve) => {
      console.log("Đã đánh răng xong!");
      setTimeout(resolve, 2000);
    });
  })
  .then(() => {
    console.log("b3. Đang thay quan ao");

    return new Promise((resolve) => {
      console.log("Đã thay quần áo xong!");
      setTimeout(resolve, 700);
    });
  })
  .then(() => new Promise((resolve) => {
    console.log("b4. Đang di chuyển...");
    
    setTimeout(resolve, 800);
  }))
  .then(() => {
    console.log("Đã đến trường!");
  });
