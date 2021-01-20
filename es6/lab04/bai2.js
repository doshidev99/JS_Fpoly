const axios = required("axios");
// 1/
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return result;
}

// 2
async function fetchUrlsParallel(urls) {
  const resuls = await Promise.all(
    urls.map((url) => {
      return axios.get(url);
    })
  );
  return resuls;
}

// Cách 1 sử dụng async await
// Cách 2 sử dụng promise all
// Về kết quả mong đợi là loop qua từng url sau đó sử dụng axios để get theo url trả về result
// Với Promise All thì sẽ trả về result sau khi toàn bộ url trong "urls" được thực thi hết.
// Với Async - Await từng element sau khi loop sẽ được axios call và trả về result.
// nếu trường hợp có bất kì url nào xảy ra lỗi thì các url được thực thi trước đó vẫn đã được lưu data trả về vào result
